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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Snow Device Management",
  serviceShapeName: "SnowDeviceManagement",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "snow-device-management" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-08-04");
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
              `https://snow-device-management-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://snow-device-management-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://snow-device-management.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://snow-device-management.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type TaskId = string;
export interface CancelTaskInput {
  taskId: string;
}
export interface CancelTaskOutput {
  taskId?: string;
}
export type TargetList = string[];
export interface Unlock {}
export interface Reboot {}
export type Command = { unlock: Unlock; reboot?: never } | { unlock?: never; reboot: Reboot };
export type TaskDescriptionString = string;
export type TagMap = { [key: string]: string | undefined };
export type IdempotencyToken = string;
export interface CreateTaskInput {
  targets: string[];
  command: Command;
  description?: string;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
export interface CreateTaskOutput {
  taskId?: string;
  taskArn?: string;
}
export type ManagedDeviceId = string;
export interface DescribeDeviceInput {
  managedDeviceId: string;
}
export type UnlockState = string;
export type PhysicalConnectorType = string;
export type IpAddressAssignment = string;
export interface PhysicalNetworkInterface {
  physicalNetworkInterfaceId?: string;
  physicalConnectorType?: string;
  ipAddressAssignment?: string;
  ipAddress?: string;
  netmask?: string;
  defaultGateway?: string;
  macAddress?: string;
}
export type PhysicalNetworkInterfaceList = PhysicalNetworkInterface[];
export interface Capacity {
  name?: string;
  unit?: string;
  total?: number;
  used?: number;
  available?: number;
}
export type CapacityList = Capacity[];
export interface SoftwareInformation {
  installedVersion?: string;
  installingVersion?: string;
  installState?: string;
}
export interface DescribeDeviceOutput {
  lastReachedOutAt?: Date;
  lastUpdatedAt?: Date;
  tags?: { [key: string]: string | undefined };
  managedDeviceId?: string;
  managedDeviceArn?: string;
  deviceType?: string;
  associatedWithJob?: string;
  deviceState?: string;
  physicalNetworkInterfaces?: PhysicalNetworkInterface[];
  deviceCapacities?: Capacity[];
  software?: SoftwareInformation;
}
export type InstanceIdsList = string[];
export interface DescribeDeviceEc2Input {
  managedDeviceId: string;
  instanceIds: string[];
}
export type InstanceStateName = string;
export interface InstanceState {
  code?: number;
  name?: string;
}
export type AttachmentStatus = string;
export interface EbsInstanceBlockDevice {
  attachTime?: Date;
  deleteOnTermination?: boolean;
  status?: string;
  volumeId?: string;
}
export interface InstanceBlockDeviceMapping {
  deviceName?: string;
  ebs?: EbsInstanceBlockDevice;
}
export type InstanceBlockDeviceMappingList = InstanceBlockDeviceMapping[];
export interface SecurityGroupIdentifier {
  groupId?: string;
  groupName?: string;
}
export type SecurityGroupIdentifierList = SecurityGroupIdentifier[];
export interface CpuOptions {
  coreCount?: number;
  threadsPerCore?: number;
}
export interface Instance {
  imageId?: string;
  amiLaunchIndex?: number;
  instanceId?: string;
  state?: InstanceState;
  instanceType?: string;
  privateIpAddress?: string;
  publicIpAddress?: string;
  createdAt?: Date;
  updatedAt?: Date;
  blockDeviceMappings?: InstanceBlockDeviceMapping[];
  securityGroups?: SecurityGroupIdentifier[];
  cpuOptions?: CpuOptions;
  rootDeviceName?: string;
}
export interface InstanceSummary {
  instance?: Instance;
  lastUpdatedAt?: Date;
}
export type InstanceSummaryList = InstanceSummary[];
export interface DescribeDeviceEc2Output {
  instances?: InstanceSummary[];
}
export interface DescribeExecutionInput {
  taskId: string;
  managedDeviceId: string;
}
export type ExecutionId = string;
export type ExecutionState = string;
export interface DescribeExecutionOutput {
  taskId?: string;
  executionId?: string;
  managedDeviceId?: string;
  state?: string;
  startedAt?: Date;
  lastUpdatedAt?: Date;
}
export interface DescribeTaskInput {
  taskId: string;
}
export type TaskState = string;
export interface DescribeTaskOutput {
  taskId?: string;
  taskArn?: string;
  targets?: string[];
  state?: string;
  createdAt?: Date;
  lastUpdatedAt?: Date;
  completedAt?: Date;
  description?: string;
  tags?: { [key: string]: string | undefined };
}
export type MaxResults = number;
export type NextToken = string;
export interface ListDeviceResourcesInput {
  managedDeviceId: string;
  type?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ResourceSummary {
  resourceType: string;
  arn?: string;
  id?: string;
}
export type ResourceSummaryList = ResourceSummary[];
export interface ListDeviceResourcesOutput {
  resources?: ResourceSummary[];
  nextToken?: string;
}
export type JobId = string;
export interface ListDevicesInput {
  jobId?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DeviceSummary {
  managedDeviceId?: string;
  managedDeviceArn?: string;
  associatedWithJob?: string;
  tags?: { [key: string]: string | undefined };
}
export type DeviceSummaryList = DeviceSummary[];
export interface ListDevicesOutput {
  devices?: DeviceSummary[];
  nextToken?: string;
}
export interface ListExecutionsInput {
  taskId: string;
  state?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ExecutionSummary {
  taskId?: string;
  executionId?: string;
  managedDeviceId?: string;
  state?: string;
}
export type ExecutionSummaryList = ExecutionSummary[];
export interface ListExecutionsOutput {
  executions?: ExecutionSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  tags?: { [key: string]: string | undefined };
}
export interface ListTasksInput {
  state?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface TaskSummary {
  taskId: string;
  taskArn?: string;
  state?: string;
  tags?: { [key: string]: string | undefined };
}
export type TaskSummaryList = TaskSummary[];
export interface ListTasksOutput {
  tasks?: TaskSummary[];
  nextToken?: string;
}
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export type CancelTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a cancel request for a specified task. You can cancel a task only if it's still in a
 * `QUEUED` state. Tasks that are already running can't be cancelled.
 *
 * A task might still run if it's processed from the queue before the
 * `CancelTask` operation changes the task's state.
 */
export const cancelTask: API.OperationMethod<
  CancelTaskInput,
  CancelTaskOutput,
  CancelTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<CancelTaskInput>,
  output: __S(1) as any as S.Schema<CancelTaskOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelTask",
}));

export type CreateTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Instructs one or more devices to start a task, such as unlocking or rebooting.
 */
export const createTask: API.OperationMethod<
  CreateTaskInput,
  CreateTaskOutput,
  CreateTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<CreateTaskInput>,
  output: __S(7) as any as S.Schema<CreateTaskOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTask",
}));

export type DescribeDeviceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Checks device-specific information, such as the device type, software version, IP
 * addresses, and lock status.
 */
export const describeDevice: API.OperationMethod<
  DescribeDeviceInput,
  DescribeDeviceOutput,
  DescribeDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8) as any as S.Schema<DescribeDeviceInput>,
  output: __S(14) as any as S.Schema<DescribeDeviceOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDevice",
}));

export type DescribeDeviceEc2InstancesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Checks the current state of the Amazon EC2 instances. The output is similar to
 * `describeDevice`, but the results are sourced from the device cache in the
 * Amazon Web Services Cloud and include a subset of the available fields.
 */
export const describeDeviceEc2Instances: API.OperationMethod<
  DescribeDeviceEc2Input,
  DescribeDeviceEc2Output,
  DescribeDeviceEc2InstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<DescribeDeviceEc2Input>,
  output: __S(26) as any as S.Schema<DescribeDeviceEc2Output>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDeviceEc2Instances",
}));

export type DescribeExecutionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Checks the status of a remote task running on one or more target devices.
 */
export const describeExecution: API.OperationMethod<
  DescribeExecutionInput,
  DescribeExecutionOutput,
  DescribeExecutionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<DescribeExecutionInput>,
  output: __S(28) as any as S.Schema<DescribeExecutionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeExecution",
}));

export type DescribeTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Checks the metadata for a given task on a device.
 */
export const describeTask: API.OperationMethod<
  DescribeTaskInput,
  DescribeTaskOutput,
  DescribeTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<DescribeTaskInput>,
  output: __S(30) as any as S.Schema<DescribeTaskOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTask",
}));

export type ListDeviceResourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.
 */
export const listDeviceResources: API.PaginatedOperationMethod<
  ListDeviceResourcesInput,
  ListDeviceResourcesOutput,
  ListDeviceResourcesError,
  Credentials | HttpClient.HttpClient,
  ResourceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(31) as any as S.Schema<ListDeviceResourcesInput>,
  output: __S(34) as any as S.Schema<ListDeviceResourcesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeviceResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDevicesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management
 * enabled in the Amazon Web Services Region where the command is run.
 */
export const listDevices: API.PaginatedOperationMethod<
  ListDevicesInput,
  ListDevicesOutput,
  ListDevicesError,
  Credentials | HttpClient.HttpClient,
  DeviceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(35) as any as S.Schema<ListDevicesInput>,
  output: __S(38) as any as S.Schema<ListDevicesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevices",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "devices",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExecutionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the status of tasks for one or more target devices.
 */
export const listExecutions: API.PaginatedOperationMethod<
  ListExecutionsInput,
  ListExecutionsOutput,
  ListExecutionsError,
  Credentials | HttpClient.HttpClient,
  ExecutionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(39) as any as S.Schema<ListExecutionsInput>,
  output: __S(42) as any as S.Schema<ListExecutionsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExecutions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "executions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of tags for a managed device or task.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(44) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTasksError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of tasks that can be filtered by state.
 */
export const listTasks: API.PaginatedOperationMethod<
  ListTasksInput,
  ListTasksOutput,
  ListTasksError,
  Credentials | HttpClient.HttpClient,
  TaskSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(45) as any as S.Schema<ListTasksInput>,
  output: __S(48) as any as S.Schema<ListTasksOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTasks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tasks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds or replaces tags on a device or task.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<TagResourceInput>,
  output: __S(3) as any as S.Schema<TagResourceResponse>,
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
 * Removes a tag from a device or task.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<UntagResourceInput>,
  output: __S(3) as any as S.Schema<UntagResourceResponse>,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/task/{taskId}/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CancelTaskInput" });
    case 1:
      return S.suspend(() => S.Struct({ taskId: S.optional(S.String) })).annotate({
        identifier: "CancelTaskOutput",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "Unlock",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ unlock: __S(3) }),
        /*@__PURE__*/ S.Struct({ reboot: __S(3) }),
      ]);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          targets: __S(2),
          command: __S(4),
          description: S.optional(S.String),
          tags: S.optional(__S(5)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/task" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTaskInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ taskId: S.optional(S.String), taskArn: S.optional(S.String) }),
      ).annotate({ identifier: "CreateTaskOutput" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ managedDeviceId: S.String.pipe(T.HttpLabel("managedDeviceId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/managed-device/{managedDeviceId}/describe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeDeviceInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          physicalNetworkInterfaceId: S.optional(S.String),
          physicalConnectorType: S.optional(S.String),
          ipAddressAssignment: S.optional(S.String),
          ipAddress: S.optional(S.String),
          netmask: S.optional(S.String),
          defaultGateway: S.optional(S.String),
          macAddress: S.optional(S.String),
        }),
      ).annotate({ identifier: "PhysicalNetworkInterface" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          unit: S.optional(S.String),
          total: S.optional(S.Number),
          used: S.optional(S.Number),
          available: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Capacity" });
    case 4:
      return S.Array(__S(11));
    case 5:
      return S.suspend(() =>
        S.Struct({
          installedVersion: S.optional(S.String),
          installingVersion: S.optional(S.String),
          installState: S.optional(S.String),
        }),
      ).annotate({ identifier: "SoftwareInformation" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          lastReachedOutAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(5)),
          managedDeviceId: S.optional(S.String),
          managedDeviceArn: S.optional(S.String),
          deviceType: S.optional(S.String),
          associatedWithJob: S.optional(S.String),
          deviceState: S.optional(S.String),
          physicalNetworkInterfaces: S.optional(__S(10)),
          deviceCapacities: S.optional(__S(12)),
          software: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "DescribeDeviceOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          managedDeviceId: S.String.pipe(T.HttpLabel("managedDeviceId")),
          instanceIds: __S(2),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/managed-device/{managedDeviceId}/resources/ec2/describe",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeDeviceEc2Input" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.Number), name: S.optional(S.String) }),
      ).annotate({ identifier: "InstanceState" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          attachTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          deleteOnTermination: S.optional(S.Boolean),
          status: S.optional(S.String),
          volumeId: S.optional(S.String),
        }),
      ).annotate({ identifier: "EbsInstanceBlockDevice" });
    case 2:
      return S.suspend(() =>
        S.Struct({ deviceName: S.optional(S.String), ebs: S.optional(__S(17)) }),
      ).annotate({
        identifier: "InstanceBlockDeviceMapping",
      });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({ groupId: S.optional(S.String), groupName: S.optional(S.String) }),
      ).annotate({ identifier: "SecurityGroupIdentifier" });
    case 5:
      return S.Array(__S(20));
    case 6:
      return S.suspend(() =>
        S.Struct({ coreCount: S.optional(S.Number), threadsPerCore: S.optional(S.Number) }),
      ).annotate({ identifier: "CpuOptions" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          imageId: S.optional(S.String),
          amiLaunchIndex: S.optional(S.Number),
          instanceId: S.optional(S.String),
          state: S.optional(__S(16)),
          instanceType: S.optional(S.String),
          privateIpAddress: S.optional(S.String),
          publicIpAddress: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          blockDeviceMappings: S.optional(__S(19)),
          securityGroups: S.optional(__S(21)),
          cpuOptions: S.optional(__S(22)),
          rootDeviceName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Instance" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          instance: S.optional(__S(23)),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "InstanceSummary" });
    case 1:
      return S.Array(__S(24));
    case 2:
      return S.suspend(() => S.Struct({ instances: S.optional(__S(25)) })).annotate({
        identifier: "DescribeDeviceEc2Output",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String.pipe(T.HttpLabel("taskId")),
          managedDeviceId: S.String.pipe(T.HttpLabel("managedDeviceId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/task/{taskId}/execution/{managedDeviceId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeExecutionInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          executionId: S.optional(S.String),
          managedDeviceId: S.optional(S.String),
          state: S.optional(S.String),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DescribeExecutionOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ taskId: S.String.pipe(T.HttpLabel("taskId")) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/task/{taskId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeTaskInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          taskArn: S.optional(S.String),
          targets: S.optional(__S(2)),
          state: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          description: S.optional(S.String),
          tags: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "DescribeTaskOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          managedDeviceId: S.String.pipe(T.HttpLabel("managedDeviceId")),
          type: S.optional(S.String).pipe(T.HttpQuery("type")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/managed-device/{managedDeviceId}/resources" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDeviceResourcesInput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceType: S.String, arn: S.optional(S.String), id: S.optional(S.String) }),
      ).annotate({ identifier: "ResourceSummary" });
    case 1:
      return S.Array(__S(32));
    case 2:
      return S.suspend(() =>
        S.Struct({ resources: S.optional(__S(33)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListDeviceResourcesOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          jobId: S.optional(S.String).pipe(T.HttpQuery("jobId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/managed-devices" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDevicesInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          managedDeviceId: S.optional(S.String),
          managedDeviceArn: S.optional(S.String),
          associatedWithJob: S.optional(S.String),
          tags: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "DeviceSummary" });
    case 5:
      return S.Array(__S(36));
    case 6:
      return S.suspend(() =>
        S.Struct({ devices: S.optional(__S(37)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDevicesOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String.pipe(T.HttpQuery("taskId")),
          state: S.optional(S.String).pipe(T.HttpQuery("state")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/executions" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListExecutionsInput" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          executionId: S.optional(S.String),
          managedDeviceId: S.optional(S.String),
          state: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExecutionSummary" });
    case 1:
      return S.Array(__S(40));
    case 2:
      return S.suspend(() =>
        S.Struct({ executions: S.optional(__S(41)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListExecutionsOutput" });
    case 3:
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
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 4:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(5)) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          state: S.optional(S.String).pipe(T.HttpQuery("state")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/tasks" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTasksInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          taskId: S.String,
          taskArn: S.optional(S.String),
          state: S.optional(S.String),
          tags: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "TaskSummary" });
    case 7:
      return S.Array(__S(46));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tasks: S.optional(__S(47)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTasksOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(5) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(2).pipe(T.HttpQuery("tagKeys")),
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
      ).annotate({ identifier: "UntagResourceInput" });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
  }
}
