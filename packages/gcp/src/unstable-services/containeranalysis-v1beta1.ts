// ==========================================================================
// Container Analysis API (containeranalysis v1beta1)
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
  version: "v1beta1",
  rootUrl: "https://containeranalysis.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ProjectRepoId {
  /** The ID of the project. */
  projectId?: string;
  /** The name of the repo. Leave empty for the default repo. */
  repoName?: string;
}

export const ProjectRepoId: Schema.Schema<ProjectRepoId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    repoName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProjectRepoId" });

export interface LicensesSummary {
  /** The license of the package. Note that the format of this value is not guaranteed. It may be nil, an empty string, a boolean value (A | B), a differently formed boolean value (A OR B), etc... */
  license?: string;
  /** The number of fixable vulnerabilities associated with this resource. */
  count?: string;
}

export const LicensesSummary: Schema.Schema<LicensesSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    license: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
  }).annotate({ identifier: "LicensesSummary" });

export interface PackagesSummaryResponse {
  /** The unique URL of the image or the container for which this summary applies. */
  resourceUrl?: string;
  /** A listing by license name of each of the licenses and their counts. */
  licensesSummary?: ReadonlyArray<LicensesSummary>;
}

export const PackagesSummaryResponse: Schema.Schema<PackagesSummaryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUrl: Schema.optional(Schema.String),
    licensesSummary: Schema.optional(Schema.Array(LicensesSummary)),
  }).annotate({ identifier: "PackagesSummaryResponse" });

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

export const RelationshipNote: Schema.Schema<RelationshipNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "RelationshipNote" });

export interface GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata {
  /** Output only. The time this operation was created. */
  createTime?: string;
  /** Output only. The time that this operation was marked completed or failed. */
  endTime?: string;
}

export const GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata: Schema.Schema<GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource {
  /** Required. Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote. */
  url?: string;
  /** Optional. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch. */
  revision?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig {
  /** Required. The Developer Connect Git repository link, formatted as `projects/* /locations/* /connections/* /gitRepositoryLink/*`. */
  gitRepositoryLink?: string;
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
  /** Required. Directory, relative to the source root, in which to run the build. */
  dir?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitRepositoryLink: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource {
  /** Required. Cloud Storage object containing the source. This object must be a zipped (`.zip`) or gzipped archive file (`.tar.gz`) containing source to build. */
  object?: string;
  /** Optional. Option to specify the tool to fetch the source file for the build. */
  sourceFetcher?:
    | "SOURCE_FETCHER_UNSPECIFIED"
    | "GSUTIL"
    | "GCS_FETCHER"
    | (string & {});
  /** Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
  /** Optional. Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    sourceFetcher: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource {
  /** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  branchName?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
  /** Optional. ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
  projectId?: string;
  /** Required. Name of the Cloud Source Repository. */
  repoName?: string;
  /** Optional. Substitutions to use in a triggered build. Should only be used with RunBuildTrigger */
  substitutions?: Record<string, string>;
  /** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  tagName?: string;
  /** Explicit commit SHA to build. */
  commitSha?: string;
  /** Optional. Only trigger a build if the revision regex does NOT match the revision regex. */
  invertRegex?: boolean;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branchName: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    repoName: Schema.optional(Schema.String),
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tagName: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
    invertRegex: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository {
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
  /** Required. Name of the Google Cloud Build repository, formatted as `projects/* /locations/* /connections/* /repositories/*`. */
  repository?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. */
  dir?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revision: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest {
  /** Required. Cloud Storage object containing the source manifest. This object must be a JSON file. */
  object?: string;
  /** Required. Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
  /** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Source {
  /** If provided, get the source from this Git repository. */
  gitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;
  /** If provided, get the source from this Developer Connect config. */
  developerConnectConfig?: ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig;
  /** If provided, get the source from this location in Cloud Storage. */
  storageSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;
  /** If provided, get the source from this location in a Cloud Source Repository. */
  repoSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;
  /** Optional. If provided, get the source from this 2nd-gen Google Cloud Build repository resource. */
  connectedRepository?: ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;
  /** If provided, get the source from this manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
  storageSourceManifest?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Source: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gitSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource,
    ),
    developerConnectConfig: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig,
    ),
    storageSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource,
    ),
    repoSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource,
    ),
    connectedRepository: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository,
    ),
    storageSourceManifest: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Source",
  });

export interface License {
  /** Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2". */
  expression?: string;
  /** Comments */
  comments?: string;
}

export const License: Schema.Schema<License> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    comments: Schema.optional(Schema.String),
  }).annotate({ identifier: "License" });

export interface PackageInfoOccurrence {
  /** package or alternative values, if the governing license cannot be determined */
  licenseConcluded?: License;
  /** Output only. Identify the version of the package */
  version?: string;
  /** Provide the actual file name of the package, or path of the directory being treated as a package */
  filename?: string;
  /** Uniquely identify any element in an SPDX document which may be referenced by other elements */
  id?: string;
  /** Provide a place for the SPDX file creator to record any relevant background information or additional comments about the origin of the package */
  sourceInfo?: string;
  /** Output only. The type of package: OS, MAVEN, GO, GO_STDLIB, etc. */
  packageType?: string;
  /** A place for the SPDX file creator to record any general comments about the package being described */
  comment?: string;
  /** Output only. Identify the full name of the package as given by the Package Originator */
  title?: string;
  /** Output only. A short description of the package */
  summaryDescription?: string;
  /** Output only. Provide a place for the SPDX file creator to record a web site that serves as the package's home page */
  homePage?: string;
}

export const PackageInfoOccurrence: Schema.Schema<PackageInfoOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    licenseConcluded: Schema.optional(License),
    version: Schema.optional(Schema.String),
    filename: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    sourceInfo: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    summaryDescription: Schema.optional(Schema.String),
    homePage: Schema.optional(Schema.String),
  }).annotate({ identifier: "PackageInfoOccurrence" });

export interface ResourceDescriptor {
  annotations?: Record<string, unknown>;
  uri?: string;
  mediaType?: string;
  name?: string;
  downloadLocation?: string;
  digest?: Record<string, string>;
  content?: string;
}

export const ResourceDescriptor: Schema.Schema<ResourceDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    uri: Schema.optional(Schema.String),
    mediaType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    downloadLocation: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    content: Schema.optional(Schema.String),
  }).annotate({ identifier: "ResourceDescriptor" });

export interface ProvenanceBuilder {
  id?: string;
  builderDependencies?: ReadonlyArray<ResourceDescriptor>;
  version?: Record<string, string>;
}

export const ProvenanceBuilder: Schema.Schema<ProvenanceBuilder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    builderDependencies: Schema.optional(Schema.Array(ResourceDescriptor)),
    version: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ProvenanceBuilder" });

export interface Subject {
  /** `"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet */
  digest?: Record<string, string>;
  /** Identifier to distinguish this artifact from others within the subject. */
  name?: string;
}

export const Subject: Schema.Schema<Subject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Subject" });

export interface SbomReferenceIntotoPredicate {
  /** A map of algorithm to digest of the contents of the SBOM. */
  digest?: Record<string, string>;
  /** The person or system referring this predicate to the consumer. */
  referrerId?: string;
  /** The location of the SBOM. */
  location?: string;
  /** The mime type of the SBOM. */
  mimeType?: string;
}

export const SbomReferenceIntotoPredicate: Schema.Schema<SbomReferenceIntotoPredicate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    referrerId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
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

export const SbomReferenceIntotoPayload: Schema.Schema<SbomReferenceIntotoPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    _type: Schema.optional(Schema.String),
    predicateType: Schema.optional(Schema.String),
    subject: Schema.optional(Schema.Array(Subject)),
    predicate: Schema.optional(SbomReferenceIntotoPredicate),
  }).annotate({ identifier: "SbomReferenceIntotoPayload" });

export interface EnvelopeSignature {
  sig?: string;
  keyid?: string;
}

export const EnvelopeSignature: Schema.Schema<EnvelopeSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sig: Schema.optional(Schema.String),
    keyid: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvelopeSignature" });

export interface SBOMReferenceOccurrence {
  /** The actual payload that contains the SBOM reference data. */
  payload?: SbomReferenceIntotoPayload;
  /** The kind of payload that SbomReferenceIntotoPayload takes. Since it's in the intoto format, this value is expected to be 'application/vnd.in-toto+json'. */
  payloadType?: string;
  /** The signatures over the payload. */
  signatures?: ReadonlyArray<EnvelopeSignature>;
}

export const SBOMReferenceOccurrence: Schema.Schema<SBOMReferenceOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(SbomReferenceIntotoPayload),
    payloadType: Schema.optional(Schema.String),
    signatures: Schema.optional(Schema.Array(EnvelopeSignature)),
  }).annotate({ identifier: "SBOMReferenceOccurrence" });

export interface DocumentOccurrence {
  /** Identify name of this document as designated by creator */
  title?: string;
  /** Identify any external SPDX documents referenced within this SPDX document */
  externalDocumentRefs?: ReadonlyArray<string>;
  /** Identify when the SPDX file was originally created. The date is to be specified according to combined date and time in UTC format as specified in ISO 8601 standard */
  createTime?: string;
  /** Identify who (or what, in the case of a tool) created the SPDX file. If the SPDX file was created by an individual, indicate the person's name */
  creators?: ReadonlyArray<string>;
  /** Identify the current SPDX document which may be referenced in relationships by other files, packages internally and documents externally */
  id?: string;
  /** A field for creators of the SPDX file to provide the version of the SPDX License List used when the SPDX file was created */
  licenseListVersion?: string;
  /** Provide an SPDX document specific namespace as a unique absolute Uniform Resource Identifier (URI) as specified in RFC-3986, with the exception of the ‘#’ delimiter */
  namespace?: string;
  /** A field for creators of the SPDX file content to provide comments to the consumers of the SPDX document */
  documentComment?: string;
  /** A field for creators of the SPDX file to provide general comments about the creation of the SPDX file or any other relevant comment not included in the other fields */
  creatorComment?: string;
}

export const DocumentOccurrence: Schema.Schema<DocumentOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    externalDocumentRefs: Schema.optional(Schema.Array(Schema.String)),
    createTime: Schema.optional(Schema.String),
    creators: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    licenseListVersion: Schema.optional(Schema.String),
    namespace: Schema.optional(Schema.String),
    documentComment: Schema.optional(Schema.String),
    creatorComment: Schema.optional(Schema.String),
  }).annotate({ identifier: "DocumentOccurrence" });

export interface RelationshipOccurrence {
  /** A place for the SPDX file creator to record any general comments about the relationship */
  comment?: string;
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
}

export const RelationshipOccurrence: Schema.Schema<RelationshipOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comment: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "RelationshipOccurrence" });

export interface Finding {
  /** Unique identifier of the rule that produced this finding. */
  ruleId?: string;
  /** Title of the finding. */
  title?: string;
  /** Path to the file where the finding was detected. */
  filePath?: string;
  /** Severity of the finding. */
  severity?: string;
  /** Detailed description of the finding. */
  description?: string;
  /** Code snippet relevant to the finding. */
  snippet?: string;
  /** Category of the finding. */
  category?: string;
}

export const Finding: Schema.Schema<Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleId: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    snippet: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
  }).annotate({ identifier: "Finding" });

export interface AISkillAnalysisOccurrence {
  /** Findings produced by the analysis. */
  findings?: ReadonlyArray<Finding>;
  /** Name of the skill that produced this analysis. */
  skillName?: string;
}

export const AISkillAnalysisOccurrence: Schema.Schema<AISkillAnalysisOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    findings: Schema.optional(Schema.Array(Finding)),
    skillName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AISkillAnalysisOccurrence" });

export interface CVSS {
  impactScore?: number;
  /** Defined in CVSS v2 */
  authentication?:
    | "AUTHENTICATION_UNSPECIFIED"
    | "AUTHENTICATION_MULTIPLE"
    | "AUTHENTICATION_SINGLE"
    | "AUTHENTICATION_NONE"
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
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | "ATTACK_COMPLEXITY_MEDIUM"
    | (string & {});
  /** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. Defined in CVSS v3, CVSS v2 */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  /** Defined in CVSS v3 */
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
  /** Defined in CVSS v3 */
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  /** Defined in CVSS v3 */
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
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
  exploitabilityScore?: number;
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  /** Defined in CVSS v3, CVSS v2 */
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
}

export const CVSS: Schema.Schema<CVSS> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    impactScore: Schema.optional(Schema.Number),
    authentication: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    attackVector: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    exploitabilityScore: Schema.optional(Schema.Number),
    baseScore: Schema.optional(Schema.Number),
    integrityImpact: Schema.optional(Schema.String),
  }).annotate({ identifier: "CVSS" });

export interface Version {
  /** Used to correct mistakes in the version numbering scheme. */
  epoch?: number;
  /** Required. Distinguishes between sentinel MIN/MAX versions and normal versions. */
  kind?:
    | "VERSION_KIND_UNSPECIFIED"
    | "NORMAL"
    | "MINIMUM"
    | "MAXIMUM"
    | (string & {});
  /** The iteration of the package build from the above version. */
  revision?: string;
  /** Required only when version kind is NORMAL. The main part of the version name. */
  name?: string;
  /** Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range. */
  inclusive?: boolean;
}

export const Version: Schema.Schema<Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    epoch: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    inclusive: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Version" });

export interface VulnerabilityLocation {
  /** Required. The version of the package being described. */
  version?: Version;
  /** Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) format. Examples include distro or storage location for vulnerable jar. */
  cpeUri?: string;
  /** Required. The package being described. */
  package?: string;
}

export const VulnerabilityLocation: Schema.Schema<VulnerabilityLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Version),
    cpeUri: Schema.optional(Schema.String),
    package: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilityLocation" });

export interface PackageIssue {
  /** The location of the available fix for vulnerability. */
  fixedLocation?: VulnerabilityLocation;
  /** Deprecated, use Details.effective_severity instead The severity (e.g., distro assigned severity) for this vulnerability. */
  severityName?: string;
  /** Required. The location of the vulnerability. */
  affectedLocation?: VulnerabilityLocation;
  /** Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available. */
  effectiveSeverity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** The type of package (e.g. OS, MAVEN, GO). */
  packageType?: string;
}

export const PackageIssue: Schema.Schema<PackageIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixedLocation: Schema.optional(VulnerabilityLocation),
    severityName: Schema.optional(Schema.String),
    affectedLocation: Schema.optional(VulnerabilityLocation),
    effectiveSeverity: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
  }).annotate({ identifier: "PackageIssue" });

export interface RelatedUrl {
  /** Label to describe usage of the URL. */
  label?: string;
  /** Specific URL associated with the resource. */
  url?: string;
}

export const RelatedUrl: Schema.Schema<RelatedUrl> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    label: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "RelatedUrl" });

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
  remediationUri?: RelatedUrl;
}

export const Remediation: Schema.Schema<Remediation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remediationType: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
    remediationUri: Schema.optional(RelatedUrl),
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

export const Justification: Schema.Schema<Justification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    justificationType: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  }).annotate({ identifier: "Justification" });

export interface VexAssessment {
  /** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs. */
  cve?: string;
  /** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
  vulnerabilityId?: string;
  /** Holds a list of references associated with this vulnerability item and assessment. */
  relatedUris?: ReadonlyArray<RelatedUrl>;
  /** Contains information about the impact of this vulnerability, this will change with time. */
  impacts?: ReadonlyArray<string>;
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
  /** Specifies details on how to handle (and presumably, fix) a vulnerability. */
  remediations?: ReadonlyArray<Remediation>;
  /** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
  justification?: Justification;
}

export const VexAssessment: Schema.Schema<VexAssessment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cve: Schema.optional(Schema.String),
    vulnerabilityId: Schema.optional(Schema.String),
    relatedUris: Schema.optional(Schema.Array(RelatedUrl)),
    impacts: Schema.optional(Schema.Array(Schema.String)),
    noteName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    remediations: Schema.optional(Schema.Array(Remediation)),
    justification: Schema.optional(Justification),
  }).annotate({ identifier: "VexAssessment" });

export interface GrafeasV1beta1VulnerabilityDetails {
  /** Occurrence-specific extra details about the vulnerability. */
  extraDetails?: string;
  /** The cvss v2 score for the vulnerability. */
  cvssV2?: CVSS;
  /** Output only. A one sentence description of this vulnerability. */
  shortDescription?: string;
  /** The type of package; whether native or non native(ruby gems, node.js packages etc) */
  type?: string;
  /** Required. The set of affected locations and their fixes (if available) within the associated resource. */
  packageIssue?: ReadonlyArray<PackageIssue>;
  /** Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0-10 where 0 indicates low severity and 10 indicates high severity. */
  cvssScore?: number;
  /** Output only. URLs related to this vulnerability. */
  relatedUrls?: ReadonlyArray<RelatedUrl>;
  /** Output only. A detailed description of this vulnerability. */
  longDescription?: string;
  vexAssessment?: VexAssessment;
  /** The cvss v3 score for the vulnerability. */
  cvssV3?: CVSS;
  /** Output only. The note provider assigned Severity of the vulnerability. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** The distro assigned severity for this vulnerability when it is available, and note provider assigned severity when distro has not yet assigned a severity for this vulnerability. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues. */
  effectiveSeverity?:
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
    | (string & {});
}

export const GrafeasV1beta1VulnerabilityDetails: Schema.Schema<GrafeasV1beta1VulnerabilityDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraDetails: Schema.optional(Schema.String),
    cvssV2: Schema.optional(CVSS),
    shortDescription: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    packageIssue: Schema.optional(Schema.Array(PackageIssue)),
    cvssScore: Schema.optional(Schema.Number),
    relatedUrls: Schema.optional(Schema.Array(RelatedUrl)),
    longDescription: Schema.optional(Schema.String),
    vexAssessment: Schema.optional(VexAssessment),
    cvssV3: Schema.optional(CVSS),
    severity: Schema.optional(Schema.String),
    effectiveSeverity: Schema.optional(Schema.String),
    cvssVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1beta1VulnerabilityDetails" });

export interface Layer {
  /** Required. The recovered Dockerfile directive used to construct this layer. */
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

export const Layer: Schema.Schema<Layer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    directive: Schema.optional(Schema.String),
    arguments: Schema.optional(Schema.String),
  }).annotate({ identifier: "Layer" });

export interface Fingerprint {
  /** Required. The ordered list of v2 blobs that represent a given image. */
  v2Blob?: ReadonlyArray<string>;
  /** Required. The layer ID of the final layer in the Docker image's v1 representation. */
  v1Name?: string;
  /** Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept. */
  v2Name?: string;
}

export const Fingerprint: Schema.Schema<Fingerprint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    v2Blob: Schema.optional(Schema.Array(Schema.String)),
    v1Name: Schema.optional(Schema.String),
    v2Name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Fingerprint" });

export interface Derived {
  /** Output only. The number of layers by which this image differs from the associated image basis. */
  distance?: number;
  /** This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer. */
  layerInfo?: ReadonlyArray<Layer>;
  /** Required. The fingerprint of the derived image. */
  fingerprint?: Fingerprint;
  /** Output only. This contains the base image URL for the derived image occurrence. */
  baseResourceUrl?: string;
}

export const Derived: Schema.Schema<Derived> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distance: Schema.optional(Schema.Number),
    layerInfo: Schema.optional(Schema.Array(Layer)),
    fingerprint: Schema.optional(Fingerprint),
    baseResourceUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "Derived" });

export interface GrafeasV1beta1ImageDetails {
  /** Required. Immutable. The child image derived from the base image. */
  derivedImage?: Derived;
}

export const GrafeasV1beta1ImageDetails: Schema.Schema<GrafeasV1beta1ImageDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    derivedImage: Schema.optional(Derived),
  }).annotate({ identifier: "GrafeasV1beta1ImageDetails" });

export interface Hash {
  /** Required. The type of hash that was performed. */
  type?:
    | "HASH_TYPE_UNSPECIFIED"
    | "SHA256"
    | "GO_MODULE_H1"
    | "SHA512"
    | "DIRSUM_SHA256"
    | (string & {});
  /** Required. The hash value. */
  value?: string;
}

export const Hash: Schema.Schema<Hash> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Hash" });

export interface Resource {
  /** Deprecated, do not use. Use uri instead. The name of the resource. For example, the name of a Docker image - "Debian". */
  name?: string;
  /** Required. The unique URI of the resource. For example, `https://gcr.io/project/image@sha256:foo` for a Docker image. */
  uri?: string;
  /** Deprecated, do not use. Use uri instead. The hash of the resource content. For example, the Docker digest. */
  contentHash?: Hash;
}

export const Resource: Schema.Schema<Resource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    contentHash: Schema.optional(Hash),
  }).annotate({ identifier: "Resource" });

export interface Artifact {
  /** Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image. */
  names?: ReadonlyArray<string>;
  /** Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`. */
  id?: string;
  /** Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container. */
  checksum?: string;
}

export const Artifact: Schema.Schema<Artifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    checksum: Schema.optional(Schema.String),
  }).annotate({ identifier: "Artifact" });

export interface FileHashes {
  /** Required. Collection of file hashes. */
  fileHash?: ReadonlyArray<Hash>;
}

export const FileHashes: Schema.Schema<FileHashes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHash: Schema.optional(Schema.Array(Hash)),
  }).annotate({ identifier: "FileHashes" });

export interface AliasContext {
  /** The alias kind. */
  kind?: "KIND_UNSPECIFIED" | "FIXED" | "MOVABLE" | "OTHER" | (string & {});
  /** The alias name. */
  name?: string;
}

export const AliasContext: Schema.Schema<AliasContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "AliasContext" });

export interface RepoId {
  /** A combination of a project ID and a repo name. */
  projectRepoId?: ProjectRepoId;
  /** A server-assigned, globally unique identifier. */
  uid?: string;
}

export const RepoId: Schema.Schema<RepoId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectRepoId: Schema.optional(ProjectRepoId),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "RepoId" });

export interface CloudRepoSourceContext {
  /** An alias, which may be a branch or tag. */
  aliasContext?: AliasContext;
  /** A revision ID. */
  revisionId?: string;
  /** The ID of the repo. */
  repoId?: RepoId;
}

export const CloudRepoSourceContext: Schema.Schema<CloudRepoSourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aliasContext: Schema.optional(AliasContext),
    revisionId: Schema.optional(Schema.String),
    repoId: Schema.optional(RepoId),
  }).annotate({ identifier: "CloudRepoSourceContext" });

export interface GerritSourceContext {
  /** The URI of a running Gerrit instance. */
  hostUri?: string;
  /** The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project. */
  gerritProject?: string;
  /** An alias, which may be a branch or tag. */
  aliasContext?: AliasContext;
  /** A revision (commit) ID. */
  revisionId?: string;
}

export const GerritSourceContext: Schema.Schema<GerritSourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostUri: Schema.optional(Schema.String),
    gerritProject: Schema.optional(Schema.String),
    aliasContext: Schema.optional(AliasContext),
    revisionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GerritSourceContext" });

export interface GitSourceContext {
  /** Git commit hash. */
  revisionId?: string;
  /** Git repository URL. */
  url?: string;
}

export const GitSourceContext: Schema.Schema<GitSourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revisionId: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GitSourceContext" });

export interface SourceContext {
  /** A SourceContext referring to a revision in a Google Cloud Source Repo. */
  cloudRepo?: CloudRepoSourceContext;
  /** A SourceContext referring to a Gerrit project. */
  gerrit?: GerritSourceContext;
  /** Labels with user defined metadata. */
  labels?: Record<string, string>;
  /** A SourceContext referring to any third party Git repo (e.g., GitHub). */
  git?: GitSourceContext;
}

export const SourceContext: Schema.Schema<SourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudRepo: Schema.optional(CloudRepoSourceContext),
    gerrit: Schema.optional(GerritSourceContext),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    git: Schema.optional(GitSourceContext),
  }).annotate({ identifier: "SourceContext" });

export interface Source {
  /** Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file. */
  fileHashes?: Record<string, FileHashes>;
  /** If provided, the source code used for the build came from this location. */
  context?: SourceContext;
  /** If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field. */
  additionalContexts?: ReadonlyArray<SourceContext>;
  /** If provided, the input binary artifacts for the build came from this location. */
  artifactStorageSourceUri?: string;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHashes: Schema.optional(Schema.Record(Schema.String, FileHashes)),
    context: Schema.optional(SourceContext),
    additionalContexts: Schema.optional(Schema.Array(SourceContext)),
    artifactStorageSourceUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Source" });

export interface Command {
  /** Command-line arguments used when executing this command. */
  args?: ReadonlyArray<string>;
  /** Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`. */
  name?: string;
  /** The ID(s) of the command(s) that this command depends on. */
  waitFor?: ReadonlyArray<string>;
  /** Environment variables set before running this command. */
  env?: ReadonlyArray<string>;
  /** Working directory (relative to project source root) used when running this command. */
  dir?: string;
  /** Optional unique identifier for this command, used in wait_for to reference this command as a dependency. */
  id?: string;
}

export const Command: Schema.Schema<Command> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    args: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    env: Schema.optional(Schema.Array(Schema.String)),
    dir: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Command" });

export interface BuildProvenance {
  /** Output of the build. */
  builtArtifacts?: ReadonlyArray<Artifact>;
  /** Time at which execution of the build was started. */
  startTime?: string;
  /** Details of the Source input to the build. */
  sourceProvenance?: Source;
  /** Trigger identifier if the build was triggered automatically; empty if not. */
  triggerId?: string;
  /** Time at which execution of the build was finished. */
  endTime?: string;
  /** Commands requested by the build. */
  commands?: ReadonlyArray<Command>;
  /** Version string of the builder at the time this build was executed. */
  builderVersion?: string;
  /** ID of the project. */
  projectId?: string;
  /** Required. Unique identifier of the build. */
  id?: string;
  /** Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details. */
  buildOptions?: Record<string, string>;
  /** URI where any logs for this provenance were written. */
  logsUri?: string;
  /** E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time. */
  creator?: string;
  /** Time at which the build was created. */
  createTime?: string;
}

export const BuildProvenance: Schema.Schema<BuildProvenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    builtArtifacts: Schema.optional(Schema.Array(Artifact)),
    startTime: Schema.optional(Schema.String),
    sourceProvenance: Schema.optional(Source),
    triggerId: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    commands: Schema.optional(Schema.Array(Command)),
    builderVersion: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    buildOptions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    logsUri: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildProvenance" });

export interface BuildDefinition {
  buildType?: string;
  internalParameters?: Record<string, unknown>;
  resolvedDependencies?: ReadonlyArray<ResourceDescriptor>;
  externalParameters?: Record<string, unknown>;
}

export const BuildDefinition: Schema.Schema<BuildDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildType: Schema.optional(Schema.String),
    internalParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    resolvedDependencies: Schema.optional(Schema.Array(ResourceDescriptor)),
    externalParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
  }).annotate({ identifier: "BuildDefinition" });

export interface BuildMetadata {
  invocationId?: string;
  startedOn?: string;
  finishedOn?: string;
}

export const BuildMetadata: Schema.Schema<BuildMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invocationId: Schema.optional(Schema.String),
    startedOn: Schema.optional(Schema.String),
    finishedOn: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildMetadata" });

export interface RunDetails {
  builder?: ProvenanceBuilder;
  metadata?: BuildMetadata;
  byproducts?: ReadonlyArray<ResourceDescriptor>;
}

export const RunDetails: Schema.Schema<RunDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    builder: Schema.optional(ProvenanceBuilder),
    metadata: Schema.optional(BuildMetadata),
    byproducts: Schema.optional(Schema.Array(ResourceDescriptor)),
  }).annotate({ identifier: "RunDetails" });

export interface SlsaProvenanceV1 {
  buildDefinition?: BuildDefinition;
  runDetails?: RunDetails;
}

export const SlsaProvenanceV1: Schema.Schema<SlsaProvenanceV1> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildDefinition: Schema.optional(BuildDefinition),
    runDetails: Schema.optional(RunDetails),
  }).annotate({ identifier: "SlsaProvenanceV1" });

export interface InTotoSlsaProvenanceV1 {
  subject?: ReadonlyArray<Subject>;
  predicateType?: string;
  predicate?: SlsaProvenanceV1;
  /** InToto spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement */
  _type?: string;
}

export const InTotoSlsaProvenanceV1: Schema.Schema<InTotoSlsaProvenanceV1> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subject: Schema.optional(Schema.Array(Subject)),
    predicateType: Schema.optional(Schema.String),
    predicate: Schema.optional(SlsaProvenanceV1),
    _type: Schema.optional(Schema.String),
  }).annotate({ identifier: "InTotoSlsaProvenanceV1" });

export interface GrafeasV1beta1BuildDetails {
  /** Required. The actual provenance for the build. */
  provenance?: BuildProvenance;
  /** Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. */
  provenanceBytes?: string;
  inTotoSlsaProvenanceV1?: InTotoSlsaProvenanceV1;
}

export const GrafeasV1beta1BuildDetails: Schema.Schema<GrafeasV1beta1BuildDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provenance: Schema.optional(BuildProvenance),
    provenanceBytes: Schema.optional(Schema.String),
    inTotoSlsaProvenanceV1: Schema.optional(InTotoSlsaProvenanceV1),
  }).annotate({ identifier: "GrafeasV1beta1BuildDetails" });

export interface Location {
  /** The path from which we gathered that this package/version is installed. */
  path?: string;
  /** Deprecated. The version installed at this location. */
  version?: Version;
  /** Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
  cpeUri?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    version: Schema.optional(Version),
    cpeUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface Installation {
  /** Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  packageType?: string;
  /** All of the places within the filesystem versions of this package have been found. */
  location?: ReadonlyArray<Location>;
  /** Required. Output only. The name of the installed package. */
  name?: string;
  /** Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
  cpeUri?: string;
  /** Licenses that have been declared by the authors of the package. */
  license?: License;
  /** Output only. The version of the package. */
  version?: Version;
  /** Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
}

export const Installation: Schema.Schema<Installation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageType: Schema.optional(Schema.String),
    location: Schema.optional(Schema.Array(Location)),
    name: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    license: Schema.optional(License),
    version: Schema.optional(Version),
    architecture: Schema.optional(Schema.String),
  }).annotate({ identifier: "Installation" });

export interface GrafeasV1beta1PackageDetails {
  /** Required. Where the package was installed. */
  installation?: Installation;
}

export const GrafeasV1beta1PackageDetails: Schema.Schema<GrafeasV1beta1PackageDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    installation: Schema.optional(Installation),
  }).annotate({ identifier: "GrafeasV1beta1PackageDetails" });

export interface SecretStatus {
  /** Optional. The time the secret status was last updated. */
  updateTime?: string;
  /** Optional. Optional message about the status code. */
  message?: string;
  /** Optional. The status of the secret. */
  status?:
    | "STATUS_UNSPECIFIED"
    | "UNKNOWN"
    | "VALID"
    | "INVALID"
    | (string & {});
}

export const SecretStatus: Schema.Schema<SecretStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretStatus" });

export interface FileLocation {
  /** For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. */
  filePath?: string;
}

export const FileLocation: Schema.Schema<FileLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileLocation" });

export interface SecretLocation {
  /** The secret is found from a file. */
  fileLocation?: FileLocation;
}

export const SecretLocation: Schema.Schema<SecretLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileLocation: Schema.optional(FileLocation),
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

export const SecretOccurrence: Schema.Schema<SecretOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    statuses: Schema.optional(Schema.Array(SecretStatus)),
    locations: Schema.optional(Schema.Array(SecretLocation)),
  }).annotate({ identifier: "SecretOccurrence" });

export interface FileOccurrence {
  /** Uniquely identify any element in an SPDX document which may be referenced by other elements */
  id?: string;
  /** This field contains the license information actually found in the file, if any */
  filesLicenseInfo?: ReadonlyArray<string>;
  /** This field contains the license the SPDX file creator has concluded as governing the file or alternative values if the governing license cannot be determined */
  licenseConcluded?: License;
  /** This field provides a place for the SPDX file creator to record any general comments about the file */
  comment?: string;
  /** Identify the copyright holder of the file, as well as any dates present */
  copyright?: string;
  /** This field provides a place for the SPDX file creator to record license notices or other such related notices found in the file */
  notice?: string;
  /** This field provides a place for the SPDX file creator to record file contributors */
  contributors?: ReadonlyArray<string>;
  /** This field provides a place for the SPDX data creator to record, at the file level, acknowledgements that may be needed to be communicated in some contexts */
  attributions?: ReadonlyArray<string>;
}

export const FileOccurrence: Schema.Schema<FileOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    filesLicenseInfo: Schema.optional(Schema.Array(Schema.String)),
    licenseConcluded: Schema.optional(License),
    comment: Schema.optional(Schema.String),
    copyright: Schema.optional(Schema.String),
    notice: Schema.optional(Schema.String),
    contributors: Schema.optional(Schema.Array(Schema.String)),
    attributions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "FileOccurrence" });

export interface Signature {
  /** The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5" */
  publicKeyId?: string;
  /** The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload. */
  signature?: string;
}

export const Signature: Schema.Schema<Signature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicKeyId: Schema.optional(Schema.String),
    signature: Schema.optional(Schema.String),
  }).annotate({ identifier: "Signature" });

export interface GenericSignedAttestation {
  /** The serialized payload that is verified by one or more `signatures`. The encoding and semantic meaning of this payload must match what is set in `content_type`. */
  serializedPayload?: string;
  /** One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification. */
  signatures?: ReadonlyArray<Signature>;
  /** Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema). */
  contentType?:
    | "CONTENT_TYPE_UNSPECIFIED"
    | "SIMPLE_SIGNING_JSON"
    | (string & {});
}

export const GenericSignedAttestation: Schema.Schema<GenericSignedAttestation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    serializedPayload: Schema.optional(Schema.String),
    signatures: Schema.optional(Schema.Array(Signature)),
    contentType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GenericSignedAttestation" });

export interface PgpSignedAttestation {
  /** Required. The raw content of the signature, as output by GNU Privacy Guard (GPG) or equivalent. Since this message only supports attached signatures, the payload that was signed must be attached. While the signature format supported is dependent on the verification implementation, currently only ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor --output=signature.gpg payload.json` will create the signature content expected in this field in `signature.gpg` for the `payload.json` attestation payload. */
  signature?: string;
  /** Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema). */
  contentType?:
    | "CONTENT_TYPE_UNSPECIFIED"
    | "SIMPLE_SIGNING_JSON"
    | (string & {});
  /** The cryptographic fingerprint of the key used to generate the signature, as output by, e.g. `gpg --list-keys`. This should be the version 4, full 160-bit fingerprint, expressed as a 40 character hexadecimal string. See https://tools.ietf.org/html/rfc4880#section-12.2 for details. Implementations may choose to acknowledge "LONG", "SHORT", or other abbreviated key IDs, but only the full fingerprint is guaranteed to work. In gpg, the full fingerprint can be retrieved from the `fpr` field returned when calling --list-keys with --with-colons. For example: ``` gpg --with-colons --with-fingerprint --force-v4-certs \ --list-keys attester@example.com tru::1:1513631572:0:3:1:5 pub:...... fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`. */
  pgpKeyId?: string;
}

export const PgpSignedAttestation: Schema.Schema<PgpSignedAttestation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signature: Schema.optional(Schema.String),
    contentType: Schema.optional(Schema.String),
    pgpKeyId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PgpSignedAttestation" });

export interface Attestation {
  genericSignedAttestation?: GenericSignedAttestation;
  /** A PGP signed attestation. */
  pgpSignedAttestation?: PgpSignedAttestation;
}

export const Attestation: Schema.Schema<Attestation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericSignedAttestation: Schema.optional(GenericSignedAttestation),
    pgpSignedAttestation: Schema.optional(PgpSignedAttestation),
  }).annotate({ identifier: "Attestation" });

export interface Details {
  /** Required. Attestation for the resource. */
  attestation?: Attestation;
}

export const Details: Schema.Schema<Details> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attestation: Schema.optional(Attestation),
  }).annotate({ identifier: "Details" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface File {
  digest?: Record<string, string>;
  name?: string;
}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "File" });

export interface AnalysisCompleted {
  analysisType?: ReadonlyArray<string>;
}

export const AnalysisCompleted: Schema.Schema<AnalysisCompleted> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analysisType: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AnalysisCompleted" });

export interface SBOMStatus {
  /** If there was an error generating an SBOM, this will indicate what that error was. */
  error?: string;
  /** The progress of the SBOM generation. */
  sbomState?: "SBOM_STATE_UNSPECIFIED" | "PENDING" | "COMPLETE" | (string & {});
}

export const SBOMStatus: Schema.Schema<SBOMStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(Schema.String),
    sbomState: Schema.optional(Schema.String),
  }).annotate({ identifier: "SBOMStatus" });

export interface Discovered {
  /** The last time continuous analysis was done for this resource. Deprecated, do not use. */
  lastAnalysisTime?: string;
  /** Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors. */
  analysisError?: ReadonlyArray<Status>;
  /** The last time this resource was scanned. */
  lastScanTime?: string;
  /** Files that make up the resource described by the occurrence. */
  files?: ReadonlyArray<File>;
  analysisCompleted?: AnalysisCompleted;
  /** Whether the resource is continuously analyzed. */
  continuousAnalysis?:
    | "CONTINUOUS_ANALYSIS_UNSPECIFIED"
    | "ACTIVE"
    | "INACTIVE"
    | (string & {});
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
  /** When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API. */
  analysisStatusError?: Status;
  /** The last time vulnerability scan results changed. */
  lastVulnerabilityUpdateTime?: string;
  /** The status of an SBOM generation. */
  sbomStatus?: SBOMStatus;
}

export const Discovered: Schema.Schema<Discovered> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastAnalysisTime: Schema.optional(Schema.String),
    analysisError: Schema.optional(Schema.Array(Status)),
    lastScanTime: Schema.optional(Schema.String),
    files: Schema.optional(Schema.Array(File)),
    analysisCompleted: Schema.optional(AnalysisCompleted),
    continuousAnalysis: Schema.optional(Schema.String),
    analysisStatus: Schema.optional(Schema.String),
    analysisStatusError: Schema.optional(Status),
    lastVulnerabilityUpdateTime: Schema.optional(Schema.String),
    sbomStatus: Schema.optional(SBOMStatus),
  }).annotate({ identifier: "Discovered" });

export interface GrafeasV1beta1DiscoveryDetails {
  /** Required. Analysis status for the discovered resource. */
  discovered?: Discovered;
}

export const GrafeasV1beta1DiscoveryDetails: Schema.Schema<GrafeasV1beta1DiscoveryDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discovered: Schema.optional(Discovered),
  }).annotate({ identifier: "GrafeasV1beta1DiscoveryDetails" });

export interface Envelope {
  payload?: string;
  payloadType?: string;
  signatures?: ReadonlyArray<EnvelopeSignature>;
}

export const Envelope: Schema.Schema<Envelope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    payload: Schema.optional(Schema.String),
    payloadType: Schema.optional(Schema.String),
    signatures: Schema.optional(Schema.Array(EnvelopeSignature)),
  }).annotate({ identifier: "Envelope" });

export interface Deployment {
  /** Required. Beginning of the lifetime of this deployment. */
  deployTime?: string;
  /** Configuration used to create this deployment. */
  config?: string;
  /** Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name. */
  resourceUri?: ReadonlyArray<string>;
  /** End of the lifetime of this deployment. */
  undeployTime?: string;
  /** Address of the runtime element hosting this deployment. */
  address?: string;
  /** Platform hosting this deployment. */
  platform?: "PLATFORM_UNSPECIFIED" | "GKE" | "FLEX" | "CUSTOM" | (string & {});
  /** Identity of the user that triggered this deployment. */
  userEmail?: string;
}

export const Deployment: Schema.Schema<Deployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployTime: Schema.optional(Schema.String),
    config: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.Array(Schema.String)),
    undeployTime: Schema.optional(Schema.String),
    address: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
    userEmail: Schema.optional(Schema.String),
  }).annotate({ identifier: "Deployment" });

export interface GrafeasV1beta1DeploymentDetails {
  /** Required. Deployment history for the resource. */
  deployment?: Deployment;
}

export const GrafeasV1beta1DeploymentDetails: Schema.Schema<GrafeasV1beta1DeploymentDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployment: Schema.optional(Deployment),
  }).annotate({ identifier: "GrafeasV1beta1DeploymentDetails" });

export interface GrafeasV1beta1IntotoSignature {
  sig?: string;
  keyid?: string;
}

export const GrafeasV1beta1IntotoSignature: Schema.Schema<GrafeasV1beta1IntotoSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sig: Schema.optional(Schema.String),
    keyid: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1beta1IntotoSignature" });

export interface ArtifactHashes {
  sha256?: string;
}

export const ArtifactHashes: Schema.Schema<ArtifactHashes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sha256: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArtifactHashes" });

export interface GrafeasV1beta1IntotoArtifact {
  resourceUri?: string;
  hashes?: ArtifactHashes;
}

export const GrafeasV1beta1IntotoArtifact: Schema.Schema<GrafeasV1beta1IntotoArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.optional(Schema.String),
    hashes: Schema.optional(ArtifactHashes),
  }).annotate({ identifier: "GrafeasV1beta1IntotoArtifact" });

export interface ByProducts {
  customValues?: Record<string, string>;
}

export const ByProducts: Schema.Schema<ByProducts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customValues: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ByProducts" });

export interface Environment {
  customValues?: Record<string, string>;
}

export const Environment: Schema.Schema<Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customValues: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Environment" });

export interface Link {
  /** Materials are the supply chain artifacts that go into the step and are used for the operation performed. The key of the map is the path of the artifact and the structure contains the recorded hash information. An example is: "materials": [ { "resource_uri": "foo/bar", "hashes": { "sha256": "ebebf...", : } } ] */
  materials?: ReadonlyArray<GrafeasV1beta1IntotoArtifact>;
  /** ByProducts are data generated as part of a software supply chain step, but are not the actual result of the step. */
  byproducts?: ByProducts;
  /** This field contains the full command executed for the step. This can also be empty if links are generated for operations that aren't directly mapped to a specific command. Each term in the command is an independent string in the list. An example of a command in the in-toto metadata field is: "command": ["git", "clone", "https://github.com/in-toto/demo-project.git"] */
  command?: ReadonlyArray<string>;
  /** Products are the supply chain artifacts generated as a result of the step. The structure is identical to that of materials. */
  products?: ReadonlyArray<GrafeasV1beta1IntotoArtifact>;
  /** This is a field that can be used to capture information about the environment. It is suggested for this field to contain information that details environment variables, filesystem information, and the present working directory. The recommended structure of this field is: "environment": { "custom_values": { "variables": "", "filesystem": "", "workdir": "", "": "..." } } */
  environment?: Environment;
}

export const Link: Schema.Schema<Link> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    materials: Schema.optional(Schema.Array(GrafeasV1beta1IntotoArtifact)),
    byproducts: Schema.optional(ByProducts),
    command: Schema.optional(Schema.Array(Schema.String)),
    products: Schema.optional(Schema.Array(GrafeasV1beta1IntotoArtifact)),
    environment: Schema.optional(Environment),
  }).annotate({ identifier: "Link" });

export interface GrafeasV1beta1IntotoDetails {
  signatures?: ReadonlyArray<GrafeasV1beta1IntotoSignature>;
  signed?: Link;
}

export const GrafeasV1beta1IntotoDetails: Schema.Schema<GrafeasV1beta1IntotoDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signatures: Schema.optional(Schema.Array(GrafeasV1beta1IntotoSignature)),
    signed: Schema.optional(Link),
  }).annotate({ identifier: "GrafeasV1beta1IntotoDetails" });

export interface Occurrence {
  /** Describes a specific SBOM reference occurrences. */
  sbomReference?: SBOMReferenceOccurrence;
  /** Describes a specific software bill of materials document. */
  sbom?: DocumentOccurrence;
  /** Describes a specific SPDX Relationship. */
  spdxRelationship?: RelationshipOccurrence;
  /** Describes a specific AI Skill Analysis occurrence. */
  aiSkillAnalysis?: AISkillAnalysisOccurrence;
  /** Output only. The time this occurrence was created. */
  createTime?: string;
  /** Describes a security vulnerability. */
  vulnerability?: GrafeasV1beta1VulnerabilityDetails;
  /** Describes how this resource derives from the basis in the associated note. */
  derivedImage?: GrafeasV1beta1ImageDetails;
  /** A description of actions that can be taken to remedy the note. */
  remediation?: string;
  /** Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests. */
  noteName?: string;
  /** Required. Immutable. The resource for which the occurrence applies. */
  resource?: Resource;
  /** Output only. The time this occurrence was last updated. */
  updateTime?: string;
  /** Describes a verifiable build. */
  build?: GrafeasV1beta1BuildDetails;
  /** Describes the installation of a package on the linked resource. */
  installation?: GrafeasV1beta1PackageDetails;
  /** Describes a secret. */
  secret?: SecretOccurrence;
  /** Describes a specific SPDX File. */
  spdxFile?: FileOccurrence;
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
    | "INTOTO"
    | "SBOM"
    | "SPDX_PACKAGE"
    | "SPDX_FILE"
    | "SPDX_RELATIONSHIP"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | "AI_SKILL_ANALYSIS"
    | (string & {});
  /** Describes an attestation of an artifact. */
  attestation?: Details;
  /** Describes when a resource was discovered. */
  discovered?: GrafeasV1beta1DiscoveryDetails;
  /** https://github.com/secure-systems-lab/dsse */
  envelope?: Envelope;
  /** Describes the deployment of an artifact on a runtime. */
  deployment?: GrafeasV1beta1DeploymentDetails;
  /** Describes a specific in-toto link. */
  intoto?: GrafeasV1beta1IntotoDetails;
  /** Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name?: string;
  /** Describes a specific SPDX Package. */
  spdxPackage?: PackageInfoOccurrence;
}

export const Occurrence: Schema.Schema<Occurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sbomReference: Schema.optional(SBOMReferenceOccurrence),
    sbom: Schema.optional(DocumentOccurrence),
    spdxRelationship: Schema.optional(RelationshipOccurrence),
    aiSkillAnalysis: Schema.optional(AISkillAnalysisOccurrence),
    createTime: Schema.optional(Schema.String),
    vulnerability: Schema.optional(GrafeasV1beta1VulnerabilityDetails),
    derivedImage: Schema.optional(GrafeasV1beta1ImageDetails),
    remediation: Schema.optional(Schema.String),
    noteName: Schema.optional(Schema.String),
    resource: Schema.optional(Resource),
    updateTime: Schema.optional(Schema.String),
    build: Schema.optional(GrafeasV1beta1BuildDetails),
    installation: Schema.optional(GrafeasV1beta1PackageDetails),
    secret: Schema.optional(SecretOccurrence),
    spdxFile: Schema.optional(FileOccurrence),
    kind: Schema.optional(Schema.String),
    attestation: Schema.optional(Details),
    discovered: Schema.optional(GrafeasV1beta1DiscoveryDetails),
    envelope: Schema.optional(Envelope),
    deployment: Schema.optional(GrafeasV1beta1DeploymentDetails),
    intoto: Schema.optional(GrafeasV1beta1IntotoDetails),
    name: Schema.optional(Schema.String),
    spdxPackage: Schema.optional(PackageInfoOccurrence),
  }).annotate({ identifier: "Occurrence" });

export interface ListNoteOccurrencesResponse {
  /** The occurrences attached to the specified note. */
  occurrences?: ReadonlyArray<Occurrence>;
  /** Token to provide to skip to a particular spot in the list. */
  nextPageToken?: string;
}

export const ListNoteOccurrencesResponse: Schema.Schema<ListNoteOccurrencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    occurrences: Schema.optional(Schema.Array(Occurrence)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListNoteOccurrencesResponse" });

export interface Discovery {
  /** Required. Immutable. The kind of analysis that is handled by this discovery. */
  analysisKind?:
    | "NOTE_KIND_UNSPECIFIED"
    | "VULNERABILITY"
    | "BUILD"
    | "IMAGE"
    | "PACKAGE"
    | "DEPLOYMENT"
    | "DISCOVERY"
    | "ATTESTATION"
    | "INTOTO"
    | "SBOM"
    | "SPDX_PACKAGE"
    | "SPDX_FILE"
    | "SPDX_RELATIONSHIP"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | "AI_SKILL_ANALYSIS"
    | (string & {});
}

export const Discovery: Schema.Schema<Discovery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analysisKind: Schema.optional(Schema.String),
  }).annotate({ identifier: "Discovery" });

export interface Product {
  /** Contains a URI which is vendor-specific. Example: The artifact repository URL of an image. */
  genericUri?: string;
  /** Name of the product. */
  name?: string;
  /** Token that identifies a product so that it can be referred to from other parts in the document. There is no predefined format as long as it uniquely identifies a group in the context of the current document. */
  id?: string;
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "Product" });

export interface Expr {
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface FileNote {
  /** Provide a unique identifier to match analysis information on each specific file in a package */
  checksum?: ReadonlyArray<string>;
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
  /** Identify the full path and filename that corresponds to the file information in this section */
  title?: string;
}

export const FileNote: Schema.Schema<FileNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    checksum: Schema.optional(Schema.Array(Schema.String)),
    fileType: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "FileNote" });

export interface Distribution {
  /** The CPU architecture for which packages in this distribution channel were built. */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
  /** The latest available version of this package in this distribution channel. */
  latestVersion?: Version;
  /** A freeform string denoting the maintainer of this package. */
  maintainer?: string;
  /** The distribution channel-specific description of this package. */
  description?: string;
  /** The distribution channel-specific homepage for this package. */
  url?: string;
  /** Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
  cpeUri?: string;
}

export const Distribution: Schema.Schema<Distribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    architecture: Schema.optional(Schema.String),
    latestVersion: Schema.optional(Version),
    maintainer: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "Distribution" });

export interface SecretNote {}

export const SecretNote: Schema.Schema<SecretNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SecretNote",
  });

export interface Publisher {
  /** Provides information about the authority of the issuing party to release the document, in particular, the party's constituency and responsibilities or other obligations. */
  issuingAuthority?: string;
  /** Name of the publisher. Examples: 'Google', 'Google Cloud Platform'. */
  name?: string;
  /** The context or namespace. Contains a URL which is under control of the issuing party and can be used as a globally unique identifier for that issuing party. Example: https://csaf.io */
  publisherNamespace?: string;
}

export const Publisher: Schema.Schema<Publisher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    issuingAuthority: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    publisherNamespace: Schema.optional(Schema.String),
  }).annotate({ identifier: "Publisher" });

export interface Assessment {
  /** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
  vulnerabilityId?: string;
  /** A detailed description of this Vex. */
  longDescription?: string;
  /** Specifies details on how to handle (and presumably, fix) a vulnerability. */
  remediations?: ReadonlyArray<Remediation>;
  /** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs. */
  cve?: string;
  /** Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability. */
  relatedUris?: ReadonlyArray<RelatedUrl>;
  /** Contains information about the impact of this vulnerability, this will change with time. */
  impacts?: ReadonlyArray<string>;
  /** A one sentence description of this Vex. */
  shortDescription?: string;
  /** Provides the state of this Vulnerability assessment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "AFFECTED"
    | "NOT_AFFECTED"
    | "FIXED"
    | "UNDER_INVESTIGATION"
    | (string & {});
  /** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
  justification?: Justification;
}

export const Assessment: Schema.Schema<Assessment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vulnerabilityId: Schema.optional(Schema.String),
    longDescription: Schema.optional(Schema.String),
    remediations: Schema.optional(Schema.Array(Remediation)),
    cve: Schema.optional(Schema.String),
    relatedUris: Schema.optional(Schema.Array(RelatedUrl)),
    impacts: Schema.optional(Schema.Array(Schema.String)),
    shortDescription: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    justification: Schema.optional(Justification),
  }).annotate({ identifier: "Assessment" });

export interface VulnerabilityAssessmentNote {
  /** Publisher details of this Note. */
  publisher?: Publisher;
  /** The title of the note. E.g. `Vex-Debian-11.4` */
  title?: string;
  /** The product affected by this vex. */
  product?: Product;
  /** Represents a vulnerability assessment for the product. */
  assessment?: Assessment;
  /** A one sentence description of this Vex. */
  shortDescription?: string;
  /** A detailed description of this Vex. */
  longDescription?: string;
  /** Identifies the language used by this document, corresponding to IETF BCP 47 / RFC 5646. */
  languageCode?: string;
}

export const VulnerabilityAssessmentNote: Schema.Schema<VulnerabilityAssessmentNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publisher: Schema.optional(Publisher),
    title: Schema.optional(Schema.String),
    product: Schema.optional(Product),
    assessment: Schema.optional(Assessment),
    shortDescription: Schema.optional(Schema.String),
    longDescription: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilityAssessmentNote" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan {
  /** End of time span. */
  endTime?: string;
  /** Start of time span. */
  startTime?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan",
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

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Hash: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Hash> =
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

export const ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHash: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Hash),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage {
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Hash types and values of the npm package. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** URI of the uploaded npm package. */
  uri?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepResults {
  /** Results for a build step. */
  results?: Record<string, string>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepResults: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepResults> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepResults",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact {
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Hash types and values of the Maven Artifact. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
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

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule> =
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

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact {
  /** Output only. The hash of the whole artifact. */
  artifactFingerprint?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. URI of the uploaded artifact. Ex: projects/p1/locations/us/repositories/r1/packages/p1/versions/v1 */
  uri?: string;
  /** Output only. The file hashes that make up the generic artifact. */
  fileHashes?: Record<
    string,
    ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes
  >;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactFingerprint: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    uri: Schema.optional(Schema.String),
    fileHashes: Schema.optional(
      Schema.Record(
        Schema.String,
        ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
      ),
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage {
  /** Output only. The OCI media type of the artifact. Non-OCI images, such as Docker images, will have an unspecified value. */
  ociMediaType?:
    | "OCI_MEDIA_TYPE_UNSPECIFIED"
    | "IMAGE_MANIFEST"
    | "IMAGE_INDEX"
    | (string & {});
  /** Docker Registry 2.0 digest. */
  digest?: string;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Name used to push the container image to Google Container Registry, as presented to `docker push`. */
  name?: string;
  /** Output only. Stores timing information for pushing the specified image. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ociMediaType: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.String),
    artifactRegistryPackage: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage {
  /** Hash types and values of the Python Artifact. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** URI of the uploaded artifact. */
  uri?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Results {
  /** Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  artifactManifest?: string;
  /** List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 50KB of data is stored. Note that the `$BUILDER_OUTPUT` variable is read-only and can't be substituted. */
  buildStepOutputs?: ReadonlyArray<string>;
  /** Results for build steps. step_id -> */
  buildStepResults?: Record<
    string,
    ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepResults
  >;
  /** Maven artifacts uploaded to Artifact Registry at the end of the build. */
  mavenArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact>;
  /** Time to push all non-container artifacts to Cloud Storage. */
  artifactTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Optional. Go module artifacts uploaded to Artifact Registry at the end of the build. */
  goModules?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule>;
  /** List of build step digests, in the order corresponding to build step indices. */
  buildStepImages?: ReadonlyArray<string>;
  /** Output only. Generic artifacts uploaded to Artifact Registry at the end of the build. */
  genericArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact>;
  /** Container images that were built as a part of the build. */
  images?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage>;
  /** Python artifacts uploaded to Artifact Registry at the end of the build. */
  pythonPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage>;
  /** Npm packages uploaded to Artifact Registry at the end of the build. */
  npmPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage>;
  /** Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  numArtifacts?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Results: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Results> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactManifest: Schema.optional(Schema.String),
    buildStepOutputs: Schema.optional(Schema.Array(Schema.String)),
    buildStepResults: Schema.optional(
      Schema.Record(
        Schema.String,
        ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepResults,
      ),
    ),
    mavenArtifacts: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact,
      ),
    ),
    artifactTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    goModules: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule),
    ),
    buildStepImages: Schema.optional(Schema.Array(Schema.String)),
    genericArtifacts: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact,
      ),
    ),
    images: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage),
    ),
    pythonPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage,
      ),
    ),
    npmPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage,
      ),
    ),
    numArtifacts: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Results",
  });

export interface TimeSpan {
  /** Start of time span. */
  startTime?: string;
  /** End of time span. */
  endTime?: string;
}

export const TimeSpan: Schema.Schema<TimeSpan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeSpan" });

export interface StepResult {
  name?: string;
  attestationContentName?: string;
  attestationType?: string;
}

export const StepResult: Schema.Schema<StepResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attestationContentName: Schema.optional(Schema.String),
    attestationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "StepResult" });

export interface Volume {
  /** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
  name?: string;
  /** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
  path?: string;
}

export const Volume: Schema.Schema<Volume> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "Volume" });

export interface BuildStep {
  /** Output only. Stores timing information for pulling this build step's builder image only. */
  pullTiming?: TimeSpan;
  /** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
  secretEnv?: ReadonlyArray<string>;
  /** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
  dir?: string;
  /** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
  waitFor?: ReadonlyArray<string>;
  /** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
  args?: ReadonlyArray<string>;
  /** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
  timeout?: string;
  /** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
  id?: string;
  /** Output only. Stores timing information for executing this build step. */
  timing?: TimeSpan;
  /** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
  allowFailure?: boolean;
  /** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
  automapSubstitutions?: boolean;
  /** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
  allowExitCodes?: ReadonlyArray<number>;
  /** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
  entrypoint?: string;
  /** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
  script?: string;
  /** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
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
  /** Remote configuration for the build step. */
  remoteConfig?: string;
  /** Output only. Return code from running the step. */
  exitCode?: number;
  results?: ReadonlyArray<StepResult>;
  /** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<Volume>;
  /** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
  name?: string;
}

export const BuildStep: Schema.Schema<BuildStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pullTiming: Schema.optional(TimeSpan),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    dir: Schema.optional(Schema.String),
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    timeout: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    timing: Schema.optional(TimeSpan),
    allowFailure: Schema.optional(Schema.Boolean),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    allowExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    entrypoint: Schema.optional(Schema.String),
    script: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
    remoteConfig: Schema.optional(Schema.String),
    exitCode: Schema.optional(Schema.Number),
    results: Schema.optional(Schema.Array(StepResult)),
    volumes: Schema.optional(Schema.Array(Volume)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildStep" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult {
  /** Optional. The type of attestation to be generated. */
  attestationType?: string;
  /** Required. The name of the result. */
  name?: string;
  /** Optional. The content of the attestation to be generated. */
  attestationContent?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attestationType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    attestationContent: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult",
  });

export interface BatchCreateOccurrencesRequest {
  /** Required. The occurrences to create. Max allowed length is 1000. */
  occurrences?: ReadonlyArray<Occurrence>;
}

export const BatchCreateOccurrencesRequest: Schema.Schema<BatchCreateOccurrencesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    occurrences: Schema.optional(Schema.Array(Occurrence)),
  }).annotate({ identifier: "BatchCreateOccurrencesRequest" });

export interface ArtifactRule {
  artifactRule?: ReadonlyArray<string>;
}

export const ArtifactRule: Schema.Schema<ArtifactRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactRule: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ArtifactRule" });

export interface SigningKey {
  /** key_id is an identifier for the signing key. */
  keyId?: string;
  /** This field contains the corresponding signature scheme. Eg: "rsassa-pss-sha256". */
  keyScheme?: string;
  /** This field identifies the specific signing method. Eg: "rsa", "ed25519", and "ecdsa". */
  keyType?: string;
  /** This field contains the actual public key. */
  publicKeyValue?: string;
}

export const SigningKey: Schema.Schema<SigningKey> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyId: Schema.optional(Schema.String),
    keyScheme: Schema.optional(Schema.String),
    keyType: Schema.optional(Schema.String),
    publicKeyValue: Schema.optional(Schema.String),
  }).annotate({ identifier: "SigningKey" });

export interface InToto {
  /** This field identifies the name of the step in the supply chain. */
  stepName?: string;
  expectedProducts?: ReadonlyArray<ArtifactRule>;
  /** This field contains the expected command used to perform the step. */
  expectedCommand?: ReadonlyArray<string>;
  /** This field contains the public keys that can be used to verify the signatures on the step metadata. */
  signingKeys?: ReadonlyArray<SigningKey>;
  /** This field contains a value that indicates the minimum number of keys that need to be used to sign the step's in-toto link. */
  threshold?: string;
  /** The following fields contain in-toto artifact rules identifying the artifacts that enter this supply chain step, and exit the supply chain step, i.e. materials and products of the step. */
  expectedMaterials?: ReadonlyArray<ArtifactRule>;
}

export const InToto: Schema.Schema<InToto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    stepName: Schema.optional(Schema.String),
    expectedProducts: Schema.optional(Schema.Array(ArtifactRule)),
    expectedCommand: Schema.optional(Schema.Array(Schema.String)),
    signingKeys: Schema.optional(Schema.Array(SigningKey)),
    threshold: Schema.optional(Schema.String),
    expectedMaterials: Schema.optional(Schema.Array(ArtifactRule)),
  }).annotate({ identifier: "InToto" });

export interface Deployable {
  /** Required. Resource URI for the artifact being deployed. */
  resourceUri?: ReadonlyArray<string>;
}

export const Deployable: Schema.Schema<Deployable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Deployable" });

export interface BuildSignature {
  /** Public key of the builder which can be used to verify that the related findings are valid and unchanged. If `key_type` is empty, this defaults to PEM encoded public keys. This field may be empty if `key_id` references an external key. For Cloud Build based signatures, this is a PEM encoded public key. To verify the Cloud Build signature, place the contents of this field into a file (public.pem). The signature field is base64-decoded into its binary representation in signature.bin, and the provenance bytes from `BuildDetails` are base64-decoded into a binary representation in signed.bin. OpenSSL can then verify the signature: `openssl sha256 -verify public.pem -signature signature.bin signed.bin` */
  publicKey?: string;
  /** An ID for the key used to sign. This could be either an ID for the key stored in `public_key` (such as the ID or fingerprint for a PGP key, or the CN for a cert), or a reference to an external key (such as a reference to a key in Cloud Key Management Service). */
  keyId?: string;
  /** Required. Signature of the related `BuildProvenance`. In JSON, this is base-64 encoded. */
  signature?: string;
  /** The type of the key, either stored in `public_key` or referenced in `key_id`. */
  keyType?:
    | "KEY_TYPE_UNSPECIFIED"
    | "PGP_ASCII_ARMORED"
    | "PKIX_PEM"
    | (string & {});
}

export const BuildSignature: Schema.Schema<BuildSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    publicKey: Schema.optional(Schema.String),
    keyId: Schema.optional(Schema.String),
    signature: Schema.optional(Schema.String),
    keyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildSignature" });

export interface Build {
  /** Signature of the build in occurrences pointing to this build note containing build details. */
  signature?: BuildSignature;
  /** Required. Immutable. Version of the builder which produced this build. */
  builderVersion?: string;
}

export const Build: Schema.Schema<Build> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signature: Schema.optional(BuildSignature),
    builderVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Build" });

export interface SBOMReferenceNote {
  /** The format that SBOM takes. E.g. may be spdx, cyclonedx, etc... */
  format?: string;
  /** The version of the format that the SBOM takes. E.g. if the format is spdx, the version may be 2.3. */
  version?: string;
}

export const SBOMReferenceNote: Schema.Schema<SBOMReferenceNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    format: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "SBOMReferenceNote" });

export interface DocumentNote {
  /** Provide a reference number that can be used to understand how to parse and interpret the rest of the file */
  spdxVersion?: string;
  /** Compliance with the SPDX specification includes populating the SPDX fields therein with data related to such fields ("SPDX-Metadata") */
  dataLicence?: string;
}

export const DocumentNote: Schema.Schema<DocumentNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spdxVersion: Schema.optional(Schema.String),
    dataLicence: Schema.optional(Schema.String),
  }).annotate({ identifier: "DocumentNote" });

export interface ExternalRef {
  /** Type of category (e.g. 'npm' for the PACKAGE_MANAGER category) */
  type?: string;
  /** The unique string with no spaces necessary to access the package-specific information, metadata, or content within the target location */
  locator?: string;
  /** An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package */
  category?:
    | "CATEGORY_UNSPECIFIED"
    | "SECURITY"
    | "PACKAGE_MANAGER"
    | "PERSISTENT_ID"
    | "OTHER"
    | (string & {});
  /** Human-readable information about the purpose and target of the reference */
  comment?: string;
}

export const ExternalRef: Schema.Schema<ExternalRef> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    locator: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExternalRef" });

export interface PackageInfoNote {
  /** List the licenses that have been declared by the authors of the package */
  licenseDeclared?: License;
  /** A short description of the package */
  summaryDescription?: string;
  /** Provide a place for the SPDX file creator to record a web site that serves as the package's home page */
  homePage?: string;
  /** Indicates whether the file content of this package has been available for or subjected to analysis when creating the SPDX document */
  analyzed?: boolean;
  /** This field provides an independently reproducible mechanism identifying specific contents of a package based on the actual files (except the SPDX file itself, if it is included in the package) that make up each package and that correlates to the data in this SPDX file */
  verificationCode?: string;
  /** This section identifies the download Universal Resource Locator (URL), or a specific location within a version control system (VCS) for the package at the time that the SPDX file was created */
  downloadLocation?: string;
  /** Contain the license the SPDX file creator has concluded as governing the This field is to contain a list of all licenses found in the package. The relationship between licenses (i.e., conjunctive, disjunctive) is not specified in this field – it is simply a listing of all licenses found */
  filesLicenseInfo?: ReadonlyArray<string>;
  /** ExternalRef */
  externalRefs?: ReadonlyArray<ExternalRef>;
  /** If the package identified in the SPDX file originated from a different person or organization than identified as Package Supplier, this field identifies from where or whom the package originally came */
  originator?: string;
  /** The type of package: OS, MAVEN, GO, GO_STDLIB, etc. */
  packageType?: string;
  /** Identify the actual distribution source for the package/directory identified in the SPDX file */
  supplier?: string;
  /** Provide an independently reproducible mechanism that permits unique identification of a specific package that correlates to the data in this SPDX file */
  checksum?: string;
  /** A more detailed description of the package */
  detailedDescription?: string;
  /** Identify the full name of the package as given by the Package Originator */
  title?: string;
  /** Identify the copyright holders of the package, as well as any dates present */
  copyright?: string;
  /** Identify the version of the package */
  version?: string;
  /** A place for the SPDX data creator to record, at the package level, acknowledgements that may be needed to be communicated in some contexts */
  attribution?: string;
}

export const PackageInfoNote: Schema.Schema<PackageInfoNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    licenseDeclared: Schema.optional(License),
    summaryDescription: Schema.optional(Schema.String),
    homePage: Schema.optional(Schema.String),
    analyzed: Schema.optional(Schema.Boolean),
    verificationCode: Schema.optional(Schema.String),
    downloadLocation: Schema.optional(Schema.String),
    filesLicenseInfo: Schema.optional(Schema.Array(Schema.String)),
    externalRefs: Schema.optional(Schema.Array(ExternalRef)),
    originator: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    supplier: Schema.optional(Schema.String),
    checksum: Schema.optional(Schema.String),
    detailedDescription: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    copyright: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    attribution: Schema.optional(Schema.String),
  }).annotate({ identifier: "PackageInfoNote" });

export interface Digest {
  /** `SHA1`, `SHA512` etc. */
  algo?: string;
  /** Value of the digest. */
  digestBytes?: string;
}

export const Digest: Schema.Schema<Digest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    algo: Schema.optional(Schema.String),
    digestBytes: Schema.optional(Schema.String),
  }).annotate({ identifier: "Digest" });

export interface Package {
  /** The version of the package. */
  version?: Version;
  /** The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
  /** The homepage for this package. */
  url?: string;
  /** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  packageType?: string;
  /** The description of this package. */
  description?: string;
  /** Required. Immutable. The name of the package. */
  name?: string;
  /** The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
  cpeUri?: string;
  /** Licenses that have been declared by the authors of the package. */
  license?: License;
  /** Hash value, typically a file digest, that allows unique identification a specific package. */
  digest?: ReadonlyArray<Digest>;
  /** The various channels by which a package is distributed. */
  distribution?: ReadonlyArray<Distribution>;
  /** A freeform text denoting the maintainer of this package. */
  maintainer?: string;
}

export const Package: Schema.Schema<Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Version),
    architecture: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    license: Schema.optional(License),
    digest: Schema.optional(Schema.Array(Digest)),
    distribution: Schema.optional(Schema.Array(Distribution)),
    maintainer: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface Basis {
  /** Required. Immutable. The fingerprint of the base image. */
  fingerprint?: Fingerprint;
  /** Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images. */
  resourceUrl?: string;
}

export const Basis: Schema.Schema<Basis> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Fingerprint),
    resourceUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "Basis" });

export interface Hint {
  /** Required. The human readable name of this attestation authority, for example "qa". */
  humanReadableName?: string;
}

export const Hint: Schema.Schema<Hint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    humanReadableName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Hint" });

export interface Authority {
  /** Hint hints at the purpose of the attestation authority. */
  hint?: Hint;
}

export const Authority: Schema.Schema<Authority> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hint: Schema.optional(Hint),
  }).annotate({ identifier: "Authority" });

export interface AISkillAnalysisNote {}

export const AISkillAnalysisNote: Schema.Schema<AISkillAnalysisNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AISkillAnalysisNote",
  });

export interface Detail {
  /** Required. The name of the package where the vulnerability was found. */
  package?: string;
  /** Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar. */
  cpeUri?: string;
  /** The name of the vendor of the product. */
  vendor?: string;
  /** A vendor-specific description of this note. */
  description?: string;
  /** The type of package; whether native or non native(ruby gems, node.js packages etc). */
  packageType?: string;
  /** The min version of the package in which the vulnerability exists. */
  minAffectedVersion?: Version;
  /** The severity (eg: distro assigned severity) for this vulnerability. */
  severityName?: string;
  /** The fix for this specific package version. */
  fixedLocation?: VulnerabilityLocation;
  /** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
  sourceUpdateTime?: string;
  /** The source from which the information in this Detail was obtained. */
  source?: string;
  /** Whether this detail is obsolete. Occurrences are expected not to point to obsolete details. */
  isObsolete?: boolean;
  /** The max version of the package in which the vulnerability exists. */
  maxAffectedVersion?: Version;
}

export const Detail: Schema.Schema<Detail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    package: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    vendor: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    minAffectedVersion: Schema.optional(Version),
    severityName: Schema.optional(Schema.String),
    fixedLocation: Schema.optional(VulnerabilityLocation),
    sourceUpdateTime: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    isObsolete: Schema.optional(Schema.Boolean),
    maxAffectedVersion: Schema.optional(Version),
  }).annotate({ identifier: "Detail" });

export interface CVSSv3 {
  privilegesRequired?:
    | "PRIVILEGES_REQUIRED_UNSPECIFIED"
    | "PRIVILEGES_REQUIRED_NONE"
    | "PRIVILEGES_REQUIRED_LOW"
    | "PRIVILEGES_REQUIRED_HIGH"
    | (string & {});
  scope?:
    | "SCOPE_UNSPECIFIED"
    | "SCOPE_UNCHANGED"
    | "SCOPE_CHANGED"
    | (string & {});
  exploitabilityScore?: number;
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | (string & {});
  impactScore?: number;
  confidentialityImpact?:
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
  /** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
}

export const CVSSv3: Schema.Schema<CVSSv3> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    privilegesRequired: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    exploitabilityScore: Schema.optional(Schema.Number),
    availabilityImpact: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    integrityImpact: Schema.optional(Schema.String),
    impactScore: Schema.optional(Schema.Number),
    confidentialityImpact: Schema.optional(Schema.String),
    attackComplexity: Schema.optional(Schema.String),
    attackVector: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
  }).annotate({ identifier: "CVSSv3" });

export interface KnowledgeBase {
  /** The KB name (generally of the form KB[0-9]+ i.e. KB123456). */
  name?: string;
  /** A link to the KB in the Windows update catalog - https://www.catalog.update.microsoft.com/ */
  url?: string;
}

export const KnowledgeBase: Schema.Schema<KnowledgeBase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "KnowledgeBase" });

export interface WindowsDetail {
  /** Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed kb's presence is considered a fix. */
  fixingKbs?: ReadonlyArray<KnowledgeBase>;
  /** Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar. */
  cpeUri?: string;
  /** Required. The name of the vulnerability. */
  name?: string;
  /** The description of the vulnerability. */
  description?: string;
}

export const WindowsDetail: Schema.Schema<WindowsDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixingKbs: Schema.optional(Schema.Array(KnowledgeBase)),
    cpeUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "WindowsDetail" });

export interface Vulnerability {
  /** The time this advisory was published by the source. */
  advisoryPublishTime?: string;
  /** A list of CWE for this vulnerability. For details, see: https://cwe.mitre.org/index.html */
  cwe?: ReadonlyArray<string>;
  /** The CVSS score for this vulnerability. */
  cvssScore?: number;
  /** CVSS version used to populate cvss_score and severity. */
  cvssVersion?:
    | "CVSS_VERSION_UNSPECIFIED"
    | "CVSS_VERSION_2"
    | "CVSS_VERSION_3"
    | (string & {});
  /** All information about the package to specifically identify this vulnerability. One entry per (version range and cpe_uri) the package vulnerability has manifested in. */
  details?: ReadonlyArray<Detail>;
  /** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
  sourceUpdateTime?: string;
  /** Note provider assigned impact of the vulnerability. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** The full description of the CVSS for version 3. */
  cvssV3?: CVSSv3;
  /** The full description of the CVSS for version 2. */
  cvssV2?: CVSS;
  /** Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version. */
  windowsDetails?: ReadonlyArray<WindowsDetail>;
}

export const Vulnerability: Schema.Schema<Vulnerability> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    advisoryPublishTime: Schema.optional(Schema.String),
    cwe: Schema.optional(Schema.Array(Schema.String)),
    cvssScore: Schema.optional(Schema.Number),
    cvssVersion: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Detail)),
    sourceUpdateTime: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    cvssV3: Schema.optional(CVSSv3),
    cvssV2: Schema.optional(CVSS),
    windowsDetails: Schema.optional(Schema.Array(WindowsDetail)),
  }).annotate({ identifier: "Vulnerability" });

export interface Note {
  /** A one sentence description of this note. */
  shortDescription?: string;
  /** A note describing a vulnerability assessment. */
  vulnerabilityAssessment?: VulnerabilityAssessmentNote;
  /** A note describing an in-toto link. */
  intoto?: InToto;
  /** A note describing an SPDX File. */
  spdxFile?: FileNote;
  /** A note describing something that can be deployed. */
  deployable?: Deployable;
  /** A note describing a secret. */
  secret?: SecretNote;
  /** Output only. The time this note was last updated. This field can be used as a filter in list requests. */
  updateTime?: string;
  /** A note describing build provenance for a verifiable build. */
  build?: Build;
  /** Other notes related to this note. */
  relatedNoteNames?: ReadonlyArray<string>;
  /** A note describing the initial analysis of a resource. */
  discovery?: Discovery;
  /** Output only. The time this note was created. This field can be used as a filter in list requests. */
  createTime?: string;
  /** A note describing an SBOM reference. */
  sbomReference?: SBOMReferenceNote;
  /** A note describing a software bill of materials. */
  sbom?: DocumentNote;
  /** A note describing an SPDX Package. */
  spdxPackage?: PackageInfoNote;
  /** URLs associated with this note. */
  relatedUrl?: ReadonlyArray<RelatedUrl>;
  /** Time of expiration for this note. Empty if note does not expire. */
  expirationTime?: string;
  /** A note describing a package hosted by various package managers. */
  package?: Package;
  /** Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name?: string;
  /** A note describing a base image. */
  baseImage?: Basis;
  /** A detailed description of this note. */
  longDescription?: string;
  /** Output only. The type of analysis. This field can be used as a filter in list requests. */
  kind?:
    | "NOTE_KIND_UNSPECIFIED"
    | "VULNERABILITY"
    | "BUILD"
    | "IMAGE"
    | "PACKAGE"
    | "DEPLOYMENT"
    | "DISCOVERY"
    | "ATTESTATION"
    | "INTOTO"
    | "SBOM"
    | "SPDX_PACKAGE"
    | "SPDX_FILE"
    | "SPDX_RELATIONSHIP"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | "AI_SKILL_ANALYSIS"
    | (string & {});
  /** A note describing an attestation role. */
  attestationAuthority?: Authority;
  /** A note describing an AI Skill analysis. */
  aiSkillAnalysis?: AISkillAnalysisNote;
  /** A note describing a package vulnerability. */
  vulnerability?: Vulnerability;
  /** A note describing an SPDX File. */
  spdxRelationship?: RelationshipNote;
}

export const Note: Schema.Schema<Note> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    shortDescription: Schema.optional(Schema.String),
    vulnerabilityAssessment: Schema.optional(VulnerabilityAssessmentNote),
    intoto: Schema.optional(InToto),
    spdxFile: Schema.optional(FileNote),
    deployable: Schema.optional(Deployable),
    secret: Schema.optional(SecretNote),
    updateTime: Schema.optional(Schema.String),
    build: Schema.optional(Build),
    relatedNoteNames: Schema.optional(Schema.Array(Schema.String)),
    discovery: Schema.optional(Discovery),
    createTime: Schema.optional(Schema.String),
    sbomReference: Schema.optional(SBOMReferenceNote),
    sbom: Schema.optional(DocumentNote),
    spdxPackage: Schema.optional(PackageInfoNote),
    relatedUrl: Schema.optional(Schema.Array(RelatedUrl)),
    expirationTime: Schema.optional(Schema.String),
    package: Schema.optional(Package),
    name: Schema.optional(Schema.String),
    baseImage: Schema.optional(Basis),
    longDescription: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    attestationAuthority: Schema.optional(Authority),
    aiSkillAnalysis: Schema.optional(AISkillAnalysisNote),
    vulnerability: Schema.optional(Vulnerability),
    spdxRelationship: Schema.optional(RelationshipNote),
  }).annotate({ identifier: "Note" });

export interface ListNotesResponse {
  /** Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: `projects/[PROJECT_ID]/locations/[LOCATION]` */
  unreachable?: ReadonlyArray<string>;
  /** The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results. */
  nextPageToken?: string;
  /** The notes requested. */
  notes?: ReadonlyArray<Note>;
}

export const ListNotesResponse: Schema.Schema<ListNotesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.Array(Note)),
  }).annotate({ identifier: "ListNotesResponse" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact {
  /** Required. Registry path to upload the generic artifact to, in the form projects/$PROJECT/locations/$LOCATION/repositories/$REPO/packages/$PACKAGE/versions/$VERSION */
  registryPath?: string;
  /** Required. Path to the generic artifact in the build's workspace to be uploaded to Artifact Registry. */
  folder?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryPath: Schema.optional(Schema.String),
    folder: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact",
  });

export interface GetPolicyOptions {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions: Schema.Schema<GetPolicyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GetPolicyOptions" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Volume {
  /** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
  name?: string;
  /** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
  path?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Volume: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Volume",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep {
  /** Output only. Stores timing information for pulling this build step's builder image only. */
  pullTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
  dir?: string;
  /** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
  secretEnv?: ReadonlyArray<string>;
  /** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
  waitFor?: ReadonlyArray<string>;
  /** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
  args?: ReadonlyArray<string>;
  /** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
  timeout?: string;
  /** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
  id?: string;
  /** Output only. Stores timing information for executing this build step. */
  timing?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
  allowFailure?: boolean;
  /** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
  automapSubstitutions?: boolean;
  /** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
  allowExitCodes?: ReadonlyArray<number>;
  /** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
  entrypoint?: string;
  /** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
  script?: string;
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
  /** Output only. Return code from running the step. */
  exitCode?: number;
  /** Declaration of results for this build step. */
  results?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult>;
  /** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume>;
  /** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
  name?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pullTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    dir: Schema.optional(Schema.String),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    timeout: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    timing: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    allowFailure: Schema.optional(Schema.Boolean),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    allowExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    env: Schema.optional(Schema.Array(Schema.String)),
    entrypoint: Schema.optional(Schema.String),
    script: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    exitCode: Schema.optional(Schema.Number),
    results: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult),
    ),
    volumes: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Volume),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule {
  /** Optional. Source path of the go.mod file in the build's workspace. If not specified, this will default to the current directory. e.g. ~/code/go/mypackage */
  sourcePath?: string;
  /** Optional. The Go module's semantic version in the form vX.Y.Z. e.g. v0.1.1 Pre-release identifiers can also be added by appending a dash and dot separated ASCII alphanumeric characters and hyphens. e.g. v0.2.3-alpha.x.12m.5 */
  moduleVersion?: string;
  /** Optional. Project ID of the Artifact Registry repository. Defaults to the build project. */
  repositoryProjectId?: string;
  /** Optional. Artifact Registry repository name. Specified Go modules will be zipped and uploaded to Artifact Registry with this location as a prefix. e.g. my-go-repo */
  repositoryName?: string;
  /** Optional. Location of the Artifact Registry repository. i.e. us-east1 Defaults to the build’s location. */
  repositoryLocation?: string;
  /** Optional. The Go module's "module path". e.g. example.com/foo/v2 */
  modulePath?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourcePath: Schema.optional(Schema.String),
    moduleVersion: Schema.optional(Schema.String),
    repositoryProjectId: Schema.optional(Schema.String),
    repositoryName: Schema.optional(Schema.String),
    repositoryLocation: Schema.optional(Schema.String),
    modulePath: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects {
  /** Path globs used to match files in the build's workspace. */
  paths?: ReadonlyArray<string>;
  /** Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. */
  location?: string;
  /** Output only. Stores timing information for pushing all artifact objects. */
  timing?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paths: Schema.optional(Schema.Array(Schema.String)),
    location: Schema.optional(Schema.String),
    timing: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact {
  /** Optional. Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. */
  path?: string;
  /** Maven `groupId` value used when uploading the artifact to Artifact Registry. */
  groupId?: string;
  /** Optional. Path to a folder containing the files to upload to Artifact Registry. This can be either an absolute path, e.g. `/workspace/my-app/target/`, or a relative path from /workspace, e.g. `my-app/target/`. This field is mutually exclusive with the `path` field. */
  deployFolder?: string;
  /** Maven `version` value used when uploading the artifact to Artifact Registry. */
  version?: string;
  /** Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Maven `artifactId` value used when uploading the artifact to Artifact Registry. */
  artifactId?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
    deployFolder: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
    artifactId: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage {
  /** Optional. Path to the package.json. e.g. workspace/path/to/package Only one of `archive` or `package_path` can be specified. */
  packagePath?: string;
  /** Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packagePath: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage {
  /** Path globs used to match files in the build's workspace. For Python/ Twine, this is usually `dist/*`, and sometimes additionally an `.asc` file. */
  paths?: ReadonlyArray<string>;
  /** Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY" Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paths: Schema.optional(Schema.Array(Schema.String)),
    repository: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci {
  /** Required. Path on the local file system where to find the container to upload. e.g. /workspace/my-image.tar */
  file?: string;
  /** Required. Registry path to upload the container to. e.g. us-east1-docker.pkg.dev/my-project/my-repo/my-image */
  registryPath?: string;
  /** Optional. Tags to apply to the uploaded image. e.g. latest, 1.0.0 */
  tags?: ReadonlyArray<string>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file: Schema.optional(Schema.String),
    registryPath: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts {
  /** Optional. A list of Go modules to be uploaded to Artifact Registry upon successful completion of all build steps. If any objects fail to be pushed, the build is marked FAILURE. */
  goModules?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule>;
  /** A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE. */
  objects?: ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects;
  /** A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE. */
  mavenArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact>;
  /** A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE. */
  npmPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage>;
  /** A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE. */
  images?: ReadonlyArray<string>;
  /** A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE. */
  pythonPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage>;
  /** Optional. A list of OCI images to be uploaded to Artifact Registry upon successful completion of all build steps. OCI images in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any images fail to be pushed, the build is marked FAILURE. */
  oci?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci>;
  /** Optional. A list of generic artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. If any artifacts fail to be pushed, the build is marked FAILURE. */
  genericArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    goModules: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule,
      ),
    ),
    objects: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects,
    ),
    mavenArtifacts: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact,
      ),
    ),
    npmPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage,
      ),
    ),
    images: Schema.optional(Schema.Array(Schema.String)),
    pythonPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage,
      ),
    ),
    oci: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci),
    ),
    genericArtifacts: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact,
      ),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption {
  /** The `WorkerPool` resource to execute the build on. You must have `cloudbuild.workerpools.use` on the project hosting the WorkerPool. Format projects/{project}/locations/{location}/workerPools/{workerPoolId} */
  name?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption> =
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
  /** Option to specify the logging mode, which determines if and where build logs are stored. */
  logging?:
    | "LOGGING_UNSPECIFIED"
    | "LEGACY"
    | "GCS_ONLY"
    | "STACKDRIVER_ONLY"
    | "CLOUD_LOGGING_ONLY"
    | "NONE"
    | (string & {});
  /** A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. These variables will be available to all build steps in this build. */
  secretEnv?: ReadonlyArray<string>;
  /** Compute Engine machine type on which to run the build. */
  machineType?:
    | "UNSPECIFIED"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_32"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_32"
    | "E2_MEDIUM"
    | (string & {});
  /** Option to include built-in and custom substitutions as env variables for all build steps. */
  automapSubstitutions?: boolean;
  /** Option to define build log streaming behavior to Cloud Storage. */
  logStreamingOption?:
    | "STREAM_DEFAULT"
    | "STREAM_ON"
    | "STREAM_OFF"
    | (string & {});
  /** Requested verifiability options. */
  requestedVerifyOption?: "NOT_VERIFIED" | "VERIFIED" | (string & {});
  /** This field deprecated; please use `pool.name` instead. */
  workerPool?: string;
  /** Optional. Option to specify whether structured logging is enabled. If true, JSON-formatted logs are parsed as structured logs. */
  enableStructuredLogging?: boolean;
  /** Optional. Option to specify how default logs buckets are setup. */
  defaultLogsBucketBehavior?:
    | "DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED"
    | "REGIONAL_USER_OWNED_BUCKET"
    | "LEGACY_BUCKET"
    | (string & {});
  /** Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. */
  substitutionOption?: "MUST_MATCH" | "ALLOW_LOOSE" | (string & {});
  /** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
  dynamicSubstitutions?: boolean;
  /** Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
  pool?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption;
  /** A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** Optional. Option to specify the Pub/Sub topic to receive build status updates. */
  pubsubTopic?: string;
  /** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 4000GB; builds that request more than the maximum are rejected with an error. */
  diskSizeGb?: string;
  /** Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceProvenanceHash: Schema.optional(Schema.Array(Schema.String)),
    logging: Schema.optional(Schema.String),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    machineType: Schema.optional(Schema.String),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    logStreamingOption: Schema.optional(Schema.String),
    requestedVerifyOption: Schema.optional(Schema.String),
    workerPool: Schema.optional(Schema.String),
    enableStructuredLogging: Schema.optional(Schema.Boolean),
    defaultLogsBucketBehavior: Schema.optional(Schema.String),
    substitutionOption: Schema.optional(Schema.String),
    dynamicSubstitutions: Schema.optional(Schema.Boolean),
    pool: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption,
    ),
    env: Schema.optional(Schema.Array(Schema.String)),
    pubsubTopic: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.String),
    volumes: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Volume),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions",
  });

export interface FixableTotalByDigest {
  /** The number of fixable vulnerabilities associated with this resource. */
  fixableCount?: string;
  /** The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** The affected resource. */
  resource?: Resource;
  /** The total number of vulnerabilities associated with this resource. */
  totalCount?: string;
}

export const FixableTotalByDigest: Schema.Schema<FixableTotalByDigest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixableCount: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    resource: Schema.optional(Resource),
    totalCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "FixableTotalByDigest" });

export interface VulnerabilityOccurrencesSummary {
  /** Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: `projects/[PROJECT_ID]/locations/[LOCATION]` */
  unreachable?: ReadonlyArray<string>;
  /** A listing by resource of the number of fixable and total vulnerabilities. */
  counts?: ReadonlyArray<FixableTotalByDigest>;
}

export const VulnerabilityOccurrencesSummary: Schema.Schema<VulnerabilityOccurrencesSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    counts: Schema.optional(Schema.Array(FixableTotalByDigest)),
  }).annotate({ identifier: "VulnerabilityOccurrencesSummary" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGenericArtifactDependency {
  /** Required. The location to download the artifact files from. Ex: projects/p1/locations/us/repositories/r1/packages/p1/versions/v1 */
  resource?: string;
  /** Required. Where the artifact files should be placed on the worker. */
  destPath?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGenericArtifactDependency: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGenericArtifactDependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    destPath: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGenericArtifactDependency",
  });

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

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository {
  /** Location of the Git repository. */
  url?: string;
  /** The Developer Connect Git repository link formatted as `projects/* /locations/* /connections/* /gitRepositoryLink/*` */
  developerConnect?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    developerConnect: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret {
  /** Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/* */
  versionName?: string;
  /** Environment variable name to associate with the secret. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. */
  env?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret> =
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

export const ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret> =
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

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets> =
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

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig {
  /** Whether or not approval is needed. If this is set on a build, it will become pending when created, and will need to be explicitly approved to start. */
  approvalRequired?: boolean;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    approvalRequired: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig",
  });

export interface Policy {
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Policy" });

export interface GeneratePackagesSummaryRequest {}

export const GeneratePackagesSummaryRequest: Schema.Schema<GeneratePackagesSummaryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GeneratePackagesSummaryRequest",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency {
  /** Required. The revision that we will fetch the repo at. */
  revision?: string;
  /** Optional. True if submodules should be fetched too (default false). */
  recurseSubmodules?: boolean;
  /** Required. Where should the files be placed on the worker. */
  destPath?: string;
  /** Required. The kind of repo (url or dev connect). */
  repository?: ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository;
  /** Optional. How much history should be fetched for the build (default 1, -1 for all history). */
  depth?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revision: Schema.optional(Schema.String),
    recurseSubmodules: Schema.optional(Schema.Boolean),
    destPath: Schema.optional(Schema.String),
    repository: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository,
    ),
    depth: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency {
  /** Represents a generic artifact as a build dependency. */
  genericArtifact?: ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGenericArtifactDependency;
  /** If set to true disable all dependency fetching (ignoring the default source as well). */
  empty?: boolean;
  /** Represents a git repository as a build dependency. */
  gitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericArtifact: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGenericArtifactDependency,
    ),
    empty: Schema.optional(Schema.Boolean),
    gitSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency",
  });

export interface BatchCreateNotesRequest {
  /** Required. The notes to create, the key is expected to be the note ID. Max allowed length is 1000. */
  notes?: Record<string, Note>;
}

export const BatchCreateNotesRequest: Schema.Schema<BatchCreateNotesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notes: Schema.optional(Schema.Record(Schema.String, Note)),
  }).annotate({ identifier: "BatchCreateNotesRequest" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

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

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    detail: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo",
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

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance {
  /** A copy of the build's `source.storage_source`, if exists, with any generations resolved. */
  resolvedStorageSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;
  /** A copy of the build's `source.repo_source`, if exists, with any revisions resolved. */
  resolvedRepoSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;
  /** Output only. A copy of the build's `source.git_source`, if exists, with any revisions resolved. */
  resolvedGitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;
  /** A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview. */
  resolvedStorageSourceManifest?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
  /** Output only. A copy of the build's `source.connected_repository`, if exists, with any revisions resolved. */
  resolvedConnectedRepository?: ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;
  /** Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file. */
  fileHashes?: Record<
    string,
    ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes
  >;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolvedStorageSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource,
    ),
    resolvedRepoSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource,
    ),
    resolvedGitSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource,
    ),
    resolvedStorageSourceManifest: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
    resolvedConnectedRepository: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository,
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

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Secret {
  /** Cloud KMS key name to use to decrypt these envs. */
  kmsKeyName?: string;
  /** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
  secretEnv?: Record<string, string>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Secret: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    secretEnv: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Secret",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig {
  /** SecretVersion resource of the HTTP proxy URL. The Service Account used in the build (either the default Service Account or user-specified Service Account) should have `secretmanager.versions.access` permissions on this secret. The proxy URL should be in format `protocol://@]proxyhost[:port]`. */
  proxySecretVersionName?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig> =
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

export const ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    http: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfigHttpConfig,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult {
  /** Required. The decision of this manual approval. */
  decision?: "DECISION_UNSPECIFIED" | "APPROVED" | "REJECTED" | (string & {});
  /** Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. */
  url?: string;
  /** Output only. The time when the approval decision was made. */
  approvalTime?: string;
  /** Optional. An optional comment for this manual approval result. */
  comment?: string;
  /** Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. */
  approverAccount?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    decision: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    approvalTime: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    approverAccount: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval {
  /** Output only. Result of manual approval for this Build. */
  result?: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult;
  /** Output only. Configuration for manual approval of this build. */
  config?: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig;
  /** Output only. The state of this build's approval. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "APPROVED"
    | "REJECTED"
    | "CANCELLED"
    | (string & {});
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult,
    ),
    config: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig,
    ),
    state: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Build {
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
  /** Required. The operations to be performed on the workspace. */
  steps?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep>;
  /** Output only. Contains information about the build when status=FAILURE. */
  failureInfo?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo;
  /** Output only. Customer-readable message about the current status. */
  statusDetail?: string;
  /** Substitutions data for `Build` resource. */
  substitutions?: Record<string, string>;
  /** Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service. */
  name?: string;
  /** Output only. Results of the build. */
  results?: ContaineranalysisGoogleDevtoolsCloudbuildV1Results;
  /** Output only. Non-fatal problems encountered during the execution of the build. */
  warnings?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning>;
  /** Output only. A permanent fixed identifier for source. */
  sourceProvenance?: ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance;
  /** A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`. */
  images?: ReadonlyArray<string>;
  /** Tags for annotation of a `Build`. These are not docker tags. */
  tags?: ReadonlyArray<string>;
  /** Output only. URL to logs for this build in Google Cloud Console. */
  logUrl?: string;
  /** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes. */
  timeout?: string;
  /** Output only. Unique identifier of the build. */
  id?: string;
  /** Optional. The location of the source files to build. */
  source?: ContaineranalysisGoogleDevtoolsCloudbuildV1Source;
  /** Output only. ID of the project. */
  projectId?: string;
  /** Artifacts produced by the build that should be uploaded upon successful completion of all build steps. */
  artifacts?: ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts;
  /** Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets */
  secrets?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Secret>;
  /** Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution. */
  finishTime?: string;
  /** IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. */
  serviceAccount?: string;
  /** Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically. */
  buildTriggerId?: string;
  /** Output only. Time at which execution of the build was started. */
  startTime?: string;
  /** TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time. */
  queueTtl?: string;
  /** Optional. Dependencies that the Cloud Build worker will fetch before executing user steps. */
  dependencies?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency>;
  /** Secrets and secret environment variables. */
  availableSecrets?: ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets;
  /** Output only. Time at which the request to create the build was received. */
  createTime?: string;
  /** Special options for this build. */
  options?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions;
  /** Optional. Configuration for git operations. */
  gitConfig?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig;
  /** Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included. */
  timing?: Record<string, ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan>;
  /** Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
  logsBucket?: string;
  /** Output only. Describes this build's approval configuration, status, and result. */
  approval?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Build: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Build> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    steps: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep),
    ),
    failureInfo: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo,
    ),
    statusDetail: Schema.optional(Schema.String),
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    results: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1Results,
    ),
    warnings: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning),
    ),
    sourceProvenance: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance,
    ),
    images: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.String)),
    logUrl: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    source: Schema.optional(ContaineranalysisGoogleDevtoolsCloudbuildV1Source),
    projectId: Schema.optional(Schema.String),
    artifacts: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts,
    ),
    secrets: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Secret),
    ),
    finishTime: Schema.optional(Schema.String),
    serviceAccount: Schema.optional(Schema.String),
    buildTriggerId: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    queueTtl: Schema.optional(Schema.String),
    dependencies: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency),
    ),
    availableSecrets: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets,
    ),
    createTime: Schema.optional(Schema.String),
    options: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions,
    ),
    gitConfig: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig,
    ),
    timing: Schema.optional(
      Schema.Record(
        Schema.String,
        ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
      ),
    ),
    logsBucket: Schema.optional(Schema.String),
    approval: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Build",
  });

export interface BatchCreateOccurrencesResponse {
  /** The occurrences that were created. */
  occurrences?: ReadonlyArray<Occurrence>;
}

export const BatchCreateOccurrencesResponse: Schema.Schema<BatchCreateOccurrencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    occurrences: Schema.optional(Schema.Array(Occurrence)),
  }).annotate({ identifier: "BatchCreateOccurrencesResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ExportSBOMResponse {
  /** The name of the discovery occurrence in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID} It can be used to track the progression of the SBOM export. */
  discoveryOccurrenceId?: string;
}

export const ExportSBOMResponse: Schema.Schema<ExportSBOMResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveryOccurrenceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportSBOMResponse" });

export interface ExportSBOMRequest {}

export const ExportSBOMRequest: Schema.Schema<ExportSBOMRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ExportSBOMRequest",
  });

export interface BatchCreateNotesResponse {
  /** The notes that were created. */
  notes?: ReadonlyArray<Note>;
}

export const BatchCreateNotesResponse: Schema.Schema<BatchCreateNotesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notes: Schema.optional(Schema.Array(Note)),
  }).annotate({ identifier: "BatchCreateNotesResponse" });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

export interface GetIamPolicyRequest {
  /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest: Schema.Schema<GetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(GetPolicyOptions),
  }).annotate({ identifier: "GetIamPolicyRequest" });

export interface ListOccurrencesResponse {
  /** Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: `projects/[PROJECT_ID]/locations/[LOCATION]` */
  unreachable?: ReadonlyArray<string>;
  /** The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results. */
  nextPageToken?: string;
  /** The occurrences requested. */
  occurrences?: ReadonlyArray<Occurrence>;
}

export const ListOccurrencesResponse: Schema.Schema<ListOccurrencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    occurrences: Schema.optional(Schema.Array(Occurrence)),
  }).annotate({ identifier: "ListOccurrencesResponse" });

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

export interface PatchProjectsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
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
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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

/** Updates the specified occurrence. */
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
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const GetNotesProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/notes" }),
    svc,
  ) as unknown as Schema.Schema<GetNotesProjectsOccurrencesRequest>;

export type GetNotesProjectsOccurrencesResponse = Note;
export const GetNotesProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Note;

export type GetNotesProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project. */
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

export interface CreateProjectsOccurrencesRequest {
  /** Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created. */
  parent: string;
  /** Request body */
  body?: Occurrence;
}

export const CreateProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Occurrence).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/occurrences",
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

/** Creates a new occurrence. */
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

export interface GetProjectsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const GetProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsOccurrencesRequest>;

export type GetProjectsOccurrencesResponse = Occurrence;
export const GetProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Occurrence;

export type GetProjectsOccurrencesError = DefaultErrors | NotFound | Forbidden;

/** Gets the specified occurrence. */
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

export interface GetVulnerabilitySummaryProjectsOccurrencesRequest {
  /** Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
  /** The filter expression. */
  filter?: string;
  /** If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
}

export const GetVulnerabilitySummaryProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/occurrences:vulnerabilitySummary",
    }),
    svc,
  ) as unknown as Schema.Schema<GetVulnerabilitySummaryProjectsOccurrencesRequest>;

export type GetVulnerabilitySummaryProjectsOccurrencesResponse =
  VulnerabilityOccurrencesSummary;
export const GetVulnerabilitySummaryProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ VulnerabilityOccurrencesSummary;

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
      path: "v1beta1/{+resource}:getIamPolicy",
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

/** Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
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
      path: "v1beta1/{+resource}:setIamPolicy",
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

/** Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
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
      path: "v1beta1/{+resource}:testIamPermissions",
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

/** Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
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

export interface ListProjectsOccurrencesRequest {
  /** Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
  /** The filter expression. */
  filter?: string;
  /** If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. */
  pageSize?: number;
}

export const ListProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/occurrences" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsOccurrencesRequest>;

export type ListProjectsOccurrencesResponse = ListOccurrencesResponse;
export const ListProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOccurrencesResponse;

export type ListProjectsOccurrencesError = DefaultErrors | NotFound | Forbidden;

/** Lists occurrences for the specified project. */
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

export interface BatchCreateProjectsOccurrencesRequest {
  /** Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created. */
  parent: string;
  /** Request body */
  body?: BatchCreateOccurrencesRequest;
}

export const BatchCreateProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchCreateOccurrencesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/occurrences:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsOccurrencesRequest>;

export type BatchCreateProjectsOccurrencesResponse =
  BatchCreateOccurrencesResponse;
export const BatchCreateProjectsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchCreateOccurrencesResponse;

export type BatchCreateProjectsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new occurrences in batch. */
export const batchCreateProjectsOccurrences: API.OperationMethod<
  BatchCreateProjectsOccurrencesRequest,
  BatchCreateProjectsOccurrencesResponse,
  BatchCreateProjectsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsOccurrencesRequest,
  output: BatchCreateProjectsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const DeleteProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

/** Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource. */
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

export interface GeneratePackagesSummaryProjectsResourcesRequest {
  /** Required. The name of the resource to get a packages summary for in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`. */
  name: string;
  /** Request body */
  body?: GeneratePackagesSummaryRequest;
}

export const GeneratePackagesSummaryProjectsResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GeneratePackagesSummaryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:generatePackagesSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GeneratePackagesSummaryProjectsResourcesRequest>;

export type GeneratePackagesSummaryProjectsResourcesResponse =
  PackagesSummaryResponse;
export const GeneratePackagesSummaryProjectsResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PackagesSummaryResponse;

export type GeneratePackagesSummaryProjectsResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets a summary of the packages within a given resource. */
export const generatePackagesSummaryProjectsResources: API.OperationMethod<
  GeneratePackagesSummaryProjectsResourcesRequest,
  GeneratePackagesSummaryProjectsResourcesResponse,
  GeneratePackagesSummaryProjectsResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GeneratePackagesSummaryProjectsResourcesRequest,
  output: GeneratePackagesSummaryProjectsResourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportSBOMProjectsResourcesRequest {
  /** Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`. */
  name: string;
  /** Request body */
  body?: ExportSBOMRequest;
}

export const ExportSBOMProjectsResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExportSBOMRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:exportSBOM",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportSBOMProjectsResourcesRequest>;

export type ExportSBOMProjectsResourcesResponse = ExportSBOMResponse;
export const ExportSBOMProjectsResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExportSBOMResponse;

export type ExportSBOMProjectsResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates an SBOM and other dependency information for the given resource. */
export const exportSBOMProjectsResources: API.OperationMethod<
  ExportSBOMProjectsResourcesRequest,
  ExportSBOMProjectsResourcesResponse,
  ExportSBOMProjectsResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportSBOMProjectsResourcesRequest,
  output: ExportSBOMProjectsResourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsNotesRequest {
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. */
  pageSize?: number;
  /** The filter expression. */
  filter?: string;
  /** If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
  /** Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
}

export const ListProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/notes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsNotesRequest>;

export type ListProjectsLocationsNotesResponse = ListNotesResponse;
export const ListProjectsLocationsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNotesResponse;

export type ListProjectsLocationsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists notes for the specified project. */
export const listProjectsLocationsNotes: API.PaginatedOperationMethod<
  ListProjectsLocationsNotesRequest,
  ListProjectsLocationsNotesResponse,
  ListProjectsLocationsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsNotesRequest,
  output: ListProjectsLocationsNotesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchCreateProjectsLocationsNotesRequest {
  /** Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created. */
  parent: string;
  /** Request body */
  body?: BatchCreateNotesRequest;
}

export const BatchCreateProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchCreateNotesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/notes:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsLocationsNotesRequest>;

export type BatchCreateProjectsLocationsNotesResponse =
  BatchCreateNotesResponse;
export const BatchCreateProjectsLocationsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchCreateNotesResponse;

export type BatchCreateProjectsLocationsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new notes in batch. */
export const batchCreateProjectsLocationsNotes: API.OperationMethod<
  BatchCreateProjectsLocationsNotesRequest,
  BatchCreateProjectsLocationsNotesResponse,
  BatchCreateProjectsLocationsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsLocationsNotesRequest,
  output: BatchCreateProjectsLocationsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsLocationsNotesRequest {
  /** Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
}

export const DeleteProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsNotesRequest>;

export type DeleteProjectsLocationsNotesResponse = Empty;
export const DeleteProjectsLocationsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified note. */
export const deleteProjectsLocationsNotes: API.OperationMethod<
  DeleteProjectsLocationsNotesRequest,
  DeleteProjectsLocationsNotesResponse,
  DeleteProjectsLocationsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsNotesRequest,
  output: DeleteProjectsLocationsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsNotesRequest {
  /** Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
  /** The fields to update. */
  updateMask?: string;
  /** Request body */
  body?: Note;
}

export const PatchProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Note).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsNotesRequest>;

export type PatchProjectsLocationsNotesResponse = Note;
export const PatchProjectsLocationsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Note;

export type PatchProjectsLocationsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified note. */
export const patchProjectsLocationsNotes: API.OperationMethod<
  PatchProjectsLocationsNotesRequest,
  PatchProjectsLocationsNotesResponse,
  PatchProjectsLocationsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsNotesRequest,
  output: PatchProjectsLocationsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsNotesRequest {
  /** Required. The ID to use for this note. */
  noteId?: string;
  /** Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created. */
  parent: string;
  /** Request body */
  body?: Note;
}

export const CreateProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noteId: Schema.optional(Schema.String).pipe(T.HttpQuery("noteId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Note).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+parent}/notes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsNotesRequest>;

export type CreateProjectsLocationsNotesResponse = Note;
export const CreateProjectsLocationsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Note;

export type CreateProjectsLocationsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new note. */
export const createProjectsLocationsNotes: API.OperationMethod<
  CreateProjectsLocationsNotesRequest,
  CreateProjectsLocationsNotesResponse,
  CreateProjectsLocationsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsNotesRequest,
  output: CreateProjectsLocationsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsNotesRequest {
  /** Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
}

export const GetProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsNotesRequest>;

export type GetProjectsLocationsNotesResponse = Note;
export const GetProjectsLocationsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Note;

export type GetProjectsLocationsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified note. */
export const getProjectsLocationsNotes: API.OperationMethod<
  GetProjectsLocationsNotesRequest,
  GetProjectsLocationsNotesResponse,
  GetProjectsLocationsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsNotesRequest,
  output: GetProjectsLocationsNotesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyProjectsLocationsNotesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsNotesRequest>;

export type GetIamPolicyProjectsLocationsNotesResponse = Policy;
export const GetIamPolicyProjectsLocationsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
export const getIamPolicyProjectsLocationsNotes: API.OperationMethod<
  GetIamPolicyProjectsLocationsNotesRequest,
  GetIamPolicyProjectsLocationsNotesResponse,
  GetIamPolicyProjectsLocationsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsNotesRequest,
  output: GetIamPolicyProjectsLocationsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsNotesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsNotesRequest>;

export type SetIamPolicyProjectsLocationsNotesResponse = Policy;
export const SetIamPolicyProjectsLocationsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
export const setIamPolicyProjectsLocationsNotes: API.OperationMethod<
  SetIamPolicyProjectsLocationsNotesRequest,
  SetIamPolicyProjectsLocationsNotesResponse,
  SetIamPolicyProjectsLocationsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsNotesRequest,
  output: SetIamPolicyProjectsLocationsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsNotesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsNotesRequest>;

export type TestIamPermissionsProjectsLocationsNotesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
export const testIamPermissionsProjectsLocationsNotes: API.OperationMethod<
  TestIamPermissionsProjectsLocationsNotesRequest,
  TestIamPermissionsProjectsLocationsNotesResponse,
  TestIamPermissionsProjectsLocationsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsNotesRequest,
  output: TestIamPermissionsProjectsLocationsNotesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsNotesOccurrencesRequest {
  /** The filter expression. */
  filter?: string;
  /** Number of occurrences to return in the list. */
  pageSize?: number;
  /** Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
}

export const ListProjectsLocationsNotesOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/occurrences" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsNotesOccurrencesRequest>;

export type ListProjectsLocationsNotesOccurrencesResponse =
  ListNoteOccurrencesResponse;
export const ListProjectsLocationsNotesOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNoteOccurrencesResponse;

export type ListProjectsLocationsNotesOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note. */
export const listProjectsLocationsNotesOccurrences: API.PaginatedOperationMethod<
  ListProjectsLocationsNotesOccurrencesRequest,
  ListProjectsLocationsNotesOccurrencesResponse,
  ListProjectsLocationsNotesOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsNotesOccurrencesRequest,
  output: ListProjectsLocationsNotesOccurrencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsOccurrencesRequest {
  /** Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created. */
  parent: string;
  /** Request body */
  body?: Occurrence;
}

export const CreateProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Occurrence).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/occurrences",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsOccurrencesRequest>;

export type CreateProjectsLocationsOccurrencesResponse = Occurrence;
export const CreateProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Occurrence;

export type CreateProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new occurrence. */
export const createProjectsLocationsOccurrences: API.OperationMethod<
  CreateProjectsLocationsOccurrencesRequest,
  CreateProjectsLocationsOccurrencesResponse,
  CreateProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsOccurrencesRequest,
  output: CreateProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetNotesProjectsLocationsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const GetNotesProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/notes" }),
    svc,
  ) as unknown as Schema.Schema<GetNotesProjectsLocationsOccurrencesRequest>;

export type GetNotesProjectsLocationsOccurrencesResponse = Note;
export const GetNotesProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Note;

export type GetNotesProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project. */
export const getNotesProjectsLocationsOccurrences: API.OperationMethod<
  GetNotesProjectsLocationsOccurrencesRequest,
  GetNotesProjectsLocationsOccurrencesResponse,
  GetNotesProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetNotesProjectsLocationsOccurrencesRequest,
  output: GetNotesProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
  /** The fields to update. */
  updateMask?: string;
  /** Request body */
  body?: Occurrence;
}

export const PatchProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Occurrence).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsOccurrencesRequest>;

export type PatchProjectsLocationsOccurrencesResponse = Occurrence;
export const PatchProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Occurrence;

export type PatchProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the specified occurrence. */
export const patchProjectsLocationsOccurrences: API.OperationMethod<
  PatchProjectsLocationsOccurrencesRequest,
  PatchProjectsLocationsOccurrencesResponse,
  PatchProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsOccurrencesRequest,
  output: PatchProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetIamPolicyProjectsLocationsOccurrencesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsOccurrencesRequest>;

export type SetIamPolicyProjectsLocationsOccurrencesResponse = Policy;
export const SetIamPolicyProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
export const setIamPolicyProjectsLocationsOccurrences: API.OperationMethod<
  SetIamPolicyProjectsLocationsOccurrencesRequest,
  SetIamPolicyProjectsLocationsOccurrencesResponse,
  SetIamPolicyProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsOccurrencesRequest,
  output: SetIamPolicyProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface TestIamPermissionsProjectsLocationsOccurrencesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsOccurrencesRequest>;

export type TestIamPermissionsProjectsLocationsOccurrencesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
export const testIamPermissionsProjectsLocationsOccurrences: API.OperationMethod<
  TestIamPermissionsProjectsLocationsOccurrencesRequest,
  TestIamPermissionsProjectsLocationsOccurrencesResponse,
  TestIamPermissionsProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsOccurrencesRequest,
  output: TestIamPermissionsProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetVulnerabilitySummaryProjectsLocationsOccurrencesRequest {
  /** Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
  /** The filter expression. */
  filter?: string;
  /** If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
}

export const GetVulnerabilitySummaryProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1beta1/{+parent}/occurrences:vulnerabilitySummary",
    }),
    svc,
  ) as unknown as Schema.Schema<GetVulnerabilitySummaryProjectsLocationsOccurrencesRequest>;

export type GetVulnerabilitySummaryProjectsLocationsOccurrencesResponse =
  VulnerabilityOccurrencesSummary;
export const GetVulnerabilitySummaryProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ VulnerabilityOccurrencesSummary;

export type GetVulnerabilitySummaryProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a summary of the number and severity of occurrences. */
export const getVulnerabilitySummaryProjectsLocationsOccurrences: API.OperationMethod<
  GetVulnerabilitySummaryProjectsLocationsOccurrencesRequest,
  GetVulnerabilitySummaryProjectsLocationsOccurrencesResponse,
  GetVulnerabilitySummaryProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVulnerabilitySummaryProjectsLocationsOccurrencesRequest,
  output: GetVulnerabilitySummaryProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetIamPolicyProjectsLocationsOccurrencesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: GetIamPolicyRequest;
}

export const GetIamPolicyProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(GetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+resource}:getIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsOccurrencesRequest>;

export type GetIamPolicyProjectsLocationsOccurrencesResponse = Policy;
export const GetIamPolicyProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
export const getIamPolicyProjectsLocationsOccurrences: API.OperationMethod<
  GetIamPolicyProjectsLocationsOccurrencesRequest,
  GetIamPolicyProjectsLocationsOccurrencesResponse,
  GetIamPolicyProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsOccurrencesRequest,
  output: GetIamPolicyProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const GetProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOccurrencesRequest>;

export type GetProjectsLocationsOccurrencesResponse = Occurrence;
export const GetProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Occurrence;

export type GetProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the specified occurrence. */
export const getProjectsLocationsOccurrences: API.OperationMethod<
  GetProjectsLocationsOccurrencesRequest,
  GetProjectsLocationsOccurrencesResponse,
  GetProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOccurrencesRequest,
  output: GetProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const DeleteProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOccurrencesRequest>;

export type DeleteProjectsLocationsOccurrencesResponse = Empty;
export const DeleteProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource. */
export const deleteProjectsLocationsOccurrences: API.OperationMethod<
  DeleteProjectsLocationsOccurrencesRequest,
  DeleteProjectsLocationsOccurrencesResponse,
  DeleteProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOccurrencesRequest,
  output: DeleteProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOccurrencesRequest {
  /** Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. */
  pageSize?: number;
  /** The filter expression. */
  filter?: string;
  /** If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/occurrences" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOccurrencesRequest>;

export type ListProjectsLocationsOccurrencesResponse = ListOccurrencesResponse;
export const ListProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOccurrencesResponse;

export type ListProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists occurrences for the specified project. */
export const listProjectsLocationsOccurrences: API.PaginatedOperationMethod<
  ListProjectsLocationsOccurrencesRequest,
  ListProjectsLocationsOccurrencesResponse,
  ListProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOccurrencesRequest,
  output: ListProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface BatchCreateProjectsLocationsOccurrencesRequest {
  /** Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created. */
  parent: string;
  /** Request body */
  body?: BatchCreateOccurrencesRequest;
}

export const BatchCreateProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchCreateOccurrencesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/occurrences:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsLocationsOccurrencesRequest>;

export type BatchCreateProjectsLocationsOccurrencesResponse =
  BatchCreateOccurrencesResponse;
export const BatchCreateProjectsLocationsOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchCreateOccurrencesResponse;

export type BatchCreateProjectsLocationsOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new occurrences in batch. */
export const batchCreateProjectsLocationsOccurrences: API.OperationMethod<
  BatchCreateProjectsLocationsOccurrencesRequest,
  BatchCreateProjectsLocationsOccurrencesResponse,
  BatchCreateProjectsLocationsOccurrencesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsLocationsOccurrencesRequest,
  output: BatchCreateProjectsLocationsOccurrencesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportSBOMProjectsLocationsResourcesRequest {
  /** Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`. */
  name: string;
  /** Request body */
  body?: ExportSBOMRequest;
}

export const ExportSBOMProjectsLocationsResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ExportSBOMRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:exportSBOM",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportSBOMProjectsLocationsResourcesRequest>;

export type ExportSBOMProjectsLocationsResourcesResponse = ExportSBOMResponse;
export const ExportSBOMProjectsLocationsResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExportSBOMResponse;

export type ExportSBOMProjectsLocationsResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Generates an SBOM and other dependency information for the given resource. */
export const exportSBOMProjectsLocationsResources: API.OperationMethod<
  ExportSBOMProjectsLocationsResourcesRequest,
  ExportSBOMProjectsLocationsResourcesResponse,
  ExportSBOMProjectsLocationsResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportSBOMProjectsLocationsResourcesRequest,
  output: ExportSBOMProjectsLocationsResourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GeneratePackagesSummaryProjectsLocationsResourcesRequest {
  /** Required. The name of the resource to get a packages summary for in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`. */
  name: string;
  /** Request body */
  body?: GeneratePackagesSummaryRequest;
}

export const GeneratePackagesSummaryProjectsLocationsResourcesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GeneratePackagesSummaryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+name}:generatePackagesSummary",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<GeneratePackagesSummaryProjectsLocationsResourcesRequest>;

export type GeneratePackagesSummaryProjectsLocationsResourcesResponse =
  PackagesSummaryResponse;
export const GeneratePackagesSummaryProjectsLocationsResourcesResponse =
  /*@__PURE__*/ /*#__PURE__*/ PackagesSummaryResponse;

export type GeneratePackagesSummaryProjectsLocationsResourcesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets a summary of the packages within a given resource. */
export const generatePackagesSummaryProjectsLocationsResources: API.OperationMethod<
  GeneratePackagesSummaryProjectsLocationsResourcesRequest,
  GeneratePackagesSummaryProjectsLocationsResourcesResponse,
  GeneratePackagesSummaryProjectsLocationsResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GeneratePackagesSummaryProjectsLocationsResourcesRequest,
  output: GeneratePackagesSummaryProjectsLocationsResourcesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsNotesRequest {
  /** Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
}

export const DeleteProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta1/{+name}" }),
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

/** Deletes the specified note. */
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

export interface ListProjectsNotesRequest {
  /** Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. */
  pageSize?: number;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** The filter expression. */
  filter?: string;
  /** If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
  /** Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
}

export const ListProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+parent}/notes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsNotesRequest>;

export type ListProjectsNotesResponse = ListNotesResponse;
export const ListProjectsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNotesResponse;

export type ListProjectsNotesError = DefaultErrors | NotFound | Forbidden;

/** Lists notes for the specified project. */
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

export interface BatchCreateProjectsNotesRequest {
  /** Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created. */
  parent: string;
  /** Request body */
  body?: BatchCreateNotesRequest;
}

export const BatchCreateProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(BatchCreateNotesRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta1/{+parent}/notes:batchCreate",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchCreateProjectsNotesRequest>;

export type BatchCreateProjectsNotesResponse = BatchCreateNotesResponse;
export const BatchCreateProjectsNotesResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchCreateNotesResponse;

export type BatchCreateProjectsNotesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new notes in batch. */
export const batchCreateProjectsNotes: API.OperationMethod<
  BatchCreateProjectsNotesRequest,
  BatchCreateProjectsNotesResponse,
  BatchCreateProjectsNotesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchCreateProjectsNotesRequest,
  output: BatchCreateProjectsNotesResponse,
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
      path: "v1beta1/{+resource}:setIamPolicy",
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

/** Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
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
      path: "v1beta1/{+resource}:testIamPermissions",
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

/** Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
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
      path: "v1beta1/{+resource}:getIamPolicy",
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

/** Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences. */
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

export interface GetProjectsNotesRequest {
  /** Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
}

export const GetProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsNotesRequest>;

export type GetProjectsNotesResponse = Note;
export const GetProjectsNotesResponse = /*@__PURE__*/ /*#__PURE__*/ Note;

export type GetProjectsNotesError = DefaultErrors | NotFound | Forbidden;

/** Gets the specified note. */
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

export interface CreateProjectsNotesRequest {
  /** Required. The ID to use for this note. */
  noteId?: string;
  /** Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created. */
  parent: string;
  /** Request body */
  body?: Note;
}

export const CreateProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    noteId: Schema.optional(Schema.String).pipe(T.HttpQuery("noteId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Note).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta1/{+parent}/notes", hasBody: true }),
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

/** Creates a new note. */
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
  /** Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
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
    T.Http({ method: "PATCH", path: "v1beta1/{+name}", hasBody: true }),
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

/** Updates the specified note. */
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

export interface ListProjectsNotesOccurrencesRequest {
  /** The filter expression. */
  filter?: string;
  /** Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** Number of occurrences to return in the list. */
  pageSize?: number;
}

export const ListProjectsNotesOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta1/{+name}/occurrences" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsNotesOccurrencesRequest>;

export type ListProjectsNotesOccurrencesResponse = ListNoteOccurrencesResponse;
export const ListProjectsNotesOccurrencesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListNoteOccurrencesResponse;

export type ListProjectsNotesOccurrencesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note. */
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
