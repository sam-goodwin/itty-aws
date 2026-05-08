// ==========================================================================
// OS Config API (osconfig v1beta)
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
  name: "osconfig",
  version: "v1beta",
  rootUrl: "https://osconfig.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface TimeZone {
  /** IANA Time Zone Database time zone. For example "America/New_York". */
  id?: string;
  /** Optional. IANA Time Zone Database version number. For example "2019a". */
  version?: string;
}

export const TimeZone: Schema.Schema<TimeZone> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimeZone" });

export interface PatchJobInstanceDetails {
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
  /** The instance name in the form `projects/* /zones/* /instances/*` */
  name?: string;
  /** If the patch fails, this field provides the reason. */
  failureReason?: string;
  /** The number of times the agent that the agent attempts to apply the patch. */
  attemptCount?: string;
  /** The unique identifier for the instance. This identifier is defined by the server. */
  instanceSystemId?: string;
}

export const PatchJobInstanceDetails: Schema.Schema<PatchJobInstanceDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    failureReason: Schema.optional(Schema.String),
    attemptCount: Schema.optional(Schema.String),
    instanceSystemId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PatchJobInstanceDetails" });

export interface WindowsUpdateSettings {
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
  /** List of KBs to exclude from update. */
  excludes?: ReadonlyArray<string>;
  /** An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations. */
  exclusivePatches?: ReadonlyArray<string>;
}

export const WindowsUpdateSettings: Schema.Schema<WindowsUpdateSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    classifications: Schema.optional(Schema.Array(Schema.String)),
    excludes: Schema.optional(Schema.Array(Schema.String)),
    exclusivePatches: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "WindowsUpdateSettings" });

export interface SoftwareRecipeArtifactGcs {
  /** Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`. */
  object?: string;
  /** Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`. */
  bucket?: string;
  /** Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`. */
  generation?: string;
}

export const SoftwareRecipeArtifactGcs: Schema.Schema<SoftwareRecipeArtifactGcs> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    bucket: Schema.optional(Schema.String),
    generation: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeArtifactGcs" });

export interface SoftwareRecipeArtifactRemote {
  /** URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}. */
  uri?: string;
  /** Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps. */
  checksum?: string;
}

export const SoftwareRecipeArtifactRemote: Schema.Schema<SoftwareRecipeArtifactRemote> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    checksum: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeArtifactRemote" });

export interface SoftwareRecipeArtifact {
  /** Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified. */
  allowInsecure?: boolean;
  /** A Google Cloud Storage artifact. */
  gcs?: SoftwareRecipeArtifactGcs;
  /** Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id. */
  id?: string;
  /** A generic remote artifact. */
  remote?: SoftwareRecipeArtifactRemote;
}

export const SoftwareRecipeArtifact: Schema.Schema<SoftwareRecipeArtifact> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowInsecure: Schema.optional(Schema.Boolean),
    gcs: Schema.optional(SoftwareRecipeArtifactGcs),
    id: Schema.optional(Schema.String),
    remote: Schema.optional(SoftwareRecipeArtifactRemote),
  }).annotate({ identifier: "SoftwareRecipeArtifact" });

export interface SoftwareRecipeStepExtractArchive {
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
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
  /** Directory to extract archive to. Defaults to `/` on Linux or `C:\` on Windows. */
  destination?: string;
}

export const SoftwareRecipeStepExtractArchive: Schema.Schema<SoftwareRecipeStepExtractArchive> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    artifactId: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepExtractArchive" });

export interface SoftwareRecipeStepInstallMsi {
  /** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
  allowedExitCodes?: ReadonlyArray<number>;
  /** The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag). */
  flags?: ReadonlyArray<string>;
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
}

export const SoftwareRecipeStepInstallMsi: Schema.Schema<SoftwareRecipeStepInstallMsi> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    flags: Schema.optional(Schema.Array(Schema.String)),
    artifactId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepInstallMsi" });

export interface SoftwareRecipeStepInstallDpkg {
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
}

export const SoftwareRecipeStepInstallDpkg: Schema.Schema<SoftwareRecipeStepInstallDpkg> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepInstallDpkg" });

export interface SoftwareRecipeStepRunScript {
  /** The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\(Unix\)). */
  interpreter?:
    | "INTERPRETER_UNSPECIFIED"
    | "SHELL"
    | "POWERSHELL"
    | (string & {});
  /** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
  allowedExitCodes?: ReadonlyArray<number>;
  /** Required. The shell script to be executed. */
  script?: string;
}

export const SoftwareRecipeStepRunScript: Schema.Schema<SoftwareRecipeStepRunScript> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    interpreter: Schema.optional(Schema.String),
    allowedExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    script: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepRunScript" });

export interface SoftwareRecipeStepCopyFile {
  /** Required. The absolute path on the instance to put the file. */
  destination?: string;
  /** Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
  permissions?: string;
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
  /** Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false. */
  overwrite?: boolean;
}

export const SoftwareRecipeStepCopyFile: Schema.Schema<SoftwareRecipeStepCopyFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destination: Schema.optional(Schema.String),
    permissions: Schema.optional(Schema.String),
    artifactId: Schema.optional(Schema.String),
    overwrite: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SoftwareRecipeStepCopyFile" });

export interface SoftwareRecipeStepInstallRpm {
  /** Required. The id of the relevant artifact in the recipe. */
  artifactId?: string;
}

export const SoftwareRecipeStepInstallRpm: Schema.Schema<SoftwareRecipeStepInstallRpm> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifactId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipeStepInstallRpm" });

export interface SoftwareRecipeStepExecFile {
  /** Defaults to [0]. A list of possible return values that the program can return to indicate a success. */
  allowedExitCodes?: ReadonlyArray<number>;
  /** The absolute path of the file on the local filesystem. */
  localPath?: string;
  /** The id of the relevant artifact in the recipe. */
  artifactId?: string;
  /** Arguments to be passed to the provided executable. */
  args?: ReadonlyArray<string>;
}

export const SoftwareRecipeStepExecFile: Schema.Schema<SoftwareRecipeStepExecFile> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedExitCodes: Schema.optional(Schema.Array(Schema.Number)),
    localPath: Schema.optional(Schema.String),
    artifactId: Schema.optional(Schema.String),
    args: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "SoftwareRecipeStepExecFile" });

export interface SoftwareRecipeStep {
  /** Extracts an archive into the specified directory. */
  archiveExtraction?: SoftwareRecipeStepExtractArchive;
  /** Installs an MSI file. */
  msiInstallation?: SoftwareRecipeStepInstallMsi;
  /** Installs a deb file via dpkg. */
  dpkgInstallation?: SoftwareRecipeStepInstallDpkg;
  /** Runs commands in a shell. */
  scriptRun?: SoftwareRecipeStepRunScript;
  /** Copies a file onto the instance. */
  fileCopy?: SoftwareRecipeStepCopyFile;
  /** Installs an rpm file via the rpm utility. */
  rpmInstallation?: SoftwareRecipeStepInstallRpm;
  /** Executes an artifact or local file. */
  fileExec?: SoftwareRecipeStepExecFile;
}

export const SoftwareRecipeStep: Schema.Schema<SoftwareRecipeStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    archiveExtraction: Schema.optional(SoftwareRecipeStepExtractArchive),
    msiInstallation: Schema.optional(SoftwareRecipeStepInstallMsi),
    dpkgInstallation: Schema.optional(SoftwareRecipeStepInstallDpkg),
    scriptRun: Schema.optional(SoftwareRecipeStepRunScript),
    fileCopy: Schema.optional(SoftwareRecipeStepCopyFile),
    rpmInstallation: Schema.optional(SoftwareRecipeStepInstallRpm),
    fileExec: Schema.optional(SoftwareRecipeStepExecFile),
  }).annotate({ identifier: "SoftwareRecipeStep" });

export interface SoftwareRecipe {
  /** Resources available to be used in the steps in the recipe. */
  artifacts?: ReadonlyArray<SoftwareRecipeArtifact>;
  /** Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. */
  desiredState?:
    | "DESIRED_STATE_UNSPECIFIED"
    | "INSTALLED"
    | "UPDATED"
    | "REMOVED"
    | (string & {});
  /** The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78). */
  version?: string;
  /** Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back. */
  installSteps?: ReadonlyArray<SoftwareRecipeStep>;
  /** Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back. */
  updateSteps?: ReadonlyArray<SoftwareRecipeStep>;
  /** Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments. */
  name?: string;
}

export const SoftwareRecipe: Schema.Schema<SoftwareRecipe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    artifacts: Schema.optional(Schema.Array(SoftwareRecipeArtifact)),
    desiredState: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    installSteps: Schema.optional(Schema.Array(SoftwareRecipeStep)),
    updateSteps: Schema.optional(Schema.Array(SoftwareRecipeStep)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SoftwareRecipe" });

export interface GoogleCloudOsconfigV2__OperationMetadata {
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const GoogleCloudOsconfigV2__OperationMetadata: Schema.Schema<GoogleCloudOsconfigV2__OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleCloudOsconfigV2__OperationMetadata" });

export interface ResumePatchDeploymentRequest {}

export const ResumePatchDeploymentRequest: Schema.Schema<ResumePatchDeploymentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ResumePatchDeploymentRequest",
  });

export interface MessageSet {}

export const MessageSet: Schema.Schema<MessageSet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MessageSet",
  });

export interface FixedOrPercent {
  /** Specifies a fixed value. */
  fixed?: number;
  /** Specifies the relative value defined as a percentage, which will be multiplied by a reference value. */
  percent?: number;
}

export const FixedOrPercent: Schema.Schema<FixedOrPercent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fixed: Schema.optional(Schema.Number),
    percent: Schema.optional(Schema.Number),
  }).annotate({ identifier: "FixedOrPercent" });

export interface PatchRollout {
  /** Mode of the patch rollout. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "ZONE_BY_ZONE"
    | "CONCURRENT_ZONES"
    | (string & {});
  /** The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up. During patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps. A VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget. For zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone. For example, if the disruption budget has a fixed value of `10`, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops. */
  disruptionBudget?: FixedOrPercent;
}

export const PatchRollout: Schema.Schema<PatchRollout> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mode: Schema.optional(Schema.String),
    disruptionBudget: Schema.optional(FixedOrPercent),
  }).annotate({ identifier: "PatchRollout" });

export interface StatusProto {
  /** Detail message copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional string message = 3; */
  message?: string;
  /** copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 canonical_code = 6; */
  canonicalCode?: number;
  /** copybara:strip_begin(b/383363683) Space to which this status belongs copybara:strip_end_and_replace optional string space = 2; // Space to which this status belongs */
  space?: string;
  /** Numeric code drawn from the space specified below. Often, this is the canonical error space, and code is drawn from google3/util/task/codes.proto copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional int32 code = 1; */
  code?: number;
  /** message_set associates an arbitrary proto message with the status. copybara:strip_begin(b/383363683) copybara:strip_end_and_replace optional proto2.bridge.MessageSet message_set = 5; */
  messageSet?: MessageSet;
}

export const StatusProto: Schema.Schema<StatusProto> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    canonicalCode: Schema.optional(Schema.Number),
    space: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
    messageSet: Schema.optional(MessageSet),
  }).annotate({ identifier: "StatusProto" });

export interface WeekDayOfMonth {
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
  /** Optional. Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. For example if `week_ordinal` and `day_of_week` values point to the second day of the month and this `day_offset` value is set to `3`, the patch deployment takes place three days after the second Tuesday of the month. If this value is negative, for example -5, the patches are deployed five days before before the second Tuesday of the month. Allowed values are in range [-30, 30]. */
  dayOffset?: number;
  /** Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month. */
  weekOrdinal?: number;
}

export const WeekDayOfMonth: Schema.Schema<WeekDayOfMonth> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dayOfWeek: Schema.optional(Schema.String),
    dayOffset: Schema.optional(Schema.Number),
    weekOrdinal: Schema.optional(Schema.Number),
  }).annotate({ identifier: "WeekDayOfMonth" });

export interface MonthlySchedule {
  /** Required. Week day in a month. */
  weekDayOfMonth?: WeekDayOfMonth;
  /** Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc. */
  monthDay?: number;
}

export const MonthlySchedule: Schema.Schema<MonthlySchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    weekDayOfMonth: Schema.optional(WeekDayOfMonth),
    monthDay: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MonthlySchedule" });

export interface AssignmentGroupLabel {
  /** Google Compute Engine instance labels that must be present for an instance to be included in this assignment group. */
  labels?: Record<string, string>;
}

export const AssignmentGroupLabel: Schema.Schema<AssignmentGroupLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AssignmentGroupLabel" });

export interface YumRepository {
  /** The display name of the repository. */
  displayName?: string;
  /** Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
  id?: string;
  /** Required. The location of the repository directory. */
  baseUrl?: string;
  /** URIs of GPG keys. */
  gpgKeys?: ReadonlyArray<string>;
}

export const YumRepository: Schema.Schema<YumRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    baseUrl: Schema.optional(Schema.String),
    gpgKeys: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "YumRepository" });

export interface AptRepository {
  /** Required. Distribution of this repository. */
  distribution?: string;
  /** Type of archive files in this repository. The default behavior is DEB. */
  archiveType?: "ARCHIVE_TYPE_UNSPECIFIED" | "DEB" | "DEB_SRC" | (string & {});
  /** Required. URI for this repository. */
  uri?: string;
  /** URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy. */
  gpgKey?: string;
  /** Required. List of components for this repository. Must contain at least one item. */
  components?: ReadonlyArray<string>;
}

export const AptRepository: Schema.Schema<AptRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    distribution: Schema.optional(Schema.String),
    archiveType: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    gpgKey: Schema.optional(Schema.String),
    components: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AptRepository" });

export interface ZypperRepository {
  /** The display name of the repository. */
  displayName?: string;
  /** Required. The location of the repository directory. */
  baseUrl?: string;
  /** URIs of GPG keys. */
  gpgKeys?: ReadonlyArray<string>;
  /** Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
  id?: string;
}

export const ZypperRepository: Schema.Schema<ZypperRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    baseUrl: Schema.optional(Schema.String),
    gpgKeys: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "ZypperRepository" });

export interface GooRepository {
  /** Required. The url of the repository. */
  url?: string;
  /** Required. The name of the repository. */
  name?: string;
}

export const GooRepository: Schema.Schema<GooRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GooRepository" });

export interface PackageRepository {
  /** A Yum Repository. */
  yum?: YumRepository;
  /** An Apt Repository. */
  apt?: AptRepository;
  /** A Zypper Repository. */
  zypper?: ZypperRepository;
  /** A Goo Repository. */
  goo?: GooRepository;
}

export const PackageRepository: Schema.Schema<PackageRepository> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    yum: Schema.optional(YumRepository),
    apt: Schema.optional(AptRepository),
    zypper: Schema.optional(ZypperRepository),
    goo: Schema.optional(GooRepository),
  }).annotate({ identifier: "PackageRepository" });

export interface EffectiveGuestPolicySourcedPackageRepository {
  /** Name of the guest policy providing this config. */
  source?: string;
  /** A software package repository to configure on the VM instance. */
  packageRepository?: PackageRepository;
}

export const EffectiveGuestPolicySourcedPackageRepository: Schema.Schema<EffectiveGuestPolicySourcedPackageRepository> =
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

export const EffectiveGuestPolicySourcedSoftwareRecipe: Schema.Schema<EffectiveGuestPolicySourcedSoftwareRecipe> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    softwareRecipe: Schema.optional(SoftwareRecipe),
  }).annotate({ identifier: "EffectiveGuestPolicySourcedSoftwareRecipe" });

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
  /** The desired_state the agent should maintain for this package. The default is to ensure the package is installed. */
  desiredState?:
    | "DESIRED_STATE_UNSPECIFIED"
    | "INSTALLED"
    | "UPDATED"
    | "REMOVED"
    | (string & {});
  /** Required. The name of the package. A package is uniquely identified for conflict validation by checking the package name and the manager(s) that the package targets. */
  name?: string;
}

export const Package: Schema.Schema<Package> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    manager: Schema.optional(Schema.String),
    desiredState: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Package" });

export interface EffectiveGuestPolicySourcedPackage {
  /** Name of the guest policy providing this config. */
  source?: string;
  /** A software package to configure on the VM instance. */
  package?: Package;
}

export const EffectiveGuestPolicySourcedPackage: Schema.Schema<EffectiveGuestPolicySourcedPackage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(Schema.String),
    package: Schema.optional(Package),
  }).annotate({ identifier: "EffectiveGuestPolicySourcedPackage" });

export interface EffectiveGuestPolicy {
  /** List of package repository configurations assigned to the VM instance. */
  packageRepositories?: ReadonlyArray<EffectiveGuestPolicySourcedPackageRepository>;
  /** List of recipes assigned to the VM instance. */
  softwareRecipes?: ReadonlyArray<EffectiveGuestPolicySourcedSoftwareRecipe>;
  /** List of package configurations assigned to the VM instance. */
  packages?: ReadonlyArray<EffectiveGuestPolicySourcedPackage>;
}

export const EffectiveGuestPolicy: Schema.Schema<EffectiveGuestPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packageRepositories: Schema.optional(
      Schema.Array(EffectiveGuestPolicySourcedPackageRepository),
    ),
    softwareRecipes: Schema.optional(
      Schema.Array(EffectiveGuestPolicySourcedSoftwareRecipe),
    ),
    packages: Schema.optional(Schema.Array(EffectiveGuestPolicySourcedPackage)),
  }).annotate({ identifier: "EffectiveGuestPolicy" });

export interface AssignmentOsType {
  /** Targets VM instances with OS Inventory enabled and having the following OS architecture. */
  osArchitecture?: string;
  /** Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows". */
  osShortName?: string;
  /** Targets VM instances with OS Inventory enabled and having the following following OS version. */
  osVersion?: string;
}

export const AssignmentOsType: Schema.Schema<AssignmentOsType> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osArchitecture: Schema.optional(Schema.String),
    osShortName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "AssignmentOsType" });

export interface Assignment {
  /** Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included. */
  osTypes?: ReadonlyArray<AssignmentOsType>;
  /** Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example "env=prod or env=staging". */
  groupLabels?: ReadonlyArray<AssignmentGroupLabel>;
  /** Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone. */
  zones?: ReadonlyArray<string>;
  /** Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix="prod-". Only supported for project-level policies. */
  instanceNamePrefixes?: ReadonlyArray<string>;
  /** Targets any of the instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`. Instance targeting is uncommon and is supported to facilitate the management of changes by the instance or to target specific VM instances for development and testing. Only supported for project-level policies and must reference instances within this project. */
  instances?: ReadonlyArray<string>;
}

export const Assignment: Schema.Schema<Assignment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osTypes: Schema.optional(Schema.Array(AssignmentOsType)),
    groupLabels: Schema.optional(Schema.Array(AssignmentGroupLabel)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    instanceNamePrefixes: Schema.optional(Schema.Array(Schema.String)),
    instances: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Assignment" });

export interface PatchJobInstanceDetailsSummary {
  /** Number of instances that are applying patches. */
  applyingPatchesInstanceCount?: string;
  /** Number of instances pending patch job. */
  pendingInstanceCount?: string;
  /** Number of instances that are running the pre-patch step. */
  prePatchStepInstanceCount?: string;
  /** Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service. */
  noAgentDetectedInstanceCount?: string;
  /** Number of instances rebooting. */
  rebootingInstanceCount?: string;
  /** Number of instances notified about patch job. */
  notifiedInstanceCount?: string;
  /** Number of instances that are downloading patches. */
  downloadingPatchesInstanceCount?: string;
  /** Number of instances that exceeded the time out while applying the patch. */
  timedOutInstanceCount?: string;
  /** Number of instances that have started. */
  startedInstanceCount?: string;
  /** Number of instances that are inactive. */
  inactiveInstanceCount?: string;
  /** Number of instances that require reboot. */
  succeededRebootRequiredInstanceCount?: string;
  /** Number of instances that failed. */
  failedInstanceCount?: string;
  /** Number of instances that were skipped during patching. */
  skippedInstanceCount?: string;
  /** Number of instances that have acked and will start shortly. */
  ackedInstanceCount?: string;
  /** Number of instances that are running the post-patch step. */
  postPatchStepInstanceCount?: string;
  /** Number of instances that have completed successfully. */
  succeededInstanceCount?: string;
}

export const PatchJobInstanceDetailsSummary: Schema.Schema<PatchJobInstanceDetailsSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    applyingPatchesInstanceCount: Schema.optional(Schema.String),
    pendingInstanceCount: Schema.optional(Schema.String),
    prePatchStepInstanceCount: Schema.optional(Schema.String),
    noAgentDetectedInstanceCount: Schema.optional(Schema.String),
    rebootingInstanceCount: Schema.optional(Schema.String),
    notifiedInstanceCount: Schema.optional(Schema.String),
    downloadingPatchesInstanceCount: Schema.optional(Schema.String),
    timedOutInstanceCount: Schema.optional(Schema.String),
    startedInstanceCount: Schema.optional(Schema.String),
    inactiveInstanceCount: Schema.optional(Schema.String),
    succeededRebootRequiredInstanceCount: Schema.optional(Schema.String),
    failedInstanceCount: Schema.optional(Schema.String),
    skippedInstanceCount: Schema.optional(Schema.String),
    ackedInstanceCount: Schema.optional(Schema.String),
    postPatchStepInstanceCount: Schema.optional(Schema.String),
    succeededInstanceCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "PatchJobInstanceDetailsSummary" });

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

export const TimeOfDay: Schema.Schema<TimeOfDay> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
    seconds: Schema.optional(Schema.Number),
    nanos: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeOfDay" });

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

export const WeeklySchedule: Schema.Schema<WeeklySchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dayOfWeek: Schema.optional(Schema.String),
  }).annotate({ identifier: "WeeklySchedule" });

export interface RecurringSchedule {
  /** Output only. The time the last patch job ran successfully. */
  lastExecuteTime?: string;
  /** Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone. */
  timeZone?: TimeZone;
  /** Required. Time of the day to run a recurring deployment. */
  timeOfDay?: TimeOfDay;
  /** Output only. The time the next patch job is scheduled to run. */
  nextExecuteTime?: string;
  /** Required. The frequency unit of this recurring schedule. */
  frequency?:
    | "FREQUENCY_UNSPECIFIED"
    | "WEEKLY"
    | "MONTHLY"
    | "DAILY"
    | (string & {});
  /** Required. Schedule with weekly executions. */
  weekly?: WeeklySchedule;
  /** Required. Schedule with monthly executions. */
  monthly?: MonthlySchedule;
  /** Optional. The end time at which a recurring patch deployment schedule is no longer active. */
  endTime?: string;
  /** Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment. */
  startTime?: string;
}

export const RecurringSchedule: Schema.Schema<RecurringSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lastExecuteTime: Schema.optional(Schema.String),
    timeZone: Schema.optional(TimeZone),
    timeOfDay: Schema.optional(TimeOfDay),
    nextExecuteTime: Schema.optional(Schema.String),
    frequency: Schema.optional(Schema.String),
    weekly: Schema.optional(WeeklySchedule),
    monthly: Schema.optional(MonthlySchedule),
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RecurringSchedule" });

export interface GooSettings {}

export const GooSettings: Schema.Schema<GooSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GooSettings",
  });

export interface PatchInstanceFilterGroupLabel {
  /** Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. */
  labels?: Record<string, string>;
}

export const PatchInstanceFilterGroupLabel: Schema.Schema<PatchInstanceFilterGroupLabel> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "PatchInstanceFilterGroupLabel" });

export interface PatchInstanceFilter {
  /** Targets any of the VM instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`, `projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`, or `https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]` */
  instances?: ReadonlyArray<string>;
  /** Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. */
  zones?: ReadonlyArray<string>;
  /** Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix="prod-". */
  instanceNamePrefixes?: ReadonlyArray<string>;
  /** Target all VM instances in the project. If true, no other criteria is permitted. */
  all?: boolean;
  /** Targets VM instances matching at least one of these label sets. This allows targeting of disparate groups, for example "env=prod or env=staging". */
  groupLabels?: ReadonlyArray<PatchInstanceFilterGroupLabel>;
}

export const PatchInstanceFilter: Schema.Schema<PatchInstanceFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instances: Schema.optional(Schema.Array(Schema.String)),
    zones: Schema.optional(Schema.Array(Schema.String)),
    instanceNamePrefixes: Schema.optional(Schema.Array(Schema.String)),
    all: Schema.optional(Schema.Boolean),
    groupLabels: Schema.optional(Schema.Array(PatchInstanceFilterGroupLabel)),
  }).annotate({ identifier: "PatchInstanceFilter" });

export interface GcsObject {
  /** Required. Bucket of the Google Cloud Storage object. */
  bucket?: string;
  /** Required. Name of the Google Cloud Storage object. */
  object?: string;
  /** Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  generationNumber?: string;
}

export const GcsObject: Schema.Schema<GcsObject> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bucket: Schema.optional(Schema.String),
    object: Schema.optional(Schema.String),
    generationNumber: Schema.optional(Schema.String),
  }).annotate({ identifier: "GcsObject" });

export interface ExecStepConfig {
  /** Defaults to [0]. A list of possible return values that the execution can return to indicate a success. */
  allowedSuccessCodes?: ReadonlyArray<number>;
  /** A Google Cloud Storage object containing the executable. */
  gcsObject?: GcsObject;
  /** An absolute path to the executable on the VM. */
  localPath?: string;
  /** The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)). */
  interpreter?:
    | "INTERPRETER_UNSPECIFIED"
    | "NONE"
    | "SHELL"
    | "POWERSHELL"
    | (string & {});
}

export const ExecStepConfig: Schema.Schema<ExecStepConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedSuccessCodes: Schema.optional(Schema.Array(Schema.Number)),
    gcsObject: Schema.optional(GcsObject),
    localPath: Schema.optional(Schema.String),
    interpreter: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecStepConfig" });

export interface ExecStep {
  /** The ExecStepConfig for all Linux VMs targeted by the PatchJob. */
  linuxExecStepConfig?: ExecStepConfig;
  /** The ExecStepConfig for all Windows VMs targeted by the PatchJob. */
  windowsExecStepConfig?: ExecStepConfig;
}

export const ExecStep: Schema.Schema<ExecStep> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    linuxExecStepConfig: Schema.optional(ExecStepConfig),
    windowsExecStepConfig: Schema.optional(ExecStepConfig),
  }).annotate({ identifier: "ExecStep" });

export interface AptSettings {
  /** By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead. */
  type?: "TYPE_UNSPECIFIED" | "DIST" | "UPGRADE" | (string & {});
  /** List of packages to exclude from update. These packages will be excluded */
  excludes?: ReadonlyArray<string>;
  /** An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields. */
  exclusivePackages?: ReadonlyArray<string>;
}

export const AptSettings: Schema.Schema<AptSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    excludes: Schema.optional(Schema.Array(Schema.String)),
    exclusivePackages: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AptSettings" });

export interface YumSettings {
  /** List of packages to exclude from update. These packages are excluded by using the yum `--exclude` flag. */
  excludes?: ReadonlyArray<string>;
  /** An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields. */
  exclusivePackages?: ReadonlyArray<string>;
  /** Adds the `--security` flag to `yum update`. Not supported on all platforms. */
  security?: boolean;
  /** Will cause patch to run `yum update-minimal` instead. */
  minimal?: boolean;
}

export const YumSettings: Schema.Schema<YumSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludes: Schema.optional(Schema.Array(Schema.String)),
    exclusivePackages: Schema.optional(Schema.Array(Schema.String)),
    security: Schema.optional(Schema.Boolean),
    minimal: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "YumSettings" });

export interface ZypperSettings {
  /** Adds the `--with-update` flag, to `zypper patch`. */
  withUpdate?: boolean;
  /** List of patches to exclude from update. */
  excludes?: ReadonlyArray<string>;
  /** Adds the `--with-optional` flag to `zypper patch`. */
  withOptional?: boolean;
  /** Install only patches with these categories. Common categories include security, recommended, and feature. */
  categories?: ReadonlyArray<string>;
  /** An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command. This field must not be used with any other patch configuration fields. */
  exclusivePatches?: ReadonlyArray<string>;
  /** Install only patches with these severities. Common severities include critical, important, moderate, and low. */
  severities?: ReadonlyArray<string>;
}

export const ZypperSettings: Schema.Schema<ZypperSettings> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    withUpdate: Schema.optional(Schema.Boolean),
    excludes: Schema.optional(Schema.Array(Schema.String)),
    withOptional: Schema.optional(Schema.Boolean),
    categories: Schema.optional(Schema.Array(Schema.String)),
    exclusivePatches: Schema.optional(Schema.Array(Schema.String)),
    severities: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ZypperSettings" });

export interface PatchConfig {
  /** The `ExecStep` to run after the patch update. */
  postStep?: ExecStep;
  /** Goo update settings. Use this setting to override the default `goo` patch rules. */
  goo?: GooSettings;
  /** Post-patch reboot settings. */
  rebootConfig?:
    | "REBOOT_CONFIG_UNSPECIFIED"
    | "DEFAULT"
    | "ALWAYS"
    | "NEVER"
    | (string & {});
  /** Apt update settings. Use this setting to override the default `apt` patch rules. */
  apt?: AptSettings;
  /** Allows the patch job to run on Managed instance groups (MIGs). */
  migInstancesAllowed?: boolean;
  /** Yum update settings. Use this setting to override the default `yum` patch rules. */
  yum?: YumSettings;
  /** The `ExecStep` to run before the patch update. */
  preStep?: ExecStep;
  /** Windows update settings. Use this override the default windows patch rules. */
  windowsUpdate?: WindowsUpdateSettings;
  /** Zypper update settings. Use this setting to override the default `zypper` patch rules. */
  zypper?: ZypperSettings;
  /** Optional. Enables enhanced reporting for the patch job: 1. The patch job skips instances that cannot be patched and reports them as `SKIPPED`. An instance cannot be patched for two reasons: 1. The instance runs Container-Optimized OS (COS), which cannot be patched. 2. The instance is part of a managed instance group (MIG), and patching MIG instances is disabled in the patch job's configuration (PatchConfig.migInstancesAllowed is `false`). 2. The patch job is reported as `SUCCEEDED` if it completes without errors, even if some instances are `SKIPPED`. 3. The patch job is reported as `COMPLETED_WITH_INACTIVE_VMS` if it completes without errors, but does not patch instances that are `INACTIVE`. */
  skipUnpatchableVms?: boolean;
}

export const PatchConfig: Schema.Schema<PatchConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    postStep: Schema.optional(ExecStep),
    goo: Schema.optional(GooSettings),
    rebootConfig: Schema.optional(Schema.String),
    apt: Schema.optional(AptSettings),
    migInstancesAllowed: Schema.optional(Schema.Boolean),
    yum: Schema.optional(YumSettings),
    preStep: Schema.optional(ExecStep),
    windowsUpdate: Schema.optional(WindowsUpdateSettings),
    zypper: Schema.optional(ZypperSettings),
    skipUnpatchableVms: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PatchConfig" });

export interface ExecutePatchJobRequest {
  /** Display name for this patch job. This does not have to be unique. */
  displayName?: string;
  /** Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels. */
  instanceFilter?: PatchInstanceFilter;
  /** Rollout strategy of the patch job. */
  rollout?: PatchRollout;
  /** Patch configuration being applied. If omitted, instances are patched using the default configurations. */
  patchConfig?: PatchConfig;
  /** If this patch is a dry-run only, instances are contacted but will do nothing. */
  dryRun?: boolean;
  /** Duration of the patch job. After the duration ends, the patch job times out. */
  duration?: string;
  /** Description of the patch job. Length of the description is limited to 1024 characters. */
  description?: string;
}

export const ExecutePatchJobRequest: Schema.Schema<ExecutePatchJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    instanceFilter: Schema.optional(PatchInstanceFilter),
    rollout: Schema.optional(PatchRollout),
    patchConfig: Schema.optional(PatchConfig),
    dryRun: Schema.optional(Schema.Boolean),
    duration: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutePatchJobRequest" });

export interface GuestPolicy {
  /** The software packages to be managed by this policy. */
  packages?: ReadonlyArray<Package>;
  /** The etag for this guest policy. If this is provided on update, it must match the server's etag. */
  etag?: string;
  /** Description of the guest policy. Length of the description is limited to 1024 characters. */
  description?: string;
  /** Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. */
  name?: string;
  /** Output only. Time this guest policy was created. */
  createTime?: string;
  /** A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available. */
  packageRepositories?: ReadonlyArray<PackageRepository>;
  /** Output only. Last time this guest policy was updated. */
  updateTime?: string;
  /** Required. Specifies the VM instances that are assigned to this policy. This allows you to target sets or groups of VM instances by different parameters such as labels, names, OS, or zones. If left empty, all VM instances underneath this policy are targeted. At the same level in the resource hierarchy (that is within a project), the service prevents the creation of multiple policies that conflict with each other. For more information, see how the service [handles assignment conflicts](/compute/docs/os-config-management/create-guest-policy#handle-conflicts). */
  assignment?: Assignment;
  /** A list of Recipes to install on the VM instance. */
  recipes?: ReadonlyArray<SoftwareRecipe>;
}

export const GuestPolicy: Schema.Schema<GuestPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    packages: Schema.optional(Schema.Array(Package)),
    etag: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    packageRepositories: Schema.optional(Schema.Array(PackageRepository)),
    updateTime: Schema.optional(Schema.String),
    assignment: Schema.optional(Assignment),
    recipes: Schema.optional(Schema.Array(SoftwareRecipe)),
  }).annotate({ identifier: "GuestPolicy" });

export interface LookupEffectiveGuestPolicyRequest {
  /** Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. */
  osArchitecture?: string;
  /** Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. */
  osShortName?: string;
  /** Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance. */
  osVersion?: string;
}

export const LookupEffectiveGuestPolicyRequest: Schema.Schema<LookupEffectiveGuestPolicyRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    osArchitecture: Schema.optional(Schema.String),
    osShortName: Schema.optional(Schema.String),
    osVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "LookupEffectiveGuestPolicyRequest" });

export interface CancelPatchJobRequest {}

export const CancelPatchJobRequest: Schema.Schema<CancelPatchJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelPatchJobRequest",
  });

export interface PatchJob {
  /** Description of the patch job. Length of the description is limited to 1024 characters. */
  description?: string;
  /** Unique identifier for this patch job in the form `projects/* /patchJobs/*` */
  name?: string;
  /** Time this patch job was created. */
  createTime?: string;
  /** Instances to patch. */
  instanceFilter?: PatchInstanceFilter;
  /** Display name for this patch job. This is not a unique identifier. */
  displayName?: string;
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
  /** Rollout strategy being applied. */
  rollout?: PatchRollout;
  /** Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete. */
  percentComplete?: number;
  /** Patch configuration being applied. */
  patchConfig?: PatchConfig;
  /** Duration of the patch job. After the duration ends, the patch job times out. */
  duration?: string;
  /** Output only. Name of the patch deployment that created this patch job. */
  patchDeployment?: string;
  /** If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance. */
  dryRun?: boolean;
  /** If this patch job failed, this message provides information about the failure. */
  errorMessage?: string;
  /** Last time this patch job was updated. */
  updateTime?: string;
}

export const PatchJob: Schema.Schema<PatchJob> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    instanceFilter: Schema.optional(PatchInstanceFilter),
    displayName: Schema.optional(Schema.String),
    instanceDetailsSummary: Schema.optional(PatchJobInstanceDetailsSummary),
    state: Schema.optional(Schema.String),
    rollout: Schema.optional(PatchRollout),
    percentComplete: Schema.optional(Schema.Number),
    patchConfig: Schema.optional(PatchConfig),
    duration: Schema.optional(Schema.String),
    patchDeployment: Schema.optional(Schema.String),
    dryRun: Schema.optional(Schema.Boolean),
    errorMessage: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "PatchJob" });

export interface ListPatchJobsResponse {
  /** The list of patch jobs. */
  patchJobs?: ReadonlyArray<PatchJob>;
  /** A pagination token that can be used to get the next page of results. */
  nextPageToken?: string;
}

export const ListPatchJobsResponse: Schema.Schema<ListPatchJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchJobs: Schema.optional(Schema.Array(PatchJob)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPatchJobsResponse" });

export interface OSPolicyAssignmentOperationMetadata {
  /** State of the rollout */
  rolloutState?:
    | "ROLLOUT_STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "CANCELLING"
    | "CANCELLED"
    | "SUCCEEDED"
    | (string & {});
  /** Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
  osPolicyAssignment?: string;
  /** The OS policy assignment API method. */
  apiMethod?:
    | "API_METHOD_UNSPECIFIED"
    | "CREATE"
    | "UPDATE"
    | "DELETE"
    | (string & {});
  /** Rollout start time */
  rolloutStartTime?: string;
  /** Rollout update time */
  rolloutUpdateTime?: string;
}

export const OSPolicyAssignmentOperationMetadata: Schema.Schema<OSPolicyAssignmentOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rolloutState: Schema.optional(Schema.String),
    osPolicyAssignment: Schema.optional(Schema.String),
    apiMethod: Schema.optional(Schema.String),
    rolloutStartTime: Schema.optional(Schema.String),
    rolloutUpdateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OSPolicyAssignmentOperationMetadata" });

export interface OneTimeSchedule {
  /** Required. The desired patch job execution time. */
  executeTime?: string;
}

export const OneTimeSchedule: Schema.Schema<OneTimeSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executeTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "OneTimeSchedule" });

export interface PatchDeployment {
  /** Optional. Patch configuration that is applied. */
  patchConfig?: PatchConfig;
  /** Optional. Description of the patch deployment. Length of the description is limited to 1024 characters. */
  description?: string;
  /** Required. Schedule a one-time execution. */
  oneTimeSchedule?: OneTimeSchedule;
  /** Optional. Duration of the patch. After the duration ends, the patch times out. */
  duration?: string;
  /** Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment. */
  name?: string;
  /** Required. VM instances to patch. */
  instanceFilter?: PatchInstanceFilter;
  /** Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  createTime?: string;
  /** Required. Schedule recurring executions. */
  recurringSchedule?: RecurringSchedule;
  /** Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  lastExecuteTime?: string;
  /** Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
  updateTime?: string;
  /** Optional. Rollout strategy of the patch job. */
  rollout?: PatchRollout;
  /** Output only. Current state of the patch deployment. */
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "PAUSED" | (string & {});
}

export const PatchDeployment: Schema.Schema<PatchDeployment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchConfig: Schema.optional(PatchConfig),
    description: Schema.optional(Schema.String),
    oneTimeSchedule: Schema.optional(OneTimeSchedule),
    duration: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    instanceFilter: Schema.optional(PatchInstanceFilter),
    createTime: Schema.optional(Schema.String),
    recurringSchedule: Schema.optional(RecurringSchedule),
    lastExecuteTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    rollout: Schema.optional(PatchRollout),
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "PatchDeployment" });

export interface ListPatchDeploymentsResponse {
  /** The list of patch deployments. */
  patchDeployments?: ReadonlyArray<PatchDeployment>;
  /** A pagination token that can be used to get the next page of patch deployments. */
  nextPageToken?: string;
}

export const ListPatchDeploymentsResponse: Schema.Schema<ListPatchDeploymentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchDeployments: Schema.optional(Schema.Array(PatchDeployment)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPatchDeploymentsResponse" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface PausePatchDeploymentRequest {}

export const PausePatchDeploymentRequest: Schema.Schema<PausePatchDeploymentRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "PausePatchDeploymentRequest",
  });

export interface GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata {
  /** Rollout start time */
  rolloutStartTime?: string;
  /** Rollout update time */
  rolloutUpdateTime?: string;
  /** Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
  osPolicyAssignment?: string;
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
}

export const GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata: Schema.Schema<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rolloutStartTime: Schema.optional(Schema.String),
    rolloutUpdateTime: Schema.optional(Schema.String),
    osPolicyAssignment: Schema.optional(Schema.String),
    apiMethod: Schema.optional(Schema.String),
    rolloutState: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata",
  });

export interface GoogleCloudOsconfigV2beta__OperationMetadata {
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
}

export const GoogleCloudOsconfigV2beta__OperationMetadata: Schema.Schema<GoogleCloudOsconfigV2beta__OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudOsconfigV2beta__OperationMetadata" });

export interface ListGuestPoliciesResponse {
  /** The list of GuestPolicies. */
  guestPolicies?: ReadonlyArray<GuestPolicy>;
  /** A pagination token that can be used to get the next page of guest policies. */
  nextPageToken?: string;
}

export const ListGuestPoliciesResponse: Schema.Schema<ListGuestPoliciesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guestPolicies: Schema.optional(Schema.Array(GuestPolicy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListGuestPoliciesResponse" });

export interface ListPatchJobInstanceDetailsResponse {
  /** A list of instance status. */
  patchJobInstanceDetails?: ReadonlyArray<PatchJobInstanceDetails>;
  /** A pagination token that can be used to get the next page of results. */
  nextPageToken?: string;
}

export const ListPatchJobInstanceDetailsResponse: Schema.Schema<ListPatchJobInstanceDetailsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    patchJobInstanceDetails: Schema.optional(
      Schema.Array(PatchJobInstanceDetails),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListPatchJobInstanceDetailsResponse" });

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
  ) as unknown as Schema.Schema<CancelProjectsPatchJobsRequest>;

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

export interface ListProjectsPatchJobsRequest {
  /** A pagination token returned from a previous call that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. In the form of `projects/*` */
  parent: string;
  /** The maximum number of instance status to return. */
  pageSize?: number;
  /** If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field. */
  filter?: string;
}

export const ListProjectsPatchJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/patchJobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsPatchJobsRequest>;

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
  ) as unknown as Schema.Schema<ExecuteProjectsPatchJobsRequest>;

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
  ) as unknown as Schema.Schema<GetProjectsPatchJobsRequest>;

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

export interface ListProjectsPatchJobsInstanceDetailsRequest {
  /** A pagination token returned from a previous call that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The parent for the instances are in the form of `projects/* /patchJobs/*`. */
  parent: string;
  /** The maximum number of instance details records to return. Default is 100. */
  pageSize?: number;
  /** A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`. */
  filter?: string;
}

export const ListProjectsPatchJobsInstanceDetailsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/instanceDetails" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsPatchJobsInstanceDetailsRequest>;

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
  ) as unknown as Schema.Schema<PauseProjectsPatchDeploymentsRequest>;

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

export interface ListProjectsPatchDeploymentsRequest {
  /** Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from. */
  pageToken?: string;
  /** Required. The resource name of the parent in the form `projects/*`. */
  parent: string;
  /** Optional. The maximum number of patch deployments to return. Default is 100. */
  pageSize?: number;
}

export const ListProjectsPatchDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/patchDeployments" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsPatchDeploymentsRequest>;

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
  ) as unknown as Schema.Schema<GetProjectsPatchDeploymentsRequest>;

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
  ) as unknown as Schema.Schema<CreateProjectsPatchDeploymentsRequest>;

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
  ) as unknown as Schema.Schema<DeleteProjectsPatchDeploymentsRequest>;

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
  ) as unknown as Schema.Schema<ResumeProjectsPatchDeploymentsRequest>;

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

export interface PatchProjectsPatchDeploymentsRequest {
  /** Optional. Field mask that controls which fields of the patch deployment should be updated. */
  updateMask?: string;
  /** Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment. */
  name: string;
  /** Request body */
  body?: PatchDeployment;
}

export const PatchProjectsPatchDeploymentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PatchDeployment).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsPatchDeploymentsRequest>;

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

export interface PatchProjectsGuestPoliciesRequest {
  /** Field mask that controls which fields of the guest policy should be updated. */
  updateMask?: string;
  /** Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. */
  name: string;
  /** Request body */
  body?: GuestPolicy;
}

export const PatchProjectsGuestPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GuestPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1beta/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsGuestPoliciesRequest>;

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

export interface ListProjectsGuestPoliciesRequest {
  /** Required. The resource name of the parent using one of the following forms: `projects/{project_number}`. */
  parent: string;
  /** The maximum number of guest policies to return. */
  pageSize?: number;
  /** A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from. */
  pageToken?: string;
}

export const ListProjectsGuestPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1beta/{+parent}/guestPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsGuestPoliciesRequest>;

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
  ) as unknown as Schema.Schema<CreateProjectsGuestPoliciesRequest>;

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
  ) as unknown as Schema.Schema<DeleteProjectsGuestPoliciesRequest>;

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
  ) as unknown as Schema.Schema<GetProjectsGuestPoliciesRequest>;

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
  ) as unknown as Schema.Schema<LookupEffectiveGuestPolicyProjectsZonesInstancesRequest>;

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
