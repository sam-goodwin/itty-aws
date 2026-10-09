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
const CancelTaskInput = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<CancelTaskInput>;
export interface CancelTaskOutput {
  taskId?: string;
}
const CancelTaskOutput = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<CancelTaskOutput>;
export type TargetList = string[];
const TargetList = /*@__PURE__*/ __L.at(__c0, 2);
export interface Unlock {}
const Unlock = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<Unlock>;
export interface Reboot {}
const Reboot = Unlock as any as S.Schema<Reboot>;
export type Command = { unlock: Unlock; reboot?: never } | { unlock?: never; reboot: Reboot };
const Command = /*@__PURE__*/ __L.at(__c0, 4);
export type TaskDescriptionString = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c0, 5);
export type IdempotencyToken = string;
export interface CreateTaskInput {
  targets: string[];
  command: Command;
  description?: string;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
}
const CreateTaskInput = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<CreateTaskInput>;
export interface CreateTaskOutput {
  taskId?: string;
  taskArn?: string;
}
const CreateTaskOutput = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<CreateTaskOutput>;
export type ManagedDeviceId = string;
export interface DescribeDeviceInput {
  managedDeviceId: string;
}
const DescribeDeviceInput = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<DescribeDeviceInput>;
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
const PhysicalNetworkInterface = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<PhysicalNetworkInterface>;
export type PhysicalNetworkInterfaceList = PhysicalNetworkInterface[];
const PhysicalNetworkInterfaceList = /*@__PURE__*/ __L.at(__c1, 2);
export interface Capacity {
  name?: string;
  unit?: string;
  total?: number;
  used?: number;
  available?: number;
}
const Capacity = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<Capacity>;
export type CapacityList = Capacity[];
const CapacityList = /*@__PURE__*/ __L.at(__c1, 4);
export interface SoftwareInformation {
  installedVersion?: string;
  installingVersion?: string;
  installState?: string;
}
const SoftwareInformation = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<SoftwareInformation>;
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
const DescribeDeviceOutput = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<DescribeDeviceOutput>;
export type InstanceIdsList = string[];
const InstanceIdsList = TargetList as any as S.Schema<InstanceIdsList>;
export interface DescribeDeviceEc2Input {
  managedDeviceId: string;
  instanceIds: string[];
}
const DescribeDeviceEc2Input = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<DescribeDeviceEc2Input>;
export type InstanceStateName = string;
export interface InstanceState {
  code?: number;
  name?: string;
}
const InstanceState = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<InstanceState>;
export type AttachmentStatus = string;
export interface EbsInstanceBlockDevice {
  attachTime?: Date;
  deleteOnTermination?: boolean;
  status?: string;
  volumeId?: string;
}
const EbsInstanceBlockDevice = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<EbsInstanceBlockDevice>;
export interface InstanceBlockDeviceMapping {
  deviceName?: string;
  ebs?: EbsInstanceBlockDevice;
}
const InstanceBlockDeviceMapping = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<InstanceBlockDeviceMapping>;
export type InstanceBlockDeviceMappingList = InstanceBlockDeviceMapping[];
const InstanceBlockDeviceMappingList = /*@__PURE__*/ __L.at(__c2, 3);
export interface SecurityGroupIdentifier {
  groupId?: string;
  groupName?: string;
}
const SecurityGroupIdentifier = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<SecurityGroupIdentifier>;
export type SecurityGroupIdentifierList = SecurityGroupIdentifier[];
const SecurityGroupIdentifierList = /*@__PURE__*/ __L.at(__c2, 5);
export interface CpuOptions {
  coreCount?: number;
  threadsPerCore?: number;
}
const CpuOptions = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<CpuOptions>;
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
const Instance = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<Instance>;
export interface InstanceSummary {
  instance?: Instance;
  lastUpdatedAt?: Date;
}
const InstanceSummary = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<InstanceSummary>;
export type InstanceSummaryList = InstanceSummary[];
const InstanceSummaryList = /*@__PURE__*/ __L.at(__c3, 1);
export interface DescribeDeviceEc2Output {
  instances?: InstanceSummary[];
}
const DescribeDeviceEc2Output = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<DescribeDeviceEc2Output>;
export interface DescribeExecutionInput {
  taskId: string;
  managedDeviceId: string;
}
const DescribeExecutionInput = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<DescribeExecutionInput>;
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
const DescribeExecutionOutput = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<DescribeExecutionOutput>;
export interface DescribeTaskInput {
  taskId: string;
}
const DescribeTaskInput = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<DescribeTaskInput>;
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
const DescribeTaskOutput = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<DescribeTaskOutput>;
export type MaxResults = number;
export type NextToken = string;
export interface ListDeviceResourcesInput {
  managedDeviceId: string;
  type?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListDeviceResourcesInput = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<ListDeviceResourcesInput>;
export interface ResourceSummary {
  resourceType: string;
  arn?: string;
  id?: string;
}
const ResourceSummary = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<ResourceSummary>;
export type ResourceSummaryList = ResourceSummary[];
const ResourceSummaryList = /*@__PURE__*/ __L.at(__c4, 1);
export interface ListDeviceResourcesOutput {
  resources?: ResourceSummary[];
  nextToken?: string;
}
const ListDeviceResourcesOutput = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<ListDeviceResourcesOutput>;
export type JobId = string;
export interface ListDevicesInput {
  jobId?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListDevicesInput = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<ListDevicesInput>;
export interface DeviceSummary {
  managedDeviceId?: string;
  managedDeviceArn?: string;
  associatedWithJob?: string;
  tags?: { [key: string]: string | undefined };
}
const DeviceSummary = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<DeviceSummary>;
export type DeviceSummaryList = DeviceSummary[];
const DeviceSummaryList = /*@__PURE__*/ __L.at(__c4, 5);
export interface ListDevicesOutput {
  devices?: DeviceSummary[];
  nextToken?: string;
}
const ListDevicesOutput = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<ListDevicesOutput>;
export interface ListExecutionsInput {
  taskId: string;
  state?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListExecutionsInput = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<ListExecutionsInput>;
export interface ExecutionSummary {
  taskId?: string;
  executionId?: string;
  managedDeviceId?: string;
  state?: string;
}
const ExecutionSummary = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ExecutionSummary>;
export type ExecutionSummaryList = ExecutionSummary[];
const ExecutionSummaryList = /*@__PURE__*/ __L.at(__c5, 1);
export interface ListExecutionsOutput {
  executions?: ExecutionSummary[];
  nextToken?: string;
}
const ListExecutionsOutput = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<ListExecutionsOutput>;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<ListTagsForResourceOutput>;
export interface ListTasksInput {
  state?: string;
  maxResults?: number;
  nextToken?: string;
}
const ListTasksInput = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<ListTasksInput>;
export interface TaskSummary {
  taskId: string;
  taskArn?: string;
  state?: string;
  tags?: { [key: string]: string | undefined };
}
const TaskSummary = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<TaskSummary>;
export type TaskSummaryList = TaskSummary[];
const TaskSummaryList = /*@__PURE__*/ __L.at(__c5, 7);
export interface ListTasksOutput {
  tasks?: TaskSummary[];
  nextToken?: string;
}
const ListTasksOutput = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<ListTasksOutput>;
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<TagResourceInput>;
export interface TagResourceResponse {}
const TagResourceResponse = Unlock as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = TargetList as any as S.Schema<TagKeys>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceResponse {}
const UntagResourceResponse = Unlock as any as S.Schema<UntagResourceResponse>;
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
  input: CancelTaskInput,
  output: CancelTaskOutput,
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
  input: CreateTaskInput,
  output: CreateTaskOutput,
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
  input: DescribeDeviceInput,
  output: DescribeDeviceOutput,
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
  input: DescribeDeviceEc2Input,
  output: DescribeDeviceEc2Output,
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
  input: DescribeExecutionInput,
  output: DescribeExecutionOutput,
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
  input: DescribeTaskInput,
  output: DescribeTaskOutput,
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
  input: ListDeviceResourcesInput,
  output: ListDeviceResourcesOutput,
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
  input: ListDevicesInput,
  output: ListDevicesOutput,
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
  input: ListExecutionsInput,
  output: ListExecutionsOutput,
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
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
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
  input: ListTasksInput,
  output: ListTasksOutput,
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
  input: TagResourceInput,
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
 * Removes a tag from a device or task.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceInput,
  output: UntagResourceResponse,
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
        /*@__PURE__*/ S.Struct({ unlock: Unlock }),
        /*@__PURE__*/ S.Struct({ reboot: Reboot }),
      ]);
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          targets: TargetList,
          command: Command,
          description: S.optional(S.String),
          tags: S.optional(TagMap),
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
      return S.Array(PhysicalNetworkInterface);
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
      return S.Array(Capacity);
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
          tags: S.optional(TagMap),
          managedDeviceId: S.optional(S.String),
          managedDeviceArn: S.optional(S.String),
          deviceType: S.optional(S.String),
          associatedWithJob: S.optional(S.String),
          deviceState: S.optional(S.String),
          physicalNetworkInterfaces: S.optional(PhysicalNetworkInterfaceList),
          deviceCapacities: S.optional(CapacityList),
          software: S.optional(SoftwareInformation),
        }),
      ).annotate({ identifier: "DescribeDeviceOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          managedDeviceId: S.String.pipe(T.HttpLabel("managedDeviceId")),
          instanceIds: InstanceIdsList,
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
        S.Struct({ deviceName: S.optional(S.String), ebs: S.optional(EbsInstanceBlockDevice) }),
      ).annotate({
        identifier: "InstanceBlockDeviceMapping",
      });
    case 3:
      return S.Array(InstanceBlockDeviceMapping);
    case 4:
      return S.suspend(() =>
        S.Struct({ groupId: S.optional(S.String), groupName: S.optional(S.String) }),
      ).annotate({ identifier: "SecurityGroupIdentifier" });
    case 5:
      return S.Array(SecurityGroupIdentifier);
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
          state: S.optional(InstanceState),
          instanceType: S.optional(S.String),
          privateIpAddress: S.optional(S.String),
          publicIpAddress: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          blockDeviceMappings: S.optional(InstanceBlockDeviceMappingList),
          securityGroups: S.optional(SecurityGroupIdentifierList),
          cpuOptions: S.optional(CpuOptions),
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
          instance: S.optional(Instance),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "InstanceSummary" });
    case 1:
      return S.Array(InstanceSummary);
    case 2:
      return S.suspend(() => S.Struct({ instances: S.optional(InstanceSummaryList) })).annotate({
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
          targets: S.optional(TargetList),
          state: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          completedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          description: S.optional(S.String),
          tags: S.optional(TagMap),
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
      return S.Array(ResourceSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ resources: S.optional(ResourceSummaryList), nextToken: S.optional(S.String) }),
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
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "DeviceSummary" });
    case 5:
      return S.Array(DeviceSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ devices: S.optional(DeviceSummaryList), nextToken: S.optional(S.String) }),
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
      return S.Array(ExecutionSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ executions: S.optional(ExecutionSummaryList), nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
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
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "TaskSummary" });
    case 7:
      return S.Array(TaskSummary);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tasks: S.optional(TaskSummaryList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTasksOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
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
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
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
