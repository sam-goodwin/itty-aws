import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface DeviceFarm_20150623 {
  createDevicePool(
    input: CreateDevicePoolRequest,
  ): Effect.Effect<
    CreateDevicePoolResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  createInstanceProfile(
    input: CreateInstanceProfileRequest,
  ): Effect.Effect<
    CreateInstanceProfileResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  createNetworkProfile(
    input: CreateNetworkProfileRequest,
  ): Effect.Effect<
    CreateNetworkProfileResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  createProject(
    input: CreateProjectRequest,
  ): Effect.Effect<
    CreateProjectResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | TagOperationException | CommonAwsError
  >;
  createRemoteAccessSession(
    input: CreateRemoteAccessSessionRequest,
  ): Effect.Effect<
    CreateRemoteAccessSessionResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  createTestGridProject(
    input: CreateTestGridProjectRequest,
  ): Effect.Effect<
    CreateTestGridProjectResult,
    ArgumentException | InternalServiceException | LimitExceededException | CommonAwsError
  >;
  createTestGridUrl(
    input: CreateTestGridUrlRequest,
  ): Effect.Effect<
    CreateTestGridUrlResult,
    ArgumentException | InternalServiceException | NotFoundException | CommonAwsError
  >;
  createUpload(
    input: CreateUploadRequest,
  ): Effect.Effect<
    CreateUploadResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  createVPCEConfiguration(
    input: CreateVPCEConfigurationRequest,
  ): Effect.Effect<
    CreateVPCEConfigurationResult,
    ArgumentException | LimitExceededException | ServiceAccountException | CommonAwsError
  >;
  deleteDevicePool(
    input: DeleteDevicePoolRequest,
  ): Effect.Effect<
    DeleteDevicePoolResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  deleteInstanceProfile(
    input: DeleteInstanceProfileRequest,
  ): Effect.Effect<
    DeleteInstanceProfileResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  deleteNetworkProfile(
    input: DeleteNetworkProfileRequest,
  ): Effect.Effect<
    DeleteNetworkProfileResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  deleteProject(
    input: DeleteProjectRequest,
  ): Effect.Effect<
    DeleteProjectResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  deleteRemoteAccessSession(
    input: DeleteRemoteAccessSessionRequest,
  ): Effect.Effect<
    DeleteRemoteAccessSessionResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  deleteRun(
    input: DeleteRunRequest,
  ): Effect.Effect<
    DeleteRunResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  deleteTestGridProject(
    input: DeleteTestGridProjectRequest,
  ): Effect.Effect<
    DeleteTestGridProjectResult,
    ArgumentException | CannotDeleteException | InternalServiceException | NotFoundException | CommonAwsError
  >;
  deleteUpload(
    input: DeleteUploadRequest,
  ): Effect.Effect<
    DeleteUploadResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  deleteVPCEConfiguration(
    input: DeleteVPCEConfigurationRequest,
  ): Effect.Effect<
    DeleteVPCEConfigurationResult,
    ArgumentException | InvalidOperationException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getAccountSettings(
    input: GetAccountSettingsRequest,
  ): Effect.Effect<
    GetAccountSettingsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getDevice(
    input: GetDeviceRequest,
  ): Effect.Effect<
    GetDeviceResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getDeviceInstance(
    input: GetDeviceInstanceRequest,
  ): Effect.Effect<
    GetDeviceInstanceResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getDevicePool(
    input: GetDevicePoolRequest,
  ): Effect.Effect<
    GetDevicePoolResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getDevicePoolCompatibility(
    input: GetDevicePoolCompatibilityRequest,
  ): Effect.Effect<
    GetDevicePoolCompatibilityResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getInstanceProfile(
    input: GetInstanceProfileRequest,
  ): Effect.Effect<
    GetInstanceProfileResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getJob(
    input: GetJobRequest,
  ): Effect.Effect<
    GetJobResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getNetworkProfile(
    input: GetNetworkProfileRequest,
  ): Effect.Effect<
    GetNetworkProfileResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getOfferingStatus(
    input: GetOfferingStatusRequest,
  ): Effect.Effect<
    GetOfferingStatusResult,
    ArgumentException | LimitExceededException | NotEligibleException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getProject(
    input: GetProjectRequest,
  ): Effect.Effect<
    GetProjectResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getRemoteAccessSession(
    input: GetRemoteAccessSessionRequest,
  ): Effect.Effect<
    GetRemoteAccessSessionResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getRun(
    input: GetRunRequest,
  ): Effect.Effect<
    GetRunResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getSuite(
    input: GetSuiteRequest,
  ): Effect.Effect<
    GetSuiteResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getTest(
    input: GetTestRequest,
  ): Effect.Effect<
    GetTestResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getTestGridProject(
    input: GetTestGridProjectRequest,
  ): Effect.Effect<
    GetTestGridProjectResult,
    ArgumentException | InternalServiceException | NotFoundException | CommonAwsError
  >;
  getTestGridSession(
    input: GetTestGridSessionRequest,
  ): Effect.Effect<
    GetTestGridSessionResult,
    ArgumentException | InternalServiceException | NotFoundException | CommonAwsError
  >;
  getUpload(
    input: GetUploadRequest,
  ): Effect.Effect<
    GetUploadResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  getVPCEConfiguration(
    input: GetVPCEConfigurationRequest,
  ): Effect.Effect<
    GetVPCEConfigurationResult,
    ArgumentException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  installToRemoteAccessSession(
    input: InstallToRemoteAccessSessionRequest,
  ): Effect.Effect<
    InstallToRemoteAccessSessionResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listArtifacts(
    input: ListArtifactsRequest,
  ): Effect.Effect<
    ListArtifactsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listDeviceInstances(
    input: ListDeviceInstancesRequest,
  ): Effect.Effect<
    ListDeviceInstancesResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listDevicePools(
    input: ListDevicePoolsRequest,
  ): Effect.Effect<
    ListDevicePoolsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listDevices(
    input: ListDevicesRequest,
  ): Effect.Effect<
    ListDevicesResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listInstanceProfiles(
    input: ListInstanceProfilesRequest,
  ): Effect.Effect<
    ListInstanceProfilesResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    ListJobsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listNetworkProfiles(
    input: ListNetworkProfilesRequest,
  ): Effect.Effect<
    ListNetworkProfilesResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listOfferingPromotions(
    input: ListOfferingPromotionsRequest,
  ): Effect.Effect<
    ListOfferingPromotionsResult,
    ArgumentException | LimitExceededException | NotEligibleException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listOfferingTransactions(
    input: ListOfferingTransactionsRequest,
  ): Effect.Effect<
    ListOfferingTransactionsResult,
    ArgumentException | LimitExceededException | NotEligibleException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listOfferings(
    input: ListOfferingsRequest,
  ): Effect.Effect<
    ListOfferingsResult,
    ArgumentException | LimitExceededException | NotEligibleException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listProjects(
    input: ListProjectsRequest,
  ): Effect.Effect<
    ListProjectsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listRemoteAccessSessions(
    input: ListRemoteAccessSessionsRequest,
  ): Effect.Effect<
    ListRemoteAccessSessionsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listRuns(
    input: ListRunsRequest,
  ): Effect.Effect<
    ListRunsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listSamples(
    input: ListSamplesRequest,
  ): Effect.Effect<
    ListSamplesResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listSuites(
    input: ListSuitesRequest,
  ): Effect.Effect<
    ListSuitesResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    ArgumentException | NotFoundException | TagOperationException | CommonAwsError
  >;
  listTestGridProjects(
    input: ListTestGridProjectsRequest,
  ): Effect.Effect<
    ListTestGridProjectsResult,
    ArgumentException | InternalServiceException | CommonAwsError
  >;
  listTestGridSessionActions(
    input: ListTestGridSessionActionsRequest,
  ): Effect.Effect<
    ListTestGridSessionActionsResult,
    ArgumentException | InternalServiceException | NotFoundException | CommonAwsError
  >;
  listTestGridSessionArtifacts(
    input: ListTestGridSessionArtifactsRequest,
  ): Effect.Effect<
    ListTestGridSessionArtifactsResult,
    ArgumentException | InternalServiceException | NotFoundException | CommonAwsError
  >;
  listTestGridSessions(
    input: ListTestGridSessionsRequest,
  ): Effect.Effect<
    ListTestGridSessionsResult,
    ArgumentException | InternalServiceException | NotFoundException | CommonAwsError
  >;
  listTests(
    input: ListTestsRequest,
  ): Effect.Effect<
    ListTestsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listUniqueProblems(
    input: ListUniqueProblemsRequest,
  ): Effect.Effect<
    ListUniqueProblemsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listUploads(
    input: ListUploadsRequest,
  ): Effect.Effect<
    ListUploadsResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  listVPCEConfigurations(
    input: ListVPCEConfigurationsRequest,
  ): Effect.Effect<
    ListVPCEConfigurationsResult,
    ArgumentException | ServiceAccountException | CommonAwsError
  >;
  purchaseOffering(
    input: PurchaseOfferingRequest,
  ): Effect.Effect<
    PurchaseOfferingResult,
    ArgumentException | LimitExceededException | NotEligibleException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  renewOffering(
    input: RenewOfferingRequest,
  ): Effect.Effect<
    RenewOfferingResult,
    ArgumentException | LimitExceededException | NotEligibleException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  scheduleRun(
    input: ScheduleRunRequest,
  ): Effect.Effect<
    ScheduleRunResult,
    ArgumentException | IdempotencyException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  stopJob(
    input: StopJobRequest,
  ): Effect.Effect<
    StopJobResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  stopRemoteAccessSession(
    input: StopRemoteAccessSessionRequest,
  ): Effect.Effect<
    StopRemoteAccessSessionResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  stopRun(
    input: StopRunRequest,
  ): Effect.Effect<
    StopRunResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    ArgumentException | NotFoundException | TagOperationException | TagPolicyException | TooManyTagsException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    ArgumentException | NotFoundException | TagOperationException | CommonAwsError
  >;
  updateDeviceInstance(
    input: UpdateDeviceInstanceRequest,
  ): Effect.Effect<
    UpdateDeviceInstanceResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  updateDevicePool(
    input: UpdateDevicePoolRequest,
  ): Effect.Effect<
    UpdateDevicePoolResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  updateInstanceProfile(
    input: UpdateInstanceProfileRequest,
  ): Effect.Effect<
    UpdateInstanceProfileResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  updateNetworkProfile(
    input: UpdateNetworkProfileRequest,
  ): Effect.Effect<
    UpdateNetworkProfileResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  updateProject(
    input: UpdateProjectRequest,
  ): Effect.Effect<
    UpdateProjectResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  updateTestGridProject(
    input: UpdateTestGridProjectRequest,
  ): Effect.Effect<
    UpdateTestGridProjectResult,
    ArgumentException | InternalServiceException | LimitExceededException | NotFoundException | CommonAwsError
  >;
  updateUpload(
    input: UpdateUploadRequest,
  ): Effect.Effect<
    UpdateUploadResult,
    ArgumentException | LimitExceededException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
  updateVPCEConfiguration(
    input: UpdateVPCEConfigurationRequest,
  ): Effect.Effect<
    UpdateVPCEConfigurationResult,
    ArgumentException | InvalidOperationException | NotFoundException | ServiceAccountException | CommonAwsError
  >;
}

export type DeviceFarm = DeviceFarm_20150623;

export type AccountsCleanup = boolean;

export interface AccountSettings {
  awsAccountNumber?: string;
  unmeteredDevices?: Record<DevicePlatform, number>;
  unmeteredRemoteAccessDevices?: Record<DevicePlatform, number>;
  maxJobTimeoutMinutes?: number;
  trialMinutes?: TrialMinutes;
  maxSlots?: Record<string, number>;
  defaultJobTimeoutMinutes?: number;
  skipAppResign?: boolean;
}
export type AmazonResourceName = string;

export type AmazonResourceNames = Array<string>;
export type AndroidPaths = Array<string>;
export type AppPackagesCleanup = boolean;

export declare class ArgumentException extends Data.TaggedError(
  "ArgumentException",
)<{
  readonly message?: string;
}> {}
export interface Artifact {
  arn?: string;
  name?: string;
  type?: ArtifactType;
  extension?: string;
  url?: string;
}
export type ArtifactCategory = "SCREENSHOT" | "FILE" | "LOG";
export type Artifacts = Array<Artifact>;
export type ArtifactType = "UNKNOWN" | "SCREENSHOT" | "DEVICE_LOG" | "MESSAGE_LOG" | "VIDEO_LOG" | "RESULT_LOG" | "SERVICE_LOG" | "WEBKIT_LOG" | "INSTRUMENTATION_OUTPUT" | "EXERCISER_MONKEY_OUTPUT" | "CALABASH_JSON_OUTPUT" | "CALABASH_PRETTY_OUTPUT" | "CALABASH_STANDARD_OUTPUT" | "CALABASH_JAVA_XML_OUTPUT" | "AUTOMATION_OUTPUT" | "APPIUM_SERVER_OUTPUT" | "APPIUM_JAVA_OUTPUT" | "APPIUM_JAVA_XML_OUTPUT" | "APPIUM_PYTHON_OUTPUT" | "APPIUM_PYTHON_XML_OUTPUT" | "EXPLORER_EVENT_LOG" | "EXPLORER_SUMMARY_LOG" | "APPLICATION_CRASH_REPORT" | "XCTEST_LOG" | "VIDEO" | "CUSTOMER_ARTIFACT" | "CUSTOMER_ARTIFACT_LOG" | "TESTSPEC_OUTPUT";
export type AWSAccountNumber = string;

export type BillingMethod = "METERED" | "UNMETERED";
export declare class CannotDeleteException extends Data.TaggedError(
  "CannotDeleteException",
)<{
  readonly message?: string;
}> {}
export type ClientId = string;

export type ContentType = string;

export interface Counters {
  total?: number;
  passed?: number;
  failed?: number;
  warned?: number;
  errored?: number;
  stopped?: number;
  skipped?: number;
}
export interface CPU {
  frequency?: string;
  architecture?: string;
  clock?: number;
}
export interface CreateDevicePoolRequest {
  projectArn: string;
  name: string;
  description?: string;
  rules: Array<Rule>;
  maxDevices?: number;
}
export interface CreateDevicePoolResult {
  devicePool?: DevicePool;
}
export interface CreateInstanceProfileRequest {
  name: string;
  description?: string;
  packageCleanup?: boolean;
  excludeAppPackagesFromCleanup?: Array<string>;
  rebootAfterUse?: boolean;
}
export interface CreateInstanceProfileResult {
  instanceProfile?: InstanceProfile;
}
export interface CreateNetworkProfileRequest {
  projectArn: string;
  name: string;
  description?: string;
  type?: NetworkProfileType;
  uplinkBandwidthBits?: number;
  downlinkBandwidthBits?: number;
  uplinkDelayMs?: number;
  downlinkDelayMs?: number;
  uplinkJitterMs?: number;
  downlinkJitterMs?: number;
  uplinkLossPercent?: number;
  downlinkLossPercent?: number;
}
export interface CreateNetworkProfileResult {
  networkProfile?: NetworkProfile;
}
export interface CreateProjectRequest {
  name: string;
  defaultJobTimeoutMinutes?: number;
  vpcConfig?: VpcConfig;
}
export interface CreateProjectResult {
  project?: Project;
}
export interface CreateRemoteAccessSessionConfiguration {
  billingMethod?: BillingMethod;
  vpceConfigurationArns?: Array<string>;
  deviceProxy?: DeviceProxy;
}
export interface CreateRemoteAccessSessionRequest {
  projectArn: string;
  deviceArn: string;
  instanceArn?: string;
  sshPublicKey?: string;
  remoteDebugEnabled?: boolean;
  remoteRecordEnabled?: boolean;
  remoteRecordAppArn?: string;
  name?: string;
  clientId?: string;
  configuration?: CreateRemoteAccessSessionConfiguration;
  interactionMode?: InteractionMode;
  skipAppResign?: boolean;
}
export interface CreateRemoteAccessSessionResult {
  remoteAccessSession?: RemoteAccessSession;
}
export interface CreateTestGridProjectRequest {
  name: string;
  description?: string;
  vpcConfig?: TestGridVpcConfig;
}
export interface CreateTestGridProjectResult {
  testGridProject?: TestGridProject;
}
export interface CreateTestGridUrlRequest {
  projectArn: string;
  expiresInSeconds: number;
}
export interface CreateTestGridUrlResult {
  url?: string;
  expires?: Date | string;
}
export interface CreateUploadRequest {
  projectArn: string;
  name: string;
  type: UploadType;
  contentType?: string;
}
export interface CreateUploadResult {
  upload?: Upload;
}
export interface CreateVPCEConfigurationRequest {
  vpceConfigurationName: string;
  vpceServiceName: string;
  serviceDnsName: string;
  vpceConfigurationDescription?: string;
}
export interface CreateVPCEConfigurationResult {
  vpceConfiguration?: VPCEConfiguration;
}
export type CurrencyCode = "USD";
export interface CustomerArtifactPaths {
  iosPaths?: Array<string>;
  androidPaths?: Array<string>;
  deviceHostPaths?: Array<string>;
}
export type DateTime = Date | string;

export interface DeleteDevicePoolRequest {
  arn: string;
}
export interface DeleteDevicePoolResult {
}
export interface DeleteInstanceProfileRequest {
  arn: string;
}
export interface DeleteInstanceProfileResult {
}
export interface DeleteNetworkProfileRequest {
  arn: string;
}
export interface DeleteNetworkProfileResult {
}
export interface DeleteProjectRequest {
  arn: string;
}
export interface DeleteProjectResult {
}
export interface DeleteRemoteAccessSessionRequest {
  arn: string;
}
export interface DeleteRemoteAccessSessionResult {
}
export interface DeleteRunRequest {
  arn: string;
}
export interface DeleteRunResult {
}
export interface DeleteTestGridProjectRequest {
  projectArn: string;
}
export interface DeleteTestGridProjectResult {
}
export interface DeleteUploadRequest {
  arn: string;
}
export interface DeleteUploadResult {
}
export interface DeleteVPCEConfigurationRequest {
  arn: string;
}
export interface DeleteVPCEConfigurationResult {
}
export interface Device {
  arn?: string;
  name?: string;
  manufacturer?: string;
  model?: string;
  modelId?: string;
  formFactor?: DeviceFormFactor;
  platform?: DevicePlatform;
  os?: string;
  cpu?: CPU;
  resolution?: Resolution;
  heapSize?: number;
  memory?: number;
  image?: string;
  carrier?: string;
  radio?: string;
  remoteAccessEnabled?: boolean;
  remoteDebugEnabled?: boolean;
  fleetType?: string;
  fleetName?: string;
  instances?: Array<DeviceInstance>;
  availability?: DeviceAvailability;
}
export type DeviceAttribute = "ARN" | "PLATFORM" | "FORM_FACTOR" | "MANUFACTURER" | "REMOTE_ACCESS_ENABLED" | "REMOTE_DEBUG_ENABLED" | "APPIUM_VERSION" | "INSTANCE_ARN" | "INSTANCE_LABELS" | "FLEET_TYPE" | "OS_VERSION" | "MODEL" | "AVAILABILITY";
export type DeviceAvailability = "TEMPORARY_NOT_AVAILABLE" | "BUSY" | "AVAILABLE" | "HIGHLY_AVAILABLE";
export type DeviceFarmArn = string;

export interface DeviceFilter {
  attribute: DeviceFilterAttribute;
  operator: RuleOperator;
  values: Array<string>;
}
export type DeviceFilterAttribute = "ARN" | "PLATFORM" | "OS_VERSION" | "MODEL" | "AVAILABILITY" | "FORM_FACTOR" | "MANUFACTURER" | "REMOTE_ACCESS_ENABLED" | "REMOTE_DEBUG_ENABLED" | "INSTANCE_ARN" | "INSTANCE_LABELS" | "FLEET_TYPE";
export type DeviceFilters = Array<DeviceFilter>;
export type DeviceFilterValues = Array<string>;
export type DeviceFormFactor = "PHONE" | "TABLET";
export type DeviceHostPaths = Array<string>;
export interface DeviceInstance {
  arn?: string;
  deviceArn?: string;
  labels?: Array<string>;
  status?: InstanceStatus;
  udid?: string;
  instanceProfile?: InstanceProfile;
}
export type DeviceInstances = Array<DeviceInstance>;
export interface DeviceMinutes {
  total?: number;
  metered?: number;
  unmetered?: number;
}
export type DevicePlatform = "ANDROID" | "IOS";
export interface DevicePool {
  arn?: string;
  name?: string;
  description?: string;
  type?: DevicePoolType;
  rules?: Array<Rule>;
  maxDevices?: number;
}
export interface DevicePoolCompatibilityResult {
  device?: Device;
  compatible?: boolean;
  incompatibilityMessages?: Array<IncompatibilityMessage>;
}
export type DevicePoolCompatibilityResults = Array<DevicePoolCompatibilityResult>;
export type DevicePools = Array<DevicePool>;
export type DevicePoolType = "CURATED" | "PRIVATE";
export interface DeviceProxy {
  host: string;
  port: number;
}
export type DeviceProxyHost = string;

export type DeviceProxyPort = number;

export type Devices = Array<Device>;
export interface DeviceSelectionConfiguration {
  filters: Array<DeviceFilter>;
  maxDevices: number;
}
export interface DeviceSelectionResult {
  filters?: Array<DeviceFilter>;
  matchedDevicesCount?: number;
  maxDevices?: number;
}
export type Double = number;

export type ExceptionMessage = string;

export interface ExecutionConfiguration {
  jobTimeoutMinutes?: number;
  accountsCleanup?: boolean;
  appPackagesCleanup?: boolean;
  videoCapture?: boolean;
  skipAppResign?: boolean;
}
export type ExecutionResult = "PENDING" | "PASSED" | "WARNED" | "FAILED" | "SKIPPED" | "ERRORED" | "STOPPED";
export type ExecutionResultCode = "PARSING_FAILED" | "VPC_ENDPOINT_SETUP_FAILED";
export type ExecutionStatus = "PENDING" | "PENDING_CONCURRNECY" | "PENDING_DEVICE" | "PROCESSING" | "SCHEDULING" | "PREPARING" | "RUNNING" | "COMPLETED" | "STOPPING";
export type Filter = string;

export interface GetAccountSettingsRequest {
}
export interface GetAccountSettingsResult {
  accountSettings?: AccountSettings;
}
export interface GetDeviceInstanceRequest {
  arn: string;
}
export interface GetDeviceInstanceResult {
  deviceInstance?: DeviceInstance;
}
export interface GetDevicePoolCompatibilityRequest {
  devicePoolArn: string;
  appArn?: string;
  testType?: TestType;
  test?: ScheduleRunTest;
  configuration?: ScheduleRunConfiguration;
  projectArn?: string;
}
export interface GetDevicePoolCompatibilityResult {
  compatibleDevices?: Array<DevicePoolCompatibilityResult>;
  incompatibleDevices?: Array<DevicePoolCompatibilityResult>;
}
export interface GetDevicePoolRequest {
  arn: string;
}
export interface GetDevicePoolResult {
  devicePool?: DevicePool;
}
export interface GetDeviceRequest {
  arn: string;
}
export interface GetDeviceResult {
  device?: Device;
}
export interface GetInstanceProfileRequest {
  arn: string;
}
export interface GetInstanceProfileResult {
  instanceProfile?: InstanceProfile;
}
export interface GetJobRequest {
  arn: string;
}
export interface GetJobResult {
  job?: Job;
}
export interface GetNetworkProfileRequest {
  arn: string;
}
export interface GetNetworkProfileResult {
  networkProfile?: NetworkProfile;
}
export interface GetOfferingStatusRequest {
  nextToken?: string;
}
export interface GetOfferingStatusResult {
  current?: Record<string, OfferingStatus>;
  nextPeriod?: Record<string, OfferingStatus>;
  nextToken?: string;
}
export interface GetProjectRequest {
  arn: string;
}
export interface GetProjectResult {
  project?: Project;
}
export interface GetRemoteAccessSessionRequest {
  arn: string;
}
export interface GetRemoteAccessSessionResult {
  remoteAccessSession?: RemoteAccessSession;
}
export interface GetRunRequest {
  arn: string;
}
export interface GetRunResult {
  run?: Run;
}
export interface GetSuiteRequest {
  arn: string;
}
export interface GetSuiteResult {
  suite?: Suite;
}
export interface GetTestGridProjectRequest {
  projectArn: string;
}
export interface GetTestGridProjectResult {
  testGridProject?: TestGridProject;
}
export interface GetTestGridSessionRequest {
  projectArn?: string;
  sessionId?: string;
  sessionArn?: string;
}
export interface GetTestGridSessionResult {
  testGridSession?: TestGridSession;
}
export interface GetTestRequest {
  arn: string;
}
export interface GetTestResult {
  test?: Test;
}
export interface GetUploadRequest {
  arn: string;
}
export interface GetUploadResult {
  upload?: Upload;
}
export interface GetVPCEConfigurationRequest {
  arn: string;
}
export interface GetVPCEConfigurationResult {
  vpceConfiguration?: VPCEConfiguration;
}
export type HostAddress = string;

export declare class IdempotencyException extends Data.TaggedError(
  "IdempotencyException",
)<{
  readonly message?: string;
}> {}
export interface IncompatibilityMessage {
  message?: string;
  type?: DeviceAttribute;
}
export type IncompatibilityMessages = Array<IncompatibilityMessage>;
export interface InstallToRemoteAccessSessionRequest {
  remoteAccessSessionArn: string;
  appArn: string;
}
export interface InstallToRemoteAccessSessionResult {
  appUpload?: Upload;
}
export type InstanceLabels = Array<string>;
export interface InstanceProfile {
  arn?: string;
  packageCleanup?: boolean;
  excludeAppPackagesFromCleanup?: Array<string>;
  rebootAfterUse?: boolean;
  name?: string;
  description?: string;
}
export type InstanceProfiles = Array<InstanceProfile>;
export type InstanceStatus = "IN_USE" | "PREPARING" | "AVAILABLE" | "NOT_AVAILABLE";
export type Integer = number;

export type InteractionMode = "INTERACTIVE" | "NO_VIDEO" | "VIDEO_ONLY";
export declare class InternalServiceException extends Data.TaggedError(
  "InternalServiceException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidOperationException extends Data.TaggedError(
  "InvalidOperationException",
)<{
  readonly message?: string;
}> {}
export type IosPaths = Array<string>;
export interface Job {
  arn?: string;
  name?: string;
  type?: TestType;
  created?: Date | string;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  started?: Date | string;
  stopped?: Date | string;
  counters?: Counters;
  message?: string;
  device?: Device;
  instanceArn?: string;
  deviceMinutes?: DeviceMinutes;
  videoEndpoint?: string;
  videoCapture?: boolean;
}
export type Jobs = Array<Job>;
export type JobTimeoutMinutes = number;

export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListArtifactsRequest {
  arn: string;
  type: ArtifactCategory;
  nextToken?: string;
}
export interface ListArtifactsResult {
  artifacts?: Array<Artifact>;
  nextToken?: string;
}
export interface ListDeviceInstancesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListDeviceInstancesResult {
  deviceInstances?: Array<DeviceInstance>;
  nextToken?: string;
}
export interface ListDevicePoolsRequest {
  arn: string;
  type?: DevicePoolType;
  nextToken?: string;
}
export interface ListDevicePoolsResult {
  devicePools?: Array<DevicePool>;
  nextToken?: string;
}
export interface ListDevicesRequest {
  arn?: string;
  nextToken?: string;
  filters?: Array<DeviceFilter>;
}
export interface ListDevicesResult {
  devices?: Array<Device>;
  nextToken?: string;
}
export interface ListInstanceProfilesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListInstanceProfilesResult {
  instanceProfiles?: Array<InstanceProfile>;
  nextToken?: string;
}
export interface ListJobsRequest {
  arn: string;
  nextToken?: string;
}
export interface ListJobsResult {
  jobs?: Array<Job>;
  nextToken?: string;
}
export interface ListNetworkProfilesRequest {
  arn: string;
  type?: NetworkProfileType;
  nextToken?: string;
}
export interface ListNetworkProfilesResult {
  networkProfiles?: Array<NetworkProfile>;
  nextToken?: string;
}
export interface ListOfferingPromotionsRequest {
  nextToken?: string;
}
export interface ListOfferingPromotionsResult {
  offeringPromotions?: Array<OfferingPromotion>;
  nextToken?: string;
}
export interface ListOfferingsRequest {
  nextToken?: string;
}
export interface ListOfferingsResult {
  offerings?: Array<Offering>;
  nextToken?: string;
}
export interface ListOfferingTransactionsRequest {
  nextToken?: string;
}
export interface ListOfferingTransactionsResult {
  offeringTransactions?: Array<OfferingTransaction>;
  nextToken?: string;
}
export interface ListProjectsRequest {
  arn?: string;
  nextToken?: string;
}
export interface ListProjectsResult {
  projects?: Array<Project>;
  nextToken?: string;
}
export interface ListRemoteAccessSessionsRequest {
  arn: string;
  nextToken?: string;
}
export interface ListRemoteAccessSessionsResult {
  remoteAccessSessions?: Array<RemoteAccessSession>;
  nextToken?: string;
}
export interface ListRunsRequest {
  arn: string;
  nextToken?: string;
}
export interface ListRunsResult {
  runs?: Array<Run>;
  nextToken?: string;
}
export interface ListSamplesRequest {
  arn: string;
  nextToken?: string;
}
export interface ListSamplesResult {
  samples?: Array<Sample>;
  nextToken?: string;
}
export interface ListSuitesRequest {
  arn: string;
  nextToken?: string;
}
export interface ListSuitesResult {
  suites?: Array<Suite>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
}
export interface ListTestGridProjectsRequest {
  maxResult?: number;
  nextToken?: string;
}
export interface ListTestGridProjectsResult {
  testGridProjects?: Array<TestGridProject>;
  nextToken?: string;
}
export interface ListTestGridSessionActionsRequest {
  sessionArn: string;
  maxResult?: number;
  nextToken?: string;
}
export interface ListTestGridSessionActionsResult {
  actions?: Array<TestGridSessionAction>;
  nextToken?: string;
}
export interface ListTestGridSessionArtifactsRequest {
  sessionArn: string;
  type?: TestGridSessionArtifactCategory;
  maxResult?: number;
  nextToken?: string;
}
export interface ListTestGridSessionArtifactsResult {
  artifacts?: Array<TestGridSessionArtifact>;
  nextToken?: string;
}
export interface ListTestGridSessionsRequest {
  projectArn: string;
  status?: TestGridSessionStatus;
  creationTimeAfter?: Date | string;
  creationTimeBefore?: Date | string;
  endTimeAfter?: Date | string;
  endTimeBefore?: Date | string;
  maxResult?: number;
  nextToken?: string;
}
export interface ListTestGridSessionsResult {
  testGridSessions?: Array<TestGridSession>;
  nextToken?: string;
}
export interface ListTestsRequest {
  arn: string;
  nextToken?: string;
}
export interface ListTestsResult {
  tests?: Array<Test>;
  nextToken?: string;
}
export interface ListUniqueProblemsRequest {
  arn: string;
  nextToken?: string;
}
export interface ListUniqueProblemsResult {
  uniqueProblems?: Record<ExecutionResult, Array<UniqueProblem>>;
  nextToken?: string;
}
export interface ListUploadsRequest {
  arn: string;
  type?: UploadType;
  nextToken?: string;
}
export interface ListUploadsResult {
  uploads?: Array<Upload>;
  nextToken?: string;
}
export interface ListVPCEConfigurationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListVPCEConfigurationsResult {
  vpceConfigurations?: Array<VPCEConfiguration>;
  nextToken?: string;
}
export interface Location {
  latitude: number;
  longitude: number;
}
export type Long = number;

export type MaxPageSize = number;

export type MaxSlotMap = Record<string, number>;
export type Message = string;

export type Metadata = string;

export interface MonetaryAmount {
  amount?: number;
  currencyCode?: CurrencyCode;
}
export type Name = string;

export interface NetworkProfile {
  arn?: string;
  name?: string;
  description?: string;
  type?: NetworkProfileType;
  uplinkBandwidthBits?: number;
  downlinkBandwidthBits?: number;
  uplinkDelayMs?: number;
  downlinkDelayMs?: number;
  uplinkJitterMs?: number;
  downlinkJitterMs?: number;
  uplinkLossPercent?: number;
  downlinkLossPercent?: number;
}
export type NetworkProfiles = Array<NetworkProfile>;
export type NetworkProfileType = "CURATED" | "PRIVATE";
export type NonEmptyString = string;

export declare class NotEligibleException extends Data.TaggedError(
  "NotEligibleException",
)<{
  readonly message?: string;
}> {}
export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly message?: string;
}> {}
export interface Offering {
  id?: string;
  description?: string;
  type?: OfferingType;
  platform?: DevicePlatform;
  recurringCharges?: Array<RecurringCharge>;
}
export type OfferingIdentifier = string;

export interface OfferingPromotion {
  id?: string;
  description?: string;
}
export type OfferingPromotionIdentifier = string;

export type OfferingPromotions = Array<OfferingPromotion>;
export type Offerings = Array<Offering>;
export interface OfferingStatus {
  type?: OfferingTransactionType;
  offering?: Offering;
  quantity?: number;
  effectiveOn?: Date | string;
}
export type OfferingStatusMap = Record<string, OfferingStatus>;
export interface OfferingTransaction {
  offeringStatus?: OfferingStatus;
  transactionId?: string;
  offeringPromotionId?: string;
  createdOn?: Date | string;
  cost?: MonetaryAmount;
}
export type OfferingTransactions = Array<OfferingTransaction>;
export type OfferingTransactionType = "PURCHASE" | "RENEW" | "SYSTEM";
export type OfferingType = "RECURRING";
export type PackageIds = Array<string>;
export type PaginationToken = string;

export type PercentInteger = number;

export interface Problem {
  run?: ProblemDetail;
  job?: ProblemDetail;
  suite?: ProblemDetail;
  test?: ProblemDetail;
  device?: Device;
  result?: ExecutionResult;
  message?: string;
}
export interface ProblemDetail {
  arn?: string;
  name?: string;
}
export type Problems = Array<Problem>;
export interface Project {
  arn?: string;
  name?: string;
  defaultJobTimeoutMinutes?: number;
  created?: Date | string;
  vpcConfig?: VpcConfig;
}
export type Projects = Array<Project>;
export type PurchasedDevicesMap = Record<DevicePlatform, number>;
export interface PurchaseOfferingRequest {
  offeringId: string;
  quantity: number;
  offeringPromotionId?: string;
}
export interface PurchaseOfferingResult {
  offeringTransaction?: OfferingTransaction;
}
export interface Radios {
  wifi?: boolean;
  bluetooth?: boolean;
  nfc?: boolean;
  gps?: boolean;
}
export interface RecurringCharge {
  cost?: MonetaryAmount;
  frequency?: RecurringChargeFrequency;
}
export type RecurringChargeFrequency = "MONTHLY";
export type RecurringCharges = Array<RecurringCharge>;
export interface RemoteAccessSession {
  arn?: string;
  name?: string;
  created?: Date | string;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  message?: string;
  started?: Date | string;
  stopped?: Date | string;
  device?: Device;
  instanceArn?: string;
  remoteDebugEnabled?: boolean;
  remoteRecordEnabled?: boolean;
  remoteRecordAppArn?: string;
  hostAddress?: string;
  clientId?: string;
  billingMethod?: BillingMethod;
  deviceMinutes?: DeviceMinutes;
  endpoint?: string;
  deviceUdid?: string;
  interactionMode?: InteractionMode;
  skipAppResign?: boolean;
  vpcConfig?: VpcConfig;
  deviceProxy?: DeviceProxy;
}
export type RemoteAccessSessions = Array<RemoteAccessSession>;
export interface RenewOfferingRequest {
  offeringId: string;
  quantity: number;
}
export interface RenewOfferingResult {
  offeringTransaction?: OfferingTransaction;
}
export interface Resolution {
  width?: number;
  height?: number;
}
export type ResourceDescription = string;

export type ResourceId = string;

export type ResourceName = string;

export interface Rule {
  attribute?: DeviceAttribute;
  operator?: RuleOperator;
  value?: string;
}
export type RuleOperator = "EQUALS" | "LESS_THAN" | "LESS_THAN_OR_EQUALS" | "GREATER_THAN" | "GREATER_THAN_OR_EQUALS" | "IN" | "NOT_IN" | "CONTAINS";
export type Rules = Array<Rule>;
export interface Run {
  arn?: string;
  name?: string;
  type?: TestType;
  platform?: DevicePlatform;
  created?: Date | string;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  started?: Date | string;
  stopped?: Date | string;
  counters?: Counters;
  message?: string;
  totalJobs?: number;
  completedJobs?: number;
  billingMethod?: BillingMethod;
  deviceMinutes?: DeviceMinutes;
  networkProfile?: NetworkProfile;
  deviceProxy?: DeviceProxy;
  parsingResultUrl?: string;
  resultCode?: ExecutionResultCode;
  seed?: number;
  appUpload?: string;
  eventCount?: number;
  jobTimeoutMinutes?: number;
  devicePoolArn?: string;
  locale?: string;
  radios?: Radios;
  location?: Location;
  customerArtifactPaths?: CustomerArtifactPaths;
  webUrl?: string;
  skipAppResign?: boolean;
  testSpecArn?: string;
  deviceSelectionResult?: DeviceSelectionResult;
  vpcConfig?: VpcConfig;
}
export type Runs = Array<Run>;
export interface Sample {
  arn?: string;
  type?: SampleType;
  url?: string;
}
export type Samples = Array<Sample>;
export type SampleType = "CPU" | "MEMORY" | "THREADS" | "RX_RATE" | "TX_RATE" | "RX" | "TX" | "NATIVE_FRAMES" | "NATIVE_FPS" | "NATIVE_MIN_DRAWTIME" | "NATIVE_AVG_DRAWTIME" | "NATIVE_MAX_DRAWTIME" | "OPENGL_FRAMES" | "OPENGL_FPS" | "OPENGL_MIN_DRAWTIME" | "OPENGL_AVG_DRAWTIME" | "OPENGL_MAX_DRAWTIME";
export interface ScheduleRunConfiguration {
  extraDataPackageArn?: string;
  networkProfileArn?: string;
  locale?: string;
  location?: Location;
  vpceConfigurationArns?: Array<string>;
  deviceProxy?: DeviceProxy;
  customerArtifactPaths?: CustomerArtifactPaths;
  radios?: Radios;
  auxiliaryApps?: Array<string>;
  billingMethod?: BillingMethod;
}
export interface ScheduleRunRequest {
  projectArn: string;
  appArn?: string;
  devicePoolArn?: string;
  deviceSelectionConfiguration?: DeviceSelectionConfiguration;
  name?: string;
  test: ScheduleRunTest;
  configuration?: ScheduleRunConfiguration;
  executionConfiguration?: ExecutionConfiguration;
}
export interface ScheduleRunResult {
  run?: Run;
}
export interface ScheduleRunTest {
  type: TestType;
  testPackageArn?: string;
  testSpecArn?: string;
  filter?: string;
  parameters?: Record<string, string>;
}
export type SecurityGroupId = string;

export type SecurityGroupIds = Array<string>;
export type SensitiveString = string;

export type SensitiveURL = string;

export declare class ServiceAccountException extends Data.TaggedError(
  "ServiceAccountException",
)<{
  readonly message?: string;
}> {}
export type ServiceDnsName = string;

export type SkipAppResign = boolean;

export type SshPublicKey = string;

export interface StopJobRequest {
  arn: string;
}
export interface StopJobResult {
  job?: Job;
}
export interface StopRemoteAccessSessionRequest {
  arn: string;
}
export interface StopRemoteAccessSessionResult {
  remoteAccessSession?: RemoteAccessSession;
}
export interface StopRunRequest {
  arn: string;
}
export interface StopRunResult {
  run?: Run;
}
export type SubnetId = string;

export type SubnetIds = Array<string>;
export interface Suite {
  arn?: string;
  name?: string;
  type?: TestType;
  created?: Date | string;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  started?: Date | string;
  stopped?: Date | string;
  counters?: Counters;
  message?: string;
  deviceMinutes?: DeviceMinutes;
}
export type Suites = Array<Suite>;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export declare class TagOperationException extends Data.TaggedError(
  "TagOperationException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export declare class TagPolicyException extends Data.TaggedError(
  "TagPolicyException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export interface Test {
  arn?: string;
  name?: string;
  type?: TestType;
  created?: Date | string;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  started?: Date | string;
  stopped?: Date | string;
  counters?: Counters;
  message?: string;
  deviceMinutes?: DeviceMinutes;
}
export interface TestGridProject {
  arn?: string;
  name?: string;
  description?: string;
  vpcConfig?: TestGridVpcConfig;
  created?: Date | string;
}
export type TestGridProjects = Array<TestGridProject>;
export interface TestGridSession {
  arn?: string;
  status?: TestGridSessionStatus;
  created?: Date | string;
  ended?: Date | string;
  billingMinutes?: number;
  seleniumProperties?: string;
}
export interface TestGridSessionAction {
  action?: string;
  started?: Date | string;
  duration?: number;
  statusCode?: string;
  requestMethod?: string;
}
export type TestGridSessionActions = Array<TestGridSessionAction>;
export interface TestGridSessionArtifact {
  filename?: string;
  type?: TestGridSessionArtifactType;
  url?: string;
}
export type TestGridSessionArtifactCategory = "VIDEO" | "LOG";
export type TestGridSessionArtifacts = Array<TestGridSessionArtifact>;
export type TestGridSessionArtifactType = "UNKNOWN" | "VIDEO" | "SELENIUM_LOG";
export type TestGridSessions = Array<TestGridSession>;
export type TestGridSessionStatus = "ACTIVE" | "CLOSED" | "ERRORED";
export type TestGridUrlExpiresInSecondsInput = number;

export interface TestGridVpcConfig {
  securityGroupIds: Array<string>;
  subnetIds: Array<string>;
  vpcId: string;
}
export type TestParameters = Record<string, string>;
export type Tests = Array<Test>;
export type TestType = "BUILTIN_FUZZ" | "APPIUM_JAVA_JUNIT" | "APPIUM_JAVA_TESTNG" | "APPIUM_PYTHON" | "APPIUM_NODE" | "APPIUM_RUBY" | "APPIUM_WEB_JAVA_JUNIT" | "APPIUM_WEB_JAVA_TESTNG" | "APPIUM_WEB_PYTHON" | "APPIUM_WEB_NODE" | "APPIUM_WEB_RUBY" | "INSTRUMENTATION" | "XCTEST" | "XCTEST_UI";
export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export type TransactionIdentifier = string;

export interface TrialMinutes {
  total?: number;
  remaining?: number;
}
export interface UniqueProblem {
  message?: string;
  problems?: Array<Problem>;
}
export type UniqueProblems = Array<UniqueProblem>;
export type UniqueProblemsByExecutionResultMap = Record<ExecutionResult, Array<UniqueProblem>>;
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateDeviceInstanceRequest {
  arn: string;
  profileArn?: string;
  labels?: Array<string>;
}
export interface UpdateDeviceInstanceResult {
  deviceInstance?: DeviceInstance;
}
export interface UpdateDevicePoolRequest {
  arn: string;
  name?: string;
  description?: string;
  rules?: Array<Rule>;
  maxDevices?: number;
  clearMaxDevices?: boolean;
}
export interface UpdateDevicePoolResult {
  devicePool?: DevicePool;
}
export interface UpdateInstanceProfileRequest {
  arn: string;
  name?: string;
  description?: string;
  packageCleanup?: boolean;
  excludeAppPackagesFromCleanup?: Array<string>;
  rebootAfterUse?: boolean;
}
export interface UpdateInstanceProfileResult {
  instanceProfile?: InstanceProfile;
}
export interface UpdateNetworkProfileRequest {
  arn: string;
  name?: string;
  description?: string;
  type?: NetworkProfileType;
  uplinkBandwidthBits?: number;
  downlinkBandwidthBits?: number;
  uplinkDelayMs?: number;
  downlinkDelayMs?: number;
  uplinkJitterMs?: number;
  downlinkJitterMs?: number;
  uplinkLossPercent?: number;
  downlinkLossPercent?: number;
}
export interface UpdateNetworkProfileResult {
  networkProfile?: NetworkProfile;
}
export interface UpdateProjectRequest {
  arn: string;
  name?: string;
  defaultJobTimeoutMinutes?: number;
  vpcConfig?: VpcConfig;
}
export interface UpdateProjectResult {
  project?: Project;
}
export interface UpdateTestGridProjectRequest {
  projectArn: string;
  name?: string;
  description?: string;
  vpcConfig?: TestGridVpcConfig;
}
export interface UpdateTestGridProjectResult {
  testGridProject?: TestGridProject;
}
export interface UpdateUploadRequest {
  arn: string;
  name?: string;
  contentType?: string;
  editContent?: boolean;
}
export interface UpdateUploadResult {
  upload?: Upload;
}
export interface UpdateVPCEConfigurationRequest {
  arn: string;
  vpceConfigurationName?: string;
  vpceServiceName?: string;
  serviceDnsName?: string;
  vpceConfigurationDescription?: string;
}
export interface UpdateVPCEConfigurationResult {
  vpceConfiguration?: VPCEConfiguration;
}
export interface Upload {
  arn?: string;
  name?: string;
  created?: Date | string;
  type?: UploadType;
  status?: UploadStatus;
  url?: string;
  metadata?: string;
  contentType?: string;
  message?: string;
  category?: UploadCategory;
}
export type UploadCategory = "CURATED" | "PRIVATE";
export type Uploads = Array<Upload>;
export type UploadStatus = "INITIALIZED" | "PROCESSING" | "SUCCEEDED" | "FAILED";
export type UploadType = "ANDROID_APP" | "IOS_APP" | "WEB_APP" | "EXTERNAL_DATA" | "APPIUM_JAVA_JUNIT_TEST_PACKAGE" | "APPIUM_JAVA_TESTNG_TEST_PACKAGE" | "APPIUM_PYTHON_TEST_PACKAGE" | "APPIUM_NODE_TEST_PACKAGE" | "APPIUM_RUBY_TEST_PACKAGE" | "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE" | "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE" | "APPIUM_WEB_PYTHON_TEST_PACKAGE" | "APPIUM_WEB_NODE_TEST_PACKAGE" | "APPIUM_WEB_RUBY_TEST_PACKAGE" | "CALABASH_TEST_PACKAGE" | "INSTRUMENTATION_TEST_PACKAGE" | "UIAUTOMATION_TEST_PACKAGE" | "UIAUTOMATOR_TEST_PACKAGE" | "XCTEST_TEST_PACKAGE" | "XCTEST_UI_TEST_PACKAGE" | "APPIUM_JAVA_JUNIT_TEST_SPEC" | "APPIUM_JAVA_TESTNG_TEST_SPEC" | "APPIUM_PYTHON_TEST_SPEC" | "APPIUM_NODE_TEST_SPEC" | "APPIUM_RUBY_TEST_SPEC" | "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC" | "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC" | "APPIUM_WEB_PYTHON_TEST_SPEC" | "APPIUM_WEB_NODE_TEST_SPEC" | "APPIUM_WEB_RUBY_TEST_SPEC" | "INSTRUMENTATION_TEST_SPEC" | "XCTEST_UI_TEST_SPEC";
export type URL = string;

export type VideoCapture = boolean;

export interface VpcConfig {
  securityGroupIds: Array<string>;
  subnetIds: Array<string>;
  vpcId: string;
}
export interface VPCEConfiguration {
  arn?: string;
  vpceConfigurationName?: string;
  vpceServiceName?: string;
  serviceDnsName?: string;
  vpceConfigurationDescription?: string;
}
export type VPCEConfigurationDescription = string;

export type VPCEConfigurationName = string;

export type VPCEConfigurations = Array<VPCEConfiguration>;
export type VPCEServiceName = string;

export type VpcSecurityGroupIds = Array<string>;
export type VpcSubnetIds = Array<string>;
export declare namespace CreateDevicePool {
  export type Input = CreateDevicePoolRequest;
  export type Output = CreateDevicePoolResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace CreateInstanceProfile {
  export type Input = CreateInstanceProfileRequest;
  export type Output = CreateInstanceProfileResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace CreateNetworkProfile {
  export type Input = CreateNetworkProfileRequest;
  export type Output = CreateNetworkProfileResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace CreateProject {
  export type Input = CreateProjectRequest;
  export type Output = CreateProjectResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | TagOperationException
    | CommonAwsError;
}

export declare namespace CreateRemoteAccessSession {
  export type Input = CreateRemoteAccessSessionRequest;
  export type Output = CreateRemoteAccessSessionResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace CreateTestGridProject {
  export type Input = CreateTestGridProjectRequest;
  export type Output = CreateTestGridProjectResult;
  export type Error =
    | ArgumentException
    | InternalServiceException
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace CreateTestGridUrl {
  export type Input = CreateTestGridUrlRequest;
  export type Output = CreateTestGridUrlResult;
  export type Error =
    | ArgumentException
    | InternalServiceException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace CreateUpload {
  export type Input = CreateUploadRequest;
  export type Output = CreateUploadResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace CreateVPCEConfiguration {
  export type Input = CreateVPCEConfigurationRequest;
  export type Output = CreateVPCEConfigurationResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace DeleteDevicePool {
  export type Input = DeleteDevicePoolRequest;
  export type Output = DeleteDevicePoolResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace DeleteInstanceProfile {
  export type Input = DeleteInstanceProfileRequest;
  export type Output = DeleteInstanceProfileResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace DeleteNetworkProfile {
  export type Input = DeleteNetworkProfileRequest;
  export type Output = DeleteNetworkProfileResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace DeleteProject {
  export type Input = DeleteProjectRequest;
  export type Output = DeleteProjectResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace DeleteRemoteAccessSession {
  export type Input = DeleteRemoteAccessSessionRequest;
  export type Output = DeleteRemoteAccessSessionResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace DeleteRun {
  export type Input = DeleteRunRequest;
  export type Output = DeleteRunResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace DeleteTestGridProject {
  export type Input = DeleteTestGridProjectRequest;
  export type Output = DeleteTestGridProjectResult;
  export type Error =
    | ArgumentException
    | CannotDeleteException
    | InternalServiceException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteUpload {
  export type Input = DeleteUploadRequest;
  export type Output = DeleteUploadResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace DeleteVPCEConfiguration {
  export type Input = DeleteVPCEConfigurationRequest;
  export type Output = DeleteVPCEConfigurationResult;
  export type Error =
    | ArgumentException
    | InvalidOperationException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetAccountSettings {
  export type Input = GetAccountSettingsRequest;
  export type Output = GetAccountSettingsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetDevice {
  export type Input = GetDeviceRequest;
  export type Output = GetDeviceResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetDeviceInstance {
  export type Input = GetDeviceInstanceRequest;
  export type Output = GetDeviceInstanceResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetDevicePool {
  export type Input = GetDevicePoolRequest;
  export type Output = GetDevicePoolResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetDevicePoolCompatibility {
  export type Input = GetDevicePoolCompatibilityRequest;
  export type Output = GetDevicePoolCompatibilityResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetInstanceProfile {
  export type Input = GetInstanceProfileRequest;
  export type Output = GetInstanceProfileResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetJob {
  export type Input = GetJobRequest;
  export type Output = GetJobResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetNetworkProfile {
  export type Input = GetNetworkProfileRequest;
  export type Output = GetNetworkProfileResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetOfferingStatus {
  export type Input = GetOfferingStatusRequest;
  export type Output = GetOfferingStatusResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotEligibleException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetProject {
  export type Input = GetProjectRequest;
  export type Output = GetProjectResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetRemoteAccessSession {
  export type Input = GetRemoteAccessSessionRequest;
  export type Output = GetRemoteAccessSessionResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetRun {
  export type Input = GetRunRequest;
  export type Output = GetRunResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetSuite {
  export type Input = GetSuiteRequest;
  export type Output = GetSuiteResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetTest {
  export type Input = GetTestRequest;
  export type Output = GetTestResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetTestGridProject {
  export type Input = GetTestGridProjectRequest;
  export type Output = GetTestGridProjectResult;
  export type Error =
    | ArgumentException
    | InternalServiceException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetTestGridSession {
  export type Input = GetTestGridSessionRequest;
  export type Output = GetTestGridSessionResult;
  export type Error =
    | ArgumentException
    | InternalServiceException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace GetUpload {
  export type Input = GetUploadRequest;
  export type Output = GetUploadResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace GetVPCEConfiguration {
  export type Input = GetVPCEConfigurationRequest;
  export type Output = GetVPCEConfigurationResult;
  export type Error =
    | ArgumentException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace InstallToRemoteAccessSession {
  export type Input = InstallToRemoteAccessSessionRequest;
  export type Output = InstallToRemoteAccessSessionResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListArtifacts {
  export type Input = ListArtifactsRequest;
  export type Output = ListArtifactsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListDeviceInstances {
  export type Input = ListDeviceInstancesRequest;
  export type Output = ListDeviceInstancesResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListDevicePools {
  export type Input = ListDevicePoolsRequest;
  export type Output = ListDevicePoolsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListDevices {
  export type Input = ListDevicesRequest;
  export type Output = ListDevicesResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListInstanceProfiles {
  export type Input = ListInstanceProfilesRequest;
  export type Output = ListInstanceProfilesResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListNetworkProfiles {
  export type Input = ListNetworkProfilesRequest;
  export type Output = ListNetworkProfilesResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListOfferingPromotions {
  export type Input = ListOfferingPromotionsRequest;
  export type Output = ListOfferingPromotionsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotEligibleException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListOfferingTransactions {
  export type Input = ListOfferingTransactionsRequest;
  export type Output = ListOfferingTransactionsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotEligibleException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListOfferings {
  export type Input = ListOfferingsRequest;
  export type Output = ListOfferingsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotEligibleException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListProjects {
  export type Input = ListProjectsRequest;
  export type Output = ListProjectsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListRemoteAccessSessions {
  export type Input = ListRemoteAccessSessionsRequest;
  export type Output = ListRemoteAccessSessionsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListRuns {
  export type Input = ListRunsRequest;
  export type Output = ListRunsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListSamples {
  export type Input = ListSamplesRequest;
  export type Output = ListSamplesResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListSuites {
  export type Input = ListSuitesRequest;
  export type Output = ListSuitesResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | ArgumentException
    | NotFoundException
    | TagOperationException
    | CommonAwsError;
}

export declare namespace ListTestGridProjects {
  export type Input = ListTestGridProjectsRequest;
  export type Output = ListTestGridProjectsResult;
  export type Error =
    | ArgumentException
    | InternalServiceException
    | CommonAwsError;
}

export declare namespace ListTestGridSessionActions {
  export type Input = ListTestGridSessionActionsRequest;
  export type Output = ListTestGridSessionActionsResult;
  export type Error =
    | ArgumentException
    | InternalServiceException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListTestGridSessionArtifacts {
  export type Input = ListTestGridSessionArtifactsRequest;
  export type Output = ListTestGridSessionArtifactsResult;
  export type Error =
    | ArgumentException
    | InternalServiceException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListTestGridSessions {
  export type Input = ListTestGridSessionsRequest;
  export type Output = ListTestGridSessionsResult;
  export type Error =
    | ArgumentException
    | InternalServiceException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListTests {
  export type Input = ListTestsRequest;
  export type Output = ListTestsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListUniqueProblems {
  export type Input = ListUniqueProblemsRequest;
  export type Output = ListUniqueProblemsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListUploads {
  export type Input = ListUploadsRequest;
  export type Output = ListUploadsResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ListVPCEConfigurations {
  export type Input = ListVPCEConfigurationsRequest;
  export type Output = ListVPCEConfigurationsResult;
  export type Error =
    | ArgumentException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace PurchaseOffering {
  export type Input = PurchaseOfferingRequest;
  export type Output = PurchaseOfferingResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotEligibleException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace RenewOffering {
  export type Input = RenewOfferingRequest;
  export type Output = RenewOfferingResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotEligibleException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace ScheduleRun {
  export type Input = ScheduleRunRequest;
  export type Output = ScheduleRunResult;
  export type Error =
    | ArgumentException
    | IdempotencyException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace StopJob {
  export type Input = StopJobRequest;
  export type Output = StopJobResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace StopRemoteAccessSession {
  export type Input = StopRemoteAccessSessionRequest;
  export type Output = StopRemoteAccessSessionResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace StopRun {
  export type Input = StopRunRequest;
  export type Output = StopRunResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | ArgumentException
    | NotFoundException
    | TagOperationException
    | TagPolicyException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | ArgumentException
    | NotFoundException
    | TagOperationException
    | CommonAwsError;
}

export declare namespace UpdateDeviceInstance {
  export type Input = UpdateDeviceInstanceRequest;
  export type Output = UpdateDeviceInstanceResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace UpdateDevicePool {
  export type Input = UpdateDevicePoolRequest;
  export type Output = UpdateDevicePoolResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace UpdateInstanceProfile {
  export type Input = UpdateInstanceProfileRequest;
  export type Output = UpdateInstanceProfileResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace UpdateNetworkProfile {
  export type Input = UpdateNetworkProfileRequest;
  export type Output = UpdateNetworkProfileResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace UpdateProject {
  export type Input = UpdateProjectRequest;
  export type Output = UpdateProjectResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace UpdateTestGridProject {
  export type Input = UpdateTestGridProjectRequest;
  export type Output = UpdateTestGridProjectResult;
  export type Error =
    | ArgumentException
    | InternalServiceException
    | LimitExceededException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateUpload {
  export type Input = UpdateUploadRequest;
  export type Output = UpdateUploadResult;
  export type Error =
    | ArgumentException
    | LimitExceededException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

export declare namespace UpdateVPCEConfiguration {
  export type Input = UpdateVPCEConfigurationRequest;
  export type Output = UpdateVPCEConfigurationResult;
  export type Error =
    | ArgumentException
    | InvalidOperationException
    | NotFoundException
    | ServiceAccountException
    | CommonAwsError;
}

