// ==========================================================================
// Batch API (batch v1)
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
  name: "batch",
  version: "v1",
  rootUrl: "https://batch.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface ActionCondition {
  /** Exit codes of a task execution. If there are more than 1 exit codes, when task executes with any of the exit code in the list, the condition is met and the action will be executed. */
  exitCodes?: ReadonlyArray<number>;
}

export const ActionCondition: Schema.Schema<ActionCondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exitCodes: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "ActionCondition" });

export interface LifecyclePolicy {
  /** Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found. */
  action?: "ACTION_UNSPECIFIED" | "RETRY_TASK" | "FAIL_TASK" | (string & {});
  /** Conditions that decide why a task failure is dealt with a specific action. */
  actionCondition?: ActionCondition;
}

export const LifecyclePolicy: Schema.Schema<LifecyclePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    action: Schema.optional(Schema.String),
    actionCondition: Schema.optional(ActionCondition),
  }).annotate({ identifier: "LifecyclePolicy" });

export interface GCS {
  /** Remote path, either a bucket name or a subdirectory of a bucket, e.g.: bucket_name, bucket_name/subdirectory/ */
  remotePath?: string;
}

export const GCS: Schema.Schema<GCS> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    remotePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GCS" });

export interface NFS {
  /** The IP address of the NFS. */
  server?: string;
  /** Remote source path exported from the NFS, e.g., "/share". */
  remotePath?: string;
}

export const NFS: Schema.Schema<NFS> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    server: Schema.optional(Schema.String),
    remotePath: Schema.optional(Schema.String),
  }).annotate({ identifier: "NFS" });

export interface Volume {
  /** The mount path for the volume, e.g. /mnt/disks/share. */
  mountPath?: string;
  /** A Google Cloud Storage (GCS) volume. */
  gcs?: GCS;
  /** Device name of an attached disk volume, which should align with a device_name specified by job.allocation_policy.instances[0].policy.disks[i].device_name or defined by the given instance template in job.allocation_policy.instances[0].instance_template. */
  deviceName?: string;
  /** A Network File System (NFS) volume. For example, a Filestore file share. */
  nfs?: NFS;
  /** Mount options vary based on the type of storage volume: * For a Cloud Storage bucket, all the mount options provided by the [`gcsfuse` tool](https://cloud.google.com/storage/docs/gcsfuse-cli) are supported. * For an existing persistent disk, all mount options provided by the [`mount` command](https://man7.org/linux/man-pages/man8/mount.8.html) except writing are supported. This is due to restrictions of [multi-writer mode](https://cloud.google.com/compute/docs/disks/sharing-disks-between-vms). * For any other disk or a Network File System (NFS), all the mount options provided by the `mount` command are supported. */
  mountOptions?: ReadonlyArray<string>;
}

export const Volume: Schema.Schema<Volume> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mountPath: Schema.optional(Schema.String),
    gcs: Schema.optional(GCS),
    deviceName: Schema.optional(Schema.String),
    nfs: Schema.optional(NFS),
    mountOptions: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "Volume" });

export interface ComputeResource {
  /** The milliCPU count. `cpuMilli` defines the amount of CPU resources per task in milliCPU units. For example, `1000` corresponds to 1 vCPU per task. If undefined, the default value is `2000`. If you also define the VM's machine type using the `machineType` in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the `instanceTemplate` in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the CPU resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time. For example, if you specify the `n2-standard-2` machine type, which has 2 vCPUs each, you are recommended to set `cpuMilli` no more than `2000`, or you are recommended to run two tasks on the same VM if you set `cpuMilli` to `1000` or less. */
  cpuMilli?: string;
  /** Memory in MiB. `memoryMib` defines the amount of memory per task in MiB units. If undefined, the default value is `2000`. If you also define the VM's machine type using the `machineType` in [InstancePolicy](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicy) field or inside the `instanceTemplate` in the [InstancePolicyOrTemplate](https://cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs#instancepolicyortemplate) field, make sure the memory resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time. For example, if you specify the `n2-standard-2` machine type, which has 8 GiB each, you are recommended to set `memoryMib` to no more than `8192`, or you are recommended to run two tasks on the same VM if you set `memoryMib` to `4096` or less. */
  memoryMib?: string;
  /** Extra boot disk size in MiB for each task. */
  bootDiskMib?: string;
}

export const ComputeResource: Schema.Schema<ComputeResource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cpuMilli: Schema.optional(Schema.String),
    memoryMib: Schema.optional(Schema.String),
    bootDiskMib: Schema.optional(Schema.String),
  }).annotate({ identifier: "ComputeResource" });

export interface Barrier {
  /** Barriers are identified by their index in runnable list. Names are not required, but if present should be an identifier. */
  name?: string;
}

export const Barrier: Schema.Schema<Barrier> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Barrier" });

export interface KMSEnvMap {
  /** The value of the cipherText response from the `encrypt` method. */
  cipherText?: string;
  /** The name of the KMS key that will be used to decrypt the cipher text. */
  keyName?: string;
}

export const KMSEnvMap: Schema.Schema<KMSEnvMap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cipherText: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "KMSEnvMap" });

export interface Environment {
  /** A map of environment variable names to values. */
  variables?: Record<string, string>;
  /** A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable. */
  secretVariables?: Record<string, string>;
  /** An encrypted JSON dictionary where the key/value pairs correspond to environment variable names and their values. */
  encryptedVariables?: KMSEnvMap;
}

export const Environment: Schema.Schema<Environment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variables: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    secretVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    encryptedVariables: Schema.optional(KMSEnvMap),
  }).annotate({ identifier: "Environment" });

export interface Container {
  /** Required for some container images. Arbitrary additional options to include in the `docker run` command when running this container—for example, `--network host`. For the `--volume` option, use the `volumes` field for the container. */
  options?: string;
  /** Required for some container images. Overrides the `ENTRYPOINT` specified in the container. */
  entrypoint?: string;
  /** Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match `--volume` option for the `docker run` command—for example, `/foo:/bar` or `/foo:/bar:ro`. If the `TaskSpec.Volumes` field is specified but this field is not, Batch will mount each volume from the host machine to the container with the same mount path by default. In this case, the default mount option for containers will be read-only (`ro`) for existing persistent disks and read-write (`rw`) for other volume types, regardless of the original mount options specified in `TaskSpec.Volumes`. If you need different mount settings, you can explicitly configure them in this field. */
  volumes?: ReadonlyArray<string>;
  /** If set to true, external network access to and from container will be blocked, containers that are with block_external_network as true can still communicate with each other, network cannot be specified in the `container.options` field. */
  blockExternalNetwork?: boolean;
  /** Required for some container images. Overrides the `CMD` specified in the container. If there is an `ENTRYPOINT` (either in the container image or with the `entrypoint` field below) then these commands are appended as arguments to the `ENTRYPOINT`. */
  commands?: ReadonlyArray<string>;
  /** Required. The URI to pull the container image from. */
  imageUri?: string;
  /** Optional. If set to true, this container runnable uses Image streaming. Use Image streaming to allow the runnable to initialize without waiting for the entire container image to download, which can significantly reduce startup time for large container images. When `enableImageStreaming` is set to true, the container runtime is [containerd](https://containerd.io/) instead of Docker. Additionally, this container runnable only supports the following `container` subfields: `imageUri`, `commands[]`, `entrypoint`, and `volumes[]`; any other `container` subfields are ignored. For more information about the requirements and limitations for using Image streaming with Batch, see the [`image-streaming` sample on GitHub](https://github.com/GoogleCloudPlatform/batch-samples/tree/main/api-samples/image-streaming). */
  enableImageStreaming?: boolean;
  /** Required if the container image is from a private Docker registry. The username to login to the Docker registry that contains the image. You can either specify the username directly by using plain text or specify an encrypted username by using a Secret Manager secret: `projects/* /secrets/* /versions/*`. However, using a secret is recommended for enhanced security. Caution: If you specify the username using plain text, you risk the username being exposed to any users who can view the job or its logs. To avoid this risk, specify a secret that contains the username instead. Learn more about [Secret Manager](https://cloud.google.com/secret-manager/docs/) and [using Secret Manager with Batch](https://cloud.google.com/batch/docs/create-run-job-secret-manager). */
  username?: string;
  /** Required if the container image is from a private Docker registry. The password to login to the Docker registry that contains the image. For security, it is strongly recommended to specify an encrypted password by using a Secret Manager secret: `projects/* /secrets/* /versions/*`. Warning: If you specify the password using plain text, you risk the password being exposed to any users who can view the job or its logs. To avoid this risk, specify a secret that contains the password instead. Learn more about [Secret Manager](https://cloud.google.com/secret-manager/docs/) and [using Secret Manager with Batch](https://cloud.google.com/batch/docs/create-run-job-secret-manager). */
  password?: string;
}

export const Container: Schema.Schema<Container> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(Schema.String),
    entrypoint: Schema.optional(Schema.String),
    volumes: Schema.optional(Schema.Array(Schema.String)),
    blockExternalNetwork: Schema.optional(Schema.Boolean),
    commands: Schema.optional(Schema.Array(Schema.String)),
    imageUri: Schema.optional(Schema.String),
    enableImageStreaming: Schema.optional(Schema.Boolean),
    username: Schema.optional(Schema.String),
    password: Schema.optional(Schema.String),
  }).annotate({ identifier: "Container" });

export interface Script {
  /** The path to a script file that is accessible from the host VM(s). Unless the script file supports the default `#!/bin/sh` shell interpreter, you must specify an interpreter by including a [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix) as the first line of the file. For example, to execute the script using bash, include `#!/bin/bash` as the first line of the file. Alternatively, to execute the script using Python3, include `#!/usr/bin/env python3` as the first line of the file. */
  path?: string;
  /** The text for a script. Unless the script text supports the default `#!/bin/sh` shell interpreter, you must specify an interpreter by including a [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix) at the beginning of the text. For example, to execute the script using bash, include `#!/bin/bash\n` at the beginning of the text. Alternatively, to execute the script using Python3, include `#!/usr/bin/env python3\n` at the beginning of the text. */
  text?: string;
}

export const Script: Schema.Schema<Script> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "Script" });

export interface Runnable {
  /** Optional. DisplayName is an optional field that can be provided by the caller. If provided, it will be used in logs and other outputs to identify the script, making it easier for users to understand the logs. If not provided the index of the runnable will be used for outputs. */
  displayName?: string;
  /** Normally, a runnable that doesn't exit causes its task to fail. However, you can set this field to `true` to configure a background runnable. Background runnables are allowed continue running in the background while the task executes subsequent runnables. For example, background runnables are useful for providing services to other runnables or providing debugging-support tools like SSH servers. Specifically, background runnables are killed automatically (if they have not already exited) a short time after all foreground runnables have completed. Even though this is likely to result in a non-zero exit status for the background runnable, these automatic kills are not treated as task failures. */
  background?: boolean;
  /** By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables. */
  alwaysRun?: boolean;
  /** Timeout for this Runnable. */
  timeout?: string;
  /** Barrier runnable. */
  barrier?: Barrier;
  /** Environment variables for this Runnable (overrides variables set for the whole Task or TaskGroup). */
  environment?: Environment;
  /** Container runnable. */
  container?: Container;
  /** Script runnable. */
  script?: Script;
  /** Normally, a runnable that returns a non-zero exit status fails and causes the task to fail. However, you can set this field to `true` to allow the task to continue executing its other runnables even if this runnable fails. */
  ignoreExitStatus?: boolean;
  /** Labels for this Runnable. */
  labels?: Record<string, string>;
}

export const Runnable: Schema.Schema<Runnable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    background: Schema.optional(Schema.Boolean),
    alwaysRun: Schema.optional(Schema.Boolean),
    timeout: Schema.optional(Schema.String),
    barrier: Schema.optional(Barrier),
    environment: Schema.optional(Environment),
    container: Schema.optional(Container),
    script: Schema.optional(Script),
    ignoreExitStatus: Schema.optional(Schema.Boolean),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Runnable" });

export interface TaskSpec {
  /** Lifecycle management schema when any task in a task group is failed. Currently we only support one lifecycle policy. When the lifecycle policy condition is met, the action in the policy will execute. If task execution result does not meet with the defined lifecycle policy, we consider it as the default policy. Default policy means if the exit code is 0, exit task. If task ends with non-zero exit code, retry the task with max_retry_count. */
  lifecyclePolicies?: ReadonlyArray<LifecyclePolicy>;
  /** Volumes to mount before running Tasks using this TaskSpec. */
  volumes?: ReadonlyArray<Volume>;
  /** ComputeResource requirements. */
  computeResource?: ComputeResource;
  /** Required. The sequence of one or more runnables (executable scripts, executable containers, and/or barriers) for each task in this task group to run. Each task runs this list of runnables in order. For a task to succeed, all of its script and container runnables each must meet at least one of the following conditions: + The runnable exited with a zero status. + The runnable didn't finish, but you enabled its `background` subfield. + The runnable exited with a non-zero status, but you enabled its `ignore_exit_status` subfield. */
  runnables?: ReadonlyArray<Runnable>;
  /** Maximum number of retries on failures. The default, 0, which means never retry. The valid value range is [0, 10]. */
  maxRetryCount?: number;
  /** Environment variables to set before running the Task. */
  environment?: Environment;
  /** Maximum duration the task should run before being automatically retried (if enabled) or automatically failed. Format the value of this field as a time limit in seconds followed by `s`—for example, `3600s` for 1 hour. The field accepts any value between 0 and the maximum listed for the `Duration` field type at https://protobuf.dev/reference/protobuf/google.protobuf/#duration; however, the actual maximum run time for a job will be limited to the maximum run time for a job listed at https://cloud.google.com/batch/quotas#max-job-duration. */
  maxRunDuration?: string;
  /** Deprecated: please use environment(non-plural) instead. */
  environments?: Record<string, string>;
}

export const TaskSpec: Schema.Schema<TaskSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lifecyclePolicies: Schema.optional(Schema.Array(LifecyclePolicy)),
    volumes: Schema.optional(Schema.Array(Volume)),
    computeResource: Schema.optional(ComputeResource),
    runnables: Schema.optional(Schema.Array(Runnable)),
    maxRetryCount: Schema.optional(Schema.Number),
    environment: Schema.optional(Environment),
    maxRunDuration: Schema.optional(Schema.String),
    environments: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "TaskSpec" });

export interface TaskGroup {
  /** When true, Batch will populate a file with a list of all VMs assigned to the TaskGroup and set the BATCH_HOSTS_FILE environment variable to the path of that file. Defaults to false. The host file supports up to 1000 VMs. */
  requireHostsFile?: boolean;
  /** Max number of tasks that can run in parallel. Default to min(task_count, parallel tasks per job limit). See: [Job Limits](https://cloud.google.com/batch/quotas#job_limits). Field parallelism must be 1 if the scheduling_policy is IN_ORDER. */
  parallelism?: string;
  /** Scheduling policy for Tasks in the TaskGroup. The default value is AS_SOON_AS_POSSIBLE. */
  schedulingPolicy?:
    | "SCHEDULING_POLICY_UNSPECIFIED"
    | "AS_SOON_AS_POSSIBLE"
    | "IN_ORDER"
    | (string & {});
  /** Required. Tasks in the group share the same task spec. */
  taskSpec?: TaskSpec;
  /** Optional. If not set or set to false, Batch uses the root user to execute runnables. If set to true, Batch runs the runnables using a non-root user. Currently, the non-root user Batch used is generated by OS Login. For more information, see [About OS Login](https://cloud.google.com/compute/docs/oslogin). */
  runAsNonRoot?: boolean;
  /** Output only. TaskGroup name. The system generates this field based on parent Job name. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01". */
  name?: string;
  /** Number of Tasks in the TaskGroup. Default is 1. */
  taskCount?: string;
  /** When true, Batch will configure SSH to allow passwordless login between VMs running the Batch tasks in the same TaskGroup. */
  permissiveSsh?: boolean;
  /** An array of environment variable mappings, which are passed to Tasks with matching indices. If task_environments is used then task_count should not be specified in the request (and will be ignored). Task count will be the length of task_environments. Tasks get a BATCH_TASK_INDEX and BATCH_TASK_COUNT environment variable, in addition to any environment variables set in task_environments, specifying the number of Tasks in the Task's parent TaskGroup, and the specific Task's index in the TaskGroup (0 through BATCH_TASK_COUNT - 1). */
  taskEnvironments?: ReadonlyArray<Environment>;
  /** Max number of tasks that can be run on a VM at the same time. If not specified, the system will decide a value based on available compute resources on a VM and task requirements. */
  taskCountPerNode?: string;
}

export const TaskGroup: Schema.Schema<TaskGroup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requireHostsFile: Schema.optional(Schema.Boolean),
    parallelism: Schema.optional(Schema.String),
    schedulingPolicy: Schema.optional(Schema.String),
    taskSpec: Schema.optional(TaskSpec),
    runAsNonRoot: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    taskCount: Schema.optional(Schema.String),
    permissiveSsh: Schema.optional(Schema.Boolean),
    taskEnvironments: Schema.optional(Schema.Array(Environment)),
    taskCountPerNode: Schema.optional(Schema.String),
  }).annotate({ identifier: "TaskGroup" });

export interface Disk {
  /** Disk type as shown in `gcloud compute disk-types list`. For example, local SSD uses type "local-ssd". Persistent disks and boot disks use "pd-balanced", "pd-extreme", "pd-ssd" or "pd-standard". If not specified, "pd-standard" will be used as the default type for non-boot disks, "pd-balanced" will be used as the default type for boot disks. */
  type?: string;
  /** Local SSDs are available through both "SCSI" and "NVMe" interfaces. If not indicated, "NVMe" will be the default one for local ssds. This field is ignored for persistent disks as the interface is chosen automatically. See https://cloud.google.com/compute/docs/disks/persistent-disks#choose_an_interface. */
  diskInterface?: string;
  /** Disk size in GB. **Non-Boot Disk**: If the `type` specifies a persistent disk, this field is ignored if `data_source` is set as `image` or `snapshot`. If the `type` specifies a local SSD, this field should be a multiple of 375 GB, otherwise, the final size will be the next greater multiple of 375 GB. **Boot Disk**: Batch will calculate the boot disk size based on source image and task requirements if you do not speicify the size. If both this field and the `boot_disk_mib` field in task spec's `compute_resource` are defined, Batch will only honor this field. Also, this field should be no smaller than the source disk's size when the `data_source` is set as `snapshot` or `image`. For example, if you set an image as the `data_source` field and the image's default disk size 30 GB, you can only use this field to make the disk larger or equal to 30 GB. */
  sizeGb?: string;
  /** URL for a VM image to use as the data source for this disk. For example, the following are all valid URLs: * Specify the image by its family name: projects/{project}/global/images/family/{image_family} * Specify the image version: projects/{project}/global/images/{image_version} You can also use Batch customized image in short names. The following image values are supported for a boot disk: * `batch-debian`: use Batch Debian images. * `batch-cos`: use Batch Container-Optimized images. * `batch-hpc-rocky`: use Batch HPC Rocky Linux images. */
  image?: string;
  /** Name of a snapshot used as the data source. Snapshot is not supported as boot disk now. */
  snapshot?: string;
}

export const Disk: Schema.Schema<Disk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    diskInterface: Schema.optional(Schema.String),
    sizeGb: Schema.optional(Schema.String),
    image: Schema.optional(Schema.String),
    snapshot: Schema.optional(Schema.String),
  }).annotate({ identifier: "Disk" });

export interface AttachedDisk {
  /** Name of an existing PD. */
  existingDisk?: string;
  /** Device name that the guest operating system will see. It is used by Runnable.volumes field to mount disks. So please specify the device_name if you want Batch to help mount the disk, and it should match the device_name field in volumes. */
  deviceName?: string;
  newDisk?: Disk;
}

export const AttachedDisk: Schema.Schema<AttachedDisk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    existingDisk: Schema.optional(Schema.String),
    deviceName: Schema.optional(Schema.String),
    newDisk: Schema.optional(Disk),
  }).annotate({ identifier: "AttachedDisk" });

export interface Accelerator {
  /** The accelerator type. For example, "nvidia-tesla-t4". See `gcloud compute accelerator-types list`. */
  type?: string;
  /** The number of accelerators of this type. */
  count?: string;
  /** Deprecated: please use instances[0].install_gpu_drivers instead. */
  installGpuDrivers?: boolean;
  /** Optional. The NVIDIA GPU driver version that should be installed for this type. You can define the specific driver version such as "470.103.01", following the driver version requirements in https://cloud.google.com/compute/docs/gpus/install-drivers-gpu#minimum-driver. Batch will install the specific accelerator driver if qualified. */
  driverVersion?: string;
}

export const Accelerator: Schema.Schema<Accelerator> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    count: Schema.optional(Schema.String),
    installGpuDrivers: Schema.optional(Schema.Boolean),
    driverVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "Accelerator" });

export interface InstancePolicy {
  /** The provisioning model. */
  provisioningModel?:
    | "PROVISIONING_MODEL_UNSPECIFIED"
    | "STANDARD"
    | "SPOT"
    | "PREEMPTIBLE"
    | "RESERVATION_BOUND"
    | "FLEX_START"
    | (string & {});
  /** Boot disk to be created and attached to each VM by this InstancePolicy. Boot disk will be deleted when the VM is deleted. Batch API now only supports booting from image. */
  bootDisk?: Disk;
  /** The Compute Engine machine type. */
  machineType?: string;
  /** Non-boot disks to be attached for each VM created by this InstancePolicy. New disks will be deleted when the VM is deleted. A non-boot disk is a disk that can be of a device with a file system or a raw storage drive that is not ready for data storage and accessing. */
  disks?: ReadonlyArray<AttachedDisk>;
  /** The minimum CPU platform. See https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform. */
  minCpuPlatform?: string;
  /** Optional. If not specified (default), VMs will consume any applicable reservation. If "NO_RESERVATION" is specified, VMs will not consume any reservation. Otherwise, if specified, VMs will consume only the specified reservation. */
  reservation?: string;
  /** The accelerators attached to each VM instance. */
  accelerators?: ReadonlyArray<Accelerator>;
}

export const InstancePolicy: Schema.Schema<InstancePolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningModel: Schema.optional(Schema.String),
    bootDisk: Schema.optional(Disk),
    machineType: Schema.optional(Schema.String),
    disks: Schema.optional(Schema.Array(AttachedDisk)),
    minCpuPlatform: Schema.optional(Schema.String),
    reservation: Schema.optional(Schema.String),
    accelerators: Schema.optional(Schema.Array(Accelerator)),
  }).annotate({ identifier: "InstancePolicy" });

export interface Location {
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    locationId: Schema.optional(Schema.String),
  }).annotate({ identifier: "Location" });

export interface TaskExecution {
  /** The exit code of a finished task. If the task succeeded, the exit code will be 0. If the task failed but not due to the following reasons, the exit code will be 50000. Otherwise, it can be from different sources: * Batch known failures: https://cloud.google.com/batch/docs/troubleshooting#reserved-exit-codes. * Batch runnable execution failures; you can rely on Batch logs to further diagnose: https://cloud.google.com/batch/docs/analyze-job-using-logs. If there are multiple runnables failures, Batch only exposes the first error. */
  exitCode?: number;
}

export const TaskExecution: Schema.Schema<TaskExecution> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exitCode: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TaskExecution" });

export interface StatusEvent {
  /** Task State. This field is only defined for task-level status events. */
  taskState?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "ASSIGNED"
    | "RUNNING"
    | "FAILED"
    | "SUCCEEDED"
    | "UNEXECUTED"
    | (string & {});
  /** Description of the event. */
  description?: string;
  /** Type of the event. */
  type?: string;
  /** The time this event occurred. */
  eventTime?: string;
  /** Task Execution. This field is only defined for task-level status events where the task fails. */
  taskExecution?: TaskExecution;
}

export const StatusEvent: Schema.Schema<StatusEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taskState: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    taskExecution: Schema.optional(TaskExecution),
  }).annotate({ identifier: "StatusEvent" });

export interface InstanceStatus {
  /** The max number of tasks can be assigned to this instance type. */
  taskPack?: string;
  /** The VM instance provisioning model. */
  provisioningModel?:
    | "PROVISIONING_MODEL_UNSPECIFIED"
    | "STANDARD"
    | "SPOT"
    | "PREEMPTIBLE"
    | "RESERVATION_BOUND"
    | "FLEX_START"
    | (string & {});
  /** The VM boot disk. */
  bootDisk?: Disk;
  /** The Compute Engine machine type. */
  machineType?: string;
}

export const InstanceStatus: Schema.Schema<InstanceStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taskPack: Schema.optional(Schema.String),
    provisioningModel: Schema.optional(Schema.String),
    bootDisk: Schema.optional(Disk),
    machineType: Schema.optional(Schema.String),
  }).annotate({ identifier: "InstanceStatus" });

export interface TaskGroupStatus {
  /** Count of task in each state in the TaskGroup. The map key is task state name. */
  counts?: Record<string, string>;
  /** Status of instances allocated for the TaskGroup. */
  instances?: ReadonlyArray<InstanceStatus>;
}

export const TaskGroupStatus: Schema.Schema<TaskGroupStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    counts: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    instances: Schema.optional(Schema.Array(InstanceStatus)),
  }).annotate({ identifier: "TaskGroupStatus" });

export interface JobStatus {
  /** The duration of time that the Job spent in status RUNNING. */
  runDuration?: string;
  /** Job state */
  state?:
    | "STATE_UNSPECIFIED"
    | "QUEUED"
    | "SCHEDULED"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "DELETION_IN_PROGRESS"
    | "CANCELLATION_IN_PROGRESS"
    | "CANCELLED"
    | (string & {});
  /** Job status events */
  statusEvents?: ReadonlyArray<StatusEvent>;
  /** Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID. */
  taskGroups?: Record<string, TaskGroupStatus>;
}

export const JobStatus: Schema.Schema<JobStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runDuration: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    statusEvents: Schema.optional(Schema.Array(StatusEvent)),
    taskGroups: Schema.optional(Schema.Record(Schema.String, TaskGroupStatus)),
  }).annotate({ identifier: "JobStatus" });

export interface TaskStatus {
  /** Task state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "ASSIGNED"
    | "RUNNING"
    | "FAILED"
    | "SUCCEEDED"
    | "UNEXECUTED"
    | (string & {});
  /** Detailed info about why the state is reached. */
  statusEvents?: ReadonlyArray<StatusEvent>;
}

export const TaskStatus: Schema.Schema<TaskStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    statusEvents: Schema.optional(Schema.Array(StatusEvent)),
  }).annotate({ identifier: "TaskStatus" });

export interface AgentTaskInfo {
  /** The status of the Task. If we need agent specific fields we should fork the public TaskStatus into an agent specific one. Or add them below. */
  taskStatus?: TaskStatus;
  /** The highest index of a runnable started by the agent for this task. The runnables are indexed from 1. Value 0 is undefined. */
  runnable?: string;
  /** ID of the Task */
  taskId?: string;
}

export const AgentTaskInfo: Schema.Schema<AgentTaskInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    taskStatus: Schema.optional(TaskStatus),
    runnable: Schema.optional(Schema.String),
    taskId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentTaskInfo" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse: Schema.Schema<ListLocationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locations: Schema.optional(Schema.Array(Location)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListLocationsResponse" });

export interface AgentKMSEnvMap {
  /** The value of the cipherText response from the `encrypt` method. */
  cipherText?: string;
  /** The name of the KMS key that will be used to decrypt the cipher text. */
  keyName?: string;
}

export const AgentKMSEnvMap: Schema.Schema<AgentKMSEnvMap> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    cipherText: Schema.optional(Schema.String),
    keyName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentKMSEnvMap" });

export interface AgentTaskLoggingOption {
  /** Labels to be added to the log entry. Now only cloud logging is supported. */
  labels?: Record<string, string>;
}

export const AgentTaskLoggingOption: Schema.Schema<AgentTaskLoggingOption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "AgentTaskLoggingOption" });

export interface NetworkInterface {
  /** The URL of an existing network resource. You can specify the network as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} * projects/{project}/global/networks/{network} * global/networks/{network} */
  network?: string;
  /** The URL of an existing subnetwork resource in the network. You can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs: * https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork} * projects/{project}/regions/{region}/subnetworks/{subnetwork} * regions/{region}/subnetworks/{subnetwork} */
  subnetwork?: string;
  /** Default is false (with an external IP address). Required if no external public IP address is attached to the VM. If no external public IP address, additional configuration is required to allow the VM to access Google Services. See https://cloud.google.com/vpc/docs/configure-private-google-access and https://cloud.google.com/nat/docs/gce-example#create-nat for more information. */
  noExternalIpAddress?: boolean;
}

export const NetworkInterface: Schema.Schema<NetworkInterface> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(Schema.String),
    subnetwork: Schema.optional(Schema.String),
    noExternalIpAddress: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "NetworkInterface" });

export interface NetworkPolicy {
  /** Network configurations. */
  networkInterfaces?: ReadonlyArray<NetworkInterface>;
}

export const NetworkPolicy: Schema.Schema<NetworkPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    networkInterfaces: Schema.optional(Schema.Array(NetworkInterface)),
  }).annotate({ identifier: "NetworkPolicy" });

export interface AgentMetadata {
  /** GCP instance ID (go/instance-id). */
  instanceId?: string;
  /** When the VM agent started. Use agent_startup_time instead. */
  creationTime?: string;
  /** Full name of the entity that created this vm. For MIG, this path is: projects/{project}/regions/{region}/InstanceGroupManagers/{igm} The value is retrieved from the vm metadata key of "created-by". */
  creator?: string;
  /** agent binary version running on VM */
  version?: string;
  /** If the GCP instance has received preemption notice. */
  instancePreemptionNoticeReceived?: boolean;
  /** Optional. machine type of the VM */
  machineType?: string;
  /** Agent zone. */
  zone?: string;
  /** GCP instance name (go/instance-name). */
  instance?: string;
  /** parsed contents of /etc/os-release */
  osRelease?: Record<string, string>;
  /** image version for the VM that this agent is installed on. */
  imageVersion?: string;
}

export const AgentMetadata: Schema.Schema<AgentMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.optional(Schema.String),
    creationTime: Schema.optional(Schema.String),
    creator: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    instancePreemptionNoticeReceived: Schema.optional(Schema.Boolean),
    machineType: Schema.optional(Schema.String),
    zone: Schema.optional(Schema.String),
    instance: Schema.optional(Schema.String),
    osRelease: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    imageVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentMetadata" });

export interface CloudLoggingOption {
  /** Optional. Set this field to `true` to change the [monitored resource type](https://cloud.google.com/monitoring/api/resources) for Cloud Logging logs generated by this Batch job from the [`batch.googleapis.com/Job`](https://cloud.google.com/monitoring/api/resources#tag_batch.googleapis.com/Job) type to the formerly used [`generic_task`](https://cloud.google.com/monitoring/api/resources#tag_generic_task) type. */
  useGenericTaskMonitoredResource?: boolean;
}

export const CloudLoggingOption: Schema.Schema<CloudLoggingOption> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useGenericTaskMonitoredResource: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CloudLoggingOption" });

export interface LogsPolicy {
  /** When `destination` is set to `PATH`, you must set this field to the path where you want logs to be saved. This path can point to a local directory on the VM or (if congifured) a directory under the mount path of any Cloud Storage bucket, network file system (NFS), or writable persistent disk that is mounted to the job. For example, if the job has a bucket with `mountPath` set to `/mnt/disks/my-bucket`, you can write logs to the root directory of the `remotePath` of that bucket by setting this field to `/mnt/disks/my-bucket/`. */
  logsPath?: string;
  /** If and where logs should be saved. */
  destination?:
    | "DESTINATION_UNSPECIFIED"
    | "CLOUD_LOGGING"
    | "PATH"
    | (string & {});
  /** Optional. When `destination` is set to `CLOUD_LOGGING`, you can optionally set this field to configure additional settings for Cloud Logging. */
  cloudLoggingOption?: CloudLoggingOption;
}

export const LogsPolicy: Schema.Schema<LogsPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    logsPath: Schema.optional(Schema.String),
    destination: Schema.optional(Schema.String),
    cloudLoggingOption: Schema.optional(CloudLoggingOption),
  }).annotate({ identifier: "LogsPolicy" });

export interface ServiceAccount {
  /** List of scopes to be enabled for this service account. */
  scopes?: ReadonlyArray<string>;
  /** Email address of the service account. */
  email?: string;
}

export const ServiceAccount: Schema.Schema<ServiceAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scopes: Schema.optional(Schema.Array(Schema.String)),
    email: Schema.optional(Schema.String),
  }).annotate({ identifier: "ServiceAccount" });

export interface InstancePolicyOrTemplate {
  /** Name of an instance template used to create VMs. Named the field as 'instance_template' instead of 'template' to avoid C++ keyword conflict. Batch only supports global instance templates from the same project as the job. You can specify the global instance template as a full or partial URL. */
  instanceTemplate?: string;
  /** Optional. Set this field true if you want Batch to install Ops Agent on your behalf. Default is false. */
  installOpsAgent?: boolean;
  /** Optional. Set this field to `true` if you want Batch to block project-level SSH keys from accessing this job's VMs. Alternatively, you can configure the job to specify a VM instance template that blocks project-level SSH keys. In either case, Batch blocks project-level SSH keys while creating the VMs for this job. Batch allows project-level SSH keys for a job's VMs only if all the following are true: + This field is undefined or set to `false`. + The job's VM instance template (if any) doesn't block project-level SSH keys. Notably, you can override this behavior by manually updating a VM to block or allow project-level SSH keys. For more information about blocking project-level SSH keys, see the Compute Engine documentation: https://cloud.google.com/compute/docs/connect/restrict-ssh-keys#block-keys */
  blockProjectSshKeys?: boolean;
  /** Set this field true if you want Batch to help fetch drivers from a third party location and install them for GPUs specified in `policy.accelerators` or `instance_template` on your behalf. Default is false. For Container-Optimized Image cases, Batch will install the accelerator driver following milestones of https://cloud.google.com/container-optimized-os/docs/release-notes. For non Container-Optimized Image cases, following https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install_gpu_driver.py. */
  installGpuDrivers?: boolean;
  /** InstancePolicy. */
  policy?: InstancePolicy;
}

export const InstancePolicyOrTemplate: Schema.Schema<InstancePolicyOrTemplate> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceTemplate: Schema.optional(Schema.String),
    installOpsAgent: Schema.optional(Schema.Boolean),
    blockProjectSshKeys: Schema.optional(Schema.Boolean),
    installGpuDrivers: Schema.optional(Schema.Boolean),
    policy: Schema.optional(InstancePolicy),
  }).annotate({ identifier: "InstancePolicyOrTemplate" });

export interface LocationPolicy {
  /** A list of allowed location names represented by internal URLs. Each location can be a region or a zone. Only one region or multiple zones in one region is supported now. For example, ["regions/us-central1"] allow VMs in any zones in region us-central1. ["zones/us-central1-a", "zones/us-central1-c"] only allow VMs in zones us-central1-a and us-central1-c. Mixing locations from different regions would cause errors. For example, ["regions/us-central1", "zones/us-central1-a", "zones/us-central1-b", "zones/us-west1-a"] contains locations from two distinct regions: us-central1 and us-west1. This combination will trigger an error. */
  allowedLocations?: ReadonlyArray<string>;
}

export const LocationPolicy: Schema.Schema<LocationPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowedLocations: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "LocationPolicy" });

export interface PlacementPolicy {
  /** UNSPECIFIED vs. COLLOCATED (default UNSPECIFIED). Use COLLOCATED when you want VMs to be located close to each other for low network latency between the VMs. No placement policy will be generated when collocation is UNSPECIFIED. */
  collocation?: string;
  /** When specified, causes the job to fail if more than max_distance logical switches are required between VMs. Batch uses the most compact possible placement of VMs even when max_distance is not specified. An explicit max_distance makes that level of compactness a strict requirement. Not yet implemented */
  maxDistance?: string;
}

export const PlacementPolicy: Schema.Schema<PlacementPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collocation: Schema.optional(Schema.String),
    maxDistance: Schema.optional(Schema.String),
  }).annotate({ identifier: "PlacementPolicy" });

export interface AllocationPolicy {
  /** The network policy. If you define an instance template in the `InstancePolicyOrTemplate` field, Batch will use the network settings in the instance template instead of this field. */
  network?: NetworkPolicy;
  /** Defines the service account for Batch-created VMs. If omitted, the [default Compute Engine service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. Must match the service account specified in any used instance template configured in the Batch job. Includes the following fields: * email: The service account's email address. If not set, the default Compute Engine service account is used. * scopes: Additional OAuth scopes to grant the service account, beyond the default cloud-platform scope. (list of strings) */
  serviceAccount?: ServiceAccount;
  /** Custom labels to apply to the job and all the Compute Engine resources that both are created by this allocation policy and support labels. Use labels to group and describe the resources they are applied to. Batch automatically applies predefined labels and supports multiple `labels` fields for each job, which each let you apply custom labels to various resources. Label names that start with "goog-" or "google-" are reserved for predefined labels. For more information about labels with Batch, see [Organize resources using labels](https://cloud.google.com/batch/docs/organize-resources-using-labels). */
  labels?: Record<string, string>;
  /** Optional. Tags applied to the VM instances. The tags identify valid sources or targets for network firewalls. Each tag must be 1-63 characters long, and comply with [RFC1035](https://www.ietf.org/rfc/rfc1035.txt). */
  tags?: ReadonlyArray<string>;
  /** Describe instances that can be created by this AllocationPolicy. Only instances[0] is supported now. */
  instances?: ReadonlyArray<InstancePolicyOrTemplate>;
  /** Location where compute resources should be allocated for the Job. */
  location?: LocationPolicy;
  /** The placement policy. */
  placement?: PlacementPolicy;
}

export const AllocationPolicy: Schema.Schema<AllocationPolicy> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    network: Schema.optional(NetworkPolicy),
    serviceAccount: Schema.optional(ServiceAccount),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.String)),
    instances: Schema.optional(Schema.Array(InstancePolicyOrTemplate)),
    location: Schema.optional(LocationPolicy),
    placement: Schema.optional(PlacementPolicy),
  }).annotate({ identifier: "AllocationPolicy" });

export interface Message {
  /** The new job state. */
  newJobState?:
    | "STATE_UNSPECIFIED"
    | "QUEUED"
    | "SCHEDULED"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | "DELETION_IN_PROGRESS"
    | "CANCELLATION_IN_PROGRESS"
    | "CANCELLED"
    | (string & {});
  /** The new task state. */
  newTaskState?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "ASSIGNED"
    | "RUNNING"
    | "FAILED"
    | "SUCCEEDED"
    | "UNEXECUTED"
    | (string & {});
  /** The message type. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "JOB_STATE_CHANGED"
    | "TASK_STATE_CHANGED"
    | (string & {});
}

export const Message: Schema.Schema<Message> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    newJobState: Schema.optional(Schema.String),
    newTaskState: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "Message" });

export interface JobNotification {
  /** The attribute requirements of messages to be sent to this Pub/Sub topic. Without this field, no message will be sent. */
  message?: Message;
  /** The Pub/Sub topic where notifications for the job, like state changes, will be published. If undefined, no Pub/Sub notifications are sent for this job. Specify the topic using the following format: `projects/{project}/topics/{topic}`. Notably, if you want to specify a Pub/Sub topic that is in a different project than the job, your administrator must grant your project's Batch service agent permission to publish to that topic. For more information about configuring Pub/Sub notifications for a job, see https://cloud.google.com/batch/docs/enable-notifications. */
  pubsubTopic?: string;
}

export const JobNotification: Schema.Schema<JobNotification> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Message),
    pubsubTopic: Schema.optional(Schema.String),
  }).annotate({ identifier: "JobNotification" });

export interface Job {
  /** Output only. The last time the Job was updated. */
  updateTime?: string;
  /** Output only. Job status. It is read only for users. */
  status?: JobStatus;
  /** Output only. A system generated unique ID for the Job. */
  uid?: string;
  /** Output only. When the Job was created. */
  createTime?: string;
  /** Log preservation policy for the Job. */
  logsPolicy?: LogsPolicy;
  /** Custom labels to apply to the job and any Cloud Logging [LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) that it generates. Use labels to group and describe the resources they are applied to. Batch automatically applies predefined labels and supports multiple `labels` fields for each job, which each let you apply custom labels to various resources. Label names that start with "goog-" or "google-" are reserved for predefined labels. For more information about labels with Batch, see [Organize resources using labels](https://cloud.google.com/batch/docs/organize-resources-using-labels). */
  labels?: Record<string, string>;
  /** Output only. Job name. For example: "projects/123456/locations/us-central1/jobs/job01". */
  name?: string;
  /** Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied. */
  priority?: string;
  /** Compute resource allocation for all TaskGroups in the Job. */
  allocationPolicy?: AllocationPolicy;
  /** Required. TaskGroups in the Job. Only one TaskGroup is supported now. */
  taskGroups?: ReadonlyArray<TaskGroup>;
  /** Notification configurations. */
  notifications?: ReadonlyArray<JobNotification>;
}

export const Job: Schema.Schema<Job> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    status: Schema.optional(JobStatus),
    uid: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    logsPolicy: Schema.optional(LogsPolicy),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    name: Schema.optional(Schema.String),
    priority: Schema.optional(Schema.String),
    allocationPolicy: Schema.optional(AllocationPolicy),
    taskGroups: Schema.optional(Schema.Array(TaskGroup)),
    notifications: Schema.optional(Schema.Array(JobNotification)),
  }).annotate({ identifier: "Job" });

export interface ListJobsResponse {
  /** Next page token. */
  nextPageToken?: string;
  /** Jobs. */
  jobs?: ReadonlyArray<Job>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListJobsResponse: Schema.Schema<ListJobsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    jobs: Schema.optional(Schema.Array(Job)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListJobsResponse" });

export interface CancelOperationRequest {}

export const CancelOperationRequest: Schema.Schema<CancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelOperationRequest",
  });

export interface AgentTaskUserAccount {
  /** uid is an unique identifier of the POSIX account corresponding to the user account. */
  uid?: string;
  /** gid id an unique identifier of the POSIX account group corresponding to the user account. */
  gid?: string;
}

export const AgentTaskUserAccount: Schema.Schema<AgentTaskUserAccount> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uid: Schema.optional(Schema.String),
    gid: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentTaskUserAccount" });

export interface AgentEnvironment {
  /** A map of environment variable names to values. */
  variables?: Record<string, string>;
  /** A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable. */
  secretVariables?: Record<string, string>;
  /** An encrypted JSON dictionary where the key/value pairs correspond to environment variable names and their values. */
  encryptedVariables?: AgentKMSEnvMap;
}

export const AgentEnvironment: Schema.Schema<AgentEnvironment> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    variables: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    secretVariables: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    encryptedVariables: Schema.optional(AgentKMSEnvMap),
  }).annotate({ identifier: "AgentEnvironment" });

export interface AgentContainer {
  /** Overrides the `CMD` specified in the container. If there is an ENTRYPOINT (either in the container image or with the entrypoint field below) then commands are appended as arguments to the ENTRYPOINT. */
  commands?: ReadonlyArray<string>;
  /** Overrides the `ENTRYPOINT` specified in the container. */
  entrypoint?: string;
  /** Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match docker run's --volume option, e.g. /foo:/bar, or /foo:/bar:ro */
  volumes?: ReadonlyArray<string>;
  /** The URI to pull the container image from. */
  imageUri?: string;
  /** Arbitrary additional options to include in the "docker run" command when running this container, e.g. "--network host". */
  options?: string;
}

export const AgentContainer: Schema.Schema<AgentContainer> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    commands: Schema.optional(Schema.Array(Schema.String)),
    entrypoint: Schema.optional(Schema.String),
    volumes: Schema.optional(Schema.Array(Schema.String)),
    imageUri: Schema.optional(Schema.String),
    options: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentContainer" });

export interface AgentScript {
  /** Shell script text. To specify an interpreter, please add a `#!\n` at the beginning of the text.(For example, to execute the script using bash, `#!/bin/bash\n` should be added. To execute the script using`Python3`, `#!/usr/bin/env python3\n` should be added.) Otherwise, the script will by default be executed by `/bin/sh`. */
  text?: string;
  /** Script file path on the host VM. To specify an interpreter, please add a `#!`(also known as [shebang line](https://en.wikipedia.org/wiki/Shebang_(Unix))) as the first line of the file.(For example, to execute the script using bash, `#!/bin/bash` should be the first line of the file. To execute the script using`Python3`, `#!/usr/bin/env python3` should be the first line of the file.) Otherwise, the file will by default be executed by `/bin/sh`. */
  path?: string;
}

export const AgentScript: Schema.Schema<AgentScript> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentScript" });

export interface AgentTaskRunnable {
  /** Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead. */
  ignoreExitStatus?: boolean;
  /** Container runnable. */
  container?: AgentContainer;
  /** Script runnable. */
  script?: AgentScript;
  /** Environment variables for this Runnable (overrides variables set for the whole Task or TaskGroup). */
  environment?: AgentEnvironment;
  /** Timeout for this Runnable. */
  timeout?: string;
  /** This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers). */
  background?: boolean;
  /** By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task's overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables. */
  alwaysRun?: boolean;
}

export const AgentTaskRunnable: Schema.Schema<AgentTaskRunnable> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ignoreExitStatus: Schema.optional(Schema.Boolean),
    container: Schema.optional(AgentContainer),
    script: Schema.optional(AgentScript),
    environment: Schema.optional(AgentEnvironment),
    timeout: Schema.optional(Schema.String),
    background: Schema.optional(Schema.Boolean),
    alwaysRun: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "AgentTaskRunnable" });

export interface AgentTaskSpec {
  /** Maximum duration the task should run before being automatically retried (if enabled) or automatically failed. Format the value of this field as a time limit in seconds followed by `s`—for example, `3600s` for 1 hour. The field accepts any value between 0 and the maximum listed for the `Duration` field type at https://protobuf.dev/reference/protobuf/google.protobuf/#duration; however, the actual maximum run time for a job will be limited to the maximum run time for a job listed at https://cloud.google.com/batch/quotas#max-job-duration. */
  maxRunDuration?: string;
  /** User account on the VM to run the runnables in the agentTaskSpec. If not set, the runnable will be run under root user. */
  userAccount?: AgentTaskUserAccount;
  /** Environment variables to set before running the Task. */
  environment?: AgentEnvironment;
  /** Logging option for the task. */
  loggingOption?: AgentTaskLoggingOption;
  /** AgentTaskRunnable is runanbles that will be executed on the agent. */
  runnables?: ReadonlyArray<AgentTaskRunnable>;
}

export const AgentTaskSpec: Schema.Schema<AgentTaskSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxRunDuration: Schema.optional(Schema.String),
    userAccount: Schema.optional(AgentTaskUserAccount),
    environment: Schema.optional(AgentEnvironment),
    loggingOption: Schema.optional(AgentTaskLoggingOption),
    runnables: Schema.optional(Schema.Array(AgentTaskRunnable)),
  }).annotate({ identifier: "AgentTaskSpec" });

export interface AgentTask {
  /** Task name. */
  task?: string;
  /** Task Spec. This field will be replaced by agent_task_spec below in future. */
  spec?: TaskSpec;
  /** The highest barrier reached by all tasks in the task's TaskGroup. */
  reachedBarrier?: string;
  /** TaskSource represents the source of the task. */
  taskSource?:
    | "TASK_SOURCE_UNSPECIFIED"
    | "BATCH_INTERNAL"
    | "USER"
    | (string & {});
  /** AgentTaskSpec is the taskSpec representation between Agent and CLH communication. This field will replace the TaskSpec field above in future to have a better separation between user-facaing API and internal API. */
  agentTaskSpec?: AgentTaskSpec;
  /** Task status. */
  status?: TaskStatus;
  /** The intended state of the task. */
  intendedState?:
    | "INTENDED_STATE_UNSPECIFIED"
    | "ASSIGNED"
    | "CANCELLED"
    | "DELETED"
    | (string & {});
}

export const AgentTask: Schema.Schema<AgentTask> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    task: Schema.optional(Schema.String),
    spec: Schema.optional(TaskSpec),
    reachedBarrier: Schema.optional(Schema.String),
    taskSource: Schema.optional(Schema.String),
    agentTaskSpec: Schema.optional(AgentTaskSpec),
    status: Schema.optional(TaskStatus),
    intendedState: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentTask" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface Status {
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface Operation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation: Schema.Schema<Operation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
  }).annotate({ identifier: "Operation" });

export interface AgentInfo {
  /** Task Info. */
  tasks?: ReadonlyArray<AgentTaskInfo>;
  /** The assigned task group ID. */
  taskGroupId?: string;
  /** Agent state. */
  state?:
    | "AGENT_STATE_UNSPECIFIED"
    | "AGENT_STARTING"
    | "AGENT_RUNNING"
    | "AGENT_STOPPED"
    | (string & {});
  /** Optional. The assigned Job ID */
  jobId?: string;
  /** When the AgentInfo is generated. */
  reportTime?: string;
}

export const AgentInfo: Schema.Schema<AgentInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tasks: Schema.optional(Schema.Array(AgentTaskInfo)),
    taskGroupId: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
    reportTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentInfo" });

export interface AgentTimingInfo {
  /** Boot timestamp of the VM OS */
  bootTime?: string;
  /** Agent startup time */
  agentStartupTime?: string;
  /** Startup time of the Batch VM script. */
  scriptStartupTime?: string;
}

export const AgentTimingInfo: Schema.Schema<AgentTimingInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bootTime: Schema.optional(Schema.String),
    agentStartupTime: Schema.optional(Schema.String),
    scriptStartupTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AgentTimingInfo" });

export interface ReportAgentStateRequest {
  /** Agent metadata. */
  metadata?: AgentMetadata;
  /** Agent info. */
  agentInfo?: AgentInfo;
  /** Agent timing info. */
  agentTimingInfo?: AgentTimingInfo;
}

export const ReportAgentStateRequest: Schema.Schema<ReportAgentStateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(AgentMetadata),
    agentInfo: Schema.optional(AgentInfo),
    agentTimingInfo: Schema.optional(AgentTimingInfo),
  }).annotate({ identifier: "ReportAgentStateRequest" });

export interface ReportAgentStateResponse {
  /** Tasks assigned to the agent */
  tasks?: ReadonlyArray<AgentTask>;
  /** Default report interval override */
  defaultReportInterval?: string;
  /** Minimum report interval override */
  minReportInterval?: string;
  /** If true, the cloud logging for batch agent will use batch.googleapis.com/Job as monitored resource for Batch job related logging. */
  useBatchMonitoredResource?: boolean;
}

export const ReportAgentStateResponse: Schema.Schema<ReportAgentStateResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tasks: Schema.optional(Schema.Array(AgentTask)),
    defaultReportInterval: Schema.optional(Schema.String),
    minReportInterval: Schema.optional(Schema.String),
    useBatchMonitoredResource: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ReportAgentStateResponse" });

export interface ListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse: Schema.Schema<ListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(Operation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListOperationsResponse" });

export interface Task {
  /** Task Status. */
  status?: TaskStatus;
  /** Task name. The name is generated from the parent TaskGroup name and 'id' field. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01/tasks/task01". */
  name?: string;
}

export const Task: Schema.Schema<Task> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(TaskStatus),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Task" });

export interface CancelJobRequest {
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
}

export const CancelJobRequest: Schema.Schema<CancelJobRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CancelJobRequest" });

export interface ListTasksResponse {
  /** Tasks. */
  tasks?: ReadonlyArray<Task>;
  /** Next page token. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTasksResponse: Schema.Schema<ListTasksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tasks: Schema.optional(Schema.Array(Task)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "ListTasksResponse" });

export interface OperationMetadata {
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
}

export const OperationMetadata: Schema.Schema<OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    apiVersion: Schema.optional(Schema.String),
    verb: Schema.optional(Schema.String),
    statusMessage: Schema.optional(Schema.String),
    requestedCancellation: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "OperationMetadata" });

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
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: CancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelOperationRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsJobsRequest {
  /** Optional. Sort results. Supported are "name", "name desc", "create_time", and "create_time desc". */
  orderBy?: string;
  /** Page token. */
  pageToken?: string;
  /** List filter. */
  filter?: string;
  /** Parent path. */
  parent: string;
  /** Page size. */
  pageSize?: number;
}

export const ListProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/jobs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobsRequest>;

export type ListProjectsLocationsJobsResponse = ListJobsResponse;
export const ListProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListJobsResponse;

export type ListProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all Jobs for a project within a region. */
export const listProjectsLocationsJobs: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsRequest,
  ListProjectsLocationsJobsResponse,
  ListProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsRequest,
  output: ListProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsJobsRequest {
  /** ID used to uniquely identify the Job within its parent scope. This field should contain at most 63 characters and must start with lowercase characters. Only lowercase characters, numbers and '-' are accepted. The '-' character cannot be the first or the last one. A system generated ID will be used if the field is not set. The job.name field in the request will be ignored and the created resource name of the Job will be "{parent}/jobs/{job_id}". */
  jobId?: string;
  /** Required. The parent resource name where the Job will be created. Pattern: "projects/{project}/locations/{location}" */
  parent: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Job;
}

export const CreateProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    jobId: Schema.optional(Schema.String).pipe(T.HttpQuery("jobId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Job).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/jobs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsJobsRequest>;

export type CreateProjectsLocationsJobsResponse = Job;
export const CreateProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Job;

export type CreateProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a Job. */
export const createProjectsLocationsJobs: API.OperationMethod<
  CreateProjectsLocationsJobsRequest,
  CreateProjectsLocationsJobsResponse,
  CreateProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsJobsRequest,
  output: CreateProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsJobsRequest {
  /** Required. Job name. */
  name: string;
  /** Request body */
  body?: CancelJobRequest;
}

export const CancelProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsJobsRequest>;

export type CancelProjectsLocationsJobsResponse = Operation;
export const CancelProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CancelProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Cancel a Job. */
export const cancelProjectsLocationsJobs: API.OperationMethod<
  CancelProjectsLocationsJobsRequest,
  CancelProjectsLocationsJobsResponse,
  CancelProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsJobsRequest,
  output: CancelProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsJobsRequest {
  /** Required. Job name. */
  name: string;
}

export const GetProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobsRequest>;

export type GetProjectsLocationsJobsResponse = Job;
export const GetProjectsLocationsJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Job;

export type GetProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get a Job specified by its resource name. */
export const getProjectsLocationsJobs: API.OperationMethod<
  GetProjectsLocationsJobsRequest,
  GetProjectsLocationsJobsResponse,
  GetProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsRequest,
  output: GetProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsJobsRequest {
  /** Optional. Reason for this deletion. */
  reason?: string;
  /** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Job name. */
  name: string;
}

export const DeleteProjectsLocationsJobsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reason: Schema.optional(Schema.String).pipe(T.HttpQuery("reason")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsJobsRequest>;

export type DeleteProjectsLocationsJobsResponse = Operation;
export const DeleteProjectsLocationsJobsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsJobsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Delete a Job. */
export const deleteProjectsLocationsJobs: API.OperationMethod<
  DeleteProjectsLocationsJobsRequest,
  DeleteProjectsLocationsJobsResponse,
  DeleteProjectsLocationsJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsJobsRequest,
  output: DeleteProjectsLocationsJobsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsJobsTaskGroupsTasksRequest {
  /** Required. Task name. */
  name: string;
}

export const GetProjectsLocationsJobsTaskGroupsTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsJobsTaskGroupsTasksRequest>;

export type GetProjectsLocationsJobsTaskGroupsTasksResponse = Task;
export const GetProjectsLocationsJobsTaskGroupsTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ Task;

export type GetProjectsLocationsJobsTaskGroupsTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Return a single Task. */
export const getProjectsLocationsJobsTaskGroupsTasks: API.OperationMethod<
  GetProjectsLocationsJobsTaskGroupsTasksRequest,
  GetProjectsLocationsJobsTaskGroupsTasksResponse,
  GetProjectsLocationsJobsTaskGroupsTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsJobsTaskGroupsTasksRequest,
  output: GetProjectsLocationsJobsTaskGroupsTasksResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsJobsTaskGroupsTasksRequest {
  /** Required. Name of a TaskGroup from which Tasks are being requested. Pattern: "projects/{project}/locations/{location}/jobs/{job}/taskGroups/{task_group}" */
  parent: string;
  /** Page size. */
  pageSize?: number;
  /** Task filter, null filter matches all Tasks. Filter string should be of the format State=TaskStatus.State e.g. State=RUNNING */
  filter?: string;
  /** Page token. */
  pageToken?: string;
}

export const ListProjectsLocationsJobsTaskGroupsTasksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/tasks" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsJobsTaskGroupsTasksRequest>;

export type ListProjectsLocationsJobsTaskGroupsTasksResponse =
  ListTasksResponse;
export const ListProjectsLocationsJobsTaskGroupsTasksResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTasksResponse;

export type ListProjectsLocationsJobsTaskGroupsTasksError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List Tasks associated with a job. */
export const listProjectsLocationsJobsTaskGroupsTasks: API.PaginatedOperationMethod<
  ListProjectsLocationsJobsTaskGroupsTasksRequest,
  ListProjectsLocationsJobsTaskGroupsTasksResponse,
  ListProjectsLocationsJobsTaskGroupsTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsJobsTaskGroupsTasksRequest,
  output: ListProjectsLocationsJobsTaskGroupsTasksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ReportProjectsLocationsStateRequest {
  /** Required. Format: projects/{project}/locations/{location} {project} should be a project number. */
  parent: string;
  /** Request body */
  body?: ReportAgentStateRequest;
}

export const ReportProjectsLocationsStateRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ReportAgentStateRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/state:report",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReportProjectsLocationsStateRequest>;

export type ReportProjectsLocationsStateResponse = ReportAgentStateResponse;
export const ReportProjectsLocationsStateResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReportAgentStateResponse;

export type ReportProjectsLocationsStateError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Report agent's state, e.g. agent status and tasks information */
export const reportProjectsLocationsState: API.OperationMethod<
  ReportProjectsLocationsStateRequest,
  ReportProjectsLocationsStateResponse,
  ReportProjectsLocationsStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReportProjectsLocationsStateRequest,
  output: ReportProjectsLocationsStateResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
