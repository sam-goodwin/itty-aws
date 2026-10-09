import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Backup Gateway",
  serviceShapeName: "BackupOnPremises_v20210101",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "backup-gateway" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-01-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
              `https://backup-gateway-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://backup-gateway-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://backup-gateway.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://backup-gateway.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      ErrorCode: S.String,
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      ErrorCode: S.String,
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      ErrorCode: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export type GatewayArn = string;
export type ServerArn = string;
export interface AssociateGatewayToServerInput {
  GatewayArn: string;
  ServerArn: string;
}
export interface AssociateGatewayToServerOutput {
  GatewayArn?: string;
}
export type ActivationKey = string;
export type Name = string;
export type GatewayType = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type Tags = Tag[];
export interface CreateGatewayInput {
  ActivationKey: string;
  GatewayDisplayName: string;
  GatewayType: string;
  Tags?: Tag[];
}
export interface CreateGatewayOutput {
  GatewayArn?: string;
}
export interface DeleteGatewayInput {
  GatewayArn: string;
}
export interface DeleteGatewayOutput {
  GatewayArn?: string;
}
export interface DeleteHypervisorInput {
  HypervisorArn: string;
}
export interface DeleteHypervisorOutput {
  HypervisorArn?: string;
}
export interface DisassociateGatewayFromServerInput {
  GatewayArn: string;
}
export interface DisassociateGatewayFromServerOutput {
  GatewayArn?: string;
}
export interface GetBandwidthRateLimitScheduleInput {
  GatewayArn: string;
}
export type AverageUploadRateLimit = number;
export type HourOfDay = number;
export type MinuteOfHour = number;
export type DayOfWeek = number;
export type DaysOfWeek = number[];
export interface BandwidthRateLimitInterval {
  AverageUploadRateLimitInBitsPerSec?: number;
  StartHourOfDay: number;
  EndHourOfDay: number;
  StartMinuteOfHour: number;
  EndMinuteOfHour: number;
  DaysOfWeek: number[];
}
export type BandwidthRateLimitIntervals = BandwidthRateLimitInterval[];
export interface GetBandwidthRateLimitScheduleOutput {
  GatewayArn?: string;
  BandwidthRateLimitIntervals?: BandwidthRateLimitInterval[];
}
export interface GetGatewayInput {
  GatewayArn: string;
}
export type HypervisorId = string;
export type DayOfMonth = number;
export interface MaintenanceStartTime {
  DayOfMonth?: number;
  DayOfWeek?: number;
  HourOfDay: number;
  MinuteOfHour: number;
}
export type VpcEndpoint = string;
export interface GatewayDetails {
  GatewayArn?: string;
  GatewayDisplayName?: string;
  GatewayType?: string;
  HypervisorId?: string;
  LastSeenTime?: Date;
  MaintenanceStartTime?: MaintenanceStartTime;
  NextUpdateAvailabilityTime?: Date;
  VpcEndpoint?: string;
  DeprecationDate?: Date;
  SoftwareVersion?: string;
}
export interface GetGatewayOutput {
  Gateway?: GatewayDetails;
}
export interface GetHypervisorInput {
  HypervisorArn: string;
}
export type Host = string;
export type KmsKeyArn = string;
export type LogGroupArn = string;
export type HypervisorState = string;
export type SyncMetadataStatus = string;
export interface HypervisorDetails {
  Host?: string;
  HypervisorArn?: string;
  KmsKeyArn?: string;
  Name?: string;
  LogGroupArn?: string;
  State?: string;
  LastSuccessfulMetadataSyncTime?: Date;
  LatestMetadataSyncStatusMessage?: string;
  LatestMetadataSyncStatus?: string;
}
export interface GetHypervisorOutput {
  Hypervisor?: HypervisorDetails;
}
export interface GetHypervisorPropertyMappingsInput {
  HypervisorArn: string;
}
export type VmwareCategory = string;
export type VmwareTagName = string;
export interface VmwareToAwsTagMapping {
  VmwareCategory: string;
  VmwareTagName: string;
  AwsTagKey: string;
  AwsTagValue: string;
}
export type VmwareToAwsTagMappings = VmwareToAwsTagMapping[];
export type IamRoleArn = string;
export interface GetHypervisorPropertyMappingsOutput {
  HypervisorArn?: string;
  VmwareToAwsTagMappings?: VmwareToAwsTagMapping[];
  IamRoleArn?: string;
}
export type ResourceArn = string;
export interface GetVirtualMachineInput {
  ResourceArn: string;
}
export type Path = string;
export interface VmwareTag {
  VmwareCategory?: string;
  VmwareTagName?: string;
  VmwareTagDescription?: string;
}
export type VmwareTags = VmwareTag[];
export interface VirtualMachineDetails {
  HostName?: string;
  HypervisorId?: string;
  Name?: string;
  Path?: string;
  ResourceArn?: string;
  LastBackupDate?: Date;
  VmwareTags?: VmwareTag[];
}
export interface GetVirtualMachineOutput {
  VirtualMachine?: VirtualMachineDetails;
}
export type Username = string | redacted.Redacted<string>;
export type Password = string | redacted.Redacted<string>;
export interface ImportHypervisorConfigurationInput {
  Name: string;
  Host: string;
  Username?: string | redacted.Redacted<string>;
  Password?: string | redacted.Redacted<string>;
  KmsKeyArn?: string;
  Tags?: Tag[];
}
export interface ImportHypervisorConfigurationOutput {
  HypervisorArn?: string;
}
export type MaxResults = number;
export type NextToken = string;
export interface ListGatewaysInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface Gateway {
  GatewayArn?: string;
  GatewayDisplayName?: string;
  GatewayType?: string;
  HypervisorId?: string;
  LastSeenTime?: Date;
}
export type Gateways = Gateway[];
export interface ListGatewaysOutput {
  Gateways?: Gateway[];
  NextToken?: string;
}
export interface ListHypervisorsInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface Hypervisor {
  Host?: string;
  HypervisorArn?: string;
  KmsKeyArn?: string;
  Name?: string;
  State?: string;
}
export type Hypervisors = Hypervisor[];
export interface ListHypervisorsOutput {
  Hypervisors?: Hypervisor[];
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  ResourceArn?: string;
  Tags?: Tag[];
}
export interface ListVirtualMachinesInput {
  HypervisorArn?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface VirtualMachine {
  HostName?: string;
  HypervisorId?: string;
  Name?: string;
  Path?: string;
  ResourceArn?: string;
  LastBackupDate?: Date;
}
export type VirtualMachines = VirtualMachine[];
export interface ListVirtualMachinesOutput {
  VirtualMachines?: VirtualMachine[];
  NextToken?: string;
}
export interface PutBandwidthRateLimitScheduleInput {
  GatewayArn: string;
  BandwidthRateLimitIntervals: BandwidthRateLimitInterval[];
}
export interface PutBandwidthRateLimitScheduleOutput {
  GatewayArn?: string;
}
export interface PutHypervisorPropertyMappingsInput {
  HypervisorArn: string;
  VmwareToAwsTagMappings: VmwareToAwsTagMapping[];
  IamRoleArn: string;
}
export interface PutHypervisorPropertyMappingsOutput {
  HypervisorArn?: string;
}
export interface PutMaintenanceStartTimeInput {
  GatewayArn: string;
  HourOfDay: number;
  MinuteOfHour: number;
  DayOfWeek?: number;
  DayOfMonth?: number;
}
export interface PutMaintenanceStartTimeOutput {
  GatewayArn?: string;
}
export interface StartVirtualMachinesMetadataSyncInput {
  HypervisorArn: string;
}
export interface StartVirtualMachinesMetadataSyncOutput {
  HypervisorArn?: string;
}
export interface TagResourceInput {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceOutput {
  ResourceARN?: string;
}
export interface TestHypervisorConfigurationInput {
  GatewayArn: string;
  Host: string;
  Username?: string | redacted.Redacted<string>;
  Password?: string | redacted.Redacted<string>;
}
export interface TestHypervisorConfigurationOutput {}
export type TagKeys = string[];
export interface UntagResourceInput {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceOutput {
  ResourceARN?: string;
}
export interface UpdateGatewayInformationInput {
  GatewayArn: string;
  GatewayDisplayName?: string;
}
export interface UpdateGatewayInformationOutput {
  GatewayArn?: string;
}
export interface UpdateGatewaySoftwareNowInput {
  GatewayArn: string;
}
export interface UpdateGatewaySoftwareNowOutput {
  GatewayArn?: string;
}
export interface UpdateHypervisorInput {
  HypervisorArn: string;
  Host?: string;
  Username?: string | redacted.Redacted<string>;
  Password?: string | redacted.Redacted<string>;
  Name?: string;
  LogGroupArn?: string;
}
export interface UpdateHypervisorOutput {
  HypervisorArn?: string;
}
export type AssociateGatewayToServerError = ConflictException | CommonErrors;
/**
 * Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
 */
export const associateGatewayToServer: API.OperationMethod<
  AssociateGatewayToServerInput,
  AssociateGatewayToServerOutput,
  AssociateGatewayToServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AssociateGatewayToServerInput>,
  output: __S(1) as any as S.Schema<AssociateGatewayToServerOutput>,
  errors: [ConflictException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateGatewayToServer",
}));

export type CreateGatewayError = CommonErrors;
/**
 * Creates a backup gateway. After you create a gateway, you can associate it with a server using the `AssociateGatewayToServer` operation.
 */
export const createGateway: API.OperationMethod<
  CreateGatewayInput,
  CreateGatewayOutput,
  CreateGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4) as any as S.Schema<CreateGatewayInput>,
  output: __S(5) as any as S.Schema<CreateGatewayOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGateway",
}));

export type DeleteGatewayError = ResourceNotFoundException | CommonErrors;
/**
 * Deletes a backup gateway.
 */
export const deleteGateway: API.OperationMethod<
  DeleteGatewayInput,
  DeleteGatewayOutput,
  DeleteGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<DeleteGatewayInput>,
  output: __S(5) as any as S.Schema<DeleteGatewayOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGateway",
}));

export type DeleteHypervisorError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a hypervisor.
 */
export const deleteHypervisor: API.OperationMethod<
  DeleteHypervisorInput,
  DeleteHypervisorOutput,
  DeleteHypervisorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<DeleteHypervisorInput>,
  output: __S(8) as any as S.Schema<DeleteHypervisorOutput>,
  errors: [AccessDeniedException, ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteHypervisor",
}));

export type DisassociateGatewayFromServerError =
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
 */
export const disassociateGatewayFromServer: API.OperationMethod<
  DisassociateGatewayFromServerInput,
  DisassociateGatewayFromServerOutput,
  DisassociateGatewayFromServerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<DisassociateGatewayFromServerInput>,
  output: __S(1) as any as S.Schema<DisassociateGatewayFromServerOutput>,
  errors: [ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateGatewayFromServer",
}));

export type GetBandwidthRateLimitScheduleError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
 */
export const getBandwidthRateLimitSchedule: API.OperationMethod<
  GetBandwidthRateLimitScheduleInput,
  GetBandwidthRateLimitScheduleOutput,
  GetBandwidthRateLimitScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<GetBandwidthRateLimitScheduleInput>,
  output: __S(14) as any as S.Schema<GetBandwidthRateLimitScheduleOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBandwidthRateLimitSchedule",
}));

export type GetGatewayError = ResourceNotFoundException | CommonErrors;
/**
 * By providing the ARN (Amazon Resource Name), this API returns the gateway.
 */
export const getGateway: API.OperationMethod<
  GetGatewayInput,
  GetGatewayOutput,
  GetGatewayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<GetGatewayInput>,
  output: __S(18) as any as S.Schema<GetGatewayOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGateway",
}));

export type GetHypervisorError = ResourceNotFoundException | CommonErrors;
/**
 * This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
 */
export const getHypervisor: API.OperationMethod<
  GetHypervisorInput,
  GetHypervisorOutput,
  GetHypervisorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19) as any as S.Schema<GetHypervisorInput>,
  output: __S(21) as any as S.Schema<GetHypervisorOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHypervisor",
}));

export type GetHypervisorPropertyMappingsError = ResourceNotFoundException | CommonErrors;
/**
 * This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the hypervisor to the properties available in Amazon Web Services.
 */
export const getHypervisorPropertyMappings: API.OperationMethod<
  GetHypervisorPropertyMappingsInput,
  GetHypervisorPropertyMappingsOutput,
  GetHypervisorPropertyMappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<GetHypervisorPropertyMappingsInput>,
  output: __S(25) as any as S.Schema<GetHypervisorPropertyMappingsOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetHypervisorPropertyMappings",
}));

export type GetVirtualMachineError = ResourceNotFoundException | CommonErrors;
/**
 * By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
 */
export const getVirtualMachine: API.OperationMethod<
  GetVirtualMachineInput,
  GetVirtualMachineOutput,
  GetVirtualMachineError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26) as any as S.Schema<GetVirtualMachineInput>,
  output: __S(30) as any as S.Schema<GetVirtualMachineOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVirtualMachine",
}));

export type ImportHypervisorConfigurationError =
  | AccessDeniedException
  | ConflictException
  | CommonErrors;
/**
 * Connect to a hypervisor by importing its configuration.
 */
export const importHypervisorConfiguration: API.OperationMethod<
  ImportHypervisorConfigurationInput,
  ImportHypervisorConfigurationOutput,
  ImportHypervisorConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<ImportHypervisorConfigurationInput>,
  output: __S(32) as any as S.Schema<ImportHypervisorConfigurationOutput>,
  errors: [AccessDeniedException, ConflictException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportHypervisorConfiguration",
}));

export type ListGatewaysError = CommonErrors;
/**
 * Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
 */
export const listGateways: API.PaginatedOperationMethod<
  ListGatewaysInput,
  ListGatewaysOutput,
  ListGatewaysError,
  Credentials | HttpClient.HttpClient,
  Gateway
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(33) as any as S.Schema<ListGatewaysInput>,
  output: __S(36) as any as S.Schema<ListGatewaysOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListGateways",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Gateways",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListHypervisorsError = CommonErrors;
/**
 * Lists your hypervisors.
 */
export const listHypervisors: API.PaginatedOperationMethod<
  ListHypervisorsInput,
  ListHypervisorsOutput,
  ListHypervisorsError,
  Credentials | HttpClient.HttpClient,
  Hypervisor
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(37) as any as S.Schema<ListHypervisorsInput>,
  output: __S(40) as any as S.Schema<ListHypervisorsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListHypervisors",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Hypervisors",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(42) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListVirtualMachinesError = CommonErrors;
/**
 * Lists your virtual machines.
 */
export const listVirtualMachines: API.PaginatedOperationMethod<
  ListVirtualMachinesInput,
  ListVirtualMachinesOutput,
  ListVirtualMachinesError,
  Credentials | HttpClient.HttpClient,
  VirtualMachine
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(43) as any as S.Schema<ListVirtualMachinesInput>,
  output: __S(46) as any as S.Schema<ListVirtualMachinesOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVirtualMachines",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "VirtualMachines",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type PutBandwidthRateLimitScheduleError = ResourceNotFoundException | CommonErrors;
/**
 * This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
 */
export const putBandwidthRateLimitSchedule: API.OperationMethod<
  PutBandwidthRateLimitScheduleInput,
  PutBandwidthRateLimitScheduleOutput,
  PutBandwidthRateLimitScheduleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47) as any as S.Schema<PutBandwidthRateLimitScheduleInput>,
  output: __S(1) as any as S.Schema<PutBandwidthRateLimitScheduleOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutBandwidthRateLimitSchedule",
}));

export type PutHypervisorPropertyMappingsError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the hypervisor to the properties available in Amazon Web Services.
 */
export const putHypervisorPropertyMappings: API.OperationMethod<
  PutHypervisorPropertyMappingsInput,
  PutHypervisorPropertyMappingsOutput,
  PutHypervisorPropertyMappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48) as any as S.Schema<PutHypervisorPropertyMappingsInput>,
  output: __S(32) as any as S.Schema<PutHypervisorPropertyMappingsOutput>,
  errors: [AccessDeniedException, ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutHypervisorPropertyMappings",
}));

export type PutMaintenanceStartTimeError =
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Set the maintenance start time for a gateway.
 */
export const putMaintenanceStartTime: API.OperationMethod<
  PutMaintenanceStartTimeInput,
  PutMaintenanceStartTimeOutput,
  PutMaintenanceStartTimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<PutMaintenanceStartTimeInput>,
  output: __S(1) as any as S.Schema<PutMaintenanceStartTimeOutput>,
  errors: [ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutMaintenanceStartTime",
}));

export type StartVirtualMachinesMetadataSyncError =
  | AccessDeniedException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This action sends a request to sync metadata across the specified virtual machines.
 */
export const startVirtualMachinesMetadataSync: API.OperationMethod<
  StartVirtualMachinesMetadataSyncInput,
  StartVirtualMachinesMetadataSyncOutput,
  StartVirtualMachinesMetadataSyncError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<StartVirtualMachinesMetadataSyncInput>,
  output: __S(32) as any as S.Schema<StartVirtualMachinesMetadataSyncOutput>,
  errors: [AccessDeniedException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartVirtualMachinesMetadataSync",
}));

export type TagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Tag the resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<TagResourceInput>,
  output: __S(52) as any as S.Schema<TagResourceOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type TestHypervisorConfigurationError =
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
 */
export const testHypervisorConfiguration: API.OperationMethod<
  TestHypervisorConfigurationInput,
  TestHypervisorConfigurationOutput,
  TestHypervisorConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<TestHypervisorConfigurationInput>,
  output: __S(54) as any as S.Schema<TestHypervisorConfigurationOutput>,
  errors: [ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TestHypervisorConfiguration",
}));

export type UntagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Removes tags from the resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56) as any as S.Schema<UntagResourceInput>,
  output: __S(52) as any as S.Schema<UntagResourceOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateGatewayInformationError =
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
 */
export const updateGatewayInformation: API.OperationMethod<
  UpdateGatewayInformationInput,
  UpdateGatewayInformationOutput,
  UpdateGatewayInformationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(57) as any as S.Schema<UpdateGatewayInformationInput>,
  output: __S(1) as any as S.Schema<UpdateGatewayInformationOutput>,
  errors: [ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewayInformation",
}));

export type UpdateGatewaySoftwareNowError = ResourceNotFoundException | CommonErrors;
/**
 * Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.
 *
 * When you make this request, you get a `200 OK` success response immediately. However, it might take some time for the update to complete.
 */
export const updateGatewaySoftwareNow: API.OperationMethod<
  UpdateGatewaySoftwareNowInput,
  UpdateGatewaySoftwareNowOutput,
  UpdateGatewaySoftwareNowError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<UpdateGatewaySoftwareNowInput>,
  output: __S(1) as any as S.Schema<UpdateGatewaySoftwareNowOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateGatewaySoftwareNow",
}));

export type UpdateHypervisorError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.
 */
export const updateHypervisor: API.OperationMethod<
  UpdateHypervisorInput,
  UpdateHypervisorOutput,
  UpdateHypervisorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59) as any as S.Schema<UpdateHypervisorInput>,
  output: __S(8) as any as S.Schema<UpdateHypervisorOutput>,
  errors: [AccessDeniedException, ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateHypervisor",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.String, ServerArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateGatewayToServerInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ GatewayArn: S.optional(S.String) })).annotate({
        identifier: "AssociateGatewayToServerOutput",
      });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          ActivationKey: S.String,
          GatewayDisplayName: S.String,
          GatewayType: S.String,
          Tags: S.optional(__S(3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateGatewayInput" });
    case 5:
      return S.suspend(() => S.Struct({ GatewayArn: S.optional(S.String) })).annotate({
        identifier: "CreateGatewayOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteGatewayInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ HypervisorArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteHypervisorInput" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ HypervisorArn: S.optional(S.String) })).annotate({
        identifier: "DeleteHypervisorOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateGatewayFromServerInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetBandwidthRateLimitScheduleInput",
      });
    case 3:
      return S.Array(S.Number);
    case 4:
      return S.suspend(() =>
        S.Struct({
          AverageUploadRateLimitInBitsPerSec: S.optional(S.Number),
          StartHourOfDay: S.Number,
          EndHourOfDay: S.Number,
          StartMinuteOfHour: S.Number,
          EndMinuteOfHour: S.Number,
          DaysOfWeek: __S(11),
        }),
      ).annotate({
        identifier: "BandwidthRateLimitInterval",
      });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({
          GatewayArn: S.optional(S.String),
          BandwidthRateLimitIntervals: S.optional(__S(13)),
        }),
      ).annotate({
        identifier: "GetBandwidthRateLimitScheduleOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGatewayInput" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DayOfMonth: S.optional(S.Number),
          DayOfWeek: S.optional(S.Number),
          HourOfDay: S.Number,
          MinuteOfHour: S.Number,
        }),
      ).annotate({ identifier: "MaintenanceStartTime" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GatewayArn: S.optional(S.String),
          GatewayDisplayName: S.optional(S.String),
          GatewayType: S.optional(S.String),
          HypervisorId: S.optional(S.String),
          LastSeenTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaintenanceStartTime: S.optional(__S(16)),
          NextUpdateAvailabilityTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          VpcEndpoint: S.optional(S.String),
          DeprecationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SoftwareVersion: S.optional(S.String),
        }),
      ).annotate({ identifier: "GatewayDetails" });
    case 2:
      return S.suspend(() => S.Struct({ Gateway: S.optional(__S(17)) })).annotate({
        identifier: "GetGatewayOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ HypervisorArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetHypervisorInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Host: S.optional(S.String),
          HypervisorArn: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          Name: S.optional(S.String),
          LogGroupArn: S.optional(S.String),
          State: S.optional(S.String),
          LastSuccessfulMetadataSyncTime: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
          LatestMetadataSyncStatusMessage: S.optional(S.String),
          LatestMetadataSyncStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "HypervisorDetails" });
    case 5:
      return S.suspend(() => S.Struct({ Hypervisor: S.optional(__S(20)) })).annotate({
        identifier: "GetHypervisorOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ HypervisorArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetHypervisorPropertyMappingsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          VmwareCategory: S.String,
          VmwareTagName: S.String,
          AwsTagKey: S.String,
          AwsTagValue: S.String,
        }),
      ).annotate({ identifier: "VmwareToAwsTagMapping" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23));
    case 1:
      return S.suspend(() =>
        S.Struct({
          HypervisorArn: S.optional(S.String),
          VmwareToAwsTagMappings: S.optional(__S(24)),
          IamRoleArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetHypervisorPropertyMappingsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetVirtualMachineInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VmwareCategory: S.optional(S.String),
          VmwareTagName: S.optional(S.String),
          VmwareTagDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "VmwareTag" });
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() =>
        S.Struct({
          HostName: S.optional(S.String),
          HypervisorId: S.optional(S.String),
          Name: S.optional(S.String),
          Path: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          LastBackupDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          VmwareTags: S.optional(__S(28)),
        }),
      ).annotate({ identifier: "VirtualMachineDetails" });
    case 6:
      return S.suspend(() => S.Struct({ VirtualMachine: S.optional(__S(29)) })).annotate({
        identifier: "GetVirtualMachineOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Host: S.String,
          Username: S.optional(SensitiveString),
          Password: S.optional(SensitiveString),
          KmsKeyArn: S.optional(S.String),
          Tags: S.optional(__S(3)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ImportHypervisorConfigurationInput",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ HypervisorArn: S.optional(S.String) })).annotate({
        identifier: "ImportHypervisorConfigurationOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListGatewaysInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          GatewayArn: S.optional(S.String),
          GatewayDisplayName: S.optional(S.String),
          GatewayType: S.optional(S.String),
          HypervisorId: S.optional(S.String),
          LastSeenTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Gateway" });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({ Gateways: S.optional(__S(35)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListGatewaysOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListHypervisorsInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Host: S.optional(S.String),
          HypervisorArn: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          Name: S.optional(S.String),
          State: S.optional(S.String),
        }),
      ).annotate({ identifier: "Hypervisor" });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Hypervisors: S.optional(__S(39)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListHypervisorsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.optional(S.String), Tags: S.optional(__S(3)) }),
      ).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          HypervisorArn: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListVirtualMachinesInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          HostName: S.optional(S.String),
          HypervisorId: S.optional(S.String),
          Name: S.optional(S.String),
          Path: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          LastBackupDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "VirtualMachine" });
    case 5:
      return S.Array(__S(44));
    case 6:
      return S.suspend(() =>
        S.Struct({ VirtualMachines: S.optional(__S(45)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListVirtualMachinesOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          GatewayArn: S.String,
          BandwidthRateLimitIntervals: __S(13),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutBandwidthRateLimitScheduleInput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HypervisorArn: S.String,
          VmwareToAwsTagMappings: __S(24),
          IamRoleArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutHypervisorPropertyMappingsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GatewayArn: S.String,
          HourOfDay: S.Number,
          MinuteOfHour: S.Number,
          DayOfWeek: S.optional(S.Number),
          DayOfMonth: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutMaintenanceStartTimeInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ HypervisorArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartVirtualMachinesMetadataSyncInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(3) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 4:
      return S.suspend(() => S.Struct({ ResourceARN: S.optional(S.String) })).annotate({
        identifier: "TagResourceOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GatewayArn: S.String,
          Host: S.String,
          Username: S.optional(SensitiveString),
          Password: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "TestHypervisorConfigurationInput",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TestHypervisorConfigurationOutput",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(55) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.String, GatewayDisplayName: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateGatewayInformationInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ GatewayArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "UpdateGatewaySoftwareNowInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          HypervisorArn: S.String,
          Host: S.optional(S.String),
          Username: S.optional(SensitiveString),
          Password: S.optional(SensitiveString),
          Name: S.optional(S.String),
          LogGroupArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateHypervisorInput" });
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
    case 7:
      return __c7(i & 7);
  }
}
