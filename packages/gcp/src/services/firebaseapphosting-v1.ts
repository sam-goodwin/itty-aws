// ==========================================================================
// Firebase App Hosting API (firebaseapphosting v1)
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
  name: "firebaseapphosting",
  version: "v1",
  rootUrl: "https://firebaseapphosting.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface UserMetadata {
  /** Output only. The 'name' field in a Git user's git.config. Required by Git. */
  displayName?: string;
  /** Output only. The 'email' field in a Git user's git.config, if available. */
  email?: string;
  /** Output only. The URI of an image file associated with the user's account in an external source control provider, if available. */
  imageUri?: string;
}

export const UserMetadata: Schema.Codec<UserMetadata> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "UserMetadata" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Redirect {
  /** Required. The URI of the redirect's intended destination. This URI will be prepended to the original request path. URI without a scheme are assumed to be HTTPS. */
  uri?: string;
  /** Optional. The status code to use in a redirect response. Must be a valid HTTP 3XX status code. Defaults to 302 if not present. */
  status?: string;
}

export const Redirect: Schema.Codec<Redirect> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
  }).annotate({ identifier: "Redirect" });

export interface ServingBehavior {
  /** Optional. Redirect behavior for a domain, if provided. */
  redirect?: Redirect;
}

export const ServingBehavior: Schema.Codec<ServingBehavior> =
  /*@__PURE__*/ Schema.Struct({
    redirect: Schema.optional(Redirect),
  }).annotate({ identifier: "ServingBehavior" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface DnsRecord {
  /** Output only. An enum that indicates the a required action for this record. Populated when the record is part of a required change in a `DnsUpdates` `discovered` or `desired` record set. */
  requiredAction?: "NONE" | "ADD" | "REMOVE" | (string & {});
  /** Output only. An enum that indicates which state(s) this DNS record applies to. Populated for all records with an `ADD` or `REMOVE` required action. */
  relevantState?: ReadonlyArray<
    | "CUSTOM_DOMAIN_STATE_UNSPECIFIED"
    | "HOST_STATE"
    | "OWNERSHIP_STATE"
    | "CERT_STATE"
    | (string & {})
  >;
  /** Output only. The record's type, which determines what data the record contains. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "A"
    | "CNAME"
    | "TXT"
    | "AAAA"
    | "CAA"
    | (string & {});
  /** Output only. The domain the record pertains to, e.g. `foo.bar.com.`. */
  domainName?: string;
  /** Output only. The data of the record. The meaning of the value depends on record type: - A and AAAA: IP addresses for the domain. - CNAME: Another domain to check for records. - TXT: Arbitrary text strings associated with the domain. App Hosting uses TXT records to determine which Firebase projects have permission to act on the domain's behalf. - CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`. */
  rdata?: string;
}

export const DnsRecord: Schema.Codec<DnsRecord> =
  /*@__PURE__*/ Schema.Struct({
    requiredAction: Schema.optional(Schema.String),
    relevantState: Schema.optional(Schema.Array(Schema.String)),
    type: Schema.optional(Schema.String),
    domainName: Schema.optional(Schema.String),
    rdata: Schema.optional(Schema.String),
  }).annotate({ identifier: "DnsRecord" });

export interface DnsRecordSet {
  /** Output only. The domain name the record set pertains to. */
  domainName?: string;
  /** Output only. An error App Hosting services encountered when querying your domain's DNS records. Note: App Hosting ignores `NXDOMAIN` errors, as those generally just mean that a domain name hasn't been set up yet. */
  checkError?: Status;
  /** Output only. Records on the domain. */
  records?: ReadonlyArray<DnsRecord>;
}

export const DnsRecordSet: Schema.Codec<DnsRecordSet> =
  /*@__PURE__*/ Schema.Struct({
    domainName: Schema.optional(Schema.String),
    checkError: Schema.optional(Status),
    records: Schema.optional(Schema.Array(DnsRecord)),
  }).annotate({ identifier: "DnsRecordSet" });

export interface DnsUpdates {
  /** Output only. The domain name the DNS updates pertain to. */
  domainName?: string;
  /** Output only. The set of DNS records App Hosting discovered when inspecting a domain. */
  discovered?: ReadonlyArray<DnsRecordSet>;
  /** Output only. The set of DNS records App Hosting needs in order to be able to serve secure content on the domain. */
  desired?: ReadonlyArray<DnsRecordSet>;
  /** Output only. The last time App Hosting checked your custom domain's DNS records. */
  checkTime?: string;
}

export const DnsUpdates: Schema.Codec<DnsUpdates> =
  /*@__PURE__*/ Schema.Struct({
    domainName: Schema.optional(Schema.String),
    discovered: Schema.optional(Schema.Array(DnsRecordSet)),
    desired: Schema.optional(Schema.Array(DnsRecordSet)),
    checkTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DnsUpdates" });

export interface CustomDomainStatus {
  /** Output only. Tracks SSL certificate status for the domain. */
  certState?:
    | "CERT_STATE_UNSPECIFIED"
    | "CERT_PREPARING"
    | "CERT_VALIDATING"
    | "CERT_PROPAGATING"
    | "CERT_ACTIVE"
    | "CERT_EXPIRING_SOON"
    | "CERT_EXPIRED"
    | (string & {});
  /** Output only. Tracks whether a custom domain is detected as appropriately directing traffic to App Hosting. */
  hostState?:
    | "HOST_STATE_UNSPECIFIED"
    | "HOST_UNHOSTED"
    | "HOST_UNREACHABLE"
    | "HOST_NON_FAH"
    | "HOST_CONFLICT"
    | "HOST_WRONG_SHARD"
    | "HOST_ACTIVE"
    | (string & {});
  /** Output only. Tracks whether the backend is permitted to serve content on the domain, based off the domain's DNS records. */
  ownershipState?:
    | "OWNERSHIP_STATE_UNSPECIFIED"
    | "OWNERSHIP_MISSING"
    | "OWNERSHIP_UNREACHABLE"
    | "OWNERSHIP_MISMATCH"
    | "OWNERSHIP_CONFLICT"
    | "OWNERSHIP_PENDING"
    | "OWNERSHIP_ACTIVE"
    | (string & {});
  /** Output only. Lists the records that must added or removed to a custom domain's DNS in order to finish setup and start serving content. Field is present during onboarding. Also present after onboarding if one or more of the above states is not *_ACTIVE, indicating the domain's DNS records are in a bad state. */
  requiredDnsUpdates?: ReadonlyArray<DnsUpdates>;
  /** Output only. A list of issues with domain configuration. Allows users to self-correct problems with DNS records. */
  issues?: ReadonlyArray<Status>;
}

export const CustomDomainStatus: Schema.Codec<CustomDomainStatus> =
  /*@__PURE__*/ Schema.Struct({
    certState: Schema.optional(Schema.String),
    hostState: Schema.optional(Schema.String),
    ownershipState: Schema.optional(Schema.String),
    requiredDnsUpdates: Schema.optional(Schema.Array(DnsUpdates)),
    issues: Schema.optional(Schema.Array(Status)),
  }).annotate({ identifier: "CustomDomainStatus" });

export interface Domain {
  /** Output only. Time at which the domain was created. */
  createTime?: string;
  /** Optional. The serving behavior of the domain. If specified, the domain will serve content other than its backend's live content. */
  serve?: ServingBehavior;
  /** Optional. Labels as key value pairs. */
  labels?: Record<string, string>;
  /** Optional. Annotations as key value pairs. */
  annotations?: Record<string, string>;
  /** Output only. The type of the domain. */
  type?: "TYPE_UNSPECIFIED" | "DEFAULT" | "CUSTOM" | (string & {});
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource. */
  etag?: string;
  /** Output only. A field that, if true, indicates that the build has an ongoing LRO. */
  reconciling?: boolean;
  /** Optional. Mutable human-readable name for the domain. 63 character limit. e.g. `prod domain`. */
  displayName?: string;
  /** Identifier. The resource name of the domain, e.g. `/projects/p/locations/l/backends/b/domains/foo.com` */
  name?: string;
  /** Output only. Time at which the domain was last updated. */
  updateTime?: string;
  /** Optional. Whether the domain is disabled. Defaults to false. */
  disabled?: boolean;
  /** Output only. Represents the state and configuration of a `CUSTOM` type domain. It is only present on Domains of that type. */
  customDomainStatus?: CustomDomainStatus;
  /** Output only. Time at which the domain was deleted. */
  deleteTime?: string;
}

export const Domain: Schema.Codec<Domain> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    serve: Schema.optional(ServingBehavior),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    disabled: Schema.optional(Schema.Boolean),
    customDomainStatus: Schema.optional(CustomDomainStatus),
    deleteTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Domain" });

export interface Firebaseapphosting_Error {
  /** Output only. A status and (human readable) error message for the build, if in a `FAILED` state. */
  error?: Status;
  /** Output only. The source of the error for the build, if in a `FAILED` state. */
  errorSource?:
    | "ERROR_SOURCE_UNSPECIFIED"
    | "CLOUD_BUILD"
    | "CLOUD_RUN"
    | (string & {});
  /** Output only. Resource link */
  cloudResource?: string;
}

export const Firebaseapphosting_Error: Schema.Codec<Firebaseapphosting_Error> =
  /*@__PURE__*/ Schema.Struct({
    error: Schema.optional(Status),
    errorSource: Schema.optional(Schema.String),
    cloudResource: Schema.optional(Schema.String),
  }).annotate({ identifier: "Firebaseapphosting_Error" });

export interface RunService {
  /** Optional. The name of the Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service), in the format: `projects/{project}/locations/{location}/services/{serviceId}` */
  service?: string;
}

export const RunService: Schema.Codec<RunService> =
  /*@__PURE__*/ Schema.Struct({
    service: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunService" });

export interface ManagedResource {
  /** A Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service), managed by App Hosting. */
  runService?: RunService;
}

export const ManagedResource: Schema.Codec<ManagedResource> =
  /*@__PURE__*/ Schema.Struct({
    runService: Schema.optional(RunService),
  }).annotate({ identifier: "ManagedResource" });

export interface OperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const OperationMetadata: Schema.Codec<OperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "OperationMetadata" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const Operation: Schema.Codec<Operation> =
  /*@__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    name: Schema.optional(Schema.String),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Operation" });

export interface Location {
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location: Schema.Codec<Location> =
  /*@__PURE__*/ Schema.Struct({
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Location" });

export interface CodebaseSource {
  /** Output only. The full SHA-1 hash of a Git commit, if available. */
  hash?: string;
  /** The branch in the codebase to build from, using the latest commit. */
  branch?: string;
  /** Output only. The human-friendly name to use for this Codebase when displaying a build. We use the first eight characters of the SHA-1 hash for GitHub.com. */
  displayName?: string;
  /** Output only. A URI linking to the codebase on an hosting provider's website. May not be valid if the commit has been rebased or force-pushed out of existence in the linked repository. */
  uri?: string;
  /** Output only. The author contained in the metadata of a version control change. */
  author?: UserMetadata;
  /** Output only. The time the change was made. */
  commitTime?: string;
  /** Output only. The message of a codebase change. */
  commitMessage?: string;
  /** The commit in the codebase to build from. */
  commit?: string;
  /** Output only. The resource name for the Developer Connect [`gitRepositoryLink`](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) used for this build, in the format: `projects/{project}/locations/{location}/connections/{connection}/gitRepositoryLinks/{repositoryLink}` */
  repository?: string;
}

export const CodebaseSource: Schema.Codec<CodebaseSource> =
  /*@__PURE__*/ Schema.Struct({
    hash: Schema.optional(Schema.String),
    branch: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    author: Schema.optional(UserMetadata),
    commitTime: Schema.optional(Schema.String),
    commitMessage: Schema.optional(Schema.String),
    commit: Schema.optional(Schema.String),
    repository: Schema.optional(Schema.String),
  }).annotate({ identifier: "CodebaseSource" });

export interface SourceUserMetadata {
  /** Output only. Deprecated: Not used. The user-chosen displayname. May be empty. */
  displayName?: string;
  /** Output only. Deprecated: Not used. The account email linked to the EUC that created the build. May be a service account or other robot account. */
  email?: string;
  /** Output only. Deprecated: Not used. The URI of a profile photo associated with the user who created the build. */
  imageUri?: string;
}

export const SourceUserMetadata: Schema.Codec<SourceUserMetadata> =
  /*@__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
  }).annotate({ identifier: "SourceUserMetadata" });

export interface ArchiveSource {
  /** Signed URL to an archive in a storage bucket. */
  externalSignedUri?: string;
  /** Optional. The directory relative to the root of the archive to use as the root for the deployed web app. Defaults to use the root of the repository if not provided. If deploying a [monorepo](https://firebase.google.com/docs/app-hosting/monorepos), this should be the directory that contains the `package.json` or `apphosting.yaml` file. */
  rootDirectory?: string;
  /** Optional. Deprecated: Not used. The author contained in the metadata of a version control change. */
  author?: SourceUserMetadata;
  /** URI to an archive in Cloud Storage. The object must be a zipped (.zip) or gzipped archive file (.tar.gz) containing source to deploy. */
  userStorageUri?: string;
  /** Optional. An optional message that describes the uploaded version of the source code. */
  description?: string;
}

export const ArchiveSource: Schema.Codec<ArchiveSource> =
  /*@__PURE__*/ Schema.Struct({
    externalSignedUri: Schema.optional(Schema.String),
    rootDirectory: Schema.optional(Schema.String),
    author: Schema.optional(SourceUserMetadata),
    userStorageUri: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ArchiveSource" });

export interface ContainerSource {
  /** Required. A URI representing a container for the backend to use. */
  image?: string;
}

export const ContainerSource: Schema.Codec<ContainerSource> =
  /*@__PURE__*/ Schema.Struct({
    image: Schema.optional(Schema.String),
  }).annotate({ identifier: "ContainerSource" });

export interface BuildSource {
  /** A codebase source. */
  codebase?: CodebaseSource;
  /** An archive source. */
  archive?: ArchiveSource;
  /** An Artifact Registry container image source. */
  container?: ContainerSource;
}

export const BuildSource: Schema.Codec<BuildSource> =
  /*@__PURE__*/ Schema.Struct({
    codebase: Schema.optional(CodebaseSource),
    archive: Schema.optional(ArchiveSource),
    container: Schema.optional(ContainerSource),
  }).annotate({ identifier: "BuildSource" });

export interface RunConfig {
  /** Optional. Number of Cloud Run instances to maintain at maximum for each revision. By default, each Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service) scales out to Cloud Run's default of a maximum of 100 instances. The maximum max_instances limit is based on your quota. See https://cloud.google.com/run/docs/configuring/max-instances#limits. */
  maxInstances?: number;
  /** Optional. Amount of memory allocated for each serving instance in MiB. By default, memory defaults to the Cloud Run's default where each instance is allocated 512 MiB of memory. Memory can be set to any integer value between 128 to 32768. Increasing memory limit may require increase in CPUs limits: - Over 4 GiB: at least 2 CPUs - Over 8 GiB: at least 4 CPUs - Over 16 GiB: at least 6 CPUs - Over 24 GiB: at least 8 CPUs */
  memoryMib?: number;
  /** Optional. Maximum number of requests that each Cloud Run instance can receive. By default, each instance can receive Cloud Run's default of up to 80 requests at the same time. Concurrency can be set to any integer value up to 1000. */
  concurrency?: number;
  /** Optional. Number of Cloud Run instances to maintain at minimum for each Cloud Run Service. By default, there are no minimum. Even if the service splits traffic across multiple revisions, the total number of instances for a service will be capped at this value. */
  minInstances?: number;
  /** Optional. Number of CPUs used for each serving instance. By default, cpu defaults to the Cloud Run's default of 1.0. CPU can be set to value 1, 2, 4, 6, or 8 CPUs, and for less than 1 CPU, a value from 0.08 to less than 1.00, in increments of 0.01. If you set a value of less than 1 CPU, you must set concurrency to 1, and CPU will only be allocated during request processing. Increasing CPUs limit may require increase in memory limits: - 4 CPUs: at least 2 GiB - 6 CPUs: at least 4 GiB - 8 CPUs: at least 4 GiB */
  cpu?: number;
}

export const RunConfig: Schema.Codec<RunConfig> =
  /*@__PURE__*/ Schema.Struct({
    maxInstances: Schema.optional(Schema.Number),
    memoryMib: Schema.optional(Schema.Number),
    concurrency: Schema.optional(Schema.Number),
    minInstances: Schema.optional(Schema.Number),
    cpu: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RunConfig" });

export interface EnvironmentVariable {
  /** A fully qualified secret version. The value of the secret will be accessed once while building the application and once per cold start of the container at runtime. The service account used by Cloud Build and by Cloud Run must each have the `secretmanager.versions.access` permission on the secret. */
  secret?: string;
  /** Output only. Specific detail about the source. For APPHOSTING_YAML origins, this will contain the exact filename, such as "apphosting.yaml" or "apphosting.staging.yaml". */
  originFileName?: string;
  /** A plaintext value. This value is encrypted at rest, but all project readers can view the value when reading your backend configuration. */
  value?: string;
  /** Required. The name of the environment variable. The environment variables reserved by [Cloud Run](https://docs.cloud.google.com/run/docs/configuring/services/environment-variables#reserved) should not be set. Additionally, variable names cannot start with "X_FIREBASE_". */
  variable?: string;
  /** Output only. The high-level origin category of the environment variable. */
  origin?:
    | "ORIGIN_UNSPECIFIED"
    | "BACKEND_OVERRIDES"
    | "BUILD_CONFIG"
    | "APPHOSTING_YAML"
    | "FIREBASE_SYSTEM"
    | (string & {});
  /** Optional. Where this variable should be made available. If left unspecified, will be available in both BUILD and BACKEND. */
  availability?: ReadonlyArray<
    "AVAILABILITY_UNSPECIFIED" | "BUILD" | "RUNTIME" | (string & {})
  >;
}

export const EnvironmentVariable: Schema.Codec<EnvironmentVariable> =
  /*@__PURE__*/ Schema.Struct({
    secret: Schema.optional(Schema.String),
    originFileName: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    variable: Schema.optional(Schema.String),
    origin: Schema.optional(Schema.String),
    availability: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "EnvironmentVariable" });

export interface Config {
  /** Optional. Additional configuration of the Cloud Run [`service`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#resource:-service). */
  runConfig?: RunConfig;
  /** Optional. Supplied environment variables for a specific build. Provided at Build creation time and immutable afterwards. This field is only applicable for Builds using a build image - (e.g., ContainerSource or ArchiveSource with locally_built_source) Attempts to set this for other build types will result in an error */
  env?: ReadonlyArray<EnvironmentVariable>;
  /** Output only. [OUTPUT_ONLY] This field represents all environment variables employed during both the build and runtime. This list reflects the result of merging variables from all sources (Backend.override_env, Build.Config.env, YAML, defaults, system). Each variable includes its `origin` */
  effectiveEnv?: ReadonlyArray<EnvironmentVariable>;
}

export const Config: Schema.Codec<Config> =
  /*@__PURE__*/ Schema.Struct({
    runConfig: Schema.optional(RunConfig),
    env: Schema.optional(Schema.Array(EnvironmentVariable)),
    effectiveEnv: Schema.optional(Schema.Array(EnvironmentVariable)),
  }).annotate({ identifier: "Config" });

export interface Build {
  /** Output only. The location of the [Cloud Build logs](https://cloud.google.com/build/docs/view-build-results) for the build process. */
  buildLogsUri?: string;
  /** Output only. Time at which the build was created. */
  createTime?: string;
  /** Output only. The Artifact Registry [container image](https://cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages) URI, used by the Cloud Run [`revision`](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services.revisions) for this build. */
  image?: string;
  /** Optional. Unstructured key value map that can be used to organize and categorize objects. */
  labels?: Record<string, string>;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource. */
  etag?: string;
  /** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
  annotations?: Record<string, string>;
  /** Required. Immutable. The source for the build. */
  source?: BuildSource;
  /** Output only. A list of all errors that occurred during an App Hosting build. */
  errors?: ReadonlyArray<Firebaseapphosting_Error>;
  /** Optional. Additional configuration of the service. */
  config?: Config;
  /** Output only. A field that, if true, indicates that the build has an ongoing LRO. */
  reconciling?: boolean;
  /** Output only. The state of the build. */
  state?:
    | "STATE_UNSPECIFIED"
    | "BUILDING"
    | "BUILT"
    | "DEPLOYING"
    | "READY"
    | "FAILED"
    | "SKIPPED"
    | "EXPIRED"
    | (string & {});
  /** Optional. Human-readable name. 63 character limit. */
  displayName?: string;
  /** Output only. The environment name of the backend when this build was created. */
  environment?: string;
  /** Identifier. The resource name of the build. Format: `projects/{project}/locations/{locationId}/backends/{backendId}/builds/{buildId}`. */
  name?: string;
  /** Output only. Time at which the build was last updated. */
  updateTime?: string;
  /** Output only. Time at which the build was deleted. */
  deleteTime?: string;
}

export const Build: Schema.Codec<Build> =
  /*@__PURE__*/ Schema.Struct({
    buildLogsUri: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    source: Schema.optional(BuildSource),
    errors: Schema.optional(Schema.Array(Firebaseapphosting_Error)),
    config: Schema.optional(Config),
    reconciling: Schema.optional(Schema.Boolean),
    state: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Build" });

export interface ListBuildsResponse {
  /** A token identifying the next page of results the server should return. */
  nextPageToken?: string;
  /** The list of builds. */
  builds?: ReadonlyArray<Build>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBuildsResponse: Schema.Codec<ListBuildsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    builds: Schema.optional(Schema.Array(Build)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBuildsResponse" });

export interface ListDomainsResponse {
  /** Output only. A token identifying the next page of results the server should return. */
  nextPageToken?: string;
  /** Output only. The list of domains. */
  domains?: ReadonlyArray<Domain>;
  /** Output only. Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListDomainsResponse: Schema.Codec<ListDomainsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    domains: Schema.optional(Schema.Array(Domain)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListDomainsResponse" });

export interface TrafficSplit {
  /** Required. The percentage of traffic to send to the build. Currently must be 100% or 0%. */
  percent?: number;
  /** Required. The build that traffic is being routed to. */
  build?: string;
}

export const TrafficSplit: Schema.Codec<TrafficSplit> =
  /*@__PURE__*/ Schema.Struct({
    percent: Schema.optional(Schema.Number),
    build: Schema.optional(Schema.String),
  }).annotate({ identifier: "TrafficSplit" });

export interface TrafficSet {
  /** Required. The list of traffic splits. */
  splits?: ReadonlyArray<TrafficSplit>;
}

export const TrafficSet: Schema.Codec<TrafficSet> =
  /*@__PURE__*/ Schema.Struct({
    splits: Schema.optional(Schema.Array(TrafficSplit)),
  }).annotate({ identifier: "TrafficSet" });

export interface Path {
  /** Optional. The pattern to match against. */
  pattern?: string;
  /** Optional. The type of pattern to match against. */
  type?: "PATTERN_TYPE_UNSPECIFIED" | "RE2" | "GLOB" | "PREFIX" | (string & {});
}

export const Path: Schema.Codec<Path> =
  /*@__PURE__*/ Schema.Struct({
    pattern: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Path" });

export interface RolloutPolicy {
  /** Output only. If `disabled` is set, the time at which the automatic rollouts were disabled. */
  disabledTime?: string;
  /** Optional. A list of file paths patterns that trigger a build and rollout if at least one of the changed files in the commit are present in this list. This field is optional; the rollout policy will default to triggering on all paths if both ignored_paths and required_paths are not populated. Limited to 100 paths. Example: ``` required_paths: { pattern: "foo/bar/*", type: "GLOB" } ``` */
  requiredPaths?: ReadonlyArray<Path>;
  /** If set, specifies a branch that triggers a new build to be started with this policy. Otherwise, no automatic rollouts will happen. */
  codebaseBranch?: string;
  /** Optional. A list of file paths patterns to exclude from triggering a rollout. Patterns in this list take precedence over required_paths. **Note**: All paths must be in the ignored_paths in order for the rollout to be skipped. Limited to 100 paths. Example: ``` ignored_paths: { pattern: "foo/bar/excluded/*", type: "GLOB" } ``` */
  ignoredPaths?: ReadonlyArray<Path>;
  /** Optional. A flag that, if true, prevents automatic rollouts from being created via this RolloutPolicy. */
  disabled?: boolean;
}

export const RolloutPolicy: Schema.Codec<RolloutPolicy> =
  /*@__PURE__*/ Schema.Struct({
    disabledTime: Schema.optional(Schema.String),
    requiredPaths: Schema.optional(Schema.Array(Path)),
    codebaseBranch: Schema.optional(Schema.String),
    ignoredPaths: Schema.optional(Schema.Array(Path)),
    disabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "RolloutPolicy" });

export interface Traffic {
  /** Output only. Current state of traffic allocation for the backend. When setting `target`, this field may differ for some time until the desired state is reached. */
  current?: TrafficSet;
  /** Output only. A field that, if true, indicates that the system is working to make the backend's `current` match the requested `target` list. */
  reconciling?: boolean;
  /** Set to manually control the desired traffic for the backend. This will cause `current` to eventually match this value. The percentages must add up to 100%. */
  target?: TrafficSet;
  /** Output only. Time at which the backend was created. */
  createTime?: string;
  /** Optional. Unstructured key value map that can be used to organize and categorize objects. */
  labels?: Record<string, string>;
  /** A rollout policy specifies how new builds and automatic deployments are created. */
  rolloutPolicy?: RolloutPolicy;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Identifier. The resource name of the backend's traffic. Format: `projects/{project}/locations/{locationId}/backends/{backendId}/traffic`. */
  name?: string;
  /** Output only. Time at which the backend was last updated. */
  updateTime?: string;
  /** Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource. */
  etag?: string;
  /** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
  annotations?: Record<string, string>;
}

export const Traffic: Schema.Codec<Traffic> =
  /*@__PURE__*/ Schema.Struct({
    current: Schema.optional(TrafficSet),
    reconciling: Schema.optional(Schema.Boolean),
    target: Schema.optional(TrafficSet),
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    rolloutPolicy: Schema.optional(RolloutPolicy),
    uid: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Traffic" });

export interface Codebase {
  /** Required. The resource name for the Developer Connect [`gitRepositoryLink`](https://cloud.google.com/developer-connect/docs/api/reference/rest/v1/projects.locations.connections.gitRepositoryLinks) connected to this backend, in the format: `projects/{project}/locations/{location}/connections/{connection}/gitRepositoryLinks/{repositoryLink}` The connection for the `gitRepositoryLink` must made be using the Firebase App Hosting GitHub App via the Firebase Console. */
  repository?: string;
  /** Optional. If `repository` is provided, the directory relative to the root of the repository to use as the root for the deployed web app. Defaults to use the root of the repository if not provided. If deploying a [monorepo](https://firebase.google.com/docs/app-hosting/monorepos), this should be the directory that contains the `package.json` or `apphosting.yaml` file. */
  rootDirectory?: string;
}

export const Codebase: Schema.Codec<Codebase> =
  /*@__PURE__*/ Schema.Struct({
    repository: Schema.optional(Schema.String),
    rootDirectory: Schema.optional(Schema.String),
  }).annotate({ identifier: "Codebase" });

export interface Backend {
  /** Output only. A field that, if true, indicates that the system is working to make adjustments to the backend during a LRO. */
  reconciling?: boolean;
  /** Optional. Human-readable name. 63 character limit. */
  displayName?: string;
  /** Optional. If specified, the connection to an external source repository to watch for event-driven updates to the backend. */
  codebase?: Codebase;
  /** Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the backend. */
  appId?: string;
  /** Identifier. The resource name of the backend. Format: `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  name?: string;
  /** Output only. Time at which the backend was last updated. */
  updateTime?: string;
  /** Output only. Time at which the backend was deleted. */
  deleteTime?: string;
  /** Optional. The environment name of the backend, used to load environment variables from environment specific configuration. */
  environment?: string;
  /** Output only. Time at which the backend was created. */
  createTime?: string;
  /** Output only. The primary URI to communicate with the backend. */
  uri?: string;
  /** Optional. A field that, if true, indicates that incoming request logs are disabled for this backend. Incoming request logs are enabled by default. */
  requestLogsDisabled?: boolean;
  /** Optional. Unstructured key value map that can be used to organize and categorize objects. */
  labels?: Record<string, string>;
  /** Required. Immutable. Specifies how App Hosting will serve the content for this backend. It will either be contained to a single region (REGIONAL_STRICT) or allowed to use App Hosting's global-replicated serving infrastructure (GLOBAL_ACCESS). */
  servingLocality?:
    | "SERVING_LOCALITY_UNSPECIFIED"
    | "REGIONAL_STRICT"
    | "GLOBAL_ACCESS"
    | (string & {});
  /** Output only. A list of the resources managed by this backend. */
  managedResources?: ReadonlyArray<ManagedResource>;
  /** Optional. Deprecated: Use `environment` instead. */
  mode?: string;
  /** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
  annotations?: Record<string, string>;
  /** Required. The name of the service account used for Cloud Build and Cloud Run. Should have the role roles/firebaseapphosting.computeRunner or equivalent permissions. */
  serviceAccount?: string;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource. */
  etag?: string;
}

export const Backend: Schema.Codec<Backend> =
  /*@__PURE__*/ Schema.Struct({
    reconciling: Schema.optional(Schema.Boolean),
    displayName: Schema.optional(Schema.String),
    codebase: Schema.optional(Codebase),
    appId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    environment: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    requestLogsDisabled: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    servingLocality: Schema.optional(Schema.String),
    managedResources: Schema.optional(Schema.Array(ManagedResource)),
    mode: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    serviceAccount: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).annotate({ identifier: "Backend" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Codec<CancelOperationRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface ListBackendsResponse {
  /** A token identifying the next page of results the server should return. */
  nextPageToken?: string;
  /** The list of backends */
  backends?: ReadonlyArray<Backend>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListBackendsResponse: Schema.Codec<ListBackendsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    backends: Schema.optional(Schema.Array(Backend)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListBackendsResponse" });

export interface ListLocationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
}

export const ListLocationsResponse: Schema.Codec<ListLocationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Location)),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface LiveMigrationStep {
  /** Output only. The state of the live migration step, indicates whether you should work to complete the step now, in the future, or have already completed it. */
  stepState?:
    | "STEP_STATE_UNSPECIFIED"
    | "PREPARING"
    | "PENDING"
    | "INCOMPLETE"
    | "PROCESSING"
    | "COMPLETE"
    | (string & {});
  /** Output only. Issues that prevent the current step from completing. */
  issues?: ReadonlyArray<Status>;
  /** Output only. One or more states from the `CustomDomainStatus` of the migrating domain that this step is attempting to make ACTIVE. For example, if the step is attempting to mint an SSL certificate, this field will include `CERT_STATE`. */
  relevantDomainStates?: ReadonlyArray<
    | "CUSTOM_DOMAIN_STATE_UNSPECIFIED"
    | "HOST_STATE"
    | "OWNERSHIP_STATE"
    | "CERT_STATE"
    | (string & {})
  >;
  /** Output only. DNS updates to facilitate your domain's zero-downtime migration to App Hosting. */
  dnsUpdates?: ReadonlyArray<DnsUpdates>;
}

export const LiveMigrationStep: Schema.Codec<LiveMigrationStep> =
  /*@__PURE__*/ Schema.Struct({
    stepState: Schema.optional(Schema.String),
    issues: Schema.optional(Schema.Array(Status)),
    relevantDomainStates: Schema.optional(Schema.Array(Schema.String)),
    dnsUpdates: Schema.optional(Schema.Array(DnsUpdates)),
  }).annotate({ identifier: "LiveMigrationStep" });

export interface Rollout {
  /** Output only. Time at which the rollout was created. */
  createTime?: string;
  /** Optional. Unstructured key value map that can be used to organize and categorize objects. */
  labels?: Record<string, string>;
  /** Output only. A status and (human readable) error message for the rollout, if in a `FAILED` state. */
  error?: Status;
  /** Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
  annotations?: Record<string, string>;
  /** Output only. System-assigned, unique identifier. */
  uid?: string;
  /** Output only. Server-computed checksum based on other values; may be sent on update or delete to ensure operation is done on expected resource. */
  etag?: string;
  /** Output only. A field that, if true, indicates that the Rollout currently has an LRO. */
  reconciling?: boolean;
  /** Required. Immutable. The name of a build that already exists. It doesn't have to be built; a rollout will wait for a build to be ready before updating traffic. */
  build?: string;
  /** Optional. Human-readable name. 63 character limit. */
  displayName?: string;
  /** Output only. The state of the rollout. */
  state?:
    | "STATE_UNSPECIFIED"
    | "QUEUED"
    | "PENDING_BUILD"
    | "PROGRESSING"
    | "PAUSED"
    | "SUCCEEDED"
    | "FAILED"
    | "CANCELLED"
    | "SKIPPED"
    | (string & {});
  /** Identifier. The resource name of the rollout. Format: `projects/{project}/locations/{locationId}/backends/{backendId}/rollouts/{rolloutId}`. */
  name?: string;
  /** Output only. Time at which the rollout was last updated. */
  updateTime?: string;
  /** Output only. Time at which the rollout was deleted. */
  deleteTime?: string;
}

export const Rollout: Schema.Codec<Rollout> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    error: Schema.optional(Status),
    annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    uid: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    reconciling: Schema.optional(Schema.Boolean),
    build: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Rollout" });

export interface ListRolloutsResponse {
  /** The list of rollouts. */
  rollouts?: ReadonlyArray<Rollout>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token identifying the next page of results the server should return. */
  nextPageToken?: string;
}

export const ListRolloutsResponse: Schema.Codec<ListRolloutsResponse> =
  /*@__PURE__*/ Schema.Struct({
    rollouts: Schema.optional(Schema.Array(Rollout)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListRolloutsResponse" });

export interface CustomDomainOperationMetadata {
  /** Output only. The custom domain's `CertState`, which must be `CERT_ACTIVE` for the create operations to complete. */
  certState?:
    | "CERT_STATE_UNSPECIFIED"
    | "CERT_PREPARING"
    | "CERT_VALIDATING"
    | "CERT_PROPAGATING"
    | "CERT_ACTIVE"
    | "CERT_EXPIRING_SOON"
    | "CERT_EXPIRED"
    | (string & {});
  /** Output only. A list of steps that the user must complete to migrate their domain to App Hosting without downtime. */
  liveMigrationSteps?: ReadonlyArray<LiveMigrationStep>;
  /** Output only. The custom domain's `HostState`, which must be `HOST_ACTIVE` for Create operations of the domain name this `CustomDomain` refers toto complete. */
  hostState?:
    | "HOST_STATE_UNSPECIFIED"
    | "HOST_UNHOSTED"
    | "HOST_UNREACHABLE"
    | "HOST_NON_FAH"
    | "HOST_CONFLICT"
    | "HOST_WRONG_SHARD"
    | "HOST_ACTIVE"
    | (string & {});
  /** Output only. The custom domain's `OwnershipState`, which must be `OWNERSHIP_ACTIVE` for the create operations to complete. */
  ownershipState?:
    | "OWNERSHIP_STATE_UNSPECIFIED"
    | "OWNERSHIP_MISSING"
    | "OWNERSHIP_UNREACHABLE"
    | "OWNERSHIP_MISMATCH"
    | "OWNERSHIP_CONFLICT"
    | "OWNERSHIP_PENDING"
    | "OWNERSHIP_ACTIVE"
    | (string & {});
  /** Output only. A list of issues that are currently preventing the operation from completing. These are generally DNS-related issues encountered when querying a domain's records or attempting to mint an SSL certificate. */
  issues?: ReadonlyArray<Status>;
  /** Output only. A set of DNS record updates to perform, to allow App Hosting to serve secure content on the domain. */
  quickSetupUpdates?: ReadonlyArray<DnsUpdates>;
}

export const CustomDomainOperationMetadata: Schema.Codec<CustomDomainOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    certState: Schema.optional(Schema.String),
    liveMigrationSteps: Schema.optional(Schema.Array(LiveMigrationStep)),
    hostState: Schema.optional(Schema.String),
    ownershipState: Schema.optional(Schema.String),
    issues: Schema.optional(Schema.Array(Status)),
    quickSetupUpdates: Schema.optional(Schema.Array(DnsUpdates)),
  }).annotate({ identifier: "CustomDomainOperationMetadata" });

export interface DomainOperationMetadata {
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Additional metadata for operations on custom domains. */
  customDomainOperationMetadata?: CustomDomainOperationMetadata;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const DomainOperationMetadata: Schema.Codec<DomainOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    createTime: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    customDomainOperationMetadata: Schema.optional(
      CustomDomainOperationMetadata,
    ),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "DomainOperationMetadata" });

export interface ListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListOperationsResponse: Schema.Codec<ListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListOperationsResponse" });

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

export interface ListProjectsLocationsRequest {
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsRequest {
  /** Resource name for the location. */
  name: string;
}

export const GetProjectsLocationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse = /*@__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
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

export interface ListProjectsLocationsOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The standard list page token. */
  pageToken?: string;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
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

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
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

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
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

export interface ListProjectsLocationsBackendsRequest {
  /** Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet. */
  showDeleted?: boolean;
  /** Optional. The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Required. A parent name of the form `projects/{project}/locations/{locationId}`. */
  parent: string;
  /** Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix. */
  orderBy?: string;
}

export const ListProjectsLocationsBackendsRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/backends" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsBackendsRequest>;

export type ListProjectsLocationsBackendsResponse = ListBackendsResponse;
export const ListProjectsLocationsBackendsResponse =
  /*@__PURE__*/ ListBackendsResponse;

export type ListProjectsLocationsBackendsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists backends in a given project and location. */
export const listProjectsLocationsBackends: API.PaginatedOperationMethod<
  ListProjectsLocationsBackendsRequest,
  ListProjectsLocationsBackendsResponse,
  ListProjectsLocationsBackendsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackendsRequest,
  output: ListProjectsLocationsBackendsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBackendsRequest {
  /** Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, any resources for this backend will also be deleted. Otherwise, any children resources will block deletion. */
  force?: boolean;
  /** Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error. */
  etag?: string;
  /** Optional. Indicates that the request should be validated, without persisting the request or updating any resources. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsBackendsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsBackendsRequest>;

export type DeleteProjectsLocationsBackendsResponse = Operation;
export const DeleteProjectsLocationsBackendsResponse = /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsBackendsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single backend. */
export const deleteProjectsLocationsBackends: API.OperationMethod<
  DeleteProjectsLocationsBackendsRequest,
  DeleteProjectsLocationsBackendsResponse,
  DeleteProjectsLocationsBackendsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackendsRequest,
  output: DeleteProjectsLocationsBackendsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBackendsRequest {
  /** Required. Id of the backend. Also used as the service ID for Cloud Run, and as part of the default domain name. */
  backendId?: string;
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. */
  validateOnly?: boolean;
  /** Required. A parent name of the form `projects/{project}/locations/{locationId}`. */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Backend;
}

export const CreateProjectsLocationsBackendsRequest =
  /*@__PURE__*/ Schema.Struct({
    backendId: Schema.optional(Schema.String).pipe(T.HttpQuery("backendId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Backend).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/backends", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsBackendsRequest>;

export type CreateProjectsLocationsBackendsResponse = Operation;
export const CreateProjectsLocationsBackendsResponse = /*@__PURE__*/ Operation;

export type CreateProjectsLocationsBackendsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new backend in a given project and location. */
export const createProjectsLocationsBackends: API.OperationMethod<
  CreateProjectsLocationsBackendsRequest,
  CreateProjectsLocationsBackendsResponse,
  CreateProjectsLocationsBackendsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackendsRequest,
  output: CreateProjectsLocationsBackendsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackendsRequest {
  /** Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  name: string;
}

export const GetProjectsLocationsBackendsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsBackendsRequest>;

export type GetProjectsLocationsBackendsResponse = Backend;
export const GetProjectsLocationsBackendsResponse = /*@__PURE__*/ Backend;

export type GetProjectsLocationsBackendsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a backend. */
export const getProjectsLocationsBackends: API.OperationMethod<
  GetProjectsLocationsBackendsRequest,
  GetProjectsLocationsBackendsResponse,
  GetProjectsLocationsBackendsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackendsRequest,
  output: GetProjectsLocationsBackendsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsBackendsRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the backend resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. Indicates that the request should be validated, without persisting the request or updating any resources. */
  validateOnly?: boolean;
  /** Identifier. The resource name of the backend. Format: `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, and the backend is not found, a new backend will be created. */
  allowMissing?: boolean;
  /** Request body */
  body?: Backend;
}

export const PatchProjectsLocationsBackendsRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(Backend).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsBackendsRequest>;

export type PatchProjectsLocationsBackendsResponse = Operation;
export const PatchProjectsLocationsBackendsResponse = /*@__PURE__*/ Operation;

export type PatchProjectsLocationsBackendsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the information for a single backend. */
export const patchProjectsLocationsBackends: API.OperationMethod<
  PatchProjectsLocationsBackendsRequest,
  PatchProjectsLocationsBackendsResponse,
  PatchProjectsLocationsBackendsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackendsRequest,
  output: PatchProjectsLocationsBackendsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackendsRolloutsRequest {
  /** Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/rollouts/{rolloutId}`. */
  name: string;
}

export const GetProjectsLocationsBackendsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsBackendsRolloutsRequest>;

export type GetProjectsLocationsBackendsRolloutsResponse = Rollout;
export const GetProjectsLocationsBackendsRolloutsResponse =
  /*@__PURE__*/ Rollout;

export type GetProjectsLocationsBackendsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a rollout. */
export const getProjectsLocationsBackendsRollouts: API.OperationMethod<
  GetProjectsLocationsBackendsRolloutsRequest,
  GetProjectsLocationsBackendsRolloutsResponse,
  GetProjectsLocationsBackendsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackendsRolloutsRequest,
  output: GetProjectsLocationsBackendsRolloutsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsLocationsBackendsRolloutsRequest {
  /** Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  parent: string;
  /** Optional. Desired ID of the rollout being created. */
  rolloutId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. */
  validateOnly?: boolean;
  /** Request body */
  body?: Rollout;
}

export const CreateProjectsLocationsBackendsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    rolloutId: Schema.optional(Schema.String).pipe(T.HttpQuery("rolloutId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Rollout).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/rollouts", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsBackendsRolloutsRequest>;

export type CreateProjectsLocationsBackendsRolloutsResponse = Operation;
export const CreateProjectsLocationsBackendsRolloutsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsBackendsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new rollout for a backend. */
export const createProjectsLocationsBackendsRollouts: API.OperationMethod<
  CreateProjectsLocationsBackendsRolloutsRequest,
  CreateProjectsLocationsBackendsRolloutsResponse,
  CreateProjectsLocationsBackendsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackendsRolloutsRequest,
  output: CreateProjectsLocationsBackendsRolloutsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsBackendsRolloutsRequest {
  /** Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix. */
  orderBy?: string;
  /** Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet. */
  showDeleted?: boolean;
  /** Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  parent: string;
  /** Optional. The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsBackendsRolloutsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/rollouts" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsBackendsRolloutsRequest>;

export type ListProjectsLocationsBackendsRolloutsResponse =
  ListRolloutsResponse;
export const ListProjectsLocationsBackendsRolloutsResponse =
  /*@__PURE__*/ ListRolloutsResponse;

export type ListProjectsLocationsBackendsRolloutsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists rollouts for a backend. */
export const listProjectsLocationsBackendsRollouts: API.PaginatedOperationMethod<
  ListProjectsLocationsBackendsRolloutsRequest,
  ListProjectsLocationsBackendsRolloutsResponse,
  ListProjectsLocationsBackendsRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackendsRolloutsRequest,
  output: ListProjectsLocationsBackendsRolloutsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsLocationsBackendsDomainsRequest {
  /** Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix. */
  orderBy?: string;
  /** Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet. */
  showDeleted?: boolean;
  /** Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  parent: string;
  /** Optional. The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsBackendsDomainsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/domains" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsBackendsDomainsRequest>;

export type ListProjectsLocationsBackendsDomainsResponse = ListDomainsResponse;
export const ListProjectsLocationsBackendsDomainsResponse =
  /*@__PURE__*/ ListDomainsResponse;

export type ListProjectsLocationsBackendsDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists domains of a backend. */
export const listProjectsLocationsBackendsDomains: API.PaginatedOperationMethod<
  ListProjectsLocationsBackendsDomainsRequest,
  ListProjectsLocationsBackendsDomainsResponse,
  ListProjectsLocationsBackendsDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackendsDomainsRequest,
  output: ListProjectsLocationsBackendsDomainsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBackendsDomainsRequest {
  /** Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/domains/{domainId}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error. */
  etag?: string;
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsBackendsDomainsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsBackendsDomainsRequest>;

export type DeleteProjectsLocationsBackendsDomainsResponse = Operation;
export const DeleteProjectsLocationsBackendsDomainsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsBackendsDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single domain. */
export const deleteProjectsLocationsBackendsDomains: API.OperationMethod<
  DeleteProjectsLocationsBackendsDomainsRequest,
  DeleteProjectsLocationsBackendsDomainsResponse,
  DeleteProjectsLocationsBackendsDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackendsDomainsRequest,
  output: DeleteProjectsLocationsBackendsDomainsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBackendsDomainsRequest {
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. */
  validateOnly?: boolean;
  /** Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  parent: string;
  /** Required. Id of the domain to create. Must be a valid domain name. */
  domainId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Domain;
}

export const CreateProjectsLocationsBackendsDomainsRequest =
  /*@__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    domainId: Schema.optional(Schema.String).pipe(T.HttpQuery("domainId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Domain).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/domains", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsBackendsDomainsRequest>;

export type CreateProjectsLocationsBackendsDomainsResponse = Operation;
export const CreateProjectsLocationsBackendsDomainsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsBackendsDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Links a new domain to a backend. */
export const createProjectsLocationsBackendsDomains: API.OperationMethod<
  CreateProjectsLocationsBackendsDomainsRequest,
  CreateProjectsLocationsBackendsDomainsResponse,
  CreateProjectsLocationsBackendsDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackendsDomainsRequest,
  output: CreateProjectsLocationsBackendsDomainsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackendsDomainsRequest {
  /** Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/domains/{domainId}`. */
  name: string;
}

export const GetProjectsLocationsBackendsDomainsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsBackendsDomainsRequest>;

export type GetProjectsLocationsBackendsDomainsResponse = Domain;
export const GetProjectsLocationsBackendsDomainsResponse = /*@__PURE__*/ Domain;

export type GetProjectsLocationsBackendsDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a domain. */
export const getProjectsLocationsBackendsDomains: API.OperationMethod<
  GetProjectsLocationsBackendsDomainsRequest,
  GetProjectsLocationsBackendsDomainsResponse,
  GetProjectsLocationsBackendsDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackendsDomainsRequest,
  output: GetProjectsLocationsBackendsDomainsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsBackendsDomainsRequest {
  /** Optional. If set to true, and the domain is not found, a new domain will be created. */
  allowMissing?: boolean;
  /** Identifier. The resource name of the domain, e.g. `/projects/p/locations/l/backends/b/domains/foo.com` */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or modifying any resources. */
  validateOnly?: boolean;
  /** Optional. Field mask is used to specify the fields to be overwritten in the Domain resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Request body */
  body?: Domain;
}

export const PatchProjectsLocationsBackendsDomainsRequest =
  /*@__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Domain).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsBackendsDomainsRequest>;

export type PatchProjectsLocationsBackendsDomainsResponse = Operation;
export const PatchProjectsLocationsBackendsDomainsResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsBackendsDomainsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the information for a single domain. */
export const patchProjectsLocationsBackendsDomains: API.OperationMethod<
  PatchProjectsLocationsBackendsDomainsRequest,
  PatchProjectsLocationsBackendsDomainsResponse,
  PatchProjectsLocationsBackendsDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackendsDomainsRequest,
  output: PatchProjectsLocationsBackendsDomainsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackendsTrafficRequest {
  /** Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/traffic`. */
  name: string;
}

export const GetProjectsLocationsBackendsTrafficRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsBackendsTrafficRequest>;

export type GetProjectsLocationsBackendsTrafficResponse = Traffic;
export const GetProjectsLocationsBackendsTrafficResponse =
  /*@__PURE__*/ Traffic;

export type GetProjectsLocationsBackendsTrafficError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a backend's traffic. */
export const getProjectsLocationsBackendsTraffic: API.OperationMethod<
  GetProjectsLocationsBackendsTrafficRequest,
  GetProjectsLocationsBackendsTrafficResponse,
  GetProjectsLocationsBackendsTrafficError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackendsTrafficRequest,
  output: GetProjectsLocationsBackendsTrafficResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsBackendsTrafficRequest {
  /** Optional. Field mask is used to specify the fields to be overwritten in the traffic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. */
  updateMask?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Identifier. The resource name of the backend's traffic. Format: `projects/{project}/locations/{locationId}/backends/{backendId}/traffic`. */
  name: string;
  /** Optional. Indicates that the request should be validated, without persisting the request or updating any resources. */
  validateOnly?: boolean;
  /** Request body */
  body?: Traffic;
}

export const PatchProjectsLocationsBackendsTrafficRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Traffic).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsLocationsBackendsTrafficRequest>;

export type PatchProjectsLocationsBackendsTrafficResponse = Operation;
export const PatchProjectsLocationsBackendsTrafficResponse =
  /*@__PURE__*/ Operation;

export type PatchProjectsLocationsBackendsTrafficError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a backend's traffic. */
export const patchProjectsLocationsBackendsTraffic: API.OperationMethod<
  PatchProjectsLocationsBackendsTrafficRequest,
  PatchProjectsLocationsBackendsTrafficResponse,
  PatchProjectsLocationsBackendsTrafficError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsBackendsTrafficRequest,
  output: PatchProjectsLocationsBackendsTrafficResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsBackendsBuildsRequest {
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. */
  validateOnly?: boolean;
  /** Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  parent: string;
  /** Required. Desired ID of the build being created. */
  buildId?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Build;
}

export const CreateProjectsLocationsBackendsBuildsRequest =
  /*@__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    buildId: Schema.optional(Schema.String).pipe(T.HttpQuery("buildId")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Build).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/builds", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsLocationsBackendsBuildsRequest>;

export type CreateProjectsLocationsBackendsBuildsResponse = Operation;
export const CreateProjectsLocationsBackendsBuildsResponse =
  /*@__PURE__*/ Operation;

export type CreateProjectsLocationsBackendsBuildsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new build for a backend. */
export const createProjectsLocationsBackendsBuilds: API.OperationMethod<
  CreateProjectsLocationsBackendsBuildsRequest,
  CreateProjectsLocationsBackendsBuildsResponse,
  CreateProjectsLocationsBackendsBuildsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsBackendsBuildsRequest,
  output: CreateProjectsLocationsBackendsBuildsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackendsBuildsRequest {
  /** Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/builds/{buildId}`. */
  name: string;
}

export const GetProjectsLocationsBackendsBuildsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsLocationsBackendsBuildsRequest>;

export type GetProjectsLocationsBackendsBuildsResponse = Build;
export const GetProjectsLocationsBackendsBuildsResponse = /*@__PURE__*/ Build;

export type GetProjectsLocationsBackendsBuildsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a build. */
export const getProjectsLocationsBackendsBuilds: API.OperationMethod<
  GetProjectsLocationsBackendsBuildsRequest,
  GetProjectsLocationsBackendsBuildsResponse,
  GetProjectsLocationsBackendsBuildsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackendsBuildsRequest,
  output: GetProjectsLocationsBackendsBuildsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBackendsBuildsRequest {
  /** Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet. */
  showDeleted?: boolean;
  /** Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** Required. The parent backend in the form `projects/{project}/locations/{locationId}/backends/{backendId}`. */
  parent: string;
  /** Optional. The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix. */
  orderBy?: string;
}

export const ListProjectsLocationsBackendsBuildsRequest =
  /*@__PURE__*/ Schema.Struct({
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/builds" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsLocationsBackendsBuildsRequest>;

export type ListProjectsLocationsBackendsBuildsResponse = ListBuildsResponse;
export const ListProjectsLocationsBackendsBuildsResponse =
  /*@__PURE__*/ ListBuildsResponse;

export type ListProjectsLocationsBackendsBuildsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists builds in a given project, location, and backend. */
export const listProjectsLocationsBackendsBuilds: API.PaginatedOperationMethod<
  ListProjectsLocationsBackendsBuildsRequest,
  ListProjectsLocationsBackendsBuildsResponse,
  ListProjectsLocationsBackendsBuildsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsBackendsBuildsRequest,
  output: ListProjectsLocationsBackendsBuildsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsBackendsBuildsRequest {
  /** Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources. */
  validateOnly?: boolean;
  /** Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/builds/{buildId}`. */
  name: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error. */
  etag?: string;
}

export const DeleteProjectsLocationsBackendsBuildsRequest =
  /*@__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsLocationsBackendsBuildsRequest>;

export type DeleteProjectsLocationsBackendsBuildsResponse = Operation;
export const DeleteProjectsLocationsBackendsBuildsResponse =
  /*@__PURE__*/ Operation;

export type DeleteProjectsLocationsBackendsBuildsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a single build. */
export const deleteProjectsLocationsBackendsBuilds: API.OperationMethod<
  DeleteProjectsLocationsBackendsBuildsRequest,
  DeleteProjectsLocationsBackendsBuildsResponse,
  DeleteProjectsLocationsBackendsBuildsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackendsBuildsRequest,
  output: DeleteProjectsLocationsBackendsBuildsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
