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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Redshift Serverless",
  serviceShapeName: "RedshiftServerless",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "redshift-serverless" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-04-21");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://redshift-serverless-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://redshift-serverless-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://redshift-serverless.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://redshift-serverless.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DryRunException
  extends /*@__PURE__*/ S.TaggedError<DryRunException>()(
    "DryRunException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InsufficientCapacityException
  extends /*@__PURE__*/ S.TaggedError<InsufficientCapacityException>()(
    "InsufficientCapacityException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(400), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withBadRequestError, C.withRetryableError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class InvalidPaginationException
  extends /*@__PURE__*/ S.TaggedError<InvalidPaginationException>()(
    "InvalidPaginationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class Ipv6CidrBlockNotFoundException
  extends /*@__PURE__*/ S.TaggedError<Ipv6CidrBlockNotFoundException>()(
    "Ipv6CidrBlockNotFoundException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
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
    {
      code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 1);
export interface ConvertRecoveryPointToSnapshotRequest {
  recoveryPointId: string;
  snapshotName: string;
  retentionPeriod?: number;
  tags?: Tag[];
}
const ConvertRecoveryPointToSnapshotRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<ConvertRecoveryPointToSnapshotRequest>;
export type SnapshotStatus = string;
export type KmsKeyId = string;
export type AccountIdList = string[];
const AccountIdList = /*@__PURE__*/ __L.at(__c0, 3);
export interface Snapshot {
  namespaceName?: string;
  namespaceArn?: string;
  snapshotName?: string;
  snapshotCreateTime?: Date;
  adminUsername?: string;
  status?: string;
  kmsKeyId?: string;
  ownerAccount?: string;
  totalBackupSizeInMegaBytes?: number;
  actualIncrementalBackupSizeInMegaBytes?: number;
  backupProgressInMegaBytes?: number;
  currentBackupRateInMegaBytesPerSecond?: number;
  estimatedSecondsToCompletion?: number;
  elapsedTimeInSeconds?: number;
  snapshotRetentionPeriod?: number;
  snapshotRemainingDays?: number;
  snapshotRetentionStartTime?: Date;
  snapshotArn?: string;
  accountsWithRestoreAccess?: string[];
  accountsWithProvisionedRestoreAccess?: string[];
  adminPasswordSecretArn?: string;
  adminPasswordSecretKmsKeyId?: string;
}
const Snapshot = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<Snapshot>;
export interface ConvertRecoveryPointToSnapshotResponse {
  snapshot?: Snapshot;
}
const ConvertRecoveryPointToSnapshotResponse = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<ConvertRecoveryPointToSnapshotResponse>;
export type WorkgroupName = string;
export type CustomDomainName = string;
export type CustomDomainCertificateArnString = string;
export interface CreateCustomDomainAssociationRequest {
  workgroupName: string;
  customDomainName: string;
  customDomainCertificateArn: string;
}
const CreateCustomDomainAssociationRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateCustomDomainAssociationRequest>;
export interface CreateCustomDomainAssociationResponse {
  customDomainName?: string;
  workgroupName?: string;
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date;
}
const CreateCustomDomainAssociationResponse = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<CreateCustomDomainAssociationResponse>;
export type SubnetId = string;
export type SubnetIdList = string[];
const SubnetIdList = AccountIdList as any as S.Schema<SubnetIdList>;
export type VpcSecurityGroupId = string;
export type VpcSecurityGroupIdList = string[];
const VpcSecurityGroupIdList = AccountIdList as any as S.Schema<VpcSecurityGroupIdList>;
export type OwnerAccount = string;
export interface CreateEndpointAccessRequest {
  endpointName: string;
  subnetIds: string[];
  workgroupName: string;
  vpcSecurityGroupIds?: string[];
  ownerAccount?: string;
}
const CreateEndpointAccessRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CreateEndpointAccessRequest>;
export interface VpcSecurityGroupMembership {
  vpcSecurityGroupId?: string;
  status?: string;
}
const VpcSecurityGroupMembership = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<VpcSecurityGroupMembership>;
export type VpcSecurityGroupMembershipList = VpcSecurityGroupMembership[];
const VpcSecurityGroupMembershipList = /*@__PURE__*/ __L.at(__c1, 2);
export interface NetworkInterface {
  networkInterfaceId?: string;
  subnetId?: string;
  privateIpAddress?: string;
  availabilityZone?: string;
  ipv6Address?: string;
}
const NetworkInterface = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<NetworkInterface>;
export type NetworkInterfaceList = NetworkInterface[];
const NetworkInterfaceList = /*@__PURE__*/ __L.at(__c1, 4);
export interface VpcEndpoint {
  vpcEndpointId?: string;
  vpcId?: string;
  networkInterfaces?: NetworkInterface[];
}
const VpcEndpoint = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<VpcEndpoint>;
export interface EndpointAccess {
  endpointName?: string;
  endpointStatus?: string;
  workgroupName?: string;
  endpointCreateTime?: Date;
  port?: number;
  address?: string;
  subnetIds?: string[];
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
  vpcEndpoint?: VpcEndpoint;
  endpointArn?: string;
}
const EndpointAccess = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<EndpointAccess>;
export interface CreateEndpointAccessResponse {
  endpoint?: EndpointAccess;
}
const CreateEndpointAccessResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateEndpointAccessResponse>;
export type NamespaceName = string;
export type DbUser = string | redacted.Redacted<string>;
export type DbPassword = string | redacted.Redacted<string>;
export type IamRoleArn = string;
export type IamRoleArnList = string[];
const IamRoleArnList = AccountIdList as any as S.Schema<IamRoleArnList>;
export type LogExport = string;
export type LogExportList = string[];
const LogExportList = AccountIdList as any as S.Schema<LogExportList>;
export type RedshiftIdcApplicationArn = string;
export interface CreateNamespaceRequest {
  namespaceName: string;
  adminUsername?: string | redacted.Redacted<string>;
  adminUserPassword?: string | redacted.Redacted<string>;
  dbName?: string;
  kmsKeyId?: string;
  defaultIamRoleArn?: string;
  iamRoles?: string[];
  logExports?: string[];
  tags?: Tag[];
  manageAdminPassword?: boolean;
  adminPasswordSecretKmsKeyId?: string;
  redshiftIdcApplicationArn?: string;
}
const CreateNamespaceRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CreateNamespaceRequest>;
export type NamespaceStatus = string;
export type S3TableName = string;
export type S3TableNameList = string[];
const S3TableNameList = AccountIdList as any as S.Schema<S3TableNameList>;
export type S3TableGranularity = string;
export type S3TableLastIngestionTimeMap = { [key: string]: string | undefined };
const S3TableLastIngestionTimeMap = /*@__PURE__*/ __L.at(__c2, 1);
export interface S3TablePublishStatus {
  s3Tables?: string[];
  s3TableNamespace?: string;
  s3TableGranularity?: string;
  enabledAll?: boolean;
  lastIngestionTimes?: { [key: string]: string | undefined };
}
const S3TablePublishStatus = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<S3TablePublishStatus>;
export interface Namespace {
  namespaceArn?: string;
  namespaceId?: string;
  namespaceName?: string;
  adminUsername?: string | redacted.Redacted<string>;
  dbName?: string;
  kmsKeyId?: string;
  defaultIamRoleArn?: string;
  iamRoles?: string[];
  logExports?: string[];
  status?: string;
  creationDate?: Date;
  adminPasswordSecretArn?: string;
  adminPasswordSecretKmsKeyId?: string;
  lakehouseRegistrationStatus?: string;
  catalogArn?: string;
  s3TablePublishStatus?: S3TablePublishStatus;
}
const Namespace = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<Namespace>;
export interface CreateNamespaceResponse {
  namespace?: Namespace;
}
const CreateNamespaceResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<CreateNamespaceResponse>;
export type Capacity = number;
export type OfferingId = string;
export interface CreateReservationRequest {
  capacity: number;
  offeringId: string;
  clientToken?: string;
}
const CreateReservationRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<CreateReservationRequest>;
export type ReservationId = string;
export type ReservationArn = string;
export type Duration = number;
export type Charge = number;
export type CurrencyCode = string;
export type OfferingType = string;
export interface ReservationOffering {
  offeringId?: string;
  duration?: number;
  upfrontCharge?: number;
  hourlyCharge?: number;
  currencyCode?: string;
  offeringType?: string;
}
const ReservationOffering = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<ReservationOffering>;
export type Status = string;
export interface Reservation {
  reservationId?: string;
  reservationArn?: string;
  startDate?: Date;
  endDate?: Date;
  capacity?: number;
  offering?: ReservationOffering;
  status?: string;
}
const Reservation = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<Reservation>;
export interface CreateReservationResponse {
  reservation?: Reservation;
}
const CreateReservationResponse = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateReservationResponse>;
export type ScheduledActionName = string;
export type SnapshotNamePrefix = string;
export interface CreateSnapshotScheduleActionParameters {
  namespaceName: string;
  snapshotNamePrefix: string;
  retentionPeriod?: number;
  tags?: Tag[];
}
const CreateSnapshotScheduleActionParameters = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreateSnapshotScheduleActionParameters>;
export type TargetAction = { createSnapshot: CreateSnapshotScheduleActionParameters };
const TargetAction = /*@__PURE__*/ __L.at(__c3, 2);
export type Schedule = { at: Date; cron?: never } | { at?: never; cron: string };
const Schedule = /*@__PURE__*/ __L.at(__c3, 3);
export interface CreateScheduledActionRequest {
  scheduledActionName: string;
  targetAction: TargetAction;
  schedule: Schedule;
  roleArn: string;
  namespaceName: string;
  enabled?: boolean;
  scheduledActionDescription?: string;
  startTime?: Date;
  endTime?: Date;
}
const CreateScheduledActionRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateScheduledActionRequest>;
export type NextInvocationsList = Date[];
const NextInvocationsList = /*@__PURE__*/ __L.at(__c3, 5);
export type State = string;
export interface ScheduledActionResponse {
  scheduledActionName?: string;
  schedule?: Schedule;
  scheduledActionDescription?: string;
  nextInvocations?: Date[];
  roleArn?: string;
  state?: string;
  startTime?: Date;
  endTime?: Date;
  targetAction?: TargetAction;
  namespaceName?: string;
  scheduledActionUuid?: string;
}
const ScheduledActionResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<ScheduledActionResponse>;
export interface CreateScheduledActionResponse {
  scheduledAction?: ScheduledActionResponse;
}
const CreateScheduledActionResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateScheduledActionResponse>;
export interface CreateSnapshotRequest {
  namespaceName: string;
  snapshotName: string;
  retentionPeriod?: number;
  tags?: Tag[];
}
const CreateSnapshotRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateSnapshotRequest>;
export interface CreateSnapshotResponse {
  snapshot?: Snapshot;
}
const CreateSnapshotResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateSnapshotResponse>;
export interface CreateSnapshotCopyConfigurationRequest {
  namespaceName: string;
  destinationRegion: string;
  snapshotRetentionPeriod?: number;
  destinationKmsKeyId?: string;
}
const CreateSnapshotCopyConfigurationRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateSnapshotCopyConfigurationRequest>;
export interface SnapshotCopyConfiguration {
  snapshotCopyConfigurationId?: string;
  snapshotCopyConfigurationArn?: string;
  namespaceName?: string;
  destinationRegion?: string;
  snapshotRetentionPeriod?: number;
  destinationKmsKeyId?: string;
}
const SnapshotCopyConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<SnapshotCopyConfiguration>;
export interface CreateSnapshotCopyConfigurationResponse {
  snapshotCopyConfiguration: SnapshotCopyConfiguration;
}
const CreateSnapshotCopyConfigurationResponse = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateSnapshotCopyConfigurationResponse>;
export type UsageLimitUsageType = string;
export type UsageLimitPeriod = string;
export type UsageLimitBreachAction = string;
export interface CreateUsageLimitRequest {
  resourceArn: string;
  usageType: string;
  amount: number;
  period?: string;
  breachAction?: string;
}
const CreateUsageLimitRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateUsageLimitRequest>;
export interface UsageLimit {
  usageLimitId?: string;
  usageLimitArn?: string;
  resourceArn?: string;
  usageType?: string;
  amount?: number;
  period?: string;
  breachAction?: string;
}
const UsageLimit = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<UsageLimit>;
export interface CreateUsageLimitResponse {
  usageLimit?: UsageLimit;
}
const CreateUsageLimitResponse = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<CreateUsageLimitResponse>;
export type ParameterKey = string;
export type ParameterValue = string;
export interface ConfigParameter {
  parameterKey?: string;
  parameterValue?: string;
}
const ConfigParameter = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ConfigParameter>;
export type ConfigParameterList = ConfigParameter[];
const ConfigParameterList = /*@__PURE__*/ __L.at(__c5, 1);
export type SecurityGroupId = string;
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = AccountIdList as any as S.Schema<SecurityGroupIdList>;
export type PerformanceTargetStatus = string;
export interface PerformanceTarget {
  status?: string;
  level?: number;
}
const PerformanceTarget = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<PerformanceTarget>;
export type IpAddressType = string;
export type TrackName = string;
export interface CreateWorkgroupRequest {
  workgroupName: string;
  namespaceName: string;
  baseCapacity?: number;
  enhancedVpcRouting?: boolean;
  configParameters?: ConfigParameter[];
  securityGroupIds?: string[];
  subnetIds?: string[];
  publiclyAccessible?: boolean;
  tags?: Tag[];
  port?: number;
  maxCapacity?: number;
  pricePerformanceTarget?: PerformanceTarget;
  ipAddressType?: string;
  trackName?: string;
  extraComputeForAutomaticOptimization?: boolean;
}
const CreateWorkgroupRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CreateWorkgroupRequest>;
export type WorkgroupStatus = string;
export type VpcEndpointList = VpcEndpoint[];
const VpcEndpointList = /*@__PURE__*/ __L.at(__c5, 4);
export interface Endpoint {
  address?: string;
  port?: number;
  vpcEndpoints?: VpcEndpoint[];
}
const Endpoint = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<Endpoint>;
export type VpcIds = string[];
const VpcIds = AccountIdList as any as S.Schema<VpcIds>;
export interface Workgroup {
  workgroupId?: string;
  workgroupArn?: string;
  workgroupName?: string;
  namespaceName?: string;
  baseCapacity?: number;
  enhancedVpcRouting?: boolean;
  configParameters?: ConfigParameter[];
  securityGroupIds?: string[];
  subnetIds?: string[];
  status?: string;
  endpoint?: Endpoint;
  publiclyAccessible?: boolean;
  creationDate?: Date;
  port?: number;
  customDomainName?: string;
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date;
  workgroupVersion?: string;
  patchVersion?: string;
  maxCapacity?: number;
  crossAccountVpcs?: string[];
  ipAddressType?: string;
  pricePerformanceTarget?: PerformanceTarget;
  trackName?: string;
  pendingTrackName?: string;
  extraComputeForAutomaticOptimization?: boolean;
}
const Workgroup = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<Workgroup>;
export interface CreateWorkgroupResponse {
  workgroup?: Workgroup;
}
const CreateWorkgroupResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateWorkgroupResponse>;
export interface DeleteCustomDomainAssociationRequest {
  workgroupName: string;
  customDomainName: string;
}
const DeleteCustomDomainAssociationRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DeleteCustomDomainAssociationRequest>;
export interface DeleteCustomDomainAssociationResponse {}
const DeleteCustomDomainAssociationResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DeleteCustomDomainAssociationResponse>;
export interface DeleteEndpointAccessRequest {
  endpointName: string;
}
const DeleteEndpointAccessRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DeleteEndpointAccessRequest>;
export interface DeleteEndpointAccessResponse {
  endpoint?: EndpointAccess;
}
const DeleteEndpointAccessResponse =
  CreateEndpointAccessResponse as any as S.Schema<DeleteEndpointAccessResponse>;
export interface DeleteNamespaceRequest {
  namespaceName: string;
  finalSnapshotName?: string;
  finalSnapshotRetentionPeriod?: number;
}
const DeleteNamespaceRequest = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DeleteNamespaceRequest>;
export interface DeleteNamespaceResponse {
  namespace: Namespace;
}
const DeleteNamespaceResponse = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DeleteNamespaceResponse>;
export interface DeleteResourcePolicyRequest {
  resourceArn: string;
}
const DeleteResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DeleteResourcePolicyRequest>;
export interface DeleteResourcePolicyResponse {}
const DeleteResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<DeleteResourcePolicyResponse>;
export interface DeleteScheduledActionRequest {
  scheduledActionName: string;
}
const DeleteScheduledActionRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<DeleteScheduledActionRequest>;
export interface DeleteScheduledActionResponse {
  scheduledAction?: ScheduledActionResponse;
}
const DeleteScheduledActionResponse =
  CreateScheduledActionResponse as any as S.Schema<DeleteScheduledActionResponse>;
export interface DeleteSnapshotRequest {
  snapshotName: string;
}
const DeleteSnapshotRequest = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<DeleteSnapshotRequest>;
export interface DeleteSnapshotResponse {
  snapshot?: Snapshot;
}
const DeleteSnapshotResponse = CreateSnapshotResponse as any as S.Schema<DeleteSnapshotResponse>;
export interface DeleteSnapshotCopyConfigurationRequest {
  snapshotCopyConfigurationId: string;
}
const DeleteSnapshotCopyConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DeleteSnapshotCopyConfigurationRequest>;
export interface DeleteSnapshotCopyConfigurationResponse {
  snapshotCopyConfiguration: SnapshotCopyConfiguration;
}
const DeleteSnapshotCopyConfigurationResponse =
  CreateSnapshotCopyConfigurationResponse as any as S.Schema<DeleteSnapshotCopyConfigurationResponse>;
export interface DeleteUsageLimitRequest {
  usageLimitId: string;
}
const DeleteUsageLimitRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DeleteUsageLimitRequest>;
export interface DeleteUsageLimitResponse {
  usageLimit?: UsageLimit;
}
const DeleteUsageLimitResponse =
  CreateUsageLimitResponse as any as S.Schema<DeleteUsageLimitResponse>;
export interface DeleteWorkgroupRequest {
  workgroupName: string;
}
const DeleteWorkgroupRequest = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<DeleteWorkgroupRequest>;
export interface DeleteWorkgroupResponse {
  workgroup: Workgroup;
}
const DeleteWorkgroupResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<DeleteWorkgroupResponse>;
export type DbName = string;
export interface GetCredentialsRequest {
  dbName?: string;
  durationSeconds?: number;
  workgroupName?: string;
  customDomainName?: string;
}
const GetCredentialsRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<GetCredentialsRequest>;
export interface GetCredentialsResponse {
  dbUser?: string | redacted.Redacted<string>;
  dbPassword?: string | redacted.Redacted<string>;
  expiration?: Date;
  nextRefreshTime?: Date;
}
const GetCredentialsResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<GetCredentialsResponse>;
export interface GetCustomDomainAssociationRequest {
  customDomainName: string;
  workgroupName: string;
}
const GetCustomDomainAssociationRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<GetCustomDomainAssociationRequest>;
export interface GetCustomDomainAssociationResponse {
  customDomainName?: string;
  workgroupName?: string;
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date;
}
const GetCustomDomainAssociationResponse =
  CreateCustomDomainAssociationResponse as any as S.Schema<GetCustomDomainAssociationResponse>;
export interface GetEndpointAccessRequest {
  endpointName: string;
}
const GetEndpointAccessRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<GetEndpointAccessRequest>;
export interface GetEndpointAccessResponse {
  endpoint?: EndpointAccess;
}
const GetEndpointAccessResponse =
  CreateEndpointAccessResponse as any as S.Schema<GetEndpointAccessResponse>;
export type WorkgroupNameList = string[];
const WorkgroupNameList = AccountIdList as any as S.Schema<WorkgroupNameList>;
export interface GetIdentityCenterAuthTokenRequest {
  workgroupNames: string[];
}
const GetIdentityCenterAuthTokenRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<GetIdentityCenterAuthTokenRequest>;
export interface GetIdentityCenterAuthTokenResponse {
  token?: string | redacted.Redacted<string>;
  expirationTime?: Date;
}
const GetIdentityCenterAuthTokenResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<GetIdentityCenterAuthTokenResponse>;
export interface GetNamespaceRequest {
  namespaceName: string;
}
const GetNamespaceRequest = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<GetNamespaceRequest>;
export interface GetNamespaceResponse {
  namespace: Namespace;
}
const GetNamespaceResponse = DeleteNamespaceResponse as any as S.Schema<GetNamespaceResponse>;
export interface GetRecoveryPointRequest {
  recoveryPointId: string;
}
const GetRecoveryPointRequest = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<GetRecoveryPointRequest>;
export interface RecoveryPoint {
  recoveryPointId?: string;
  recoveryPointCreateTime?: Date;
  totalSizeInMegaBytes?: number;
  namespaceName?: string;
  workgroupName?: string;
  namespaceArn?: string;
}
const RecoveryPoint = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<RecoveryPoint>;
export interface GetRecoveryPointResponse {
  recoveryPoint?: RecoveryPoint;
}
const GetRecoveryPointResponse = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<GetRecoveryPointResponse>;
export interface GetReservationRequest {
  reservationId: string;
}
const GetReservationRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<GetReservationRequest>;
export interface GetReservationResponse {
  reservation: Reservation;
}
const GetReservationResponse = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<GetReservationResponse>;
export interface GetReservationOfferingRequest {
  offeringId: string;
}
const GetReservationOfferingRequest = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<GetReservationOfferingRequest>;
export interface GetReservationOfferingResponse {
  reservationOffering: ReservationOffering;
}
const GetReservationOfferingResponse = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<GetReservationOfferingResponse>;
export interface GetResourcePolicyRequest {
  resourceArn: string;
}
const GetResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<GetResourcePolicyRequest>;
export interface ResourcePolicy {
  resourceArn?: string;
  policy?: string;
}
const ResourcePolicy = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<ResourcePolicy>;
export interface GetResourcePolicyResponse {
  resourcePolicy?: ResourcePolicy;
}
const GetResourcePolicyResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<GetResourcePolicyResponse>;
export interface GetScheduledActionRequest {
  scheduledActionName: string;
}
const GetScheduledActionRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<GetScheduledActionRequest>;
export interface GetScheduledActionResponse {
  scheduledAction?: ScheduledActionResponse;
}
const GetScheduledActionResponse =
  CreateScheduledActionResponse as any as S.Schema<GetScheduledActionResponse>;
export interface GetSnapshotRequest {
  snapshotName?: string;
  ownerAccount?: string;
  snapshotArn?: string;
}
const GetSnapshotRequest = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<GetSnapshotRequest>;
export interface GetSnapshotResponse {
  snapshot?: Snapshot;
}
const GetSnapshotResponse = CreateSnapshotResponse as any as S.Schema<GetSnapshotResponse>;
export interface GetTableRestoreStatusRequest {
  tableRestoreRequestId: string;
}
const GetTableRestoreStatusRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetTableRestoreStatusRequest>;
export interface TableRestoreStatus {
  tableRestoreRequestId?: string;
  status?: string;
  message?: string;
  requestTime?: Date;
  namespaceName?: string;
  workgroupName?: string;
  snapshotName?: string;
  progressInMegaBytes?: number;
  totalDataInMegaBytes?: number;
  sourceDatabaseName?: string;
  sourceSchemaName?: string;
  sourceTableName?: string;
  targetDatabaseName?: string;
  targetSchemaName?: string;
  newTableName?: string;
  recoveryPointId?: string;
}
const TableRestoreStatus = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<TableRestoreStatus>;
export interface GetTableRestoreStatusResponse {
  tableRestoreStatus?: TableRestoreStatus;
}
const GetTableRestoreStatusResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<GetTableRestoreStatusResponse>;
export interface GetTrackRequest {
  trackName: string;
}
const GetTrackRequest = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<GetTrackRequest>;
export interface UpdateTarget {
  trackName?: string;
  workgroupVersion?: string;
}
const UpdateTarget = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<UpdateTarget>;
export type UpdateTargetsList = UpdateTarget[];
const UpdateTargetsList = /*@__PURE__*/ __L.at(__c10, 5);
export interface ServerlessTrack {
  trackName?: string;
  workgroupVersion?: string;
  updateTargets?: UpdateTarget[];
}
const ServerlessTrack = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<ServerlessTrack>;
export interface GetTrackResponse {
  track?: ServerlessTrack;
}
const GetTrackResponse = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<GetTrackResponse>;
export interface GetUsageLimitRequest {
  usageLimitId: string;
}
const GetUsageLimitRequest = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<GetUsageLimitRequest>;
export interface GetUsageLimitResponse {
  usageLimit?: UsageLimit;
}
const GetUsageLimitResponse = CreateUsageLimitResponse as any as S.Schema<GetUsageLimitResponse>;
export interface GetWorkgroupRequest {
  workgroupName: string;
}
const GetWorkgroupRequest = /*@__PURE__*/ __L.at(__c11, 1) as any as S.Schema<GetWorkgroupRequest>;
export interface GetWorkgroupResponse {
  workgroup: Workgroup;
}
const GetWorkgroupResponse = DeleteWorkgroupResponse as any as S.Schema<GetWorkgroupResponse>;
export type PaginationToken = string;
export interface ListCustomDomainAssociationsRequest {
  nextToken?: string;
  maxResults?: number;
  customDomainName?: string;
  customDomainCertificateArn?: string;
}
const ListCustomDomainAssociationsRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ListCustomDomainAssociationsRequest>;
export interface Association {
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date;
  customDomainName?: string;
  workgroupName?: string;
}
const Association = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<Association>;
export type AssociationList = Association[];
const AssociationList = /*@__PURE__*/ __L.at(__c11, 4);
export interface ListCustomDomainAssociationsResponse {
  nextToken?: string;
  associations?: Association[];
}
const ListCustomDomainAssociationsResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ListCustomDomainAssociationsResponse>;
export interface ListEndpointAccessRequest {
  nextToken?: string;
  maxResults?: number;
  workgroupName?: string;
  vpcId?: string;
  ownerAccount?: string;
}
const ListEndpointAccessRequest = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<ListEndpointAccessRequest>;
export type EndpointAccessList = EndpointAccess[];
const EndpointAccessList = /*@__PURE__*/ __L.at(__c11, 7);
export interface ListEndpointAccessResponse {
  nextToken?: string;
  endpoints: EndpointAccess[];
}
const ListEndpointAccessResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<ListEndpointAccessResponse>;
export type SourceArn = string;
export interface ListManagedWorkgroupsRequest {
  sourceArn?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListManagedWorkgroupsRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ListManagedWorkgroupsRequest>;
export type ManagedWorkgroupName = string;
export type ManagedWorkgroupStatus =
  | "CREATING"
  | "DELETING"
  | "MODIFYING"
  | "AVAILABLE"
  | "NOT_AVAILABLE"
  | (string & {});
const ManagedWorkgroupStatus = S.String;

export interface ManagedWorkgroupListItem {
  managedWorkgroupName?: string;
  managedWorkgroupId?: string;
  sourceArn?: string;
  status?: ManagedWorkgroupStatus;
  creationDate?: Date;
}
const ManagedWorkgroupListItem = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<ManagedWorkgroupListItem>;
export type ManagedWorkgroups = ManagedWorkgroupListItem[];
const ManagedWorkgroups = /*@__PURE__*/ __L.at(__c12, 3);
export interface ListManagedWorkgroupsResponse {
  nextToken?: string;
  managedWorkgroups?: ManagedWorkgroupListItem[];
}
const ListManagedWorkgroupsResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<ListManagedWorkgroupsResponse>;
export interface ListNamespacesRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListNamespacesRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ListNamespacesRequest>;
export type NamespaceList = Namespace[];
const NamespaceList = /*@__PURE__*/ __L.at(__c12, 6);
export interface ListNamespacesResponse {
  nextToken?: string;
  namespaces: Namespace[];
}
const ListNamespacesResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<ListNamespacesResponse>;
export interface ListRecoveryPointsRequest {
  nextToken?: string;
  maxResults?: number;
  startTime?: Date;
  endTime?: Date;
  namespaceName?: string;
  namespaceArn?: string;
}
const ListRecoveryPointsRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<ListRecoveryPointsRequest>;
export type RecoveryPointList = RecoveryPoint[];
const RecoveryPointList = /*@__PURE__*/ __L.at(__c13, 1);
export interface ListRecoveryPointsResponse {
  recoveryPoints?: RecoveryPoint[];
  nextToken?: string;
}
const ListRecoveryPointsResponse = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<ListRecoveryPointsResponse>;
export interface ListReservationOfferingsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListReservationOfferingsRequest = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<ListReservationOfferingsRequest>;
export type ReservationOfferingsList = ReservationOffering[];
const ReservationOfferingsList = /*@__PURE__*/ __L.at(__c13, 4);
export interface ListReservationOfferingsResponse {
  reservationOfferingsList: ReservationOffering[];
  nextToken?: string;
}
const ListReservationOfferingsResponse = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ListReservationOfferingsResponse>;
export interface ListReservationsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListReservationsRequest = /*@__PURE__*/ __L.at(
  __c13,
  6,
) as any as S.Schema<ListReservationsRequest>;
export type ReservationsList = Reservation[];
const ReservationsList = /*@__PURE__*/ __L.at(__c13, 7);
export interface ListReservationsResponse {
  reservationsList: Reservation[];
  nextToken?: string;
}
const ListReservationsResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<ListReservationsResponse>;
export interface ListScheduledActionsRequest {
  nextToken?: string;
  maxResults?: number;
  namespaceName?: string;
}
const ListScheduledActionsRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<ListScheduledActionsRequest>;
export interface ScheduledActionAssociation {
  namespaceName?: string;
  scheduledActionName?: string;
}
const ScheduledActionAssociation = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ScheduledActionAssociation>;
export type ScheduledActionsList = ScheduledActionAssociation[];
const ScheduledActionsList = /*@__PURE__*/ __L.at(__c14, 3);
export interface ListScheduledActionsResponse {
  nextToken?: string;
  scheduledActions?: ScheduledActionAssociation[];
}
const ListScheduledActionsResponse = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<ListScheduledActionsResponse>;
export interface ListSnapshotCopyConfigurationsRequest {
  namespaceName?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListSnapshotCopyConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<ListSnapshotCopyConfigurationsRequest>;
export type SnapshotCopyConfigurations = SnapshotCopyConfiguration[];
const SnapshotCopyConfigurations = /*@__PURE__*/ __L.at(__c14, 6);
export interface ListSnapshotCopyConfigurationsResponse {
  nextToken?: string;
  snapshotCopyConfigurations: SnapshotCopyConfiguration[];
}
const ListSnapshotCopyConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<ListSnapshotCopyConfigurationsResponse>;
export interface ListSnapshotsRequest {
  nextToken?: string;
  maxResults?: number;
  namespaceName?: string;
  namespaceArn?: string;
  ownerAccount?: string;
  startTime?: Date;
  endTime?: Date;
}
const ListSnapshotsRequest = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<ListSnapshotsRequest>;
export type SnapshotList = Snapshot[];
const SnapshotList = /*@__PURE__*/ __L.at(__c15, 1);
export interface ListSnapshotsResponse {
  nextToken?: string;
  snapshots?: Snapshot[];
}
const ListSnapshotsResponse = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<ListSnapshotsResponse>;
export interface ListTableRestoreStatusRequest {
  nextToken?: string;
  maxResults?: number;
  namespaceName?: string;
  workgroupName?: string;
}
const ListTableRestoreStatusRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<ListTableRestoreStatusRequest>;
export type TableRestoreStatusList = TableRestoreStatus[];
const TableRestoreStatusList = /*@__PURE__*/ __L.at(__c15, 4);
export interface ListTableRestoreStatusResponse {
  nextToken?: string;
  tableRestoreStatuses?: TableRestoreStatus[];
}
const ListTableRestoreStatusResponse = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListTableRestoreStatusResponse>;
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTracksRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListTracksRequest = /*@__PURE__*/ __L.at(__c16, 0) as any as S.Schema<ListTracksRequest>;
export type TrackList = ServerlessTrack[];
const TrackList = /*@__PURE__*/ __L.at(__c16, 1);
export interface ListTracksResponse {
  tracks?: ServerlessTrack[];
  nextToken?: string;
}
const ListTracksResponse = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<ListTracksResponse>;
export interface ListUsageLimitsRequest {
  resourceArn?: string;
  usageType?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListUsageLimitsRequest = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<ListUsageLimitsRequest>;
export type UsageLimits = UsageLimit[];
const UsageLimits = /*@__PURE__*/ __L.at(__c16, 4);
export interface ListUsageLimitsResponse {
  usageLimits?: UsageLimit[];
  nextToken?: string;
}
const ListUsageLimitsResponse = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<ListUsageLimitsResponse>;
export interface ListWorkgroupsRequest {
  nextToken?: string;
  maxResults?: number;
  ownerAccount?: string;
}
const ListWorkgroupsRequest = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<ListWorkgroupsRequest>;
export type WorkgroupList = Workgroup[];
const WorkgroupList = /*@__PURE__*/ __L.at(__c16, 7);
export interface ListWorkgroupsResponse {
  nextToken?: string;
  workgroups: Workgroup[];
}
const ListWorkgroupsResponse = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<ListWorkgroupsResponse>;
export interface PutResourcePolicyRequest {
  resourceArn: string;
  policy: string;
}
const PutResourcePolicyRequest = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<PutResourcePolicyRequest>;
export interface PutResourcePolicyResponse {
  resourcePolicy?: ResourcePolicy;
}
const PutResourcePolicyResponse =
  GetResourcePolicyResponse as any as S.Schema<PutResourcePolicyResponse>;
export interface RestoreFromRecoveryPointRequest {
  recoveryPointId: string;
  namespaceName: string;
  workgroupName: string;
  maintainIntegration?: boolean;
}
const RestoreFromRecoveryPointRequest = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<RestoreFromRecoveryPointRequest>;
export interface RestoreFromRecoveryPointResponse {
  recoveryPointId?: string;
  namespace?: Namespace;
}
const RestoreFromRecoveryPointResponse = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<RestoreFromRecoveryPointResponse>;
export interface RestoreFromSnapshotRequest {
  namespaceName: string;
  workgroupName: string;
  snapshotName?: string;
  snapshotArn?: string;
  ownerAccount?: string;
  manageAdminPassword?: boolean;
  adminPasswordSecretKmsKeyId?: string;
  maintainIntegration?: boolean;
}
const RestoreFromSnapshotRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<RestoreFromSnapshotRequest>;
export interface RestoreFromSnapshotResponse {
  snapshotName?: string;
  ownerAccount?: string;
  namespace?: Namespace;
}
const RestoreFromSnapshotResponse = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<RestoreFromSnapshotResponse>;
export interface RestoreTableFromRecoveryPointRequest {
  namespaceName: string;
  workgroupName: string;
  recoveryPointId: string;
  sourceDatabaseName: string;
  sourceSchemaName?: string;
  sourceTableName: string;
  targetDatabaseName?: string;
  targetSchemaName?: string;
  newTableName: string;
  activateCaseSensitiveIdentifier?: boolean;
}
const RestoreTableFromRecoveryPointRequest = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<RestoreTableFromRecoveryPointRequest>;
export interface RestoreTableFromRecoveryPointResponse {
  tableRestoreStatus?: TableRestoreStatus;
}
const RestoreTableFromRecoveryPointResponse =
  GetTableRestoreStatusResponse as any as S.Schema<RestoreTableFromRecoveryPointResponse>;
export interface RestoreTableFromSnapshotRequest {
  namespaceName: string;
  workgroupName: string;
  snapshotName: string;
  sourceDatabaseName: string;
  sourceSchemaName?: string;
  sourceTableName: string;
  targetDatabaseName?: string;
  targetSchemaName?: string;
  newTableName: string;
  activateCaseSensitiveIdentifier?: boolean;
}
const RestoreTableFromSnapshotRequest = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<RestoreTableFromSnapshotRequest>;
export interface RestoreTableFromSnapshotResponse {
  tableRestoreStatus?: TableRestoreStatus;
}
const RestoreTableFromSnapshotResponse =
  GetTableRestoreStatusResponse as any as S.Schema<RestoreTableFromSnapshotResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c18, 0) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteResourcePolicyResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = AccountIdList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  DeleteResourcePolicyResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateCustomDomainAssociationRequest {
  workgroupName: string;
  customDomainName: string;
  customDomainCertificateArn: string;
}
const UpdateCustomDomainAssociationRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<UpdateCustomDomainAssociationRequest>;
export interface UpdateCustomDomainAssociationResponse {
  customDomainName?: string;
  workgroupName?: string;
  customDomainCertificateArn?: string;
  customDomainCertificateExpiryTime?: Date;
}
const UpdateCustomDomainAssociationResponse =
  CreateCustomDomainAssociationResponse as any as S.Schema<UpdateCustomDomainAssociationResponse>;
export interface UpdateEndpointAccessRequest {
  endpointName: string;
  vpcSecurityGroupIds?: string[];
}
const UpdateEndpointAccessRequest = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<UpdateEndpointAccessRequest>;
export interface UpdateEndpointAccessResponse {
  endpoint?: EndpointAccess;
}
const UpdateEndpointAccessResponse =
  CreateEndpointAccessResponse as any as S.Schema<UpdateEndpointAccessResponse>;
export type LakehouseRegistration = string;
export type CatalogNameString = string;
export type LakehouseIdcRegistration = string;
export interface UpdateLakehouseConfigurationRequest {
  namespaceName: string;
  lakehouseRegistration?: string;
  catalogName?: string;
  lakehouseIdcRegistration?: string;
  lakehouseIdcApplicationArn?: string;
  dryRun?: boolean;
}
const UpdateLakehouseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c18,
  4,
) as any as S.Schema<UpdateLakehouseConfigurationRequest>;
export interface UpdateLakehouseConfigurationResponse {
  namespaceName?: string;
  lakehouseIdcApplicationArn?: string;
  lakehouseRegistrationStatus?: string;
  catalogArn?: string;
}
const UpdateLakehouseConfigurationResponse = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<UpdateLakehouseConfigurationResponse>;
export type LogDestinationType = string;
export type S3TableAction = string;
export interface UpdateNamespaceRequest {
  namespaceName: string;
  adminUserPassword?: string | redacted.Redacted<string>;
  adminUsername?: string | redacted.Redacted<string>;
  kmsKeyId?: string;
  defaultIamRoleArn?: string;
  iamRoles?: string[];
  logExports?: string[];
  manageAdminPassword?: boolean;
  adminPasswordSecretKmsKeyId?: string;
  logDestinationType?: string;
  s3TableAction?: string;
  s3TableNames?: string[];
  s3TableKmsKeyId?: string;
  s3TableGranularity?: string;
}
const UpdateNamespaceRequest = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<UpdateNamespaceRequest>;
export interface UpdateNamespaceResponse {
  namespace: Namespace;
}
const UpdateNamespaceResponse = DeleteNamespaceResponse as any as S.Schema<UpdateNamespaceResponse>;
export interface UpdateScheduledActionRequest {
  scheduledActionName: string;
  targetAction?: TargetAction;
  schedule?: Schedule;
  roleArn?: string;
  enabled?: boolean;
  scheduledActionDescription?: string;
  startTime?: Date;
  endTime?: Date;
}
const UpdateScheduledActionRequest = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<UpdateScheduledActionRequest>;
export interface UpdateScheduledActionResponse {
  scheduledAction?: ScheduledActionResponse;
}
const UpdateScheduledActionResponse =
  CreateScheduledActionResponse as any as S.Schema<UpdateScheduledActionResponse>;
export interface UpdateSnapshotRequest {
  snapshotName: string;
  retentionPeriod?: number;
}
const UpdateSnapshotRequest = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<UpdateSnapshotRequest>;
export interface UpdateSnapshotResponse {
  snapshot?: Snapshot;
}
const UpdateSnapshotResponse = CreateSnapshotResponse as any as S.Schema<UpdateSnapshotResponse>;
export interface UpdateSnapshotCopyConfigurationRequest {
  snapshotCopyConfigurationId: string;
  snapshotRetentionPeriod?: number;
}
const UpdateSnapshotCopyConfigurationRequest = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<UpdateSnapshotCopyConfigurationRequest>;
export interface UpdateSnapshotCopyConfigurationResponse {
  snapshotCopyConfiguration: SnapshotCopyConfiguration;
}
const UpdateSnapshotCopyConfigurationResponse =
  CreateSnapshotCopyConfigurationResponse as any as S.Schema<UpdateSnapshotCopyConfigurationResponse>;
export interface UpdateUsageLimitRequest {
  usageLimitId: string;
  amount?: number;
  breachAction?: string;
}
const UpdateUsageLimitRequest = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<UpdateUsageLimitRequest>;
export interface UpdateUsageLimitResponse {
  usageLimit?: UsageLimit;
}
const UpdateUsageLimitResponse =
  CreateUsageLimitResponse as any as S.Schema<UpdateUsageLimitResponse>;
export interface UpdateWorkgroupRequest {
  workgroupName: string;
  baseCapacity?: number;
  enhancedVpcRouting?: boolean;
  configParameters?: ConfigParameter[];
  publiclyAccessible?: boolean;
  subnetIds?: string[];
  securityGroupIds?: string[];
  port?: number;
  maxCapacity?: number;
  ipAddressType?: string;
  pricePerformanceTarget?: PerformanceTarget;
  trackName?: string;
  extraComputeForAutomaticOptimization?: boolean;
}
const UpdateWorkgroupRequest = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<UpdateWorkgroupRequest>;
export interface UpdateWorkgroupResponse {
  workgroup: Workgroup;
}
const UpdateWorkgroupResponse = DeleteWorkgroupResponse as any as S.Schema<UpdateWorkgroupResponse>;
export type ConvertRecoveryPointToSnapshotError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Converts a recovery point to a snapshot. For more information about recovery points and snapshots, see Working with snapshots and recovery points.
 */
export const convertRecoveryPointToSnapshot: API.OperationMethod<
  ConvertRecoveryPointToSnapshotRequest,
  ConvertRecoveryPointToSnapshotResponse,
  ConvertRecoveryPointToSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ConvertRecoveryPointToSnapshotRequest,
  output: ConvertRecoveryPointToSnapshotResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ConvertRecoveryPointToSnapshot",
}));

export type CreateCustomDomainAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a custom domain association for Amazon Redshift Serverless.
 */
export const createCustomDomainAssociation: API.OperationMethod<
  CreateCustomDomainAssociationRequest,
  CreateCustomDomainAssociationResponse,
  CreateCustomDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCustomDomainAssociationRequest,
  output: CreateCustomDomainAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCustomDomainAssociation",
}));

export type CreateEndpointAccessError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Redshift Serverless managed VPC endpoint.
 */
export const createEndpointAccess: API.OperationMethod<
  CreateEndpointAccessRequest,
  CreateEndpointAccessResponse,
  CreateEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEndpointAccessRequest,
  output: CreateEndpointAccessResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEndpointAccess",
}));

export type CreateNamespaceError =
  | ConflictException
  | InternalServerException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a namespace in Amazon Redshift Serverless.
 */
export const createNamespace: API.OperationMethod<
  CreateNamespaceRequest,
  CreateNamespaceResponse,
  CreateNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateNamespaceRequest,
  output: CreateNamespaceResponse,
  errors: [ConflictException, InternalServerException, TooManyTagsException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNamespace",
}));

export type CreateReservationError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon Redshift Serverless reservation, which gives you the option to commit to a specified number of Redshift Processing Units (RPUs) for a year at a discount from Serverless on-demand (OD) rates.
 */
export const createReservation: API.OperationMethod<
  CreateReservationRequest,
  CreateReservationResponse,
  CreateReservationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateReservationRequest,
  output: CreateReservationResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateReservation",
}));

export type CreateScheduledActionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the `CreateSnapshot` API operation.
 */
export const createScheduledAction: API.OperationMethod<
  CreateScheduledActionRequest,
  CreateScheduledActionResponse,
  CreateScheduledActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScheduledActionRequest,
  output: CreateScheduledActionResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateScheduledAction",
}));

export type CreateSnapshotError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a snapshot of all databases in a namespace. For more information about snapshots, see Working with snapshots and recovery points.
 */
export const createSnapshot: API.OperationMethod<
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSnapshotRequest,
  output: CreateSnapshotResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSnapshot",
}));

export type CreateSnapshotCopyConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a snapshot copy configuration that lets you copy snapshots to another Amazon Web Services Region.
 */
export const createSnapshotCopyConfiguration: API.OperationMethod<
  CreateSnapshotCopyConfigurationRequest,
  CreateSnapshotCopyConfigurationResponse,
  CreateSnapshotCopyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSnapshotCopyConfigurationRequest,
  output: CreateSnapshotCopyConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSnapshotCopyConfiguration",
}));

export type CreateUsageLimitError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a usage limit for a specified Amazon Redshift Serverless usage type. The usage limit is identified by the returned usage limit identifier.
 */
export const createUsageLimit: API.OperationMethod<
  CreateUsageLimitRequest,
  CreateUsageLimitResponse,
  CreateUsageLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUsageLimitRequest,
  output: CreateUsageLimitResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUsageLimit",
}));

export type CreateWorkgroupError =
  | ConflictException
  | InsufficientCapacityException
  | InternalServerException
  | Ipv6CidrBlockNotFoundException
  | ResourceNotFoundException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Creates an workgroup in Amazon Redshift Serverless.
 *
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a workgroup is in an account with VPC BPA turned on, the following capabilities are blocked:
 *
 * - Creating a public access workgroup
 *
 * - Modifying a private workgroup to public
 *
 * - Adding a subnet with VPC BPA turned on to the workgroup when the workgroup is public
 *
 * For more information about VPC BPA, see Block public access to VPCs and subnets in the *Amazon VPC User Guide*.
 */
export const createWorkgroup: API.OperationMethod<
  CreateWorkgroupRequest,
  CreateWorkgroupResponse,
  CreateWorkgroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateWorkgroupRequest,
  output: CreateWorkgroupResponse,
  errors: [
    ConflictException,
    InsufficientCapacityException,
    InternalServerException,
    Ipv6CidrBlockNotFoundException,
    ResourceNotFoundException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateWorkgroup",
}));

export type DeleteCustomDomainAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a custom domain association for Amazon Redshift Serverless.
 */
export const deleteCustomDomainAssociation: API.OperationMethod<
  DeleteCustomDomainAssociationRequest,
  DeleteCustomDomainAssociationResponse,
  DeleteCustomDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCustomDomainAssociationRequest,
  output: DeleteCustomDomainAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCustomDomainAssociation",
}));

export type DeleteEndpointAccessError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Redshift Serverless managed VPC endpoint.
 */
export const deleteEndpointAccess: API.OperationMethod<
  DeleteEndpointAccessRequest,
  DeleteEndpointAccessResponse,
  DeleteEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEndpointAccessRequest,
  output: DeleteEndpointAccessResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEndpointAccess",
}));

export type DeleteNamespaceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a namespace from Amazon Redshift Serverless. Before you delete the namespace, you can create a final snapshot that has all of the data within the namespace.
 */
export const deleteNamespace: API.OperationMethod<
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteNamespaceRequest,
  output: DeleteNamespaceResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNamespace",
}));

export type DeleteResourcePolicyError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified resource policy.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResourcePolicyRequest,
  output: DeleteResourcePolicyResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteScheduledActionError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a scheduled action.
 */
export const deleteScheduledAction: API.OperationMethod<
  DeleteScheduledActionRequest,
  DeleteScheduledActionResponse,
  DeleteScheduledActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteScheduledActionRequest,
  output: DeleteScheduledActionResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteScheduledAction",
}));

export type DeleteSnapshotError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a snapshot from Amazon Redshift Serverless.
 */
export const deleteSnapshot: API.OperationMethod<
  DeleteSnapshotRequest,
  DeleteSnapshotResponse,
  DeleteSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSnapshotRequest,
  output: DeleteSnapshotResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSnapshot",
}));

export type DeleteSnapshotCopyConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a snapshot copy configuration
 */
export const deleteSnapshotCopyConfiguration: API.OperationMethod<
  DeleteSnapshotCopyConfigurationRequest,
  DeleteSnapshotCopyConfigurationResponse,
  DeleteSnapshotCopyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSnapshotCopyConfigurationRequest,
  output: DeleteSnapshotCopyConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSnapshotCopyConfiguration",
}));

export type DeleteUsageLimitError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a usage limit from Amazon Redshift Serverless.
 */
export const deleteUsageLimit: API.OperationMethod<
  DeleteUsageLimitRequest,
  DeleteUsageLimitResponse,
  DeleteUsageLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUsageLimitRequest,
  output: DeleteUsageLimitResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUsageLimit",
}));

export type DeleteWorkgroupError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a workgroup.
 */
export const deleteWorkgroup: API.OperationMethod<
  DeleteWorkgroupRequest,
  DeleteWorkgroupResponse,
  DeleteWorkgroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteWorkgroupRequest,
  output: DeleteWorkgroupResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteWorkgroup",
}));

export type GetCredentialsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a database user name and temporary password with temporary authorization to log in to Amazon Redshift Serverless.
 *
 * By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes).
 *
 * The Identity and Access Management (IAM) user or role that runs GetCredentials must have an IAM policy attached that allows access to all necessary actions and resources.
 *
 * If the `DbName` parameter is specified, the IAM policy must allow access to the resource dbname for the specified database name.
 */
export const getCredentials: API.OperationMethod<
  GetCredentialsRequest,
  GetCredentialsResponse,
  GetCredentialsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCredentialsRequest,
  output: GetCredentialsResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCredentials",
}));

export type GetCustomDomainAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a specific custom domain association.
 */
export const getCustomDomainAssociation: API.OperationMethod<
  GetCustomDomainAssociationRequest,
  GetCustomDomainAssociationResponse,
  GetCustomDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCustomDomainAssociationRequest,
  output: GetCustomDomainAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCustomDomainAssociation",
}));

export type GetEndpointAccessError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information, such as the name, about a VPC endpoint.
 */
export const getEndpointAccess: API.OperationMethod<
  GetEndpointAccessRequest,
  GetEndpointAccessResponse,
  GetEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEndpointAccessRequest,
  output: GetEndpointAccessResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEndpointAccess",
}));

export type GetIdentityCenterAuthTokenError =
  | AccessDeniedException
  | ConflictException
  | DryRunException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an Identity Center authentication token for accessing Amazon Redshift Serverless workgroups.
 *
 * The token provides secure access to data within the specified workgroups using Identity Center identity propagation. The token expires after a specified duration and must be refreshed for continued access.
 *
 * The Identity and Access Management (IAM) user or role that runs GetIdentityCenterAuthToken must have appropriate permissions to access the specified workgroups and Identity Center integration must be configured for the workgroups.
 */
export const getIdentityCenterAuthToken: API.OperationMethod<
  GetIdentityCenterAuthTokenRequest,
  GetIdentityCenterAuthTokenResponse,
  GetIdentityCenterAuthTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentityCenterAuthTokenRequest,
  output: GetIdentityCenterAuthTokenResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    DryRunException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityCenterAuthToken",
}));

export type GetNamespaceError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a namespace in Amazon Redshift Serverless.
 */
export const getNamespace: API.OperationMethod<
  GetNamespaceRequest,
  GetNamespaceResponse,
  GetNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNamespaceRequest,
  output: GetNamespaceResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNamespace",
}));

export type GetRecoveryPointError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a recovery point.
 */
export const getRecoveryPoint: API.OperationMethod<
  GetRecoveryPointRequest,
  GetRecoveryPointResponse,
  GetRecoveryPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecoveryPointRequest,
  output: GetRecoveryPointResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecoveryPoint",
}));

export type GetReservationError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets an Amazon Redshift Serverless reservation. A reservation gives you the option to commit to a specified number of Redshift Processing Units (RPUs) for a year at a discount from Serverless on-demand (OD) rates.
 */
export const getReservation: API.OperationMethod<
  GetReservationRequest,
  GetReservationResponse,
  GetReservationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetReservationRequest,
  output: GetReservationResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReservation",
}));

export type GetReservationOfferingError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the reservation offering. The offering determines the payment schedule for the reservation.
 */
export const getReservationOffering: API.OperationMethod<
  GetReservationOfferingRequest,
  GetReservationOfferingResponse,
  GetReservationOfferingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetReservationOfferingRequest,
  output: GetReservationOfferingResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetReservationOffering",
}));

export type GetResourcePolicyError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a resource policy.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourcePolicyRequest,
  output: GetResourcePolicyResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type GetScheduledActionError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a scheduled action.
 */
export const getScheduledAction: API.OperationMethod<
  GetScheduledActionRequest,
  GetScheduledActionResponse,
  GetScheduledActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScheduledActionRequest,
  output: GetScheduledActionResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetScheduledAction",
}));

export type GetSnapshotError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specific snapshot.
 */
export const getSnapshot: API.OperationMethod<
  GetSnapshotRequest,
  GetSnapshotResponse,
  GetSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSnapshotRequest,
  output: GetSnapshotResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSnapshot",
}));

export type GetTableRestoreStatusError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a `TableRestoreStatus` object.
 */
export const getTableRestoreStatus: API.OperationMethod<
  GetTableRestoreStatusRequest,
  GetTableRestoreStatusResponse,
  GetTableRestoreStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTableRestoreStatusRequest,
  output: GetTableRestoreStatusResponse,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTableRestoreStatus",
}));

export type GetTrackError =
  | AccessDeniedException
  | ConflictException
  | DryRunException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the Redshift Serverless version for a specified track.
 */
export const getTrack: API.OperationMethod<
  GetTrackRequest,
  GetTrackResponse,
  GetTrackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTrackRequest,
  output: GetTrackResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    DryRunException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrack",
}));

export type GetUsageLimitError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a usage limit.
 */
export const getUsageLimit: API.OperationMethod<
  GetUsageLimitRequest,
  GetUsageLimitResponse,
  GetUsageLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUsageLimitRequest,
  output: GetUsageLimitResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUsageLimit",
}));

export type GetWorkgroupError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specific workgroup.
 */
export const getWorkgroup: API.OperationMethod<
  GetWorkgroupRequest,
  GetWorkgroupResponse,
  GetWorkgroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkgroupRequest,
  output: GetWorkgroupResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkgroup",
}));

export type ListCustomDomainAssociationsError =
  | AccessDeniedException
  | InternalServerException
  | InvalidPaginationException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists custom domain associations for Amazon Redshift Serverless.
 */
export const listCustomDomainAssociations: API.PaginatedOperationMethod<
  ListCustomDomainAssociationsRequest,
  ListCustomDomainAssociationsResponse,
  ListCustomDomainAssociationsError,
  Credentials | HttpClient.HttpClient,
  Association
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCustomDomainAssociationsRequest,
  output: ListCustomDomainAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidPaginationException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomDomainAssociations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "associations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEndpointAccessError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns an array of `EndpointAccess` objects and relevant information.
 */
export const listEndpointAccess: API.PaginatedOperationMethod<
  ListEndpointAccessRequest,
  ListEndpointAccessResponse,
  ListEndpointAccessError,
  Credentials | HttpClient.HttpClient,
  EndpointAccess
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEndpointAccessRequest,
  output: ListEndpointAccessResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEndpointAccess",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "endpoints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListManagedWorkgroupsError =
  | AccessDeniedException
  | InternalServerException
  | CommonErrors;
/**
 * Returns information about a list of specified managed workgroups in your account.
 */
export const listManagedWorkgroups: API.PaginatedOperationMethod<
  ListManagedWorkgroupsRequest,
  ListManagedWorkgroupsResponse,
  ListManagedWorkgroupsError,
  Credentials | HttpClient.HttpClient,
  ManagedWorkgroupListItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListManagedWorkgroupsRequest,
  output: ListManagedWorkgroupsResponse,
  errors: [AccessDeniedException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedWorkgroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "managedWorkgroups",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNamespacesError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns information about a list of specified namespaces.
 */
export const listNamespaces: API.PaginatedOperationMethod<
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListNamespacesError,
  Credentials | HttpClient.HttpClient,
  Namespace
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListNamespacesRequest,
  output: ListNamespacesResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNamespaces",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "namespaces",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecoveryPointsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns an array of recovery points.
 */
export const listRecoveryPoints: API.PaginatedOperationMethod<
  ListRecoveryPointsRequest,
  ListRecoveryPointsResponse,
  ListRecoveryPointsError,
  Credentials | HttpClient.HttpClient,
  RecoveryPoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecoveryPointsRequest,
  output: ListRecoveryPointsResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecoveryPoints",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "recoveryPoints",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReservationOfferingsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the current reservation offerings in your account.
 */
export const listReservationOfferings: API.PaginatedOperationMethod<
  ListReservationOfferingsRequest,
  ListReservationOfferingsResponse,
  ListReservationOfferingsError,
  Credentials | HttpClient.HttpClient,
  ReservationOffering
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListReservationOfferingsRequest,
  output: ListReservationOfferingsResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReservationOfferings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "reservationOfferingsList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListReservationsError =
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of Reservation objects.
 */
export const listReservations: API.PaginatedOperationMethod<
  ListReservationsRequest,
  ListReservationsResponse,
  ListReservationsError,
  Credentials | HttpClient.HttpClient,
  Reservation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListReservationsRequest,
  output: ListReservationsResponse,
  errors: [InternalServerException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReservations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "reservationsList",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListScheduledActionsError =
  | InternalServerException
  | InvalidPaginationException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of scheduled actions. You can use the flags to filter the list of returned scheduled actions.
 */
export const listScheduledActions: API.PaginatedOperationMethod<
  ListScheduledActionsRequest,
  ListScheduledActionsResponse,
  ListScheduledActionsError,
  Credentials | HttpClient.HttpClient,
  ScheduledActionAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListScheduledActionsRequest,
  output: ListScheduledActionsResponse,
  errors: [
    InternalServerException,
    InvalidPaginationException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScheduledActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "scheduledActions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSnapshotCopyConfigurationsError =
  | ConflictException
  | InternalServerException
  | InvalidPaginationException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of snapshot copy configurations.
 */
export const listSnapshotCopyConfigurations: API.PaginatedOperationMethod<
  ListSnapshotCopyConfigurationsRequest,
  ListSnapshotCopyConfigurationsResponse,
  ListSnapshotCopyConfigurationsError,
  Credentials | HttpClient.HttpClient,
  SnapshotCopyConfiguration
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSnapshotCopyConfigurationsRequest,
  output: ListSnapshotCopyConfigurationsResponse,
  errors: [
    ConflictException,
    InternalServerException,
    InvalidPaginationException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSnapshotCopyConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "snapshotCopyConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSnapshotsError =
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of snapshots.
 */
export const listSnapshots: API.PaginatedOperationMethod<
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  ListSnapshotsError,
  Credentials | HttpClient.HttpClient,
  Snapshot
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSnapshotsRequest,
  output: ListSnapshotsResponse,
  errors: [InternalServerException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSnapshots",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "snapshots",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTableRestoreStatusError =
  | InvalidPaginationException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about an array of `TableRestoreStatus` objects.
 */
export const listTableRestoreStatus: API.PaginatedOperationMethod<
  ListTableRestoreStatusRequest,
  ListTableRestoreStatusResponse,
  ListTableRestoreStatusError,
  Credentials | HttpClient.HttpClient,
  TableRestoreStatus
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTableRestoreStatusRequest,
  output: ListTableRestoreStatusResponse,
  errors: [InvalidPaginationException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTableRestoreStatus",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tableRestoreStatuses",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags assigned to a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTracksError =
  | AccessDeniedException
  | InternalServerException
  | InvalidPaginationException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the Amazon Redshift Serverless versions.
 */
export const listTracks: API.PaginatedOperationMethod<
  ListTracksRequest,
  ListTracksResponse,
  ListTracksError,
  Credentials | HttpClient.HttpClient,
  ServerlessTrack
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTracksRequest,
  output: ListTracksResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidPaginationException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTracks",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "tracks",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListUsageLimitsError =
  | ConflictException
  | InternalServerException
  | InvalidPaginationException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all usage limits within Amazon Redshift Serverless.
 */
export const listUsageLimits: API.PaginatedOperationMethod<
  ListUsageLimitsRequest,
  ListUsageLimitsResponse,
  ListUsageLimitsError,
  Credentials | HttpClient.HttpClient,
  UsageLimit
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUsageLimitsRequest,
  output: ListUsageLimitsResponse,
  errors: [
    ConflictException,
    InternalServerException,
    InvalidPaginationException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsageLimits",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "usageLimits",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListWorkgroupsError = InternalServerException | ValidationException | CommonErrors;
/**
 * Returns information about a list of specified workgroups.
 */
export const listWorkgroups: API.PaginatedOperationMethod<
  ListWorkgroupsRequest,
  ListWorkgroupsResponse,
  ListWorkgroupsError,
  Credentials | HttpClient.HttpClient,
  Workgroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListWorkgroupsRequest,
  output: ListWorkgroupsResponse,
  errors: [InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListWorkgroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "workgroups",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutResourcePolicyError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates a resource policy. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutResourcePolicyRequest,
  output: PutResourcePolicyResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type RestoreFromRecoveryPointError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Restore the data from a recovery point.
 */
export const restoreFromRecoveryPoint: API.OperationMethod<
  RestoreFromRecoveryPointRequest,
  RestoreFromRecoveryPointResponse,
  RestoreFromRecoveryPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreFromRecoveryPointRequest,
  output: RestoreFromRecoveryPointResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreFromRecoveryPoint",
}));

export type RestoreFromSnapshotError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Restores a namespace from a snapshot.
 */
export const restoreFromSnapshot: API.OperationMethod<
  RestoreFromSnapshotRequest,
  RestoreFromSnapshotResponse,
  RestoreFromSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreFromSnapshotRequest,
  output: RestoreFromSnapshotResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreFromSnapshot",
}));

export type RestoreTableFromRecoveryPointError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Restores a table from a recovery point to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with interleaved sort keys.
 */
export const restoreTableFromRecoveryPoint: API.OperationMethod<
  RestoreTableFromRecoveryPointRequest,
  RestoreTableFromRecoveryPointResponse,
  RestoreTableFromRecoveryPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreTableFromRecoveryPointRequest,
  output: RestoreTableFromRecoveryPointResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreTableFromRecoveryPoint",
}));

export type RestoreTableFromSnapshotError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with interleaved sort keys.
 */
export const restoreTableFromSnapshot: API.OperationMethod<
  RestoreTableFromSnapshotRequest,
  RestoreTableFromSnapshotResponse,
  RestoreTableFromSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RestoreTableFromSnapshotRequest,
  output: RestoreTableFromSnapshotResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RestoreTableFromSnapshot",
}));

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Assigns one or more tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    TooManyTagsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag or set of tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateCustomDomainAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an Amazon Redshift Serverless certificate associated with a custom domain.
 */
export const updateCustomDomainAssociation: API.OperationMethod<
  UpdateCustomDomainAssociationRequest,
  UpdateCustomDomainAssociationResponse,
  UpdateCustomDomainAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateCustomDomainAssociationRequest,
  output: UpdateCustomDomainAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCustomDomainAssociation",
}));

export type UpdateEndpointAccessError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates an Amazon Redshift Serverless managed endpoint.
 */
export const updateEndpointAccess: API.OperationMethod<
  UpdateEndpointAccessRequest,
  UpdateEndpointAccessResponse,
  UpdateEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateEndpointAccessRequest,
  output: UpdateEndpointAccessResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEndpointAccess",
}));

export type UpdateLakehouseConfigurationError =
  | ConflictException
  | DryRunException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Modifies the lakehouse configuration for a namespace. This operation allows you to manage Amazon Redshift federated permissions and Amazon Web Services IAM Identity Center trusted identity propagation.
 */
export const updateLakehouseConfiguration: API.OperationMethod<
  UpdateLakehouseConfigurationRequest,
  UpdateLakehouseConfigurationResponse,
  UpdateLakehouseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLakehouseConfigurationRequest,
  output: UpdateLakehouseConfigurationResponse,
  errors: [
    ConflictException,
    DryRunException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLakehouseConfiguration",
}));

export type UpdateNamespaceError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a namespace with the specified settings. Unless required, you can't update multiple parameters in one request. For example, you must specify both `adminUsername` and `adminUserPassword` to update either field, but you can't update both `kmsKeyId` and `logExports` in a single request.
 *
 * Similarly, an S3 Tables log-publishing update (a request where `logDestinationType` is `s3table`) cannot be combined with any other namespace configuration change and must be submitted as its own request.
 */
export const updateNamespace: API.OperationMethod<
  UpdateNamespaceRequest,
  UpdateNamespaceResponse,
  UpdateNamespaceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNamespaceRequest,
  output: UpdateNamespaceResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNamespace",
}));

export type UpdateScheduledActionError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a scheduled action.
 */
export const updateScheduledAction: API.OperationMethod<
  UpdateScheduledActionRequest,
  UpdateScheduledActionResponse,
  UpdateScheduledActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateScheduledActionRequest,
  output: UpdateScheduledActionResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateScheduledAction",
}));

export type UpdateSnapshotError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a snapshot.
 */
export const updateSnapshot: API.OperationMethod<
  UpdateSnapshotRequest,
  UpdateSnapshotResponse,
  UpdateSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSnapshotRequest,
  output: UpdateSnapshotResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSnapshot",
}));

export type UpdateSnapshotCopyConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a snapshot copy configuration.
 */
export const updateSnapshotCopyConfiguration: API.OperationMethod<
  UpdateSnapshotCopyConfigurationRequest,
  UpdateSnapshotCopyConfigurationResponse,
  UpdateSnapshotCopyConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSnapshotCopyConfigurationRequest,
  output: UpdateSnapshotCopyConfigurationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSnapshotCopyConfiguration",
}));

export type UpdateUsageLimitError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Update a usage limit in Amazon Redshift Serverless. You can't update the usage type or period of a usage limit.
 */
export const updateUsageLimit: API.OperationMethod<
  UpdateUsageLimitRequest,
  UpdateUsageLimitResponse,
  UpdateUsageLimitError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateUsageLimitRequest,
  output: UpdateUsageLimitResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUsageLimit",
}));

export type UpdateWorkgroupError =
  | ConflictException
  | InsufficientCapacityException
  | InternalServerException
  | Ipv6CidrBlockNotFoundException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a workgroup with the specified configuration settings. You can't update multiple parameters in one request. For example, you can update `baseCapacity` or `port` in a single request, but you can't update both in the same request.
 *
 * VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a workgroup is in an account with VPC BPA turned on, the following capabilities are blocked:
 *
 * - Creating a public access workgroup
 *
 * - Modifying a private workgroup to public
 *
 * - Adding a subnet with VPC BPA turned on to the workgroup when the workgroup is public
 *
 * For more information about VPC BPA, see Block public access to VPCs and subnets in the *Amazon VPC User Guide*.
 */
export const updateWorkgroup: API.OperationMethod<
  UpdateWorkgroupRequest,
  UpdateWorkgroupResponse,
  UpdateWorkgroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateWorkgroupRequest,
  output: UpdateWorkgroupResponse,
  errors: [
    ConflictException,
    InsufficientCapacityException,
    InternalServerException,
    Ipv6CidrBlockNotFoundException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateWorkgroup",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(Tag);
    case 2:
      return S.suspend(() =>
        S.Struct({
          recoveryPointId: S.String,
          snapshotName: S.String,
          retentionPeriod: S.optional(S.Number),
          tags: S.optional(TagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ConvertRecoveryPointToSnapshotRequest",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.optional(S.String),
          namespaceArn: S.optional(S.String),
          snapshotName: S.optional(S.String),
          snapshotCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          adminUsername: S.optional(S.String),
          status: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          ownerAccount: S.optional(S.String),
          totalBackupSizeInMegaBytes: S.optional(S.Number),
          actualIncrementalBackupSizeInMegaBytes: S.optional(S.Number),
          backupProgressInMegaBytes: S.optional(S.Number),
          currentBackupRateInMegaBytesPerSecond: S.optional(S.Number),
          estimatedSecondsToCompletion: S.optional(S.Number),
          elapsedTimeInSeconds: S.optional(S.Number),
          snapshotRetentionPeriod: S.optional(S.Number),
          snapshotRemainingDays: S.optional(S.Number),
          snapshotRetentionStartTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          snapshotArn: S.optional(S.String),
          accountsWithRestoreAccess: S.optional(AccountIdList),
          accountsWithProvisionedRestoreAccess: S.optional(AccountIdList),
          adminPasswordSecretArn: S.optional(S.String),
          adminPasswordSecretKmsKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "Snapshot" });
    case 5:
      return S.suspend(() => S.Struct({ snapshot: S.optional(Snapshot) })).annotate({
        identifier: "ConvertRecoveryPointToSnapshotResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workgroupName: S.String,
          customDomainName: S.String,
          customDomainCertificateArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateCustomDomainAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          customDomainName: S.optional(S.String),
          workgroupName: S.optional(S.String),
          customDomainCertificateArn: S.optional(S.String),
          customDomainCertificateExpiryTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
        }),
      ).annotate({
        identifier: "CreateCustomDomainAssociationResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          endpointName: S.String,
          subnetIds: SubnetIdList,
          workgroupName: S.String,
          vpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
          ownerAccount: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateEndpointAccessRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ vpcSecurityGroupId: S.optional(S.String), status: S.optional(S.String) }),
      ).annotate({
        identifier: "VpcSecurityGroupMembership",
      });
    case 2:
      return S.Array(VpcSecurityGroupMembership);
    case 3:
      return S.suspend(() =>
        S.Struct({
          networkInterfaceId: S.optional(S.String),
          subnetId: S.optional(S.String),
          privateIpAddress: S.optional(S.String),
          availabilityZone: S.optional(S.String),
          ipv6Address: S.optional(S.String),
        }),
      ).annotate({ identifier: "NetworkInterface" });
    case 4:
      return S.Array(NetworkInterface);
    case 5:
      return S.suspend(() =>
        S.Struct({
          vpcEndpointId: S.optional(S.String),
          vpcId: S.optional(S.String),
          networkInterfaces: S.optional(NetworkInterfaceList),
        }),
      ).annotate({ identifier: "VpcEndpoint" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          endpointName: S.optional(S.String),
          endpointStatus: S.optional(S.String),
          workgroupName: S.optional(S.String),
          endpointCreateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          port: S.optional(S.Number),
          address: S.optional(S.String),
          subnetIds: S.optional(SubnetIdList),
          vpcSecurityGroups: S.optional(VpcSecurityGroupMembershipList),
          vpcEndpoint: S.optional(VpcEndpoint),
          endpointArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EndpointAccess" });
    case 7:
      return S.suspend(() => S.Struct({ endpoint: S.optional(EndpointAccess) })).annotate({
        identifier: "CreateEndpointAccessResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          adminUsername: S.optional(SensitiveString),
          adminUserPassword: S.optional(SensitiveString),
          dbName: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          defaultIamRoleArn: S.optional(S.String),
          iamRoles: S.optional(IamRoleArnList),
          logExports: S.optional(LogExportList),
          tags: S.optional(TagList),
          manageAdminPassword: S.optional(S.Boolean),
          adminPasswordSecretKmsKeyId: S.optional(S.String),
          redshiftIdcApplicationArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateNamespaceRequest" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          s3Tables: S.optional(S3TableNameList),
          s3TableNamespace: S.optional(S.String),
          s3TableGranularity: S.optional(S.String),
          enabledAll: S.optional(S.Boolean),
          lastIngestionTimes: S.optional(S3TableLastIngestionTimeMap),
        }),
      ).annotate({ identifier: "S3TablePublishStatus" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          namespaceArn: S.optional(S.String),
          namespaceId: S.optional(S.String),
          namespaceName: S.optional(S.String),
          adminUsername: S.optional(SensitiveString),
          dbName: S.optional(S.String),
          kmsKeyId: S.optional(S.String),
          defaultIamRoleArn: S.optional(S.String),
          iamRoles: S.optional(IamRoleArnList),
          logExports: S.optional(LogExportList),
          status: S.optional(S.String),
          creationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          adminPasswordSecretArn: S.optional(S.String),
          adminPasswordSecretKmsKeyId: S.optional(S.String),
          lakehouseRegistrationStatus: S.optional(S.String),
          catalogArn: S.optional(S.String),
          s3TablePublishStatus: S.optional(S3TablePublishStatus),
        }),
      ).annotate({ identifier: "Namespace" });
    case 4:
      return S.suspend(() => S.Struct({ namespace: S.optional(Namespace) })).annotate({
        identifier: "CreateNamespaceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          capacity: S.Number,
          offeringId: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateReservationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          offeringId: S.optional(S.String),
          duration: S.optional(S.Number),
          upfrontCharge: S.optional(S.Number),
          hourlyCharge: S.optional(S.Number),
          currencyCode: S.optional(S.String),
          offeringType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ReservationOffering" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          reservationId: S.optional(S.String),
          reservationArn: S.optional(S.String),
          startDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          capacity: S.optional(S.Number),
          offering: S.optional(ReservationOffering),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "Reservation" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ reservation: S.optional(Reservation) })).annotate({
        identifier: "CreateReservationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          snapshotNamePrefix: S.String,
          retentionPeriod: S.optional(S.Number),
          tags: S.optional(TagList),
        }),
      ).annotate({
        identifier: "CreateSnapshotScheduleActionParameters",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ createSnapshot: CreateSnapshotScheduleActionParameters }),
      ]);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          at: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
        /*@__PURE__*/ S.Struct({ cron: S.String }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          scheduledActionName: S.String,
          targetAction: TargetAction,
          schedule: Schedule,
          roleArn: S.String,
          namespaceName: S.String,
          enabled: S.optional(S.Boolean),
          scheduledActionDescription: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateScheduledActionRequest",
      });
    case 5:
      return S.Array(/*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")));
    case 6:
      return S.suspend(() =>
        S.Struct({
          scheduledActionName: S.optional(S.String),
          schedule: S.optional(Schedule),
          scheduledActionDescription: S.optional(S.String),
          nextInvocations: S.optional(NextInvocationsList),
          roleArn: S.optional(S.String),
          state: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          targetAction: S.optional(TargetAction),
          namespaceName: S.optional(S.String),
          scheduledActionUuid: S.optional(S.String),
        }),
      ).annotate({ identifier: "ScheduledActionResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ scheduledAction: S.optional(ScheduledActionResponse) }),
      ).annotate({
        identifier: "CreateScheduledActionResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          snapshotName: S.String,
          retentionPeriod: S.optional(S.Number),
          tags: S.optional(TagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateSnapshotRequest" });
    case 1:
      return S.suspend(() => S.Struct({ snapshot: S.optional(Snapshot) })).annotate({
        identifier: "CreateSnapshotResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          destinationRegion: S.String,
          snapshotRetentionPeriod: S.optional(S.Number),
          destinationKmsKeyId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateSnapshotCopyConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          snapshotCopyConfigurationId: S.optional(S.String),
          snapshotCopyConfigurationArn: S.optional(S.String),
          namespaceName: S.optional(S.String),
          destinationRegion: S.optional(S.String),
          snapshotRetentionPeriod: S.optional(S.Number),
          destinationKmsKeyId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SnapshotCopyConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ snapshotCopyConfiguration: SnapshotCopyConfiguration }),
      ).annotate({
        identifier: "CreateSnapshotCopyConfigurationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String,
          usageType: S.String,
          amount: S.Number,
          period: S.optional(S.String),
          breachAction: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUsageLimitRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          usageLimitId: S.optional(S.String),
          usageLimitArn: S.optional(S.String),
          resourceArn: S.optional(S.String),
          usageType: S.optional(S.String),
          amount: S.optional(S.Number),
          period: S.optional(S.String),
          breachAction: S.optional(S.String),
        }),
      ).annotate({ identifier: "UsageLimit" });
    case 7:
      return S.suspend(() => S.Struct({ usageLimit: S.optional(UsageLimit) })).annotate({
        identifier: "CreateUsageLimitResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ parameterKey: S.optional(S.String), parameterValue: S.optional(S.String) }),
      ).annotate({ identifier: "ConfigParameter" });
    case 1:
      return S.Array(ConfigParameter);
    case 2:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), level: S.optional(S.Number) }),
      ).annotate({ identifier: "PerformanceTarget" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workgroupName: S.String,
          namespaceName: S.String,
          baseCapacity: S.optional(S.Number),
          enhancedVpcRouting: S.optional(S.Boolean),
          configParameters: S.optional(ConfigParameterList),
          securityGroupIds: S.optional(SecurityGroupIdList),
          subnetIds: S.optional(SubnetIdList),
          publiclyAccessible: S.optional(S.Boolean),
          tags: S.optional(TagList),
          port: S.optional(S.Number),
          maxCapacity: S.optional(S.Number),
          pricePerformanceTarget: S.optional(PerformanceTarget),
          ipAddressType: S.optional(S.String),
          trackName: S.optional(S.String),
          extraComputeForAutomaticOptimization: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateWorkgroupRequest" });
    case 4:
      return S.Array(VpcEndpoint);
    case 5:
      return S.suspend(() =>
        S.Struct({
          address: S.optional(S.String),
          port: S.optional(S.Number),
          vpcEndpoints: S.optional(VpcEndpointList),
        }),
      ).annotate({ identifier: "Endpoint" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          workgroupId: S.optional(S.String),
          workgroupArn: S.optional(S.String),
          workgroupName: S.optional(S.String),
          namespaceName: S.optional(S.String),
          baseCapacity: S.optional(S.Number),
          enhancedVpcRouting: S.optional(S.Boolean),
          configParameters: S.optional(ConfigParameterList),
          securityGroupIds: S.optional(SecurityGroupIdList),
          subnetIds: S.optional(SubnetIdList),
          status: S.optional(S.String),
          endpoint: S.optional(Endpoint),
          publiclyAccessible: S.optional(S.Boolean),
          creationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          port: S.optional(S.Number),
          customDomainName: S.optional(S.String),
          customDomainCertificateArn: S.optional(S.String),
          customDomainCertificateExpiryTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          workgroupVersion: S.optional(S.String),
          patchVersion: S.optional(S.String),
          maxCapacity: S.optional(S.Number),
          crossAccountVpcs: S.optional(VpcIds),
          ipAddressType: S.optional(S.String),
          pricePerformanceTarget: S.optional(PerformanceTarget),
          trackName: S.optional(S.String),
          pendingTrackName: S.optional(S.String),
          extraComputeForAutomaticOptimization: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Workgroup" });
    case 7:
      return S.suspend(() => S.Struct({ workgroup: S.optional(Workgroup) })).annotate({
        identifier: "CreateWorkgroupResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ workgroupName: S.String, customDomainName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteCustomDomainAssociationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteCustomDomainAssociationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ endpointName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEndpointAccessRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          finalSnapshotName: S.optional(S.String),
          finalSnapshotRetentionPeriod: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteNamespaceRequest" });
    case 4:
      return S.suspend(() => S.Struct({ namespace: Namespace })).annotate({
        identifier: "DeleteNamespaceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteResourcePolicyResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ scheduledActionName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteScheduledActionRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ snapshotName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteSnapshotRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ snapshotCopyConfigurationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteSnapshotCopyConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ usageLimitId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteUsageLimitRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ workgroupName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteWorkgroupRequest" });
    case 4:
      return S.suspend(() => S.Struct({ workgroup: Workgroup })).annotate({
        identifier: "DeleteWorkgroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          dbName: S.optional(S.String),
          durationSeconds: S.optional(S.Number),
          workgroupName: S.optional(S.String),
          customDomainName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetCredentialsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          dbUser: S.optional(SensitiveString),
          dbPassword: S.optional(SensitiveString),
          expiration: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          nextRefreshTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetCredentialsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ customDomainName: S.String, workgroupName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetCustomDomainAssociationRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ endpointName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetEndpointAccessRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ workgroupNames: WorkgroupNameList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetIdentityCenterAuthTokenRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          token: S.optional(SensitiveString),
          expirationTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(S.encodeKeys({ token: "Token", expirationTime: "ExpirationTime" })),
      ).annotate({
        identifier: "GetIdentityCenterAuthTokenResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ namespaceName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetNamespaceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ recoveryPointId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRecoveryPointRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          recoveryPointId: S.optional(S.String),
          recoveryPointCreateTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          totalSizeInMegaBytes: S.optional(S.Number),
          namespaceName: S.optional(S.String),
          workgroupName: S.optional(S.String),
          namespaceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecoveryPoint" });
    case 6:
      return S.suspend(() => S.Struct({ recoveryPoint: S.optional(RecoveryPoint) })).annotate({
        identifier: "GetRecoveryPointResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ reservationId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetReservationRequest" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ reservation: Reservation })).annotate({
        identifier: "GetReservationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ offeringId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetReservationOfferingRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ reservationOffering: ReservationOffering })).annotate({
        identifier: "GetReservationOfferingResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.optional(S.String), policy: S.optional(S.String) }),
      ).annotate({ identifier: "ResourcePolicy" });
    case 5:
      return S.suspend(() => S.Struct({ resourcePolicy: S.optional(ResourcePolicy) })).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ scheduledActionName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetScheduledActionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          snapshotName: S.optional(S.String),
          ownerAccount: S.optional(S.String),
          snapshotArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetSnapshotRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ tableRestoreRequestId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetTableRestoreStatusRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          tableRestoreRequestId: S.optional(S.String),
          status: S.optional(S.String),
          message: S.optional(S.String),
          requestTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          namespaceName: S.optional(S.String),
          workgroupName: S.optional(S.String),
          snapshotName: S.optional(S.String),
          progressInMegaBytes: S.optional(S.Number),
          totalDataInMegaBytes: S.optional(S.Number),
          sourceDatabaseName: S.optional(S.String),
          sourceSchemaName: S.optional(S.String),
          sourceTableName: S.optional(S.String),
          targetDatabaseName: S.optional(S.String),
          targetSchemaName: S.optional(S.String),
          newTableName: S.optional(S.String),
          recoveryPointId: S.optional(S.String),
        }),
      ).annotate({ identifier: "TableRestoreStatus" });
    case 2:
      return S.suspend(() =>
        S.Struct({ tableRestoreStatus: S.optional(TableRestoreStatus) }),
      ).annotate({
        identifier: "GetTableRestoreStatusResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ trackName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTrackRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ trackName: S.optional(S.String), workgroupVersion: S.optional(S.String) }),
      ).annotate({ identifier: "UpdateTarget" });
    case 5:
      return S.Array(UpdateTarget);
    case 6:
      return S.suspend(() =>
        S.Struct({
          trackName: S.optional(S.String),
          workgroupVersion: S.optional(S.String),
          updateTargets: S.optional(UpdateTargetsList),
        }),
      ).annotate({ identifier: "ServerlessTrack" });
    case 7:
      return S.suspend(() => S.Struct({ track: S.optional(ServerlessTrack) })).annotate({
        identifier: "GetTrackResponse",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ usageLimitId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetUsageLimitRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ workgroupName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetWorkgroupRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          customDomainName: S.optional(S.String),
          customDomainCertificateArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListCustomDomainAssociationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          customDomainCertificateArn: S.optional(S.String),
          customDomainCertificateExpiryTime: S.optional(
            T.DateFromString.pipe(T.TimestampFormat("date-time")),
          ),
          customDomainName: S.optional(S.String),
          workgroupName: S.optional(S.String),
        }),
      ).annotate({ identifier: "Association" });
    case 4:
      return S.Array(Association);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), associations: S.optional(AssociationList) }),
      ).annotate({
        identifier: "ListCustomDomainAssociationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          workgroupName: S.optional(S.String),
          vpcId: S.optional(S.String),
          ownerAccount: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListEndpointAccessRequest",
      });
    case 7:
      return S.Array(EndpointAccess);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), endpoints: EndpointAccessList }),
      ).annotate({
        identifier: "ListEndpointAccessResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          sourceArn: S.optional(S.String),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListManagedWorkgroupsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          managedWorkgroupName: S.optional(S.String),
          managedWorkgroupId: S.optional(S.String),
          sourceArn: S.optional(S.String),
          status: S.optional(ManagedWorkgroupStatus),
          creationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "ManagedWorkgroupListItem" });
    case 3:
      return S.Array(ManagedWorkgroupListItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          managedWorkgroups: S.optional(ManagedWorkgroups),
        }),
      ).annotate({
        identifier: "ListManagedWorkgroupsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListNamespacesRequest" });
    case 6:
      return S.Array(Namespace);
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), namespaces: NamespaceList }),
      ).annotate({ identifier: "ListNamespacesResponse" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          namespaceName: S.optional(S.String),
          namespaceArn: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListRecoveryPointsRequest",
      });
    case 1:
      return S.Array(RecoveryPoint);
    case 2:
      return S.suspend(() =>
        S.Struct({
          recoveryPoints: S.optional(RecoveryPointList),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecoveryPointsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListReservationOfferingsRequest",
      });
    case 4:
      return S.Array(ReservationOffering);
    case 5:
      return S.suspend(() =>
        S.Struct({
          reservationOfferingsList: ReservationOfferingsList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListReservationOfferingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListReservationsRequest" });
    case 7:
      return S.Array(Reservation);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ reservationsList: ReservationsList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListReservationsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          namespaceName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListScheduledActionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.optional(S.String),
          scheduledActionName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ScheduledActionAssociation",
      });
    case 3:
      return S.Array(ScheduledActionAssociation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          scheduledActions: S.optional(ScheduledActionsList),
        }),
      ).annotate({
        identifier: "ListScheduledActionsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.optional(S.String),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListSnapshotCopyConfigurationsRequest",
      });
    case 6:
      return S.Array(SnapshotCopyConfiguration);
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          snapshotCopyConfigurations: SnapshotCopyConfigurations,
        }),
      ).annotate({
        identifier: "ListSnapshotCopyConfigurationsResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          namespaceName: S.optional(S.String),
          namespaceArn: S.optional(S.String),
          ownerAccount: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListSnapshotsRequest" });
    case 1:
      return S.Array(Snapshot);
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), snapshots: S.optional(SnapshotList) }),
      ).annotate({ identifier: "ListSnapshotsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          namespaceName: S.optional(S.String),
          workgroupName: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTableRestoreStatusRequest",
      });
    case 4:
      return S.Array(TableRestoreStatus);
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          tableRestoreStatuses: S.optional(TableRestoreStatusList),
        }),
      ).annotate({
        identifier: "ListTableRestoreStatusResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(TagList) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTracksRequest" });
    case 1:
      return S.Array(ServerlessTrack);
    case 2:
      return S.suspend(() =>
        S.Struct({ tracks: S.optional(TrackList), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTracksResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.optional(S.String),
          usageType: S.optional(S.String),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListUsageLimitsRequest" });
    case 4:
      return S.Array(UsageLimit);
    case 5:
      return S.suspend(() =>
        S.Struct({ usageLimits: S.optional(UsageLimits), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListUsageLimitsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          ownerAccount: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListWorkgroupsRequest" });
    case 7:
      return S.Array(Workgroup);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), workgroups: WorkgroupList }),
      ).annotate({ identifier: "ListWorkgroupsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, policy: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          recoveryPointId: S.String,
          namespaceName: S.String,
          workgroupName: S.String,
          maintainIntegration: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreFromRecoveryPointRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ recoveryPointId: S.optional(S.String), namespace: S.optional(Namespace) }),
      ).annotate({
        identifier: "RestoreFromRecoveryPointResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          workgroupName: S.String,
          snapshotName: S.optional(S.String),
          snapshotArn: S.optional(S.String),
          ownerAccount: S.optional(S.String),
          manageAdminPassword: S.optional(S.Boolean),
          adminPasswordSecretKmsKeyId: S.optional(S.String),
          maintainIntegration: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreFromSnapshotRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          snapshotName: S.optional(S.String),
          ownerAccount: S.optional(S.String),
          namespace: S.optional(Namespace),
        }),
      ).annotate({
        identifier: "RestoreFromSnapshotResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          workgroupName: S.String,
          recoveryPointId: S.String,
          sourceDatabaseName: S.String,
          sourceSchemaName: S.optional(S.String),
          sourceTableName: S.String,
          targetDatabaseName: S.optional(S.String),
          targetSchemaName: S.optional(S.String),
          newTableName: S.String,
          activateCaseSensitiveIdentifier: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreTableFromRecoveryPointRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          workgroupName: S.String,
          snapshotName: S.String,
          sourceDatabaseName: S.String,
          sourceSchemaName: S.optional(S.String),
          sourceTableName: S.String,
          targetDatabaseName: S.optional(S.String),
          targetSchemaName: S.optional(S.String),
          newTableName: S.String,
          activateCaseSensitiveIdentifier: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "RestoreTableFromSnapshotRequest",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          workgroupName: S.String,
          customDomainName: S.String,
          customDomainCertificateArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateCustomDomainAssociationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          endpointName: S.String,
          vpcSecurityGroupIds: S.optional(VpcSecurityGroupIdList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateEndpointAccessRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          lakehouseRegistration: S.optional(S.String),
          catalogName: S.optional(S.String),
          lakehouseIdcRegistration: S.optional(S.String),
          lakehouseIdcApplicationArn: S.optional(S.String),
          dryRun: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLakehouseConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.optional(S.String),
          lakehouseIdcApplicationArn: S.optional(S.String),
          lakehouseRegistrationStatus: S.optional(S.String),
          catalogArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UpdateLakehouseConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          namespaceName: S.String,
          adminUserPassword: S.optional(SensitiveString),
          adminUsername: S.optional(SensitiveString),
          kmsKeyId: S.optional(S.String),
          defaultIamRoleArn: S.optional(S.String),
          iamRoles: S.optional(IamRoleArnList),
          logExports: S.optional(LogExportList),
          manageAdminPassword: S.optional(S.Boolean),
          adminPasswordSecretKmsKeyId: S.optional(S.String),
          logDestinationType: S.optional(S.String),
          s3TableAction: S.optional(S.String),
          s3TableNames: S.optional(S3TableNameList),
          s3TableKmsKeyId: S.optional(S.String),
          s3TableGranularity: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateNamespaceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          scheduledActionName: S.String,
          targetAction: S.optional(TargetAction),
          schedule: S.optional(Schedule),
          roleArn: S.optional(S.String),
          enabled: S.optional(S.Boolean),
          scheduledActionDescription: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateScheduledActionRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ snapshotName: S.String, retentionPeriod: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateSnapshotRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          snapshotCopyConfigurationId: S.String,
          snapshotRetentionPeriod: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSnapshotCopyConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          usageLimitId: S.String,
          amount: S.optional(S.Number),
          breachAction: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateUsageLimitRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workgroupName: S.String,
          baseCapacity: S.optional(S.Number),
          enhancedVpcRouting: S.optional(S.Boolean),
          configParameters: S.optional(ConfigParameterList),
          publiclyAccessible: S.optional(S.Boolean),
          subnetIds: S.optional(SubnetIdList),
          securityGroupIds: S.optional(SecurityGroupIdList),
          port: S.optional(S.Number),
          maxCapacity: S.optional(S.Number),
          ipAddressType: S.optional(S.String),
          pricePerformanceTarget: S.optional(PerformanceTarget),
          trackName: S.optional(S.String),
          extraComputeForAutomaticOptimization: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateWorkgroupRequest" });
  }
}
