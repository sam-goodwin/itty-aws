import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface IotSenateService {
  createSuiteDefinition(
    input: CreateSuiteDefinitionRequest,
  ): Effect.Effect<
    CreateSuiteDefinitionResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  deleteSuiteDefinition(
    input: DeleteSuiteDefinitionRequest,
  ): Effect.Effect<
    DeleteSuiteDefinitionResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  getEndpoint(
    input: GetEndpointRequest,
  ): Effect.Effect<
    GetEndpointResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getSuiteDefinition(
    input: GetSuiteDefinitionRequest,
  ): Effect.Effect<
    GetSuiteDefinitionResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getSuiteRun(
    input: GetSuiteRunRequest,
  ): Effect.Effect<
    GetSuiteRunResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  getSuiteRunReport(
    input: GetSuiteRunReportRequest,
  ): Effect.Effect<
    GetSuiteRunReportResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  listSuiteDefinitions(
    input: ListSuiteDefinitionsRequest,
  ): Effect.Effect<
    ListSuiteDefinitionsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listSuiteRuns(
    input: ListSuiteRunsRequest,
  ): Effect.Effect<
    ListSuiteRunsResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  startSuiteRun(
    input: StartSuiteRunRequest,
  ): Effect.Effect<
    StartSuiteRunResponse,
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError
  >;
  stopSuiteRun(
    input: StopSuiteRunRequest,
  ): Effect.Effect<
    StopSuiteRunResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  updateSuiteDefinition(
    input: UpdateSuiteDefinitionRequest,
  ): Effect.Effect<
    UpdateSuiteDefinitionResponse,
    InternalServerException | ValidationException | CommonAwsError
  >;
}

export type Iotdeviceadvisor = IotSenateService;

export type AmazonResourceName = string;

export type AuthenticationMethod =
  | "X509ClientCertificate"
  | "SignatureVersion4";
export type ClientToken = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateSuiteDefinitionRequest {
  suiteDefinitionConfiguration: SuiteDefinitionConfiguration;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreateSuiteDefinitionResponse {
  suiteDefinitionId?: string;
  suiteDefinitionArn?: string;
  suiteDefinitionName?: string;
  createdAt?: Date | string;
}
export interface DeleteSuiteDefinitionRequest {
  suiteDefinitionId: string;
}
export interface DeleteSuiteDefinitionResponse {}
export interface DeviceUnderTest {
  thingArn?: string;
  certificateArn?: string;
  deviceRoleArn?: string;
}
export type DeviceUnderTestList = Array<DeviceUnderTest>;
export type Endpoint = string;

export type ErrorReason = string;

export type Failure = string;

export interface GetEndpointRequest {
  thingArn?: string;
  certificateArn?: string;
  deviceRoleArn?: string;
  authenticationMethod?: AuthenticationMethod;
}
export interface GetEndpointResponse {
  endpoint?: string;
}
export interface GetSuiteDefinitionRequest {
  suiteDefinitionId: string;
  suiteDefinitionVersion?: string;
}
export interface GetSuiteDefinitionResponse {
  suiteDefinitionId?: string;
  suiteDefinitionArn?: string;
  suiteDefinitionVersion?: string;
  latestVersion?: string;
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
  createdAt?: Date | string;
  lastModifiedAt?: Date | string;
  tags?: Record<string, string>;
}
export interface GetSuiteRunReportRequest {
  suiteDefinitionId: string;
  suiteRunId: string;
}
export interface GetSuiteRunReportResponse {
  qualificationReportDownloadUrl?: string;
}
export interface GetSuiteRunRequest {
  suiteDefinitionId: string;
  suiteRunId: string;
}
export interface GetSuiteRunResponse {
  suiteDefinitionId?: string;
  suiteDefinitionVersion?: string;
  suiteRunId?: string;
  suiteRunArn?: string;
  suiteRunConfiguration?: SuiteRunConfiguration;
  testResult?: TestResult;
  startTime?: Date | string;
  endTime?: Date | string;
  status?: SuiteRunStatus;
  errorReason?: string;
  tags?: Record<string, string>;
}
export type GroupName = string;

export interface GroupResult {
  groupId?: string;
  groupName?: string;
  tests?: Array<TestCaseRun>;
}
export type GroupResultList = Array<GroupResult>;
export type IntendedForQualificationBoolean = boolean;

export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export type IsLongDurationTestBoolean = boolean;

export interface ListSuiteDefinitionsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListSuiteDefinitionsResponse {
  suiteDefinitionInformationList?: Array<SuiteDefinitionInformation>;
  nextToken?: string;
}
export interface ListSuiteRunsRequest {
  suiteDefinitionId?: string;
  suiteDefinitionVersion?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSuiteRunsResponse {
  suiteRunsList?: Array<SuiteRunInformation>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type LogUrl = string;

export type MaxResults = number;

export type Message = string;

export type ParallelRun = boolean;

export type Protocol =
  | "MqttV3_1_1"
  | "MqttV5"
  | "MqttV3_1_1_OverWebSocket"
  | "MqttV5_OverWebSocket";
export type QualificationReportDownloadUrl = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RootGroup = string;

export type SelectedTestList = Array<string>;
export interface StartSuiteRunRequest {
  suiteDefinitionId: string;
  suiteDefinitionVersion?: string;
  suiteRunConfiguration: SuiteRunConfiguration;
  tags?: Record<string, string>;
}
export interface StartSuiteRunResponse {
  suiteRunId?: string;
  suiteRunArn?: string;
  createdAt?: Date | string;
  endpoint?: string;
}
export type Status =
  | "PASS"
  | "FAIL"
  | "CANCELED"
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "PASS_WITH_WARNINGS"
  | "ERROR";
export interface StopSuiteRunRequest {
  suiteDefinitionId: string;
  suiteRunId: string;
}
export interface StopSuiteRunResponse {}
export type String128 = string;

export type String256 = string;

export interface SuiteDefinitionConfiguration {
  suiteDefinitionName: string;
  devices?: Array<DeviceUnderTest>;
  intendedForQualification?: boolean;
  isLongDurationTest?: boolean;
  rootGroup: string;
  devicePermissionRoleArn: string;
  protocol?: Protocol;
}
export interface SuiteDefinitionInformation {
  suiteDefinitionId?: string;
  suiteDefinitionName?: string;
  defaultDevices?: Array<DeviceUnderTest>;
  intendedForQualification?: boolean;
  isLongDurationTest?: boolean;
  protocol?: Protocol;
  createdAt?: Date | string;
}
export type SuiteDefinitionInformationList = Array<SuiteDefinitionInformation>;
export type SuiteDefinitionName = string;

export type SuiteDefinitionVersion = string;

export interface SuiteRunConfiguration {
  primaryDevice: DeviceUnderTest;
  selectedTestList?: Array<string>;
  parallelRun?: boolean;
}
export interface SuiteRunInformation {
  suiteDefinitionId?: string;
  suiteDefinitionVersion?: string;
  suiteDefinitionName?: string;
  suiteRunId?: string;
  createdAt?: Date | string;
  startedAt?: Date | string;
  endAt?: Date | string;
  status?: SuiteRunStatus;
  passed?: number;
  failed?: number;
}
export type SuiteRunResultCount = number;

export type SuiteRunsList = Array<SuiteRunInformation>;
export type SuiteRunStatus =
  | "PASS"
  | "FAIL"
  | "CANCELED"
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "PASS_WITH_WARNINGS"
  | "ERROR";
export type SystemMessage = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {}
export type TestCaseDefinitionName = string;

export interface TestCaseRun {
  testCaseRunId?: string;
  testCaseDefinitionId?: string;
  testCaseDefinitionName?: string;
  status?: Status;
  startTime?: Date | string;
  endTime?: Date | string;
  logUrl?: string;
  warnings?: string;
  failure?: string;
  testScenarios?: Array<TestCaseScenario>;
}
export type TestCaseRuns = Array<TestCaseRun>;
export interface TestCaseScenario {
  testCaseScenarioId?: string;
  testCaseScenarioType?: TestCaseScenarioType;
  status?: TestCaseScenarioStatus;
  failure?: string;
  systemMessage?: string;
}
export type TestCaseScenarioId = string;

export type TestCaseScenariosList = Array<TestCaseScenario>;
export type TestCaseScenarioStatus =
  | "PASS"
  | "FAIL"
  | "CANCELED"
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "PASS_WITH_WARNINGS"
  | "ERROR";
export type TestCaseScenarioType = "Advanced" | "Basic";
export interface TestResult {
  groups?: Array<GroupResult>;
}
export type Timestamp = Date | string;

export type Token = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateSuiteDefinitionRequest {
  suiteDefinitionId: string;
  suiteDefinitionConfiguration: SuiteDefinitionConfiguration;
}
export interface UpdateSuiteDefinitionResponse {
  suiteDefinitionId?: string;
  suiteDefinitionArn?: string;
  suiteDefinitionName?: string;
  suiteDefinitionVersion?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
}
export type UUID = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type Warnings = string;

export declare namespace CreateSuiteDefinition {
  export type Input = CreateSuiteDefinitionRequest;
  export type Output = CreateSuiteDefinitionResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteSuiteDefinition {
  export type Input = DeleteSuiteDefinitionRequest;
  export type Output = DeleteSuiteDefinitionResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEndpoint {
  export type Input = GetEndpointRequest;
  export type Output = GetEndpointResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSuiteDefinition {
  export type Input = GetSuiteDefinitionRequest;
  export type Output = GetSuiteDefinitionResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSuiteRun {
  export type Input = GetSuiteRunRequest;
  export type Output = GetSuiteRunResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetSuiteRunReport {
  export type Input = GetSuiteRunReportRequest;
  export type Output = GetSuiteRunReportResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSuiteDefinitions {
  export type Input = ListSuiteDefinitionsRequest;
  export type Output = ListSuiteDefinitionsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSuiteRuns {
  export type Input = ListSuiteRunsRequest;
  export type Output = ListSuiteRunsResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSuiteRun {
  export type Input = StartSuiteRunRequest;
  export type Output = StartSuiteRunResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StopSuiteRun {
  export type Input = StopSuiteRunRequest;
  export type Output = StopSuiteRunResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateSuiteDefinition {
  export type Input = UpdateSuiteDefinitionRequest;
  export type Output = UpdateSuiteDefinitionResponse;
  export type Error =
    | InternalServerException
    | ValidationException
    | CommonAwsError;
}
