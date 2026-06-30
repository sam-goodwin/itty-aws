// ==========================================================================
// OS Config API (osconfig v1beta)
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
  name: "osconfig",
  version: "v1beta",
  rootUrl: "https://osconfig.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ResumePatchDeploymentRequest {}

export const ResumePatchDeploymentRequest: Schema.Codec<ResumePatchDeploymentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResumePatchDeploymentRequest",
  });

export interface WeeklySchedule {
  /** Required. Day of the week. */
  dayOfWeek?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
}

export const WeeklySchedule: Schema.Codec<WeeklySchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dayOfWeek: Schema.optional(Schema.String),
  }).annotate({ identifier: "WeeklySchedule" });

export interface SoftwareRecipeStepInstallDpkg {
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
}

export const SoftwareRecipeStepInstallDpkg: Schema.Codec<SoftwareRecipeStepInstallDpkg> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepInstallDpkg" });

export interface GooRepository {
  /** Required. The name of the repository. */
  name?: string;
  /** Required. The url of the repository. */
  url?: string;
}

export const GooRepository: Schema.Codec<GooRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooRepository" });

export interface SoftwareRecipeArtifactRemote {
  /** URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}. */
  uri?: string;
  /** Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps. */
  checksum?: string;
}

export const SoftwareRecipeArtifactRemote: Schema.Codec<SoftwareRecipeArtifactRemote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    checksum: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeArtifactRemote" });

export interface SoftwareRecipeArtifactGcs {
  /** Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`. */
  bucket?: string;
  /** Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`. */
  generation?: string;
  /** Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`. */
  object?: string;
}

export const SoftwareRecipeArtifactGcs: Schema.Codec<SoftwareRecipeArtifactGcs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeArtifactGcs" });

export interface SoftwareRecipeArtifact {
  /** Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified. */
  allowInsecure?: boolean;
  /** A generic remote artifact. */
  remote?: SoftwareRecipeArtifactRemote;
  /** A Google Cloud Storage artifact. */
  gcs?: SoftwareRecipeArtifactGcs;
  /** Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id. */
  id?: string;
}

export const SoftwareRecipeArtifact: Schema.Codec<SoftwareRecipeArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowInsecure: Schema.optional(Schema.Boolean),
    remote: Schema.optional(SoftwareRecipeArtifactRemote),
    gcs: Schema.optional(SoftwareRecipeArtifactGcs),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeArtifact" });

export interface SoftwareRecipeStepCopyFile {
  /** Required. The absolute path on the instance to put the file. */
  destination?: string;
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
  /** Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false. */
  overwrite?: boolean;
  /** Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
  permissions?: string;
}

export const SoftwareRecipeStepCopyFile: Schema.Codec<SoftwareRecipeStepCopyFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
    artifactId: Schema.optional(Schema.String),
    overwrite: Schema.optional(Schema.Boolean),
    permissions: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepCopyFile" });

export interface SoftwareRecipeStepExtractArchive {
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
  /** Required. The type of the archive to extract. */
  type?:
    | "ARCHIVE_TYPE_UNSPECIFIED"
    | "TAR"
    | "TAR_GZIP"
    | "TAR_BZIP"
    | "TAR_LZMA"
    | "TAR_XZ"
    | "ZIP"
    | (string & {});
  /** Directory to extract archive to. Defaults to `/` on Linux or `C:\` on Windows. */
  destination?: string;
}

export const SoftwareRecipeStepExtractArchive: Schema.Codec<SoftwareRecipeStepExtractArchive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepExtractArchive" });

export interface SoftwareRecipeStepExecFile {
  /** Arguments to be passed to the provided executable. */
  args?: ReadonlyArray<string>;
  /** The id of the relevant artifact in the recipe. */
  artifactId?: string;
  /** The absolute path of the file on the local filesystem. */
  localPath?: string;
  /** Defaults to [0]. A list of possible return values that the program can return to indicate a success. */
  allowedExitCodes?: ReadonlyArray<number>;
}

export const SoftwareRecipeStepExecFile: Schema.Codec<SoftwareRecipeStepExecFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    args: Schema.optional(Schema.Array(Schema.String)),
    artifactId: Schema.optional(Schema.String),
    localPath: Schema.optional(Schema.String),
    allowedExitCodes: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "SoftwareRecipeStepExecFile" });

export interface SoftwareRecipeStepInstallMsi {
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
  /** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
  allowedExitCodes?: ReadonlyArray<number>;
  /** The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag). */
  flags?: ReadonlyArray<string>;
}

export const SoftwareRecipeStepInstallMsi: Schema.Codec<SoftwareRecipeStepInstallMsi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactId: Schema.optional(Schema.String),
    allowedExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    flags: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SoftwareRecipeStepInstallMsi" });

export interface SoftwareRecipeStepInstallRpm {
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
}

export const SoftwareRecipeStepInstallRpm: Schema.Codec<SoftwareRecipeStepInstallRpm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepInstallRpm" });

export interface SoftwareRecipeStepRunScript {
  /** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
  allowedExitCodes?: ReadonlyArray<number>;
  /** Required. The shell script to be executed. */
  script?: string;
  /** The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\(Unix\)). */
  interpreter?:
    | "INTERPRETER_UNSPECIFIED"
    | "SHELL"
    | "POWERSHELL"
    | (string & {});
}

export const SoftwareRecipeStepRunScript: Schema.Codec<SoftwareRecipeStepRunScript> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    script: Schema.optional(Schema.String),
    interpreter: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepRunScript" });

export interface SoftwareRecipeStep {
  /** Copies a file onto the instance. */
  fileCopy?: SoftwareRecipeStepCopyFile;
  /** Installs a deb file via dpkg. */
  dpkgInstallation?: SoftwareRecipeStepInstallDpkg;
  /** Extracts an archive into the specified directory. */
  archiveExtraction?: SoftwareRecipeStepExtractArchive;
  /** Executes an artifact or local file. */
  fileExec?: SoftwareRecipeStepExecFile;
  /** Installs an MSI file. */
  msiInstallation?: SoftwareRecipeStepInstallMsi;
  /** Installs an rpm file via the rpm utility. */
  rpmInstallation?: SoftwareRecipeStepInstallRpm;
  /** Runs commands in a shell. */
  scriptRun?: SoftwareRecipeStepRunScript;
}

export const SoftwareRecipeStep: Schema.Codec<SoftwareRecipeStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileCopy: Schema.optional(SoftwareRecipeStepCopyFile),
    dpkgInstallation: Schema.optional(SoftwareRecipeStepInstallDpkg),
    archiveExtraction: Schema.optional(SoftwareRecipeStepExtractArchive),
    fileExec: Schema.optional(SoftwareRecipeStepExecFile),
    msiInstallation: Schema.optional(SoftwareRecipeStepInstallMsi),
    rpmInstallation: Schema.optional(SoftwareRecipeStepInstallRpm),
    scriptRun: Schema.optional(SoftwareRecipeStepRunScript),
  }).annotate({ identifier: "SoftwareRecipeStep" });

export interface SoftwareRecipe {
  /** Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments. */
  name?: string;
  /** The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78). */
  version?: string;
  /** Resources available to be used in the steps in the recipe. */
  artifacts?: ReadonlyArray<SoftwareRecipeArtifact>;
  /** Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. */
  desiredState?:
    | "DESIRED_STATE_UNSPECIFIED"
    | "INSTALLED"
    | "UPDATED"
    | "REMOVED"
    | (string & {});
  /** Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back. */
  installSteps?: ReadonlyArray<SoftwareRecipeStep>;
  /** Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back. */
  updateSteps?: ReadonlyArray<SoftwareRecipeStep>;
}

export const SoftwareRecipe: Schema.Codec<SoftwareRecipe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    artifacts: Schema.optional(Schema.Array(SoftwareRecipeArtifact)),
    desiredState: Schema.optional(Schema.String),
    installSteps: Schema.optional(Schema.Array(SoftwareRecipeStep)),
    updateSteps: Schema.optional(Schema.Array(SoftwareRecipeStep)),
  }).annotate({ identifier: "SoftwareRecipe" });

export interface YumRepository {
  /** URIs of GPG keys. */
  gpgKeys?: ReadonlyArray<string>;
  /** Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
  id?: string;
  /** Required. The location of the repository directory. */
  baseUrl?: string;
  /** The display name of the repository. */
  displayName?: string;
}

export const YumRepository: Schema.Codec<YumRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    gpgKeys: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
    baseUrl: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "YumRepository" });

export interface ZypperRepository {
  /** The display name of the repository. */
  displayName?: string;
  /** Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
  id?: string;
  /** Required. The location of the repository directory. */
  baseUrl?: string;
  /** URIs of GPG keys. */
  gpgKeys?: ReadonlyArray<string>;
}

export const ZypperRepository: Schema.Codec<ZypperRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    baseUrl: Schema.optional(Schema.String),
    gpgKeys: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ZypperRepository" });

export interface AptRepository {
  /** Type of archive files in this repository. The default behavior is DEB. */
  archiveType?: "ARCHIVE_TYPE_UNSPECIFIED" | "DEB" | "DEB_SRC" | (string & {});
  /** Required. Distribution of this repository. */
  distribution?: string;
  /** Required. URI for this repository. */
  uri?: string;
  /** Required. List of components for this repository. Must contain at least one item. */
  components?: ReadonlyArray<string>;
  /** URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy. */
  gpgKey?: string;
}

export const AptRepository: Schema.Codec<AptRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    archiveType: Schema.optional(Schema.String),
    distribution: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    components: Schema.optional(Schema.Array(Schema.String)),
    gpgKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "AptRepository" });

export interface PackageRepository {
  /** A Yum Repository. */
  yum?: YumRepository;
  /** A Zypper Repository. */
  zypper?: ZypperRepository;
  /** An Apt Repository. */
  apt?: AptRepository;
  /** A Goo Repository. */
  goo?: GooRepository;
}

export const PackageRepository: Schema.Codec<PackageRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yum: Schema.optional(YumRepository),
    zypper: Schema.optional(ZypperRepository),
    apt: Schema.optional(AptRepository),
    goo: Schema.optional(GooRepository),
  }).annotate({ identifier: "PackageRepository" });

export interface AssignmentGroupLabel {
  /** Google Compute Engine instance labels that must be present for an instance to be included in this assignment group. */
  labels?: Record<string, string>;
}

export const AssignmentGroupLabel: Schema.Codec<AssignmentGroupLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AssignmentGroupLabel" });

export interface AssignmentOsType {
  /** Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows". */
  osShortName?: string;
  /** Targets VM instances with OS Inventory enabled and having the following OS architecture. */
  osArchitecture?: string;
  /** Targets VM instances with OS Inventory enabled and having the following following OS version. */
  osVersion?: string;
}

export const AssignmentOsType: Schema.Codec<AssignmentOsType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osShortName: Schema.optional(Schema.String),
    osArchitecture: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssignmentOsType" });

export interface Assignment {
  /** Targets any of the instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`. Instance targeting is uncommon and is supported to facilitate the management of changes by the instance or to target specific VM instances for development and testing. Only supported for project-level policies and must reference instances within this project. */
  instances?: ReadonlyArray<string>;
  /** Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix="prod-". Only supported for project-level policies. */
  instanceNamePrefixes?: ReadonlyArray<string>;
  /** Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example "env=prod or env=staging". */
  groupLabels?: ReadonlyArray<AssignmentGroupLabel>;
  /** Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone. */
  zones?: ReadonlyArray<string>;
  /** Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included. */
  osTypes?: ReadonlyArray<AssignmentOsType>;
}

export const Assignment: Schema.Codec<Assignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instances: Schema.optional(Schema.Array(Schema.String)),
    instanceNamePrefixes: Schema.optional(Schema.Array(Schema.String)),
    groupLabels: Schema.optional(Schema.Array(AssignmentGroupLabel)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    osTypes: Schema.optional(Schema.Array(AssignmentOsType)),
  }).annotate({ identifier: "Assignment" });

export interface Package {
  /** Type of package manager that can be used to install this package. If a system does not have the package manager, the package is not installed or removed no error message is returned. By default, or if you specify `ANY`, the agent attempts to install and remove this package using the default package manager. This is useful when creating a policy that applies to different types of systems. The default behavior is ANY. */
  manager?:
    | "MANAGER_UNSPECIFIED"
    | "ANY"
    | "APT"
    | "YUM"
    | "ZYPPER"
    | "GOO"
    | (string & {});
  /** Required. The name of the package. A package is uniquely identified for conflict validation by checking the package name and the manager(s) that the package targets. */
  name?: string;
  /** The desired_state the agent should maintain for this package. The default is to ensure the package is installed. */
  desiredState?:
    | "DESIRED_STATE_UNSPECIFIED"
    | "INSTALLED"
    | "UPDATED"
    | "REMOVED"
    | (string & {});
}

export const Package: Schema.Codec<Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manager: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    desiredState: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface GuestPolicy {
  /** Description of the guest policy. Length of the description is limited to 1024 characters. */
  description?: string;
  /** A list of Recipes to install on the VM instance. */
  recipes?: ReadonlyArray<SoftwareRecipe>;
  /** Output only. Time this guest policy was created. */
  createTime?: string;
  /** A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available. */
  packageRepositories?: ReadonlyArray<PackageRepository>;
  /** Required. Specifies the VM instances that are assigned to this policy. This allows you to target sets or groups of VM instances by different parameters such as labels, names, OS, or zones. If left empty, all VM instances underneath this policy are targeted. At the same level in the resource hierarchy (that is within a project), the service prevents the creation of multiple policies that conflict with each other. For more information, see how the service [handles assignment conflicts](/compute/docs/os-config-management/create-guest-policy#handle-conflicts). */
  assignment?: Assignment;
  /** The software packages to be managed by this policy. */
  packages?: ReadonlyArray<Package>;
  /** The etag for this guest policy. If this is provided on update, it must match the server's etag. */
  etag?: string;
  /** Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. */
  name?: string;
  /** Output only. Last time this guest policy was updated. */
  updateTime?: string;
}

export const GuestPolicy: Schema.Codec<GuestPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    recipes: Schema.optional(Schema.Array(SoftwareRecipe)),
    createTime: Schema.optional(Schema.String),
    packageRepositories: Schema.optional(Schema.Array(PackageRepository)),
    assignment: Schema.optional(Assignment),
    packages: Schema.optional(Schema.Array(Package)),
    etag: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GuestPolicy" });

export interface ListGuestPoliciesResponse {
  /** The list of GuestPolicies. */
  guestPolicies?: ReadonlyArray<GuestPolicy>;
  /** A pagination token that can be used to get the next page of guest policies. */
  nextPageToken?: string;
}

export const ListGuestPoliciesResponse: Schema.Codec<ListGuestPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guestPolicies: Schema.optional(Schema.Array(GuestPolicy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGuestPoliciesResponse" });

export interface PatchJobInstanceDetails {
  /** The unique identifier for the instance. This identifier is defined by the server. */
  instanceSystemId?: string;
  /** The instance name in the form `projects/* /zones/* /instances/*` */
  name?: string;
  /** If the patch fails, this field provides the reason. */
  failureReason?: string;
  /** Current state of instance patch. */
  state?:
    | "PATCH_STATE_UNSPECIFIED"
    | "PENDING"
    | "INACTIVE"
    | "NOTIFIED"
    | "STARTED"
    | "DOWNLOADING_PATCHES"
    | "APPLYING_PATCHES"
    | "REBOOTING"
    | "SUCCEEDED"
    | "SUCCEEDED_REBOOT_REQUIRED"
    | "FAILED"
    | "ACKED"
    | "TIMED_OUT"
    | "RUNNING_PRE_PATCH_STEP"
    | "RUNNING_POST_PATCH_STEP"
    | "NO_AGENT_DETECTED"
    | "SKIPPED"
    | (string & {});
  /** The number of times the agent that the agent attempts to apply the patch. */
  attemptCount?: string;
}

export const PatchJobInstanceDetails: Schema.Codec<PatchJobInstanceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceSystemId: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    attemptCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PatchJobInstanceDetails" });

export interface ListPatchJobInstanceDetailsResponse {
  /** A list of instance status. */
  patchJobInstanceDetails?: ReadonlyArray<PatchJobInstanceDetails>;
  /** A pagination token that can be used to get the next page of results. */
  nextPageToken?: string;
}

export const ListPatchJobInstanceDetailsResponse: Schema.Codec<ListPatchJobInstanceDetailsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchJobInstanceDetails: Schema.optional(
      Schema.Array(PatchJobInstanceDetails),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPatchJobInstanceDetailsResponse" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface PausePatchDeploymentRequest {}

export const PausePatchDeploymentRequest: Schema.Codec<PausePatchDeploymentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PausePatchDeploymentRequest",
  });

export interface WeekDayOfMonth {
  /** Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month. */
  weekOrdinal?: number;
  /** Optional. Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. For example if `week_ordinal` and `day_of_week` values point to the second day of the month and this `day_offset` value is set to `3`, the patch deployment takes place three days after the second Tuesday of the month. If this value is negative, for example -5, the patches are deployed five days before before the second Tuesday of the month. Allowed values are in range [-30, 30]. */
  dayOffset?: number;
  /** Required. A day of the week. */
  dayOfWeek?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
}

export const WeekDayOfMonth: Schema.Codec<WeekDayOfMonth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weekOrdinal: Schema.optional(Schema.Number),
    dayOffset: Schema.optional(Schema.Number),
    dayOfWeek: Schema.optional(Schema.String),
  }).annotate({ identifier: "WeekDayOfMonth" });

export interface MonthlySchedule {
  /** Required. Week day in a month. */
  weekDayOfMonth?: WeekDayOfMonth;
  /** Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc. */
  monthDay?: number;
}

export const MonthlySchedule: Schema.Codec<MonthlySchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weekDayOfMonth: Schema.optional(WeekDayOfMonth),
    monthDay: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MonthlySchedule" });

export interface PatchJobInstanceDetailsSummary {
  /** Number of instances rebooting. */
  rebootingInstanceCount?: string;
  /** Number of instances that have acked and will start shortly. */
  ackedInstanceCount?: string;
  /** Number of instances pending patch job. */
  pendingInstanceCount?: string;
  /** Number of instances that exceeded the time out while applying the patch. */
  timedOutInstanceCount?: string;
  /** Number of instances that require reboot. */
  succeededRebootRequiredInstanceCount?: string;
  /** Number of instances that failed. */
  failedInstanceCount?: string;
  /** Number of instances that have completed successfully. */
  succeededInstanceCount?: string;
  /** Number of instances that are running the pre-patch step. */
  prePatchStepInstanceCount?: string;
  /** Number of instances that are running the post-patch step. */
  postPatchStepInstanceCount?: string;
  /** Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service. */
  noAgentDetectedInstanceCount?: string;
  /** Number of instances that are inactive. */
  inactiveInstanceCount?: string;
  /** Number of instances notified about patch job. */
  notifiedInstanceCount?: string;
  /** Number of instances that are downloading patches. */
  downloadingPatchesInstanceCount?: string;
  /** Number of instances that have started. */
  startedInstanceCount?: string;
  /** Number of instances that are applying patches. */
  applyingPatchesInstanceCount?: string;
  /** Number of instances that were skipped during patching. */
  skippedInstanceCount?: string;
}

export const PatchJobInstanceDetailsSummary: Schema.Codec<PatchJobInstanceDetailsSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rebootingInstanceCount: Schema.optional(Schema.String),
    ackedInstanceCount: Schema.optional(Schema.String),
    pendingInstanceCount: Schema.optional(Schema.String),
    timedOutInstanceCount: Schema.optional(Schema.String),
    succeededRebootRequiredInstanceCount: Schema.optional(Schema.String),
    failedInstanceCount: Schema.optional(Schema.String),
    succeededInstanceCount: Schema.optional(Schema.String),
    prePatchStepInstanceCount: Schema.optional(Schema.String),
    postPatchStepInstanceCount: Schema.optional(Schema.String),
    noAgentDetectedInstanceCount: Schema.optional(Schema.String),
    inactiveInstanceCount: Schema.optional(Schema.String),
    notifiedInstanceCount: Schema.optional(Schema.String),
    downloadingPatchesInstanceCount: Schema.optional(Schema.String),
    startedInstanceCount: Schema.optional(Schema.String),
    applyingPatchesInstanceCount: Schema.optional(Schema.String),
    skippedInstanceCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PatchJobInstanceDetailsSummary" });

export interface EffectiveGuestPolicySourcedPackage {
  /** Name of the guest policy providing this config. */
  source?: string;
  /** A software package to configure on the VM instance. */
  package?: Package;
}

export const EffectiveGuestPolicySourcedPackage: Schema.Codec<EffectiveGuestPolicySourcedPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    package: Schema.optional(Package),
  }).annotate({ identifier: "EffectiveGuestPolicySourcedPackage" });

export interface EffectiveGuestPolicySourcedPackageRepository {
  /** Name of the guest policy providing this config. */
  source?: string;
  /** A software package repository to configure on the VM instance. */
  packageRepository?: PackageRepository;
}

export const EffectiveGuestPolicySourcedPackageRepository: Schema.Codec<EffectiveGuestPolicySourcedPackageRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    packageRepository: Schema.optional(PackageRepository),
  }).annotate({ identifier: "EffectiveGuestPolicySourcedPackageRepository" });

export interface EffectiveGuestPolicySourcedSoftwareRecipe {
  /** Name of the guest policy providing this config. */
  source?: string;
  /** A software recipe to configure on the VM instance. */
  softwareRecipe?: SoftwareRecipe;
}

export const EffectiveGuestPolicySourcedSoftwareRecipe: Schema.Codec<EffectiveGuestPolicySourcedSoftwareRecipe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    softwareRecipe: Schema.optional(SoftwareRecipe),
  }).annotate({ identifier: "EffectiveGuestPolicySourcedSoftwareRecipe" });

export interface EffectiveGuestPolicy {
  /** List of package configurations assigned to the VM instance. */
  packages?: ReadonlyArray<EffectiveGuestPolicySourcedPackage>;
  /** List of package repository configurations assigned to the VM instance. */
  packageRepositories?: ReadonlyArray<EffectiveGuestPolicySourcedPackageRepository>;
  /** List of recipes assigned to the VM instance. */
  softwareRecipes?: ReadonlyArray<EffectiveGuestPolicySourcedSoftwareRecipe>;
}

export const EffectiveGuestPolicy: Schema.Codec<EffectiveGuestPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packages: Schema.optional(Schema.Array(EffectiveGuestPolicySourcedPackage)),
    packageRepositories: Schema.optional(
      Schema.Array(EffectiveGuestPolicySourcedPackageRepository),
    ),
    softwareRecipes: Schema.optional(
      Schema.Array(EffectiveGuestPolicySourcedSoftwareRecipe),
    ),
  }).annotate({ identifier: "EffectiveGuestPolicy" });

export interface AptSettings {
  /** By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead. */
  type?: "TYPE_UNSPECIFIED" | "DIST" | "UPGRADE" | (string & {});
  /** An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields. */
  exclusivePackages?: ReadonlyArray<string>;
  /** List of packages to exclude from update. These packages will be excluded */
  excludes?: ReadonlyArray<string>;
}

export const AptSettings: Schema.Codec<AptSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    exclusivePackages: Schema.optional(Schema.Array(Schema.String)),
    excludes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AptSettings" });

export interface GoogleCloudOsconfigV2__OperationMetadata {
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const GoogleCloudOsconfigV2__OperationMetadata: Schema.Codec<GoogleCloudOsconfigV2__OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verb: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    target: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudOsconfigV2__OperationMetadata" });

export interface GcsObject {
  /** Required. Bucket of the Google Cloud Storage object. */
  bucket?: string;
  /** Required. Name of the Google Cloud Storage object. */
  object?: string;
  /** Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  generationNumber?: string;
}

export const GcsObject: Schema.Codec<GcsObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    generationNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsObject" });

export interface WindowsUpdateSettings {
  /** List of KBs to exclude from update. */
  excludes?: ReadonlyArray<string>;
  /** Only apply updates of these windows update classifications. If empty, all updates are applied. */
  classifications?: ReadonlyArray<
    | "CLASSIFICATION_UNSPECIFIED"
    | "CRITICAL"
    | "SECURITY"
    | "DEFINITION"
    | "DRIVER"
    | "FEATURE_PACK"
    | "SERVICE_PACK"
    | "TOOL"
    | "UPDATE_ROLLUP"
    | "UPDATE"
    | (string & {})
  >;
  /** An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations. */
  exclusivePatches?: ReadonlyArray<string>;
}

export const WindowsUpdateSettings: Schema.Codec<WindowsUpdateSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludes: Schema.optional(Schema.Array(Schema.String)),
    classifications: Schema.optional(Schema.Array(Schema.String)),
    exclusivePatches: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "WindowsUpdateSettings" });

export interface ZypperSettings {
  /** Install only patches with these severities. Common severities include critical, important, moderate, and low. */
  severities?: ReadonlyArray<string>;
  /** An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command. This field must not be used with any other patch configuration fields. */
  exclusivePatches?: ReadonlyArray<string>;
  /** Adds the `--with-optional` flag to `zypper patch`. */
  withOptional?: boolean;
  /** Install only patches with these categories. Common categories include security, recommended, and feature. */
  categories?: ReadonlyArray<string>;
  /** Adds the `--with-update` flag, to `zypper patch`. */
  withUpdate?: boolean;
  /** List of patches to exclude from update. */
  excludes?: ReadonlyArray<string>;
}

export const ZypperSettings: Schema.Codec<ZypperSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    severities: Schema.optional(Schema.Array(Schema.String)),
    exclusivePatches: Schema.optional(Schema.Array(Schema.String)),
    withOptional: Schema.optional(Schema.Boolean),
    categories: Schema.optional(Schema.Array(Schema.String)),
    withUpdate: Schema.optional(Schema.Boolean),
    excludes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ZypperSettings" });

export interface CancelPatchJobRequest {}

export const CancelPatchJobRequest: Schema.Codec<CancelPatchJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelPatchJobRequest",
  });

export interface FixedOrPercent {
  /** Specifies the relative value defined as a percentage, which will be multiplied by a reference value. */
  percent?: number;
  /** Specifies a fixed value. */
  fixed?: number;
}

export const FixedOrPercent: Schema.Codec<FixedOrPercent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    percent: Schema.optional(Schema.Number),
    fixed: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FixedOrPercent" });

export interface PatchRollout {
  /** The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up. During patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps. A VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget. For zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone. For example, if the disruption budget has a fixed value of `10`, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops. */
  disruptionBudget?: FixedOrPercent;
  /** Mode of the patch rollout. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "ZONE_BY_ZONE"
    | "CONCURRENT_ZONES"
    | (string & {});
}

export const PatchRollout: Schema.Codec<PatchRollout> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    disruptionBudget: Schema.optional(FixedOrPercent),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "PatchRollout" });

export interface PatchInstanceFilterGroupLabel {
  /** Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. */
  labels?: Record<string, string>;
}

export const PatchInstanceFilterGroupLabel: Schema.Codec<PatchInstanceFilterGroupLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "PatchInstanceFilterGroupLabel" });

export interface PatchInstanceFilter {
  /** Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. */
  zones?: ReadonlyArray<string>;
  /** Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix="prod-". */
  instanceNamePrefixes?: ReadonlyArray<string>;
  /** Targets VM instances matching at least one of these label sets. This allows targeting of disparate groups, for example "env=prod or env=staging". */
  groupLabels?: ReadonlyArray<PatchInstanceFilterGroupLabel>;
  /** Targets any of the VM instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`, `projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`, or `https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]` */
  instances?: ReadonlyArray<string>;
  /** Target all VM instances in the project. If true, no other criteria is permitted. */
  all?: boolean;
}

export const PatchInstanceFilter: Schema.Codec<PatchInstanceFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zones: Schema.optional(Schema.Array(Schema.String)),
    instanceNamePrefixes: Schema.optional(Schema.Array(Schema.String)),
    groupLabels: Schema.optional(Schema.Array(PatchInstanceFilterGroupLabel)),
    instances: Schema.optional(Schema.Array(Schema.String)),
    all: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PatchInstanceFilter" });

export interface GooSettings {}

export const GooSettings: Schema.Codec<GooSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooSettings",
  });

export interface YumSettings {
  /** Will cause patch to run `yum update-minimal` instead. */
  minimal?: boolean;
  /** An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields. */
  exclusivePackages?: ReadonlyArray<string>;
  /** Adds the `--security` flag to `yum update`. Not supported on all platforms. */
  security?: boolean;
  /** List of packages to exclude from update. These packages are excluded by using the yum `--exclude` flag. */
  excludes?: ReadonlyArray<string>;
}

export const YumSettings: Schema.Codec<YumSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimal: Schema.optional(Schema.Boolean),
    exclusivePackages: Schema.optional(Schema.Array(Schema.String)),
    security: Schema.optional(Schema.Boolean),
    excludes: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "YumSettings" });

export interface ExecStepConfig {
  /** The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)). */
  interpreter?:
    | "INTERPRETER_UNSPECIFIED"
    | "NONE"
    | "SHELL"
    | "POWERSHELL"
    | (string & {});
  /** A Google Cloud Storage object containing the executable. */
  gcsObject?: GcsObject;
  /** Defaults to [0]. A list of possible return values that the execution can return to indicate a success. */
  allowedSuccessCodes?: ReadonlyArray<number>;
  /** An absolute path to the executable on the VM. */
  localPath?: string;
}

export const ExecStepConfig: Schema.Codec<ExecStepConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interpreter: Schema.optional(Schema.String),
    gcsObject: Schema.optional(GcsObject),
    allowedSuccessCodes: Schema.optional(Schema.Array(Schema.Number)),
    localPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecStepConfig" });

export interface ExecStep {
  /** The ExecStepConfig for all Linux VMs targeted by the PatchJob. */
  linuxExecStepConfig?: ExecStepConfig;
  /** The ExecStepConfig for all Windows VMs targeted by the PatchJob. */
  windowsExecStepConfig?: ExecStepConfig;
}

export const ExecStep: Schema.Codec<ExecStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linuxExecStepConfig: Schema.optional(ExecStepConfig),
    windowsExecStepConfig: Schema.optional(ExecStepConfig),
  }).annotate({ identifier: "ExecStep" });

export interface PatchConfig {
  /** Post-patch reboot settings. */
  rebootConfig?:
    | "REBOOT_CONFIG_UNSPECIFIED"
    | "DEFAULT"
    | "ALWAYS"
    | "NEVER"
    | (string & {});
  /** Apt update settings. Use this setting to override the default `apt` patch rules. */
  apt?: AptSettings;
  /** Goo update settings. Use this setting to override the default `goo` patch rules. */
  goo?: GooSettings;
  /** Yum update settings. Use this setting to override the default `yum` patch rules. */
  yum?: YumSettings;
  /** Allows the patch job to run on Managed instance groups (MIGs). */
  migInstancesAllowed?: boolean;
  /** Windows update settings. Use this override the default windows patch rules. */
  windowsUpdate?: WindowsUpdateSettings;
  /** The `ExecStep` to run after the patch update. */
  postStep?: ExecStep;
  /** Optional. Enables enhanced reporting for the patch job: 1. The patch job skips instances that cannot be patched and reports them as `SKIPPED`. An instance cannot be patched for two reasons: 1. The instance runs Container-Optimized OS (COS), which cannot be patched. 2. The instance is part of a managed instance group (MIG), and patching MIG instances is disabled in the patch job's configuration (PatchConfig.migInstancesAllowed is `false`). 2. The patch job is reported as `SUCCEEDED` if it completes without errors, even if some instances are `SKIPPED`. 3. The patch job is reported as `COMPLETED_WITH_INACTIVE_VMS` if it completes without errors, but does not patch instances that are `INACTIVE`. */
  skipUnpatchableVms?: boolean;
  /** Zypper update settings. Use this setting to override the default `zypper` patch rules. */
  zypper?: ZypperSettings;
  /** The `ExecStep` to run before the patch update. */
  preStep?: ExecStep;
}

export const PatchConfig: Schema.Codec<PatchConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rebootConfig: Schema.optional(Schema.String),
    apt: Schema.optional(AptSettings),
    goo: Schema.optional(GooSettings),
    yum: Schema.optional(YumSettings),
    migInstancesAllowed: Schema.optional(Schema.Boolean),
    windowsUpdate: Schema.optional(WindowsUpdateSettings),
    postStep: Schema.optional(ExecStep),
    skipUnpatchableVms: Schema.optional(Schema.Boolean),
    zypper: Schema.optional(ZypperSettings),
    preStep: Schema.optional(ExecStep),
  }).annotate({ identifier: "PatchConfig" });

export interface PatchJob {
  /** If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance. */
  dryRun?: boolean;
  /** Rollout strategy being applied. */
  rollout?: PatchRollout;
  /** Description of the patch job. Length of the description is limited to 1024 characters. */
  description?: string;
  /** Unique identifier for this patch job in the form `projects/* /patchJobs/*` */
  name?: string;
  /** Last time this patch job was updated. */
  updateTime?: string;
  /** Instances to patch. */
  instanceFilter?: PatchInstanceFilter;
  /** Output only. Name of the patch deployment that created this patch job. */
  patchDeployment?: string;
  /** Patch configuration being applied. */
  patchConfig?: PatchConfig;
  /** Time this patch job was created. */
  createTime?: string;
  /** Summary of instance details. */
  instanceDetailsSummary?: PatchJobInstanceDetailsSummary;
  /** The current state of the PatchJob. */
  state?:
    | "STATE_UNSPECIFIED"
    | "STARTED"
    | "INSTANCE_LOOKUP"
    | "PATCHING"
    | "SUCCEEDED"
    | "COMPLETED_WITH_INACTIVE_VMS"
    | "COMPLETED_WITH_ERRORS"
    | "CANCELED"
    | "TIMED_OUT"
    | (string & {});
  /** Display name for this patch job. This is not a unique identifier. */
  displayName?: string;
  /** Duration of the patch job. After the duration ends, the patch job times out. */
  duration?: string;
  /** If this patch job failed, this message provides information about the failure. */
  errorMessage?: string;
  /** Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete. */
  percentComplete?: number;
}

export const PatchJob: Schema.Codec<PatchJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dryRun: Schema.optional(Schema.Boolean),
    rollout: Schema.optional(PatchRollout),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    instanceFilter: Schema.optional(PatchInstanceFilter),
    patchDeployment: Schema.optional(Schema.String),
    patchConfig: Schema.optional(PatchConfig),
    createTime: Schema.optional(Schema.String),
    instanceDetailsSummary: Schema.optional(PatchJobInstanceDetailsSummary),
    state: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    percentComplete: Schema.optional(Schema.Number),
  }).annotate({ identifier: "PatchJob" });

export interface ListPatchJobsResponse {
  /** A pagination token that can be used to get the next page of results. */
  nextPageToken?: string;
  /** The list of patch jobs. */
  patchJobs?: ReadonlyArray<PatchJob>;
}

export const ListPatchJobsResponse: Schema.Codec<ListPatchJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    patchJobs: Schema.optional(Schema.Array(PatchJob)),
  }).annotate({ identifier: "ListPatchJobsResponse" });

export interface TimeOfDay {
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay: Schema.Codec<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

export interface TimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const TimeZone: Schema.Codec<TimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZone" });

export interface RecurringSchedule {
  /** Required. Time of the day to run a recurring deployment. */
  timeOfDay?: TimeOfDay;
  /** Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment. */
  startTime?: string;
  /** Required. Schedule with weekly executions. */
  weekly?: WeeklySchedule;
  /** Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone. */
  timeZone?: TimeZone;
  /** Optional. The end time at which a recurring patch deployment schedule is no longer active. */
  endTime?: string;
  /** Required. Schedule with monthly executions. */
  monthly?: MonthlySchedule;
  /** Output only. The time the next patch job is scheduled to run. */
  nextExecuteTime?: string;
  /** Required. The frequency unit of this recurring schedule. */
  frequency?:
    | "FREQUENCY_UNSPECIFIED"
    | "WEEKLY"
    | "MONTHLY"
    | "DAILY"
    | (string & {});
  /** Output only. The time the last patch job ran successfully. */
  lastExecuteTime?: string;
}

export const RecurringSchedule: Schema.Codec<RecurringSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timeOfDay: Schema.optional(TimeOfDay),
    startTime: Schema.optional(Schema.String),
    weekly: Schema.optional(WeeklySchedule),
    timeZone: Schema.optional(TimeZone),
    endTime: Schema.optional(Schema.String),
    monthly: Schema.optional(MonthlySchedule),
    nextExecuteTime: Schema.optional(Schema.String),
    frequency: Schema.optional(Schema.String),
    lastExecuteTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RecurringSchedule" });

export interface GoogleCloudOsconfigV2beta__OperationMetadata {
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
}

export const GoogleCloudOsconfigV2beta__OperationMetadata: Schema.Codec<GoogleCloudOsconfigV2beta__OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedCancellation: Schema.optional(Schema.Boolean),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudOsconfigV2beta__OperationMetadata" });

export interface ExecutePatchJobRequest {
  /** Duration of the patch job. After the duration ends, the patch job times out. */
  duration?: string;
  /** If this patch is a dry-run only, instances are contacted but will do nothing. */
  dryRun?: boolean;
  /** Rollout strategy of the patch job. */
  rollout?: PatchRollout;
  /** Description of the patch job. Length of the description is limited to 1024 characters. */
  description?: string;
  /** Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels. */
  instanceFilter?: PatchInstanceFilter;
  /** Display name for this patch job. This does not have to be unique. */
  displayName?: string;
  /** Patch configuration being applied. If omitted, instances are patched using the default configurations. */
  patchConfig?: PatchConfig;
}

export const ExecutePatchJobRequest: Schema.Codec<ExecutePatchJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    duration: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.Boolean),
    rollout: Schema.optional(PatchRollout),
    description: Schema.optional(Schema.String),
    instanceFilter: Schema.optional(PatchInstanceFilter),
    displayName: Schema.optional(Schema.String),
    patchConfig: Schema.optional(PatchConfig),
  }).annotate({ identifier: "ExecutePatchJobRequest" });

export interface GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata {
  /** The OS policy assignment API method. */
  apiMethod?:
    | "API_METHOD_UNSPECIFIED"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {});
  /** State of the rollout */
  rolloutState?:
    | "ROLLOUT_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "CANCELLING"
    | "CANCELLED"
    | "SUCCEEDED"
    | (string & {});
  /** Rollout start time */
  rolloutStartTime?: string;
  /** Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
  osPolicyAssignment?: string;
  /** Rollout update time */
  rolloutUpdateTime?: string;
}

export const GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata: Schema.Codec<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiMethod: Schema.optional(Schema.String),
    rolloutState: Schema.optional(Schema.String),
    rolloutStartTime: Schema.optional(Schema.String),
    osPolicyAssignment: Schema.optional(Schema.String),
    rolloutUpdateTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata",
  });

export interface OneTimeSchedule {
  /** Required. The desired patch job execution time. */
  executeTime?: string;
}

export const OneTimeSchedule: Schema.Codec<OneTimeSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executeTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OneTimeSchedule" });

export interface PatchDeployment {
  /** Output only. Current state of the patch deployment. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "PAUSED" | (string & {});
  /** Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment. */
  name?: string;
  /** Required. Schedule recurring executions. */
  recurringSchedule?: RecurringSchedule;
  /** Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  updateTime?: string;
  /** Optional. Duration of the patch. After the duration ends, the patch times out. */
  duration?: string;
  /** Required. VM instances to patch. */
  instanceFilter?: PatchInstanceFilter;
  /** Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  lastExecuteTime?: string;
  /** Optional. Patch configuration that is applied. */
  patchConfig?: PatchConfig;
  /** Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createTime?: string;
  /** Optional. Rollout strategy of the patch job. */
  rollout?: PatchRollout;
  /** Required. Schedule a one-time execution. */
  oneTimeSchedule?: OneTimeSchedule;
  /** Optional. Description of the patch deployment. Length of the description is limited to 1024 characters. */
  description?: string;
}

export const PatchDeployment: Schema.Codec<PatchDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    recurringSchedule: Schema.optional(RecurringSchedule),
    updateTime: Schema.optional(Schema.String),
    duration: Schema.optional(Schema.String),
    instanceFilter: Schema.optional(PatchInstanceFilter),
    lastExecuteTime: Schema.optional(Schema.String),
    patchConfig: Schema.optional(PatchConfig),
    createTime: Schema.optional(Schema.String),
    rollout: Schema.optional(PatchRollout),
    oneTimeSchedule: Schema.optional(OneTimeSchedule),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "PatchDeployment" });

export interface ListPatchDeploymentsResponse {
  /** The list of patch deployments. */
  patchDeployments?: ReadonlyArray<PatchDeployment>;
  /** A pagination token that can be used to get the next page of patch deployments. */
  nextPageToken?: string;
}

export const ListPatchDeploymentsResponse: Schema.Codec<ListPatchDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchDeployments: Schema.optional(Schema.Array(PatchDeployment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPatchDeploymentsResponse" });

export interface MessageSet {}

export const MessageSet: Schema.Codec<MessageSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MessageSet",
  });

export interface StatusProto {
  /** Detail message copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional string message = 3; */
  message?: string;
  /** copybara:strip_begin(b/383363683) Space to which this status belongs copybara:strip_end_and_replace optional string space = 2; // Space to which this status belongs */
  space?: string;
  /** copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 canonical_code = 6; */
  canonicalCode?: number;
  /** message_set associates an arbitrary proto message with the status. copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional proto2.bridge.MessageSet message_set = 5; */
  messageSet?: MessageSet;
  /** Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 code = 1; */
  code?: number;
}

export const StatusProto: Schema.Codec<StatusProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    space: Schema.optional(Schema.String),
    canonicalCode: Schema.optional(Schema.Number),
    messageSet: Schema.optional(MessageSet),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "StatusProto" });

export interface LookupEffectiveGuestPolicyRequest {
  /** Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. */
  osShortName?: string;
  /** Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. */
  osArchitecture?: string;
  /** Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance. */
  osVersion?: string;
}

export const LookupEffectiveGuestPolicyRequest: Schema.Codec<LookupEffectiveGuestPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osShortName: Schema.optional(Schema.String),
    osArchitecture: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "LookupEffectiveGuestPolicyRequest" });

export interface OSPolicyAssignmentOperationMetadata {
  /** Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
  osPolicyAssignment?: string;
  /** Rollout update time */
  rolloutUpdateTime?: string;
  /** State of the rollout */
  rolloutState?:
    | "ROLLOUT_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "CANCELLING"
    | "CANCELLED"
    | "SUCCEEDED"
    | (string & {});
  /** The OS policy assignment API method. */
  apiMethod?:
    | "API_METHOD_UNSPECIFIED"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {});
  /** Rollout start time */
  rolloutStartTime?: string;
}

export const OSPolicyAssignmentOperationMetadata: Schema.Codec<OSPolicyAssignmentOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osPolicyAssignment: Schema.optional(Schema.String),
    rolloutUpdateTime: Schema.optional(Schema.String),
    rolloutState: Schema.optional(Schema.String),
    apiMethod: Schema.optional(Schema.String),
    rolloutStartTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OSPolicyAssignmentOperationMetadata" });

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

export interface CreateProjectsPatchDeploymentsRequest {
  /** Required. The project to apply this patch deployment to in the form `projects/*`. */
  parent: string;
  /** Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project. */
  patchDeploymentId?: string;
  /** Request body */
  body?: PatchDeployment;
}

export const CreateProjectsPatchDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    patchDeploymentId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("patchDeploymentId"),
    ),
    body: Schema.optional(PatchDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/patchDeployments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsPatchDeploymentsRequest>;

export type CreateProjectsPatchDeploymentsResponse = PatchDeployment;
export const CreateProjectsPatchDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PatchDeployment;

export type CreateProjectsPatchDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an OS Config patch deployment. */
export const createProjectsPatchDeployments: API.OperationMethod<
  CreateProjectsPatchDeploymentsRequest,
  CreateProjectsPatchDeploymentsResponse,
  CreateProjectsPatchDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsPatchDeploymentsRequest,
  output: CreateProjectsPatchDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ResumeProjectsPatchDeploymentsRequest {
  /** Required. The resource name of the patch deployment in the form `projects/* /patchDeployments/*`. */
  name: string;
  /** Request body */
  body?: ResumePatchDeploymentRequest;
}

export const ResumeProjectsPatchDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ResumePatchDeploymentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:resume", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<ResumeProjectsPatchDeploymentsRequest>;

export type ResumeProjectsPatchDeploymentsResponse = PatchDeployment;
export const ResumeProjectsPatchDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PatchDeployment;

export type ResumeProjectsPatchDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs. */
export const resumeProjectsPatchDeployments: API.OperationMethod<
  ResumeProjectsPatchDeploymentsRequest,
  ResumeProjectsPatchDeploymentsResponse,
  ResumeProjectsPatchDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResumeProjectsPatchDeploymentsRequest,
  output: ResumeProjectsPatchDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsPatchDeploymentsRequest {
  /** Required. The resource name of the patch deployment in the form `projects/* /patchDeployments/*`. */
  name: string;
}

export const GetProjectsPatchDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsPatchDeploymentsRequest>;

export type GetProjectsPatchDeploymentsResponse = PatchDeployment;
export const GetProjectsPatchDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PatchDeployment;

export type GetProjectsPatchDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get an OS Config patch deployment. */
export const getProjectsPatchDeployments: API.OperationMethod<
  GetProjectsPatchDeploymentsRequest,
  GetProjectsPatchDeploymentsResponse,
  GetProjectsPatchDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsPatchDeploymentsRequest,
  output: GetProjectsPatchDeploymentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsPatchDeploymentsRequest {
  /** Required. The resource name of the parent in the form `projects/*`. */
  parent: string;
  /** Optional. The maximum number of patch deployments to return. Default is 100. */
  pageSize?: number;
  /** Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from. */
  pageToken?: string;
}

export const ListProjectsPatchDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/patchDeployments" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsPatchDeploymentsRequest>;

export type ListProjectsPatchDeploymentsResponse = ListPatchDeploymentsResponse;
export const ListProjectsPatchDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPatchDeploymentsResponse;

export type ListProjectsPatchDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a page of OS Config patch deployments. */
export const listProjectsPatchDeployments: API.PaginatedOperationMethod<
  ListProjectsPatchDeploymentsRequest,
  ListProjectsPatchDeploymentsResponse,
  ListProjectsPatchDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsPatchDeploymentsRequest,
  output: ListProjectsPatchDeploymentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsPatchDeploymentsRequest {
  /** Required. The resource name of the patch deployment in the form `projects/* /patchDeployments/*`. */
  name: string;
}

export const DeleteProjectsPatchDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsPatchDeploymentsRequest>;

export type DeleteProjectsPatchDeploymentsResponse = Empty;
export const DeleteProjectsPatchDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsPatchDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an OS Config patch deployment. */
export const deleteProjectsPatchDeployments: API.OperationMethod<
  DeleteProjectsPatchDeploymentsRequest,
  DeleteProjectsPatchDeploymentsResponse,
  DeleteProjectsPatchDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsPatchDeploymentsRequest,
  output: DeleteProjectsPatchDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsPatchDeploymentsRequest {
  /** Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment. */
  name: string;
  /** Optional. Field mask that controls which fields of the patch deployment should be updated. */
  updateMask?: string;
  /** Request body */
  body?: PatchDeployment;
}

export const PatchProjectsPatchDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(PatchDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsPatchDeploymentsRequest>;

export type PatchProjectsPatchDeploymentsResponse = PatchDeployment;
export const PatchProjectsPatchDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PatchDeployment;

export type PatchProjectsPatchDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an OS Config patch deployment. */
export const patchProjectsPatchDeployments: API.OperationMethod<
  PatchProjectsPatchDeploymentsRequest,
  PatchProjectsPatchDeploymentsResponse,
  PatchProjectsPatchDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsPatchDeploymentsRequest,
  output: PatchProjectsPatchDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PauseProjectsPatchDeploymentsRequest {
  /** Required. The resource name of the patch deployment in the form `projects/* /patchDeployments/*`. */
  name: string;
  /** Request body */
  body?: PausePatchDeploymentRequest;
}

export const PauseProjectsPatchDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PausePatchDeploymentRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:pause", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PauseProjectsPatchDeploymentsRequest>;

export type PauseProjectsPatchDeploymentsResponse = PatchDeployment;
export const PauseProjectsPatchDeploymentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PatchDeployment;

export type PauseProjectsPatchDeploymentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs. */
export const pauseProjectsPatchDeployments: API.OperationMethod<
  PauseProjectsPatchDeploymentsRequest,
  PauseProjectsPatchDeploymentsResponse,
  PauseProjectsPatchDeploymentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PauseProjectsPatchDeploymentsRequest,
  output: PauseProjectsPatchDeploymentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsGuestPoliciesRequest {
  /** Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. */
  name: string;
  /** Field mask that controls which fields of the guest policy should be updated. */
  updateMask?: string;
  /** Request body */
  body?: GuestPolicy;
}

export const PatchProjectsGuestPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GuestPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchProjectsGuestPoliciesRequest>;

export type PatchProjectsGuestPoliciesResponse = GuestPolicy;
export const PatchProjectsGuestPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GuestPolicy;

export type PatchProjectsGuestPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update an OS Config guest policy. */
export const patchProjectsGuestPolicies: API.OperationMethod<
  PatchProjectsGuestPoliciesRequest,
  PatchProjectsGuestPoliciesResponse,
  PatchProjectsGuestPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsGuestPoliciesRequest,
  output: PatchProjectsGuestPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsGuestPoliciesRequest {
  /** Required. The resource name of the guest policy using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. */
  name: string;
}

export const DeleteProjectsGuestPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsGuestPoliciesRequest>;

export type DeleteProjectsGuestPoliciesResponse = Empty;
export const DeleteProjectsGuestPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsGuestPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete an OS Config guest policy. */
export const deleteProjectsGuestPolicies: API.OperationMethod<
  DeleteProjectsGuestPoliciesRequest,
  DeleteProjectsGuestPoliciesResponse,
  DeleteProjectsGuestPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsGuestPoliciesRequest,
  output: DeleteProjectsGuestPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsGuestPoliciesRequest {
  /** Required. The resource name of the parent using one of the following forms: `projects/{project_number}`. */
  parent: string;
  /** Required. The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project. */
  guestPolicyId?: string;
  /** Request body */
  body?: GuestPolicy;
}

export const CreateProjectsGuestPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    guestPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("guestPolicyId"),
    ),
    body: Schema.optional(GuestPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/guestPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsGuestPoliciesRequest>;

export type CreateProjectsGuestPoliciesResponse = GuestPolicy;
export const CreateProjectsGuestPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GuestPolicy;

export type CreateProjectsGuestPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create an OS Config guest policy. */
export const createProjectsGuestPolicies: API.OperationMethod<
  CreateProjectsGuestPoliciesRequest,
  CreateProjectsGuestPoliciesResponse,
  CreateProjectsGuestPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsGuestPoliciesRequest,
  output: CreateProjectsGuestPoliciesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsGuestPoliciesRequest {
  /** Required. The resource name of the guest policy using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. */
  name: string;
}

export const GetProjectsGuestPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsGuestPoliciesRequest>;

export type GetProjectsGuestPoliciesResponse = GuestPolicy;
export const GetProjectsGuestPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GuestPolicy;

export type GetProjectsGuestPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get an OS Config guest policy. */
export const getProjectsGuestPolicies: API.OperationMethod<
  GetProjectsGuestPoliciesRequest,
  GetProjectsGuestPoliciesResponse,
  GetProjectsGuestPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsGuestPoliciesRequest,
  output: GetProjectsGuestPoliciesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsGuestPoliciesRequest {
  /** A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The resource name of the parent using one of the following forms: `projects/{project_number}`. */
  parent: string;
  /** The maximum number of guest policies to return. */
  pageSize?: number;
}

export const ListProjectsGuestPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/guestPolicies" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsGuestPoliciesRequest>;

export type ListProjectsGuestPoliciesResponse = ListGuestPoliciesResponse;
export const ListProjectsGuestPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListGuestPoliciesResponse;

export type ListProjectsGuestPoliciesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a page of OS Config guest policies. */
export const listProjectsGuestPolicies: API.PaginatedOperationMethod<
  ListProjectsGuestPoliciesRequest,
  ListProjectsGuestPoliciesResponse,
  ListProjectsGuestPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsGuestPoliciesRequest,
  output: ListProjectsGuestPoliciesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsPatchJobsRequest {
  /** Required. Name of the patch in the form `projects/* /patchJobs/*` */
  name: string;
}

export const GetProjectsPatchJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsPatchJobsRequest>;

export type GetProjectsPatchJobsResponse = PatchJob;
export const GetProjectsPatchJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PatchJob;

export type GetProjectsPatchJobsError = DefaultErrors | NotFound | Forbidden;

/** Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs. */
export const getProjectsPatchJobs: API.OperationMethod<
  GetProjectsPatchJobsRequest,
  GetProjectsPatchJobsResponse,
  GetProjectsPatchJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsPatchJobsRequest,
  output: GetProjectsPatchJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsPatchJobsRequest {
  /** A pagination token returned from a previous call that indicates where this listing should continue from. */
  pageToken?: string;
  /** If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field. */
  filter?: string;
  /** Required. In the form of `projects/*` */
  parent: string;
  /** The maximum number of instance status to return. */
  pageSize?: number;
}

export const ListProjectsPatchJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/patchJobs" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsPatchJobsRequest>;

export type ListProjectsPatchJobsResponse = ListPatchJobsResponse;
export const ListProjectsPatchJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPatchJobsResponse;

export type ListProjectsPatchJobsError = DefaultErrors | NotFound | Forbidden;

/** Get a list of patch jobs. */
export const listProjectsPatchJobs: API.PaginatedOperationMethod<
  ListProjectsPatchJobsRequest,
  ListProjectsPatchJobsResponse,
  ListProjectsPatchJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsPatchJobsRequest,
  output: ListProjectsPatchJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ExecuteProjectsPatchJobsRequest {
  /** Required. The project in which to run this patch in the form `projects/*` */
  parent: string;
  /** Request body */
  body?: ExecutePatchJobRequest;
}

export const ExecuteProjectsPatchJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ExecutePatchJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+parent}/patchJobs:execute",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ExecuteProjectsPatchJobsRequest>;

export type ExecuteProjectsPatchJobsResponse = PatchJob;
export const ExecuteProjectsPatchJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PatchJob;

export type ExecuteProjectsPatchJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Patch VM instances by creating and running a patch job. */
export const executeProjectsPatchJobs: API.OperationMethod<
  ExecuteProjectsPatchJobsRequest,
  ExecuteProjectsPatchJobsResponse,
  ExecuteProjectsPatchJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecuteProjectsPatchJobsRequest,
  output: ExecuteProjectsPatchJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsPatchJobsRequest {
  /** Required. Name of the patch in the form `projects/* /patchJobs/*` */
  name: string;
  /** Request body */
  body?: CancelPatchJobRequest;
}

export const CancelProjectsPatchJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelPatchJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1beta/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsPatchJobsRequest>;

export type CancelProjectsPatchJobsResponse = PatchJob;
export const CancelProjectsPatchJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PatchJob;

export type CancelProjectsPatchJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted. */
export const cancelProjectsPatchJobs: API.OperationMethod<
  CancelProjectsPatchJobsRequest,
  CancelProjectsPatchJobsResponse,
  CancelProjectsPatchJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsPatchJobsRequest,
  output: CancelProjectsPatchJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsPatchJobsInstanceDetailsRequest {
  /** A pagination token returned from a previous call that indicates where this listing should continue from. */
  pageToken?: string;
  /** A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`. */
  filter?: string;
  /** Required. The parent for the instances are in the form of `projects/* /patchJobs/*`. */
  parent: string;
  /** The maximum number of instance details records to return. Default is 100. */
  pageSize?: number;
}

export const ListProjectsPatchJobsInstanceDetailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/instanceDetails" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsPatchJobsInstanceDetailsRequest>;

export type ListProjectsPatchJobsInstanceDetailsResponse =
  ListPatchJobInstanceDetailsResponse;
export const ListProjectsPatchJobsInstanceDetailsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListPatchJobInstanceDetailsResponse;

export type ListProjectsPatchJobsInstanceDetailsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a list of instance details for a given patch job. */
export const listProjectsPatchJobsInstanceDetails: API.PaginatedOperationMethod<
  ListProjectsPatchJobsInstanceDetailsRequest,
  ListProjectsPatchJobsInstanceDetailsResponse,
  ListProjectsPatchJobsInstanceDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsPatchJobsInstanceDetailsRequest,
  output: ListProjectsPatchJobsInstanceDetailsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface LookupEffectiveGuestPolicyProjectsZonesInstancesRequest {
  /** Required. The VM instance whose policies are being looked up. */
  instance: string;
  /** Request body */
  body?: LookupEffectiveGuestPolicyRequest;
}

export const LookupEffectiveGuestPolicyProjectsZonesInstancesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instance: Schema.String.pipe(T.HttpPath("instance")),
    body: Schema.optional(LookupEffectiveGuestPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta/{+instance}:lookupEffectiveGuestPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<LookupEffectiveGuestPolicyProjectsZonesInstancesRequest>;

export type LookupEffectiveGuestPolicyProjectsZonesInstancesResponse =
  EffectiveGuestPolicy;
export const LookupEffectiveGuestPolicyProjectsZonesInstancesResponse =
  /*@__PURE__*/ /*#__PURE__*/ EffectiveGuestPolicy;

export type LookupEffectiveGuestPolicyProjectsZonesInstancesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry. */
export const lookupEffectiveGuestPolicyProjectsZonesInstances: API.OperationMethod<
  LookupEffectiveGuestPolicyProjectsZonesInstancesRequest,
  LookupEffectiveGuestPolicyProjectsZonesInstancesResponse,
  LookupEffectiveGuestPolicyProjectsZonesInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupEffectiveGuestPolicyProjectsZonesInstancesRequest,
  output: LookupEffectiveGuestPolicyProjectsZonesInstancesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
