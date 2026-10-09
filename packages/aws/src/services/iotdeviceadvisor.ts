import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "IotDeviceAdvisor",
  serviceShapeName: "IotSenateService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "iotdeviceadvisor" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-09-18");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://api.iotdeviceadvisor-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://api.iotdeviceadvisor-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://api.iotdeviceadvisor.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://api.iotdeviceadvisor.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type SuiteDefinitionName = string;
export type AmazonResourceName = string;
export interface DeviceUnderTest {
  thingArn?: string;
  certificateArn?: string;
  deviceRoleArn?: string;
}
const DeviceUnderTest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<DeviceUnderTest>;
export type DeviceUnderTestList = DeviceUnderTest[];
const DeviceUnderTestList = /*@__PURE__*/ __L.at(__c0, 1);
export type IntendedForQualificationBoolean = boolean;
export type IsLongDurationTestBoolean = boolean;
export type RootGroup = string;
export type Protocol =
  | "MqttV3_1_1"
  | "MqttV5"
  | "MqttV3_1_1_OverWebSocket"
  | "MqttV5_OverWebSocket"
  | (string & {});
const Protocol = S.String;

export interface SuiteDefinitionConfiguration {
  suiteDefinitionName?: string;
  devices?: DeviceUnderTest[];
  intendedForQualification?: boolean;
  isLongDurationTest?: boolean;
  rootGroup?: string;
  devicePermissionRoleArn?: string;
  protocol?: Protocol;
}
const SuiteDefinitionConfiguration = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<SuiteDefinitionConfiguration>;
export type String128 = string;
export type String256 = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c0, 3);
export type ClientToken = string;
export interface CreateSuiteDefinitionRequest {
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
const CreateSuiteDefinitionRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CreateSuiteDefinitionRequest>;
export type UUID = string;
export interface CreateSuiteDefinitionResponse {
  suiteDefinitionId?: string;
  suiteDefinitionArn?: string;
  suiteDefinitionName?: string;
  createdAt?: Date;
}
const CreateSuiteDefinitionResponse = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<CreateSuiteDefinitionResponse>;
export interface DeleteSuiteDefinitionRequest {
  suiteDefinitionId: string;
}
const DeleteSuiteDefinitionRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<DeleteSuiteDefinitionRequest>;
export interface DeleteSuiteDefinitionResponse {}
const DeleteSuiteDefinitionResponse = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<DeleteSuiteDefinitionResponse>;
export type AuthenticationMethod = "X509ClientCertificate" | "SignatureVersion4" | (string & {});
const AuthenticationMethod = S.String;

export interface GetEndpointRequest {
  thingArn?: string;
  certificateArn?: string;
  deviceRoleArn?: string;
  authenticationMethod?: AuthenticationMethod;
}
const GetEndpointRequest = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<GetEndpointRequest>;
export type Endpoint = string;
export interface GetEndpointResponse {
  endpoint?: string;
}
const GetEndpointResponse = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<GetEndpointResponse>;
export type SuiteDefinitionVersion = string;
export interface GetSuiteDefinitionRequest {
  suiteDefinitionId: string;
  suiteDefinitionVersion?: string;
}
const GetSuiteDefinitionRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<GetSuiteDefinitionRequest>;
export interface GetSuiteDefinitionResponse {
  suiteDefinitionId?: string;
  suiteDefinitionArn?: string;
  suiteDefinitionVersion?: string;
  latestVersion?: string;
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration & {
    suiteDefinitionName: SuiteDefinitionName;
    rootGroup: RootGroup;
    devicePermissionRoleArn: AmazonResourceName;
  };
  createdAt?: Date;
  lastModifiedAt?: Date;
  tags?: { [key: string]: string | undefined };
}
const GetSuiteDefinitionResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<GetSuiteDefinitionResponse>;
export interface GetSuiteRunRequest {
  suiteDefinitionId: string;
  suiteRunId: string;
}
const GetSuiteRunRequest = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<GetSuiteRunRequest>;
export type SelectedTestList = string[];
const SelectedTestList = /*@__PURE__*/ __L.at(__c1, 5);
export type ParallelRun = boolean;
export interface SuiteRunConfiguration {
  primaryDevice?: DeviceUnderTest;
  selectedTestList?: string[];
  parallelRun?: boolean;
}
const SuiteRunConfiguration = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<SuiteRunConfiguration>;
export type GroupName = string;
export type TestCaseDefinitionName = string;
export type Status =
  | "PASS"
  | "FAIL"
  | "CANCELED"
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "PASS_WITH_WARNINGS"
  | "ERROR"
  | (string & {});
const Status = S.String;

export type LogUrl = string;
export type Warnings = string;
export type Failure = string;
export type TestCaseScenarioId = string;
export type TestCaseScenarioType = "Advanced" | "Basic" | (string & {});
const TestCaseScenarioType = S.String;

export type TestCaseScenarioStatus =
  | "PASS"
  | "FAIL"
  | "CANCELED"
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "PASS_WITH_WARNINGS"
  | "ERROR"
  | (string & {});
const TestCaseScenarioStatus = S.String;

export type SystemMessage = string;
export interface TestCaseScenario {
  testCaseScenarioId?: string;
  testCaseScenarioType?: TestCaseScenarioType;
  status?: TestCaseScenarioStatus;
  failure?: string;
  systemMessage?: string;
}
const TestCaseScenario = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<TestCaseScenario>;
export type TestCaseScenariosList = TestCaseScenario[];
const TestCaseScenariosList = /*@__PURE__*/ __L.at(__c2, 0);
export interface TestCaseRun {
  testCaseRunId?: string;
  testCaseDefinitionId?: string;
  testCaseDefinitionName?: string;
  status?: Status;
  startTime?: Date;
  endTime?: Date;
  logUrl?: string;
  warnings?: string;
  failure?: string;
  testScenarios?: TestCaseScenario[];
}
const TestCaseRun = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<TestCaseRun>;
export type TestCaseRuns = TestCaseRun[];
const TestCaseRuns = /*@__PURE__*/ __L.at(__c2, 2);
export interface GroupResult {
  groupId?: string;
  groupName?: string;
  tests?: TestCaseRun[];
}
const GroupResult = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<GroupResult>;
export type GroupResultList = GroupResult[];
const GroupResultList = /*@__PURE__*/ __L.at(__c2, 4);
export interface TestResult {
  groups?: GroupResult[];
}
const TestResult = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<TestResult>;
export type SuiteRunStatus =
  | "PASS"
  | "FAIL"
  | "CANCELED"
  | "PENDING"
  | "RUNNING"
  | "STOPPING"
  | "STOPPED"
  | "PASS_WITH_WARNINGS"
  | "ERROR"
  | (string & {});
const SuiteRunStatus = S.String;

export type ErrorReason = string;
export interface GetSuiteRunResponse {
  suiteDefinitionId?: string;
  suiteDefinitionVersion?: string;
  suiteRunId?: string;
  suiteRunArn?: string;
  suiteRunConfiguration?: SuiteRunConfiguration & { primaryDevice: DeviceUnderTest };
  testResult?: TestResult;
  startTime?: Date;
  endTime?: Date;
  status?: SuiteRunStatus;
  errorReason?: string;
  tags?: { [key: string]: string | undefined };
}
const GetSuiteRunResponse = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<GetSuiteRunResponse>;
export interface GetSuiteRunReportRequest {
  suiteDefinitionId: string;
  suiteRunId: string;
}
const GetSuiteRunReportRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<GetSuiteRunReportRequest>;
export type QualificationReportDownloadUrl = string;
export interface GetSuiteRunReportResponse {
  qualificationReportDownloadUrl?: string;
}
const GetSuiteRunReportResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<GetSuiteRunReportResponse>;
export type MaxResults = number;
export type Token = string;
export interface ListSuiteDefinitionsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListSuiteDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<ListSuiteDefinitionsRequest>;
export interface SuiteDefinitionInformation {
  suiteDefinitionId?: string;
  suiteDefinitionName?: string;
  defaultDevices?: DeviceUnderTest[];
  intendedForQualification?: boolean;
  isLongDurationTest?: boolean;
  protocol?: Protocol;
  createdAt?: Date;
}
const SuiteDefinitionInformation = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<SuiteDefinitionInformation>;
export type SuiteDefinitionInformationList = SuiteDefinitionInformation[];
const SuiteDefinitionInformationList = /*@__PURE__*/ __L.at(__c3, 3);
export interface ListSuiteDefinitionsResponse {
  suiteDefinitionInformationList?: SuiteDefinitionInformation[];
  nextToken?: string;
}
const ListSuiteDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<ListSuiteDefinitionsResponse>;
export interface ListSuiteRunsRequest {
  suiteDefinitionId?: string;
  suiteDefinitionVersion?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListSuiteRunsRequest = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<ListSuiteRunsRequest>;
export type SuiteRunResultCount = number;
export interface SuiteRunInformation {
  suiteDefinitionId?: string;
  suiteDefinitionVersion?: string;
  suiteDefinitionName?: string;
  suiteRunId?: string;
  createdAt?: Date;
  startedAt?: Date;
  endAt?: Date;
  status?: SuiteRunStatus;
  passed?: number;
  failed?: number;
}
const SuiteRunInformation = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<SuiteRunInformation>;
export type SuiteRunsList = SuiteRunInformation[];
const SuiteRunsList = /*@__PURE__*/ __L.at(__c3, 7);
export interface ListSuiteRunsResponse {
  suiteRunsList?: SuiteRunInformation[];
  nextToken?: string;
}
const ListSuiteRunsResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<ListSuiteRunsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface StartSuiteRunRequest {
  suiteDefinitionId: string;
  suiteDefinitionVersion?: string;
  suiteRunConfiguration?: SuiteRunConfiguration;
  tags?: { [key: string]: string | undefined };
}
const StartSuiteRunRequest = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<StartSuiteRunRequest>;
export interface StartSuiteRunResponse {
  suiteRunId?: string;
  suiteRunArn?: string;
  createdAt?: Date;
  endpoint?: string;
}
const StartSuiteRunResponse = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<StartSuiteRunResponse>;
export interface StopSuiteRunRequest {
  suiteDefinitionId: string;
  suiteRunId: string;
}
const StopSuiteRunRequest = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<StopSuiteRunRequest>;
export interface StopSuiteRunResponse {}
const StopSuiteRunResponse = DeleteSuiteDefinitionResponse as any as S.Schema<StopSuiteRunResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags?: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteSuiteDefinitionResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = SelectedTestList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys?: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  DeleteSuiteDefinitionResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateSuiteDefinitionRequest {
  suiteDefinitionId: string;
  suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
}
const UpdateSuiteDefinitionRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<UpdateSuiteDefinitionRequest>;
export interface UpdateSuiteDefinitionResponse {
  suiteDefinitionId?: string;
  suiteDefinitionArn?: string;
  suiteDefinitionName?: string;
  suiteDefinitionVersion?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
const UpdateSuiteDefinitionResponse = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<UpdateSuiteDefinitionResponse>;
export type Message = string;
export type CreateSuiteDefinitionError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Device Advisor test suite.
 *
 * Requires permission to access the CreateSuiteDefinition action.
 */
export const createSuiteDefinition: API.OperationMethod<
  CreateSuiteDefinitionRequest,
  CreateSuiteDefinitionResponse,
  CreateSuiteDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSuiteDefinitionRequest,
  output: CreateSuiteDefinitionResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSuiteDefinition",
}));

export type DeleteSuiteDefinitionError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Device Advisor test suite.
 *
 * Requires permission to access the DeleteSuiteDefinition action.
 */
export const deleteSuiteDefinition: API.OperationMethod<
  DeleteSuiteDefinitionRequest,
  DeleteSuiteDefinitionResponse,
  DeleteSuiteDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSuiteDefinitionRequest,
  output: DeleteSuiteDefinitionResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSuiteDefinition",
}));

export type GetEndpointError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about an Device Advisor endpoint.
 */
export const getEndpoint: API.OperationMethod<
  GetEndpointRequest,
  GetEndpointResponse,
  GetEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEndpointRequest,
  output: GetEndpointResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEndpoint",
}));

export type GetSuiteDefinitionError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a Device Advisor test suite.
 *
 * Requires permission to access the GetSuiteDefinition action.
 */
export const getSuiteDefinition: API.OperationMethod<
  GetSuiteDefinitionRequest,
  GetSuiteDefinitionResponse,
  GetSuiteDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSuiteDefinitionRequest,
  output: GetSuiteDefinitionResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSuiteDefinition",
}));

export type GetSuiteRunError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a Device Advisor test suite run.
 *
 * Requires permission to access the GetSuiteRun action.
 */
export const getSuiteRun: API.OperationMethod<
  GetSuiteRunRequest,
  GetSuiteRunResponse,
  GetSuiteRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSuiteRunRequest,
  output: GetSuiteRunResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSuiteRun",
}));

export type GetSuiteRunReportError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets a report download link for a successful Device Advisor qualifying test suite run.
 *
 * Requires permission to access the GetSuiteRunReport action.
 */
export const getSuiteRunReport: API.OperationMethod<
  GetSuiteRunReportRequest,
  GetSuiteRunReportResponse,
  GetSuiteRunReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSuiteRunReportRequest,
  output: GetSuiteRunReportResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSuiteRunReport",
}));

export type ListSuiteDefinitionsError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Device Advisor test suites you have created.
 *
 * Requires permission to access the ListSuiteDefinitions action.
 */
export const listSuiteDefinitions: API.PaginatedOperationMethod<
  ListSuiteDefinitionsRequest,
  ListSuiteDefinitionsResponse,
  ListSuiteDefinitionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSuiteDefinitionsRequest,
  output: ListSuiteDefinitionsResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSuiteDefinitions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSuiteRunsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Lists runs of the specified Device Advisor test suite. You can list all runs of the test
 * suite, or the runs of a specific version of the test suite.
 *
 * Requires permission to access the ListSuiteRuns action.
 */
export const listSuiteRuns: API.PaginatedOperationMethod<
  ListSuiteRunsRequest,
  ListSuiteRunsResponse,
  ListSuiteRunsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSuiteRunsRequest,
  output: ListSuiteRunsResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSuiteRuns",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags attached to an IoT Device Advisor resource.
 *
 * Requires permission to access the ListTagsForResource action.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartSuiteRunError =
  | ConflictException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Starts a Device Advisor test suite run.
 *
 * Requires permission to access the StartSuiteRun action.
 */
export const startSuiteRun: API.OperationMethod<
  StartSuiteRunRequest,
  StartSuiteRunResponse,
  StartSuiteRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartSuiteRunRequest,
  output: StartSuiteRunResponse,
  errors: [ConflictException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSuiteRun",
}));

export type StopSuiteRunError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Stops a Device Advisor test suite run that is currently running.
 *
 * Requires permission to access the StopSuiteRun action.
 */
export const stopSuiteRun: API.OperationMethod<
  StopSuiteRunRequest,
  StopSuiteRunResponse,
  StopSuiteRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopSuiteRunRequest,
  output: StopSuiteRunResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopSuiteRun",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds to and modifies existing tags of an IoT Device Advisor resource.
 *
 * Requires permission to access the TagResource action.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes tags from an IoT Device Advisor resource.
 *
 * Requires permission to access the UntagResource action.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateSuiteDefinitionError =
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Updates a Device Advisor test suite.
 *
 * Requires permission to access the UpdateSuiteDefinition action.
 */
export const updateSuiteDefinition: API.OperationMethod<
  UpdateSuiteDefinitionRequest,
  UpdateSuiteDefinitionResponse,
  UpdateSuiteDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSuiteDefinitionRequest,
  output: UpdateSuiteDefinitionResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSuiteDefinition",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          thingArn: S.optional(S.String),
          certificateArn: S.optional(S.String),
          deviceRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DeviceUnderTest" });
    case 1:
      return S.Array(DeviceUnderTest);
    case 2:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionName: S.optional(S.String),
          devices: S.optional(DeviceUnderTestList),
          intendedForQualification: S.optional(S.Boolean),
          isLongDurationTest: S.optional(S.Boolean),
          rootGroup: S.optional(S.String),
          devicePermissionRoleArn: S.optional(S.String),
          protocol: S.optional(Protocol),
        }),
      ).annotate({
        identifier: "SuiteDefinitionConfiguration",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionConfiguration: S.optional(SuiteDefinitionConfiguration),
          tags: S.optional(TagMap),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/suiteDefinitions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateSuiteDefinitionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.optional(S.String),
          suiteDefinitionArn: S.optional(S.String),
          suiteDefinitionName: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "CreateSuiteDefinitionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ suiteDefinitionId: S.String.pipe(T.HttpLabel("suiteDefinitionId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/suiteDefinitions/{suiteDefinitionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSuiteDefinitionRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteSuiteDefinitionResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          thingArn: S.optional(S.String).pipe(T.HttpQuery("thingArn")),
          certificateArn: S.optional(S.String).pipe(T.HttpQuery("certificateArn")),
          deviceRoleArn: S.optional(S.String).pipe(T.HttpQuery("deviceRoleArn")),
          authenticationMethod: S.optional(AuthenticationMethod).pipe(
            T.HttpQuery("authenticationMethod"),
          ),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/endpoint" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetEndpointRequest" });
    case 1:
      return S.suspend(() => S.Struct({ endpoint: S.optional(S.String) })).annotate({
        identifier: "GetEndpointResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.String.pipe(T.HttpLabel("suiteDefinitionId")),
          suiteDefinitionVersion: S.optional(S.String).pipe(T.HttpQuery("suiteDefinitionVersion")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/suiteDefinitions/{suiteDefinitionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSuiteDefinitionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.optional(S.String),
          suiteDefinitionArn: S.optional(S.String),
          suiteDefinitionVersion: S.optional(S.String),
          latestVersion: S.optional(S.String),
          suiteDefinitionConfiguration: S.optional(SuiteDefinitionConfiguration),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastModifiedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(TagMap),
        }),
      ).annotate({
        identifier: "GetSuiteDefinitionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.String.pipe(T.HttpLabel("suiteDefinitionId")),
          suiteRunId: S.String.pipe(T.HttpLabel("suiteRunId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSuiteRunRequest" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          primaryDevice: S.optional(DeviceUnderTest),
          selectedTestList: S.optional(SelectedTestList),
          parallelRun: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SuiteRunConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          testCaseScenarioId: S.optional(S.String),
          testCaseScenarioType: S.optional(TestCaseScenarioType),
          status: S.optional(TestCaseScenarioStatus),
          failure: S.optional(S.String),
          systemMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "TestCaseScenario" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(TestCaseScenario);
    case 1:
      return S.suspend(() =>
        S.Struct({
          testCaseRunId: S.optional(S.String),
          testCaseDefinitionId: S.optional(S.String),
          testCaseDefinitionName: S.optional(S.String),
          status: S.optional(Status),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          logUrl: S.optional(S.String),
          warnings: S.optional(S.String),
          failure: S.optional(S.String),
          testScenarios: S.optional(TestCaseScenariosList),
        }),
      ).annotate({ identifier: "TestCaseRun" });
    case 2:
      return S.Array(TestCaseRun);
    case 3:
      return S.suspend(() =>
        S.Struct({
          groupId: S.optional(S.String),
          groupName: S.optional(S.String),
          tests: S.optional(TestCaseRuns),
        }),
      ).annotate({ identifier: "GroupResult" });
    case 4:
      return S.Array(GroupResult);
    case 5:
      return S.suspend(() => S.Struct({ groups: S.optional(GroupResultList) })).annotate({
        identifier: "TestResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.optional(S.String),
          suiteDefinitionVersion: S.optional(S.String),
          suiteRunId: S.optional(S.String),
          suiteRunArn: S.optional(S.String),
          suiteRunConfiguration: S.optional(SuiteRunConfiguration),
          testResult: S.optional(TestResult),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(SuiteRunStatus),
          errorReason: S.optional(S.String),
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "GetSuiteRunResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.String.pipe(T.HttpLabel("suiteDefinitionId")),
          suiteRunId: S.String.pipe(T.HttpLabel("suiteRunId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSuiteRunReportRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ qualificationReportDownloadUrl: S.optional(S.String) }),
      ).annotate({
        identifier: "GetSuiteRunReportResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/suiteDefinitions" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListSuiteDefinitionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.optional(S.String),
          suiteDefinitionName: S.optional(S.String),
          defaultDevices: S.optional(DeviceUnderTestList),
          intendedForQualification: S.optional(S.Boolean),
          isLongDurationTest: S.optional(S.Boolean),
          protocol: S.optional(Protocol),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "SuiteDefinitionInformation",
      });
    case 3:
      return S.Array(SuiteDefinitionInformation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionInformationList: S.optional(SuiteDefinitionInformationList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSuiteDefinitionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.optional(S.String).pipe(T.HttpQuery("suiteDefinitionId")),
          suiteDefinitionVersion: S.optional(S.String).pipe(T.HttpQuery("suiteDefinitionVersion")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/suiteRuns" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSuiteRunsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.optional(S.String),
          suiteDefinitionVersion: S.optional(S.String),
          suiteDefinitionName: S.optional(S.String),
          suiteRunId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(SuiteRunStatus),
          passed: S.optional(S.Number),
          failed: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SuiteRunInformation" });
    case 7:
      return S.Array(SuiteRunInformation);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ suiteRunsList: S.optional(SuiteRunsList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSuiteRunsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.String.pipe(T.HttpLabel("suiteDefinitionId")),
          suiteDefinitionVersion: S.optional(S.String),
          suiteRunConfiguration: S.optional(SuiteRunConfiguration),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartSuiteRunRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          suiteRunId: S.optional(S.String),
          suiteRunArn: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endpoint: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartSuiteRunResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.String.pipe(T.HttpLabel("suiteDefinitionId")),
          suiteRunId: S.String.pipe(T.HttpLabel("suiteRunId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopSuiteRunRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: S.optional(TagKeyList).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.String.pipe(T.HttpLabel("suiteDefinitionId")),
          suiteDefinitionConfiguration: S.optional(SuiteDefinitionConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/suiteDefinitions/{suiteDefinitionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSuiteDefinitionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          suiteDefinitionId: S.optional(S.String),
          suiteDefinitionArn: S.optional(S.String),
          suiteDefinitionName: S.optional(S.String),
          suiteDefinitionVersion: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "UpdateSuiteDefinitionResponse",
      });
  }
}
