// ==========================================================================
// Container Analysis API (containeranalysis v1)
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
  version: "v1",
  rootUrl: "https://containeranalysis.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Completeness {
  /** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
  arguments?: boolean;
  /** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
  materials?: boolean;
  /** If true, the builder claims that recipe.environment is claimed to be complete. */
  environment?: boolean;
}

export const Completeness: Schema.Schema<Completeness> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    arguments: Schema.optional(Schema.Boolean),
    materials: Schema.optional(Schema.Boolean),
    environment: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Completeness" });

export interface Metadata {
  /** Indicates that the builder claims certain fields in this message to be complete. */
  completeness?: Completeness;
  /** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
  buildInvocationId?: string;
  /** The timestamp of when the build started. */
  buildStartedOn?: string;
  /** The timestamp of when the build completed. */
  buildFinishedOn?: string;
  /** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
  reproducible?: boolean;
}

export const Metadata: Schema.Schema<Metadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    completeness: Schema.optional(Completeness),
    buildInvocationId: Schema.optional(Schema.String),
    buildStartedOn: Schema.optional(Schema.String),
    buildFinishedOn: Schema.optional(Schema.String),
    reproducible: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Metadata" });

export interface Publisher {
  /** Name of the publisher. Examples: 'Google', 'Google Cloud Platform'. */
  name?: string;
  /** The context or namespace. Contains a URL which is under control of the issuing party and can be used as a globally unique identifier for that issuing party. Example: https://csaf.io */
  publisherNamespace?: string;
  /** Provides information about the authority of the issuing party to release the document, in particular, the party's constituency and responsibilities or other obligations. */
  issuingAuthority?: string;
}

export const Publisher: Schema.Schema<Publisher> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    publisherNamespace: Schema.optional(Schema.String),
    issuingAuthority: Schema.optional(Schema.String),
  }).annotate({ identifier: "Publisher" });

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

export interface KnowledgeBase {
  /** The KB name (generally of the form KB[0-9]+ (e.g., KB123456)). */
  name?: string;
  /** A link to the KB in the [Windows update catalog] (https://www.catalog.update.microsoft.com/). */
  url?: string;
}

export const KnowledgeBase: Schema.Schema<KnowledgeBase> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "KnowledgeBase" });

export interface WindowsDetail {
  /** Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed KBs presence is considered a fix. */
  fixingKbs?: ReadonlyArray<KnowledgeBase>;
  /** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects. */
  cpeUri?: string;
  /** Required. The name of this vulnerability. */
  name?: string;
  /** The description of this vulnerability. */
  description?: string;
}

export const WindowsDetail: Schema.Schema<WindowsDetail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixingKbs: Schema.optional(Schema.Array(KnowledgeBase)),
    cpeUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "WindowsDetail" });

export interface CISAKnownExploitedVulnerabilities {
  /** Whether the vulnerability is known to have been leveraged as part of a ransomware campaign. */
  knownRansomwareCampaignUse?: string;
}

export const CISAKnownExploitedVulnerabilities: Schema.Schema<CISAKnownExploitedVulnerabilities> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    knownRansomwareCampaignUse: Schema.optional(Schema.String),
  }).annotate({ identifier: "CISAKnownExploitedVulnerabilities" });

export interface ExploitPredictionScoringSystem {
  /** The EPSS score representing the probability [0-1] of exploitation in the wild in the next 30 days */
  score?: number;
  /** The percentile of the current score, the proportion of all scored vulnerabilities with the same or a lower EPSS score */
  percentile?: number;
}

export const ExploitPredictionScoringSystem: Schema.Schema<ExploitPredictionScoringSystem> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    score: Schema.optional(Schema.Number),
    percentile: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExploitPredictionScoringSystem" });

export interface Risk {
  /** CISA maintains the authoritative source of vulnerabilities that have been exploited in the wild. */
  cisaKev?: CISAKnownExploitedVulnerabilities;
  /** The Exploit Prediction Scoring System (EPSS) estimates the likelihood (probability) that a software vulnerability will be exploited in the wild. */
  epss?: ExploitPredictionScoringSystem;
}

export const Risk: Schema.Schema<Risk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cisaKev: Schema.optional(CISAKnownExploitedVulnerabilities),
    epss: Schema.optional(ExploitPredictionScoringSystem),
  }).annotate({ identifier: "Risk" });

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

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder {
  id?: string;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder: Schema.Schema<GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan {
  /** Start of time span. */
  startTime?: string;
  /** End of time span. */
  endTime?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage {
  /** Output only. Stores timing information for pushing the specified image. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Docker Registry 2.0 digest. */
  digest?: string;
  /** Output only. The OCI media type of the artifact. Non-OCI images, such as Docker images, will have an unspecified value. */
  ociMediaType?:
    | "OCI_MEDIA_TYPE_UNSPECIFIED"
    | "IMAGE_MANIFEST"
    | "IMAGE_INDEX"
    | (string & {});
  /** Name used to push the container image to Google Container Registry, as presented to `docker push`. */
  name?: string;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    digest: Schema.optional(Schema.String),
    ociMediaType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    artifactRegistryPackage: Schema.optional(Schema.String),
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

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule {
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Hash types and values of the Go Module Artifact. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule> =
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
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage {
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Hash types and values of the npm package. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** URI of the uploaded npm package. */
  uri?: string;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactRegistryPackage: Schema.optional(Schema.String),
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    uri: Schema.optional(Schema.String),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage {
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Hash types and values of the Python Artifact. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact {
  /** Hash types and values of the Maven Artifact. */
  fileHashes?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** URI of the uploaded artifact. */
  uri?: string;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHashes: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact {
  /** Output only. The file hashes that make up the generic artifact. */
  fileHashes?: Record<
    string,
    ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes
  >;
  /** Output only. URI of the uploaded artifact. Ex: projects/p1/locations/us/repositories/r1/packages/p1/versions/v1 */
  uri?: string;
  /** Output only. Stores timing information for pushing the specified artifact. */
  pushTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Output only. Path to the artifact in Artifact Registry. */
  artifactRegistryPackage?: string;
  /** Output only. The hash of the whole artifact. */
  artifactFingerprint?: ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHashes: Schema.optional(
      Schema.Record(
        Schema.String,
        ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
      ),
    ),
    uri: Schema.optional(Schema.String),
    pushTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    artifactRegistryPackage: Schema.optional(Schema.String),
    artifactFingerprint: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
    ),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Results {
  /** List of build step outputs, produced by builder images, in the order corresponding to build step indices. [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders) can produce this output by writing to `$BUILDER_OUTPUT/output`. Only the first 50KB of data is stored. Note that the `$BUILDER_OUTPUT` variable is read-only and can't be substituted. */
  buildStepOutputs?: ReadonlyArray<string>;
  /** List of build step digests, in the order corresponding to build step indices. */
  buildStepImages?: ReadonlyArray<string>;
  /** Time to push all non-container artifacts to Cloud Storage. */
  artifactTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Results for build steps. step_id -> */
  buildStepResults?: Record<
    string,
    ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepResults
  >;
  /** Container images that were built as a part of the build. */
  images?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage>;
  /** Number of non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  numArtifacts?: string;
  /** Optional. Go module artifacts uploaded to Artifact Registry at the end of the build. */
  goModules?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule>;
  /** Npm packages uploaded to Artifact Registry at the end of the build. */
  npmPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage>;
  /** Path to the artifact manifest for non-container artifacts uploaded to Cloud Storage. Only populated when artifacts are uploaded to Cloud Storage. */
  artifactManifest?: string;
  /** Python artifacts uploaded to Artifact Registry at the end of the build. */
  pythonPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedPythonPackage>;
  /** Maven artifacts uploaded to Artifact Registry at the end of the build. */
  mavenArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedMavenArtifact>;
  /** Output only. Generic artifacts uploaded to Artifact Registry at the end of the build. */
  genericArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Results: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Results> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildStepOutputs: Schema.optional(Schema.Array(Schema.String)),
    buildStepImages: Schema.optional(Schema.Array(Schema.String)),
    artifactTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    buildStepResults: Schema.optional(
      Schema.Record(
        Schema.String,
        ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStepResults,
      ),
    ),
    images: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuiltImage),
    ),
    numArtifacts: Schema.optional(Schema.String),
    goModules: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGoModule),
    ),
    npmPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedNpmPackage,
      ),
    ),
    artifactManifest: Schema.optional(Schema.String),
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
    genericArtifacts: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1UploadedGenericArtifact,
      ),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Results",
  });

export interface Hint {
  /** Required. The human readable name of this attestation authority, for example "qa". */
  humanReadableName?: string;
}

export const Hint: Schema.Schema<Hint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    humanReadableName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Hint" });

export interface AttestationNote {
  /** Hint hints at the purpose of the attestation authority. */
  hint?: Hint;
}

export const AttestationNote: Schema.Schema<AttestationNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hint: Schema.optional(Hint),
  }).annotate({ identifier: "AttestationNote" });

export interface Version {
  /** Required. Distinguishes between sentinel MIN/MAX versions and normal versions. */
  kind?:
    | "VERSION_KIND_UNSPECIFIED"
    | "NORMAL"
    | "MINIMUM"
    | "MAXIMUM"
    | (string & {});
  /** Human readable version string. This string is of the form :- and is only set when kind is NORMAL. */
  fullName?: string;
  /** The iteration of the package build from the above version. */
  revision?: string;
  /** Required only when version kind is NORMAL. The main part of the version name. */
  name?: string;
  /** Used to correct mistakes in the version numbering scheme. */
  epoch?: number;
  /** Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range. */
  inclusive?: boolean;
}

export const Version: Schema.Schema<Version> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    fullName: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    epoch: Schema.optional(Schema.Number),
    inclusive: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Version" });

export interface Distribution {
  /** The latest available version of this package in this distribution channel. */
  latestVersion?: Version;
  /** The CPU architecture for which packages in this distribution channel were built. */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
  /** A freeform string denoting the maintainer of this package. */
  maintainer?: string;
  /** Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. */
  cpeUri?: string;
  /** The distribution channel-specific homepage for this package. */
  url?: string;
  /** The distribution channel-specific description of this package. */
  description?: string;
}

export const Distribution: Schema.Schema<Distribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latestVersion: Schema.optional(Version),
    architecture: Schema.optional(Schema.String),
    maintainer: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Distribution" });

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

export const Justification: Schema.Schema<Justification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(Schema.String),
    justificationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Justification" });

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

export const Remediation: Schema.Schema<Remediation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remediationUri: Schema.optional(RelatedUrl),
    details: Schema.optional(Schema.String),
    remediationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Remediation" });

export interface VexAssessment {
  /** Provides the state of this Vulnerability assessment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "AFFECTED"
    | "NOT_AFFECTED"
    | "FIXED"
    | "UNDER_INVESTIGATION"
    | (string & {});
  /** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs. */
  cve?: string;
  /** Holds a list of references associated with this vulnerability item and assessment. */
  relatedUris?: ReadonlyArray<RelatedUrl>;
  /** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
  justification?: Justification;
  /** The VulnerabilityAssessment note from which this VexAssessment was generated. This will be of the form: `projects/[PROJECT_ID]/notes/[NOTE_ID]`. */
  noteName?: string;
  /** Specifies details on how to handle (and presumably, fix) a vulnerability. */
  remediations?: ReadonlyArray<Remediation>;
  /** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
  vulnerabilityId?: string;
  /** Contains information about the impact of this vulnerability, this will change with time. */
  impacts?: ReadonlyArray<string>;
}

export const VexAssessment: Schema.Schema<VexAssessment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    cve: Schema.optional(Schema.String),
    relatedUris: Schema.optional(Schema.Array(RelatedUrl)),
    justification: Schema.optional(Justification),
    noteName: Schema.optional(Schema.String),
    remediations: Schema.optional(Schema.Array(Remediation)),
    vulnerabilityId: Schema.optional(Schema.String),
    impacts: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VexAssessment" });

export interface Volume {
  /** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
  path?: string;
  /** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
  name?: string;
}

export const Volume: Schema.Schema<Volume> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Volume" });

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

export interface BuildStep {
  /** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
  secretEnv?: ReadonlyArray<string>;
  /** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
  automapSubstitutions?: boolean;
  /** Remote configuration for the build step. */
  remoteConfig?: string;
  /** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
  waitFor?: ReadonlyArray<string>;
  /** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
  entrypoint?: string;
  /** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<Volume>;
  /** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
  allowExitCodes?: ReadonlyArray<number>;
  /** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
  script?: string;
  /** Output only. Return code from running the step. */
  exitCode?: number;
  /** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
  timeout?: string;
  results?: ReadonlyArray<StepResult>;
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
  /** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
  name?: string;
  /** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
  dir?: string;
  /** Output only. Stores timing information for pulling this build step's builder image only. */
  pullTiming?: TimeSpan;
  /** Output only. Stores timing information for executing this build step. */
  timing?: TimeSpan;
  /** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
  args?: ReadonlyArray<string>;
  /** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
  id?: string;
}

export const BuildStep: Schema.Schema<BuildStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    remoteConfig: Schema.optional(Schema.String),
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    entrypoint: Schema.optional(Schema.String),
    volumes: Schema.optional(Schema.Array(Volume)),
    allowExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    script: Schema.optional(Schema.String),
    exitCode: Schema.optional(Schema.Number),
    timeout: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(StepResult)),
    status: Schema.optional(Schema.String),
    allowFailure: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    pullTiming: Schema.optional(TimeSpan),
    timing: Schema.optional(TimeSpan),
    env: Schema.optional(Schema.Array(Schema.String)),
    args: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildStep" });

export interface Command {
  /** Working directory (relative to project source root) used when running this command. */
  dir?: string;
  /** Command-line arguments used when executing this command. */
  args?: ReadonlyArray<string>;
  /** Optional unique identifier for this command, used in wait_for to reference this command as a dependency. */
  id?: string;
  /** Environment variables set before running this command. */
  env?: ReadonlyArray<string>;
  /** The ID(s) of the command(s) that this command depends on. */
  waitFor?: ReadonlyArray<string>;
  /** Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`. */
  name?: string;
}

export const Command: Schema.Schema<Command> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dir: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(Schema.String)),
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Command" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest {
  /** Required. Cloud Storage bucket containing the source manifest (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
  bucket?: string;
  /** Required. Cloud Storage object containing the source manifest. This object must be a JSON file. */
  object?: string;
  /** Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
  generation?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest",
  });

export interface DSSEHint {
  /** Required. The human readable name of this attestation authority, for example "cloudbuild-prod". */
  humanReadableName?: string;
}

export const DSSEHint: Schema.Schema<DSSEHint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    humanReadableName: Schema.optional(Schema.String),
  }).annotate({ identifier: "DSSEHint" });

export interface BaseImage {
  /** The name of the base image. */
  name?: string;
  /** The number of layers that the base image is composed of. */
  layerCount?: number;
  /** The repository name in which the base image is from. */
  repository?: string;
  /** The registry in which the base image is from. */
  registry?: string;
}

export const BaseImage: Schema.Schema<BaseImage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    layerCount: Schema.optional(Schema.Number),
    repository: Schema.optional(Schema.String),
    registry: Schema.optional(Schema.String),
  }).annotate({ identifier: "BaseImage" });

export interface LayerDetails {
  /** The index of the layer in the container image. */
  index?: number;
  /** The diff ID (typically a sha256 hash) of the layer in the container image. */
  diffId?: string;
  /** The layer chain ID (sha256 hash) of the layer in the container image. https://github.com/opencontainers/image-spec/blob/main/config.md#layer-chainid */
  chainId?: string;
  /** The base images the layer is found within. */
  baseImages?: ReadonlyArray<BaseImage>;
  /** The layer build command that was used to build the layer. This may not be found in all layers depending on how the container image is built. */
  command?: string;
}

export const LayerDetails: Schema.Schema<LayerDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    index: Schema.optional(Schema.Number),
    diffId: Schema.optional(Schema.String),
    chainId: Schema.optional(Schema.String),
    baseImages: Schema.optional(Schema.Array(BaseImage)),
    command: Schema.optional(Schema.String),
  }).annotate({ identifier: "LayerDetails" });

export interface EnvelopeSignature {
  keyid?: string;
  sig?: string;
}

export const EnvelopeSignature: Schema.Schema<EnvelopeSignature> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keyid: Schema.optional(Schema.String),
    sig: Schema.optional(Schema.String),
  }).annotate({ identifier: "EnvelopeSignature" });

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

export const SbomReferenceIntotoPredicate: Schema.Schema<SbomReferenceIntotoPredicate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referrerId: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    mimeType: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "SbomReferenceIntotoPredicate" });

export interface Subject {
  name?: string;
  /** `"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet */
  digest?: Record<string, string>;
}

export const Subject: Schema.Schema<Subject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Subject" });

export interface SbomReferenceIntotoPayload {
  /** URI identifying the type of the Predicate. */
  predicateType?: string;
  /** Additional parameters of the Predicate. Includes the actual data about the SBOM. */
  predicate?: SbomReferenceIntotoPredicate;
  /** Set of software artifacts that the attestation applies to. Each element represents a single software artifact. */
  subject?: ReadonlyArray<Subject>;
  /** Identifier for the schema of the Statement. */
  _type?: string;
}

export const SbomReferenceIntotoPayload: Schema.Schema<SbomReferenceIntotoPayload> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    predicateType: Schema.optional(Schema.String),
    predicate: Schema.optional(SbomReferenceIntotoPredicate),
    subject: Schema.optional(Schema.Array(Subject)),
    _type: Schema.optional(Schema.String),
  }).annotate({ identifier: "SbomReferenceIntotoPayload" });

export interface SBOMReferenceOccurrence {
  /** The signatures over the payload. */
  signatures?: ReadonlyArray<EnvelopeSignature>;
  /** The actual payload that contains the SBOM reference data. */
  payload?: SbomReferenceIntotoPayload;
  /** The kind of payload that SbomReferenceIntotoPayload takes. Since it's in the intoto format, this value is expected to be 'application/vnd.in-toto+json'. */
  payloadType?: string;
}

export const SBOMReferenceOccurrence: Schema.Schema<SBOMReferenceOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signatures: Schema.optional(Schema.Array(EnvelopeSignature)),
    payload: Schema.optional(SbomReferenceIntotoPayload),
    payloadType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SBOMReferenceOccurrence" });

export interface NonCompliantFile {
  /** Empty if `display_command` is set. */
  path?: string;
  /** Explains why a file is non compliant for a CIS check. */
  reason?: string;
  /** Command to display the non-compliant files. */
  displayCommand?: string;
}

export const NonCompliantFile: Schema.Schema<NonCompliantFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    displayCommand: Schema.optional(Schema.String),
  }).annotate({ identifier: "NonCompliantFile" });

export interface ComplianceVersion {
  /** The version of the benchmark. This is set to the version of the OS-specific CIS document the benchmark is defined in. */
  version?: string;
  /** The name of the document that defines this benchmark, e.g. "CIS Container-Optimized OS". */
  benchmarkDocument?: string;
  /** The CPE URI (https://cpe.mitre.org/specification/) this benchmark is applicable to. */
  cpeUri?: string;
}

export const ComplianceVersion: Schema.Schema<ComplianceVersion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    benchmarkDocument: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComplianceVersion" });

export interface ComplianceOccurrence {
  nonComplianceReason?: string;
  nonCompliantFiles?: ReadonlyArray<NonCompliantFile>;
  /** The OS and config version the benchmark was run on. */
  version?: ComplianceVersion;
}

export const ComplianceOccurrence: Schema.Schema<ComplianceOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nonComplianceReason: Schema.optional(Schema.String),
    nonCompliantFiles: Schema.optional(Schema.Array(NonCompliantFile)),
    version: Schema.optional(ComplianceVersion),
  }).annotate({ identifier: "ComplianceOccurrence" });

export interface UpgradeDistribution {
  /** Required - The specific operating system this metadata applies to. See https://cpe.mitre.org/specification/. */
  cpeUri?: string;
  /** The severity as specified by the upstream operating system. */
  severity?: string;
  /** The cve tied to this Upgrade. */
  cve?: ReadonlyArray<string>;
  /** The operating system classification of this Upgrade, as specified by the upstream operating system upgrade feed. For Windows the classification is one of the category_ids listed at https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ff357803(v=vs.85) */
  classification?: string;
}

export const UpgradeDistribution: Schema.Schema<UpgradeDistribution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpeUri: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    cve: Schema.optional(Schema.Array(Schema.String)),
    classification: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpgradeDistribution" });

export interface Identity {
  /** The revision independent identifier of the update. */
  updateId?: string;
  /** The revision number of the update. */
  revision?: number;
}

export const Identity: Schema.Schema<Identity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateId: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Identity" });

export interface Category {
  /** The localized name of the category. */
  name?: string;
  /** The identifier of the category. */
  categoryId?: string;
}

export const Category: Schema.Schema<Category> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    categoryId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Category" });

export interface WindowsUpdate {
  /** The localized title of the update. */
  title?: string;
  /** The hyperlink to the support information for the update. */
  supportUrl?: string;
  /** The localized description of the update. */
  description?: string;
  /** Required - The unique identifier for the update. */
  identity?: Identity;
  /** The last published timestamp of the update. */
  lastPublishedTimestamp?: string;
  /** The list of categories to which the update belongs. */
  categories?: ReadonlyArray<Category>;
  /** The Microsoft Knowledge Base article IDs that are associated with the update. */
  kbArticleIds?: ReadonlyArray<string>;
}

export const WindowsUpdate: Schema.Schema<WindowsUpdate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    supportUrl: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    identity: Schema.optional(Identity),
    lastPublishedTimestamp: Schema.optional(Schema.String),
    categories: Schema.optional(Schema.Array(Category)),
    kbArticleIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "WindowsUpdate" });

export interface UpgradeOccurrence {
  /** Required for non-Windows OS. The package this Upgrade is for. */
  package?: string;
  /** Required for non-Windows OS. The version of the package in a machine + human readable form. */
  parsedVersion?: Version;
  /** Metadata about the upgrade for available for the specific operating system for the resource_url. This allows efficient filtering, as well as making it easier to use the occurrence. */
  distribution?: UpgradeDistribution;
  /** Required for Windows OS. Represents the metadata about the Windows update. */
  windowsUpdate?: WindowsUpdate;
}

export const UpgradeOccurrence: Schema.Schema<UpgradeOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    package: Schema.optional(Schema.String),
    parsedVersion: Schema.optional(Version),
    distribution: Schema.optional(UpgradeDistribution),
    windowsUpdate: Schema.optional(WindowsUpdate),
  }).annotate({ identifier: "UpgradeOccurrence" });

export interface CVSS {
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  /** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  availabilityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  integrityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  exploitabilityScore?: number;
  attackComplexity?:
    | "ATTACK_COMPLEXITY_UNSPECIFIED"
    | "ATTACK_COMPLEXITY_LOW"
    | "ATTACK_COMPLEXITY_HIGH"
    | "ATTACK_COMPLEXITY_MEDIUM"
    | (string & {});
  confidentialityImpact?:
    | "IMPACT_UNSPECIFIED"
    | "IMPACT_HIGH"
    | "IMPACT_LOW"
    | "IMPACT_NONE"
    | "IMPACT_PARTIAL"
    | "IMPACT_COMPLETE"
    | (string & {});
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
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
  impactScore?: number;
  authentication?:
    | "AUTHENTICATION_UNSPECIFIED"
    | "AUTHENTICATION_MULTIPLE"
    | "AUTHENTICATION_SINGLE"
    | "AUTHENTICATION_NONE"
    | (string & {});
}

export const CVSS: Schema.Schema<CVSS> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baseScore: Schema.optional(Schema.Number),
    attackVector: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    exploitabilityScore: Schema.optional(Schema.Number),
    attackComplexity: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
    privilegesRequired: Schema.optional(Schema.String),
    impactScore: Schema.optional(Schema.Number),
    authentication: Schema.optional(Schema.String),
  }).annotate({ identifier: "CVSS" });

export interface GrafeasV1FileLocation {
  /** Each package found in a file should have its own layer metadata (that is, information from the origin layer of the package). */
  layerDetails?: LayerDetails;
  /** For jars that are contained inside .war files, this filepath can indicate the path to war file combined with the path to jar file. */
  filePath?: string;
  /** Line number in the file where the package was found. Optional field that only applies to source repository scanning. */
  lineNumber?: number;
}

export const GrafeasV1FileLocation: Schema.Schema<GrafeasV1FileLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    layerDetails: Schema.optional(LayerDetails),
    filePath: Schema.optional(Schema.String),
    lineNumber: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GrafeasV1FileLocation" });

export interface PackageIssue {
  /** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in. */
  affectedCpeUri?: string;
  /** Required. The version of the package that is installed on the resource affected by this vulnerability. */
  affectedVersion?: Version;
  /** The package this vulnerability was fixed in. It is possible for this to be different from the affected_package. */
  fixedPackage?: string;
  /** The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri. */
  fixedCpeUri?: string;
  /** The type of package (e.g. OS, MAVEN, GO). */
  packageType?: string;
  /** Output only. Whether a fix is available for this package. */
  fixAvailable?: boolean;
  /** Required. The version of the package this vulnerability was fixed in. Setting this to VersionKind.MAXIMUM means no fix is yet available. */
  fixedVersion?: Version;
  /** Required. The package this vulnerability was found in. */
  affectedPackage?: string;
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
}

export const PackageIssue: Schema.Schema<PackageIssue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    affectedCpeUri: Schema.optional(Schema.String),
    affectedVersion: Schema.optional(Version),
    fixedPackage: Schema.optional(Schema.String),
    fixedCpeUri: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    fixAvailable: Schema.optional(Schema.Boolean),
    fixedVersion: Schema.optional(Version),
    affectedPackage: Schema.optional(Schema.String),
    effectiveSeverity: Schema.optional(Schema.String),
    fileLocation: Schema.optional(Schema.Array(GrafeasV1FileLocation)),
  }).annotate({ identifier: "PackageIssue" });

export interface VulnerabilityOccurrence {
  /** Output only. A detailed description of this vulnerability. */
  longDescription?: string;
  /** The cvss v3 score for the vulnerability. */
  cvssv3?: CVSS;
  /** Output only. A one sentence description of this vulnerability. */
  shortDescription?: string;
  vexAssessment?: VexAssessment;
  /** The cvss v2 score for the vulnerability. */
  cvssV2?: CVSS;
  /** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  type?: string;
  /** Occurrence-specific extra details about the vulnerability. */
  extraDetails?: string;
  /** Output only. URLs related to this vulnerability. */
  relatedUrls?: ReadonlyArray<RelatedUrl>;
  /** Output only. CVSS version used to populate cvss_score and severity. */
  cvssVersion?:
    | "CVSS_VERSION_UNSPECIFIED"
    | "CVSS_VERSION_2"
    | "CVSS_VERSION_3"
    | (string & {});
  /** Output only. The note provider assigned severity of this vulnerability. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Required. The set of affected locations and their fixes (if available) within the associated resource. */
  packageIssue?: ReadonlyArray<PackageIssue>;
  /** The distro assigned severity for this vulnerability when it is available, otherwise this is the note provider assigned severity. When there are multiple PackageIssues for this vulnerability, they can have different effective severities because some might be provided by the distro while others are provided by the language ecosystem for a language pack. For this reason, it is advised to use the effective severity on the PackageIssue level. In the case where multiple PackageIssues have differing effective severities, this field should be the highest severity for any of the PackageIssues. */
  effectiveSeverity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
  cvssScore?: number;
  /** Risk information about the vulnerability, such as CISA, EPSS, etc. */
  risk?: Risk;
  /** Output only. Whether at least one of the affected packages has a fix available. */
  fixAvailable?: boolean;
}

export const VulnerabilityOccurrence: Schema.Schema<VulnerabilityOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    longDescription: Schema.optional(Schema.String),
    cvssv3: Schema.optional(CVSS),
    shortDescription: Schema.optional(Schema.String),
    vexAssessment: Schema.optional(VexAssessment),
    cvssV2: Schema.optional(CVSS),
    type: Schema.optional(Schema.String),
    extraDetails: Schema.optional(Schema.String),
    relatedUrls: Schema.optional(Schema.Array(RelatedUrl)),
    cvssVersion: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    packageIssue: Schema.optional(Schema.Array(PackageIssue)),
    effectiveSeverity: Schema.optional(Schema.String),
    cvssScore: Schema.optional(Schema.Number),
    risk: Schema.optional(Risk),
    fixAvailable: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "VulnerabilityOccurrence" });

export interface Envelope {
  signatures?: ReadonlyArray<EnvelopeSignature>;
  payload?: string;
  payloadType?: string;
}

export const Envelope: Schema.Schema<Envelope> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signatures: Schema.optional(Schema.Array(EnvelopeSignature)),
    payload: Schema.optional(Schema.String),
    payloadType: Schema.optional(Schema.String),
  }).annotate({ identifier: "Envelope" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness {
  parameters?: boolean;
  materials?: boolean;
  environment?: boolean;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness: Schema.Schema<GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parameters: Schema.optional(Schema.Boolean),
    materials: Schema.optional(Schema.Boolean),
    environment: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata {
  buildInvocationId?: string;
  buildStartedOn?: string;
  completeness?: GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness;
  reproducible?: boolean;
  buildFinishedOn?: string;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata: Schema.Schema<GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildInvocationId: Schema.optional(Schema.String),
    buildStartedOn: Schema.optional(Schema.String),
    completeness: Schema.optional(
      GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness,
    ),
    reproducible: Schema.optional(Schema.Boolean),
    buildFinishedOn: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial {
  uri?: string;
  digest?: Record<string, string>;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial: Schema.Schema<GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource {
  digest?: Record<string, string>;
  uri?: string;
  entryPoint?: string;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource: Schema.Schema<GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uri: Schema.optional(Schema.String),
    entryPoint: Schema.optional(Schema.String),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource" });

export interface GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation {
  configSource?: GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource;
  environment?: Record<string, unknown>;
  parameters?: Record<string, unknown>;
}

export const GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation: Schema.Schema<GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configSource: Schema.optional(
      GrafeasV1SlsaProvenanceZeroTwoSlsaConfigSource,
    ),
    environment: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation" });

export interface SlsaProvenanceZeroTwo {
  metadata?: GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata;
  materials?: ReadonlyArray<GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial>;
  buildConfig?: Record<string, unknown>;
  invocation?: GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation;
  builder?: GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder;
  buildType?: string;
}

export const SlsaProvenanceZeroTwo: Schema.Schema<SlsaProvenanceZeroTwo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata),
    materials: Schema.optional(
      Schema.Array(GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial),
    ),
    buildConfig: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    invocation: Schema.optional(GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation),
    builder: Schema.optional(GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder),
    buildType: Schema.optional(Schema.String),
  }).annotate({ identifier: "SlsaProvenanceZeroTwo" });

export interface BuilderConfig {
  id?: string;
}

export const BuilderConfig: Schema.Schema<BuilderConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuilderConfig" });

export interface Recipe {
  /** Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Since the arguments field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any". */
  arguments?: ReadonlyArray<Record<string, unknown>>;
  /** URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. */
  type?: string;
  /** Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64. */
  definedInMaterial?: string;
  /** String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use. */
  entryPoint?: string;
  /** Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Since the environment field can greatly vary in structure, depending on the builder and recipe type, this is of form "Any". */
  environment?: ReadonlyArray<Record<string, unknown>>;
}

export const Recipe: Schema.Schema<Recipe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    arguments: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    type: Schema.optional(Schema.String),
    definedInMaterial: Schema.optional(Schema.String),
    entryPoint: Schema.optional(Schema.String),
    environment: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "Recipe" });

export interface InTotoProvenance {
  /** required */
  builderConfig?: BuilderConfig;
  /** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. */
  materials?: ReadonlyArray<string>;
  /** Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required */
  recipe?: Recipe;
  metadata?: Metadata;
}

export const InTotoProvenance: Schema.Schema<InTotoProvenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    builderConfig: Schema.optional(BuilderConfig),
    materials: Schema.optional(Schema.Array(Schema.String)),
    recipe: Schema.optional(Recipe),
    metadata: Schema.optional(Metadata),
  }).annotate({ identifier: "InTotoProvenance" });

export interface SlsaCompleteness {
  /** If true, the builder claims that recipe.environment is claimed to be complete. */
  environment?: boolean;
  /** If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. */
  arguments?: boolean;
  /** If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic". */
  materials?: boolean;
}

export const SlsaCompleteness: Schema.Schema<SlsaCompleteness> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    environment: Schema.optional(Schema.Boolean),
    arguments: Schema.optional(Schema.Boolean),
    materials: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SlsaCompleteness" });

export interface SlsaMetadata {
  /** The timestamp of when the build completed. */
  buildFinishedOn?: string;
  /** If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output. */
  reproducible?: boolean;
  /** Indicates that the builder claims certain fields in this message to be complete. */
  completeness?: SlsaCompleteness;
  /** Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec. */
  buildInvocationId?: string;
  /** The timestamp of when the build started. */
  buildStartedOn?: string;
}

export const SlsaMetadata: Schema.Schema<SlsaMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildFinishedOn: Schema.optional(Schema.String),
    reproducible: Schema.optional(Schema.Boolean),
    completeness: Schema.optional(SlsaCompleteness),
    buildInvocationId: Schema.optional(Schema.String),
    buildStartedOn: Schema.optional(Schema.String),
  }).annotate({ identifier: "SlsaMetadata" });

export interface SlsaRecipe {
  /** String identifying the entry point into the build. This is often a path to a configuration file and/or a target label within that file. The syntax and meaning are defined by recipe.type. For example, if the recipe type were "make", then this would reference the directory in which to run make as well as which target to use. */
  entryPoint?: string;
  /** URI indicating what type of recipe was performed. It determines the meaning of recipe.entryPoint, recipe.arguments, recipe.environment, and materials. */
  type?: string;
  /** Index in materials containing the recipe steps that are not implied by recipe.type. For example, if the recipe type were "make", then this would point to the source containing the Makefile, not the make program itself. Set to -1 if the recipe doesn't come from a material, as zero is default unset value for int64. */
  definedInMaterial?: string;
  /** Collection of all external inputs that influenced the build on top of recipe.definedInMaterial and recipe.entryPoint. For example, if the recipe type were "make", then this might be the flags passed to make aside from the target, which is captured in recipe.entryPoint. Depending on the recipe Type, the structure may be different. */
  arguments?: Record<string, unknown>;
  /** Any other builder-controlled inputs necessary for correctly evaluating the recipe. Usually only needed for reproducing the build but not evaluated as part of policy. Depending on the recipe Type, the structure may be different. */
  environment?: Record<string, unknown>;
}

export const SlsaRecipe: Schema.Schema<SlsaRecipe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entryPoint: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    definedInMaterial: Schema.optional(Schema.String),
    arguments: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    environment: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "SlsaRecipe" });

export interface SlsaBuilder {
  id?: string;
}

export const SlsaBuilder: Schema.Schema<SlsaBuilder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "SlsaBuilder" });

export interface Material {
  uri?: string;
  digest?: Record<string, string>;
}

export const Material: Schema.Schema<Material> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Material" });

export interface SlsaProvenance {
  metadata?: SlsaMetadata;
  /** Identifies the configuration used for the build. When combined with materials, this SHOULD fully describe the build, such that re-running this recipe results in bit-for-bit identical output (if the build is reproducible). required */
  recipe?: SlsaRecipe;
  /** required */
  builder?: SlsaBuilder;
  /** The collection of artifacts that influenced the build including sources, dependencies, build tools, base images, and so on. This is considered to be incomplete unless metadata.completeness.materials is true. Unset or null is equivalent to empty. */
  materials?: ReadonlyArray<Material>;
}

export const SlsaProvenance: Schema.Schema<SlsaProvenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(SlsaMetadata),
    recipe: Schema.optional(SlsaRecipe),
    builder: Schema.optional(SlsaBuilder),
    materials: Schema.optional(Schema.Array(Material)),
  }).annotate({ identifier: "SlsaProvenance" });

export interface InTotoStatement {
  slsaProvenanceZeroTwo?: SlsaProvenanceZeroTwo;
  subject?: ReadonlyArray<Subject>;
  /** `https://slsa.dev/provenance/v0.1` for SlsaProvenance. */
  predicateType?: string;
  provenance?: InTotoProvenance;
  /** Always `https://in-toto.io/Statement/v0.1`. */
  _type?: string;
  slsaProvenance?: SlsaProvenance;
}

export const InTotoStatement: Schema.Schema<InTotoStatement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    slsaProvenanceZeroTwo: Schema.optional(SlsaProvenanceZeroTwo),
    subject: Schema.optional(Schema.Array(Subject)),
    predicateType: Schema.optional(Schema.String),
    provenance: Schema.optional(InTotoProvenance),
    _type: Schema.optional(Schema.String),
    slsaProvenance: Schema.optional(SlsaProvenance),
  }).annotate({ identifier: "InTotoStatement" });

export interface DSSEAttestationOccurrence {
  /** If doing something security critical, make sure to verify the signatures in this metadata. */
  envelope?: Envelope;
  statement?: InTotoStatement;
}

export const DSSEAttestationOccurrence: Schema.Schema<DSSEAttestationOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    envelope: Schema.optional(Envelope),
    statement: Schema.optional(InTotoStatement),
  }).annotate({ identifier: "DSSEAttestationOccurrence" });

export interface Fingerprint {
  /** Required. The ordered list of v2 blobs that represent a given image. */
  v2Blob?: ReadonlyArray<string>;
  /** Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept. */
  v2Name?: string;
  /** Required. The layer ID of the final layer in the Docker image's v1 representation. */
  v1Name?: string;
}

export const Fingerprint: Schema.Schema<Fingerprint> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    v2Blob: Schema.optional(Schema.Array(Schema.String)),
    v2Name: Schema.optional(Schema.String),
    v1Name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Fingerprint" });

export interface Layer {
  /** Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information. */
  directive?: string;
  /** The recovered arguments to the Dockerfile directive. */
  arguments?: string;
}

export const Layer: Schema.Schema<Layer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const ImageOccurrence: Schema.Schema<ImageOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fingerprint: Schema.optional(Fingerprint),
    distance: Schema.optional(Schema.Number),
    layerInfo: Schema.optional(Schema.Array(Layer)),
    baseResourceUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageOccurrence" });

export interface Jwt {
  /** The compact encoding of a JWS, which is always three base64 encoded strings joined by periods. For details, see: https://tools.ietf.org/html/rfc7515.html#section-3.1 */
  compactJwt?: string;
}

export const Jwt: Schema.Schema<Jwt> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    compactJwt: Schema.optional(Schema.String),
  }).annotate({ identifier: "Jwt" });

export interface AttestationOccurrence {
  /** One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification. */
  signatures?: ReadonlyArray<Signature>;
  /** One or more JWTs encoding a self-contained attestation. Each JWT encodes the payload that it verifies within the JWT itself. Verifier implementation SHOULD ignore the `serialized_payload` field when verifying these JWTs. If only JWTs are present on this AttestationOccurrence, then the `serialized_payload` SHOULD be left empty. Each JWT SHOULD encode a claim specific to the `resource_uri` of this Occurrence, but this is not validated by Grafeas metadata API implementations. The JWT itself is opaque to Grafeas. */
  jwts?: ReadonlyArray<Jwt>;
  /** Required. The serialized payload that is verified by one or more `signatures`. */
  serializedPayload?: string;
}

export const AttestationOccurrence: Schema.Schema<AttestationOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    signatures: Schema.optional(Schema.Array(Signature)),
    jwts: Schema.optional(Schema.Array(Jwt)),
    serializedPayload: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttestationOccurrence" });

export interface Finding {
  /** Unique identifier of the rule that produced this finding. */
  ruleId?: string;
  /** Severity of the finding. */
  severity?: string;
  /** Category of the finding. */
  category?: string;
  /** Path to the file where the finding was detected. */
  filePath?: string;
  /** Detailed description of the finding. */
  description?: string;
  /** Code snippet relevant to the finding. */
  snippet?: string;
  /** Title of the finding. */
  title?: string;
}

export const Finding: Schema.Schema<Finding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ruleId: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    filePath: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    snippet: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }).annotate({ identifier: "Finding" });

export interface AISkillAnalysisOccurrence {
  /** Name of the skill that produced this analysis. */
  skillName?: string;
  /** Findings produced by the analysis. */
  findings?: ReadonlyArray<Finding>;
}

export const AISkillAnalysisOccurrence: Schema.Schema<AISkillAnalysisOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skillName: Schema.optional(Schema.String),
    findings: Schema.optional(Schema.Array(Finding)),
  }).annotate({ identifier: "AISkillAnalysisOccurrence" });

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

export const SecretStatus: Schema.Schema<SecretStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "SecretStatus" });

export interface SecretLocation {
  /** The secret is found from a file. */
  fileLocation?: GrafeasV1FileLocation;
}

export const SecretLocation: Schema.Schema<SecretLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const SecretOccurrence: Schema.Schema<SecretOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    statuses: Schema.optional(Schema.Array(SecretStatus)),
    locations: Schema.optional(Schema.Array(SecretLocation)),
  }).annotate({ identifier: "SecretOccurrence" });

export interface Artifact {
  /** Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`. */
  id?: string;
  /** Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image. */
  names?: ReadonlyArray<string>;
  /** Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container. */
  checksum?: string;
}

export const Artifact: Schema.Schema<Artifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    names: Schema.optional(Schema.Array(Schema.String)),
    checksum: Schema.optional(Schema.String),
  }).annotate({ identifier: "Artifact" });

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

export interface AliasContext {
  /** The alias name. */
  name?: string;
  /** The alias kind. */
  kind?: "KIND_UNSPECIFIED" | "FIXED" | "MOVABLE" | "OTHER" | (string & {});
}

export const AliasContext: Schema.Schema<AliasContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "AliasContext" });

export interface CloudRepoSourceContext {
  /** The ID of the repo. */
  repoId?: RepoId;
  /** A revision ID. */
  revisionId?: string;
  /** An alias, which may be a branch or tag. */
  aliasContext?: AliasContext;
}

export const CloudRepoSourceContext: Schema.Schema<CloudRepoSourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repoId: Schema.optional(RepoId),
    revisionId: Schema.optional(Schema.String),
    aliasContext: Schema.optional(AliasContext),
  }).annotate({ identifier: "CloudRepoSourceContext" });

export interface GitSourceContext {
  /** Git repository URL. */
  url?: string;
  /** Git commit hash. */
  revisionId?: string;
}

export const GitSourceContext: Schema.Schema<GitSourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GitSourceContext" });

export interface GerritSourceContext {
  /** The URI of a running Gerrit instance. */
  hostUri?: string;
  /** An alias, which may be a branch or tag. */
  aliasContext?: AliasContext;
  /** The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project. */
  gerritProject?: string;
  /** A revision (commit) ID. */
  revisionId?: string;
}

export const GerritSourceContext: Schema.Schema<GerritSourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hostUri: Schema.optional(Schema.String),
    aliasContext: Schema.optional(AliasContext),
    gerritProject: Schema.optional(Schema.String),
    revisionId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GerritSourceContext" });

export interface SourceContext {
  /** Labels with user defined metadata. */
  labels?: Record<string, string>;
  /** A SourceContext referring to a revision in a Google Cloud Source Repo. */
  cloudRepo?: CloudRepoSourceContext;
  /** A SourceContext referring to any third party Git repo (e.g., GitHub). */
  git?: GitSourceContext;
  /** A SourceContext referring to a Gerrit project. */
  gerrit?: GerritSourceContext;
}

export const SourceContext: Schema.Schema<SourceContext> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    cloudRepo: Schema.optional(CloudRepoSourceContext),
    git: Schema.optional(GitSourceContext),
    gerrit: Schema.optional(GerritSourceContext),
  }).annotate({ identifier: "SourceContext" });

export interface Hash {
  /** Required. The type of hash that was performed, e.g. "SHA-256". */
  type?: string;
  /** Required. The hash value. */
  value?: string;
}

export const Hash: Schema.Schema<Hash> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "Hash" });

export interface FileHashes {
  /** Required. Collection of file hashes. */
  fileHash?: ReadonlyArray<Hash>;
}

export const FileHashes: Schema.Schema<FileHashes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileHash: Schema.optional(Schema.Array(Hash)),
  }).annotate({ identifier: "FileHashes" });

export interface Source {
  /** If provided, the input binary artifacts for the build came from this location. */
  artifactStorageSourceUri?: string;
  /** If provided, the source code used for the build came from this location. */
  context?: SourceContext;
  /** Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file. */
  fileHashes?: Record<string, FileHashes>;
  /** If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field. */
  additionalContexts?: ReadonlyArray<SourceContext>;
}

export const Source: Schema.Schema<Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactStorageSourceUri: Schema.optional(Schema.String),
    context: Schema.optional(SourceContext),
    fileHashes: Schema.optional(Schema.Record(Schema.String, FileHashes)),
    additionalContexts: Schema.optional(Schema.Array(SourceContext)),
  }).annotate({ identifier: "Source" });

export interface BuildProvenance {
  /** Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details. */
  buildOptions?: Record<string, string>;
  /** E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time. */
  creator?: string;
  /** Trigger identifier if the build was triggered automatically; empty if not. */
  triggerId?: string;
  /** Output of the build. */
  builtArtifacts?: ReadonlyArray<Artifact>;
  /** Version string of the builder at the time this build was executed. */
  builderVersion?: string;
  /** URI where any logs for this provenance were written. */
  logsUri?: string;
  /** Required. Unique identifier of the build. */
  id?: string;
  /** Details of the Source input to the build. */
  sourceProvenance?: Source;
  /** Time at which execution of the build was started. */
  startTime?: string;
  /** Time at which execution of the build was finished. */
  endTime?: string;
  /** Time at which the build was created. */
  createTime?: string;
  /** ID of the project. */
  projectId?: string;
  /** Commands requested by the build. */
  commands?: ReadonlyArray<Command>;
}

export const BuildProvenance: Schema.Schema<BuildProvenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    buildOptions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    creator: Schema.optional(Schema.String),
    triggerId: Schema.optional(Schema.String),
    builtArtifacts: Schema.optional(Schema.Array(Artifact)),
    builderVersion: Schema.optional(Schema.String),
    logsUri: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    sourceProvenance: Schema.optional(Source),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    commands: Schema.optional(Schema.Array(Command)),
  }).annotate({ identifier: "BuildProvenance" });

export interface ResourceDescriptor {
  name?: string;
  downloadLocation?: string;
  annotations?: Record<string, unknown>;
  mediaType?: string;
  content?: string;
  uri?: string;
  digest?: Record<string, string>;
}

export const ResourceDescriptor: Schema.Schema<ResourceDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    downloadLocation: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    mediaType: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ResourceDescriptor" });

export interface BuildDefinition {
  externalParameters?: Record<string, unknown>;
  internalParameters?: Record<string, unknown>;
  buildType?: string;
  resolvedDependencies?: ReadonlyArray<ResourceDescriptor>;
}

export const BuildDefinition: Schema.Schema<BuildDefinition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    externalParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    internalParameters: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    buildType: Schema.optional(Schema.String),
    resolvedDependencies: Schema.optional(Schema.Array(ResourceDescriptor)),
  }).annotate({ identifier: "BuildDefinition" });

export interface BuildMetadata {
  finishedOn?: string;
  invocationId?: string;
  startedOn?: string;
}

export const BuildMetadata: Schema.Schema<BuildMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    finishedOn: Schema.optional(Schema.String),
    invocationId: Schema.optional(Schema.String),
    startedOn: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildMetadata" });

export interface ProvenanceBuilder {
  version?: Record<string, string>;
  builderDependencies?: ReadonlyArray<ResourceDescriptor>;
  id?: string;
}

export const ProvenanceBuilder: Schema.Schema<ProvenanceBuilder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    builderDependencies: Schema.optional(Schema.Array(ResourceDescriptor)),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "ProvenanceBuilder" });

export interface RunDetails {
  metadata?: BuildMetadata;
  byproducts?: ReadonlyArray<ResourceDescriptor>;
  builder?: ProvenanceBuilder;
}

export const RunDetails: Schema.Schema<RunDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(BuildMetadata),
    byproducts: Schema.optional(Schema.Array(ResourceDescriptor)),
    builder: Schema.optional(ProvenanceBuilder),
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
  predicateType?: string;
  predicate?: SlsaProvenanceV1;
  subject?: ReadonlyArray<Subject>;
  /** InToto spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement */
  _type?: string;
}

export const InTotoSlsaProvenanceV1: Schema.Schema<InTotoSlsaProvenanceV1> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    predicateType: Schema.optional(Schema.String),
    predicate: Schema.optional(SlsaProvenanceV1),
    subject: Schema.optional(Schema.Array(Subject)),
    _type: Schema.optional(Schema.String),
  }).annotate({ identifier: "InTotoSlsaProvenanceV1" });

export interface BuildOccurrence {
  /** Deprecated. See InTotoStatement for the replacement. In-toto Provenance representation as defined in spec. */
  intotoProvenance?: InTotoProvenance;
  /** The actual provenance for the build. */
  provenance?: BuildProvenance;
  /** In-Toto Slsa Provenance V1 represents a slsa provenance meeting the slsa spec, wrapped in an in-toto statement. This allows for direct jsonification of a to-spec in-toto slsa statement with a to-spec slsa provenance. */
  inTotoSlsaProvenanceV1?: InTotoSlsaProvenanceV1;
  /** Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes. */
  provenanceBytes?: string;
  /** In-toto Statement representation as defined in spec. The intoto_statement can contain any type of provenance. The serialized payload of the statement can be stored and signed in the Occurrence's envelope. */
  intotoStatement?: InTotoStatement;
}

export const BuildOccurrence: Schema.Schema<BuildOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    intotoProvenance: Schema.optional(InTotoProvenance),
    provenance: Schema.optional(BuildProvenance),
    inTotoSlsaProvenanceV1: Schema.optional(InTotoSlsaProvenanceV1),
    provenanceBytes: Schema.optional(Schema.String),
    intotoStatement: Schema.optional(InTotoStatement),
  }).annotate({ identifier: "BuildOccurrence" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface AnalysisCompleted {
  analysisType?: ReadonlyArray<string>;
}

export const AnalysisCompleted: Schema.Schema<AnalysisCompleted> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analysisType: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AnalysisCompleted" });

export interface File {
  name?: string;
  digest?: Record<string, string>;
}

export const File: Schema.Schema<File> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "File" });

export interface SBOMStatus {
  /** The progress of the SBOM generation. */
  sbomState?: "SBOM_STATE_UNSPECIFIED" | "PENDING" | "COMPLETE" | (string & {});
  /** If there was an error generating an SBOM, this will indicate what that error was. */
  error?: string;
}

export const SBOMStatus: Schema.Schema<SBOMStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sbomState: Schema.optional(Schema.String),
    error: Schema.optional(Schema.String),
  }).annotate({ identifier: "SBOMStatus" });

export interface DiscoveryOccurrence {
  /** Whether the resource is continuously analyzed. */
  continuousAnalysis?:
    | "CONTINUOUS_ANALYSIS_UNSPECIFIED"
    | "ACTIVE"
    | "INACTIVE"
    | (string & {});
  /** When an error is encountered this will contain a LocalizedMessage under details to show to the user. The LocalizedMessage is output only and populated by the API. */
  analysisStatusError?: Status;
  /** The last time vulnerability scan results changed. */
  lastVulnerabilityUpdateTime?: string;
  /** The CPE of the resource being scanned. */
  cpe?: string;
  /** The last time this resource was scanned. */
  lastScanTime?: string;
  /** Output only. The time occurrences related to this discovery occurrence were archived. */
  archiveTime?: string;
  analysisCompleted?: AnalysisCompleted;
  /** Indicates any errors encountered during analysis of a resource. There could be 0 or more of these errors. */
  analysisError?: ReadonlyArray<Status>;
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
  /** Files that make up the resource described by the occurrence. */
  files?: ReadonlyArray<File>;
  /** The status of an SBOM generation. */
  sbomStatus?: SBOMStatus;
}

export const DiscoveryOccurrence: Schema.Schema<DiscoveryOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    continuousAnalysis: Schema.optional(Schema.String),
    analysisStatusError: Schema.optional(Status),
    lastVulnerabilityUpdateTime: Schema.optional(Schema.String),
    cpe: Schema.optional(Schema.String),
    lastScanTime: Schema.optional(Schema.String),
    archiveTime: Schema.optional(Schema.String),
    analysisCompleted: Schema.optional(AnalysisCompleted),
    analysisError: Schema.optional(Schema.Array(Status)),
    analysisStatus: Schema.optional(Schema.String),
    files: Schema.optional(Schema.Array(File)),
    sbomStatus: Schema.optional(SBOMStatus),
  }).annotate({ identifier: "DiscoveryOccurrence" });

export interface DeploymentOccurrence {
  /** Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name. */
  resourceUri?: ReadonlyArray<string>;
  /** Address of the runtime element hosting this deployment. */
  address?: string;
  /** Platform hosting this deployment. */
  platform?: "PLATFORM_UNSPECIFIED" | "GKE" | "FLEX" | "CUSTOM" | (string & {});
  /** Required. Beginning of the lifetime of this deployment. */
  deployTime?: string;
  /** Identity of the user that triggered this deployment. */
  userEmail?: string;
  /** End of the lifetime of this deployment. */
  undeployTime?: string;
  /** Configuration used to create this deployment. */
  config?: string;
}

export const DeploymentOccurrence: Schema.Schema<DeploymentOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.optional(Schema.Array(Schema.String)),
    address: Schema.optional(Schema.String),
    platform: Schema.optional(Schema.String),
    deployTime: Schema.optional(Schema.String),
    userEmail: Schema.optional(Schema.String),
    undeployTime: Schema.optional(Schema.String),
    config: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeploymentOccurrence" });

export interface Location {
  /** Deprecated. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) */
  cpeUri?: string;
  /** The path from which we gathered that this package/version is installed. */
  path?: string;
  /** Deprecated. The version installed at this location. */
  version?: Version;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpeUri: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    version: Schema.optional(Version),
  }).annotate({ identifier: "Location" });

export interface License {
  /** Comments */
  comments?: string;
  /** Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2". */
  expression?: string;
}

export const License: Schema.Schema<License> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    comments: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
  }).annotate({ identifier: "License" });

export interface PackageOccurrence {
  /** Required. Output only. The name of the installed package. */
  name?: string;
  /** Output only. The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  packageType?: string;
  /** Output only. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
  cpeUri?: string;
  /** All of the places within the filesystem versions of this package have been found. */
  location?: ReadonlyArray<Location>;
  /** Output only. The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
  /** Output only. The version of the package. */
  version?: Version;
  /** Licenses that have been declared by the authors of the package. */
  license?: License;
}

export const PackageOccurrence: Schema.Schema<PackageOccurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    location: Schema.optional(Schema.Array(Location)),
    architecture: Schema.optional(Schema.String),
    version: Schema.optional(Version),
    license: Schema.optional(License),
  }).annotate({ identifier: "PackageOccurrence" });

export interface Occurrence {
  /** Describes a specific SBOM reference occurrences. */
  sbomReference?: SBOMReferenceOccurrence;
  /** Describes a compliance violation on a linked resource. */
  compliance?: ComplianceOccurrence;
  /** Describes an available package upgrade on the linked resource. */
  upgrade?: UpgradeOccurrence;
  /** Describes a security vulnerability. */
  vulnerability?: VulnerabilityOccurrence;
  /** Output only. The time this occurrence was last updated. */
  updateTime?: string;
  /** Describes an attestation of an artifact using dsse. */
  dsseAttestation?: DSSEAttestationOccurrence;
  /** Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name?: string;
  /** Output only. The time this occurrence was created. */
  createTime?: string;
  /** Describes how this resource derives from the basis in the associated note. */
  image?: ImageOccurrence;
  /** Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests. */
  noteName?: string;
  /** Describes an attestation of an artifact. */
  attestation?: AttestationOccurrence;
  /** Describes an AI skill analysis. */
  aiSkillAnalysis?: AISkillAnalysisOccurrence;
  /** Describes a secret. */
  secret?: SecretOccurrence;
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
  /** Describes a verifiable build. */
  build?: BuildOccurrence;
  /** Describes when a resource was discovered. */
  discovery?: DiscoveryOccurrence;
  /** Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://gcr.io/project/image@sha256:123abc` for a Docker image. */
  resourceUri?: string;
  /** https://github.com/secure-systems-lab/dsse */
  envelope?: Envelope;
  /** The time this advisory was published by the source. */
  advisoryPublishTime?: string;
  /** Describes the deployment of an artifact on a runtime. */
  deployment?: DeploymentOccurrence;
  /** A description of actions that can be taken to remedy the note. */
  remediation?: string;
  /** Describes the installation of a package on the linked resource. */
  package?: PackageOccurrence;
}

export const Occurrence: Schema.Schema<Occurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sbomReference: Schema.optional(SBOMReferenceOccurrence),
    compliance: Schema.optional(ComplianceOccurrence),
    upgrade: Schema.optional(UpgradeOccurrence),
    vulnerability: Schema.optional(VulnerabilityOccurrence),
    updateTime: Schema.optional(Schema.String),
    dsseAttestation: Schema.optional(DSSEAttestationOccurrence),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    image: Schema.optional(ImageOccurrence),
    noteName: Schema.optional(Schema.String),
    attestation: Schema.optional(AttestationOccurrence),
    aiSkillAnalysis: Schema.optional(AISkillAnalysisOccurrence),
    secret: Schema.optional(SecretOccurrence),
    kind: Schema.optional(Schema.String),
    build: Schema.optional(BuildOccurrence),
    discovery: Schema.optional(DiscoveryOccurrence),
    resourceUri: Schema.optional(Schema.String),
    envelope: Schema.optional(Envelope),
    advisoryPublishTime: Schema.optional(Schema.String),
    deployment: Schema.optional(DeploymentOccurrence),
    remediation: Schema.optional(Schema.String),
    package: Schema.optional(PackageOccurrence),
  }).annotate({ identifier: "Occurrence" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult {
  /** Optional. The content of the attestation to be generated. */
  attestationContent?: string;
  /** Optional. The type of attestation to be generated. */
  attestationType?: string;
  /** Required. The name of the result. */
  name?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    attestationContent: Schema.optional(Schema.String),
    attestationType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository {
  /** Required. Name of the Google Cloud Build repository, formatted as `projects/* /locations/* /connections/* /repositories/*`. */
  repository?: string;
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. */
  dir?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository",
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

export interface DeploymentNote {
  /** Required. Resource URI for the artifact being deployed. */
  resourceUri?: ReadonlyArray<string>;
}

export const DeploymentNote: Schema.Schema<DeploymentNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUri: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DeploymentNote" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Secret {
  /** Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets. */
  secretEnv?: Record<string, string>;
  /** Cloud KMS key name to use to decrypt these envs. */
  kmsKeyName?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Secret: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Secret> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    secretEnv: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Secret",
  });

export interface AISkillAnalysisNote {}

export const AISkillAnalysisNote: Schema.Schema<AISkillAnalysisNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "AISkillAnalysisNote",
  });

export interface BatchCreateOccurrencesRequest {
  /** Required. The occurrences to create. Max allowed length is 1000. */
  occurrences?: ReadonlyArray<Occurrence>;
}

export const BatchCreateOccurrencesRequest: Schema.Schema<BatchCreateOccurrencesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    occurrences: Schema.optional(Schema.Array(Occurrence)),
  }).annotate({ identifier: "BatchCreateOccurrencesRequest" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage {
  /** Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY" Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Optional. Path to the package.json. e.g. workspace/path/to/package Only one of `archive` or `package_path` can be specified. */
  packagePath?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    packagePath: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule {
  /** Optional. Source path of the go.mod file in the build's workspace. If not specified, this will default to the current directory. e.g. ~/code/go/mypackage */
  sourcePath?: string;
  /** Optional. Artifact Registry repository name. Specified Go modules will be zipped and uploaded to Artifact Registry with this location as a prefix. e.g. my-go-repo */
  repositoryName?: string;
  /** Optional. The Go module's "module path". e.g. example.com/foo/v2 */
  modulePath?: string;
  /** Optional. The Go module's semantic version in the form vX.Y.Z. e.g. v0.1.1 Pre-release identifiers can also be added by appending a dash and dot separated ASCII alphanumeric characters and hyphens. e.g. v0.2.3-alpha.x.12m.5 */
  moduleVersion?: string;
  /** Optional. Location of the Artifact Registry repository. i.e. us-east1 Defaults to the build’s location. */
  repositoryLocation?: string;
  /** Optional. Project ID of the Artifact Registry repository. Defaults to the build project. */
  repositoryProjectId?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourcePath: Schema.optional(Schema.String),
    repositoryName: Schema.optional(Schema.String),
    modulePath: Schema.optional(Schema.String),
    moduleVersion: Schema.optional(Schema.String),
    repositoryLocation: Schema.optional(Schema.String),
    repositoryProjectId: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact {
  /** Required. Path to the generic artifact in the build's workspace to be uploaded to Artifact Registry. */
  folder?: string;
  /** Required. Registry path to upload the generic artifact to, in the form projects/$PROJECT/locations/$LOCATION/repositories/$REPO/packages/$PACKAGE/versions/$VERSION */
  registryPath?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    folder: Schema.optional(Schema.String),
    registryPath: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci {
  /** Required. Registry path to upload the container to. e.g. us-east1-docker.pkg.dev/my-project/my-repo/my-image */
  registryPath?: string;
  /** Required. Path on the local file system where to find the container to upload. e.g. /workspace/my-image.tar */
  file?: string;
  /** Optional. Tags to apply to the uploaded image. e.g. latest, 1.0.0 */
  tags?: ReadonlyArray<string>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryPath: Schema.optional(Schema.String),
    file: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects {
  /** Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix. */
  location?: string;
  /** Path globs used to match files in the build's workspace. */
  paths?: ReadonlyArray<string>;
  /** Output only. Stores timing information for pushing all artifact objects. */
  timing?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects> =
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
  /** Maven `artifactId` value used when uploading the artifact to Artifact Registry. */
  artifactId?: string;
  /** Maven `groupId` value used when uploading the artifact to Artifact Registry. */
  groupId?: string;
  /** Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY" Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix. */
  repository?: string;
  /** Optional. Path to a folder containing the files to upload to Artifact Registry. This can be either an absolute path, e.g. `/workspace/my-app/target/`, or a relative path from /workspace, e.g. `my-app/target/`. This field is mutually exclusive with the `path` field. */
  deployFolder?: string;
  /** Maven `version` value used when uploading the artifact to Artifact Registry. */
  version?: string;
  /** Optional. Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar. */
  path?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactId: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
    deployFolder: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact",
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

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts {
  /** A list of npm packages to be uploaded to Artifact Registry upon successful completion of all build steps. Npm packages in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any packages fail to be pushed, the build is marked FAILURE. */
  npmPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage>;
  /** A list of images to be pushed upon the successful completion of all build steps. The images will be pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build is marked FAILURE. */
  images?: ReadonlyArray<string>;
  /** Optional. A list of Go modules to be uploaded to Artifact Registry upon successful completion of all build steps. If any objects fail to be pushed, the build is marked FAILURE. */
  goModules?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule>;
  /** Optional. A list of generic artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. If any artifacts fail to be pushed, the build is marked FAILURE. */
  genericArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact>;
  /** Optional. A list of OCI images to be uploaded to Artifact Registry upon successful completion of all build steps. OCI images in the specified paths will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any images fail to be pushed, the build is marked FAILURE. */
  oci?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci>;
  /** A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE. */
  objects?: ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects;
  /** A list of Maven artifacts to be uploaded to Artifact Registry upon successful completion of all build steps. Artifacts in the workspace matching specified paths globs will be uploaded to the specified Artifact Registry repository using the builder service account's credentials. If any artifacts fail to be pushed, the build is marked FAILURE. */
  mavenArtifacts?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact>;
  /** A list of Python packages to be uploaded to Artifact Registry upon successful completion of all build steps. The build service account credentials will be used to perform the upload. If any objects fail to be pushed, the build is marked FAILURE. */
  pythonPackages?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    npmPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsNpmPackage,
      ),
    ),
    images: Schema.optional(Schema.Array(Schema.String)),
    goModules: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGoModule,
      ),
    ),
    genericArtifacts: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsGenericArtifact,
      ),
    ),
    oci: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsOci),
    ),
    objects: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsArtifactObjects,
    ),
    mavenArtifacts: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsMavenArtifact,
      ),
    ),
    pythonPackages: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1ArtifactsPythonPackage,
      ),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts",
  });

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

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency {
  /** Required. The revision that we will fetch the repo at. */
  revision?: string;
  /** Optional. True if submodules should be fetched too (default false). */
  recurseSubmodules?: boolean;
  /** Required. The kind of repo (url or dev connect). */
  repository?: ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository;
  /** Required. Where should the files be placed on the worker. */
  destPath?: string;
  /** Optional. How much history should be fetched for the build (default 1, -1 for all history). */
  depth?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revision: Schema.optional(Schema.String),
    recurseSubmodules: Schema.optional(Schema.Boolean),
    repository: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceRepository,
    ),
    destPath: Schema.optional(Schema.String),
    depth: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource {
  /** Required. Location of the Git repo to build. This will be used as a `git remote`, see https://git-scm.com/docs/git-remote. */
  url?: string;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
  /** Optional. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. Cloud Build uses `git fetch` to fetch the revision from the Git repository; therefore make sure that the string you provide for `revision` is parsable by the command. For information on string values accepted by `git fetch`, see https://git-scm.com/docs/gitrevisions#_specifying_revisions. For information on `git fetch`, see https://git-scm.com/docs/git-fetch. */
  revision?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource",
  });

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

export const ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
    sourceFetcher: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource {
  /** Required. Name of the Cloud Source Repository. */
  repoName?: string;
  /** Explicit commit SHA to build. */
  commitSha?: string;
  /** Optional. Substitutions to use in a triggered build. Should only be used with RunBuildTrigger */
  substitutions?: Record<string, string>;
  /** Optional. Only trigger a build if the revision regex does NOT match the revision regex. */
  invertRegex?: boolean;
  /** Optional. Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. */
  dir?: string;
  /** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  branchName?: string;
  /** Optional. ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
  projectId?: string;
  /** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
  tagName?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    repoName: Schema.optional(Schema.String),
    commitSha: Schema.optional(Schema.String),
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    invertRegex: Schema.optional(Schema.Boolean),
    dir: Schema.optional(Schema.String),
    branchName: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    tagName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance {
  /** A copy of the build's `source.storage_source_manifest`, if exists, with any revisions resolved. This feature is in Preview. */
  resolvedStorageSourceManifest?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
  /** Output only. Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. Note that `FileHashes` will only be populated if `BuildOptions` has requested a `SourceProvenanceHash`. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (`.tar.gz`), the `FileHash` will be for the single path to that file. */
  fileHashes?: Record<
    string,
    ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes
  >;
  /** Output only. A copy of the build's `source.git_source`, if exists, with any revisions resolved. */
  resolvedGitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;
  /** A copy of the build's `source.storage_source`, if exists, with any generations resolved. */
  resolvedStorageSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;
  /** A copy of the build's `source.repo_source`, if exists, with any revisions resolved. */
  resolvedRepoSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;
  /** Output only. A copy of the build's `source.connected_repository`, if exists, with any revisions resolved. */
  resolvedConnectedRepository?: ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resolvedStorageSourceManifest: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
    fileHashes: Schema.optional(
      Schema.Record(
        Schema.String,
        ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes,
      ),
    ),
    resolvedGitSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource,
    ),
    resolvedStorageSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource,
    ),
    resolvedRepoSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource,
    ),
    resolvedConnectedRepository: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance",
  });

export interface Digest {
  /** Value of the digest. */
  digestBytes?: string;
  /** `SHA1`, `SHA512` etc. */
  algo?: string;
}

export const Digest: Schema.Schema<Digest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digestBytes: Schema.optional(Schema.String),
    algo: Schema.optional(Schema.String),
  }).annotate({ identifier: "Digest" });

export interface PackageNote {
  /** Hash value, typically a file digest, that allows unique identification a specific package. */
  digest?: ReadonlyArray<Digest>;
  /** Deprecated. The various channels by which a package is distributed. */
  distribution?: ReadonlyArray<Distribution>;
  /** Required. Immutable. The name of the package. */
  name?: string;
  /** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  packageType?: string;
  /** The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe_uri will be blank for language packages. */
  cpeUri?: string;
  /** The description of this package. */
  description?: string;
  /** The version of the package. */
  version?: Version;
  /** The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages. */
  architecture?: "ARCHITECTURE_UNSPECIFIED" | "X86" | "X64" | (string & {});
  /** Licenses that have been declared by the authors of the package. */
  license?: License;
  /** A freeform text denoting the maintainer of this package. */
  maintainer?: string;
  /** The homepage for this package. */
  url?: string;
}

export const PackageNote: Schema.Schema<PackageNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    digest: Schema.optional(Schema.Array(Digest)),
    distribution: Schema.optional(Schema.Array(Distribution)),
    name: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    cpeUri: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    version: Schema.optional(Version),
    architecture: Schema.optional(Schema.String),
    license: Schema.optional(License),
    maintainer: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "PackageNote" });

export interface Assessment {
  /** A detailed description of this Vex. */
  longDescription?: string;
  /** Contains information about the impact of this vulnerability, this will change with time. */
  impacts?: ReadonlyArray<string>;
  /** Holds the MITRE standard Common Vulnerabilities and Exposures (CVE) tracking number for the vulnerability. Deprecated: Use vulnerability_id instead to denote CVEs. */
  cve?: string;
  /** A one sentence description of this Vex. */
  shortDescription?: string;
  /** Holds a list of references associated with this vulnerability item and assessment. These uris have additional information about the vulnerability and the assessment itself. E.g. Link to a document which details how this assessment concluded the state of this vulnerability. */
  relatedUris?: ReadonlyArray<RelatedUrl>;
  /** Justification provides the justification when the state of the assessment if NOT_AFFECTED. */
  justification?: Justification;
  /** Provides the state of this Vulnerability assessment. */
  state?:
    | "STATE_UNSPECIFIED"
    | "AFFECTED"
    | "NOT_AFFECTED"
    | "FIXED"
    | "UNDER_INVESTIGATION"
    | (string & {});
  /** The vulnerability identifier for this Assessment. Will hold one of common identifiers e.g. CVE, GHSA etc. */
  vulnerabilityId?: string;
  /** Specifies details on how to handle (and presumably, fix) a vulnerability. */
  remediations?: ReadonlyArray<Remediation>;
}

export const Assessment: Schema.Schema<Assessment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    longDescription: Schema.optional(Schema.String),
    impacts: Schema.optional(Schema.Array(Schema.String)),
    cve: Schema.optional(Schema.String),
    shortDescription: Schema.optional(Schema.String),
    relatedUris: Schema.optional(Schema.Array(RelatedUrl)),
    justification: Schema.optional(Justification),
    state: Schema.optional(Schema.String),
    vulnerabilityId: Schema.optional(Schema.String),
    remediations: Schema.optional(Schema.Array(Remediation)),
  }).annotate({ identifier: "Assessment" });

export interface Product {
  /** Contains a URI which is vendor-specific. Example: The artifact repository URL of an image. */
  genericUri?: string;
  /** Token that identifies a product so that it can be referred to from other parts in the document. There is no predefined format as long as it uniquely identifies a group in the context of the current document. */
  id?: string;
  /** Name of the product. */
  name?: string;
}

export const Product: Schema.Schema<Product> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericUri: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Product" });

export interface VulnerabilityAssessmentNote {
  /** The title of the note. E.g. `Vex-Debian-11.4` */
  title?: string;
  /** A one sentence description of this Vex. */
  shortDescription?: string;
  /** Represents a vulnerability assessment for the product. */
  assessment?: Assessment;
  /** The product affected by this vex. */
  product?: Product;
  /** A detailed description of this Vex. */
  longDescription?: string;
  /** Publisher details of this Note. */
  publisher?: Publisher;
  /** Identifies the language used by this document, corresponding to IETF BCP 47 / RFC 5646. */
  languageCode?: string;
}

export const VulnerabilityAssessmentNote: Schema.Schema<VulnerabilityAssessmentNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    shortDescription: Schema.optional(Schema.String),
    assessment: Schema.optional(Assessment),
    product: Schema.optional(Product),
    longDescription: Schema.optional(Schema.String),
    publisher: Schema.optional(Publisher),
    languageCode: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilityAssessmentNote" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Volume {
  /** Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths. */
  path?: string;
  /** Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps. */
  name?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Volume: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Volume",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep {
  /** Working directory to use when running this step's container. If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a `volume` for that path is specified. If the build specifies a `RepoSource` with `dir` and a step with a `dir`, which specifies an absolute path, the `RepoSource` `dir` is ignored for the step's execution. */
  dir?: string;
  /** Output only. Stores timing information for pulling this build step's builder image only. */
  pullTiming?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary. The Docker daemon's cache will already have the latest versions of all of the officially supported build steps ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)). The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them. If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step. */
  name?: string;
  /** Allow this build step to fail without failing the entire build. If false, the entire build will fail if this step fails. Otherwise, the build will succeed, but this step will still have a failure status. Error information will be reported in the failure_detail field. */
  allowFailure?: boolean;
  /** A list of arguments that will be presented to the step when it is started. If the image used to run the step's container has an entrypoint, the `args` are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments. */
  args?: ReadonlyArray<string>;
  /** Unique identifier for this build step, used in `wait_for` to reference this build step as a dependency. */
  id?: string;
  /** A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** Output only. Stores timing information for executing this build step. */
  timing?: ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan;
  /** A shell script to be executed in the step. When script is provided, the user cannot specify the entrypoint or args. */
  script?: string;
  /** Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used. */
  entrypoint?: string;
  /** List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume>;
  /** Allow this build step to fail without failing the entire build if and only if the exit code is one of the specified codes. If allow_failure is also specified, this field will take precedence. */
  allowExitCodes?: ReadonlyArray<number>;
  /** The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in `wait_for` have completed successfully. If `wait_for` is empty, this build step will start when all previous build steps in the `Build.Steps` list have completed successfully. */
  waitFor?: ReadonlyArray<string>;
  /** Option to include built-in and custom substitutions as env variables for this build step. This option will override the global option in BuildOption. */
  automapSubstitutions?: boolean;
  /** A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's `Secret`. */
  secretEnv?: ReadonlyArray<string>;
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
  /** Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out. */
  timeout?: string;
  /** Declaration of results for this build step. */
  results?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult>;
  /** Output only. Return code from running the step. */
  exitCode?: number;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dir: Schema.optional(Schema.String),
    pullTiming: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    name: Schema.optional(Schema.String),
    allowFailure: Schema.optional(Schema.Boolean),
    args: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(Schema.String)),
    timing: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
    ),
    script: Schema.optional(Schema.String),
    entrypoint: Schema.optional(Schema.String),
    volumes: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Volume),
    ),
    allowExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    waitFor: Schema.optional(Schema.Array(Schema.String)),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.String),
    timeout: Schema.optional(Schema.String),
    results: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1StepResult),
    ),
    exitCode: Schema.optional(Schema.Number),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep",
  });

export interface Expr {
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
}

export const Expr: Schema.Schema<Expr> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    expression: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "Expr" });

export interface Binding {
  /** The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  condition?: Expr;
  /** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles). */
  role?: string;
  /** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
  members?: ReadonlyArray<string>;
}

export const Binding: Schema.Schema<Binding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    condition: Schema.optional(Expr),
    role: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Binding" });

export interface Policy {
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
}

export const Policy: Schema.Schema<Policy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    bindings: Schema.optional(Schema.Array(Binding)),
  }).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
}

export const SetIamPolicyRequest: Schema.Schema<SetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy: Schema.optional(Policy),
  }).annotate({ identifier: "SetIamPolicyRequest" });

export interface CisBenchmark {
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  profileLevel?: number;
}

export const CisBenchmark: Schema.Schema<CisBenchmark> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    profileLevel: Schema.optional(Schema.Number),
  }).annotate({ identifier: "CisBenchmark" });

export interface ComplianceNote {
  /** The title that identifies this compliance check. */
  title?: string;
  /** A rationale for the existence of this compliance check. */
  rationale?: string;
  /** A description about this compliance check. */
  description?: string;
  /** A description of remediation steps if the compliance check fails. */
  remediation?: string;
  /** Serialized scan instructions with a predefined format. */
  scanInstructions?: string;
  impact?: string;
  /** The OS and config versions the benchmark applies to. */
  version?: ReadonlyArray<ComplianceVersion>;
  cisBenchmark?: CisBenchmark;
}

export const ComplianceNote: Schema.Schema<ComplianceNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    title: Schema.optional(Schema.String),
    rationale: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    remediation: Schema.optional(Schema.String),
    scanInstructions: Schema.optional(Schema.String),
    impact: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Array(ComplianceVersion)),
    cisBenchmark: Schema.optional(CisBenchmark),
  }).annotate({ identifier: "ComplianceNote" });

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

export interface GetPolicyOptions {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  requestedPolicyVersion?: number;
}

export const GetPolicyOptions: Schema.Schema<GetPolicyOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedPolicyVersion: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GetPolicyOptions" });

export interface GetIamPolicyRequest {
  /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
  options?: GetPolicyOptions;
}

export const GetIamPolicyRequest: Schema.Schema<GetIamPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(GetPolicyOptions),
  }).annotate({ identifier: "GetIamPolicyRequest" });

export interface ListNoteOccurrencesResponse {
  /** Token to provide to skip to a particular spot in the list. */
  nextPageToken?: string;
  /** The occurrences attached to the specified note. */
  occurrences?: ReadonlyArray<Occurrence>;
}

export const ListNoteOccurrencesResponse: Schema.Schema<ListNoteOccurrencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    occurrences: Schema.optional(Schema.Array(Occurrence)),
  }).annotate({ identifier: "ListNoteOccurrencesResponse" });

export interface DiscoveryNote {
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
    | "UPGRADE"
    | "COMPLIANCE"
    | "DSSE_ATTESTATION"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | "AI_SKILL_ANALYSIS"
    | (string & {});
}

export const DiscoveryNote: Schema.Schema<DiscoveryNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analysisKind: Schema.optional(Schema.String),
  }).annotate({ identifier: "DiscoveryNote" });

export interface BuildNote {
  /** Required. Immutable. Version of the builder which produced this build. */
  builderVersion?: string;
}

export const BuildNote: Schema.Schema<BuildNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    builderVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "BuildNote" });

export interface SecretNote {}

export const SecretNote: Schema.Schema<SecretNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "SecretNote",
  });

export interface Detail {
  /** The version number at the start of an interval in which this vulnerability exists. A vulnerability can affect a package between version numbers that are disjoint sets of intervals (example: [1.0.0-1.1.0], [2.4.6-2.4.8] and [4.5.6-4.6.8]) each of which will be represented in its own Detail. If a specific affected version is provided by a vulnerability database, affected_version_start and affected_version_end will be the same in that Detail. */
  affectedVersionStart?: Version;
  /** The distro recommended version to update to that contains a fix for this vulnerability. Setting this to VersionKind.MAXIMUM means no such version is yet available. */
  fixedVersion?: Version;
  /** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
  sourceUpdateTime?: string;
  /** The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). */
  packageType?: string;
  /** The distro recommended package to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_package. */
  fixedPackage?: string;
  /** Whether this detail is obsolete. Occurrences are expected not to point to obsolete details. */
  isObsolete?: boolean;
  /** The source from which the information in this Detail was obtained. */
  source?: string;
  /** The distro recommended [CPE URI](https://cpe.mitre.org/specification/) to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_cpe_uri. */
  fixedCpeUri?: string;
  /** The name of the vendor of the product. */
  vendor?: string;
  /** Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects. */
  affectedCpeUri?: string;
  /** Required. The package this vulnerability affects. */
  affectedPackage?: string;
  /** The distro assigned severity of this vulnerability. */
  severityName?: string;
  /** A vendor-specific description of this vulnerability. */
  description?: string;
  /** The version number at the end of an interval in which this vulnerability exists. A vulnerability can affect a package between version numbers that are disjoint sets of intervals (example: [1.0.0-1.1.0], [2.4.6-2.4.8] and [4.5.6-4.6.8]) each of which will be represented in its own Detail. If a specific affected version is provided by a vulnerability database, affected_version_start and affected_version_end will be the same in that Detail. */
  affectedVersionEnd?: Version;
}

export const Detail: Schema.Schema<Detail> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    affectedVersionStart: Schema.optional(Version),
    fixedVersion: Schema.optional(Version),
    sourceUpdateTime: Schema.optional(Schema.String),
    packageType: Schema.optional(Schema.String),
    fixedPackage: Schema.optional(Schema.String),
    isObsolete: Schema.optional(Schema.Boolean),
    source: Schema.optional(Schema.String),
    fixedCpeUri: Schema.optional(Schema.String),
    vendor: Schema.optional(Schema.String),
    affectedCpeUri: Schema.optional(Schema.String),
    affectedPackage: Schema.optional(Schema.String),
    severityName: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    affectedVersionEnd: Schema.optional(Version),
  }).annotate({ identifier: "Detail" });

export interface CVSSv3 {
  exploitabilityScore?: number;
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
  userInteraction?:
    | "USER_INTERACTION_UNSPECIFIED"
    | "USER_INTERACTION_NONE"
    | "USER_INTERACTION_REQUIRED"
    | (string & {});
  /** The base score is a function of the base metric scores. */
  baseScore?: number;
  /** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. */
  attackVector?:
    | "ATTACK_VECTOR_UNSPECIFIED"
    | "ATTACK_VECTOR_NETWORK"
    | "ATTACK_VECTOR_ADJACENT"
    | "ATTACK_VECTOR_LOCAL"
    | "ATTACK_VECTOR_PHYSICAL"
    | (string & {});
  availabilityImpact?:
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
  impactScore?: number;
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
}

export const CVSSv3: Schema.Schema<CVSSv3> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exploitabilityScore: Schema.optional(Schema.Number),
    attackComplexity: Schema.optional(Schema.String),
    confidentialityImpact: Schema.optional(Schema.String),
    userInteraction: Schema.optional(Schema.String),
    baseScore: Schema.optional(Schema.Number),
    attackVector: Schema.optional(Schema.String),
    availabilityImpact: Schema.optional(Schema.String),
    integrityImpact: Schema.optional(Schema.String),
    impactScore: Schema.optional(Schema.Number),
    privilegesRequired: Schema.optional(Schema.String),
    scope: Schema.optional(Schema.String),
  }).annotate({ identifier: "CVSSv3" });

export interface VulnerabilityNote {
  /** The note provider assigned severity of this vulnerability. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version. */
  windowsDetails?: ReadonlyArray<WindowsDetail>;
  /** Details of all known distros and packages affected by this vulnerability. */
  details?: ReadonlyArray<Detail>;
  /** The time this advisory was published by the source. */
  advisoryPublishTime?: string;
  /** The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
  cvssScore?: number;
  /** The full description of the CVSSv3 for this vulnerability. */
  cvssV3?: CVSSv3;
  /** The full description of the v2 CVSS for this vulnerability. */
  cvssV2?: CVSS;
  /** CVSS version used to populate cvss_score and severity. */
  cvssVersion?:
    | "CVSS_VERSION_UNSPECIFIED"
    | "CVSS_VERSION_2"
    | "CVSS_VERSION_3"
    | (string & {});
  /** The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. */
  sourceUpdateTime?: string;
}

export const VulnerabilityNote: Schema.Schema<VulnerabilityNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severity: Schema.optional(Schema.String),
    windowsDetails: Schema.optional(Schema.Array(WindowsDetail)),
    details: Schema.optional(Schema.Array(Detail)),
    advisoryPublishTime: Schema.optional(Schema.String),
    cvssScore: Schema.optional(Schema.Number),
    cvssV3: Schema.optional(CVSSv3),
    cvssV2: Schema.optional(CVSS),
    cvssVersion: Schema.optional(Schema.String),
    sourceUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "VulnerabilityNote" });

export interface UpgradeNote {
  /** Required for non-Windows OS. The package this Upgrade is for. */
  package?: string;
  /** Required for non-Windows OS. The version of the package in machine + human readable form. */
  version?: Version;
  /** Metadata about the upgrade for each specific operating system. */
  distributions?: ReadonlyArray<UpgradeDistribution>;
  /** Required for Windows OS. Represents the metadata about the Windows update. */
  windowsUpdate?: WindowsUpdate;
}

export const UpgradeNote: Schema.Schema<UpgradeNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    package: Schema.optional(Schema.String),
    version: Schema.optional(Version),
    distributions: Schema.optional(Schema.Array(UpgradeDistribution)),
    windowsUpdate: Schema.optional(WindowsUpdate),
  }).annotate({ identifier: "UpgradeNote" });

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

export interface ImageNote {
  /** Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images. */
  resourceUrl?: string;
  /** Required. Immutable. The fingerprint of the base image. */
  fingerprint?: Fingerprint;
}

export const ImageNote: Schema.Schema<ImageNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceUrl: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Fingerprint),
  }).annotate({ identifier: "ImageNote" });

export interface DSSEAttestationNote {
  /** DSSEHint hints at the purpose of the attestation authority. */
  hint?: DSSEHint;
}

export const DSSEAttestationNote: Schema.Schema<DSSEAttestationNote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hint: Schema.optional(DSSEHint),
  }).annotate({ identifier: "DSSEAttestationNote" });

export interface Note {
  /** Time of expiration for this note. Empty if note does not expire. */
  expirationTime?: string;
  /** A note describing something that can be deployed. */
  deployment?: DeploymentNote;
  /** A note describing the initial analysis of a resource. */
  discovery?: DiscoveryNote;
  /** A note describing build provenance for a verifiable build. */
  build?: BuildNote;
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
    | "UPGRADE"
    | "COMPLIANCE"
    | "DSSE_ATTESTATION"
    | "VULNERABILITY_ASSESSMENT"
    | "SBOM_REFERENCE"
    | "SECRET"
    | "AI_SKILL_ANALYSIS"
    | (string & {});
  /** A note describing a secret. */
  secret?: SecretNote;
  /** A note describing a package hosted by various package managers. */
  package?: PackageNote;
  /** A note describing a package vulnerability. */
  vulnerability?: VulnerabilityNote;
  /** A one sentence description of this note. */
  shortDescription?: string;
  /** Other notes related to this note. */
  relatedNoteNames?: ReadonlyArray<string>;
  /** A detailed description of this note. */
  longDescription?: string;
  /** A note describing available package upgrades. */
  upgrade?: UpgradeNote;
  /** A note describing a compliance check. */
  compliance?: ComplianceNote;
  /** A note describing an SBOM reference. */
  sbomReference?: SBOMReferenceNote;
  /** A note describing a vulnerability assessment. */
  vulnerabilityAssessment?: VulnerabilityAssessmentNote;
  /** A note describing an AI skill analysis. */
  aiSkillAnalysis?: AISkillAnalysisNote;
  /** A note describing an attestation role. */
  attestation?: AttestationNote;
  /** Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name?: string;
  /** Output only. The time this note was created. This field can be used as a filter in list requests. */
  createTime?: string;
  /** A note describing a base image. */
  image?: ImageNote;
  /** URLs associated with this note. */
  relatedUrl?: ReadonlyArray<RelatedUrl>;
  /** A note describing a dsse attestation note. */
  dsseAttestation?: DSSEAttestationNote;
  /** Output only. The time this note was last updated. This field can be used as a filter in list requests. */
  updateTime?: string;
}

export const Note: Schema.Schema<Note> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expirationTime: Schema.optional(Schema.String),
    deployment: Schema.optional(DeploymentNote),
    discovery: Schema.optional(DiscoveryNote),
    build: Schema.optional(BuildNote),
    kind: Schema.optional(Schema.String),
    secret: Schema.optional(SecretNote),
    package: Schema.optional(PackageNote),
    vulnerability: Schema.optional(VulnerabilityNote),
    shortDescription: Schema.optional(Schema.String),
    relatedNoteNames: Schema.optional(Schema.Array(Schema.String)),
    longDescription: Schema.optional(Schema.String),
    upgrade: Schema.optional(UpgradeNote),
    compliance: Schema.optional(ComplianceNote),
    sbomReference: Schema.optional(SBOMReferenceNote),
    vulnerabilityAssessment: Schema.optional(VulnerabilityAssessmentNote),
    aiSkillAnalysis: Schema.optional(AISkillAnalysisNote),
    attestation: Schema.optional(AttestationNote),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    image: Schema.optional(ImageNote),
    relatedUrl: Schema.optional(Schema.Array(RelatedUrl)),
    dsseAttestation: Schema.optional(DSSEAttestationNote),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Note" });

export interface ListNotesResponse {
  /** The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results. */
  nextPageToken?: string;
  /** Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: `projects/[PROJECT_ID]/locations/[LOCATION]` */
  unreachable?: ReadonlyArray<string>;
  /** The notes requested. */
  notes?: ReadonlyArray<Note>;
}

export const ListNotesResponse: Schema.Schema<ListNotesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    notes: Schema.optional(Schema.Array(Note)),
  }).annotate({ identifier: "ListNotesResponse" });

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

export interface FixableTotalByDigest {
  /** The number of fixable vulnerabilities associated with this resource. */
  fixableCount?: string;
  /** The affected resource. */
  resourceUri?: string;
  /** The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities. */
  severity?:
    | "SEVERITY_UNSPECIFIED"
    | "MINIMAL"
    | "LOW"
    | "MEDIUM"
    | "HIGH"
    | "CRITICAL"
    | (string & {});
  /** The total number of vulnerabilities associated with this resource. */
  totalCount?: string;
}

export const FixableTotalByDigest: Schema.Schema<FixableTotalByDigest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixableCount: Schema.optional(Schema.String),
    resourceUri: Schema.optional(Schema.String),
    severity: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "FixableTotalByDigest" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig {
  /** Required. The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. */
  revision?: string;
  /** Required. The Developer Connect Git repository link, formatted as `projects/* /locations/* /connections/* /gitRepositoryLink/*`. */
  gitRepositoryLink?: string;
  /** Required. Directory, relative to the source root, in which to run the build. */
  dir?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revision: Schema.optional(Schema.String),
    gitRepositoryLink: Schema.optional(Schema.String),
    dir: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Source {
  /** Optional. If provided, get the source from this 2nd-gen Google Cloud Build repository resource. */
  connectedRepository?: ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository;
  /** If provided, get the source from this Developer Connect config. */
  developerConnectConfig?: ContaineranalysisGoogleDevtoolsCloudbuildV1DeveloperConnectConfig;
  /** If provided, get the source from this location in Cloud Storage. */
  storageSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource;
  /** If provided, get the source from this location in a Cloud Source Repository. */
  repoSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1RepoSource;
  /** If provided, get the source from this Git repository. */
  gitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource;
  /** If provided, get the source from this manifest in Cloud Storage. This feature is in Preview; see description [here](https://github.com/GoogleCloudPlatform/cloud-builders/tree/master/gcs-fetcher). */
  storageSourceManifest?: ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Source: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Source> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    connectedRepository: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ConnectedRepository,
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
    gitSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitSource,
    ),
    storageSourceManifest: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSourceManifest,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Source",
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
  /** Optional. Option to specify how default logs buckets are setup. */
  defaultLogsBucketBehavior?:
    | "DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED"
    | "REGIONAL_USER_OWNED_BUCKET"
    | "LEGACY_BUCKET"
    | (string & {});
  /** Global list of volumes to mount for ALL build steps Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration. */
  volumes?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Volume>;
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
  /** Optional. Option to specify whether structured logging is enabled. If true, JSON-formatted logs are parsed as structured logs. */
  enableStructuredLogging?: boolean;
  /** Option to include built-in and custom substitutions as env variables for all build steps. */
  automapSubstitutions?: boolean;
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
  /** Option to specify behavior when there is an error in the substitution checks. NOTE: this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden in the build configuration file. */
  substitutionOption?: "MUST_MATCH" | "ALLOW_LOOSE" | (string & {});
  /** Option to specify whether or not to apply bash style string operations to the substitutions. NOTE: this is always enabled for triggered builds and cannot be overridden in the build configuration file. */
  dynamicSubstitutions?: boolean;
  /** Option to define build log streaming behavior to Cloud Storage. */
  logStreamingOption?:
    | "STREAM_DEFAULT"
    | "STREAM_ON"
    | "STREAM_OFF"
    | (string & {});
  /** Requested disk size for the VM that runs the build. Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 4000GB; builds that request more than the maximum are rejected with an error. */
  diskSizeGb?: string;
  /** Requested verifiability options. */
  requestedVerifyOption?: "NOT_VERIFIED" | "VERIFIED" | (string & {});
  /** Optional. Specification for execution on a `WorkerPool`. See [running builds in a private pool](https://cloud.google.com/build/docs/private-pools/run-builds-in-private-pool) for more information. */
  pool?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption;
  /** Optional. Option to specify the Pub/Sub topic to receive build status updates. */
  pubsubTopic?: string;
  /** Compute Engine machine type on which to run the build. */
  machineType?:
    | "UNSPECIFIED"
    | "N1_HIGHCPU_8"
    | "N1_HIGHCPU_32"
    | "E2_HIGHCPU_8"
    | "E2_HIGHCPU_32"
    | "E2_MEDIUM"
    | (string & {});
  /** A list of global environment variable definitions that will exist for all build steps in this build. If a variable is defined in both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE". */
  env?: ReadonlyArray<string>;
  /** This field deprecated; please use `pool.name` instead. */
  workerPool?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    defaultLogsBucketBehavior: Schema.optional(Schema.String),
    volumes: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Volume),
    ),
    logging: Schema.optional(Schema.String),
    secretEnv: Schema.optional(Schema.Array(Schema.String)),
    enableStructuredLogging: Schema.optional(Schema.Boolean),
    automapSubstitutions: Schema.optional(Schema.Boolean),
    sourceProvenanceHash: Schema.optional(Schema.Array(Schema.String)),
    substitutionOption: Schema.optional(Schema.String),
    dynamicSubstitutions: Schema.optional(Schema.Boolean),
    logStreamingOption: Schema.optional(Schema.String),
    diskSizeGb: Schema.optional(Schema.String),
    requestedVerifyOption: Schema.optional(Schema.String),
    pool: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptionsPoolOption,
    ),
    pubsubTopic: Schema.optional(Schema.String),
    machineType: Schema.optional(Schema.String),
    env: Schema.optional(Schema.Array(Schema.String)),
    workerPool: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions",
  });

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

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency {
  /** Represents a generic artifact as a build dependency. */
  genericArtifact?: ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGenericArtifactDependency;
  /** Represents a git repository as a build dependency. */
  gitSource?: ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency;
  /** If set to true disable all dependency fetching (ignoring the default source as well). */
  empty?: boolean;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    genericArtifact: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGenericArtifactDependency,
    ),
    gitSource: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1DependencyGitSourceDependency,
    ),
    empty: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency",
  });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult {
  /** Required. The decision of this manual approval. */
  decision?: "DECISION_UNSPECIFIED" | "APPROVED" | "REJECTED" | (string & {});
  /** Output only. Email of the user that called the ApproveBuild API to approve or reject a build at the time that the API was called. */
  approverAccount?: string;
  /** Output only. The time when the approval decision was made. */
  approvalTime?: string;
  /** Optional. An optional comment for this manual approval result. */
  comment?: string;
  /** Optional. An optional URL tied to this manual approval result. This field is essentially the same as comment, except that it will be rendered by the UI differently. An example use case is a link to an external job that approved this Build. */
  url?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    decision: Schema.optional(Schema.String),
    approverAccount: Schema.optional(Schema.String),
    approvalTime: Schema.optional(Schema.String),
    comment: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult",
  });

export interface TestIamPermissionsRequest {
  /** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsRequest: Schema.Schema<TestIamPermissionsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsRequest" });

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

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets {
  /** Secrets encrypted with KMS key and the associated secret environment variable. */
  inline?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret>;
  /** Secrets in Secret Manager and associated secret environment variable. */
  secretManager?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret>;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    inline: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret),
    ),
    secretManager: Schema.optional(
      Schema.Array(
        ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret,
      ),
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets",
  });

export interface ListOccurrencesResponse {
  /** The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results. */
  nextPageToken?: string;
  /** Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: `projects/[PROJECT_ID]/locations/[LOCATION]` */
  unreachable?: ReadonlyArray<string>;
  /** The occurrences requested. */
  occurrences?: ReadonlyArray<Occurrence>;
}

export const ListOccurrencesResponse: Schema.Schema<ListOccurrencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    occurrences: Schema.optional(Schema.Array(Occurrence)),
  }).annotate({ identifier: "ListOccurrencesResponse" });

export interface ExportSBOMResponse {
  /** The name of the discovery occurrence in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID} It can be used to track the progress of the SBOM export. */
  discoveryOccurrence?: string;
}

export const ExportSBOMResponse: Schema.Schema<ExportSBOMResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discoveryOccurrence: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExportSBOMResponse" });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo {
  /** Explains the failure issue in more detail using hard-coded text. */
  detail?: string;
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
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    detail: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval {
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
  /** Output only. Result of manual approval for this Build. */
  result?: ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    config: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalConfig,
    ),
    state: Schema.optional(Schema.String),
    result: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1ApprovalResult,
    ),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval",
  });

export interface ContaineranalysisGoogleDevtoolsCloudbuildV1Build {
  /** Substitutions data for `Build` resource. */
  substitutions?: Record<string, string>;
  /** Output only. Results of the build. */
  results?: ContaineranalysisGoogleDevtoolsCloudbuildV1Results;
  /** Output only. Non-fatal problems encountered during the execution of the build. */
  warnings?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning>;
  /** Output only. Customer-readable message about the current status. */
  statusDetail?: string;
  /** Output only. The ID of the `BuildTrigger` that triggered this build, if it was triggered automatically. */
  buildTriggerId?: string;
  /** A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the `Build` resource's results field. If any of the images fail to be pushed, the build status is marked `FAILURE`. */
  images?: ReadonlyArray<string>;
  /** Output only. URL to logs for this build in Google Cloud Console. */
  logUrl?: string;
  /** Output only. Unique identifier of the build. */
  id?: string;
  /** Output only. Time at which execution of the build was started. */
  startTime?: string;
  /** Output only. Time at which the request to create the build was received. */
  createTime?: string;
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
  /** Optional. The location of the source files to build. */
  source?: ContaineranalysisGoogleDevtoolsCloudbuildV1Source;
  /** Secrets to decrypt using Cloud Key Management Service. Note: Secret Manager is the recommended technique for managing sensitive data with Cloud Build. Use `available_secrets` to configure builds to access secrets from Secret Manager. For instructions, see: https://cloud.google.com/cloud-build/docs/securing-builds/use-secrets */
  secrets?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Secret>;
  /** Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be `TIMEOUT`. `timeout` starts ticking from `startTime`. Default time is 60 minutes. */
  timeout?: string;
  /** Cloud Storage bucket where logs should be written (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`. */
  logsBucket?: string;
  /** Optional. Configuration for git operations. */
  gitConfig?: ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig;
  /** Secrets and secret environment variables. */
  availableSecrets?: ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets;
  /** Output only. Time at which execution of the build was finished. The difference between finish_time and start_time is the duration of the build's execution. */
  finishTime?: string;
  /** Output only. Contains information about the build when status=FAILURE. */
  failureInfo?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo;
  /** Optional. Dependencies that the Cloud Build worker will fetch before executing user steps. */
  dependencies?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency>;
  /** Tags for annotation of a `Build`. These are not docker tags. */
  tags?: ReadonlyArray<string>;
  /** Output only. Stores timing information for phases of the build. Valid keys are: * BUILD: time to execute all build steps. * PUSH: time to push all artifacts including docker images and non docker artifacts. * FETCHSOURCE: time to fetch source. * SETUPBUILD: time to set up build. If the build does not specify source or images, these keys will not be included. */
  timing?: Record<string, ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan>;
  /** Special options for this build. */
  options?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions;
  /** Output only. A permanent fixed identifier for source. */
  sourceProvenance?: ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance;
  /** Output only. Describes this build's approval configuration, status, and result. */
  approval?: ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval;
  /** IAM service account whose credentials will be used at build runtime. Must be of the format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. ACCOUNT can be email address or uniqueId of the service account. */
  serviceAccount?: string;
  /** Required. The operations to be performed on the workspace. */
  steps?: ReadonlyArray<ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep>;
  /** Output only. The 'Build' name with format: `projects/{project}/locations/{location}/builds/{build}`, where {build} is a unique identifier generated by the service. */
  name?: string;
  /** Artifacts produced by the build that should be uploaded upon successful completion of all build steps. */
  artifacts?: ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts;
  /** TTL in queue for this build. If provided and the build is enqueued longer than this value, the build will expire and the build status will be `EXPIRED`. The TTL starts ticking from create_time. */
  queueTtl?: string;
}

export const ContaineranalysisGoogleDevtoolsCloudbuildV1Build: Schema.Schema<ContaineranalysisGoogleDevtoolsCloudbuildV1Build> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    substitutions: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    results: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1Results,
    ),
    warnings: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildWarning),
    ),
    statusDetail: Schema.optional(Schema.String),
    buildTriggerId: Schema.optional(Schema.String),
    images: Schema.optional(Schema.Array(Schema.String)),
    logUrl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    source: Schema.optional(ContaineranalysisGoogleDevtoolsCloudbuildV1Source),
    secrets: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Secret),
    ),
    timeout: Schema.optional(Schema.String),
    logsBucket: Schema.optional(Schema.String),
    gitConfig: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1GitConfig,
    ),
    availableSecrets: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets,
    ),
    finishTime: Schema.optional(Schema.String),
    failureInfo: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildFailureInfo,
    ),
    dependencies: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1Dependency),
    ),
    tags: Schema.optional(Schema.Array(Schema.String)),
    timing: Schema.optional(
      Schema.Record(
        Schema.String,
        ContaineranalysisGoogleDevtoolsCloudbuildV1TimeSpan,
      ),
    ),
    options: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildOptions,
    ),
    sourceProvenance: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1SourceProvenance,
    ),
    approval: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1BuildApproval,
    ),
    serviceAccount: Schema.optional(Schema.String),
    steps: Schema.optional(
      Schema.Array(ContaineranalysisGoogleDevtoolsCloudbuildV1BuildStep),
    ),
    name: Schema.optional(Schema.String),
    artifacts: Schema.optional(
      ContaineranalysisGoogleDevtoolsCloudbuildV1Artifacts,
    ),
    queueTtl: Schema.optional(Schema.String),
  }).annotate({
    identifier: "ContaineranalysisGoogleDevtoolsCloudbuildV1Build",
  });

export interface TestIamPermissionsResponse {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: ReadonlyArray<string>;
}

export const TestIamPermissionsResponse: Schema.Schema<TestIamPermissionsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    permissions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "TestIamPermissionsResponse" });

export interface CloudStorageLocation {}

export const CloudStorageLocation: Schema.Schema<CloudStorageLocation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CloudStorageLocation",
  });

export interface VulnerabilityOccurrencesSummary {
  /** A listing by resource of the number of fixable and total vulnerabilities. */
  counts?: ReadonlyArray<FixableTotalByDigest>;
  /** Unordered list. Unreachable regions. Populated for requests from the global region when `return_partial_success` is set. Format: `projects/[PROJECT_ID]/locations/[LOCATION]` */
  unreachable?: ReadonlyArray<string>;
}

export const VulnerabilityOccurrencesSummary: Schema.Schema<VulnerabilityOccurrencesSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    counts: Schema.optional(Schema.Array(FixableTotalByDigest)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "VulnerabilityOccurrencesSummary" });

export interface ExportSBOMRequest {
  /** Optional. Empty placeholder to denote that this is a Google Cloud Storage export request. */
  cloudStorageLocation?: CloudStorageLocation;
}

export const ExportSBOMRequest: Schema.Schema<ExportSBOMRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cloudStorageLocation: Schema.optional(CloudStorageLocation),
  }).annotate({ identifier: "ExportSBOMRequest" });

export interface BatchCreateNotesRequest {
  /** Required. The notes to create. Max allowed length is 1000. */
  notes?: Record<string, Note>;
}

export const BatchCreateNotesRequest: Schema.Schema<BatchCreateNotesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notes: Schema.optional(Schema.Record(Schema.String, Note)),
  }).annotate({ identifier: "BatchCreateNotesRequest" });

export interface BatchCreateOccurrencesResponse {
  /** The occurrences that were created. */
  occurrences?: ReadonlyArray<Occurrence>;
}

export const BatchCreateOccurrencesResponse: Schema.Schema<BatchCreateOccurrencesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    occurrences: Schema.optional(Schema.Array(Occurrence)),
  }).annotate({ identifier: "BatchCreateOccurrencesResponse" });

export interface BatchCreateNotesResponse {
  /** The notes that were created. */
  notes?: ReadonlyArray<Note>;
}

export const BatchCreateNotesResponse: Schema.Schema<BatchCreateNotesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notes: Schema.optional(Schema.Array(Note)),
  }).annotate({ identifier: "BatchCreateNotesResponse" });

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

export interface ListProjectsLocationsOccurrencesRequest {
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
  /** Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. */
  pageSize?: number;
  /** If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
  /** The filter expression. */
  filter?: string;
}

export const ListProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/occurrences" }),
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

export interface PatchProjectsLocationsOccurrencesRequest {
  /** The fields to update. */
  updateMask?: string;
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
  /** Request body */
  body?: Occurrence;
}

export const PatchProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Occurrence).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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

export interface DeleteProjectsLocationsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const DeleteProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
      path: "v1/{+resource}:setIamPolicy",
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

export interface GetVulnerabilitySummaryProjectsLocationsOccurrencesRequest {
  /** The filter expression. */
  filter?: string;
  /** If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
  /** Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
}

export const GetVulnerabilitySummaryProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/occurrences:vulnerabilitySummary",
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
      path: "v1/{+resource}:getIamPolicy",
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

export interface GetNotesProjectsLocationsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const GetNotesProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/notes" }),
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

export interface GetProjectsLocationsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const GetProjectsLocationsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
      path: "v1/{+parent}/occurrences:batchCreate",
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
      path: "v1/{+resource}:testIamPermissions",
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
    T.Http({ method: "POST", path: "v1/{+parent}/occurrences", hasBody: true }),
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
      path: "v1/{+resource}:getIamPolicy",
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
      path: "v1/{+resource}:testIamPermissions",
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

export interface GetProjectsLocationsNotesRequest {
  /** Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
}

export const GetProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
      path: "v1/{+parent}/notes:batchCreate",
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
    T.Http({ method: "POST", path: "v1/{+parent}/notes", hasBody: true }),
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

export interface DeleteProjectsLocationsNotesRequest {
  /** Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
}

export const DeleteProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface ListProjectsLocationsNotesRequest {
  /** The filter expression. */
  filter?: string;
  /** Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. */
  pageSize?: number;
  /** If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
  /** Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
}

export const ListProjectsLocationsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notes" }),
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
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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
      path: "v1/{+resource}:setIamPolicy",
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

export interface ListProjectsLocationsNotesOccurrencesRequest {
  /** Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
  /** Number of occurrences to return in the list. */
  pageSize?: number;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** The filter expression. */
  filter?: string;
}

export const ListProjectsLocationsNotesOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/occurrences" }),
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
    T.Http({ method: "POST", path: "v1/{+name}:exportSBOM", hasBody: true }),
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

/** Generates an SBOM for the given resource. */
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
    T.Http({ method: "POST", path: "v1/{+name}:exportSBOM", hasBody: true }),
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

/** Generates an SBOM for the given resource. */
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

export interface DeleteProjectsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const DeleteProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface ListProjectsOccurrencesRequest {
  /** The filter expression. */
  filter?: string;
  /** Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
  /** Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. */
  pageSize?: number;
  /** If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
}

export const ListProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/occurrences" }),
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

export interface PatchProjectsOccurrencesRequest {
  /** The fields to update. */
  updateMask?: string;
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
  /** Request body */
  body?: Occurrence;
}

export const PatchProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Occurrence).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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

export interface GetVulnerabilitySummaryProjectsOccurrencesRequest {
  /** The filter expression. */
  filter?: string;
  /** Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
  /** If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
}

export const GetVulnerabilitySummaryProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/{+parent}/occurrences:vulnerabilitySummary",
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
      path: "v1/{+resource}:setIamPolicy",
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
      path: "v1/{+resource}:getIamPolicy",
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

export interface GetNotesProjectsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const GetNotesProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/notes" }),
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
      path: "v1/{+resource}:testIamPermissions",
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

export interface GetProjectsOccurrencesRequest {
  /** Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. */
  name: string;
}

export const GetProjectsOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
      path: "v1/{+parent}/occurrences:batchCreate",
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
    T.Http({ method: "POST", path: "v1/{+parent}/occurrences", hasBody: true }),
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
      path: "v1/{+resource}:getIamPolicy",
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
    T.Http({ method: "GET", path: "v1/{+name}" }),
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
      path: "v1/{+parent}/notes:batchCreate",
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
      path: "v1/{+resource}:testIamPermissions",
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
    T.Http({ method: "POST", path: "v1/{+parent}/notes", hasBody: true }),
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

export interface ListProjectsNotesRequest {
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`. */
  parent: string;
  /** Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. */
  pageSize?: number;
  /** If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. */
  returnPartialSuccess?: boolean;
  /** The filter expression. */
  filter?: string;
}

export const ListProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/notes" }),
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
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
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

export interface DeleteProjectsNotesRequest {
  /** Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
}

export const DeleteProjectsNotesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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
      path: "v1/{+resource}:setIamPolicy",
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

export interface ListProjectsNotesOccurrencesRequest {
  /** Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. */
  name: string;
  /** Number of occurrences to return in the list. */
  pageSize?: number;
  /** Token to provide to skip to a particular spot in the list. */
  pageToken?: string;
  /** The filter expression. */
  filter?: string;
}

export const ListProjectsNotesOccurrencesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/occurrences" }),
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
