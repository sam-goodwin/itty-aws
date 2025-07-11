import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface CodeBuild_20161006 {
  batchDeleteBuilds(
    input: BatchDeleteBuildsInput,
  ): Effect.Effect<
    BatchDeleteBuildsOutput,
    InvalidInputException | CommonAwsError
  >;
  batchGetBuildBatches(
    input: BatchGetBuildBatchesInput,
  ): Effect.Effect<
    BatchGetBuildBatchesOutput,
    InvalidInputException | CommonAwsError
  >;
  batchGetBuilds(
    input: BatchGetBuildsInput,
  ): Effect.Effect<
    BatchGetBuildsOutput,
    InvalidInputException | CommonAwsError
  >;
  batchGetCommandExecutions(
    input: BatchGetCommandExecutionsInput,
  ): Effect.Effect<
    BatchGetCommandExecutionsOutput,
    InvalidInputException | CommonAwsError
  >;
  batchGetFleets(
    input: BatchGetFleetsInput,
  ): Effect.Effect<
    BatchGetFleetsOutput,
    InvalidInputException | CommonAwsError
  >;
  batchGetProjects(
    input: BatchGetProjectsInput,
  ): Effect.Effect<
    BatchGetProjectsOutput,
    InvalidInputException | CommonAwsError
  >;
  batchGetReportGroups(
    input: BatchGetReportGroupsInput,
  ): Effect.Effect<
    BatchGetReportGroupsOutput,
    InvalidInputException | CommonAwsError
  >;
  batchGetReports(
    input: BatchGetReportsInput,
  ): Effect.Effect<
    BatchGetReportsOutput,
    InvalidInputException | CommonAwsError
  >;
  batchGetSandboxes(
    input: BatchGetSandboxesInput,
  ): Effect.Effect<
    BatchGetSandboxesOutput,
    InvalidInputException | CommonAwsError
  >;
  createFleet(
    input: CreateFleetInput,
  ): Effect.Effect<
    CreateFleetOutput,
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  createProject(
    input: CreateProjectInput,
  ): Effect.Effect<
    CreateProjectOutput,
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  createReportGroup(
    input: CreateReportGroupInput,
  ): Effect.Effect<
    CreateReportGroupOutput,
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  createWebhook(
    input: CreateWebhookInput,
  ): Effect.Effect<
    CreateWebhookOutput,
    | InvalidInputException
    | OAuthProviderException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteBuildBatch(
    input: DeleteBuildBatchInput,
  ): Effect.Effect<
    DeleteBuildBatchOutput,
    InvalidInputException | CommonAwsError
  >;
  deleteFleet(
    input: DeleteFleetInput,
  ): Effect.Effect<DeleteFleetOutput, InvalidInputException | CommonAwsError>;
  deleteProject(
    input: DeleteProjectInput,
  ): Effect.Effect<DeleteProjectOutput, InvalidInputException | CommonAwsError>;
  deleteReport(
    input: DeleteReportInput,
  ): Effect.Effect<DeleteReportOutput, InvalidInputException | CommonAwsError>;
  deleteReportGroup(
    input: DeleteReportGroupInput,
  ): Effect.Effect<
    DeleteReportGroupOutput,
    InvalidInputException | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyInput,
  ): Effect.Effect<
    DeleteResourcePolicyOutput,
    InvalidInputException | CommonAwsError
  >;
  deleteSourceCredentials(
    input: DeleteSourceCredentialsInput,
  ): Effect.Effect<
    DeleteSourceCredentialsOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  deleteWebhook(
    input: DeleteWebhookInput,
  ): Effect.Effect<
    DeleteWebhookOutput,
    | InvalidInputException
    | OAuthProviderException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeCodeCoverages(
    input: DescribeCodeCoveragesInput,
  ): Effect.Effect<
    DescribeCodeCoveragesOutput,
    InvalidInputException | CommonAwsError
  >;
  describeTestCases(
    input: DescribeTestCasesInput,
  ): Effect.Effect<
    DescribeTestCasesOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  getReportGroupTrend(
    input: GetReportGroupTrendInput,
  ): Effect.Effect<
    GetReportGroupTrendOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyInput,
  ): Effect.Effect<
    GetResourcePolicyOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  importSourceCredentials(
    input: ImportSourceCredentialsInput,
  ): Effect.Effect<
    ImportSourceCredentialsOutput,
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceAlreadyExistsException
    | CommonAwsError
  >;
  invalidateProjectCache(
    input: InvalidateProjectCacheInput,
  ): Effect.Effect<
    InvalidateProjectCacheOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  listBuildBatches(
    input: ListBuildBatchesInput,
  ): Effect.Effect<
    ListBuildBatchesOutput,
    InvalidInputException | CommonAwsError
  >;
  listBuildBatchesForProject(
    input: ListBuildBatchesForProjectInput,
  ): Effect.Effect<
    ListBuildBatchesForProjectOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  listBuilds(
    input: ListBuildsInput,
  ): Effect.Effect<ListBuildsOutput, InvalidInputException | CommonAwsError>;
  listBuildsForProject(
    input: ListBuildsForProjectInput,
  ): Effect.Effect<
    ListBuildsForProjectOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  listCommandExecutionsForSandbox(
    input: ListCommandExecutionsForSandboxInput,
  ): Effect.Effect<
    ListCommandExecutionsForSandboxOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  listCuratedEnvironmentImages(
    input: ListCuratedEnvironmentImagesInput,
  ): Effect.Effect<ListCuratedEnvironmentImagesOutput, CommonAwsError>;
  listFleets(
    input: ListFleetsInput,
  ): Effect.Effect<ListFleetsOutput, InvalidInputException | CommonAwsError>;
  listProjects(
    input: ListProjectsInput,
  ): Effect.Effect<ListProjectsOutput, InvalidInputException | CommonAwsError>;
  listReportGroups(
    input: ListReportGroupsInput,
  ): Effect.Effect<
    ListReportGroupsOutput,
    InvalidInputException | CommonAwsError
  >;
  listReports(
    input: ListReportsInput,
  ): Effect.Effect<ListReportsOutput, InvalidInputException | CommonAwsError>;
  listReportsForReportGroup(
    input: ListReportsForReportGroupInput,
  ): Effect.Effect<
    ListReportsForReportGroupOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  listSandboxes(
    input: ListSandboxesInput,
  ): Effect.Effect<ListSandboxesOutput, InvalidInputException | CommonAwsError>;
  listSandboxesForProject(
    input: ListSandboxesForProjectInput,
  ): Effect.Effect<
    ListSandboxesForProjectOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  listSharedProjects(
    input: ListSharedProjectsInput,
  ): Effect.Effect<
    ListSharedProjectsOutput,
    InvalidInputException | CommonAwsError
  >;
  listSharedReportGroups(
    input: ListSharedReportGroupsInput,
  ): Effect.Effect<
    ListSharedReportGroupsOutput,
    InvalidInputException | CommonAwsError
  >;
  listSourceCredentials(
    input: ListSourceCredentialsInput,
  ): Effect.Effect<
    ListSourceCredentialsOutput,
    InvalidInputException | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyInput,
  ): Effect.Effect<
    PutResourcePolicyOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  retryBuild(
    input: RetryBuildInput,
  ): Effect.Effect<
    RetryBuildOutput,
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  retryBuildBatch(
    input: RetryBuildBatchInput,
  ): Effect.Effect<
    RetryBuildBatchOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  startBuild(
    input: StartBuildInput,
  ): Effect.Effect<
    StartBuildOutput,
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startBuildBatch(
    input: StartBuildBatchInput,
  ): Effect.Effect<
    StartBuildBatchOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  startCommandExecution(
    input: StartCommandExecutionInput,
  ): Effect.Effect<
    StartCommandExecutionOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  startSandbox(
    input: StartSandboxInput,
  ): Effect.Effect<
    StartSandboxOutput,
    | AccountSuspendedException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startSandboxConnection(
    input: StartSandboxConnectionInput,
  ): Effect.Effect<
    StartSandboxConnectionOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  stopBuild(
    input: StopBuildInput,
  ): Effect.Effect<
    StopBuildOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  stopBuildBatch(
    input: StopBuildBatchInput,
  ): Effect.Effect<
    StopBuildBatchOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  stopSandbox(
    input: StopSandboxInput,
  ): Effect.Effect<
    StopSandboxOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  updateFleet(
    input: UpdateFleetInput,
  ): Effect.Effect<
    UpdateFleetOutput,
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateProject(
    input: UpdateProjectInput,
  ): Effect.Effect<
    UpdateProjectOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  updateProjectVisibility(
    input: UpdateProjectVisibilityInput,
  ): Effect.Effect<
    UpdateProjectVisibilityOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  updateReportGroup(
    input: UpdateReportGroupInput,
  ): Effect.Effect<
    UpdateReportGroupOutput,
    InvalidInputException | ResourceNotFoundException | CommonAwsError
  >;
  updateWebhook(
    input: UpdateWebhookInput,
  ): Effect.Effect<
    UpdateWebhookOutput,
    | InvalidInputException
    | OAuthProviderException
    | ResourceNotFoundException
    | CommonAwsError
  >;
}

export type Codebuild = CodeBuild_20161006;

export declare class AccountLimitExceededException extends Data.TaggedError(
  "AccountLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class AccountSuspendedException extends Data.TaggedError(
  "AccountSuspendedException",
)<{
  readonly message?: string;
}> {}
export type ArtifactNamespace = "NONE" | "BUILD_ID";
export type ArtifactPackaging = "NONE" | "ZIP";
export type ArtifactsType = "CODEPIPELINE" | "S3" | "NO_ARTIFACTS";
export type AuthType =
  | "OAUTH"
  | "BASIC_AUTH"
  | "PERSONAL_ACCESS_TOKEN"
  | "CODECONNECTIONS"
  | "SECRETS_MANAGER";
export interface AutoRetryConfig {
  autoRetryLimit?: number;
  autoRetryNumber?: number;
  nextAutoRetry?: string;
  previousAutoRetry?: string;
}
export interface BatchDeleteBuildsInput {
  ids: Array<string>;
}
export interface BatchDeleteBuildsOutput {
  buildsDeleted?: Array<string>;
  buildsNotDeleted?: Array<BuildNotDeleted>;
}
export interface BatchGetBuildBatchesInput {
  ids: Array<string>;
}
export interface BatchGetBuildBatchesOutput {
  buildBatches?: Array<BuildBatch>;
  buildBatchesNotFound?: Array<string>;
}
export interface BatchGetBuildsInput {
  ids: Array<string>;
}
export interface BatchGetBuildsOutput {
  builds?: Array<Build>;
  buildsNotFound?: Array<string>;
}
export interface BatchGetCommandExecutionsInput {
  sandboxId: string;
  commandExecutionIds: Array<string>;
}
export interface BatchGetCommandExecutionsOutput {
  commandExecutions?: Array<CommandExecution>;
  commandExecutionsNotFound?: Array<string>;
}
export interface BatchGetFleetsInput {
  names: Array<string>;
}
export interface BatchGetFleetsOutput {
  fleets?: Array<Fleet>;
  fleetsNotFound?: Array<string>;
}
export interface BatchGetProjectsInput {
  names: Array<string>;
}
export interface BatchGetProjectsOutput {
  projects?: Array<Project>;
  projectsNotFound?: Array<string>;
}
export interface BatchGetReportGroupsInput {
  reportGroupArns: Array<string>;
}
export interface BatchGetReportGroupsOutput {
  reportGroups?: Array<ReportGroup>;
  reportGroupsNotFound?: Array<string>;
}
export interface BatchGetReportsInput {
  reportArns: Array<string>;
}
export interface BatchGetReportsOutput {
  reports?: Array<Report>;
  reportsNotFound?: Array<string>;
}
export interface BatchGetSandboxesInput {
  ids: Array<string>;
}
export interface BatchGetSandboxesOutput {
  sandboxes?: Array<Sandbox>;
  sandboxesNotFound?: Array<string>;
}
export type BatchReportModeType =
  | "REPORT_INDIVIDUAL_BUILDS"
  | "REPORT_AGGREGATED_BATCH";
export interface BatchRestrictions {
  maximumBuildsAllowed?: number;
  computeTypesAllowed?: Array<string>;
  fleetsAllowed?: Array<string>;
}
export type BucketOwnerAccess = "NONE" | "READ_ONLY" | "FULL";
export interface Build {
  id?: string;
  arn?: string;
  buildNumber?: number;
  startTime?: Date | string;
  endTime?: Date | string;
  currentPhase?: string;
  buildStatus?: StatusType;
  sourceVersion?: string;
  resolvedSourceVersion?: string;
  projectName?: string;
  phases?: Array<BuildPhase>;
  source?: ProjectSource;
  secondarySources?: Array<ProjectSource>;
  secondarySourceVersions?: Array<ProjectSourceVersion>;
  artifacts?: BuildArtifacts;
  secondaryArtifacts?: Array<BuildArtifacts>;
  cache?: ProjectCache;
  environment?: ProjectEnvironment;
  serviceRole?: string;
  logs?: LogsLocation;
  timeoutInMinutes?: number;
  queuedTimeoutInMinutes?: number;
  buildComplete?: boolean;
  initiator?: string;
  vpcConfig?: VpcConfig;
  networkInterface?: NetworkInterface;
  encryptionKey?: string;
  exportedEnvironmentVariables?: Array<ExportedEnvironmentVariable>;
  reportArns?: Array<string>;
  fileSystemLocations?: Array<ProjectFileSystemLocation>;
  debugSession?: DebugSession;
  buildBatchArn?: string;
  autoRetryConfig?: AutoRetryConfig;
}
export interface BuildArtifacts {
  location?: string;
  sha256sum?: string;
  md5sum?: string;
  overrideArtifactName?: boolean;
  encryptionDisabled?: boolean;
  artifactIdentifier?: string;
  bucketOwnerAccess?: BucketOwnerAccess;
}
export type BuildArtifactsList = Array<BuildArtifacts>;
export interface BuildBatch {
  id?: string;
  arn?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  currentPhase?: string;
  buildBatchStatus?: StatusType;
  sourceVersion?: string;
  resolvedSourceVersion?: string;
  projectName?: string;
  phases?: Array<BuildBatchPhase>;
  source?: ProjectSource;
  secondarySources?: Array<ProjectSource>;
  secondarySourceVersions?: Array<ProjectSourceVersion>;
  artifacts?: BuildArtifacts;
  secondaryArtifacts?: Array<BuildArtifacts>;
  cache?: ProjectCache;
  environment?: ProjectEnvironment;
  serviceRole?: string;
  logConfig?: LogsConfig;
  buildTimeoutInMinutes?: number;
  queuedTimeoutInMinutes?: number;
  complete?: boolean;
  initiator?: string;
  vpcConfig?: VpcConfig;
  encryptionKey?: string;
  buildBatchNumber?: number;
  fileSystemLocations?: Array<ProjectFileSystemLocation>;
  buildBatchConfig?: ProjectBuildBatchConfig;
  buildGroups?: Array<BuildGroup>;
  debugSessionEnabled?: boolean;
  reportArns?: Array<string>;
}
export type BuildBatches = Array<BuildBatch>;
export interface BuildBatchFilter {
  status?: StatusType;
}
export type BuildBatchIds = Array<string>;
export interface BuildBatchPhase {
  phaseType?: BuildBatchPhaseType;
  phaseStatus?: StatusType;
  startTime?: Date | string;
  endTime?: Date | string;
  durationInSeconds?: number;
  contexts?: Array<PhaseContext>;
}
export type BuildBatchPhases = Array<BuildBatchPhase>;
export type BuildBatchPhaseType =
  | "SUBMITTED"
  | "DOWNLOAD_BATCHSPEC"
  | "IN_PROGRESS"
  | "COMBINE_ARTIFACTS"
  | "SUCCEEDED"
  | "FAILED"
  | "STOPPED";
export interface BuildGroup {
  identifier?: string;
  dependsOn?: Array<string>;
  ignoreFailure?: boolean;
  currentBuildSummary?: BuildSummary;
  priorBuildSummaryList?: Array<BuildSummary>;
}
export type BuildGroups = Array<BuildGroup>;
export type BuildIds = Array<string>;
export interface BuildNotDeleted {
  id?: string;
  statusCode?: string;
}
export interface BuildPhase {
  phaseType?: BuildPhaseType;
  phaseStatus?: StatusType;
  startTime?: Date | string;
  endTime?: Date | string;
  durationInSeconds?: number;
  contexts?: Array<PhaseContext>;
}
export type BuildPhases = Array<BuildPhase>;
export type BuildPhaseType =
  | "SUBMITTED"
  | "QUEUED"
  | "PROVISIONING"
  | "DOWNLOAD_SOURCE"
  | "INSTALL"
  | "PRE_BUILD"
  | "BUILD"
  | "POST_BUILD"
  | "UPLOAD_ARTIFACTS"
  | "FINALIZING"
  | "COMPLETED";
export type BuildReportArns = Array<string>;
export type Builds = Array<Build>;
export type BuildsNotDeleted = Array<BuildNotDeleted>;
export interface BuildStatusConfig {
  context?: string;
  targetUrl?: string;
}
export type BuildSummaries = Array<BuildSummary>;
export interface BuildSummary {
  arn?: string;
  requestedOn?: Date | string;
  buildStatus?: StatusType;
  primaryArtifact?: ResolvedArtifact;
  secondaryArtifacts?: Array<ResolvedArtifact>;
}
export type BuildTimeOut = number;

export type CacheMode =
  | "LOCAL_DOCKER_LAYER_CACHE"
  | "LOCAL_SOURCE_CACHE"
  | "LOCAL_CUSTOM_CACHE";
export type CacheType = "NO_CACHE" | "S3" | "LOCAL";
export interface CloudWatchLogsConfig {
  status: LogsConfigStatusType;
  groupName?: string;
  streamName?: string;
}
export interface CodeCoverage {
  id?: string;
  reportARN?: string;
  filePath?: string;
  lineCoveragePercentage?: number;
  linesCovered?: number;
  linesMissed?: number;
  branchCoveragePercentage?: number;
  branchesCovered?: number;
  branchesMissed?: number;
  expired?: Date | string;
}
export interface CodeCoverageReportSummary {
  lineCoveragePercentage?: number;
  linesCovered?: number;
  linesMissed?: number;
  branchCoveragePercentage?: number;
  branchesCovered?: number;
  branchesMissed?: number;
}
export type CodeCoverages = Array<CodeCoverage>;
export interface CommandExecution {
  id?: string;
  sandboxId?: string;
  submitTime?: Date | string;
  startTime?: Date | string;
  endTime?: Date | string;
  status?: string;
  command?: string;
  type?: CommandType;
  exitCode?: string;
  standardOutputContent?: string;
  standardErrContent?: string;
  logs?: LogsLocation;
  sandboxArn?: string;
}
export type CommandExecutionIds = Array<string>;
export type CommandExecutions = Array<CommandExecution>;
export type CommandType = "SHELL";
export interface ComputeConfiguration {
  vCpu?: number;
  memory?: number;
  disk?: number;
  machineType?: MachineType;
  instanceType?: string;
}
export type ComputeType =
  | "BUILD_GENERAL1_SMALL"
  | "BUILD_GENERAL1_MEDIUM"
  | "BUILD_GENERAL1_LARGE"
  | "BUILD_GENERAL1_XLARGE"
  | "BUILD_GENERAL1_2XLARGE"
  | "BUILD_LAMBDA_1GB"
  | "BUILD_LAMBDA_2GB"
  | "BUILD_LAMBDA_4GB"
  | "BUILD_LAMBDA_8GB"
  | "BUILD_LAMBDA_10GB"
  | "ATTRIBUTE_BASED_COMPUTE"
  | "CUSTOM_INSTANCE_TYPE";
export type ComputeTypesAllowed = Array<string>;
export interface CreateFleetInput {
  name: string;
  baseCapacity: number;
  environmentType: EnvironmentType;
  computeType: ComputeType;
  computeConfiguration?: ComputeConfiguration;
  scalingConfiguration?: ScalingConfigurationInput;
  overflowBehavior?: FleetOverflowBehavior;
  vpcConfig?: VpcConfig;
  proxyConfiguration?: ProxyConfiguration;
  imageId?: string;
  fleetServiceRole?: string;
  tags?: Array<Tag>;
}
export interface CreateFleetOutput {
  fleet?: Fleet;
}
export interface CreateProjectInput {
  name: string;
  description?: string;
  source: ProjectSource;
  secondarySources?: Array<ProjectSource>;
  sourceVersion?: string;
  secondarySourceVersions?: Array<ProjectSourceVersion>;
  artifacts: ProjectArtifacts;
  secondaryArtifacts?: Array<ProjectArtifacts>;
  cache?: ProjectCache;
  environment: ProjectEnvironment;
  serviceRole: string;
  timeoutInMinutes?: number;
  queuedTimeoutInMinutes?: number;
  encryptionKey?: string;
  tags?: Array<Tag>;
  vpcConfig?: VpcConfig;
  badgeEnabled?: boolean;
  logsConfig?: LogsConfig;
  fileSystemLocations?: Array<ProjectFileSystemLocation>;
  buildBatchConfig?: ProjectBuildBatchConfig;
  concurrentBuildLimit?: number;
  autoRetryLimit?: number;
}
export interface CreateProjectOutput {
  project?: Project;
}
export interface CreateReportGroupInput {
  name: string;
  type: ReportType;
  exportConfig: ReportExportConfig;
  tags?: Array<Tag>;
}
export interface CreateReportGroupOutput {
  reportGroup?: ReportGroup;
}
export interface CreateWebhookInput {
  projectName: string;
  branchFilter?: string;
  filterGroups?: Array<Array<WebhookFilter>>;
  buildType?: WebhookBuildType;
  manualCreation?: boolean;
  scopeConfiguration?: ScopeConfiguration;
}
export interface CreateWebhookOutput {
  webhook?: Webhook;
}
export type CredentialProviderType = "SECRETS_MANAGER";
export interface DebugSession {
  sessionEnabled?: boolean;
  sessionTarget?: string;
}
export interface DeleteBuildBatchInput {
  id: string;
}
export interface DeleteBuildBatchOutput {
  statusCode?: string;
  buildsDeleted?: Array<string>;
  buildsNotDeleted?: Array<BuildNotDeleted>;
}
export interface DeleteFleetInput {
  arn: string;
}
export interface DeleteFleetOutput {}
export interface DeleteProjectInput {
  name: string;
}
export interface DeleteProjectOutput {}
export interface DeleteReportGroupInput {
  arn: string;
  deleteReports?: boolean;
}
export interface DeleteReportGroupOutput {}
export interface DeleteReportInput {
  arn: string;
}
export interface DeleteReportOutput {}
export interface DeleteResourcePolicyInput {
  resourceArn: string;
}
export interface DeleteResourcePolicyOutput {}
export interface DeleteSourceCredentialsInput {
  arn: string;
}
export interface DeleteSourceCredentialsOutput {
  arn?: string;
}
export interface DeleteWebhookInput {
  projectName: string;
}
export interface DeleteWebhookOutput {}
export interface DescribeCodeCoveragesInput {
  reportArn: string;
  nextToken?: string;
  maxResults?: number;
  sortOrder?: SortOrderType;
  sortBy?: ReportCodeCoverageSortByType;
  minLineCoveragePercentage?: number;
  maxLineCoveragePercentage?: number;
}
export interface DescribeCodeCoveragesOutput {
  nextToken?: string;
  codeCoverages?: Array<CodeCoverage>;
}
export interface DescribeTestCasesInput {
  reportArn: string;
  nextToken?: string;
  maxResults?: number;
  filter?: TestCaseFilter;
}
export interface DescribeTestCasesOutput {
  nextToken?: string;
  testCases?: Array<TestCase>;
}
export interface DockerServer {
  computeType: ComputeType;
  securityGroupIds?: Array<string>;
  status?: DockerServerStatus;
}
export interface DockerServerStatus {
  status?: string;
  message?: string;
}
export interface EnvironmentImage {
  name?: string;
  description?: string;
  versions?: Array<string>;
}
export type EnvironmentImages = Array<EnvironmentImage>;
export interface EnvironmentLanguage {
  language?: LanguageType;
  images?: Array<EnvironmentImage>;
}
export type EnvironmentLanguages = Array<EnvironmentLanguage>;
export interface EnvironmentPlatform {
  platform?: PlatformType;
  languages?: Array<EnvironmentLanguage>;
}
export type EnvironmentPlatforms = Array<EnvironmentPlatform>;
export type EnvironmentType =
  | "WINDOWS_CONTAINER"
  | "LINUX_CONTAINER"
  | "LINUX_GPU_CONTAINER"
  | "ARM_CONTAINER"
  | "WINDOWS_SERVER_2019_CONTAINER"
  | "WINDOWS_SERVER_2022_CONTAINER"
  | "LINUX_LAMBDA_CONTAINER"
  | "ARM_LAMBDA_CONTAINER"
  | "LINUX_EC2"
  | "ARM_EC2"
  | "WINDOWS_EC2"
  | "MAC_ARM";
export interface EnvironmentVariable {
  name: string;
  value: string;
  type?: EnvironmentVariableType;
}
export type EnvironmentVariables = Array<EnvironmentVariable>;
export type EnvironmentVariableType =
  | "PLAINTEXT"
  | "PARAMETER_STORE"
  | "SECRETS_MANAGER";
export interface ExportedEnvironmentVariable {
  name?: string;
  value?: string;
}
export type ExportedEnvironmentVariables = Array<ExportedEnvironmentVariable>;
export type FileSystemType = "EFS";
export type FilterGroup = Array<WebhookFilter>;
export type FilterGroups = Array<Array<WebhookFilter>>;
export interface Fleet {
  arn?: string;
  name?: string;
  id?: string;
  created?: Date | string;
  lastModified?: Date | string;
  status?: FleetStatus;
  baseCapacity?: number;
  environmentType?: EnvironmentType;
  computeType?: ComputeType;
  computeConfiguration?: ComputeConfiguration;
  scalingConfiguration?: ScalingConfigurationOutput;
  overflowBehavior?: FleetOverflowBehavior;
  vpcConfig?: VpcConfig;
  proxyConfiguration?: ProxyConfiguration;
  imageId?: string;
  fleetServiceRole?: string;
  tags?: Array<Tag>;
}
export type FleetArns = Array<string>;
export type FleetCapacity = number;

export type FleetContextCode =
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | "ACTION_REQUIRED"
  | "PENDING_DELETION"
  | "INSUFFICIENT_CAPACITY";
export type FleetName = string;

export type FleetNames = Array<string>;
export type FleetOverflowBehavior = "QUEUE" | "ON_DEMAND";
export interface FleetProxyRule {
  type: FleetProxyRuleType;
  effect: FleetProxyRuleEffectType;
  entities: Array<string>;
}
export type FleetProxyRuleBehavior = "ALLOW_ALL" | "DENY_ALL";
export type FleetProxyRuleEffectType = "ALLOW" | "DENY";
export type FleetProxyRuleEntities = Array<string>;
export type FleetProxyRules = Array<FleetProxyRule>;
export type FleetProxyRuleType = "DOMAIN" | "IP";
export type Fleets = Array<Fleet>;
export type FleetsAllowed = Array<string>;
export type FleetScalingMetricType = "FLEET_UTILIZATION_RATE";
export type FleetScalingType = "TARGET_TRACKING_SCALING";
export type FleetSortByType = "NAME" | "CREATED_TIME" | "LAST_MODIFIED_TIME";
export interface FleetStatus {
  statusCode?: FleetStatusCode;
  context?: FleetContextCode;
  message?: string;
}
export type FleetStatusCode =
  | "CREATING"
  | "UPDATING"
  | "ROTATING"
  | "PENDING_DELETION"
  | "DELETING"
  | "CREATE_FAILED"
  | "UPDATE_ROLLBACK_FAILED"
  | "ACTIVE";
export interface GetReportGroupTrendInput {
  reportGroupArn: string;
  numOfReports?: number;
  trendField: ReportGroupTrendFieldType;
}
export interface GetReportGroupTrendOutput {
  stats?: ReportGroupTrendStats;
  rawData?: Array<ReportWithRawData>;
}
export interface GetResourcePolicyInput {
  resourceArn: string;
}
export interface GetResourcePolicyOutput {
  policy?: string;
}
export type GitCloneDepth = number;

export interface GitSubmodulesConfig {
  fetchSubmodules: boolean;
}
export type Identifiers = Array<string>;
export type ImagePullCredentialsType = "CODEBUILD" | "SERVICE_ROLE";
export type ImageVersions = Array<string>;
export interface ImportSourceCredentialsInput {
  username?: string;
  token: string;
  serverType: ServerType;
  authType: AuthType;
  shouldOverwrite?: boolean;
}
export interface ImportSourceCredentialsOutput {
  arn?: string;
}
export interface InvalidateProjectCacheInput {
  projectName: string;
}
export interface InvalidateProjectCacheOutput {}
export declare class InvalidInputException extends Data.TaggedError(
  "InvalidInputException",
)<{
  readonly message?: string;
}> {}
export type KeyInput = string;

export type LanguageType =
  | "JAVA"
  | "PYTHON"
  | "NODE_JS"
  | "RUBY"
  | "GOLANG"
  | "DOCKER"
  | "ANDROID"
  | "DOTNET"
  | "BASE"
  | "PHP";
export interface ListBuildBatchesForProjectInput {
  projectName?: string;
  filter?: BuildBatchFilter;
  maxResults?: number;
  sortOrder?: SortOrderType;
  nextToken?: string;
}
export interface ListBuildBatchesForProjectOutput {
  ids?: Array<string>;
  nextToken?: string;
}
export interface ListBuildBatchesInput {
  filter?: BuildBatchFilter;
  maxResults?: number;
  sortOrder?: SortOrderType;
  nextToken?: string;
}
export interface ListBuildBatchesOutput {
  ids?: Array<string>;
  nextToken?: string;
}
export interface ListBuildsForProjectInput {
  projectName: string;
  sortOrder?: SortOrderType;
  nextToken?: string;
}
export interface ListBuildsForProjectOutput {
  ids?: Array<string>;
  nextToken?: string;
}
export interface ListBuildsInput {
  sortOrder?: SortOrderType;
  nextToken?: string;
}
export interface ListBuildsOutput {
  ids?: Array<string>;
  nextToken?: string;
}
export interface ListCommandExecutionsForSandboxInput {
  sandboxId: string;
  maxResults?: number;
  sortOrder?: SortOrderType;
  nextToken?: string;
}
export interface ListCommandExecutionsForSandboxOutput {
  commandExecutions?: Array<CommandExecution>;
  nextToken?: string;
}
export interface ListCuratedEnvironmentImagesInput {}
export interface ListCuratedEnvironmentImagesOutput {
  platforms?: Array<EnvironmentPlatform>;
}
export interface ListFleetsInput {
  nextToken?: string;
  maxResults?: number;
  sortOrder?: SortOrderType;
  sortBy?: FleetSortByType;
}
export interface ListFleetsOutput {
  nextToken?: string;
  fleets?: Array<string>;
}
export interface ListProjectsInput {
  sortBy?: ProjectSortByType;
  sortOrder?: SortOrderType;
  nextToken?: string;
}
export interface ListProjectsOutput {
  nextToken?: string;
  projects?: Array<string>;
}
export interface ListReportGroupsInput {
  sortOrder?: SortOrderType;
  sortBy?: ReportGroupSortByType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListReportGroupsOutput {
  nextToken?: string;
  reportGroups?: Array<string>;
}
export interface ListReportsForReportGroupInput {
  reportGroupArn: string;
  nextToken?: string;
  sortOrder?: SortOrderType;
  maxResults?: number;
  filter?: ReportFilter;
}
export interface ListReportsForReportGroupOutput {
  nextToken?: string;
  reports?: Array<string>;
}
export interface ListReportsInput {
  sortOrder?: SortOrderType;
  nextToken?: string;
  maxResults?: number;
  filter?: ReportFilter;
}
export interface ListReportsOutput {
  nextToken?: string;
  reports?: Array<string>;
}
export interface ListSandboxesForProjectInput {
  projectName: string;
  maxResults?: number;
  sortOrder?: SortOrderType;
  nextToken?: string;
}
export interface ListSandboxesForProjectOutput {
  ids?: Array<string>;
  nextToken?: string;
}
export interface ListSandboxesInput {
  maxResults?: number;
  sortOrder?: SortOrderType;
  nextToken?: string;
}
export interface ListSandboxesOutput {
  ids?: Array<string>;
  nextToken?: string;
}
export interface ListSharedProjectsInput {
  sortBy?: SharedResourceSortByType;
  sortOrder?: SortOrderType;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSharedProjectsOutput {
  nextToken?: string;
  projects?: Array<string>;
}
export interface ListSharedReportGroupsInput {
  sortOrder?: SortOrderType;
  sortBy?: SharedResourceSortByType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListSharedReportGroupsOutput {
  nextToken?: string;
  reportGroups?: Array<string>;
}
export interface ListSourceCredentialsInput {}
export interface ListSourceCredentialsOutput {
  sourceCredentialsInfos?: Array<SourceCredentialsInfo>;
}
export interface LogsConfig {
  cloudWatchLogs?: CloudWatchLogsConfig;
  s3Logs?: S3LogsConfig;
}
export type LogsConfigStatusType = "ENABLED" | "DISABLED";
export interface LogsLocation {
  groupName?: string;
  streamName?: string;
  deepLink?: string;
  s3DeepLink?: string;
  cloudWatchLogsArn?: string;
  s3LogsArn?: string;
  cloudWatchLogs?: CloudWatchLogsConfig;
  s3Logs?: S3LogsConfig;
}
export type MachineType = "GENERAL" | "NVME";
export interface NetworkInterface {
  subnetId?: string;
  networkInterfaceId?: string;
}
export type NonEmptyString = string;

export type NonNegativeInt = number;

export declare class OAuthProviderException extends Data.TaggedError(
  "OAuthProviderException",
)<{
  readonly message?: string;
}> {}
export type PageSize = number;

export type Percentage = number;

export interface PhaseContext {
  statusCode?: string;
  message?: string;
}
export type PhaseContexts = Array<PhaseContext>;
export type PlatformType =
  | "DEBIAN"
  | "AMAZON_LINUX"
  | "UBUNTU"
  | "WINDOWS_SERVER";
export interface Project {
  name?: string;
  arn?: string;
  description?: string;
  source?: ProjectSource;
  secondarySources?: Array<ProjectSource>;
  sourceVersion?: string;
  secondarySourceVersions?: Array<ProjectSourceVersion>;
  artifacts?: ProjectArtifacts;
  secondaryArtifacts?: Array<ProjectArtifacts>;
  cache?: ProjectCache;
  environment?: ProjectEnvironment;
  serviceRole?: string;
  timeoutInMinutes?: number;
  queuedTimeoutInMinutes?: number;
  encryptionKey?: string;
  tags?: Array<Tag>;
  created?: Date | string;
  lastModified?: Date | string;
  webhook?: Webhook;
  vpcConfig?: VpcConfig;
  badge?: ProjectBadge;
  logsConfig?: LogsConfig;
  fileSystemLocations?: Array<ProjectFileSystemLocation>;
  buildBatchConfig?: ProjectBuildBatchConfig;
  concurrentBuildLimit?: number;
  projectVisibility?: ProjectVisibilityType;
  publicProjectAlias?: string;
  resourceAccessRole?: string;
  autoRetryLimit?: number;
}
export type ProjectArns = Array<string>;
export interface ProjectArtifacts {
  type: ArtifactsType;
  location?: string;
  path?: string;
  namespaceType?: ArtifactNamespace;
  name?: string;
  packaging?: ArtifactPackaging;
  overrideArtifactName?: boolean;
  encryptionDisabled?: boolean;
  artifactIdentifier?: string;
  bucketOwnerAccess?: BucketOwnerAccess;
}
export type ProjectArtifactsList = Array<ProjectArtifacts>;
export interface ProjectBadge {
  badgeEnabled?: boolean;
  badgeRequestUrl?: string;
}
export interface ProjectBuildBatchConfig {
  serviceRole?: string;
  combineArtifacts?: boolean;
  restrictions?: BatchRestrictions;
  timeoutInMins?: number;
  batchReportMode?: BatchReportModeType;
}
export interface ProjectCache {
  type: CacheType;
  location?: string;
  modes?: Array<CacheMode>;
  cacheNamespace?: string;
}
export type ProjectCacheModes = Array<CacheMode>;
export type ProjectDescription = string;

export interface ProjectEnvironment {
  type: EnvironmentType;
  image: string;
  computeType: ComputeType;
  computeConfiguration?: ComputeConfiguration;
  fleet?: ProjectFleet;
  environmentVariables?: Array<EnvironmentVariable>;
  privilegedMode?: boolean;
  certificate?: string;
  registryCredential?: RegistryCredential;
  imagePullCredentialsType?: ImagePullCredentialsType;
  dockerServer?: DockerServer;
}
export interface ProjectFileSystemLocation {
  type?: FileSystemType;
  location?: string;
  mountPoint?: string;
  identifier?: string;
  mountOptions?: string;
}
export type ProjectFileSystemLocations = Array<ProjectFileSystemLocation>;
export interface ProjectFleet {
  fleetArn?: string;
}
export type ProjectName = string;

export type ProjectNames = Array<string>;
export type Projects = Array<Project>;
export type ProjectSecondarySourceVersions = Array<ProjectSourceVersion>;
export type ProjectSortByType = "NAME" | "CREATED_TIME" | "LAST_MODIFIED_TIME";
export interface ProjectSource {
  type: SourceType;
  location?: string;
  gitCloneDepth?: number;
  gitSubmodulesConfig?: GitSubmodulesConfig;
  buildspec?: string;
  auth?: SourceAuth;
  reportBuildStatus?: boolean;
  buildStatusConfig?: BuildStatusConfig;
  insecureSsl?: boolean;
  sourceIdentifier?: string;
}
export type ProjectSources = Array<ProjectSource>;
export interface ProjectSourceVersion {
  sourceIdentifier: string;
  sourceVersion: string;
}
export type ProjectVisibilityType = "PUBLIC_READ" | "PRIVATE";
export interface ProxyConfiguration {
  defaultBehavior?: FleetProxyRuleBehavior;
  orderedProxyRules?: Array<FleetProxyRule>;
}
export interface PutResourcePolicyInput {
  policy: string;
  resourceArn: string;
}
export interface PutResourcePolicyOutput {
  resourceArn?: string;
}
export interface RegistryCredential {
  credential: string;
  credentialProvider: CredentialProviderType;
}
export interface Report {
  arn?: string;
  type?: ReportType;
  name?: string;
  reportGroupArn?: string;
  executionId?: string;
  status?: ReportStatusType;
  created?: Date | string;
  expired?: Date | string;
  exportConfig?: ReportExportConfig;
  truncated?: boolean;
  testSummary?: TestReportSummary;
  codeCoverageSummary?: CodeCoverageReportSummary;
}
export type ReportArns = Array<string>;
export type ReportCodeCoverageSortByType =
  | "LINE_COVERAGE_PERCENTAGE"
  | "FILE_PATH";
export interface ReportExportConfig {
  exportConfigType?: ReportExportConfigType;
  s3Destination?: S3ReportExportConfig;
}
export type ReportExportConfigType = "S3" | "NO_EXPORT";
export interface ReportFilter {
  status?: ReportStatusType;
}
export interface ReportGroup {
  arn?: string;
  name?: string;
  type?: ReportType;
  exportConfig?: ReportExportConfig;
  created?: Date | string;
  lastModified?: Date | string;
  tags?: Array<Tag>;
  status?: ReportGroupStatusType;
}
export type ReportGroupArns = Array<string>;
export type ReportGroupName = string;

export type ReportGroups = Array<ReportGroup>;
export type ReportGroupSortByType =
  | "NAME"
  | "CREATED_TIME"
  | "LAST_MODIFIED_TIME";
export type ReportGroupStatusType = "ACTIVE" | "DELETING";
export type ReportGroupTrendFieldType =
  | "PASS_RATE"
  | "DURATION"
  | "TOTAL"
  | "LINE_COVERAGE"
  | "LINES_COVERED"
  | "LINES_MISSED"
  | "BRANCH_COVERAGE"
  | "BRANCHES_COVERED"
  | "BRANCHES_MISSED";
export type ReportGroupTrendRawDataList = Array<ReportWithRawData>;
export interface ReportGroupTrendStats {
  average?: string;
  max?: string;
  min?: string;
}
export type ReportPackagingType = "ZIP" | "NONE";
export type Reports = Array<Report>;
export type ReportStatusCounts = Record<string, number>;
export type ReportStatusType =
  | "GENERATING"
  | "SUCCEEDED"
  | "FAILED"
  | "INCOMPLETE"
  | "DELETING";
export type ReportType = "TEST" | "CODE_COVERAGE";
export interface ReportWithRawData {
  reportArn?: string;
  data?: string;
}
export interface ResolvedArtifact {
  type?: ArtifactsType;
  location?: string;
  identifier?: string;
}
export type ResolvedSecondaryArtifacts = Array<ResolvedArtifact>;
export declare class ResourceAlreadyExistsException extends Data.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export interface RetryBuildBatchInput {
  id?: string;
  idempotencyToken?: string;
  retryType?: RetryBuildBatchType;
}
export interface RetryBuildBatchOutput {
  buildBatch?: BuildBatch;
}
export type RetryBuildBatchType = "RETRY_ALL_BUILDS" | "RETRY_FAILED_BUILDS";
export interface RetryBuildInput {
  id?: string;
  idempotencyToken?: string;
}
export interface RetryBuildOutput {
  build?: Build;
}
export interface S3LogsConfig {
  status: LogsConfigStatusType;
  location?: string;
  encryptionDisabled?: boolean;
  bucketOwnerAccess?: BucketOwnerAccess;
}
export interface S3ReportExportConfig {
  bucket?: string;
  bucketOwner?: string;
  path?: string;
  packaging?: ReportPackagingType;
  encryptionKey?: string;
  encryptionDisabled?: boolean;
}
export interface Sandbox {
  id?: string;
  arn?: string;
  projectName?: string;
  requestTime?: Date | string;
  startTime?: Date | string;
  endTime?: Date | string;
  status?: string;
  source?: ProjectSource;
  sourceVersion?: string;
  secondarySources?: Array<ProjectSource>;
  secondarySourceVersions?: Array<ProjectSourceVersion>;
  environment?: ProjectEnvironment;
  fileSystemLocations?: Array<ProjectFileSystemLocation>;
  timeoutInMinutes?: number;
  queuedTimeoutInMinutes?: number;
  vpcConfig?: VpcConfig;
  logConfig?: LogsConfig;
  encryptionKey?: string;
  serviceRole?: string;
  currentSession?: SandboxSession;
}
export type Sandboxes = Array<Sandbox>;
export type SandboxIds = Array<string>;
export interface SandboxSession {
  id?: string;
  status?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  currentPhase?: string;
  phases?: Array<SandboxSessionPhase>;
  resolvedSourceVersion?: string;
  logs?: LogsLocation;
  networkInterface?: NetworkInterface;
}
export interface SandboxSessionPhase {
  phaseType?: string;
  phaseStatus?: StatusType;
  startTime?: Date | string;
  endTime?: Date | string;
  durationInSeconds?: number;
  contexts?: Array<PhaseContext>;
}
export type SandboxSessionPhases = Array<SandboxSessionPhase>;
export interface ScalingConfigurationInput {
  scalingType?: FleetScalingType;
  targetTrackingScalingConfigs?: Array<TargetTrackingScalingConfiguration>;
  maxCapacity?: number;
}
export interface ScalingConfigurationOutput {
  scalingType?: FleetScalingType;
  targetTrackingScalingConfigs?: Array<TargetTrackingScalingConfiguration>;
  maxCapacity?: number;
  desiredCapacity?: number;
}
export interface ScopeConfiguration {
  name: string;
  domain?: string;
  scope: WebhookScopeType;
}
export type SecurityGroupIds = Array<string>;
export type SensitiveNonEmptyString = string;

export type SensitiveString = string;

export type ServerType =
  | "GITHUB"
  | "BITBUCKET"
  | "GITHUB_ENTERPRISE"
  | "GITLAB"
  | "GITLAB_SELF_MANAGED";
export type SharedResourceSortByType = "ARN" | "MODIFIED_TIME";
export type SortOrderType = "ASCENDING" | "DESCENDING";
export interface SourceAuth {
  type: SourceAuthType;
  resource?: string;
}
export type SourceAuthType = "OAUTH" | "CODECONNECTIONS" | "SECRETS_MANAGER";
export interface SourceCredentialsInfo {
  arn?: string;
  serverType?: ServerType;
  authType?: AuthType;
  resource?: string;
}
export type SourceCredentialsInfos = Array<SourceCredentialsInfo>;
export type SourceType =
  | "CODECOMMIT"
  | "CODEPIPELINE"
  | "GITHUB"
  | "GITLAB"
  | "GITLAB_SELF_MANAGED"
  | "S3"
  | "BITBUCKET"
  | "GITHUB_ENTERPRISE"
  | "NO_SOURCE";
export interface SSMSession {
  sessionId?: string;
  tokenValue?: string;
  streamUrl?: string;
}
export interface StartBuildBatchInput {
  projectName: string;
  secondarySourcesOverride?: Array<ProjectSource>;
  secondarySourcesVersionOverride?: Array<ProjectSourceVersion>;
  sourceVersion?: string;
  artifactsOverride?: ProjectArtifacts;
  secondaryArtifactsOverride?: Array<ProjectArtifacts>;
  environmentVariablesOverride?: Array<EnvironmentVariable>;
  sourceTypeOverride?: SourceType;
  sourceLocationOverride?: string;
  sourceAuthOverride?: SourceAuth;
  gitCloneDepthOverride?: number;
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;
  buildspecOverride?: string;
  insecureSslOverride?: boolean;
  reportBuildBatchStatusOverride?: boolean;
  environmentTypeOverride?: EnvironmentType;
  imageOverride?: string;
  computeTypeOverride?: ComputeType;
  certificateOverride?: string;
  cacheOverride?: ProjectCache;
  serviceRoleOverride?: string;
  privilegedModeOverride?: boolean;
  buildTimeoutInMinutesOverride?: number;
  queuedTimeoutInMinutesOverride?: number;
  encryptionKeyOverride?: string;
  idempotencyToken?: string;
  logsConfigOverride?: LogsConfig;
  registryCredentialOverride?: RegistryCredential;
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType;
  buildBatchConfigOverride?: ProjectBuildBatchConfig;
  debugSessionEnabled?: boolean;
}
export interface StartBuildBatchOutput {
  buildBatch?: BuildBatch;
}
export interface StartBuildInput {
  projectName: string;
  secondarySourcesOverride?: Array<ProjectSource>;
  secondarySourcesVersionOverride?: Array<ProjectSourceVersion>;
  sourceVersion?: string;
  artifactsOverride?: ProjectArtifacts;
  secondaryArtifactsOverride?: Array<ProjectArtifacts>;
  environmentVariablesOverride?: Array<EnvironmentVariable>;
  sourceTypeOverride?: SourceType;
  sourceLocationOverride?: string;
  sourceAuthOverride?: SourceAuth;
  gitCloneDepthOverride?: number;
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;
  buildspecOverride?: string;
  insecureSslOverride?: boolean;
  reportBuildStatusOverride?: boolean;
  buildStatusConfigOverride?: BuildStatusConfig;
  environmentTypeOverride?: EnvironmentType;
  imageOverride?: string;
  computeTypeOverride?: ComputeType;
  certificateOverride?: string;
  cacheOverride?: ProjectCache;
  serviceRoleOverride?: string;
  privilegedModeOverride?: boolean;
  timeoutInMinutesOverride?: number;
  queuedTimeoutInMinutesOverride?: number;
  encryptionKeyOverride?: string;
  idempotencyToken?: string;
  logsConfigOverride?: LogsConfig;
  registryCredentialOverride?: RegistryCredential;
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType;
  debugSessionEnabled?: boolean;
  fleetOverride?: ProjectFleet;
  autoRetryLimitOverride?: number;
}
export interface StartBuildOutput {
  build?: Build;
}
export interface StartCommandExecutionInput {
  sandboxId: string;
  command: string;
  type?: CommandType;
}
export interface StartCommandExecutionOutput {
  commandExecution?: CommandExecution;
}
export interface StartSandboxConnectionInput {
  sandboxId: string;
}
export interface StartSandboxConnectionOutput {
  ssmSession?: SSMSession;
}
export interface StartSandboxInput {
  projectName?: string;
  idempotencyToken?: string;
}
export interface StartSandboxOutput {
  sandbox?: Sandbox;
}
export type StatusType =
  | "SUCCEEDED"
  | "FAILED"
  | "FAULT"
  | "TIMED_OUT"
  | "IN_PROGRESS"
  | "STOPPED";
export interface StopBuildBatchInput {
  id: string;
}
export interface StopBuildBatchOutput {
  buildBatch?: BuildBatch;
}
export interface StopBuildInput {
  id: string;
}
export interface StopBuildOutput {
  build?: Build;
}
export interface StopSandboxInput {
  id: string;
}
export interface StopSandboxOutput {
  sandbox?: Sandbox;
}
export type Subnets = Array<string>;
export interface Tag {
  key?: string;
  value?: string;
}
export type TagList = Array<Tag>;
export interface TargetTrackingScalingConfiguration {
  metricType?: FleetScalingMetricType;
  targetValue?: number;
}
export type TargetTrackingScalingConfigurations =
  Array<TargetTrackingScalingConfiguration>;
export interface TestCase {
  reportArn?: string;
  testRawDataPath?: string;
  prefix?: string;
  name?: string;
  status?: string;
  durationInNanoSeconds?: number;
  message?: string;
  expired?: Date | string;
  testSuiteName?: string;
}
export interface TestCaseFilter {
  status?: string;
  keyword?: string;
}
export type TestCases = Array<TestCase>;
export interface TestReportSummary {
  total: number;
  statusCounts: Record<string, number>;
  durationInNanoSeconds: number;
}
export type TimeOut = number;

export type Timestamp = Date | string;

export interface UpdateFleetInput {
  arn: string;
  baseCapacity?: number;
  environmentType?: EnvironmentType;
  computeType?: ComputeType;
  computeConfiguration?: ComputeConfiguration;
  scalingConfiguration?: ScalingConfigurationInput;
  overflowBehavior?: FleetOverflowBehavior;
  vpcConfig?: VpcConfig;
  proxyConfiguration?: ProxyConfiguration;
  imageId?: string;
  fleetServiceRole?: string;
  tags?: Array<Tag>;
}
export interface UpdateFleetOutput {
  fleet?: Fleet;
}
export interface UpdateProjectInput {
  name: string;
  description?: string;
  source?: ProjectSource;
  secondarySources?: Array<ProjectSource>;
  sourceVersion?: string;
  secondarySourceVersions?: Array<ProjectSourceVersion>;
  artifacts?: ProjectArtifacts;
  secondaryArtifacts?: Array<ProjectArtifacts>;
  cache?: ProjectCache;
  environment?: ProjectEnvironment;
  serviceRole?: string;
  timeoutInMinutes?: number;
  queuedTimeoutInMinutes?: number;
  encryptionKey?: string;
  tags?: Array<Tag>;
  vpcConfig?: VpcConfig;
  badgeEnabled?: boolean;
  logsConfig?: LogsConfig;
  fileSystemLocations?: Array<ProjectFileSystemLocation>;
  buildBatchConfig?: ProjectBuildBatchConfig;
  concurrentBuildLimit?: number;
  autoRetryLimit?: number;
}
export interface UpdateProjectOutput {
  project?: Project;
}
export interface UpdateProjectVisibilityInput {
  projectArn: string;
  projectVisibility: ProjectVisibilityType;
  resourceAccessRole?: string;
}
export interface UpdateProjectVisibilityOutput {
  projectArn?: string;
  publicProjectAlias?: string;
  projectVisibility?: ProjectVisibilityType;
}
export interface UpdateReportGroupInput {
  arn: string;
  exportConfig?: ReportExportConfig;
  tags?: Array<Tag>;
}
export interface UpdateReportGroupOutput {
  reportGroup?: ReportGroup;
}
export interface UpdateWebhookInput {
  projectName: string;
  branchFilter?: string;
  rotateSecret?: boolean;
  filterGroups?: Array<Array<WebhookFilter>>;
  buildType?: WebhookBuildType;
}
export interface UpdateWebhookOutput {
  webhook?: Webhook;
}
export type ValueInput = string;

export interface VpcConfig {
  vpcId?: string;
  subnets?: Array<string>;
  securityGroupIds?: Array<string>;
}
export interface Webhook {
  url?: string;
  payloadUrl?: string;
  secret?: string;
  branchFilter?: string;
  filterGroups?: Array<Array<WebhookFilter>>;
  buildType?: WebhookBuildType;
  manualCreation?: boolean;
  lastModifiedSecret?: Date | string;
  scopeConfiguration?: ScopeConfiguration;
  status?: WebhookStatus;
  statusMessage?: string;
}
export type WebhookBuildType =
  | "BUILD"
  | "BUILD_BATCH"
  | "RUNNER_BUILDKITE_BUILD";
export interface WebhookFilter {
  type: WebhookFilterType;
  pattern: string;
  excludeMatchedPattern?: boolean;
}
export type WebhookFilterType =
  | "EVENT"
  | "BASE_REF"
  | "HEAD_REF"
  | "ACTOR_ACCOUNT_ID"
  | "FILE_PATH"
  | "COMMIT_MESSAGE"
  | "WORKFLOW_NAME"
  | "TAG_NAME"
  | "RELEASE_NAME"
  | "REPOSITORY_NAME"
  | "ORGANIZATION_NAME";
export type WebhookScopeType =
  | "GITHUB_ORGANIZATION"
  | "GITHUB_GLOBAL"
  | "GITLAB_GROUP";
export type WebhookStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "DELETING";
export type WrapperBoolean = boolean;

export type WrapperDouble = number;

export type WrapperInt = number;

export type WrapperLong = number;

export declare namespace BatchDeleteBuilds {
  export type Input = BatchDeleteBuildsInput;
  export type Output = BatchDeleteBuildsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace BatchGetBuildBatches {
  export type Input = BatchGetBuildBatchesInput;
  export type Output = BatchGetBuildBatchesOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace BatchGetBuilds {
  export type Input = BatchGetBuildsInput;
  export type Output = BatchGetBuildsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace BatchGetCommandExecutions {
  export type Input = BatchGetCommandExecutionsInput;
  export type Output = BatchGetCommandExecutionsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace BatchGetFleets {
  export type Input = BatchGetFleetsInput;
  export type Output = BatchGetFleetsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace BatchGetProjects {
  export type Input = BatchGetProjectsInput;
  export type Output = BatchGetProjectsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace BatchGetReportGroups {
  export type Input = BatchGetReportGroupsInput;
  export type Output = BatchGetReportGroupsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace BatchGetReports {
  export type Input = BatchGetReportsInput;
  export type Output = BatchGetReportsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace BatchGetSandboxes {
  export type Input = BatchGetSandboxesInput;
  export type Output = BatchGetSandboxesOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace CreateFleet {
  export type Input = CreateFleetInput;
  export type Output = CreateFleetOutput;
  export type Error =
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreateProject {
  export type Input = CreateProjectInput;
  export type Output = CreateProjectOutput;
  export type Error =
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreateReportGroup {
  export type Input = CreateReportGroupInput;
  export type Output = CreateReportGroupOutput;
  export type Error =
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CreateWebhook {
  export type Input = CreateWebhookInput;
  export type Output = CreateWebhookOutput;
  export type Error =
    | InvalidInputException
    | OAuthProviderException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteBuildBatch {
  export type Input = DeleteBuildBatchInput;
  export type Output = DeleteBuildBatchOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace DeleteFleet {
  export type Input = DeleteFleetInput;
  export type Output = DeleteFleetOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace DeleteProject {
  export type Input = DeleteProjectInput;
  export type Output = DeleteProjectOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace DeleteReport {
  export type Input = DeleteReportInput;
  export type Output = DeleteReportOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace DeleteReportGroup {
  export type Input = DeleteReportGroupInput;
  export type Output = DeleteReportGroupOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyInput;
  export type Output = DeleteResourcePolicyOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace DeleteSourceCredentials {
  export type Input = DeleteSourceCredentialsInput;
  export type Output = DeleteSourceCredentialsOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteWebhook {
  export type Input = DeleteWebhookInput;
  export type Output = DeleteWebhookOutput;
  export type Error =
    | InvalidInputException
    | OAuthProviderException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeCodeCoverages {
  export type Input = DescribeCodeCoveragesInput;
  export type Output = DescribeCodeCoveragesOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace DescribeTestCases {
  export type Input = DescribeTestCasesInput;
  export type Output = DescribeTestCasesOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetReportGroupTrend {
  export type Input = GetReportGroupTrendInput;
  export type Output = GetReportGroupTrendOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyInput;
  export type Output = GetResourcePolicyOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ImportSourceCredentials {
  export type Input = ImportSourceCredentialsInput;
  export type Output = ImportSourceCredentialsOutput;
  export type Error =
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceAlreadyExistsException
    | CommonAwsError;
}

export declare namespace InvalidateProjectCache {
  export type Input = InvalidateProjectCacheInput;
  export type Output = InvalidateProjectCacheOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBuildBatches {
  export type Input = ListBuildBatchesInput;
  export type Output = ListBuildBatchesOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace ListBuildBatchesForProject {
  export type Input = ListBuildBatchesForProjectInput;
  export type Output = ListBuildBatchesForProjectOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListBuilds {
  export type Input = ListBuildsInput;
  export type Output = ListBuildsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace ListBuildsForProject {
  export type Input = ListBuildsForProjectInput;
  export type Output = ListBuildsForProjectOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListCommandExecutionsForSandbox {
  export type Input = ListCommandExecutionsForSandboxInput;
  export type Output = ListCommandExecutionsForSandboxOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListCuratedEnvironmentImages {
  export type Input = ListCuratedEnvironmentImagesInput;
  export type Output = ListCuratedEnvironmentImagesOutput;
  export type Error = CommonAwsError;
}

export declare namespace ListFleets {
  export type Input = ListFleetsInput;
  export type Output = ListFleetsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace ListProjects {
  export type Input = ListProjectsInput;
  export type Output = ListProjectsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace ListReportGroups {
  export type Input = ListReportGroupsInput;
  export type Output = ListReportGroupsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace ListReports {
  export type Input = ListReportsInput;
  export type Output = ListReportsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace ListReportsForReportGroup {
  export type Input = ListReportsForReportGroupInput;
  export type Output = ListReportsForReportGroupOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListSandboxes {
  export type Input = ListSandboxesInput;
  export type Output = ListSandboxesOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace ListSandboxesForProject {
  export type Input = ListSandboxesForProjectInput;
  export type Output = ListSandboxesForProjectOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListSharedProjects {
  export type Input = ListSharedProjectsInput;
  export type Output = ListSharedProjectsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace ListSharedReportGroups {
  export type Input = ListSharedReportGroupsInput;
  export type Output = ListSharedReportGroupsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace ListSourceCredentials {
  export type Input = ListSourceCredentialsInput;
  export type Output = ListSourceCredentialsOutput;
  export type Error = InvalidInputException | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyInput;
  export type Output = PutResourcePolicyOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RetryBuild {
  export type Input = RetryBuildInput;
  export type Output = RetryBuildOutput;
  export type Error =
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace RetryBuildBatch {
  export type Input = RetryBuildBatchInput;
  export type Output = RetryBuildBatchOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartBuild {
  export type Input = StartBuildInput;
  export type Output = StartBuildOutput;
  export type Error =
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartBuildBatch {
  export type Input = StartBuildBatchInput;
  export type Output = StartBuildBatchOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartCommandExecution {
  export type Input = StartCommandExecutionInput;
  export type Output = StartCommandExecutionOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartSandbox {
  export type Input = StartSandboxInput;
  export type Output = StartSandboxOutput;
  export type Error =
    | AccountSuspendedException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartSandboxConnection {
  export type Input = StartSandboxConnectionInput;
  export type Output = StartSandboxConnectionOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopBuild {
  export type Input = StopBuildInput;
  export type Output = StopBuildOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopBuildBatch {
  export type Input = StopBuildBatchInput;
  export type Output = StopBuildBatchOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopSandbox {
  export type Input = StopSandboxInput;
  export type Output = StopSandboxOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateFleet {
  export type Input = UpdateFleetInput;
  export type Output = UpdateFleetOutput;
  export type Error =
    | AccountLimitExceededException
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateProject {
  export type Input = UpdateProjectInput;
  export type Output = UpdateProjectOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateProjectVisibility {
  export type Input = UpdateProjectVisibilityInput;
  export type Output = UpdateProjectVisibilityOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateReportGroup {
  export type Input = UpdateReportGroupInput;
  export type Output = UpdateReportGroupOutput;
  export type Error =
    | InvalidInputException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateWebhook {
  export type Input = UpdateWebhookInput;
  export type Output = UpdateWebhookOutput;
  export type Error =
    | InvalidInputException
    | OAuthProviderException
    | ResourceNotFoundException
    | CommonAwsError;
}
