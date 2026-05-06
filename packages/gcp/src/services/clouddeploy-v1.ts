// ==========================================================================
// Cloud Deploy API (clouddeploy v1)
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
  name: "clouddeploy",
  version: "v1",
  rootUrl: "https://clouddeploy.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface TimeOfDay {
  /** Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. */
  seconds?: number;
  /** Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. */
  minutes?: number;
  /** Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  hours?: number;
  /** Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. */
  nanos?: number;
}

export const TimeOfDay = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  seconds: Schema.optional(Schema.Number),
  minutes: Schema.optional(Schema.Number),
  hours: Schema.optional(Schema.Number),
  nanos: Schema.optional(Schema.Number),
}).annotate({ identifier: "TimeOfDay" });

export interface WeeklyWindow {
  /** Optional. Days of week. If left empty, all days of the week will be included. */
  daysOfWeek?: ReadonlyArray<
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {})
  >;
  /** Optional. Start time (inclusive). Use 00:00 for the beginning of the day. If you specify start_time you must also specify end_time. If left empty, this will block for the entire day for the days specified in days_of_week. */
  startTime?: TimeOfDay;
  /** Optional. End time (exclusive). Use 24:00 to indicate midnight. If you specify end_time you must also specify start_time. If left empty, this will block for the entire day for the days specified in days_of_week. */
  endTime?: TimeOfDay;
}

export const WeeklyWindow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  daysOfWeek: Schema.optional(Schema.Array(Schema.String)),
  startTime: Schema.optional(TimeOfDay),
  endTime: Schema.optional(TimeOfDay),
}).annotate({ identifier: "WeeklyWindow" });

export interface CloudRunRenderMetadata {
  /** Output only. The name of the Cloud Run Worker Pool in the rendered manifest. Format is `projects/{project}/locations/{location}/workerPools/{worker_pool}`. */
  workerPool?: string;
  /** Output only. The name of the Cloud Run Revision in the rendered manifest. Format is `projects/{project}/locations/{location}/services/{service}/revisions/{revision}`. */
  revision?: string;
  /** Output only. The name of the Cloud Run Job in the rendered manifest. Format is `projects/{project}/locations/{location}/jobs/{job}`. */
  job?: string;
  /** Output only. The name of the Cloud Run Service in the rendered manifest. Format is `projects/{project}/locations/{location}/services/{service}`. */
  service?: string;
}

export const CloudRunRenderMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    workerPool: Schema.optional(Schema.String),
    revision: Schema.optional(Schema.String),
    job: Schema.optional(Schema.String),
    service: Schema.optional(Schema.String),
  },
).annotate({ identifier: "CloudRunRenderMetadata" });

export interface CustomMetadata {
  /** Output only. Key-value pairs provided by the user-defined operation. */
  values?: Record<string, string>;
}

export const CustomMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "CustomMetadata" });

export interface KubernetesRenderMetadata {
  /** Output only. Name of the Kubernetes Deployment that will be applied to the GKE cluster. Only set if a single Deployment was provided in the rendered manifest. */
  deployment?: string;
  /** Output only. Namespace the Kubernetes resources will be applied to in the GKE cluster. Only set if applying resources to a single namespace. */
  kubernetesNamespace?: string;
  /** Output only. Name of the canary version of the Kubernetes Deployment that will be applied to the GKE cluster. Only set if a canary deployment strategy was configured. */
  canaryDeployment?: string;
}

export const KubernetesRenderMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployment: Schema.optional(Schema.String),
    kubernetesNamespace: Schema.optional(Schema.String),
    canaryDeployment: Schema.optional(Schema.String),
  }).annotate({ identifier: "KubernetesRenderMetadata" });

export interface RenderMetadata {
  /** Output only. Metadata associated with rendering for Cloud Run. */
  cloudRun?: CloudRunRenderMetadata;
  /** Output only. Custom metadata provided by user-defined render operation. */
  custom?: CustomMetadata;
  /** Output only. Metadata associated with rendering for a Kubernetes cluster (GKE or GKE Enterprise target). */
  kubernetes?: KubernetesRenderMetadata;
}

export const RenderMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cloudRun: Schema.optional(CloudRunRenderMetadata),
  custom: Schema.optional(CustomMetadata),
  kubernetes: Schema.optional(KubernetesRenderMetadata),
}).annotate({ identifier: "RenderMetadata" });

export interface TargetRender {
  /** Output only. Additional information about the render failure, if available. */
  failureMessage?: string;
  /** Output only. The resource name of the Cloud Build `Build` object that is used to render the manifest for this target. Format is `projects/{project}/locations/{location}/builds/{build}`. */
  renderingBuild?: string;
  /** Output only. Current state of the render operation for this Target. */
  renderingState?:
    | "TARGET_RENDER_STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "IN_PROGRESS"
    | (string & {});
  /** Output only. Reason this render failed. This will always be unspecified while the render in progress. */
  failureCause?:
    | "FAILURE_CAUSE_UNSPECIFIED"
    | "CLOUD_BUILD_UNAVAILABLE"
    | "EXECUTION_FAILED"
    | "CLOUD_BUILD_REQUEST_FAILED"
    | "VERIFICATION_CONFIG_NOT_FOUND"
    | "CUSTOM_ACTION_NOT_FOUND"
    | "DEPLOYMENT_STRATEGY_NOT_SUPPORTED"
    | "RENDER_FEATURE_NOT_SUPPORTED"
    | (string & {});
  /** Output only. Metadata related to the `Release` render for this Target. */
  metadata?: RenderMetadata;
}

export const TargetRender = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  failureMessage: Schema.optional(Schema.String),
  renderingBuild: Schema.optional(Schema.String),
  renderingState: Schema.optional(Schema.String),
  failureCause: Schema.optional(Schema.String),
  metadata: Schema.optional(RenderMetadata),
}).annotate({ identifier: "TargetRender" });

export interface SkaffoldGCSSource {
  /** Required. Cloud Storage source paths to copy recursively. For example, providing "gs://my-bucket/dir/configs/*" will result in Skaffold copying all files within the "dir/configs" directory in the bucket "my-bucket". */
  source?: string;
  /** Optional. Relative path from the source to the Skaffold file. */
  path?: string;
}

export const SkaffoldGCSSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  source: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
}).annotate({ identifier: "SkaffoldGCSSource" });

export interface SkaffoldGitSource {
  /** Optional. Git branch or tag to use when cloning the repository. */
  ref?: string;
  /** Required. Git repository the package should be cloned from. */
  repo?: string;
  /** Optional. Relative path from the repository root to the Skaffold file. */
  path?: string;
}

export const SkaffoldGitSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.optional(Schema.String),
  repo: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
}).annotate({ identifier: "SkaffoldGitSource" });

export interface SkaffoldGCBRepoSource {
  /** Optional. Branch or tag to use when cloning the repository. */
  ref?: string;
  /** Required. Name of the Cloud Build V2 Repository. Format is projects/{project}/locations/{location}/connections/{connection}/repositories/{repository}. */
  repository?: string;
  /** Optional. Relative path from the repository root to the Skaffold Config file. */
  path?: string;
}

export const SkaffoldGCBRepoSource = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.optional(Schema.String),
  repository: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
}).annotate({ identifier: "SkaffoldGCBRepoSource" });

export interface SkaffoldModules {
  /** Optional. Cloud Storage bucket containing the Skaffold Config modules. */
  googleCloudStorage?: SkaffoldGCSSource;
  /** Optional. Remote git repository containing the Skaffold Config modules. */
  git?: SkaffoldGitSource;
  /** Optional. Cloud Build V2 repository containing the Skaffold Config modules. */
  googleCloudBuildRepo?: SkaffoldGCBRepoSource;
  /** Optional. The Skaffold Config modules to use from the specified source. */
  configs?: ReadonlyArray<string>;
}

export const SkaffoldModules = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  googleCloudStorage: Schema.optional(SkaffoldGCSSource),
  git: Schema.optional(SkaffoldGitSource),
  googleCloudBuildRepo: Schema.optional(SkaffoldGCBRepoSource),
  configs: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "SkaffoldModules" });

export interface CustomTargetSkaffoldActions {
  /** Optional. The Skaffold custom action responsible for render operations. If not provided then Cloud Deploy will perform the render operations via `skaffold render`. */
  renderAction?: string;
  /** Optional. List of Skaffold modules Cloud Deploy will include in the Skaffold Config as required before performing diagnose. */
  includeSkaffoldModules?: ReadonlyArray<SkaffoldModules>;
  /** Required. The Skaffold custom action responsible for deploy operations. */
  deployAction?: string;
}

export const CustomTargetSkaffoldActions =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    renderAction: Schema.optional(Schema.String),
    includeSkaffoldModules: Schema.optional(Schema.Array(SkaffoldModules)),
    deployAction: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomTargetSkaffoldActions" });

export interface ContainerTask {
  /** Optional. Environment variables that are set in the container. */
  env?: Record<string, string>;
  /** Optional. Args is the container arguments to use. This overrides the default arguments defined in the container image. */
  args?: ReadonlyArray<string>;
  /** Required. Image is the container image to use. */
  image?: string;
  /** Optional. Command is the container entrypoint to use. This overrides the default entrypoint defined in the container image. */
  command?: ReadonlyArray<string>;
}

export const ContainerTask = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  env: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  args: Schema.optional(Schema.Array(Schema.String)),
  image: Schema.optional(Schema.String),
  command: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ContainerTask" });

export interface Task {
  /** Optional. This task is represented by a container that is executed in the Cloud Build execution environment. */
  container?: ContainerTask;
}

export const Task = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  container: Schema.optional(ContainerTask),
}).annotate({ identifier: "Task" });

export interface CustomTargetTasks {
  /** Optional. The task responsible for render operations. If not provided then Cloud Deploy will perform its default rendering operation. */
  render?: Task;
  /** Required. The task responsible for deploy operations. */
  deploy?: Task;
}

export const CustomTargetTasks = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  render: Schema.optional(Task),
  deploy: Schema.optional(Task),
}).annotate({ identifier: "CustomTargetTasks" });

export interface CustomTargetType {
  /** Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
  labels?: Record<string, string>;
  /** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
  annotations?: Record<string, string>;
  /** Optional. Configures render and deploy for the `CustomTargetType` using Skaffold custom actions. */
  customActions?: CustomTargetSkaffoldActions;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. Configures render and deploy for the `CustomTargetType` using tasks. */
  tasks?: CustomTargetTasks;
  /** Output only. Unique identifier of the `CustomTargetType`. */
  uid?: string;
  /** Identifier. Name of the `CustomTargetType`. Format is `projects/{project}/locations/{location}/customTargetTypes/{customTargetType}`. The `customTargetType` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name?: string;
  /** Output only. Most recent time at which the `CustomTargetType` was updated. */
  updateTime?: string;
  /** Optional. Description of the `CustomTargetType`. Max length is 255 characters. */
  description?: string;
  /** Output only. Resource id of the `CustomTargetType`. */
  customTargetTypeId?: string;
  /** Output only. Time at which the `CustomTargetType` was created. */
  createTime?: string;
}

export const CustomTargetType = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  customActions: Schema.optional(CustomTargetSkaffoldActions),
  etag: Schema.optional(Schema.String),
  tasks: Schema.optional(CustomTargetTasks),
  uid: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  customTargetTypeId: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomTargetType" });

export interface PipelineReadyCondition {
  /** Last time the condition was updated. */
  updateTime?: string;
  /** True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline. */
  status?: boolean;
}

export const PipelineReadyCondition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    updateTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Boolean),
  },
).annotate({ identifier: "PipelineReadyCondition" });

export interface TargetsPresentCondition {
  /** Last time the condition was updated. */
  updateTime?: string;
  /** The list of Target names that do not exist. For example, `projects/{project_id}/locations/{location_name}/targets/{target_name}`. */
  missingTargets?: ReadonlyArray<string>;
  /** True if there aren't any missing Targets. */
  status?: boolean;
}

export const TargetsPresentCondition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    missingTargets: Schema.optional(Schema.Array(Schema.String)),
    status: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "TargetsPresentCondition" });

export interface TargetsTypeCondition {
  /** True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters. */
  status?: boolean;
  /** Human readable error message. */
  errorDetails?: string;
}

export const TargetsTypeCondition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.Boolean),
  errorDetails: Schema.optional(Schema.String),
}).annotate({ identifier: "TargetsTypeCondition" });

export interface PipelineCondition {
  /** Details around the Pipeline's overall status. */
  pipelineReadyCondition?: PipelineReadyCondition;
  /** Details around targets enumerated in the pipeline. */
  targetsPresentCondition?: TargetsPresentCondition;
  /** Details on the whether the targets enumerated in the pipeline are of the same type. */
  targetsTypeCondition?: TargetsTypeCondition;
}

export const PipelineCondition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pipelineReadyCondition: Schema.optional(PipelineReadyCondition),
  targetsPresentCondition: Schema.optional(TargetsPresentCondition),
  targetsTypeCondition: Schema.optional(TargetsTypeCondition),
}).annotate({ identifier: "PipelineCondition" });

export interface DeployParameters {
  /** Required. Values are deploy parameters in key-value pairs. */
  values?: Record<string, string>;
  /** Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target). */
  matchTargetLabels?: Record<string, string>;
}

export const DeployParameters = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  values: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  matchTargetLabels: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
}).annotate({ identifier: "DeployParameters" });

export interface RouteDestinations {
  /** Required. The clusters where the Gateway API HTTPRoute resource will be deployed to. Valid entries include the associated entities IDs configured in the Target resource and "@self" to include the Target cluster. */
  destinationIds?: ReadonlyArray<string>;
  /** Optional. Whether to propagate the Kubernetes Service to the route destination clusters. The Service will always be deployed to the Target cluster even if the HTTPRoute is not. This option may be used to facilitate successful DNS lookup in the route destination clusters. Can only be set to true if destinations are specified. */
  propagateService?: boolean;
}

export const RouteDestinations = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  destinationIds: Schema.optional(Schema.Array(Schema.String)),
  propagateService: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "RouteDestinations" });

export interface GatewayServiceMesh {
  /** Required. Name of the Kubernetes Service. */
  service?: string;
  /** Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time. */
  stableCutbackDuration?: string;
  /** Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service. */
  deployment?: string;
  /** Required. Name of the Gateway API HTTPRoute. */
  httpRoute?: string;
  /** Optional. The label to use when selecting Pods for the Deployment and Service resources. This label must already be present in both resources. */
  podSelectorLabel?: string;
  /** Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time. */
  routeUpdateWaitTime?: string;
  /** Optional. Route destinations allow configuring the Gateway API HTTPRoute to be deployed to additional clusters. This option is available for multi-cluster service mesh set ups that require the route to exist in the clusters that call the service. If unspecified, the HTTPRoute will only be deployed to the Target cluster. */
  routeDestinations?: RouteDestinations;
}

export const GatewayServiceMesh = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  service: Schema.optional(Schema.String),
  stableCutbackDuration: Schema.optional(Schema.String),
  deployment: Schema.optional(Schema.String),
  httpRoute: Schema.optional(Schema.String),
  podSelectorLabel: Schema.optional(Schema.String),
  routeUpdateWaitTime: Schema.optional(Schema.String),
  routeDestinations: Schema.optional(RouteDestinations),
}).annotate({ identifier: "GatewayServiceMesh" });

export interface ServiceNetworking {
  /** Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster. */
  disablePodOverprovisioning?: boolean;
  /** Required. Name of the Kubernetes Service. */
  service?: string;
  /** Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service. */
  deployment?: string;
  /** Optional. The label to use when selecting Pods for the Deployment resource. This label must already be present in the Deployment. */
  podSelectorLabel?: string;
}

export const ServiceNetworking = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disablePodOverprovisioning: Schema.optional(Schema.Boolean),
  service: Schema.optional(Schema.String),
  deployment: Schema.optional(Schema.String),
  podSelectorLabel: Schema.optional(Schema.String),
}).annotate({ identifier: "ServiceNetworking" });

export interface KubernetesConfig {
  /** Optional. Kubernetes Gateway API service mesh configuration. */
  gatewayServiceMesh?: GatewayServiceMesh;
  /** Optional. Kubernetes Service networking configuration. */
  serviceNetworking?: ServiceNetworking;
}

export const KubernetesConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  gatewayServiceMesh: Schema.optional(GatewayServiceMesh),
  serviceNetworking: Schema.optional(ServiceNetworking),
}).annotate({ identifier: "KubernetesConfig" });

export interface CloudRunConfig {
  /** Optional. A list of tags that are added to the canary revision while the canary phase is in progress. */
  canaryRevisionTags?: ReadonlyArray<string>;
  /** Optional. Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments. */
  automaticTrafficControl?: boolean;
  /** Optional. A list of tags that are added to the prior revision while the canary phase is in progress. */
  priorRevisionTags?: ReadonlyArray<string>;
  /** Optional. A list of tags that are added to the final stable revision when the stable phase is applied. */
  stableRevisionTags?: ReadonlyArray<string>;
}

export const CloudRunConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  canaryRevisionTags: Schema.optional(Schema.Array(Schema.String)),
  automaticTrafficControl: Schema.optional(Schema.Boolean),
  priorRevisionTags: Schema.optional(Schema.Array(Schema.String)),
  stableRevisionTags: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "CloudRunConfig" });

export interface RuntimeConfig {
  /** Optional. Kubernetes runtime configuration. */
  kubernetes?: KubernetesConfig;
  /** Optional. Cloud Run runtime configuration. */
  cloudRun?: CloudRunConfig;
}

export const RuntimeConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kubernetes: Schema.optional(KubernetesConfig),
  cloudRun: Schema.optional(CloudRunConfig),
}).annotate({ identifier: "RuntimeConfig" });

export interface Postdeploy {
  /** Optional. The tasks that will run as a part of the postdeploy job. The tasks are executed sequentially in the order specified. Only one of `actions` or `tasks` can be specified. */
  tasks?: ReadonlyArray<Task>;
  /** Optional. A sequence of Skaffold custom actions to invoke during execution of the postdeploy job. */
  actions?: ReadonlyArray<string>;
}

export const Postdeploy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tasks: Schema.optional(Schema.Array(Task)),
  actions: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Postdeploy" });

export interface Verify {
  /** Optional. The tasks that will run as a part of the verify job. The tasks are executed sequentially in the order specified. */
  tasks?: ReadonlyArray<Task>;
}

export const Verify = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tasks: Schema.optional(Schema.Array(Task)),
}).annotate({ identifier: "Verify" });

export interface CustomCheck {
  /** Required. The ID of the custom Analysis check. */
  id?: string;
  /** Optional. The frequency at which the custom check will be run, with a minimum and default of 5 minutes. */
  frequency?: string;
  /** Required. The Task to be run for this custom check. */
  task?: Task;
}

export const CustomCheck = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  frequency: Schema.optional(Schema.String),
  task: Schema.optional(Task),
}).annotate({ identifier: "CustomCheck" });

export interface AlertPolicyCheck {
  /** Required. The ID of the analysis check. */
  id?: string;
  /** Optional. A set of labels to filter active alerts. If set, only alerts having all of the specified labels will be considered. Otherwise, all active alerts will be considered. */
  labels?: Record<string, string>;
  /** Required. The Cloud Monitoring Alert Policies to check for active alerts. Format is `projects/{project}/alertPolicies/{alert_policy}`. */
  alertPolicies?: ReadonlyArray<string>;
}

export const AlertPolicyCheck = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  alertPolicies: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "AlertPolicyCheck" });

export interface GoogleCloudAnalysis {
  /** Optional. A list of Cloud Monitoring Alert Policy checks to perform as part of the analysis. */
  alertPolicyChecks?: ReadonlyArray<AlertPolicyCheck>;
}

export const GoogleCloudAnalysis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alertPolicyChecks: Schema.optional(Schema.Array(AlertPolicyCheck)),
}).annotate({ identifier: "GoogleCloudAnalysis" });

export interface Analysis {
  /** Optional. Custom analysis checks from 3P metric providers. */
  customChecks?: ReadonlyArray<CustomCheck>;
  /** Required. The amount of time in minutes the analysis on the target will last. If all analysis checks have successfully completed before the specified duration, the analysis is successful. If a check is still running while the specified duration passes, it will wait for that check to complete to determine if the analysis is successful. The maximum duration is 48 hours. */
  duration?: string;
  /** Optional. Google Cloud - based analysis checks. */
  googleCloud?: GoogleCloudAnalysis;
}

export const Analysis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customChecks: Schema.optional(Schema.Array(CustomCheck)),
  duration: Schema.optional(Schema.String),
  googleCloud: Schema.optional(GoogleCloudAnalysis),
}).annotate({ identifier: "Analysis" });

export interface Predeploy {
  /** Optional. The tasks that will run as a part of the predeploy job. The tasks are executed sequentially in the order specified. Only one of `actions` or `tasks` can be specified. */
  tasks?: ReadonlyArray<Task>;
  /** Optional. A sequence of Skaffold custom actions to invoke during execution of the predeploy job. */
  actions?: ReadonlyArray<string>;
}

export const Predeploy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tasks: Schema.optional(Schema.Array(Task)),
  actions: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Predeploy" });

export interface CanaryDeployment {
  /** Optional. Whether to run verify tests after each percentage deployment via `skaffold verify`. */
  verify?: boolean;
  /** Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100. If the GatewayServiceMesh is configured for Kubernetes, then the range for n is 0 <= n <= 100. */
  percentages?: ReadonlyArray<number>;
  /** Optional. Configuration for the postdeploy job of the last phase. If this is not configured, there will be no postdeploy job for this phase. */
  postdeploy?: Postdeploy;
  /** Optional. Configuration for the verify job. Cannot be set if `verify` is set to true. */
  verifyConfig?: Verify;
  /** Optional. Configuration for the analysis job. If configured, the analysis will run after each percentage deployment. */
  analysis?: Analysis;
  /** Optional. Configuration for the predeploy job of the first phase. If this is not configured, there will be no predeploy job for this phase. */
  predeploy?: Predeploy;
}

export const CanaryDeployment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  verify: Schema.optional(Schema.Boolean),
  percentages: Schema.optional(Schema.Array(Schema.Number)),
  postdeploy: Schema.optional(Postdeploy),
  verifyConfig: Schema.optional(Verify),
  analysis: Schema.optional(Analysis),
  predeploy: Schema.optional(Predeploy),
}).annotate({ identifier: "CanaryDeployment" });

export interface PhaseConfig {
  /** Optional. Configuration for the postdeploy job of this phase. If this is not configured, there will be no postdeploy job for this phase. */
  postdeploy?: Postdeploy;
  /** Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  phaseId?: string;
  /** Optional. Configuration for the analysis job of this phase. If this is not configured, there will be no analysis job for this phase. */
  analysis?: Analysis;
  /** Optional. Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage. */
  profiles?: ReadonlyArray<string>;
  /** Required. Percentage deployment for the phase. */
  percentage?: number;
  /** Optional. Whether to run verify tests after the deployment via `skaffold verify`. */
  verify?: boolean;
  /** Optional. Configuration for the verify job. Cannot be set if `verify` is set to true. */
  verifyConfig?: Verify;
  /** Optional. Configuration for the predeploy job of this phase. If this is not configured, there will be no predeploy job for this phase. */
  predeploy?: Predeploy;
}

export const PhaseConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postdeploy: Schema.optional(Postdeploy),
  phaseId: Schema.optional(Schema.String),
  analysis: Schema.optional(Analysis),
  profiles: Schema.optional(Schema.Array(Schema.String)),
  percentage: Schema.optional(Schema.Number),
  verify: Schema.optional(Schema.Boolean),
  verifyConfig: Schema.optional(Verify),
  predeploy: Schema.optional(Predeploy),
}).annotate({ identifier: "PhaseConfig" });

export interface CustomCanaryDeployment {
  /** Required. Configuration for each phase in the canary deployment in the order executed. */
  phaseConfigs?: ReadonlyArray<PhaseConfig>;
}

export const CustomCanaryDeployment = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    phaseConfigs: Schema.optional(Schema.Array(PhaseConfig)),
  },
).annotate({ identifier: "CustomCanaryDeployment" });

export interface Canary {
  /** Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment. */
  runtimeConfig?: RuntimeConfig;
  /** Optional. Configures the progressive based deployment for a Target. */
  canaryDeployment?: CanaryDeployment;
  /** Optional. Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments. */
  customCanaryDeployment?: CustomCanaryDeployment;
}

export const Canary = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  runtimeConfig: Schema.optional(RuntimeConfig),
  canaryDeployment: Schema.optional(CanaryDeployment),
  customCanaryDeployment: Schema.optional(CustomCanaryDeployment),
}).annotate({ identifier: "Canary" });

export interface Standard {
  /** Optional. Whether to verify a deployment via `skaffold verify`. */
  verify?: boolean;
  /** Optional. Configuration for the verify job. Cannot be set if `verify` is set to true. */
  verifyConfig?: Verify;
  /** Optional. Configuration for the predeploy job. If this is not configured, the predeploy job will not be present. */
  predeploy?: Predeploy;
  /** Optional. Configuration for the postdeploy job. If this is not configured, the postdeploy job will not be present. */
  postdeploy?: Postdeploy;
  /** Optional. Configuration for the analysis job. If this is not configured, the analysis job will not be present. */
  analysis?: Analysis;
}

export const Standard = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  verify: Schema.optional(Schema.Boolean),
  verifyConfig: Schema.optional(Verify),
  predeploy: Schema.optional(Predeploy),
  postdeploy: Schema.optional(Postdeploy),
  analysis: Schema.optional(Analysis),
}).annotate({ identifier: "Standard" });

export interface Strategy {
  /** Optional. Canary deployment strategy provides progressive percentage based deployments to a Target. */
  canary?: Canary;
  /** Optional. Standard deployment strategy executes a single deploy and allows verifying the deployment. */
  standard?: Standard;
}

export const Strategy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  canary: Schema.optional(Canary),
  standard: Schema.optional(Standard),
}).annotate({ identifier: "Strategy" });

export interface Stage {
  /** Optional. The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`. */
  targetId?: string;
  /** Optional. The deploy parameters to use for the target in this stage. */
  deployParameters?: ReadonlyArray<DeployParameters>;
  /** Optional. The strategy to use for a `Rollout` to this stage. */
  strategy?: Strategy;
  /** Optional. Skaffold profiles to use when rendering the manifest for this stage's `Target`. */
  profiles?: ReadonlyArray<string>;
}

export const Stage = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetId: Schema.optional(Schema.String),
  deployParameters: Schema.optional(Schema.Array(DeployParameters)),
  strategy: Schema.optional(Strategy),
  profiles: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "Stage" });

export interface SerialPipeline {
  /** Optional. Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow. */
  stages?: ReadonlyArray<Stage>;
}

export const SerialPipeline = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stages: Schema.optional(Schema.Array(Stage)),
}).annotate({ identifier: "SerialPipeline" });

export interface DeliveryPipeline {
  /** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
  labels?: Record<string, string>;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. */
  annotations?: Record<string, string>;
  /** Output only. Most recent time at which the pipeline was updated. */
  updateTime?: string;
  /** Output only. Unique identifier of the `DeliveryPipeline`. */
  uid?: string;
  /** Output only. Information around the state of the Delivery Pipeline. */
  condition?: PipelineCondition;
  /** Optional. Description of the `DeliveryPipeline`. Max length is 255 characters. */
  description?: string;
  /** Output only. Time at which the pipeline was created. */
  createTime?: string;
  /** Optional. When suspended, no new releases or rollouts can be created, but in-progress ones will complete. */
  suspended?: boolean;
  /** Identifier. Name of the `DeliveryPipeline`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}`. The `deliveryPipeline` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name?: string;
  /** Optional. SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`. */
  serialPipeline?: SerialPipeline;
}

export const DeliveryPipeline = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  updateTime: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  condition: Schema.optional(PipelineCondition),
  description: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  suspended: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  serialPipeline: Schema.optional(SerialPipeline),
}).annotate({ identifier: "DeliveryPipeline" });

export interface CustomTarget {
  /** Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`. */
  customTargetType?: string;
}

export const CustomTarget = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customTargetType: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomTarget" });

export interface GkeCluster {
  /** Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`. */
  cluster?: string;
  /** Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. */
  proxyUrl?: string;
  /** Optional. If set, the cluster will be accessed using the DNS endpoint. Note that both `dns_endpoint` and `internal_ip` cannot be set to true. */
  dnsEndpoint?: boolean;
  /** Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept). Note that `internal_ip` and `dns_endpoint` cannot both be set to true. */
  internalIp?: boolean;
}

export const GkeCluster = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cluster: Schema.optional(Schema.String),
  proxyUrl: Schema.optional(Schema.String),
  dnsEndpoint: Schema.optional(Schema.Boolean),
  internalIp: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "GkeCluster" });

export interface DefaultPool {
  /** Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used. */
  artifactStorage?: string;
  /** Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. */
  serviceAccount?: string;
}

export const DefaultPool = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  artifactStorage: Schema.optional(Schema.String),
  serviceAccount: Schema.optional(Schema.String),
}).annotate({ identifier: "DefaultPool" });

export interface PrivatePool {
  /** Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used. */
  serviceAccount?: string;
  /** Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`. */
  workerPool?: string;
  /** Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used. */
  artifactStorage?: string;
}

export const PrivatePool = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceAccount: Schema.optional(Schema.String),
  workerPool: Schema.optional(Schema.String),
  artifactStorage: Schema.optional(Schema.String),
}).annotate({ identifier: "PrivatePool" });

export interface ExecutionConfig {
  /** Optional. If true, additional logging will be enabled when running builds in this execution environment. */
  verbose?: boolean;
  /** Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used. */
  executionTimeout?: string;
  /** Required. Usages when this configuration should be applied. */
  usages?: ReadonlyArray<
    | "EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED"
    | "RENDER"
    | "DEPLOY"
    | "VERIFY"
    | "PREDEPLOY"
    | "POSTDEPLOY"
    | "ANALYSIS"
    | (string & {})
  >;
  /** Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used. */
  artifactStorage?: string;
  /** Optional. Use default Cloud Build pool. */
  defaultPool?: DefaultPool;
  /** Optional. Use private Cloud Build pool. */
  privatePool?: PrivatePool;
  /** Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. */
  serviceAccount?: string;
  /** Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used. */
  workerPool?: string;
}

export const ExecutionConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  verbose: Schema.optional(Schema.Boolean),
  executionTimeout: Schema.optional(Schema.String),
  usages: Schema.optional(Schema.Array(Schema.String)),
  artifactStorage: Schema.optional(Schema.String),
  defaultPool: Schema.optional(DefaultPool),
  privatePool: Schema.optional(PrivatePool),
  serviceAccount: Schema.optional(Schema.String),
  workerPool: Schema.optional(Schema.String),
}).annotate({ identifier: "ExecutionConfig" });

export interface CloudRunLocation {
  /** Required. The location for the Cloud Run Service. Format must be `projects/{project}/locations/{location}`. */
  location?: string;
}

export const CloudRunLocation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(Schema.String),
}).annotate({ identifier: "CloudRunLocation" });

export interface AnthosCluster {
  /** Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. */
  membership?: string;
}

export const AnthosCluster = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  membership: Schema.optional(Schema.String),
}).annotate({ identifier: "AnthosCluster" });

export interface AssociatedEntities {
  /** Optional. Information specifying Anthos clusters as associated entities. */
  anthosClusters?: ReadonlyArray<AnthosCluster>;
  /** Optional. Information specifying GKE clusters as associated entities. */
  gkeClusters?: ReadonlyArray<GkeCluster>;
}

export const AssociatedEntities = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  anthosClusters: Schema.optional(Schema.Array(AnthosCluster)),
  gkeClusters: Schema.optional(Schema.Array(GkeCluster)),
}).annotate({ identifier: "AssociatedEntities" });

export interface MultiTarget {
  /** Required. The target_ids of this multiTarget. */
  targetIds?: ReadonlyArray<string>;
}

export const MultiTarget = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  targetIds: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "MultiTarget" });

export interface Target {
  /** Output only. Unique identifier of the `Target`. */
  uid?: string;
  /** Optional. Information specifying a Custom Target. */
  customTarget?: CustomTarget;
  /** Optional. Description of the `Target`. Max length is 255 characters. */
  description?: string;
  /** Output only. Time at which the `Target` was created. */
  createTime?: string;
  /** Optional. Information specifying a GKE Cluster. */
  gke?: GkeCluster;
  /** Optional. Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`. */
  executionConfigs?: ReadonlyArray<ExecutionConfig>;
  /** Optional. Information specifying a Cloud Run deployment target. */
  run?: CloudRunLocation;
  /** Output only. Most recent time at which the `Target` was updated. */
  updateTime?: string;
  /** Optional. The deploy parameters to use for this target. */
  deployParameters?: Record<string, string>;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. Resource id of the `Target`. */
  targetId?: string;
  /** Optional. Map of entity IDs to their associated entities. Associated entities allows specifying places other than the deployment target for specific features. For example, the Gateway API canary can be configured to deploy the HTTPRoute to a different cluster(s) than the deployment cluster using associated entities. An entity ID must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  associatedEntities?: Record<string, AssociatedEntities>;
  /** Identifier. Name of the `Target`. Format is `projects/{project}/locations/{location}/targets/{target}`. The `target` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name?: string;
  /** Optional. Information specifying a multiTarget. */
  multiTarget?: MultiTarget;
  /** Optional. Whether or not the `Target` requires approval. */
  requireApproval?: boolean;
  /** Optional. Information specifying an Anthos Cluster. */
  anthosCluster?: AnthosCluster;
  /** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
  annotations?: Record<string, string>;
  /** Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
  labels?: Record<string, string>;
}

export const Target = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uid: Schema.optional(Schema.String),
  customTarget: Schema.optional(CustomTarget),
  description: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  gke: Schema.optional(GkeCluster),
  executionConfigs: Schema.optional(Schema.Array(ExecutionConfig)),
  run: Schema.optional(CloudRunLocation),
  updateTime: Schema.optional(Schema.String),
  deployParameters: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  etag: Schema.optional(Schema.String),
  targetId: Schema.optional(Schema.String),
  associatedEntities: Schema.optional(
    Schema.Record(Schema.String, AssociatedEntities),
  ),
  name: Schema.optional(Schema.String),
  multiTarget: Schema.optional(MultiTarget),
  requireApproval: Schema.optional(Schema.Boolean),
  anthosCluster: Schema.optional(AnthosCluster),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "Target" });

export interface ToolVersions {
  /** Optional. The Docker version to use for Cloud Deploy operations. */
  docker?: string;
  /** Optional. The Kustomize version to use for Cloud Deploy operations. */
  kustomize?: string;
  /** Optional. The Helm version to use for Cloud Deploy operations. */
  helm?: string;
  /** Optional. The kpt version to use for Cloud Deploy operations. */
  kpt?: string;
  /** Optional. The Kubectl version to use for Cloud Deploy operations. */
  kubectl?: string;
  /** Optional. The Skaffold version to use for Cloud Deploy operations. */
  skaffold?: string;
}

export const ToolVersions = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  docker: Schema.optional(Schema.String),
  kustomize: Schema.optional(Schema.String),
  helm: Schema.optional(Schema.String),
  kpt: Schema.optional(Schema.String),
  kubectl: Schema.optional(Schema.String),
  skaffold: Schema.optional(Schema.String),
}).annotate({ identifier: "ToolVersions" });

export interface PhaseArtifact {
  /** Output only. File path of the resolved Skaffold configuration relative to the URI. */
  skaffoldConfigPath?: string;
  /** Output only. File path of the directory of rendered job manifests relative to the URI. This is only set if it is applicable. */
  jobManifestsPath?: string;
  /** Output only. File path of the rendered manifest relative to the URI. */
  manifestPath?: string;
}

export const PhaseArtifact = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  skaffoldConfigPath: Schema.optional(Schema.String),
  jobManifestsPath: Schema.optional(Schema.String),
  manifestPath: Schema.optional(Schema.String),
}).annotate({ identifier: "PhaseArtifact" });

export interface TargetArtifact {
  /** Output only. Map from the phase ID to the phase artifacts for the `Target`. */
  phaseArtifacts?: Record<string, PhaseArtifact>;
  /** Output only. File path of the rendered manifest relative to the URI for the stable phase. */
  manifestPath?: string;
  /** Output only. URI of a directory containing the artifacts. This contains deployment configuration used by Skaffold during a rollout, and all paths are relative to this location. */
  artifactUri?: string;
  /** Output only. File path of the resolved Skaffold configuration for the stable phase, relative to the URI. */
  skaffoldConfigPath?: string;
}

export const TargetArtifact = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  phaseArtifacts: Schema.optional(Schema.Record(Schema.String, PhaseArtifact)),
  manifestPath: Schema.optional(Schema.String),
  artifactUri: Schema.optional(Schema.String),
  skaffoldConfigPath: Schema.optional(Schema.String),
}).annotate({ identifier: "TargetArtifact" });

export interface BuildArtifact {
  /** Optional. Image name in Skaffold configuration. */
  image?: string;
  /** Optional. Image tag to use. This will generally be the full path to an image, such as "gcr.io/my-project/busybox:1.2.3" or "gcr.io/my-project/busybox@sha256:abc123". */
  tag?: string;
}

export const BuildArtifact = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  image: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
}).annotate({ identifier: "BuildArtifact" });

export interface ReleaseReadyCondition {
  /** True if the Release is in a valid state. Otherwise at least one condition in `ReleaseCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Release. */
  status?: boolean;
}

export const ReleaseReadyCondition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "ReleaseReadyCondition" });

export interface ToolVersionSupportedCondition {
  /** Output only. The tool support state for this release's version of the tool. */
  toolVersionSupportState?:
    | "TOOL_VERSION_SUPPORT_STATE_UNSPECIFIED"
    | "TOOL_VERSION_SUPPORT_STATE_SUPPORTED"
    | "TOOL_VERSION_SUPPORT_STATE_MAINTENANCE_MODE"
    | "TOOL_VERSION_SUPPORT_STATE_UNSUPPORTED"
    | (string & {});
  /** Output only. True if the version of Tool used by this release is supported. */
  status?: boolean;
  /** Output only. The time at which this release's version of the tool will no longer be supported. */
  supportExpirationTime?: string;
  /** Output only. The time at which this release's version of the tool will enter maintenance mode. */
  maintenanceModeTime?: string;
}

export const ToolVersionSupportedCondition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    toolVersionSupportState: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Boolean),
    supportExpirationTime: Schema.optional(Schema.String),
    maintenanceModeTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ToolVersionSupportedCondition" });

export interface SkaffoldSupportedCondition {
  /** The time at which this release's version of Skaffold will enter maintenance mode. */
  maintenanceModeTime?: string;
  /** The Skaffold support state for this release's version of Skaffold. */
  skaffoldSupportState?:
    | "SKAFFOLD_SUPPORT_STATE_UNSPECIFIED"
    | "SKAFFOLD_SUPPORT_STATE_SUPPORTED"
    | "SKAFFOLD_SUPPORT_STATE_MAINTENANCE_MODE"
    | "SKAFFOLD_SUPPORT_STATE_UNSUPPORTED"
    | (string & {});
  /** The time at which this release's version of Skaffold will no longer be supported. */
  supportExpirationTime?: string;
  /** True if the version of Skaffold used by this release is supported. */
  status?: boolean;
}

export const SkaffoldSupportedCondition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maintenanceModeTime: Schema.optional(Schema.String),
    skaffoldSupportState: Schema.optional(Schema.String),
    supportExpirationTime: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SkaffoldSupportedCondition" });

export interface ReleaseCondition {
  /** Details around the Releases's overall status. */
  releaseReadyCondition?: ReleaseReadyCondition;
  /** Output only. Details around the support state of the release's Kubectl version. */
  kubectlVersionSupportedCondition?: ToolVersionSupportedCondition;
  /** Details around the support state of the release's Skaffold version. */
  skaffoldSupportedCondition?: SkaffoldSupportedCondition;
  /** Output only. Details around the support state of the release's Docker version. */
  dockerVersionSupportedCondition?: ToolVersionSupportedCondition;
  /** Output only. Details around the support state of the release's Kustomize version. */
  kustomizeVersionSupportedCondition?: ToolVersionSupportedCondition;
  /** Output only. Details around the support state of the release's Helm version. */
  helmVersionSupportedCondition?: ToolVersionSupportedCondition;
  /** Output only. Details around the support state of the release's kpt version. */
  kptVersionSupportedCondition?: ToolVersionSupportedCondition;
  /** Output only. Details around the support state of the release's Skaffold version. */
  skaffoldVersionSupportedCondition?: ToolVersionSupportedCondition;
}

export const ReleaseCondition = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  releaseReadyCondition: Schema.optional(ReleaseReadyCondition),
  kubectlVersionSupportedCondition: Schema.optional(
    ToolVersionSupportedCondition,
  ),
  skaffoldSupportedCondition: Schema.optional(SkaffoldSupportedCondition),
  dockerVersionSupportedCondition: Schema.optional(
    ToolVersionSupportedCondition,
  ),
  kustomizeVersionSupportedCondition: Schema.optional(
    ToolVersionSupportedCondition,
  ),
  helmVersionSupportedCondition: Schema.optional(ToolVersionSupportedCondition),
  kptVersionSupportedCondition: Schema.optional(ToolVersionSupportedCondition),
  skaffoldVersionSupportedCondition: Schema.optional(
    ToolVersionSupportedCondition,
  ),
}).annotate({ identifier: "ReleaseCondition" });

export interface Release {
  /** Output only. Time at which the render completed. */
  renderEndTime?: string;
  /** Optional. The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used. */
  skaffoldVersion?: string;
  /** Output only. Snapshot of the custom target types referenced by the targets taken at release creation time. */
  customTargetTypeSnapshots?: ReadonlyArray<CustomTargetType>;
  /** Output only. Time at which the render began. */
  renderStartTime?: string;
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. Snapshot of the parent pipeline taken at release creation time. */
  deliveryPipelineSnapshot?: DeliveryPipeline;
  /** Optional. Cloud Storage URI of tar.gz archive containing Skaffold configuration. */
  skaffoldConfigUri?: string;
  /** Identifier. Name of the `Release`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}`. The `release` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name?: string;
  /** Output only. Time at which the `Release` was created. */
  createTime?: string;
  /** Optional. Filepath of the Skaffold config inside of the config URI. */
  skaffoldConfigPath?: string;
  /** Output only. Current state of the render operation. */
  renderState?:
    | "RENDER_STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "IN_PROGRESS"
    | (string & {});
  /** Output only. Indicates whether this is an abandoned release. */
  abandoned?: boolean;
  /** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
  annotations?: Record<string, string>;
  /** Output only. Map from target ID to details of the render operation for that target. */
  targetRenders?: Record<string, TargetRender>;
  /** Optional. The deploy parameters to use for all targets in this release. */
  deployParameters?: Record<string, string>;
  /** Output only. Snapshot of the targets taken at release creation time. */
  targetSnapshots?: ReadonlyArray<Target>;
  /** Optional. The tool versions to use for this release and all subsequent operations involving this release. If unset, tool versions are frozen when the release is created. */
  toolVersions?: ToolVersions;
  /** Output only. Map from target ID to the target artifacts created during the render operation. */
  targetArtifacts?: Record<string, TargetArtifact>;
  /** Output only. Unique identifier of the `Release`. */
  uid?: string;
  /** Optional. List of artifacts to pass through to Skaffold command. */
  buildArtifacts?: ReadonlyArray<BuildArtifact>;
  /** Output only. Information around the state of the Release. */
  condition?: ReleaseCondition;
  /** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
  labels?: Record<string, string>;
  /** Optional. Description of the `Release`. Max length is 255 characters. */
  description?: string;
}

export const Release = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  renderEndTime: Schema.optional(Schema.String),
  skaffoldVersion: Schema.optional(Schema.String),
  customTargetTypeSnapshots: Schema.optional(Schema.Array(CustomTargetType)),
  renderStartTime: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  deliveryPipelineSnapshot: Schema.optional(DeliveryPipeline),
  skaffoldConfigUri: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  skaffoldConfigPath: Schema.optional(Schema.String),
  renderState: Schema.optional(Schema.String),
  abandoned: Schema.optional(Schema.Boolean),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  targetRenders: Schema.optional(Schema.Record(Schema.String, TargetRender)),
  deployParameters: Schema.optional(
    Schema.Record(Schema.String, Schema.String),
  ),
  targetSnapshots: Schema.optional(Schema.Array(Target)),
  toolVersions: Schema.optional(ToolVersions),
  targetArtifacts: Schema.optional(
    Schema.Record(Schema.String, TargetArtifact),
  ),
  uid: Schema.optional(Schema.String),
  buildArtifacts: Schema.optional(Schema.Array(BuildArtifact)),
  condition: Schema.optional(ReleaseCondition),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  description: Schema.optional(Schema.String),
}).annotate({ identifier: "Release" });

export interface AdvanceRolloutOperation {
  /** Output only. How long the operation will be paused. */
  wait?: string;
  /** Output only. The phase of a deployment that initiated the operation. */
  sourcePhase?: string;
  /** Output only. The name of the rollout that initiates the `AutomationRun`. */
  rollout?: string;
  /** Output only. The phase the rollout will be advanced to. */
  destinationPhase?: string;
}

export const AdvanceRolloutOperation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wait: Schema.optional(Schema.String),
    sourcePhase: Schema.optional(Schema.String),
    rollout: Schema.optional(Schema.String),
    destinationPhase: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvanceRolloutOperation" });

export interface TargetAttribute {
  /** Target labels. */
  labels?: Record<string, string>;
  /** Optional. ID of the `Target`. The value of this field could be one of the following: * The last segment of a target name * "*", all targets in a location */
  id?: string;
}

export const TargetAttribute = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "TargetAttribute" });

export interface AutomationResourceSelector {
  /** Optional. Contains attributes about a target. */
  targets?: ReadonlyArray<TargetAttribute>;
}

export const AutomationResourceSelector =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targets: Schema.optional(Schema.Array(TargetAttribute)),
  }).annotate({ identifier: "AutomationResourceSelector" });

export interface Rollback {
  /** Optional. If pending rollout exists on the target, the rollback operation will be aborted. */
  disableRollbackIfRolloutPending?: boolean;
  /** Optional. The starting phase ID for the `Rollout`. If unspecified, the `Rollout` will start in the stable phase. */
  destinationPhase?: string;
}

export const Rollback = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disableRollbackIfRolloutPending: Schema.optional(Schema.Boolean),
  destinationPhase: Schema.optional(Schema.String),
}).annotate({ identifier: "Rollback" });

export interface Retry {
  /** Optional. The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if `wait` is 0. */
  backoffMode?:
    | "BACKOFF_MODE_UNSPECIFIED"
    | "BACKOFF_MODE_LINEAR"
    | "BACKOFF_MODE_EXPONENTIAL"
    | (string & {});
  /** Required. Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10. */
  attempts?: string;
  /** Optional. How long to wait for the first retry. Default is 0, and the maximum value is 14d. */
  wait?: string;
}

export const Retry = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  backoffMode: Schema.optional(Schema.String),
  attempts: Schema.optional(Schema.String),
  wait: Schema.optional(Schema.String),
}).annotate({ identifier: "Retry" });

export interface RepairPhaseConfig {
  /** Optional. Rolls back a `Rollout`. */
  rollback?: Rollback;
  /** Optional. Retries a failed job. */
  retry?: Retry;
}

export const RepairPhaseConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rollback: Schema.optional(Rollback),
  retry: Schema.optional(Retry),
}).annotate({ identifier: "RepairPhaseConfig" });

export interface Targets {
  /** Optional. The source target ID. */
  sourceTargetId?: string;
  /** Optional. The destination target ID. */
  destinationTargetId?: string;
}

export const Targets = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sourceTargetId: Schema.optional(Schema.String),
  destinationTargetId: Schema.optional(Schema.String),
}).annotate({ identifier: "Targets" });

export interface TimedPromoteReleaseCondition {
  /** Output only. A list of targets involved in the upcoming timed promotion(s). */
  targetsList?: ReadonlyArray<Targets>;
  /** Output only. When the next scheduled promotion(s) will occur. */
  nextPromotionTime?: string;
}

export const TimedPromoteReleaseCondition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetsList: Schema.optional(Schema.Array(Targets)),
    nextPromotionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimedPromoteReleaseCondition" });

export interface AutomationRuleCondition {
  /** Optional. TimedPromoteReleaseCondition contains rule conditions specific to a an Automation with a timed promote release rule defined. */
  timedPromoteReleaseCondition?: TimedPromoteReleaseCondition;
  /** Optional. Details around targets enumerated in the rule. */
  targetsPresentCondition?: TargetsPresentCondition;
}

export const AutomationRuleCondition =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    timedPromoteReleaseCondition: Schema.optional(TimedPromoteReleaseCondition),
    targetsPresentCondition: Schema.optional(TargetsPresentCondition),
  }).annotate({ identifier: "AutomationRuleCondition" });

export interface RepairRolloutRule {
  /** Required. Defines the types of automatic repair phases for failed jobs. */
  repairPhases?: ReadonlyArray<RepairPhaseConfig>;
  /** Optional. Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  phases?: ReadonlyArray<string>;
  /** Optional. Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in `source_phase`. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  jobs?: ReadonlyArray<string>;
  /** Output only. Information around the state of the 'Automation' rule. */
  condition?: AutomationRuleCondition;
  /** Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  id?: string;
}

export const RepairRolloutRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  repairPhases: Schema.optional(Schema.Array(RepairPhaseConfig)),
  phases: Schema.optional(Schema.Array(Schema.String)),
  jobs: Schema.optional(Schema.Array(Schema.String)),
  condition: Schema.optional(AutomationRuleCondition),
  id: Schema.optional(Schema.String),
}).annotate({ identifier: "RepairRolloutRule" });

export interface TimedPromoteReleaseRule {
  /** Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name * "@next", the next target in the promotion sequence */
  destinationTargetId?: string;
  /** Required. ID of the rule. This ID must be unique in the `Automation` resource to which this rule belongs. The format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  id?: string;
  /** Output only. Information around the state of the Automation rule. */
  condition?: AutomationRuleCondition;
  /** Required. The time zone in IANA format [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/New_York). */
  timeZone?: string;
  /** Optional. The starting phase of the rollout created by this rule. Default to the first phase. */
  destinationPhase?: string;
  /** Required. Schedule in crontab format. e.g. "0 9 * * 1" for every Monday at 9am. */
  schedule?: string;
}

export const TimedPromoteReleaseRule =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    destinationTargetId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    condition: Schema.optional(AutomationRuleCondition),
    timeZone: Schema.optional(Schema.String),
    destinationPhase: Schema.optional(Schema.String),
    schedule: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimedPromoteReleaseRule" });

export interface AdvanceRolloutRule {
  /** Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  id?: string;
  /** Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. */
  sourcePhases?: ReadonlyArray<string>;
  /** Optional. How long to wait after a rollout is finished. */
  wait?: string;
  /** Output only. Information around the state of the Automation rule. */
  condition?: AutomationRuleCondition;
}

export const AdvanceRolloutRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  sourcePhases: Schema.optional(Schema.Array(Schema.String)),
  wait: Schema.optional(Schema.String),
  condition: Schema.optional(AutomationRuleCondition),
}).annotate({ identifier: "AdvanceRolloutRule" });

export interface PromoteReleaseRule {
  /** Optional. The starting phase of the rollout created by this operation. Default to the first phase. */
  destinationPhase?: string;
  /** Optional. The ID of the stage in the pipeline to which this `Release` is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name * "@next", the next target in the promotion sequence */
  destinationTargetId?: string;
  /** Optional. How long the release need to be paused until being promoted to the next target. */
  wait?: string;
  /** Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  id?: string;
  /** Output only. Information around the state of the Automation rule. */
  condition?: AutomationRuleCondition;
}

export const PromoteReleaseRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  destinationPhase: Schema.optional(Schema.String),
  destinationTargetId: Schema.optional(Schema.String),
  wait: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  condition: Schema.optional(AutomationRuleCondition),
}).annotate({ identifier: "PromoteReleaseRule" });

export interface AutomationRule {
  /** Optional. The `RepairRolloutRule` will automatically repair a failed rollout. */
  repairRolloutRule?: RepairRolloutRule;
  /** Optional. The `TimedPromoteReleaseRule` will automatically promote a release from the current target(s) to the specified target(s) on a configured schedule. */
  timedPromoteReleaseRule?: TimedPromoteReleaseRule;
  /** Optional. The `AdvanceRolloutRule` will automatically advance a successful Rollout. */
  advanceRolloutRule?: AdvanceRolloutRule;
  /** Optional. `PromoteReleaseRule` will automatically promote a release from the current target to a specified target. */
  promoteReleaseRule?: PromoteReleaseRule;
}

export const AutomationRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  repairRolloutRule: Schema.optional(RepairRolloutRule),
  timedPromoteReleaseRule: Schema.optional(TimedPromoteReleaseRule),
  advanceRolloutRule: Schema.optional(AdvanceRolloutRule),
  promoteReleaseRule: Schema.optional(PromoteReleaseRule),
}).annotate({ identifier: "AutomationRule" });

export interface Automation {
  /** Optional. Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters. */
  labels?: Record<string, string>;
  /** Output only. Time at which the automation was updated. */
  updateTime?: string;
  /** Optional. Description of the `Automation`. Max length is 255 characters. */
  description?: string;
  /** Optional. The weak etag of the `Automation` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. Unique identifier of the `Automation`. */
  uid?: string;
  /** Required. Selected resources to which the automation will be applied. */
  selector?: AutomationResourceSelector;
  /** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details. */
  annotations?: Record<string, string>;
  /** Output only. Time at which the automation was created. */
  createTime?: string;
  /** Optional. When Suspended, automation is deactivated from execution. */
  suspended?: boolean;
  /** Output only. Name of the `Automation`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automations/{automation}`. */
  name?: string;
  /** Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. */
  serviceAccount?: string;
  /** Required. List of Automation rules associated with the Automation resource. Must have at least one rule and limited to 250 rules per Delivery Pipeline. Note: the order of the rules here is not the same as the order of execution. */
  rules?: ReadonlyArray<AutomationRule>;
}

export const Automation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  updateTime: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  selector: Schema.optional(AutomationResourceSelector),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  createTime: Schema.optional(Schema.String),
  suspended: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  serviceAccount: Schema.optional(Schema.String),
  rules: Schema.optional(Schema.Array(AutomationRule)),
}).annotate({ identifier: "Automation" });

export interface ListAutomationsResponse {
  /** The `Automation` objects. */
  automations?: ReadonlyArray<Automation>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListAutomationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    automations: Schema.optional(Schema.Array(Automation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListAutomationsResponse" });

export interface VerifyJob {
  /** Output only. The tasks that are executed as part of the verify Job. */
  tasks?: ReadonlyArray<Task>;
}

export const VerifyJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tasks: Schema.optional(Schema.Array(Task)),
}).annotate({ identifier: "VerifyJob" });

export interface PredeployJob {
  /** Output only. The custom actions that the predeploy Job executes. */
  actions?: ReadonlyArray<string>;
  /** Output only. The tasks that are executed as part of the predeploy Job. */
  tasks?: ReadonlyArray<Task>;
}

export const PredeployJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actions: Schema.optional(Schema.Array(Schema.String)),
  tasks: Schema.optional(Schema.Array(Task)),
}).annotate({ identifier: "PredeployJob" });

export interface AnalysisJob {
  /** Output only. Google Cloud - based analysis checks that are run as part of the analysis Job. */
  googleCloud?: GoogleCloudAnalysis;
  /** Output only. Custom analysis checks from 3P metric providers that are run as part of the analysis Job. */
  customChecks?: ReadonlyArray<CustomCheck>;
  /** Output only. The amount of time in minutes the analysis Job will run, up to a maximum of 48 hours. If any check in this Job is still running when the duration ends, the Job keeps running until that check completes. */
  duration?: string;
}

export const AnalysisJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  googleCloud: Schema.optional(GoogleCloudAnalysis),
  customChecks: Schema.optional(Schema.Array(CustomCheck)),
  duration: Schema.optional(Schema.String),
}).annotate({ identifier: "AnalysisJob" });

export interface PostdeployJob {
  /** Output only. The custom actions that the postdeploy Job executes. */
  actions?: ReadonlyArray<string>;
  /** Output only. The tasks that are executed as part of the postdeploy Job. */
  tasks?: ReadonlyArray<Task>;
}

export const PostdeployJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actions: Schema.optional(Schema.Array(Schema.String)),
  tasks: Schema.optional(Schema.Array(Task)),
}).annotate({ identifier: "PostdeployJob" });

export interface AdvanceChildRolloutJob {}

export const AdvanceChildRolloutJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AdvanceChildRolloutJob" });

export interface DeployJob {}

export const DeployJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate(
  { identifier: "DeployJob" },
);

export interface CreateChildRolloutJob {}

export const CreateChildRolloutJob = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CreateChildRolloutJob" });

export interface Job {
  /** Output only. A verify Job. */
  verifyJob?: VerifyJob;
  /** Output only. The current state of the Job. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "DISABLED"
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "FAILED"
    | "ABORTED"
    | "SKIPPED"
    | "IGNORED"
    | (string & {});
  /** Output only. A predeploy Job. */
  predeployJob?: PredeployJob;
  /** Output only. An analysis Job. */
  analysisJob?: AnalysisJob;
  /** Output only. A postdeploy Job. */
  postdeployJob?: PostdeployJob;
  /** Output only. An advanceChildRollout Job. */
  advanceChildRolloutJob?: AdvanceChildRolloutJob;
  /** Output only. The name of the `JobRun` responsible for the most recent invocation of this Job. */
  jobRun?: string;
  /** Output only. A deploy Job. */
  deployJob?: DeployJob;
  /** Output only. Additional information on why the Job was skipped, if available. */
  skipMessage?: string;
  /** Output only. The ID of the Job. */
  id?: string;
  /** Output only. A createChildRollout Job. */
  createChildRolloutJob?: CreateChildRolloutJob;
}

export const Job = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  verifyJob: Schema.optional(VerifyJob),
  state: Schema.optional(Schema.String),
  predeployJob: Schema.optional(PredeployJob),
  analysisJob: Schema.optional(AnalysisJob),
  postdeployJob: Schema.optional(PostdeployJob),
  advanceChildRolloutJob: Schema.optional(AdvanceChildRolloutJob),
  jobRun: Schema.optional(Schema.String),
  deployJob: Schema.optional(DeployJob),
  skipMessage: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  createChildRolloutJob: Schema.optional(CreateChildRolloutJob),
}).annotate({ identifier: "Job" });

export interface ChildRolloutJobs {
  /** Output only. List of CreateChildRolloutJobs */
  createRolloutJobs?: ReadonlyArray<Job>;
  /** Output only. List of AdvanceChildRolloutJobs */
  advanceRolloutJobs?: ReadonlyArray<Job>;
}

export const ChildRolloutJobs = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createRolloutJobs: Schema.optional(Schema.Array(Job)),
  advanceRolloutJobs: Schema.optional(Schema.Array(Job)),
}).annotate({ identifier: "ChildRolloutJobs" });

export interface DeploymentJobs {
  /** Output only. The postdeploy Job, which is the last job on the phase. */
  postdeployJob?: Job;
  /** Output only. The analysis Job. Runs after a verify if there is a verify job and the verify job succeeds. */
  analysisJob?: Job;
  /** Output only. The predeploy Job, which is the first job on the phase. */
  predeployJob?: Job;
  /** Output only. The deploy Job. This is the deploy job in the phase. */
  deployJob?: Job;
  /** Output only. The verify Job. Runs after a deploy if the deploy succeeds. */
  verifyJob?: Job;
}

export const DeploymentJobs = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  postdeployJob: Schema.optional(Job),
  analysisJob: Schema.optional(Job),
  predeployJob: Schema.optional(Job),
  deployJob: Schema.optional(Job),
  verifyJob: Schema.optional(Job),
}).annotate({ identifier: "DeploymentJobs" });

export interface Phase {
  /** Output only. ChildRollout job composition. */
  childRolloutJobs?: ChildRolloutJobs;
  /** Output only. The ID of the Phase. */
  id?: string;
  /** Output only. Deployment job composition. */
  deploymentJobs?: DeploymentJobs;
  /** Output only. Additional information on why the Phase was skipped, if available. */
  skipMessage?: string;
  /** Output only. Current state of the Phase. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "FAILED"
    | "ABORTED"
    | "SKIPPED"
    | (string & {});
}

export const Phase = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  childRolloutJobs: Schema.optional(ChildRolloutJobs),
  id: Schema.optional(Schema.String),
  deploymentJobs: Schema.optional(DeploymentJobs),
  skipMessage: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "Phase" });

export interface AutomationRolloutMetadata {
  /** Output only. The name of the AutomationRun initiated by a promote release rule. */
  promoteAutomationRun?: string;
  /** Output only. The names of the AutomationRuns initiated by a repair rollout rule. */
  repairAutomationRuns?: ReadonlyArray<string>;
  /** Output only. The names of the AutomationRuns initiated by an advance rollout rule. */
  advanceAutomationRuns?: ReadonlyArray<string>;
}

export const AutomationRolloutMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    promoteAutomationRun: Schema.optional(Schema.String),
    repairAutomationRuns: Schema.optional(Schema.Array(Schema.String)),
    advanceAutomationRuns: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "AutomationRolloutMetadata" });

export interface CloudRunMetadata {
  /** Output only. The Cloud Run Service urls that are associated with a `Rollout`. */
  serviceUrls?: ReadonlyArray<string>;
  /** Output only. The Cloud Run Revision id associated with a `Rollout`. */
  revision?: string;
  /** Output only. The Cloud Run worker pool associated with a `Rollout`. Format is `projects/{project}/locations/{location}/workerPools/{worker_pool}`. */
  workerPool?: string;
  /** Output only. The name of the Cloud Run job that is associated with a `Rollout`. Format is `projects/{project}/locations/{location}/jobs/{job_name}`. */
  job?: string;
  /** Output only. The name of the Cloud Run Service that is associated with a `Rollout`. Format is `projects/{project}/locations/{location}/services/{service}`. */
  service?: string;
  /** Output only. The previous Cloud Run Revision name associated with a `Rollout`. Only set when a canary deployment strategy is configured. Format for service is projects/{project}/locations/{location}/services/{service}/revisions/{revision}. Format for worker pool is projects/{project}/locations/{location}/workerPools/{workerpool}/revisions/{revision}. */
  previousRevision?: string;
}

export const CloudRunMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  serviceUrls: Schema.optional(Schema.Array(Schema.String)),
  revision: Schema.optional(Schema.String),
  workerPool: Schema.optional(Schema.String),
  job: Schema.optional(Schema.String),
  service: Schema.optional(Schema.String),
  previousRevision: Schema.optional(Schema.String),
}).annotate({ identifier: "CloudRunMetadata" });

export interface Metadata {
  /** Output only. AutomationRolloutMetadata contains the information about the interactions between Automation service and this rollout. */
  automation?: AutomationRolloutMetadata;
  /** Output only. Custom metadata provided by user-defined `Rollout` operations. */
  custom?: CustomMetadata;
  /** Output only. The name of the Cloud Run Service that is associated with a `Rollout`. */
  cloudRun?: CloudRunMetadata;
}

export const Metadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  automation: Schema.optional(AutomationRolloutMetadata),
  custom: Schema.optional(CustomMetadata),
  cloudRun: Schema.optional(CloudRunMetadata),
}).annotate({ identifier: "Metadata" });

export interface Rollout {
  /** Output only. The resource name of the Cloud Build `Build` object that is used to deploy the Rollout. Format is `projects/{project}/locations/{location}/builds/{build}`. */
  deployingBuild?: string;
  /** Output only. Name of the `Rollout` that is rolled back by this `Rollout`. Empty if this `Rollout` wasn't created as a rollback. */
  rollbackOfRollout?: string;
  /** Output only. Approval state of the `Rollout`. */
  approvalState?:
    | "APPROVAL_STATE_UNSPECIFIED"
    | "NEEDS_APPROVAL"
    | "DOES_NOT_NEED_APPROVAL"
    | "APPROVED"
    | "REJECTED"
    | (string & {});
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress. */
  deployFailureCause?:
    | "FAILURE_CAUSE_UNSPECIFIED"
    | "CLOUD_BUILD_UNAVAILABLE"
    | "EXECUTION_FAILED"
    | "DEADLINE_EXCEEDED"
    | "RELEASE_FAILED"
    | "RELEASE_ABANDONED"
    | "VERIFICATION_CONFIG_NOT_FOUND"
    | "CLOUD_BUILD_REQUEST_FAILED"
    | "OPERATION_FEATURE_NOT_SUPPORTED"
    | (string & {});
  /** Output only. Time at which the `Rollout` was enqueued. */
  enqueueTime?: string;
  /** Output only. Additional information about the rollout failure, if available. */
  failureReason?: string;
  /** Output only. Names of `Rollouts` that rolled back this `Rollout`. */
  rolledBackByRollouts?: ReadonlyArray<string>;
  /** Output only. Name of the `ControllerRollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. */
  controllerRollout?: string;
  /** Output only. Time at which the `Rollout` started deploying. */
  deployStartTime?: string;
  /** Output only. Current state of the `Rollout`. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "IN_PROGRESS"
    | "PENDING_APPROVAL"
    | "APPROVAL_REJECTED"
    | "PENDING"
    | "PENDING_RELEASE"
    | "CANCELLING"
    | "CANCELLED"
    | "HALTED"
    | (string & {});
  /** Output only. The phases that represent the workflows of this `Rollout`. */
  phases?: ReadonlyArray<Phase>;
  /** Output only. The AutomationRun actively repairing the rollout. */
  activeRepairAutomationRun?: string;
  /** Identifier. Name of the `Rollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. The `rollout` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name?: string;
  /** Output only. Unique identifier of the `Rollout`. */
  uid?: string;
  /** Required. The ID of Target to which this `Rollout` is deploying. */
  targetId?: string;
  /** Optional. Description of the `Rollout` for user purposes. Max length is 255 characters. */
  description?: string;
  /** Output only. Time at which the `Rollout` was approved. */
  approveTime?: string;
  /** Output only. Metadata contains information about the rollout. */
  metadata?: Metadata;
  /** Output only. Time at which the `Rollout` finished deploying. */
  deployEndTime?: string;
  /** Output only. Time at which the `Rollout` was created. */
  createTime?: string;
  /** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
  labels?: Record<string, string>;
  /** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. */
  annotations?: Record<string, string>;
}

export const Rollout = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deployingBuild: Schema.optional(Schema.String),
  rollbackOfRollout: Schema.optional(Schema.String),
  approvalState: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  deployFailureCause: Schema.optional(Schema.String),
  enqueueTime: Schema.optional(Schema.String),
  failureReason: Schema.optional(Schema.String),
  rolledBackByRollouts: Schema.optional(Schema.Array(Schema.String)),
  controllerRollout: Schema.optional(Schema.String),
  deployStartTime: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  phases: Schema.optional(Schema.Array(Phase)),
  activeRepairAutomationRun: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  targetId: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  approveTime: Schema.optional(Schema.String),
  metadata: Schema.optional(Metadata),
  deployEndTime: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "Rollout" });

export interface ReleaseNotificationEvent {
  /** Unique identifier of the `Release`. */
  releaseUid?: string;
  /** Debug message for when a notification fails to send. */
  message?: string;
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** The name of the `Release`. */
  release?: string;
  /** Unique identifier of the `DeliveryPipeline`. */
  pipelineUid?: string;
}

export const ReleaseNotificationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    releaseUid: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    release: Schema.optional(Schema.String),
    pipelineUid: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReleaseNotificationEvent" });

export interface Clouddeploy_Date {
  /** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
  year?: number;
  /** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
  day?: number;
  /** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
  month?: number;
}

export const Clouddeploy_Date = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  year: Schema.optional(Schema.Number),
  day: Schema.optional(Schema.Number),
  month: Schema.optional(Schema.Number),
}).annotate({ identifier: "Clouddeploy_Date" });

export interface OneTimeWindow {
  /** Required. Start time (inclusive). Use 00:00 for the beginning of the day. */
  startTime?: TimeOfDay;
  /** Required. End time (exclusive). You may use 24:00 for the end of the day. */
  endTime?: TimeOfDay;
  /** Required. End date. */
  endDate?: Clouddeploy_Date;
  /** Required. Start date. */
  startDate?: Clouddeploy_Date;
}

export const OneTimeWindow = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startTime: Schema.optional(TimeOfDay),
  endTime: Schema.optional(TimeOfDay),
  endDate: Schema.optional(Clouddeploy_Date),
  startDate: Schema.optional(Clouddeploy_Date),
}).annotate({ identifier: "OneTimeWindow" });

export interface TimeWindows {
  /** Optional. One-time windows within which actions are restricted. */
  oneTimeWindows?: ReadonlyArray<OneTimeWindow>;
  /** Optional. Recurring weekly windows within which actions are restricted. */
  weeklyWindows?: ReadonlyArray<WeeklyWindow>;
  /** Required. The time zone in IANA format [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/New_York). */
  timeZone?: string;
}

export const TimeWindows = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  oneTimeWindows: Schema.optional(Schema.Array(OneTimeWindow)),
  weeklyWindows: Schema.optional(Schema.Array(WeeklyWindow)),
  timeZone: Schema.optional(Schema.String),
}).annotate({ identifier: "TimeWindows" });

export interface RolloutRestriction {
  /** Optional. Rollout actions to be restricted as part of the policy. If left empty, all actions will be restricted. */
  actions?: ReadonlyArray<
    | "ROLLOUT_ACTIONS_UNSPECIFIED"
    | "ADVANCE"
    | "APPROVE"
    | "CANCEL"
    | "CREATE"
    | "IGNORE_JOB"
    | "RETRY_JOB"
    | "ROLLBACK"
    | "TERMINATE_JOBRUN"
    | (string & {})
  >;
  /** Optional. What invoked the action. If left empty, all invoker types will be restricted. */
  invokers?: ReadonlyArray<
    "INVOKER_UNSPECIFIED" | "USER" | "DEPLOY_AUTOMATION" | (string & {})
  >;
  /** Required. Restriction rule ID. Required and must be unique within a DeployPolicy. The format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. */
  id?: string;
  /** Required. Time window within which actions are restricted. */
  timeWindows?: TimeWindows;
}

export const RolloutRestriction = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actions: Schema.optional(Schema.Array(Schema.String)),
  invokers: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.optional(Schema.String),
  timeWindows: Schema.optional(TimeWindows),
}).annotate({ identifier: "RolloutRestriction" });

export interface VerifyJobRunMetadata {
  /** Output only. Custom metadata provided by user-defined verify operation. */
  custom?: CustomMetadata;
}

export const VerifyJobRunMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  custom: Schema.optional(CustomMetadata),
}).annotate({ identifier: "VerifyJobRunMetadata" });

export interface VerifyJobRun {
  /** Output only. The resource name of the Cloud Build `Build` object that is used to verify. Format is `projects/{project}/locations/{location}/builds/{build}`. */
  build?: string;
  /** Output only. Additional information about the verify failure, if available. */
  failureMessage?: string;
  /** Output only. URI of a directory containing the verify artifacts. This contains the Skaffold event log. */
  artifactUri?: string;
  /** Output only. The reason the verify failed. This will always be unspecified while the verify is in progress or if it succeeded. */
  failureCause?:
    | "FAILURE_CAUSE_UNSPECIFIED"
    | "CLOUD_BUILD_UNAVAILABLE"
    | "EXECUTION_FAILED"
    | "DEADLINE_EXCEEDED"
    | "VERIFICATION_CONFIG_NOT_FOUND"
    | "CLOUD_BUILD_REQUEST_FAILED"
    | (string & {});
  /** Output only. Metadata containing information about the verify `JobRun`. */
  metadata?: VerifyJobRunMetadata;
  /** Output only. File path of the Skaffold event log relative to the artifact URI. */
  eventLogPath?: string;
}

export const VerifyJobRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  build: Schema.optional(Schema.String),
  failureMessage: Schema.optional(Schema.String),
  artifactUri: Schema.optional(Schema.String),
  failureCause: Schema.optional(Schema.String),
  metadata: Schema.optional(VerifyJobRunMetadata),
  eventLogPath: Schema.optional(Schema.String),
}).annotate({ identifier: "VerifyJobRun" });

export interface CustomTargetDeployMetadata {
  /** Output only. Skip message provided in the results of a custom deploy operation. */
  skipMessage?: string;
}

export const CustomTargetDeployMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skipMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomTargetDeployMetadata" });

export interface DeployJobRunMetadata {
  /** Output only. Custom Target metadata associated with a `DeployJobRun`. */
  customTarget?: CustomTargetDeployMetadata;
  /** Output only. The name of the Cloud Run Service that is associated with a `DeployJobRun`. */
  cloudRun?: CloudRunMetadata;
  /** Output only. Custom metadata provided by user-defined deploy operation. */
  custom?: CustomMetadata;
}

export const DeployJobRunMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  customTarget: Schema.optional(CustomTargetDeployMetadata),
  cloudRun: Schema.optional(CloudRunMetadata),
  custom: Schema.optional(CustomMetadata),
}).annotate({ identifier: "DeployJobRunMetadata" });

export interface ListTargetsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** The `Target` objects. */
  targets?: ReadonlyArray<Target>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListTargetsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  nextPageToken: Schema.optional(Schema.String),
  targets: Schema.optional(Schema.Array(Target)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListTargetsResponse" });

export interface DeliveryPipelineAttribute {
  /** DeliveryPipeline labels. */
  labels?: Record<string, string>;
  /** Optional. ID of the `DeliveryPipeline`. The value of this field could be one of the following: * The last segment of a pipeline name * "*", all delivery pipelines in a location */
  id?: string;
}

export const DeliveryPipelineAttribute =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeliveryPipelineAttribute" });

export interface DeployPolicyResourceSelector {
  /** Optional. Contains attributes about a delivery pipeline. */
  deliveryPipeline?: DeliveryPipelineAttribute;
  /** Optional. Contains attributes about a target. */
  target?: TargetAttribute;
}

export const DeployPolicyResourceSelector =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deliveryPipeline: Schema.optional(DeliveryPipelineAttribute),
    target: Schema.optional(TargetAttribute),
  }).annotate({ identifier: "DeployPolicyResourceSelector" });

export interface ListDeliveryPipelinesResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The `DeliveryPipeline` objects. */
  deliveryPipelines?: ReadonlyArray<DeliveryPipeline>;
}

export const ListDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    deliveryPipelines: Schema.optional(Schema.Array(DeliveryPipeline)),
  }).annotate({ identifier: "ListDeliveryPipelinesResponse" });

export interface DeployPolicyEvaluationEvent {
  /** Unique identifier of the `Delivery Pipeline`. */
  pipelineUid?: string;
  /** Unique identifier of the `Target`. This is an optional field, as a `Target` may not always be applicable to a policy. */
  targetUid?: string;
  /** The name of the `DeployPolicy`. */
  deployPolicy?: string;
  /** The name of the `Target`. This is an optional field, as a `Target` may not always be applicable to a policy. */
  target?: string;
  /** Rule id. */
  rule?: string;
  /** Debug message for when a deploy policy event occurs. */
  message?: string;
  /** Things that could have overridden the policy verdict. Overrides together with verdict decide whether the request is allowed. */
  overrides?: ReadonlyArray<
    | "POLICY_VERDICT_OVERRIDE_UNSPECIFIED"
    | "POLICY_OVERRIDDEN"
    | "POLICY_SUSPENDED"
    | (string & {})
  >;
  /** Unique identifier of the `DeployPolicy`. */
  deployPolicyUid?: string;
  /** What invoked the action (e.g. a user or automation). */
  invoker?:
    | "INVOKER_UNSPECIFIED"
    | "USER"
    | "DEPLOY_AUTOMATION"
    | (string & {});
  /** Rule type (e.g. Restrict Rollouts). */
  ruleType?: string;
  /** The name of the `Delivery Pipeline`. */
  deliveryPipeline?: string;
  /** The policy verdict of the request. */
  verdict?:
    | "POLICY_VERDICT_UNSPECIFIED"
    | "ALLOWED_BY_POLICY"
    | "DENIED_BY_POLICY"
    | (string & {});
  /** Whether the request is allowed. Allowed is set as true if: (1) the request complies with the policy; or (2) the request doesn't comply with the policy but the policy was overridden; or (3) the request doesn't comply with the policy but the policy was suspended */
  allowed?: boolean;
}

export const DeployPolicyEvaluationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pipelineUid: Schema.optional(Schema.String),
    targetUid: Schema.optional(Schema.String),
    deployPolicy: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    rule: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    overrides: Schema.optional(Schema.Array(Schema.String)),
    deployPolicyUid: Schema.optional(Schema.String),
    invoker: Schema.optional(Schema.String),
    ruleType: Schema.optional(Schema.String),
    deliveryPipeline: Schema.optional(Schema.String),
    verdict: Schema.optional(Schema.String),
    allowed: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DeployPolicyEvaluationEvent" });

export interface AdvanceRolloutRequest {
  /** Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. */
  overrideDeployPolicy?: ReadonlyArray<string>;
  /** Required. The phase ID to advance the `Rollout` to. */
  phaseId?: string;
}

export const AdvanceRolloutRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  overrideDeployPolicy: Schema.optional(Schema.Array(Schema.String)),
  phaseId: Schema.optional(Schema.String),
}).annotate({ identifier: "AdvanceRolloutRequest" });

export interface AbandonReleaseResponse {}

export const AbandonReleaseResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AbandonReleaseResponse" });

export interface CancelAutomationRunResponse {}

export const CancelAutomationRunResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelAutomationRunResponse",
  });

export interface AuditLogConfig {
  /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
  exemptedMembers?: ReadonlyArray<string>;
  /** The log type that this config enables. */
  logType?:
    | "LOG_TYPE_UNSPECIFIED"
    | "ADMIN_READ"
    | "DATA_WRITE"
    | "DATA_READ"
    | (string & {});
}

export const AuditLogConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  exemptedMembers: Schema.optional(Schema.Array(Schema.String)),
  logType: Schema.optional(Schema.String),
}).annotate({ identifier: "AuditLogConfig" });

export interface AuditConfig {
  /** The configuration for logging of each type of permission. */
  auditLogConfigs?: ReadonlyArray<AuditLogConfig>;
  /** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
  service?: string;
}

export const AuditConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  auditLogConfigs: Schema.optional(Schema.Array(AuditLogConfig)),
  service: Schema.optional(Schema.String),
}).annotate({ identifier: "AuditConfig" });

export interface RolloutUpdateEvent {
  /** The name of the `Release`. */
  release?: string;
  /** ID of the target. */
  targetId?: string;
  /** The name of the rollout. rollout_uid is not in this log message because we write some of these log messages at rollout creation time, before we've generated the uid. */
  rollout?: string;
  /** Unique identifier of the release. */
  releaseUid?: string;
  /** Debug message for when a rollout update event occurs. */
  message?: string;
  /** Type of this notification, e.g. for a rollout update event. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** The type of the rollout update. */
  rolloutUpdateType?:
    | "ROLLOUT_UPDATE_TYPE_UNSPECIFIED"
    | "PENDING"
    | "PENDING_RELEASE"
    | "IN_PROGRESS"
    | "CANCELLING"
    | "CANCELLED"
    | "HALTED"
    | "SUCCEEDED"
    | "FAILED"
    | "APPROVAL_REQUIRED"
    | "APPROVED"
    | "REJECTED"
    | "ADVANCE_REQUIRED"
    | "ADVANCED"
    | (string & {});
  /** Unique identifier of the pipeline. */
  pipelineUid?: string;
}

export const RolloutUpdateEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  release: Schema.optional(Schema.String),
  targetId: Schema.optional(Schema.String),
  rollout: Schema.optional(Schema.String),
  releaseUid: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  rolloutUpdateType: Schema.optional(Schema.String),
  pipelineUid: Schema.optional(Schema.String),
}).annotate({ identifier: "RolloutUpdateEvent" });

export interface Expr {
  /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
  location?: string;
  /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
  description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  expression?: string;
  /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
  title?: string;
}

export const Expr = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  location: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  expression: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
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
  /** Specifies cloud audit logging configuration for this policy. */
  auditConfigs?: ReadonlyArray<AuditConfig>;
  /** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
  etag?: string;
  /** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  version?: number;
  /** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
  bindings?: ReadonlyArray<Binding>;
}

export const Policy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  auditConfigs: Schema.optional(Schema.Array(AuditConfig)),
  etag: Schema.optional(Schema.String),
  version: Schema.optional(Schema.Number),
  bindings: Schema.optional(Schema.Array(Binding)),
}).annotate({ identifier: "Policy" });

export interface SetIamPolicyRequest {
  /** REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them. */
  policy?: Policy;
  /** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
  updateMask?: string;
}

export const SetIamPolicyRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policy: Schema.optional(Policy),
  updateMask: Schema.optional(Schema.String),
}).annotate({ identifier: "SetIamPolicyRequest" });

export interface AutomationRunEvent {
  /** Identifier of the `Automation` rule. */
  ruleId?: string;
  /** Identifier of the `Automation`. */
  automationId?: string;
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** Unique identifier of the `DeliveryPipeline`. */
  pipelineUid?: string;
  /** The name of the `AutomationRun`. */
  automationRun?: string;
  /** Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change. */
  message?: string;
  /** ID of the `Target` to which the `AutomationRun` is created. */
  destinationTargetId?: string;
}

export const AutomationRunEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ruleId: Schema.optional(Schema.String),
  automationId: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  pipelineUid: Schema.optional(Schema.String),
  automationRun: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  destinationTargetId: Schema.optional(Schema.String),
}).annotate({ identifier: "AutomationRunEvent" });

export interface OperationMetadata {
  /** Output only. The time the operation finished running. */
  endTime?: string;
  /** Output only. API version used to start the operation. */
  apiVersion?: string;
  /** Output only. The time the operation was created. */
  createTime?: string;
  /** Output only. Name of the verb executed by the operation. */
  verb?: string;
  /** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
  requestedCancellation?: boolean;
  /** Output only. Server-defined resource path for the target of the operation. */
  target?: string;
  /** Output only. Human-readable status of the operation, if any. */
  statusMessage?: string;
}

export const OperationMetadata = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  endTime: Schema.optional(Schema.String),
  apiVersion: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  verb: Schema.optional(Schema.String),
  requestedCancellation: Schema.optional(Schema.Boolean),
  target: Schema.optional(Schema.String),
  statusMessage: Schema.optional(Schema.String),
}).annotate({ identifier: "OperationMetadata" });

export interface PromoteReleaseOperation {
  /** Output only. How long the operation will be paused. */
  wait?: string;
  /** Output only. The ID of the target that represents the promotion stage to which the release will be promoted. The value of this field is the last segment of a target name. */
  targetId?: string;
  /** Output only. The starting phase of the rollout created by this operation. */
  phase?: string;
  /** Output only. The name of the rollout that initiates the `AutomationRun`. */
  rollout?: string;
}

export const PromoteReleaseOperation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    wait: Schema.optional(Schema.String),
    targetId: Schema.optional(Schema.String),
    phase: Schema.optional(Schema.String),
    rollout: Schema.optional(Schema.String),
  }).annotate({ identifier: "PromoteReleaseOperation" });

export interface PolicyViolationDetails {
  /** User readable message about why the request violated a policy. This is not intended for machine parsing. */
  failureMessage?: string;
  /** Id of the rule that triggered the policy violation. */
  ruleId?: string;
  /** Name of the policy that was violated. Policy resource will be in the format of `projects/{project}/locations/{location}/policies/{policy}`. */
  policy?: string;
}

export const PolicyViolationDetails = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    failureMessage: Schema.optional(Schema.String),
    ruleId: Schema.optional(Schema.String),
    policy: Schema.optional(Schema.String),
  },
).annotate({ identifier: "PolicyViolationDetails" });

export interface PolicyViolation {
  /** Policy violation details. */
  policyViolationDetails?: ReadonlyArray<PolicyViolationDetails>;
}

export const PolicyViolation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  policyViolationDetails: Schema.optional(Schema.Array(PolicyViolationDetails)),
}).annotate({ identifier: "PolicyViolation" });

export interface TimedPromoteReleaseOperation {
  /** Output only. The ID of the target that represents the promotion stage to which the release will be promoted. The value of this field is the last segment of a target name. */
  targetId?: string;
  /** Output only. The starting phase of the rollout created by this operation. */
  phase?: string;
  /** Output only. The name of the release to be promoted. */
  release?: string;
}

export const TimedPromoteReleaseOperation =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetId: Schema.optional(Schema.String),
    phase: Schema.optional(Schema.String),
    release: Schema.optional(Schema.String),
  }).annotate({ identifier: "TimedPromoteReleaseOperation" });

export interface RollbackAttempt {
  /** Output only. ID of the rollback `Rollout` to create. */
  rolloutId?: string;
  /** Output only. Valid state of this rollback action. */
  state?:
    | "REPAIR_STATE_UNSPECIFIED"
    | "REPAIR_STATE_SUCCEEDED"
    | "REPAIR_STATE_CANCELLED"
    | "REPAIR_STATE_FAILED"
    | "REPAIR_STATE_IN_PROGRESS"
    | "REPAIR_STATE_PENDING"
    | "REPAIR_STATE_ABORTED"
    | (string & {});
  /** Output only. Description of the state of the Rollback. */
  stateDesc?: string;
  /** Output only. The phase to which the rollout will be rolled back to. */
  destinationPhase?: string;
  /** Output only. If active rollout exists on the target, abort this rollback. */
  disableRollbackIfRolloutPending?: boolean;
}

export const RollbackAttempt = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rolloutId: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  stateDesc: Schema.optional(Schema.String),
  destinationPhase: Schema.optional(Schema.String),
  disableRollbackIfRolloutPending: Schema.optional(Schema.Boolean),
}).annotate({ identifier: "RollbackAttempt" });

export interface RetryAttempt {
  /** Output only. How long the operation will be paused. */
  wait?: string;
  /** Output only. Description of the state of the Retry. */
  stateDesc?: string;
  /** Output only. The index of this retry attempt. */
  attempt?: string;
  /** Output only. Valid state of this retry action. */
  state?:
    | "REPAIR_STATE_UNSPECIFIED"
    | "REPAIR_STATE_SUCCEEDED"
    | "REPAIR_STATE_CANCELLED"
    | "REPAIR_STATE_FAILED"
    | "REPAIR_STATE_IN_PROGRESS"
    | "REPAIR_STATE_PENDING"
    | "REPAIR_STATE_ABORTED"
    | (string & {});
}

export const RetryAttempt = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  wait: Schema.optional(Schema.String),
  stateDesc: Schema.optional(Schema.String),
  attempt: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
}).annotate({ identifier: "RetryAttempt" });

export interface RetryPhase {
  /** Output only. The number of attempts that have been made. */
  totalAttempts?: string;
  /** Output only. The pattern of how the wait time of the retry attempt is calculated. */
  backoffMode?:
    | "BACKOFF_MODE_UNSPECIFIED"
    | "BACKOFF_MODE_LINEAR"
    | "BACKOFF_MODE_EXPONENTIAL"
    | (string & {});
  /** Output only. Detail of a retry action. */
  attempts?: ReadonlyArray<RetryAttempt>;
}

export const RetryPhase = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalAttempts: Schema.optional(Schema.String),
  backoffMode: Schema.optional(Schema.String),
  attempts: Schema.optional(Schema.Array(RetryAttempt)),
}).annotate({ identifier: "RetryPhase" });

export interface RepairPhase {
  /** Output only. Rollback attempt for rollback repair mode . */
  rollback?: RollbackAttempt;
  /** Output only. Records of the retry attempts for retry repair mode. */
  retry?: RetryPhase;
}

export const RepairPhase = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rollback: Schema.optional(RollbackAttempt),
  retry: Schema.optional(RetryPhase),
}).annotate({ identifier: "RepairPhase" });

export interface RepairRolloutOperation {
  /** Output only. The phase ID of the phase that includes the job being repaired. */
  phaseId?: string;
  /** Output only. Records of the repair attempts. Each repair phase may have multiple retry attempts or single rollback attempt. */
  repairPhases?: ReadonlyArray<RepairPhase>;
  /** Output only. The index of the current repair action in the repair sequence. */
  currentRepairPhaseIndex?: string;
  /** Output only. The name of the rollout that initiates the `AutomationRun`. */
  rollout?: string;
  /** Output only. The job ID for the Job to repair. */
  jobId?: string;
}

export const RepairRolloutOperation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    phaseId: Schema.optional(Schema.String),
    repairPhases: Schema.optional(Schema.Array(RepairPhase)),
    currentRepairPhaseIndex: Schema.optional(Schema.String),
    rollout: Schema.optional(Schema.String),
    jobId: Schema.optional(Schema.String),
  },
).annotate({ identifier: "RepairRolloutOperation" });

export interface AutomationRun {
  /** Output only. Explains the current state of the `AutomationRun`. Present only when an explanation is needed. */
  stateDescription?: string;
  /** Output only. The ID of the source target that initiates the `AutomationRun`. The value of this field is the last segment of a target name. */
  targetId?: string;
  /** Output only. Promotes a release to a specified 'Target'. */
  promoteReleaseOperation?: PromoteReleaseOperation;
  /** Output only. Advances a rollout to the next phase. */
  advanceRolloutOperation?: AdvanceRolloutOperation;
  /** Output only. The weak etag of the `AutomationRun` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. Name of the `AutomationRun`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automationRuns/{automation_run}`. */
  name?: string;
  /** Output only. The ID of the automation that initiated the operation. */
  automationId?: string;
  /** Output only. Snapshot of the Automation taken at AutomationRun creation time. */
  automationSnapshot?: Automation;
  /** Output only. Time the `AutomationRun` expires. An `AutomationRun` expires after 14 days from its creation date. */
  expireTime?: string;
  /** Output only. Contains information about what policies prevented the `AutomationRun` from proceeding. */
  policyViolation?: PolicyViolation;
  /** Output only. Time at which the `AutomationRun` was created. */
  createTime?: string;
  /** Output only. Email address of the user-managed IAM service account that performs the operations against Cloud Deploy resources. */
  serviceAccount?: string;
  /** Output only. Earliest time the `AutomationRun` will attempt to resume. Wait-time is configured by `wait` in automation rule. */
  waitUntilTime?: string;
  /** Output only. Promotes a release to a specified 'Target' as defined in a Timed Promote Release rule. */
  timedPromoteReleaseOperation?: TimedPromoteReleaseOperation;
  /** Output only. Current state of the `AutomationRun`. */
  state?:
    | "STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "CANCELLED"
    | "FAILED"
    | "IN_PROGRESS"
    | "PENDING"
    | "ABORTED"
    | (string & {});
  /** Output only. Time at which the automationRun was updated. */
  updateTime?: string;
  /** Output only. Unique identifier of the `AutomationRun`. */
  uid?: string;
  /** Output only. The ID of the automation rule that initiated the operation. */
  ruleId?: string;
  /** Output only. Repairs a failed 'Rollout'. */
  repairRolloutOperation?: RepairRolloutOperation;
}

export const AutomationRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  stateDescription: Schema.optional(Schema.String),
  targetId: Schema.optional(Schema.String),
  promoteReleaseOperation: Schema.optional(PromoteReleaseOperation),
  advanceRolloutOperation: Schema.optional(AdvanceRolloutOperation),
  etag: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  automationId: Schema.optional(Schema.String),
  automationSnapshot: Schema.optional(Automation),
  expireTime: Schema.optional(Schema.String),
  policyViolation: Schema.optional(PolicyViolation),
  createTime: Schema.optional(Schema.String),
  serviceAccount: Schema.optional(Schema.String),
  waitUntilTime: Schema.optional(Schema.String),
  timedPromoteReleaseOperation: Schema.optional(TimedPromoteReleaseOperation),
  state: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  ruleId: Schema.optional(Schema.String),
  repairRolloutOperation: Schema.optional(RepairRolloutOperation),
}).annotate({ identifier: "AutomationRun" });

export interface ListAutomationRunsResponse {
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The `AutomationRuns` objects. */
  automationRuns?: ReadonlyArray<AutomationRun>;
}

export const ListAutomationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    automationRuns: Schema.optional(Schema.Array(AutomationRun)),
  }).annotate({ identifier: "ListAutomationRunsResponse" });

export interface IgnoreJobResponse {}

export const IgnoreJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "IgnoreJobResponse" });

export interface RollbackTargetConfig {
  /** Optional. The rollback `Rollout` to create. */
  rollout?: Rollout;
  /** Optional. The starting phase ID for the `Rollout`. If unspecified, the `Rollout` will start in the stable phase. */
  startingPhaseId?: string;
}

export const RollbackTargetConfig = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rollout: Schema.optional(Rollout),
  startingPhaseId: Schema.optional(Schema.String),
}).annotate({ identifier: "RollbackTargetConfig" });

export interface RollbackTargetRequest {
  /** Optional. Configs for the rollback `Rollout`. */
  rollbackConfig?: RollbackTargetConfig;
  /** Optional. ID of the `Release` to roll back to. If this isn't specified, the previous successful `Rollout` to the specified target will be used to determine the `Release`. */
  releaseId?: string;
  /** Optional. If provided, this must be the latest `Rollout` that is on the `Target`. */
  rolloutToRollBack?: string;
  /** Required. ID of the rollback `Rollout` to create. */
  rolloutId?: string;
  /** Required. ID of the `Target` that is being rolled back. */
  targetId?: string;
  /** Optional. If set to true, the request is validated and the user is provided with a `RollbackTargetResponse`. */
  validateOnly?: boolean;
  /** Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deploy_policy}`. */
  overrideDeployPolicy?: ReadonlyArray<string>;
}

export const RollbackTargetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rollbackConfig: Schema.optional(RollbackTargetConfig),
  releaseId: Schema.optional(Schema.String),
  rolloutToRollBack: Schema.optional(Schema.String),
  rolloutId: Schema.optional(Schema.String),
  targetId: Schema.optional(Schema.String),
  validateOnly: Schema.optional(Schema.Boolean),
  overrideDeployPolicy: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "RollbackTargetRequest" });

export interface DeployArtifact {
  /** Output only. URI of a directory containing the artifacts. All paths are relative to this location. */
  artifactUri?: string;
  /** Output only. File paths of the manifests applied during the deploy operation relative to the URI. */
  manifestPaths?: ReadonlyArray<string>;
}

export const DeployArtifact = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  artifactUri: Schema.optional(Schema.String),
  manifestPaths: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "DeployArtifact" });

export interface DeployJobRun {
  /** Output only. Metadata containing information about the deploy job run. */
  metadata?: DeployJobRunMetadata;
  /** Output only. Additional information about the deploy failure, if available. */
  failureMessage?: string;
  /** Output only. The resource name of the Cloud Build `Build` object that is used to deploy. Format is `projects/{project}/locations/{location}/builds/{build}`. */
  build?: string;
  /** Output only. The reason the deploy failed. This will always be unspecified while the deploy is in progress or if it succeeded. */
  failureCause?:
    | "FAILURE_CAUSE_UNSPECIFIED"
    | "CLOUD_BUILD_UNAVAILABLE"
    | "EXECUTION_FAILED"
    | "DEADLINE_EXCEEDED"
    | "MISSING_RESOURCES_FOR_CANARY"
    | "CLOUD_BUILD_REQUEST_FAILED"
    | "DEPLOY_FEATURE_NOT_SUPPORTED"
    | (string & {});
  /** Output only. The artifact of a deploy job run, if available. */
  artifact?: DeployArtifact;
}

export const DeployJobRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  metadata: Schema.optional(DeployJobRunMetadata),
  failureMessage: Schema.optional(Schema.String),
  build: Schema.optional(Schema.String),
  failureCause: Schema.optional(Schema.String),
  artifact: Schema.optional(DeployArtifact),
}).annotate({ identifier: "DeployJobRun" });

export interface AdvanceChildRolloutJobRun {
  /** Output only. Name of the `ChildRollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. */
  rollout?: string;
  /** Output only. the ID of the ChildRollout's Phase. */
  rolloutPhaseId?: string;
}

export const AdvanceChildRolloutJobRun =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollout: Schema.optional(Schema.String),
    rolloutPhaseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "AdvanceChildRolloutJobRun" });

export interface CreateChildRolloutJobRun {
  /** Output only. Name of the `ChildRollout`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. */
  rollout?: string;
  /** Output only. The ID of the childRollout Phase initiated by this JobRun. */
  rolloutPhaseId?: string;
}

export const CreateChildRolloutJobRun =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollout: Schema.optional(Schema.String),
    rolloutPhaseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CreateChildRolloutJobRun" });

export interface FailedAlertPolicy {
  /** Output only. Open alerts for the alerting policies that matched the alert policy check configuration. */
  alerts?: ReadonlyArray<string>;
  /** Output only. The name of the alert policy that was found to be firing. Format is `projects/{project}/locations/{location}/alertPolicies/{alertPolicy}`. */
  alertPolicy?: string;
}

export const FailedAlertPolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alerts: Schema.optional(Schema.Array(Schema.String)),
  alertPolicy: Schema.optional(Schema.String),
}).annotate({ identifier: "FailedAlertPolicy" });

export interface AlertPolicyCheckStatus {
  /** Output only. The alert policies that were found to be firing during this check. This will be empty if no incidents were found. */
  failedAlertPolicies?: ReadonlyArray<FailedAlertPolicy>;
  /** Output only. The ID of this analysis. */
  id?: string;
  /** Output only. Additional information about the alert policy check failure, if available. This will be empty if the alert policy check succeeded. */
  failureMessage?: string;
  /** Output only. The resolved labels used to filter for specific incidents. */
  labels?: Record<string, string>;
  /** Output only. The alert policies that this analysis monitors. Format is `projects/{project}/locations/{location}/alertPolicies/{alertPolicy}`. */
  alertPolicies?: ReadonlyArray<string>;
}

export const AlertPolicyCheckStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    failedAlertPolicies: Schema.optional(Schema.Array(FailedAlertPolicy)),
    id: Schema.optional(Schema.String),
    failureMessage: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    alertPolicies: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "AlertPolicyCheckStatus" });

export interface CustomCheckStatus {
  /** Output only. Additional information about the analysis failure, if available. */
  failureMessage?: string;
  /** Output only. The resource name of the Cloud Build `Build` object that was used to execute the latest run of this custom action check. Format is `projects/{project}/locations/{location}/builds/{build}`. */
  latestBuild?: string;
  /** Output only. The task that ran for this custom check. */
  task?: Task;
  /** Output only. Custom metadata provided by the user-defined custom check operation. result. */
  metadata?: CustomMetadata;
  /** Output only. The reason the analysis failed. This will always be unspecified while the analysis is in progress or if it succeeded. */
  failureCause?:
    | "FAILURE_CAUSE_UNSPECIFIED"
    | "CLOUD_BUILD_UNAVAILABLE"
    | "EXECUTION_FAILED"
    | "DEADLINE_EXCEEDED"
    | "CLOUD_BUILD_REQUEST_FAILED"
    | (string & {});
  /** Output only. The ID of the custom check. */
  id?: string;
  /** Output only. The frequency in minutes at which the custom check is run. */
  frequency?: string;
}

export const CustomCheckStatus = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  failureMessage: Schema.optional(Schema.String),
  latestBuild: Schema.optional(Schema.String),
  task: Schema.optional(Task),
  metadata: Schema.optional(CustomMetadata),
  failureCause: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  frequency: Schema.optional(Schema.String),
}).annotate({ identifier: "CustomCheckStatus" });

export interface AnalysisJobRun {
  /** Output only. The ID of the configured check that failed. This will always be blank while the analysis is in progress or if it succeeded. */
  failedCheckId?: string;
  /** Output only. The status of the running alert policy checks configured for this analysis. */
  alertPolicyAnalyses?: ReadonlyArray<AlertPolicyCheckStatus>;
  /** Output only. The status of the running custom checks configured for this analysis. */
  customCheckAnalyses?: ReadonlyArray<CustomCheckStatus>;
}

export const AnalysisJobRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  failedCheckId: Schema.optional(Schema.String),
  alertPolicyAnalyses: Schema.optional(Schema.Array(AlertPolicyCheckStatus)),
  customCheckAnalyses: Schema.optional(Schema.Array(CustomCheckStatus)),
}).annotate({ identifier: "AnalysisJobRun" });

export interface PredeployJobRunMetadata {
  /** Output only. Custom metadata provided by user-defined predeploy operation. */
  custom?: CustomMetadata;
}

export const PredeployJobRunMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom: Schema.optional(CustomMetadata),
  }).annotate({ identifier: "PredeployJobRunMetadata" });

export interface PredeployJobRun {
  /** Output only. Additional information about the predeploy failure, if available. */
  failureMessage?: string;
  /** Output only. Metadata containing information about the predeploy `JobRun`. */
  metadata?: PredeployJobRunMetadata;
  /** Output only. The resource name of the Cloud Build `Build` object that is used to execute the custom actions associated with the predeploy Job. Format is `projects/{project}/locations/{location}/builds/{build}`. */
  build?: string;
  /** Output only. The reason the predeploy failed. This will always be unspecified while the predeploy is in progress or if it succeeded. */
  failureCause?:
    | "FAILURE_CAUSE_UNSPECIFIED"
    | "CLOUD_BUILD_UNAVAILABLE"
    | "EXECUTION_FAILED"
    | "DEADLINE_EXCEEDED"
    | "CLOUD_BUILD_REQUEST_FAILED"
    | (string & {});
}

export const PredeployJobRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  failureMessage: Schema.optional(Schema.String),
  metadata: Schema.optional(PredeployJobRunMetadata),
  build: Schema.optional(Schema.String),
  failureCause: Schema.optional(Schema.String),
}).annotate({ identifier: "PredeployJobRun" });

export interface PostdeployJobRunMetadata {
  /** Output only. Custom metadata provided by user-defined postdeploy operation. */
  custom?: CustomMetadata;
}

export const PostdeployJobRunMetadata =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom: Schema.optional(CustomMetadata),
  }).annotate({ identifier: "PostdeployJobRunMetadata" });

export interface PostdeployJobRun {
  /** Output only. The resource name of the Cloud Build `Build` object that is used to execute the custom actions associated with the postdeploy Job. Format is `projects/{project}/locations/{location}/builds/{build}`. */
  build?: string;
  /** Output only. Additional information about the postdeploy failure, if available. */
  failureMessage?: string;
  /** Output only. The reason the postdeploy failed. This will always be unspecified while the postdeploy is in progress or if it succeeded. */
  failureCause?:
    | "FAILURE_CAUSE_UNSPECIFIED"
    | "CLOUD_BUILD_UNAVAILABLE"
    | "EXECUTION_FAILED"
    | "DEADLINE_EXCEEDED"
    | "CLOUD_BUILD_REQUEST_FAILED"
    | (string & {});
  /** Output only. Metadata containing information about the postdeploy `JobRun`. */
  metadata?: PostdeployJobRunMetadata;
}

export const PostdeployJobRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  build: Schema.optional(Schema.String),
  failureMessage: Schema.optional(Schema.String),
  failureCause: Schema.optional(Schema.String),
  metadata: Schema.optional(PostdeployJobRunMetadata),
}).annotate({ identifier: "PostdeployJobRun" });

export interface JobRun {
  /** Output only. Information specific to a deploy `JobRun`. */
  deployJobRun?: DeployJobRun;
  /** Output only. ID of the `Rollout` job this `JobRun` corresponds to. */
  jobId?: string;
  /** Output only. Unique identifier of the `JobRun`. */
  uid?: string;
  /** Output only. Time at which the `JobRun` ended. */
  endTime?: string;
  /** Output only. Information specific to an advanceChildRollout `JobRun` */
  advanceChildRolloutJobRun?: AdvanceChildRolloutJobRun;
  /** Output only. ID of the `Rollout` phase this `JobRun` belongs in. */
  phaseId?: string;
  /** Output only. The current state of the `JobRun`. */
  state?:
    | "STATE_UNSPECIFIED"
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "FAILED"
    | "TERMINATING"
    | "TERMINATED"
    | (string & {});
  /** Output only. Information specific to a createChildRollout `JobRun`. */
  createChildRolloutJobRun?: CreateChildRolloutJobRun;
  /** Output only. Time at which the `JobRun` was created. */
  createTime?: string;
  /** Output only. Time at which the `JobRun` was started. */
  startTime?: string;
  /** Output only. Information specific to an analysis `JobRun`. */
  analysisJobRun?: AnalysisJobRun;
  /** Output only. Information specific to a predeploy `JobRun`. */
  predeployJobRun?: PredeployJobRun;
  /** Output only. Information specific to a verify `JobRun`. */
  verifyJobRun?: VerifyJobRun;
  /** Output only. Information specific to a postdeploy `JobRun`. */
  postdeployJobRun?: PostdeployJobRun;
  /** Output only. Name of the `JobRun`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{releases}/rollouts/{rollouts}/jobRuns/{uuid}`. */
  name?: string;
  /** Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const JobRun = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  deployJobRun: Schema.optional(DeployJobRun),
  jobId: Schema.optional(Schema.String),
  uid: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  advanceChildRolloutJobRun: Schema.optional(AdvanceChildRolloutJobRun),
  phaseId: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  createChildRolloutJobRun: Schema.optional(CreateChildRolloutJobRun),
  createTime: Schema.optional(Schema.String),
  startTime: Schema.optional(Schema.String),
  analysisJobRun: Schema.optional(AnalysisJobRun),
  predeployJobRun: Schema.optional(PredeployJobRun),
  verifyJobRun: Schema.optional(VerifyJobRun),
  postdeployJobRun: Schema.optional(PostdeployJobRun),
  name: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}).annotate({ identifier: "JobRun" });

export interface ListJobRunsResponse {
  /** The `JobRun` objects. */
  jobRuns?: ReadonlyArray<JobRun>;
  /** Locations that could not be reached */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListJobRunsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobRuns: Schema.optional(Schema.Array(JobRun)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListJobRunsResponse" });

export interface RetryJobRequest {
  /** Required. The phase ID the Job to retry belongs to. */
  phaseId?: string;
  /** Required. The job ID for the Job to retry. */
  jobId?: string;
  /** Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. */
  overrideDeployPolicy?: ReadonlyArray<string>;
}

export const RetryJobRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  phaseId: Schema.optional(Schema.String),
  jobId: Schema.optional(Schema.String),
  overrideDeployPolicy: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "RetryJobRequest" });

export interface AutomationEvent {
  /** Debug message for when there is an update on the AutomationRun. Provides further details about the resource creation or state change. */
  message?: string;
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** Unique identifier of the `DeliveryPipeline`. */
  pipelineUid?: string;
  /** The name of the `AutomationRun`. */
  automation?: string;
}

export const AutomationEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  message: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  pipelineUid: Schema.optional(Schema.String),
  automation: Schema.optional(Schema.String),
}).annotate({ identifier: "AutomationEvent" });

export interface PolicyRule {
  /** Optional. Rollout restrictions. */
  rolloutRestriction?: RolloutRestriction;
}

export const PolicyRule = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rolloutRestriction: Schema.optional(RolloutRestriction),
}).annotate({ identifier: "PolicyRule" });

export interface DeployPolicy {
  /** Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes. */
  labels?: Record<string, string>;
  /** Output only. Unique identifier of the `DeployPolicy`. */
  uid?: string;
  /** Output only. Time at which the deploy policy was created. */
  createTime?: string;
  /** Required. Selected resources to which the policy will be applied. At least one selector is required. If one selector matches the resource the policy applies. For example, if there are two selectors and the action being attempted matches one of them, the policy will apply to that action. */
  selectors?: ReadonlyArray<DeployPolicyResourceSelector>;
  /** Output only. Most recent time at which the deploy policy was updated. */
  updateTime?: string;
  /** Optional. Description of the `DeployPolicy`. Max length is 255 characters. */
  description?: string;
  /** The weak etag of the `DeployPolicy` resource. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. Name of the `DeployPolicy`. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. The `deployPolicy` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name?: string;
  /** Required. Rules to apply. At least one rule must be present. */
  rules?: ReadonlyArray<PolicyRule>;
  /** Optional. When suspended, the policy will not prevent actions from occurring, even if the action violates the policy. */
  suspended?: boolean;
  /** Optional. User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (`/`). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots(`.`), not longer than 253 characters in total, followed by a slash (`/`). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details. */
  annotations?: Record<string, string>;
}

export const DeployPolicy = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  uid: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  selectors: Schema.optional(Schema.Array(DeployPolicyResourceSelector)),
  updateTime: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  rules: Schema.optional(Schema.Array(PolicyRule)),
  suspended: Schema.optional(Schema.Boolean),
  annotations: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "DeployPolicy" });

export interface ListReleasesResponse {
  /** The `Release` objects. */
  releases?: ReadonlyArray<Release>;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListReleasesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  releases: Schema.optional(Schema.Array(Release)),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListReleasesResponse" });

export interface RolloutNotificationEvent {
  /** Unique identifier of the `Rollout`. */
  rolloutUid?: string;
  /** Unique identifier of the `Release`. */
  releaseUid?: string;
  /** The name of the `Rollout`. */
  rollout?: string;
  /** Debug message for when a notification fails to send. */
  message?: string;
  /** ID of the `Target` that the rollout is deployed to. */
  targetId?: string;
  /** The name of the `Release`. */
  release?: string;
  /** Unique identifier of the `DeliveryPipeline`. */
  pipelineUid?: string;
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
}

export const RolloutNotificationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rolloutUid: Schema.optional(Schema.String),
    releaseUid: Schema.optional(Schema.String),
    rollout: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    targetId: Schema.optional(Schema.String),
    release: Schema.optional(Schema.String),
    pipelineUid: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "RolloutNotificationEvent" });

export interface CancelOperationRequest {}

export const CancelOperationRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelOperationRequest" });

export interface ListDeployPoliciesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The `DeployPolicy` objects. */
  deployPolicies?: ReadonlyArray<DeployPolicy>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDeployPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    deployPolicies: Schema.optional(Schema.Array(DeployPolicy)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDeployPoliciesResponse" });

export interface SkaffoldVersion {
  /** The time at which this version of Skaffold will no longer be supported. */
  supportExpirationTime?: string;
  /** Date when this version is expected to no longer be supported. */
  supportEndDate?: Clouddeploy_Date;
  /** The time at which this version of Skaffold will enter maintenance mode. */
  maintenanceModeTime?: string;
  /** Release version number. For example, "1.20.3". */
  version?: string;
}

export const SkaffoldVersion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportExpirationTime: Schema.optional(Schema.String),
  supportEndDate: Schema.optional(Clouddeploy_Date),
  maintenanceModeTime: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
}).annotate({ identifier: "SkaffoldVersion" });

export interface Config {
  /** All supported versions of Skaffold. */
  supportedVersions?: ReadonlyArray<SkaffoldVersion>;
  /** Name of the configuration. */
  name?: string;
  /** Default Skaffold version that is assigned when a Release is created without specifying a Skaffold version. */
  defaultSkaffoldVersion?: string;
  /** Output only. Default tool versions. These tool versions are assigned when a Release is created without specifying tool versions. */
  defaultToolVersions?: ToolVersions;
}

export const Config = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  supportedVersions: Schema.optional(Schema.Array(SkaffoldVersion)),
  name: Schema.optional(Schema.String),
  defaultSkaffoldVersion: Schema.optional(Schema.String),
  defaultToolVersions: Schema.optional(ToolVersions),
}).annotate({ identifier: "Config" });

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

export interface TerminateJobRunRequest {
  /** Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. */
  overrideDeployPolicy?: ReadonlyArray<string>;
}

export const TerminateJobRunRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    overrideDeployPolicy: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "TerminateJobRunRequest" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  details: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  message: Schema.optional(Schema.String),
  code: Schema.optional(Schema.Number),
}).annotate({ identifier: "Status" });

export interface Operation {
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
}

export const Operation = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  done: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  error: Schema.optional(Status),
}).annotate({ identifier: "Operation" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface RollbackTargetResponse {
  /** The config of the rollback `Rollout` created or will be created. */
  rollbackConfig?: RollbackTargetConfig;
}

export const RollbackTargetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    rollbackConfig: Schema.optional(RollbackTargetConfig),
  },
).annotate({ identifier: "RollbackTargetResponse" });

export interface DeliveryPipelineNotificationEvent {
  /** The name of the `Delivery Pipeline`. */
  deliveryPipeline?: string;
  /** Debug message for when a notification fails to send. */
  message?: string;
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** Unique identifier of the `DeliveryPipeline`. */
  pipelineUid?: string;
}

export const DeliveryPipelineNotificationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deliveryPipeline: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    pipelineUid: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeliveryPipelineNotificationEvent" });

export interface AdvanceRolloutResponse {}

export const AdvanceRolloutResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AdvanceRolloutResponse" });

export interface CancelAutomationRunRequest {}

export const CancelAutomationRunRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CancelAutomationRunRequest",
  });

export interface CancelRolloutRequest {
  /** Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. */
  overrideDeployPolicy?: ReadonlyArray<string>;
}

export const CancelRolloutRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  overrideDeployPolicy: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "CancelRolloutRequest" });

export interface RetryJobResponse {}

export const RetryJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "RetryJobResponse" });

export interface TerminateJobRunResponse {}

export const TerminateJobRunResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "TerminateJobRunResponse",
  });

export interface AbandonReleaseRequest {}

export const AbandonReleaseRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "AbandonReleaseRequest" });

export interface CancelRolloutResponse {}

export const CancelRolloutResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "CancelRolloutResponse" });

export interface IgnoreJobRequest {
  /** Required. The job ID for the Job to ignore. */
  jobId?: string;
  /** Required. The phase ID the Job to ignore belongs to. */
  phaseId?: string;
  /** Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. */
  overrideDeployPolicy?: ReadonlyArray<string>;
}

export const IgnoreJobRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jobId: Schema.optional(Schema.String),
  phaseId: Schema.optional(Schema.String),
  overrideDeployPolicy: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "IgnoreJobRequest" });

export interface TargetNotificationEvent {
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** The name of the `Target`. */
  target?: string;
  /** Debug message for when a notification fails to send. */
  message?: string;
}

export const TargetNotificationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    target: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "TargetNotificationEvent" });

export interface ApproveRolloutRequest {
  /** Required. True = approve; false = reject */
  approved?: boolean;
  /** Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. */
  overrideDeployPolicy?: ReadonlyArray<string>;
}

export const ApproveRolloutRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  approved: Schema.optional(Schema.Boolean),
  overrideDeployPolicy: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ApproveRolloutRequest" });

export interface CustomTargetTypeNotificationEvent {
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** Debug message for when a notification fails to send. */
  message?: string;
  /** The name of the `CustomTargetType`. */
  customTargetType?: string;
  /** Unique identifier of the `CustomTargetType`. */
  customTargetTypeUid?: string;
}

export const CustomTargetTypeNotificationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    customTargetType: Schema.optional(Schema.String),
    customTargetTypeUid: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomTargetTypeNotificationEvent" });

export interface ReleaseRenderEvent {
  /** The state of the release render. */
  releaseRenderState?:
    | "RENDER_STATE_UNSPECIFIED"
    | "SUCCEEDED"
    | "FAILED"
    | "IN_PROGRESS"
    | (string & {});
  /** Type of this notification, e.g. for a release render state change event. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** The name of the release. release_uid is not in this log message because we write some of these log messages at release creation time, before we've generated the uid. */
  release?: string;
  /** Debug message for when a render transition occurs. Provides further details as rendering progresses through render states. */
  message?: string;
  /** Unique identifier of the `DeliveryPipeline`. */
  pipelineUid?: string;
}

export const ReleaseRenderEvent = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  releaseRenderState: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  release: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  pipelineUid: Schema.optional(Schema.String),
}).annotate({ identifier: "ReleaseRenderEvent" });

export interface ListCustomTargetTypesResponse {
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
  /** The `CustomTargetType` objects. */
  customTargetTypes?: ReadonlyArray<CustomTargetType>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListCustomTargetTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    customTargetTypes: Schema.optional(Schema.Array(CustomTargetType)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCustomTargetTypesResponse" });

export interface Location {
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
}

export const Location = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  name: Schema.optional(Schema.String),
  locationId: Schema.optional(Schema.String),
  labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).annotate({ identifier: "Location" });

export interface ListRolloutsResponse {
  /** The `Rollout` objects. */
  rollouts?: ReadonlyArray<Rollout>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: ReadonlyArray<string>;
}

export const ListRolloutsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rollouts: Schema.optional(Schema.Array(Rollout)),
  nextPageToken: Schema.optional(Schema.String),
  unreachable: Schema.optional(Schema.Array(Schema.String)),
}).annotate({ identifier: "ListRolloutsResponse" });

export interface ListLocationsResponse {
  /** A list of locations that matches the specified filter in the request. */
  locations?: ReadonlyArray<Location>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const ListLocationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  locations: Schema.optional(Schema.Array(Location)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListLocationsResponse" });

export interface DeployPolicyNotificationEvent {
  /** Unique identifier of the deploy policy. */
  deployPolicyUid?: string;
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** Debug message for when a deploy policy fails to send a pub/sub notification. */
  message?: string;
  /** The name of the `DeployPolicy`. */
  deployPolicy?: string;
}

export const DeployPolicyNotificationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployPolicyUid: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    deployPolicy: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeployPolicyNotificationEvent" });

export interface ApproveRolloutResponse {}

export const ApproveRolloutResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).annotate({ identifier: "ApproveRolloutResponse" });

export interface JobRunNotificationEvent {
  /** Unique identifier of the `Rollout`. */
  rolloutUid?: string;
  /** The name of the `Rollout`. */
  rollout?: string;
  /** ID of the `Target`. */
  targetId?: string;
  /** Unique identifier of the `DeliveryPipeline`. */
  pipelineUid?: string;
  /** Debug message for when a notification fails to send. */
  message?: string;
  /** Type of this notification, e.g. for a Pub/Sub failure. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "TYPE_PUBSUB_NOTIFICATION_FAILURE"
    | "TYPE_RESOURCE_STATE_CHANGE"
    | "TYPE_PROCESS_ABORTED"
    | "TYPE_RESTRICTION_VIOLATED"
    | "TYPE_RESOURCE_DELETED"
    | "TYPE_ROLLOUT_UPDATE"
    | "TYPE_DEPLOY_POLICY_EVALUATION"
    | "TYPE_RENDER_STATUES_CHANGE"
    | (string & {});
  /** The name of the `JobRun`. */
  jobRun?: string;
  /** The name of the `Release`. */
  release?: string;
  /** Unique identifier of the `Release`. */
  releaseUid?: string;
}

export const JobRunNotificationEvent =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rolloutUid: Schema.optional(Schema.String),
    rollout: Schema.optional(Schema.String),
    targetId: Schema.optional(Schema.String),
    pipelineUid: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    jobRun: Schema.optional(Schema.String),
    release: Schema.optional(Schema.String),
    releaseUid: Schema.optional(Schema.String),
  }).annotate({ identifier: "JobRunNotificationEvent" });

export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<Operation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const ListOperationsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    operations: Schema.optional(Schema.Array(Operation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  },
).annotate({ identifier: "ListOperationsResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface ListProjectsLocationsRequest {
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    extraLocationTypes: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("extraLocationTypes"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/locations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsRequest>;

export type ListProjectsLocationsResponse = ListLocationsResponse;
export const ListProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListLocationsResponse;

export type ListProjectsLocationsError = DefaultErrors;

/** Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field: * **Global locations**: If `name` is empty, the method lists the public locations available to all projects. * **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version. */
export const listProjectsLocations: API.PaginatedOperationMethod<
  ListProjectsLocationsRequest,
  ListProjectsLocationsResponse,
  ListProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsRequest,
  output: ListProjectsLocationsResponse,
  errors: [],
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
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsRequest>;

export type GetProjectsLocationsResponse = Location;
export const GetProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Location;

export type GetProjectsLocationsError = DefaultErrors;

/** Gets information about a location. */
export const getProjectsLocations: API.OperationMethod<
  GetProjectsLocationsRequest,
  GetProjectsLocationsResponse,
  GetProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsRequest,
  output: GetProjectsLocationsResponse,
  errors: [],
}));

export interface GetConfigProjectsLocationsRequest {
  /** Required. Name of requested configuration. */
  name: string;
}

export const GetConfigProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetConfigProjectsLocationsRequest>;

export type GetConfigProjectsLocationsResponse = Config;
export const GetConfigProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Config;

export type GetConfigProjectsLocationsError = DefaultErrors;

/** Gets the configuration for a location. */
export const getConfigProjectsLocations: API.OperationMethod<
  GetConfigProjectsLocationsRequest,
  GetConfigProjectsLocationsResponse,
  GetConfigProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetConfigProjectsLocationsRequest,
  output: GetConfigProjectsLocationsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsDeployPoliciesRequest {
  /** Required. Field mask is used to specify the fields to be overwritten by the update in the `DeployPolicy` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten. */
  updateMask?: string;
  /** Optional. If set to true, updating a `DeployPolicy` that does not exist will result in the creation of a new `DeployPolicy`. */
  allowMissing?: boolean;
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Output only. Name of the `DeployPolicy`. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. The `deployPolicy` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: DeployPolicy;
}

export const PatchProjectsLocationsDeployPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(DeployPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDeployPoliciesRequest>;

export type PatchProjectsLocationsDeployPoliciesResponse = Operation;
export const PatchProjectsLocationsDeployPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsDeployPoliciesError = DefaultErrors;

/** Updates the parameters of a single DeployPolicy. */
export const patchProjectsLocationsDeployPolicies: API.OperationMethod<
  PatchProjectsLocationsDeployPoliciesRequest,
  PatchProjectsLocationsDeployPoliciesResponse,
  PatchProjectsLocationsDeployPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDeployPoliciesRequest,
  output: PatchProjectsLocationsDeployPoliciesResponse,
  errors: [],
}));

export interface GetIamPolicyProjectsLocationsDeployPoliciesRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsDeployPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsDeployPoliciesRequest>;

export type GetIamPolicyProjectsLocationsDeployPoliciesResponse = Policy;
export const GetIamPolicyProjectsLocationsDeployPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsDeployPoliciesError = DefaultErrors;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsDeployPolicies: API.OperationMethod<
  GetIamPolicyProjectsLocationsDeployPoliciesRequest,
  GetIamPolicyProjectsLocationsDeployPoliciesResponse,
  GetIamPolicyProjectsLocationsDeployPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsDeployPoliciesRequest,
  output: GetIamPolicyProjectsLocationsDeployPoliciesResponse,
  errors: [],
}));

export interface GetProjectsLocationsDeployPoliciesRequest {
  /** Required. Name of the `DeployPolicy`. Format must be `projects/{project_id}/locations/{location_name}/deployPolicies/{deploy_policy_name}`. */
  name: string;
}

export const GetProjectsLocationsDeployPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeployPoliciesRequest>;

export type GetProjectsLocationsDeployPoliciesResponse = DeployPolicy;
export const GetProjectsLocationsDeployPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeployPolicy;

export type GetProjectsLocationsDeployPoliciesError = DefaultErrors;

/** Gets details of a single DeployPolicy. */
export const getProjectsLocationsDeployPolicies: API.OperationMethod<
  GetProjectsLocationsDeployPoliciesRequest,
  GetProjectsLocationsDeployPoliciesResponse,
  GetProjectsLocationsDeployPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeployPoliciesRequest,
  output: GetProjectsLocationsDeployPoliciesResponse,
  errors: [],
}));

export interface SetIamPolicyProjectsLocationsDeployPoliciesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsDeployPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsDeployPoliciesRequest>;

export type SetIamPolicyProjectsLocationsDeployPoliciesResponse = Policy;
export const SetIamPolicyProjectsLocationsDeployPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsDeployPoliciesError = DefaultErrors;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsDeployPolicies: API.OperationMethod<
  SetIamPolicyProjectsLocationsDeployPoliciesRequest,
  SetIamPolicyProjectsLocationsDeployPoliciesResponse,
  SetIamPolicyProjectsLocationsDeployPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsDeployPoliciesRequest,
  output: SetIamPolicyProjectsLocationsDeployPoliciesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsDeployPoliciesRequest {
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Required. The name of the `DeployPolicy` to delete. The format is `projects/{project_id}/locations/{location_name}/deployPolicies/{deploy_policy_name}`. */
  name: string;
  /** Optional. If set to true, then deleting an already deleted or non-existing `DeployPolicy` will succeed. */
  allowMissing?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set, validate the request and preview the review, but do not actually post it. */
  validateOnly?: boolean;
}

export const DeleteProjectsLocationsDeployPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDeployPoliciesRequest>;

export type DeleteProjectsLocationsDeployPoliciesResponse = Operation;
export const DeleteProjectsLocationsDeployPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsDeployPoliciesError = DefaultErrors;

/** Deletes a single DeployPolicy. */
export const deleteProjectsLocationsDeployPolicies: API.OperationMethod<
  DeleteProjectsLocationsDeployPoliciesRequest,
  DeleteProjectsLocationsDeployPoliciesResponse,
  DeleteProjectsLocationsDeployPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDeployPoliciesRequest,
  output: DeleteProjectsLocationsDeployPoliciesResponse,
  errors: [],
}));

export interface ListProjectsLocationsDeployPoliciesRequest {
  /** Required. The parent, which owns this collection of deploy policies. Format must be `projects/{project_id}/locations/{location_name}`. */
  parent: string;
  /** Filter deploy policies to be returned. See https://google.aip.dev/160 for more details. All fields can be used in the filter. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** A page token, received from a previous `ListDeployPolicies` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token. */
  pageToken?: string;
  /** The maximum number of deploy policies to return. The service may return fewer than this value. If unspecified, at most 50 deploy policies will be returned. The maximum value is 1000; values above 1000 will be set to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsDeployPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/deployPolicies" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeployPoliciesRequest>;

export type ListProjectsLocationsDeployPoliciesResponse =
  ListDeployPoliciesResponse;
export const ListProjectsLocationsDeployPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDeployPoliciesResponse;

export type ListProjectsLocationsDeployPoliciesError = DefaultErrors;

/** Lists DeployPolicies in a given project and location. */
export const listProjectsLocationsDeployPolicies: API.PaginatedOperationMethod<
  ListProjectsLocationsDeployPoliciesRequest,
  ListProjectsLocationsDeployPoliciesResponse,
  ListProjectsLocationsDeployPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeployPoliciesRequest,
  output: ListProjectsLocationsDeployPoliciesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsLocationsDeployPoliciesRequest {
  /** Required. ID of the `DeployPolicy`. */
  deployPolicyId?: string;
  /** Required. The parent collection in which the `DeployPolicy` must be created. The format is `projects/{project_id}/locations/{location_name}`. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Request body */
  body?: DeployPolicy;
}

export const CreateProjectsLocationsDeployPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    deployPolicyId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("deployPolicyId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(DeployPolicy).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/deployPolicies",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDeployPoliciesRequest>;

export type CreateProjectsLocationsDeployPoliciesResponse = Operation;
export const CreateProjectsLocationsDeployPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDeployPoliciesError = DefaultErrors;

/** Creates a new DeployPolicy in a given project and location. */
export const createProjectsLocationsDeployPolicies: API.OperationMethod<
  CreateProjectsLocationsDeployPoliciesRequest,
  CreateProjectsLocationsDeployPoliciesResponse,
  CreateProjectsLocationsDeployPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDeployPoliciesRequest,
  output: CreateProjectsLocationsDeployPoliciesResponse,
  errors: [],
}));

export interface TestIamPermissionsProjectsLocationsDeliveryPipelinesRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsDeliveryPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsDeliveryPipelinesRequest>;

export type TestIamPermissionsProjectsLocationsDeliveryPipelinesResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsDeliveryPipelinesError =
  DefaultErrors;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsDeliveryPipelines: API.OperationMethod<
  TestIamPermissionsProjectsLocationsDeliveryPipelinesRequest,
  TestIamPermissionsProjectsLocationsDeliveryPipelinesResponse,
  TestIamPermissionsProjectsLocationsDeliveryPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsDeliveryPipelinesRequest,
  output: TestIamPermissionsProjectsLocationsDeliveryPipelinesResponse,
  errors: [],
}));

export interface GetProjectsLocationsDeliveryPipelinesRequest {
  /** Required. Name of the `DeliveryPipeline`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`. */
  name: string;
}

export const GetProjectsLocationsDeliveryPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeliveryPipelinesRequest>;

export type GetProjectsLocationsDeliveryPipelinesResponse = DeliveryPipeline;
export const GetProjectsLocationsDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ DeliveryPipeline;

export type GetProjectsLocationsDeliveryPipelinesError = DefaultErrors;

/** Gets details of a single DeliveryPipeline. */
export const getProjectsLocationsDeliveryPipelines: API.OperationMethod<
  GetProjectsLocationsDeliveryPipelinesRequest,
  GetProjectsLocationsDeliveryPipelinesResponse,
  GetProjectsLocationsDeliveryPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeliveryPipelinesRequest,
  output: GetProjectsLocationsDeliveryPipelinesResponse,
  errors: [],
}));

export interface GetIamPolicyProjectsLocationsDeliveryPipelinesRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsDeliveryPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsDeliveryPipelinesRequest>;

export type GetIamPolicyProjectsLocationsDeliveryPipelinesResponse = Policy;
export const GetIamPolicyProjectsLocationsDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsDeliveryPipelinesError = DefaultErrors;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsDeliveryPipelines: API.OperationMethod<
  GetIamPolicyProjectsLocationsDeliveryPipelinesRequest,
  GetIamPolicyProjectsLocationsDeliveryPipelinesResponse,
  GetIamPolicyProjectsLocationsDeliveryPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsDeliveryPipelinesRequest,
  output: GetIamPolicyProjectsLocationsDeliveryPipelinesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsDeliveryPipelinesRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the `DeliveryPipeline` to delete. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`. */
  name: string;
  /** Optional. If set to true, all child resources under this pipeline will also be deleted. Otherwise, the request will only work if the pipeline has no child resources. */
  force?: boolean;
  /** Optional. If set, validate the request and preview the review, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. If set to true, then deleting an already deleted or non-existing `DeliveryPipeline` will succeed. */
  allowMissing?: boolean;
}

export const DeleteProjectsLocationsDeliveryPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDeliveryPipelinesRequest>;

export type DeleteProjectsLocationsDeliveryPipelinesResponse = Operation;
export const DeleteProjectsLocationsDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsDeliveryPipelinesError = DefaultErrors;

/** Deletes a single DeliveryPipeline. */
export const deleteProjectsLocationsDeliveryPipelines: API.OperationMethod<
  DeleteProjectsLocationsDeliveryPipelinesRequest,
  DeleteProjectsLocationsDeliveryPipelinesResponse,
  DeleteProjectsLocationsDeliveryPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDeliveryPipelinesRequest,
  output: DeleteProjectsLocationsDeliveryPipelinesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsDeliveryPipelinesRequest {
  /** Required. The parent collection in which the `DeliveryPipeline` must be created. The format is `projects/{project_id}/locations/{location_name}`. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. ID of the `DeliveryPipeline`. */
  deliveryPipelineId?: string;
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Request body */
  body?: DeliveryPipeline;
}

export const CreateProjectsLocationsDeliveryPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    deliveryPipelineId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("deliveryPipelineId"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(DeliveryPipeline).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/deliveryPipelines",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDeliveryPipelinesRequest>;

export type CreateProjectsLocationsDeliveryPipelinesResponse = Operation;
export const CreateProjectsLocationsDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDeliveryPipelinesError = DefaultErrors;

/** Creates a new DeliveryPipeline in a given project and location. */
export const createProjectsLocationsDeliveryPipelines: API.OperationMethod<
  CreateProjectsLocationsDeliveryPipelinesRequest,
  CreateProjectsLocationsDeliveryPipelinesResponse,
  CreateProjectsLocationsDeliveryPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDeliveryPipelinesRequest,
  output: CreateProjectsLocationsDeliveryPipelinesResponse,
  errors: [],
}));

export interface PatchProjectsLocationsDeliveryPipelinesRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Required. Field mask is used to specify the fields to be overwritten by the update in the `DeliveryPipeline` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten. */
  updateMask?: string;
  /** Identifier. Name of the `DeliveryPipeline`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}`. The `deliveryPipeline` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name: string;
  /** Optional. If set to true, updating a `DeliveryPipeline` that does not exist will result in the creation of a new `DeliveryPipeline`. */
  allowMissing?: boolean;
  /** Request body */
  body?: DeliveryPipeline;
}

export const PatchProjectsLocationsDeliveryPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(DeliveryPipeline).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDeliveryPipelinesRequest>;

export type PatchProjectsLocationsDeliveryPipelinesResponse = Operation;
export const PatchProjectsLocationsDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsDeliveryPipelinesError = DefaultErrors;

/** Updates the parameters of a single DeliveryPipeline. */
export const patchProjectsLocationsDeliveryPipelines: API.OperationMethod<
  PatchProjectsLocationsDeliveryPipelinesRequest,
  PatchProjectsLocationsDeliveryPipelinesResponse,
  PatchProjectsLocationsDeliveryPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDeliveryPipelinesRequest,
  output: PatchProjectsLocationsDeliveryPipelinesResponse,
  errors: [],
}));

export interface RollbackTargetProjectsLocationsDeliveryPipelinesRequest {
  /** Required. The `DeliveryPipeline` for which the rollback `Rollout` must be created. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`. */
  name: string;
  /** Request body */
  body?: RollbackTargetRequest;
}

export const RollbackTargetProjectsLocationsDeliveryPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(RollbackTargetRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:rollbackTarget", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RollbackTargetProjectsLocationsDeliveryPipelinesRequest>;

export type RollbackTargetProjectsLocationsDeliveryPipelinesResponse =
  RollbackTargetResponse;
export const RollbackTargetProjectsLocationsDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ RollbackTargetResponse;

export type RollbackTargetProjectsLocationsDeliveryPipelinesError =
  DefaultErrors;

/** Creates a `Rollout` to roll back the specified target. */
export const rollbackTargetProjectsLocationsDeliveryPipelines: API.OperationMethod<
  RollbackTargetProjectsLocationsDeliveryPipelinesRequest,
  RollbackTargetProjectsLocationsDeliveryPipelinesResponse,
  RollbackTargetProjectsLocationsDeliveryPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollbackTargetProjectsLocationsDeliveryPipelinesRequest,
  output: RollbackTargetProjectsLocationsDeliveryPipelinesResponse,
  errors: [],
}));

export interface ListProjectsLocationsDeliveryPipelinesRequest {
  /** A page token, received from a previous `ListDeliveryPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token. */
  pageToken?: string;
  /** Filter pipelines to be returned. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of pipelines. Format must be `projects/{project_id}/locations/{location_name}`. */
  parent: string;
  /** The maximum number of pipelines to return. The service may return fewer than this value. If unspecified, at most 50 pipelines will be returned. The maximum value is 1000; values above 1000 will be set to 1000. */
  pageSize?: number;
}

export const ListProjectsLocationsDeliveryPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/deliveryPipelines" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeliveryPipelinesRequest>;

export type ListProjectsLocationsDeliveryPipelinesResponse =
  ListDeliveryPipelinesResponse;
export const ListProjectsLocationsDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDeliveryPipelinesResponse;

export type ListProjectsLocationsDeliveryPipelinesError = DefaultErrors;

/** Lists DeliveryPipelines in a given project and location. */
export const listProjectsLocationsDeliveryPipelines: API.PaginatedOperationMethod<
  ListProjectsLocationsDeliveryPipelinesRequest,
  ListProjectsLocationsDeliveryPipelinesResponse,
  ListProjectsLocationsDeliveryPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeliveryPipelinesRequest,
  output: ListProjectsLocationsDeliveryPipelinesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SetIamPolicyProjectsLocationsDeliveryPipelinesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsDeliveryPipelinesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsDeliveryPipelinesRequest>;

export type SetIamPolicyProjectsLocationsDeliveryPipelinesResponse = Policy;
export const SetIamPolicyProjectsLocationsDeliveryPipelinesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsDeliveryPipelinesError = DefaultErrors;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsDeliveryPipelines: API.OperationMethod<
  SetIamPolicyProjectsLocationsDeliveryPipelinesRequest,
  SetIamPolicyProjectsLocationsDeliveryPipelinesResponse,
  SetIamPolicyProjectsLocationsDeliveryPipelinesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsDeliveryPipelinesRequest,
  output: SetIamPolicyProjectsLocationsDeliveryPipelinesResponse,
  errors: [],
}));

export interface ListProjectsLocationsDeliveryPipelinesReleasesRequest {
  /** Required. The `DeliveryPipeline` which owns this collection of `Release` objects. */
  parent: string;
  /** Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. The maximum number of `Release` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Release` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000. */
  pageSize?: number;
  /** Optional. Filter releases to be returned. See https://google.aip.dev/160 for more details. */
  filter?: string;
}

export const ListProjectsLocationsDeliveryPipelinesReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/releases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeliveryPipelinesReleasesRequest>;

export type ListProjectsLocationsDeliveryPipelinesReleasesResponse =
  ListReleasesResponse;
export const ListProjectsLocationsDeliveryPipelinesReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListReleasesResponse;

export type ListProjectsLocationsDeliveryPipelinesReleasesError = DefaultErrors;

/** Lists Releases in a given project and location. */
export const listProjectsLocationsDeliveryPipelinesReleases: API.PaginatedOperationMethod<
  ListProjectsLocationsDeliveryPipelinesReleasesRequest,
  ListProjectsLocationsDeliveryPipelinesReleasesResponse,
  ListProjectsLocationsDeliveryPipelinesReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeliveryPipelinesReleasesRequest,
  output: ListProjectsLocationsDeliveryPipelinesReleasesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface AbandonProjectsLocationsDeliveryPipelinesReleasesRequest {
  /** Required. Name of the Release. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}`. */
  name: string;
  /** Request body */
  body?: AbandonReleaseRequest;
}

export const AbandonProjectsLocationsDeliveryPipelinesReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AbandonReleaseRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:abandon", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AbandonProjectsLocationsDeliveryPipelinesReleasesRequest>;

export type AbandonProjectsLocationsDeliveryPipelinesReleasesResponse =
  AbandonReleaseResponse;
export const AbandonProjectsLocationsDeliveryPipelinesReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ AbandonReleaseResponse;

export type AbandonProjectsLocationsDeliveryPipelinesReleasesError =
  DefaultErrors;

/** Abandons a Release in the Delivery Pipeline. */
export const abandonProjectsLocationsDeliveryPipelinesReleases: API.OperationMethod<
  AbandonProjectsLocationsDeliveryPipelinesReleasesRequest,
  AbandonProjectsLocationsDeliveryPipelinesReleasesResponse,
  AbandonProjectsLocationsDeliveryPipelinesReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AbandonProjectsLocationsDeliveryPipelinesReleasesRequest,
  output: AbandonProjectsLocationsDeliveryPipelinesReleasesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsDeliveryPipelinesReleasesRequest {
  /** Required. The parent collection in which the `Release` is created. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. */
  overrideDeployPolicy?: string[];
  /** Required. ID of the `Release`. */
  releaseId?: string;
  /** Request body */
  body?: Release;
}

export const CreateProjectsLocationsDeliveryPipelinesReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    overrideDeployPolicy: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("overrideDeployPolicy"),
    ),
    releaseId: Schema.optional(Schema.String).pipe(T.HttpQuery("releaseId")),
    body: Schema.optional(Release).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/releases", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDeliveryPipelinesReleasesRequest>;

export type CreateProjectsLocationsDeliveryPipelinesReleasesResponse =
  Operation;
export const CreateProjectsLocationsDeliveryPipelinesReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDeliveryPipelinesReleasesError =
  DefaultErrors;

/** Creates a new Release in a given project and location. */
export const createProjectsLocationsDeliveryPipelinesReleases: API.OperationMethod<
  CreateProjectsLocationsDeliveryPipelinesReleasesRequest,
  CreateProjectsLocationsDeliveryPipelinesReleasesResponse,
  CreateProjectsLocationsDeliveryPipelinesReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDeliveryPipelinesReleasesRequest,
  output: CreateProjectsLocationsDeliveryPipelinesReleasesResponse,
  errors: [],
}));

export interface GetProjectsLocationsDeliveryPipelinesReleasesRequest {
  /** Required. Name of the `Release`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}`. */
  name: string;
}

export const GetProjectsLocationsDeliveryPipelinesReleasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeliveryPipelinesReleasesRequest>;

export type GetProjectsLocationsDeliveryPipelinesReleasesResponse = Release;
export const GetProjectsLocationsDeliveryPipelinesReleasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Release;

export type GetProjectsLocationsDeliveryPipelinesReleasesError = DefaultErrors;

/** Gets details of a single Release. */
export const getProjectsLocationsDeliveryPipelinesReleases: API.OperationMethod<
  GetProjectsLocationsDeliveryPipelinesReleasesRequest,
  GetProjectsLocationsDeliveryPipelinesReleasesResponse,
  GetProjectsLocationsDeliveryPipelinesReleasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeliveryPipelinesReleasesRequest,
  output: GetProjectsLocationsDeliveryPipelinesReleasesResponse,
  errors: [],
}));

export interface ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest {
  /** Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. */
  name: string;
  /** Request body */
  body?: ApproveRolloutRequest;
}

export const ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(ApproveRolloutRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:approve", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest>;

export type ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  ApproveRolloutResponse;
export const ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ApproveRolloutResponse;

export type ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsError =
  DefaultErrors;

/** Approves a Rollout. */
export const approveProjectsLocationsDeliveryPipelinesReleasesRollouts: API.OperationMethod<
  ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  output: ApproveProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  errors: [],
}));

export interface CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest {
  /** Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. */
  name: string;
  /** Request body */
  body?: CancelRolloutRequest;
}

export const CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelRolloutRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest>;

export type CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  CancelRolloutResponse;
export const CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CancelRolloutResponse;

export type CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsError =
  DefaultErrors;

/** Cancels a Rollout in a given project and location. */
export const cancelProjectsLocationsDeliveryPipelinesReleasesRollouts: API.OperationMethod<
  CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  output: CancelProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  errors: [],
}));

export interface GetProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest {
  /** Required. Name of the `Rollout`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}/rollouts/{rollout_name}`. */
  name: string;
}

export const GetProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest>;

export type GetProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  Rollout;
export const GetProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Rollout;

export type GetProjectsLocationsDeliveryPipelinesReleasesRolloutsError =
  DefaultErrors;

/** Gets details of a single Rollout. */
export const getProjectsLocationsDeliveryPipelinesReleasesRollouts: API.OperationMethod<
  GetProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  GetProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  GetProjectsLocationsDeliveryPipelinesReleasesRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  output: GetProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  errors: [],
}));

export interface IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest {
  /** Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. */
  rollout: string;
  /** Request body */
  body?: IgnoreJobRequest;
}

export const IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollout: Schema.String.pipe(T.HttpPath("rollout")),
    body: Schema.optional(IgnoreJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{rollout}:ignoreJob", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest>;

export type IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  IgnoreJobResponse;
export const IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ IgnoreJobResponse;

export type IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsError =
  DefaultErrors;

/** Ignores the specified Job in a Rollout. */
export const ignoreJobProjectsLocationsDeliveryPipelinesReleasesRollouts: API.OperationMethod<
  IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  output: IgnoreJobProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  errors: [],
}));

export interface ListProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest {
  /** Optional. The maximum number of `Rollout` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Rollout` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000. */
  pageSize?: number;
  /** Optional. A page token, received from a previous `ListRollouts` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token. */
  pageToken?: string;
  /** Optional. Filter rollouts to be returned. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Required. The `Release` which owns this collection of `Rollout` objects. */
  parent: string;
  /** Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/rollouts" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest>;

export type ListProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  ListRolloutsResponse;
export const ListProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListRolloutsResponse;

export type ListProjectsLocationsDeliveryPipelinesReleasesRolloutsError =
  DefaultErrors;

/** Lists Rollouts in a given project and location. */
export const listProjectsLocationsDeliveryPipelinesReleasesRollouts: API.PaginatedOperationMethod<
  ListProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  ListProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  ListProjectsLocationsDeliveryPipelinesReleasesRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  output: ListProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest {
  /** Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. */
  rollout: string;
  /** Request body */
  body?: RetryJobRequest;
}

export const RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rollout: Schema.String.pipe(T.HttpPath("rollout")),
    body: Schema.optional(RetryJobRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{rollout}:retryJob", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest>;

export type RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  RetryJobResponse;
export const RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RetryJobResponse;

export type RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsError =
  DefaultErrors;

/** Retries the specified Job in a Rollout. */
export const retryJobProjectsLocationsDeliveryPipelinesReleasesRollouts: API.OperationMethod<
  RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  output: RetryJobProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  errors: [],
}));

export interface AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest {
  /** Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`. */
  name: string;
  /** Request body */
  body?: AdvanceRolloutRequest;
}

export const AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(AdvanceRolloutRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:advance", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest>;

export type AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  AdvanceRolloutResponse;
export const AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AdvanceRolloutResponse;

export type AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsError =
  DefaultErrors;

/** Advances a Rollout in a given project and location. */
export const advanceProjectsLocationsDeliveryPipelinesReleasesRollouts: API.OperationMethod<
  AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  output: AdvanceProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest {
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. */
  overrideDeployPolicy?: string[];
  /** Required. ID of the `Rollout`. */
  rolloutId?: string;
  /** Optional. The starting phase ID for the `Rollout`. If empty the `Rollout` will start at the first phase. */
  startingPhaseId?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The parent collection in which the `Rollout` must be created. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}`. */
  parent: string;
  /** Request body */
  body?: Rollout;
}

export const CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    overrideDeployPolicy: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("overrideDeployPolicy"),
    ),
    rolloutId: Schema.optional(Schema.String).pipe(T.HttpQuery("rolloutId")),
    startingPhaseId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("startingPhaseId"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Rollout).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/rollouts", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest>;

export type CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  Operation;
export const CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsError =
  DefaultErrors;

/** Creates a new Rollout in a given project and location. */
export const createProjectsLocationsDeliveryPipelinesReleasesRollouts: API.OperationMethod<
  CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsRequest,
  output: CreateProjectsLocationsDeliveryPipelinesReleasesRolloutsResponse,
  errors: [],
}));

export interface ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest {
  /** Required. The `Rollout` which owns this collection of `JobRun` objects. */
  parent: string;
  /** Optional. The maximum number of `JobRun` objects to return. The service may return fewer than this value. If unspecified, at most 50 `JobRun` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000. */
  pageSize?: number;
  /** Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Optional. Filter results to be returned. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListJobRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/jobRuns" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest>;

export type ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse =
  ListJobRunsResponse;
export const ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListJobRunsResponse;

export type ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsError =
  DefaultErrors;

/** Lists JobRuns in a given project and location. */
export const listProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRuns: API.PaginatedOperationMethod<
  ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest,
  ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse,
  ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest,
  output: ListProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest {
  /** Required. Name of the `JobRun`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}/rollouts/{rollout_name}/jobRuns/{job_run_name}`. */
  name: string;
}

export const GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest>;

export type GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse =
  JobRun;
export const GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ JobRun;

export type GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsError =
  DefaultErrors;

/** Gets details of a single JobRun. */
export const getProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRuns: API.OperationMethod<
  GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest,
  GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse,
  GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest,
  output: GetProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse,
  errors: [],
}));

export interface TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest {
  /** Required. Name of the `JobRun`. Format must be `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}/jobRuns/{jobRun}`. */
  name: string;
  /** Request body */
  body?: TerminateJobRunRequest;
}

export const TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(TerminateJobRunRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:terminate", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest>;

export type TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse =
  TerminateJobRunResponse;
export const TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TerminateJobRunResponse;

export type TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsError =
  DefaultErrors;

/** Terminates a Job Run in a given project and location. */
export const terminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRuns: API.OperationMethod<
  TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest,
  TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse,
  TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input:
    TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsRequest,
  output:
    TerminateProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsResponse,
  errors: [],
}));

export interface GetProjectsLocationsDeliveryPipelinesAutomationsRequest {
  /** Required. Name of the `Automation`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/automations/{automation_name}`. */
  name: string;
}

export const GetProjectsLocationsDeliveryPipelinesAutomationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeliveryPipelinesAutomationsRequest>;

export type GetProjectsLocationsDeliveryPipelinesAutomationsResponse =
  Automation;
export const GetProjectsLocationsDeliveryPipelinesAutomationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Automation;

export type GetProjectsLocationsDeliveryPipelinesAutomationsError =
  DefaultErrors;

/** Gets details of a single Automation. */
export const getProjectsLocationsDeliveryPipelinesAutomations: API.OperationMethod<
  GetProjectsLocationsDeliveryPipelinesAutomationsRequest,
  GetProjectsLocationsDeliveryPipelinesAutomationsResponse,
  GetProjectsLocationsDeliveryPipelinesAutomationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeliveryPipelinesAutomationsRequest,
  output: GetProjectsLocationsDeliveryPipelinesAutomationsResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsDeliveryPipelinesAutomationsRequest {
  /** Optional. The weak etag of the request. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Optional. If set, validate the request and verify whether the resource exists, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, then deleting an already deleted or non-existing `Automation` will succeed. */
  allowMissing?: boolean;
  /** Required. The name of the `Automation` to delete. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/automations/{automation_name}`. */
  name: string;
}

export const DeleteProjectsLocationsDeliveryPipelinesAutomationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsDeliveryPipelinesAutomationsRequest>;

export type DeleteProjectsLocationsDeliveryPipelinesAutomationsResponse =
  Operation;
export const DeleteProjectsLocationsDeliveryPipelinesAutomationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsDeliveryPipelinesAutomationsError =
  DefaultErrors;

/** Deletes a single Automation resource. */
export const deleteProjectsLocationsDeliveryPipelinesAutomations: API.OperationMethod<
  DeleteProjectsLocationsDeliveryPipelinesAutomationsRequest,
  DeleteProjectsLocationsDeliveryPipelinesAutomationsResponse,
  DeleteProjectsLocationsDeliveryPipelinesAutomationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsDeliveryPipelinesAutomationsRequest,
  output: DeleteProjectsLocationsDeliveryPipelinesAutomationsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsDeliveryPipelinesAutomationsRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. ID of the `Automation`. */
  automationId?: string;
  /** Required. The parent collection in which the `Automation` must be created. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`. */
  parent: string;
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Request body */
  body?: Automation;
}

export const CreateProjectsLocationsDeliveryPipelinesAutomationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    automationId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("automationId"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    body: Schema.optional(Automation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/automations", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsDeliveryPipelinesAutomationsRequest>;

export type CreateProjectsLocationsDeliveryPipelinesAutomationsResponse =
  Operation;
export const CreateProjectsLocationsDeliveryPipelinesAutomationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsDeliveryPipelinesAutomationsError =
  DefaultErrors;

/** Creates a new Automation in a given project and location. */
export const createProjectsLocationsDeliveryPipelinesAutomations: API.OperationMethod<
  CreateProjectsLocationsDeliveryPipelinesAutomationsRequest,
  CreateProjectsLocationsDeliveryPipelinesAutomationsResponse,
  CreateProjectsLocationsDeliveryPipelinesAutomationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsDeliveryPipelinesAutomationsRequest,
  output: CreateProjectsLocationsDeliveryPipelinesAutomationsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsDeliveryPipelinesAutomationsRequest {
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Required. Field mask is used to specify the fields to be overwritten by the update in the `Automation` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten. */
  updateMask?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Output only. Name of the `Automation`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automations/{automation}`. */
  name: string;
  /** Optional. If set to true, updating a `Automation` that does not exist will result in the creation of a new `Automation`. */
  allowMissing?: boolean;
  /** Request body */
  body?: Automation;
}

export const PatchProjectsLocationsDeliveryPipelinesAutomationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(Automation).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsDeliveryPipelinesAutomationsRequest>;

export type PatchProjectsLocationsDeliveryPipelinesAutomationsResponse =
  Operation;
export const PatchProjectsLocationsDeliveryPipelinesAutomationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsDeliveryPipelinesAutomationsError =
  DefaultErrors;

/** Updates the parameters of a single Automation resource. */
export const patchProjectsLocationsDeliveryPipelinesAutomations: API.OperationMethod<
  PatchProjectsLocationsDeliveryPipelinesAutomationsRequest,
  PatchProjectsLocationsDeliveryPipelinesAutomationsResponse,
  PatchProjectsLocationsDeliveryPipelinesAutomationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsDeliveryPipelinesAutomationsRequest,
  output: PatchProjectsLocationsDeliveryPipelinesAutomationsResponse,
  errors: [],
}));

export interface ListProjectsLocationsDeliveryPipelinesAutomationsRequest {
  /** Filter automations to be returned. All fields can be used in the filter. */
  filter?: string;
  /** A page token, received from a previous `ListAutomations` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent `Delivery Pipeline`, which owns this collection of automations. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`. */
  parent: string;
  /** The maximum number of automations to return. The service may return fewer than this value. If unspecified, at most 50 automations will be returned. The maximum value is 1000; values above 1000 will be set to 1000. */
  pageSize?: number;
  /** Field to sort by. */
  orderBy?: string;
}

export const ListProjectsLocationsDeliveryPipelinesAutomationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/automations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeliveryPipelinesAutomationsRequest>;

export type ListProjectsLocationsDeliveryPipelinesAutomationsResponse =
  ListAutomationsResponse;
export const ListProjectsLocationsDeliveryPipelinesAutomationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAutomationsResponse;

export type ListProjectsLocationsDeliveryPipelinesAutomationsError =
  DefaultErrors;

/** Lists Automations in a given project and location. */
export const listProjectsLocationsDeliveryPipelinesAutomations: API.PaginatedOperationMethod<
  ListProjectsLocationsDeliveryPipelinesAutomationsRequest,
  ListProjectsLocationsDeliveryPipelinesAutomationsResponse,
  ListProjectsLocationsDeliveryPipelinesAutomationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeliveryPipelinesAutomationsRequest,
  output: ListProjectsLocationsDeliveryPipelinesAutomationsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CancelProjectsLocationsDeliveryPipelinesAutomationRunsRequest {
  /** Required. Name of the `AutomationRun`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automationRuns/{automation_run}`. */
  name: string;
  /** Request body */
  body?: CancelAutomationRunRequest;
}

export const CancelProjectsLocationsDeliveryPipelinesAutomationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CancelAutomationRunRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsDeliveryPipelinesAutomationRunsRequest>;

export type CancelProjectsLocationsDeliveryPipelinesAutomationRunsResponse =
  CancelAutomationRunResponse;
export const CancelProjectsLocationsDeliveryPipelinesAutomationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CancelAutomationRunResponse;

export type CancelProjectsLocationsDeliveryPipelinesAutomationRunsError =
  DefaultErrors;

/** Cancels an AutomationRun. The `state` of the `AutomationRun` after cancelling is `CANCELLED`. `CancelAutomationRun` can be called on AutomationRun in the state `IN_PROGRESS` and `PENDING`; AutomationRun in a different state returns an `FAILED_PRECONDITION` error. */
export const cancelProjectsLocationsDeliveryPipelinesAutomationRuns: API.OperationMethod<
  CancelProjectsLocationsDeliveryPipelinesAutomationRunsRequest,
  CancelProjectsLocationsDeliveryPipelinesAutomationRunsResponse,
  CancelProjectsLocationsDeliveryPipelinesAutomationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsDeliveryPipelinesAutomationRunsRequest,
  output: CancelProjectsLocationsDeliveryPipelinesAutomationRunsResponse,
  errors: [],
}));

export interface GetProjectsLocationsDeliveryPipelinesAutomationRunsRequest {
  /** Required. Name of the `AutomationRun`. Format must be `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automationRuns/{automation_run}`. */
  name: string;
}

export const GetProjectsLocationsDeliveryPipelinesAutomationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsDeliveryPipelinesAutomationRunsRequest>;

export type GetProjectsLocationsDeliveryPipelinesAutomationRunsResponse =
  AutomationRun;
export const GetProjectsLocationsDeliveryPipelinesAutomationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AutomationRun;

export type GetProjectsLocationsDeliveryPipelinesAutomationRunsError =
  DefaultErrors;

/** Gets details of a single AutomationRun. */
export const getProjectsLocationsDeliveryPipelinesAutomationRuns: API.OperationMethod<
  GetProjectsLocationsDeliveryPipelinesAutomationRunsRequest,
  GetProjectsLocationsDeliveryPipelinesAutomationRunsResponse,
  GetProjectsLocationsDeliveryPipelinesAutomationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsDeliveryPipelinesAutomationRunsRequest,
  output: GetProjectsLocationsDeliveryPipelinesAutomationRunsResponse,
  errors: [],
}));

export interface ListProjectsLocationsDeliveryPipelinesAutomationRunsRequest {
  /** Field to sort by. */
  orderBy?: string;
  /** Required. The parent `Delivery Pipeline`, which owns this collection of automationRuns. Format must be `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}`. */
  parent: string;
  /** The maximum number of automationRuns to return. The service may return fewer than this value. If unspecified, at most 50 automationRuns will be returned. The maximum value is 1000; values above 1000 will be set to 1000. */
  pageSize?: number;
  /** Filter automationRuns to be returned. All fields can be used in the filter. */
  filter?: string;
  /** A page token, received from a previous `ListAutomationRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsDeliveryPipelinesAutomationRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/automationRuns" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsDeliveryPipelinesAutomationRunsRequest>;

export type ListProjectsLocationsDeliveryPipelinesAutomationRunsResponse =
  ListAutomationRunsResponse;
export const ListProjectsLocationsDeliveryPipelinesAutomationRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAutomationRunsResponse;

export type ListProjectsLocationsDeliveryPipelinesAutomationRunsError =
  DefaultErrors;

/** Lists AutomationRuns in a given project and location. */
export const listProjectsLocationsDeliveryPipelinesAutomationRuns: API.PaginatedOperationMethod<
  ListProjectsLocationsDeliveryPipelinesAutomationRunsRequest,
  ListProjectsLocationsDeliveryPipelinesAutomationRunsResponse,
  ListProjectsLocationsDeliveryPipelinesAutomationRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsDeliveryPipelinesAutomationRunsRequest,
  output: ListProjectsLocationsDeliveryPipelinesAutomationRunsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface PatchProjectsLocationsCustomTargetTypesRequest {
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Required. Field mask is used to specify the fields to be overwritten by the update in the `CustomTargetType` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten. */
  updateMask?: string;
  /** Identifier. Name of the `CustomTargetType`. Format is `projects/{project}/locations/{location}/customTargetTypes/{customTargetType}`. The `customTargetType` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. If set to true, updating a `CustomTargetType` that does not exist will result in the creation of a new `CustomTargetType`. */
  allowMissing?: boolean;
  /** Request body */
  body?: CustomTargetType;
}

export const PatchProjectsLocationsCustomTargetTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(CustomTargetType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsCustomTargetTypesRequest>;

export type PatchProjectsLocationsCustomTargetTypesResponse = Operation;
export const PatchProjectsLocationsCustomTargetTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsCustomTargetTypesError = DefaultErrors;

/** Updates a single CustomTargetType. */
export const patchProjectsLocationsCustomTargetTypes: API.OperationMethod<
  PatchProjectsLocationsCustomTargetTypesRequest,
  PatchProjectsLocationsCustomTargetTypesResponse,
  PatchProjectsLocationsCustomTargetTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsCustomTargetTypesRequest,
  output: PatchProjectsLocationsCustomTargetTypesResponse,
  errors: [],
}));

export interface SetIamPolicyProjectsLocationsCustomTargetTypesRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsCustomTargetTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsCustomTargetTypesRequest>;

export type SetIamPolicyProjectsLocationsCustomTargetTypesResponse = Policy;
export const SetIamPolicyProjectsLocationsCustomTargetTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsCustomTargetTypesError = DefaultErrors;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsCustomTargetTypes: API.OperationMethod<
  SetIamPolicyProjectsLocationsCustomTargetTypesRequest,
  SetIamPolicyProjectsLocationsCustomTargetTypesResponse,
  SetIamPolicyProjectsLocationsCustomTargetTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsCustomTargetTypesRequest,
  output: SetIamPolicyProjectsLocationsCustomTargetTypesResponse,
  errors: [],
}));

export interface CreateProjectsLocationsCustomTargetTypesRequest {
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Required. The parent collection in which the `CustomTargetType` must be created. The format is `projects/{project_id}/locations/{location_name}`. */
  parent: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. ID of the `CustomTargetType`. */
  customTargetTypeId?: string;
  /** Request body */
  body?: CustomTargetType;
}

export const CreateProjectsLocationsCustomTargetTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    customTargetTypeId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("customTargetTypeId"),
    ),
    body: Schema.optional(CustomTargetType).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/customTargetTypes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsCustomTargetTypesRequest>;

export type CreateProjectsLocationsCustomTargetTypesResponse = Operation;
export const CreateProjectsLocationsCustomTargetTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsCustomTargetTypesError = DefaultErrors;

/** Creates a new CustomTargetType in a given project and location. */
export const createProjectsLocationsCustomTargetTypes: API.OperationMethod<
  CreateProjectsLocationsCustomTargetTypesRequest,
  CreateProjectsLocationsCustomTargetTypesResponse,
  CreateProjectsLocationsCustomTargetTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsCustomTargetTypesRequest,
  output: CreateProjectsLocationsCustomTargetTypesResponse,
  errors: [],
}));

export interface GetProjectsLocationsCustomTargetTypesRequest {
  /** Required. Name of the `CustomTargetType`. Format must be `projects/{project_id}/locations/{location_name}/customTargetTypes/{custom_target_type}`. */
  name: string;
}

export const GetProjectsLocationsCustomTargetTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsCustomTargetTypesRequest>;

export type GetProjectsLocationsCustomTargetTypesResponse = CustomTargetType;
export const GetProjectsLocationsCustomTargetTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ CustomTargetType;

export type GetProjectsLocationsCustomTargetTypesError = DefaultErrors;

/** Gets details of a single CustomTargetType. */
export const getProjectsLocationsCustomTargetTypes: API.OperationMethod<
  GetProjectsLocationsCustomTargetTypesRequest,
  GetProjectsLocationsCustomTargetTypesResponse,
  GetProjectsLocationsCustomTargetTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsCustomTargetTypesRequest,
  output: GetProjectsLocationsCustomTargetTypesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsCustomTargetTypesRequest {
  /** Optional. If set to true, the request is validated but no actual change is made. */
  validateOnly?: boolean;
  /** Optional. If set to true, then deleting an already deleted or non-existing `CustomTargetType` will succeed. */
  allowMissing?: boolean;
  /** Required. The name of the `CustomTargetType` to delete. Format must be `projects/{project_id}/locations/{location_name}/customTargetTypes/{custom_target_type}`. */
  name: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsCustomTargetTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsCustomTargetTypesRequest>;

export type DeleteProjectsLocationsCustomTargetTypesResponse = Operation;
export const DeleteProjectsLocationsCustomTargetTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsCustomTargetTypesError = DefaultErrors;

/** Deletes a single CustomTargetType. */
export const deleteProjectsLocationsCustomTargetTypes: API.OperationMethod<
  DeleteProjectsLocationsCustomTargetTypesRequest,
  DeleteProjectsLocationsCustomTargetTypesResponse,
  DeleteProjectsLocationsCustomTargetTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsCustomTargetTypesRequest,
  output: DeleteProjectsLocationsCustomTargetTypesResponse,
  errors: [],
}));

export interface ListProjectsLocationsCustomTargetTypesRequest {
  /** Optional. Filter custom target types to be returned. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. A page token, received from a previous `ListCustomTargetTypes` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token. */
  pageToken?: string;
  /** Required. The parent that owns this collection of custom target types. Format must be `projects/{project_id}/locations/{location_name}`. */
  parent: string;
  /** Optional. The maximum number of `CustomTargetType` objects to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetType` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000. */
  pageSize?: number;
  /** Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
}

export const ListProjectsLocationsCustomTargetTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/customTargetTypes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsCustomTargetTypesRequest>;

export type ListProjectsLocationsCustomTargetTypesResponse =
  ListCustomTargetTypesResponse;
export const ListProjectsLocationsCustomTargetTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCustomTargetTypesResponse;

export type ListProjectsLocationsCustomTargetTypesError = DefaultErrors;

/** Lists CustomTargetTypes in a given project and location. */
export const listProjectsLocationsCustomTargetTypes: API.PaginatedOperationMethod<
  ListProjectsLocationsCustomTargetTypesRequest,
  ListProjectsLocationsCustomTargetTypesResponse,
  ListProjectsLocationsCustomTargetTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsCustomTargetTypesRequest,
  output: ListProjectsLocationsCustomTargetTypesResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetIamPolicyProjectsLocationsCustomTargetTypesRequest {
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
}

export const GetIamPolicyProjectsLocationsCustomTargetTypesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsCustomTargetTypesRequest>;

export type GetIamPolicyProjectsLocationsCustomTargetTypesResponse = Policy;
export const GetIamPolicyProjectsLocationsCustomTargetTypesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsCustomTargetTypesError = DefaultErrors;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsCustomTargetTypes: API.OperationMethod<
  GetIamPolicyProjectsLocationsCustomTargetTypesRequest,
  GetIamPolicyProjectsLocationsCustomTargetTypesResponse,
  GetIamPolicyProjectsLocationsCustomTargetTypesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsCustomTargetTypesRequest,
  output: GetIamPolicyProjectsLocationsCustomTargetTypesResponse,
  errors: [],
}));

export interface DeleteProjectsLocationsTargetsRequest {
  /** Optional. If set, validate the request and preview the review, but do not actually post it. */
  validateOnly?: boolean;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. The name of the `Target` to delete. The format is `projects/{project_id}/locations/{location_name}/targets/{target_name}`. */
  name: string;
  /** Optional. If set to true, then deleting an already deleted or non-existing `Target` will succeed. */
  allowMissing?: boolean;
  /** Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
}

export const DeleteProjectsLocationsTargetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsTargetsRequest>;

export type DeleteProjectsLocationsTargetsResponse = Operation;
export const DeleteProjectsLocationsTargetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type DeleteProjectsLocationsTargetsError = DefaultErrors;

/** Deletes a single Target. */
export const deleteProjectsLocationsTargets: API.OperationMethod<
  DeleteProjectsLocationsTargetsRequest,
  DeleteProjectsLocationsTargetsResponse,
  DeleteProjectsLocationsTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsTargetsRequest,
  output: DeleteProjectsLocationsTargetsResponse,
  errors: [],
}));

export interface CreateProjectsLocationsTargetsRequest {
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Required. ID of the `Target`. */
  targetId?: string;
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Required. The parent collection in which the `Target` must be created. The format is `projects/{project_id}/locations/{location_name}`. */
  parent: string;
  /** Request body */
  body?: Target;
}

export const CreateProjectsLocationsTargetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    targetId: Schema.optional(Schema.String).pipe(T.HttpQuery("targetId")),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Target).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}/targets", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsTargetsRequest>;

export type CreateProjectsLocationsTargetsResponse = Operation;
export const CreateProjectsLocationsTargetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type CreateProjectsLocationsTargetsError = DefaultErrors;

/** Creates a new Target in a given project and location. */
export const createProjectsLocationsTargets: API.OperationMethod<
  CreateProjectsLocationsTargetsRequest,
  CreateProjectsLocationsTargetsResponse,
  CreateProjectsLocationsTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsTargetsRequest,
  output: CreateProjectsLocationsTargetsResponse,
  errors: [],
}));

export interface TestIamPermissionsProjectsLocationsTargetsRequest {
  /** REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: TestIamPermissionsRequest;
}

export const TestIamPermissionsProjectsLocationsTargetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(TestIamPermissionsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:testIamPermissions",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<TestIamPermissionsProjectsLocationsTargetsRequest>;

export type TestIamPermissionsProjectsLocationsTargetsResponse =
  TestIamPermissionsResponse;
export const TestIamPermissionsProjectsLocationsTargetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ TestIamPermissionsResponse;

export type TestIamPermissionsProjectsLocationsTargetsError = DefaultErrors;

/** Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning. */
export const testIamPermissionsProjectsLocationsTargets: API.OperationMethod<
  TestIamPermissionsProjectsLocationsTargetsRequest,
  TestIamPermissionsProjectsLocationsTargetsResponse,
  TestIamPermissionsProjectsLocationsTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TestIamPermissionsProjectsLocationsTargetsRequest,
  output: TestIamPermissionsProjectsLocationsTargetsResponse,
  errors: [],
}));

export interface SetIamPolicyProjectsLocationsTargetsRequest {
  /** REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
  /** Request body */
  body?: SetIamPolicyRequest;
}

export const SetIamPolicyProjectsLocationsTargetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.String.pipe(T.HttpPath("resource")),
    body: Schema.optional(SetIamPolicyRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{resource}:setIamPolicy",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SetIamPolicyProjectsLocationsTargetsRequest>;

export type SetIamPolicyProjectsLocationsTargetsResponse = Policy;
export const SetIamPolicyProjectsLocationsTargetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type SetIamPolicyProjectsLocationsTargetsError = DefaultErrors;

/** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
export const setIamPolicyProjectsLocationsTargets: API.OperationMethod<
  SetIamPolicyProjectsLocationsTargetsRequest,
  SetIamPolicyProjectsLocationsTargetsResponse,
  SetIamPolicyProjectsLocationsTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SetIamPolicyProjectsLocationsTargetsRequest,
  output: SetIamPolicyProjectsLocationsTargetsResponse,
  errors: [],
}));

export interface PatchProjectsLocationsTargetsRequest {
  /** Identifier. Name of the `Target`. Format is `projects/{project}/locations/{location}/targets/{target}`. The `target` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?` */
  name: string;
  /** Optional. If set to true, updating a `Target` that does not exist will result in the creation of a new `Target`. */
  allowMissing?: boolean;
  /** Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. */
  validateOnly?: boolean;
  /** Required. Field mask is used to specify the fields to be overwritten by the update in the `Target` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten. */
  updateMask?: string;
  /** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
  requestId?: string;
  /** Request body */
  body?: Target;
}

export const PatchProjectsLocationsTargetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    validateOnly: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("validateOnly"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(Target).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsTargetsRequest>;

export type PatchProjectsLocationsTargetsResponse = Operation;
export const PatchProjectsLocationsTargetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type PatchProjectsLocationsTargetsError = DefaultErrors;

/** Updates the parameters of a single Target. */
export const patchProjectsLocationsTargets: API.OperationMethod<
  PatchProjectsLocationsTargetsRequest,
  PatchProjectsLocationsTargetsResponse,
  PatchProjectsLocationsTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsTargetsRequest,
  output: PatchProjectsLocationsTargetsResponse,
  errors: [],
}));

export interface GetIamPolicyProjectsLocationsTargetsRequest {
  /** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
  "options.requestedPolicyVersion"?: number;
  /** REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. */
  resource: string;
}

export const GetIamPolicyProjectsLocationsTargetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "options.requestedPolicyVersion": Schema.optional(Schema.Number).pipe(
      T.HttpQuery("options.requestedPolicyVersion"),
    ),
    resource: Schema.String.pipe(T.HttpPath("resource")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{resource}:getIamPolicy" }),
    svc,
  ) as unknown as Schema.Schema<GetIamPolicyProjectsLocationsTargetsRequest>;

export type GetIamPolicyProjectsLocationsTargetsResponse = Policy;
export const GetIamPolicyProjectsLocationsTargetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Policy;

export type GetIamPolicyProjectsLocationsTargetsError = DefaultErrors;

/** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
export const getIamPolicyProjectsLocationsTargets: API.OperationMethod<
  GetIamPolicyProjectsLocationsTargetsRequest,
  GetIamPolicyProjectsLocationsTargetsResponse,
  GetIamPolicyProjectsLocationsTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIamPolicyProjectsLocationsTargetsRequest,
  output: GetIamPolicyProjectsLocationsTargetsResponse,
  errors: [],
}));

export interface ListProjectsLocationsTargetsRequest {
  /** Optional. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token. */
  pageToken?: string;
  /** Optional. The maximum number of `Target` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Target` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000. */
  pageSize?: number;
  /** Optional. Filter targets to be returned. See https://google.aip.dev/160 for more details. */
  filter?: string;
  /** Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details. */
  orderBy?: string;
  /** Required. The parent, which owns this collection of targets. Format must be `projects/{project_id}/locations/{location_name}`. */
  parent: string;
}

export const ListProjectsLocationsTargetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/targets" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsTargetsRequest>;

export type ListProjectsLocationsTargetsResponse = ListTargetsResponse;
export const ListProjectsLocationsTargetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListTargetsResponse;

export type ListProjectsLocationsTargetsError = DefaultErrors;

/** Lists Targets in a given project and location. */
export const listProjectsLocationsTargets: API.PaginatedOperationMethod<
  ListProjectsLocationsTargetsRequest,
  ListProjectsLocationsTargetsResponse,
  ListProjectsLocationsTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsTargetsRequest,
  output: ListProjectsLocationsTargetsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsTargetsRequest {
  /** Required. Name of the `Target`. Format must be `projects/{project_id}/locations/{location_name}/targets/{target_name}`. */
  name: string;
}

export const GetProjectsLocationsTargetsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsTargetsRequest>;

export type GetProjectsLocationsTargetsResponse = Target;
export const GetProjectsLocationsTargetsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Target;

export type GetProjectsLocationsTargetsError = DefaultErrors;

/** Gets details of a single Target. */
export const getProjectsLocationsTargets: API.OperationMethod<
  GetProjectsLocationsTargetsRequest,
  GetProjectsLocationsTargetsResponse,
  GetProjectsLocationsTargetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsTargetsRequest,
  output: GetProjectsLocationsTargetsResponse,
  errors: [],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page token. */
  pageToken?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse = ListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListOperationsResponse;

export type ListProjectsLocationsOperationsError = DefaultErrors;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [],
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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = Empty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsOperationsError = DefaultErrors;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [],
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = Operation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Operation;

export type GetProjectsLocationsOperationsError = DefaultErrors;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [],
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
    T.Http({ method: "POST", path: "v1/{name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = Empty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsLocationsOperationsError = DefaultErrors;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [],
}));
