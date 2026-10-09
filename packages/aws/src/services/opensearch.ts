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
const ns = /*@__PURE__*/ T.XmlNamespace("http://es.amazonaws.com/doc/2021-01-01/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "OpenSearch",
  serviceShapeName: "AmazonOpenSearchService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "es" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-01-01");
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
              `https://es-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://es-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            if ("aws" === _.getAttr(PartitionResult, "name")) {
              return e(`https://aos.${Region}.api.aws`);
            }
            if ("aws-cn" === _.getAttr(PartitionResult, "name")) {
              return e(`https://aos.${Region}.api.amazonwebservices.com.cn`);
            }
            if ("aws-us-gov" === _.getAttr(PartitionResult, "name")) {
              return e(`https://aos.${Region}.api.aws`);
            }
            return e(`https://es.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://es.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class BaseException
  extends /*@__PURE__*/ S.TaggedError<BaseException>()("BaseException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class DependencyFailureException
  extends /*@__PURE__*/ S.TaggedError<DependencyFailureException>()(
    "DependencyFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class DisabledOperationException
  extends /*@__PURE__*/ S.TaggedError<DisabledOperationException>()(
    "DisabledOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalException
  extends /*@__PURE__*/ S.TaggedError<InternalException>()(
    "InternalException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidPaginationTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidPaginationTokenException>()(
    "InvalidPaginationTokenException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidTypeException
  extends /*@__PURE__*/ S.TaggedError<InvalidTypeException>()(
    "InvalidTypeException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class SlotNotAvailableException
  extends /*@__PURE__*/ S.TaggedError<SlotNotAvailableException>()(
    "SlotNotAvailableException",
    {
      SlotSuggestions: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(378, __c47, 2)).annotate({ identifier: "SlotList" }),
      ),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ConnectionId = string;
export interface AcceptInboundConnectionRequest {
  ConnectionId: string;
}
export type OwnerId = string;
export type DomainName = string;
export type Region = string;
export interface AWSDomainInformation {
  OwnerId?: string;
  DomainName: string;
  Region?: string;
}
export interface DomainInformationContainer {
  AWSDomainInformation?: AWSDomainInformation;
}
export type InboundConnectionStatusCode =
  | "PENDING_ACCEPTANCE"
  | "APPROVED"
  | "PROVISIONING"
  | "ACTIVE"
  | "REJECTING"
  | "REJECTED"
  | "DELETING"
  | "DELETED"
  | (string & {});
export type ConnectionStatusMessage = string;
export interface InboundConnectionStatus {
  StatusCode?: InboundConnectionStatusCode;
  Message?: string;
}
export type ConnectionMode = "DIRECT" | "VPC_ENDPOINT" | (string & {});
export interface InboundConnection {
  LocalDomainInfo?: DomainInformationContainer;
  RemoteDomainInfo?: DomainInformationContainer;
  ConnectionId?: string;
  ConnectionStatus?: InboundConnectionStatus;
  ConnectionMode?: ConnectionMode;
}
export interface AcceptInboundConnectionResponse {
  Connection?: InboundConnection;
}
export type DataSourceName = string;
export type RoleArn = string;
export interface S3GlueDataCatalog {
  RoleArn?: string;
}
export type DataSourceType = { S3GlueDataCatalog: S3GlueDataCatalog };
export type DataSourceDescription = string;
export interface AddDataSourceRequest {
  DomainName: string;
  Name: string;
  DataSourceType: DataSourceType;
  Description?: string;
}
export interface AddDataSourceResponse {
  Message?: string;
}
export type DirectQueryDataSourceName = string;
export type DirectQueryDataSourceRoleArn = string;
export interface CloudWatchDirectQueryDataSource {
  RoleArn: string;
}
export interface SecurityLakeDirectQueryDataSource {
  RoleArn: string;
}
export type AMPWorkspaceArn = string;
export interface PrometheusDirectQueryDataSource {
  RoleArn: string;
  WorkspaceArn: string;
}
export type DirectQueryDataSourceType =
  | { CloudWatchLog: CloudWatchDirectQueryDataSource; SecurityLake?: never; Prometheus?: never }
  | { CloudWatchLog?: never; SecurityLake: SecurityLakeDirectQueryDataSource; Prometheus?: never }
  | { CloudWatchLog?: never; SecurityLake?: never; Prometheus: PrometheusDirectQueryDataSource };
export type DirectQueryDataSourceDescription = string;
export type ARN = string;
export type DirectQueryOpenSearchARNList = string[];
export type PolicyDocument = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface AddDirectQueryDataSourceRequest {
  DataSourceName: string;
  DataSourceType: DirectQueryDataSourceType;
  Description?: string;
  OpenSearchArns?: string[];
  DataSourceAccessPolicy?: string;
  TagList?: Tag[];
}
export interface AddDirectQueryDataSourceResponse {
  DataSourceArn?: string;
}
export interface AddTagsRequest {
  ARN: string;
  TagList: Tag[];
}
export interface AddTagsResponse {}
export type PackageID = string;
export type PackageIDList = string[];
export interface KeyStoreAccessOption {
  KeyAccessRoleArn?: string;
  KeyStoreAccessEnabled: boolean;
}
export interface PackageAssociationConfiguration {
  KeyStoreAccessOption?: KeyStoreAccessOption;
}
export interface AssociatePackageRequest {
  PackageID: string;
  DomainName: string;
  PrerequisitePackageIDList?: string[];
  AssociationConfiguration?: PackageAssociationConfiguration;
}
export type PackageName = string;
export type PackageType =
  | "TXT-DICTIONARY"
  | "ZIP-PLUGIN"
  | "PACKAGE-LICENSE"
  | "PACKAGE-CONFIG"
  | (string & {});
export type LastUpdated = Date;
export type DomainPackageStatus =
  | "ASSOCIATING"
  | "ASSOCIATION_FAILED"
  | "ACTIVE"
  | "DISSOCIATING"
  | "DISSOCIATION_FAILED"
  | (string & {});
export type PackageVersion = string;
export type ReferencePath = string;
export type ErrorType = string;
export type ErrorMessage = string;
export interface ErrorDetails {
  ErrorType?: string;
  ErrorMessage?: string;
}
export interface DomainPackageDetails {
  PackageID?: string;
  PackageName?: string;
  PackageType?: PackageType;
  LastUpdated?: Date;
  DomainName?: string;
  DomainPackageStatus?: DomainPackageStatus;
  PackageVersion?: string;
  PrerequisitePackageIDList?: string[];
  ReferencePath?: string;
  ErrorDetails?: ErrorDetails;
  AssociationConfiguration?: PackageAssociationConfiguration;
}
export interface AssociatePackageResponse {
  DomainPackageDetails?: DomainPackageDetails;
}
export interface PackageDetailsForAssociation {
  PackageID: string;
  PrerequisitePackageIDList?: string[];
  AssociationConfiguration?: PackageAssociationConfiguration;
}
export type PackageDetailsForAssociationList = PackageDetailsForAssociation[];
export interface AssociatePackagesRequest {
  PackageList: PackageDetailsForAssociation[];
  DomainName: string;
}
export type DomainPackageDetailsList = DomainPackageDetails[];
export interface AssociatePackagesResponse {
  DomainPackageDetailsList?: DomainPackageDetails[];
}
export type Id = string;
export interface WorkspaceConfigurationInput {
  name: string;
  workspaceType: string;
}
export type ClientToken = string;
export interface AttachDataSourceRequest {
  id: string;
  dataSourceArn: string;
  workspaceId?: string;
  workspaceConfiguration?: WorkspaceConfigurationInput;
  clientToken?: string;
}
export type DataSourceAttachmentStatus = "PENDING" | "ATTACHED" | "FAILED" | (string & {});
export interface AttachDataSourceResponse {
  attachmentId?: string;
  id?: string;
  arn?: string;
  dataSourceArn?: string;
  status?: DataSourceAttachmentStatus;
}
export type AWSAccount = string;
export type AWSServicePrincipal = "application.opensearchservice.amazonaws.com" | (string & {});
export type RegionsList = string[];
export interface ServiceOptions {
  SupportedRegions?: string[];
}
export interface AuthorizeVpcEndpointAccessRequest {
  DomainName: string;
  Account?: string;
  Service?: AWSServicePrincipal;
  ServiceOptions?: ServiceOptions;
}
export type PrincipalType = "AWS_ACCOUNT" | "AWS_SERVICE" | (string & {});
export interface AuthorizedPrincipal {
  PrincipalType?: PrincipalType;
  Principal?: string;
  ServiceOptions?: ServiceOptions;
}
export interface AuthorizeVpcEndpointAccessResponse {
  AuthorizedPrincipal: AuthorizedPrincipal;
}
export type DryRun = boolean;
export interface CancelDomainConfigChangeRequest {
  DomainName: string;
  DryRun?: boolean;
}
export type GUID = string;
export type GUIDList = string[];
export interface CancelledChangeProperty {
  PropertyName?: string;
  CancelledValue?: string;
  ActiveValue?: string;
}
export type CancelledChangePropertyList = CancelledChangeProperty[];
export interface CancelDomainConfigChangeResponse {
  CancelledChangeIds?: string[];
  CancelledChangeProperties?: CancelledChangeProperty[];
  DryRun?: boolean;
}
export interface CancelServiceSoftwareUpdateRequest {
  DomainName: string;
}
export type DeploymentStatus =
  | "PENDING_UPDATE"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "NOT_ELIGIBLE"
  | "ELIGIBLE"
  | (string & {});
export type DeploymentCloseDateTimeStamp = Date;
export interface ServiceSoftwareOptions {
  CurrentVersion?: string;
  NewVersion?: string;
  UpdateAvailable?: boolean;
  Cancellable?: boolean;
  UpdateStatus?: DeploymentStatus;
  Description?: string;
  AutomatedUpdateDate?: Date;
  OptionalDeployment?: boolean;
}
export interface CancelServiceSoftwareUpdateResponse {
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}
export type ApplicationName = string;
export interface DataSource {
  dataSourceArn?: string;
  dataSourceDescription?: string;
  iamRoleForDataSourceArn?: string;
}
export type DataSources = DataSource[];
export interface IamIdentityCenterOptionsInput {
  enabled?: boolean;
  iamIdentityCenterInstanceArn?: string;
  iamRoleForIdentityCenterApplicationArn?: string;
}
export type AppConfigType =
  | "opensearchDashboards.dashboardAdmin.users"
  | "opensearchDashboards.dashboardAdmin.groups"
  | (string & {});
export type AppConfigValue = string;
export interface AppConfig {
  key?: AppConfigType;
  value?: string;
}
export type AppConfigs = AppConfig[];
export type KmsKeyArn = string;
export interface CreateApplicationRequest {
  clientToken?: string;
  name: string;
  dataSources?: DataSource[];
  iamIdentityCenterOptions?: IamIdentityCenterOptionsInput;
  appConfigs?: AppConfig[];
  tagList?: Tag[];
  kmsKeyArn?: string;
}
export interface IamIdentityCenterOptions {
  enabled?: boolean;
  iamIdentityCenterInstanceArn?: string;
  iamRoleForIdentityCenterApplicationArn?: string;
  iamIdentityCenterApplicationArn?: string;
}
export interface CreateApplicationResponse {
  id?: string;
  name?: string;
  arn?: string;
  dataSources?: DataSource[];
  iamIdentityCenterOptions?: IamIdentityCenterOptions;
  appConfigs?: AppConfig[];
  tagList?: Tag[];
  createdAt?: Date;
  kmsKeyArn?: string;
}
export type VersionString = string;
export type OpenSearchPartitionInstanceType =
  | "m3.medium.search"
  | "m3.large.search"
  | "m3.xlarge.search"
  | "m3.2xlarge.search"
  | "m4.large.search"
  | "m4.xlarge.search"
  | "m4.2xlarge.search"
  | "m4.4xlarge.search"
  | "m4.10xlarge.search"
  | "m5.large.search"
  | "m5.xlarge.search"
  | "m5.2xlarge.search"
  | "m5.4xlarge.search"
  | "m5.12xlarge.search"
  | "m5.24xlarge.search"
  | "r5.large.search"
  | "r5.xlarge.search"
  | "r5.2xlarge.search"
  | "r5.4xlarge.search"
  | "r5.12xlarge.search"
  | "r5.24xlarge.search"
  | "c5.large.search"
  | "c5.xlarge.search"
  | "c5.2xlarge.search"
  | "c5.4xlarge.search"
  | "c5.9xlarge.search"
  | "c5.18xlarge.search"
  | "t3.nano.search"
  | "t3.micro.search"
  | "t3.small.search"
  | "t3.medium.search"
  | "t3.large.search"
  | "t3.xlarge.search"
  | "t3.2xlarge.search"
  | "or1.medium.search"
  | "or1.large.search"
  | "or1.xlarge.search"
  | "or1.2xlarge.search"
  | "or1.4xlarge.search"
  | "or1.8xlarge.search"
  | "or1.12xlarge.search"
  | "or1.16xlarge.search"
  | "ultrawarm1.medium.search"
  | "ultrawarm1.large.search"
  | "ultrawarm1.xlarge.search"
  | "t2.micro.search"
  | "t2.small.search"
  | "t2.medium.search"
  | "r3.large.search"
  | "r3.xlarge.search"
  | "r3.2xlarge.search"
  | "r3.4xlarge.search"
  | "r3.8xlarge.search"
  | "i2.xlarge.search"
  | "i2.2xlarge.search"
  | "d2.xlarge.search"
  | "d2.2xlarge.search"
  | "d2.4xlarge.search"
  | "d2.8xlarge.search"
  | "c4.large.search"
  | "c4.xlarge.search"
  | "c4.2xlarge.search"
  | "c4.4xlarge.search"
  | "c4.8xlarge.search"
  | "r4.large.search"
  | "r4.xlarge.search"
  | "r4.2xlarge.search"
  | "r4.4xlarge.search"
  | "r4.8xlarge.search"
  | "r4.16xlarge.search"
  | "i3.large.search"
  | "i3.xlarge.search"
  | "i3.2xlarge.search"
  | "i3.4xlarge.search"
  | "i3.8xlarge.search"
  | "i3.16xlarge.search"
  | "r6g.large.search"
  | "r6g.xlarge.search"
  | "r6g.2xlarge.search"
  | "r6g.4xlarge.search"
  | "r6g.8xlarge.search"
  | "r6g.12xlarge.search"
  | "m6g.large.search"
  | "m6g.xlarge.search"
  | "m6g.2xlarge.search"
  | "m6g.4xlarge.search"
  | "m6g.8xlarge.search"
  | "m6g.12xlarge.search"
  | "c6g.large.search"
  | "c6g.xlarge.search"
  | "c6g.2xlarge.search"
  | "c6g.4xlarge.search"
  | "c6g.8xlarge.search"
  | "c6g.12xlarge.search"
  | "r6gd.large.search"
  | "r6gd.xlarge.search"
  | "r6gd.2xlarge.search"
  | "r6gd.4xlarge.search"
  | "r6gd.8xlarge.search"
  | "r6gd.12xlarge.search"
  | "r6gd.16xlarge.search"
  | "t4g.small.search"
  | "t4g.medium.search"
  | (string & {});
export type IntegerClass = number;
export interface ZoneAwarenessConfig {
  AvailabilityZoneCount?: number;
}
export type OpenSearchWarmPartitionInstanceType =
  | "ultrawarm1.medium.search"
  | "ultrawarm1.large.search"
  | "ultrawarm1.xlarge.search"
  | (string & {});
export interface ColdStorageOptions {
  Enabled: boolean;
}
export type NodeOptionsNodeType = "coordinator" | (string & {});
export interface NodeConfig {
  Enabled?: boolean;
  Type?: OpenSearchPartitionInstanceType;
  Count?: number;
}
export interface NodeOption {
  NodeType?: NodeOptionsNodeType;
  NodeConfig?: NodeConfig;
}
export type NodeOptionsList = NodeOption[];
export interface ClusterConfig {
  InstanceType?: OpenSearchPartitionInstanceType;
  InstanceCount?: number;
  DedicatedMasterEnabled?: boolean;
  ZoneAwarenessEnabled?: boolean;
  ZoneAwarenessConfig?: ZoneAwarenessConfig;
  DedicatedMasterType?: OpenSearchPartitionInstanceType;
  DedicatedMasterCount?: number;
  WarmEnabled?: boolean;
  WarmType?: OpenSearchWarmPartitionInstanceType;
  WarmCount?: number;
  ColdStorageOptions?: ColdStorageOptions;
  MultiAZWithStandbyEnabled?: boolean;
  NodeOptions?: NodeOption[];
}
export type VolumeType = "standard" | "gp2" | "io1" | "gp3" | (string & {});
export interface EBSOptions {
  EBSEnabled?: boolean;
  VolumeType?: VolumeType;
  VolumeSize?: number;
  Iops?: number;
  Throughput?: number;
}
export type IPAddressType = "ipv4" | "dualstack" | (string & {});
export interface SnapshotOptions {
  AutomatedSnapshotStartHour?: number;
}
export type StringList = string[];
export interface VPCOptions {
  SubnetIds?: string[];
  SecurityGroupIds?: string[];
  EgressEnabled?: boolean;
}
export type UserPoolId = string;
export type IdentityPoolId = string;
export interface CognitoOptions {
  Enabled?: boolean;
  UserPoolId?: string;
  IdentityPoolId?: string;
  RoleArn?: string;
}
export type KmsKeyId = string;
export interface EncryptionAtRestOptions {
  Enabled?: boolean;
  KmsKeyId?: string;
}
export interface NodeToNodeEncryptionOptions {
  Enabled?: boolean;
}
export type AdvancedOptions = { [key: string]: string | undefined };
export type LogType =
  | "INDEX_SLOW_LOGS"
  | "SEARCH_SLOW_LOGS"
  | "ES_APPLICATION_LOGS"
  | "AUDIT_LOGS"
  | (string & {});
export type CloudWatchLogsLogGroupArn = string;
export interface LogPublishingOption {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
export type LogPublishingOptions = { [key in LogType]?: LogPublishingOption };
export type TLSSecurityPolicy =
  | "Policy-Min-TLS-1-0-2019-07"
  | "Policy-Min-TLS-1-2-2019-07"
  | "Policy-Min-TLS-1-2-PFS-2023-10"
  | "Policy-Min-TLS-1-2-RFC9151-FIPS-2024-08"
  | (string & {});
export type DomainNameFqdn = string;
export interface DomainEndpointOptions {
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: TLSSecurityPolicy;
  CustomEndpointEnabled?: boolean;
  CustomEndpoint?: string;
  CustomEndpointCertificateArn?: string;
}
export type Username = string | redacted.Redacted<string>;
export type Password = string | redacted.Redacted<string>;
export interface MasterUserOptions {
  MasterUserARN?: string;
  MasterUserName?: string | redacted.Redacted<string>;
  MasterUserPassword?: string | redacted.Redacted<string>;
}
export type SAMLMetadata = string;
export type SAMLEntityId = string;
export interface SAMLIdp {
  MetadataContent: string;
  EntityId: string;
}
export type BackendRole = string;
export interface SAMLOptionsInput {
  Enabled?: boolean;
  Idp?: SAMLIdp;
  MasterUserName?: string | redacted.Redacted<string>;
  MasterBackendRole?: string;
  SubjectKey?: string;
  RolesKey?: string;
  SessionTimeoutMinutes?: number;
}
export type SubjectKey = string;
export type RolesKey = string;
export type JwksUrl = string;
export interface JWTOptionsInput {
  Enabled?: boolean;
  SubjectKey?: string;
  RolesKey?: string;
  JwksUrl?: string;
  PublicKey?: string;
}
export type IAMFederationSubjectKey = string;
export type IAMFederationRolesKey = string;
export interface IAMFederationOptionsInput {
  Enabled?: boolean;
  SubjectKey?: string;
  RolesKey?: string;
}
export interface AdvancedSecurityOptionsInput {
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  MasterUserOptions?: MasterUserOptions;
  SAMLOptions?: SAMLOptionsInput;
  JWTOptions?: JWTOptionsInput;
  IAMFederationOptions?: IAMFederationOptionsInput;
  AnonymousAuthEnabled?: boolean;
}
export type IdentityCenterInstanceARN = string;
export type SubjectKeyIdCOption = "UserName" | "UserId" | "Email" | (string & {});
export type RolesKeyIdCOption = "GroupName" | "GroupId" | (string & {});
export interface IdentityCenterOptionsInput {
  EnabledAPIAccess?: boolean;
  IdentityCenterInstanceARN?: string;
  IdentityCenterInstanceRegion?: string;
  SubjectKey?: SubjectKeyIdCOption;
  RolesKey?: RolesKeyIdCOption;
}
export type AutoTuneDesiredState = "ENABLED" | "DISABLED" | (string & {});
export type StartAt = Date;
export type DurationValue = number;
export type TimeUnit = "HOURS" | (string & {});
export interface Duration {
  Value?: number;
  Unit?: TimeUnit;
}
export interface AutoTuneMaintenanceSchedule {
  StartAt?: Date;
  Duration?: Duration;
  CronExpressionForRecurrence?: string;
}
export type AutoTuneMaintenanceScheduleList = AutoTuneMaintenanceSchedule[];
export interface AutoTuneOptionsInput {
  DesiredState?: AutoTuneDesiredState;
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
  UseOffPeakWindow?: boolean;
}
export type StartTimeHours = number;
export type StartTimeMinutes = number;
export interface WindowStartTime {
  Hours: number;
  Minutes: number;
}
export interface OffPeakWindow {
  WindowStartTime?: WindowStartTime;
}
export interface OffPeakWindowOptions {
  Enabled?: boolean;
  OffPeakWindow?: OffPeakWindow;
}
export interface SoftwareUpdateOptions {
  AutoSoftwareUpdateEnabled?: boolean;
  UseLatestServiceSoftwareForBlueGreen?: boolean;
}
export type NaturalLanguageQueryGenerationDesiredState = "ENABLED" | "DISABLED" | (string & {});
export interface NaturalLanguageQueryGenerationOptionsInput {
  DesiredState?: NaturalLanguageQueryGenerationDesiredState;
}
export interface S3VectorsEngine {
  Enabled?: boolean;
}
export interface ServerlessVectorAcceleration {
  Enabled?: boolean;
}
export interface AIMLOptionsInput {
  NaturalLanguageQueryGenerationOptions?: NaturalLanguageQueryGenerationOptionsInput;
  S3VectorsEngine?: S3VectorsEngine;
  ServerlessVectorAcceleration?: ServerlessVectorAcceleration;
}
export type DeploymentStrategy = "Default" | "CapacityOptimized" | (string & {});
export interface DeploymentStrategyOptions {
  DeploymentStrategy: DeploymentStrategy;
}
export interface AutomatedSnapshotPauseRequestOptions {
  Enabled: boolean;
  StartTime?: Date;
  EndTime?: Date;
}
export type DomainUseCase = "SEARCH" | "VECTOR" | "OBSERVABILITY" | "MIXED" | (string & {});
export type EngineMode = "GENERAL" | "OPTIMIZED" | (string & {});
export interface CreateDomainRequest {
  DomainName: string;
  EngineVersion?: string;
  ClusterConfig?: ClusterConfig;
  EBSOptions?: EBSOptions;
  AccessPolicies?: string;
  IPAddressType?: IPAddressType;
  SnapshotOptions?: SnapshotOptions;
  VPCOptions?: VPCOptions;
  CognitoOptions?: CognitoOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  AdvancedOptions?: { [key: string]: string | undefined };
  LogPublishingOptions?: { [key: string]: LogPublishingOption | undefined };
  DomainEndpointOptions?: DomainEndpointOptions;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
  IdentityCenterOptions?: IdentityCenterOptionsInput;
  TagList?: Tag[];
  AutoTuneOptions?: AutoTuneOptionsInput;
  OffPeakWindowOptions?: OffPeakWindowOptions;
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
  AIMLOptions?: AIMLOptionsInput;
  DeploymentStrategyOptions?: DeploymentStrategyOptions;
  AutomatedSnapshotPauseOptions?: AutomatedSnapshotPauseRequestOptions;
  UseCase?: DomainUseCase;
  EngineMode?: EngineMode;
}
export type DomainId = string;
export type ServiceUrl = string;
export type EndpointsMap = { [key: string]: string | undefined };
export type HostedZoneId = string;
export interface VPCDerivedInfo {
  VPCId?: string;
  SubnetIds?: string[];
  AvailabilityZones?: string[];
  SecurityGroupIds?: string[];
  EgressEnabled?: boolean;
}
export interface SAMLOptionsOutput {
  Enabled?: boolean;
  Idp?: SAMLIdp;
  SubjectKey?: string;
  RolesKey?: string;
  SessionTimeoutMinutes?: number;
}
export interface JWTOptionsOutput {
  Enabled?: boolean;
  SubjectKey?: string;
  RolesKey?: string;
  JwksUrl?: string;
  PublicKey?: string;
}
export interface IAMFederationOptionsOutput {
  Enabled?: boolean;
  SubjectKey?: string;
  RolesKey?: string;
}
export type DisableTimestamp = Date;
export interface AdvancedSecurityOptions {
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  SAMLOptions?: SAMLOptionsOutput;
  JWTOptions?: JWTOptionsOutput;
  IAMFederationOptions?: IAMFederationOptionsOutput;
  AnonymousAuthDisableDate?: Date;
  AnonymousAuthEnabled?: boolean;
}
export type IdentityCenterApplicationARN = string;
export type IdentityStoreId = string;
export interface IdentityCenterOptions {
  EnabledAPIAccess?: boolean;
  IdentityCenterInstanceARN?: string;
  IdentityCenterInstanceRegion?: string;
  SubjectKey?: SubjectKeyIdCOption;
  RolesKey?: RolesKeyIdCOption;
  IdentityCenterApplicationARN?: string;
  IdentityStoreId?: string;
}
export type AutoTuneState =
  | "ENABLED"
  | "DISABLED"
  | "ENABLE_IN_PROGRESS"
  | "DISABLE_IN_PROGRESS"
  | "DISABLED_AND_ROLLBACK_SCHEDULED"
  | "DISABLED_AND_ROLLBACK_IN_PROGRESS"
  | "DISABLED_AND_ROLLBACK_COMPLETE"
  | "DISABLED_AND_ROLLBACK_ERROR"
  | "ERROR"
  | (string & {});
export interface AutoTuneOptionsOutput {
  State?: AutoTuneState;
  ErrorMessage?: string;
  UseOffPeakWindow?: boolean;
}
export type Message = string;
export type ConfigChangeStatus =
  | "Pending"
  | "Initializing"
  | "Validating"
  | "ValidationFailed"
  | "ApplyingChanges"
  | "Completed"
  | "PendingUserInput"
  | "Cancelled"
  | (string & {});
export type InitiatedBy = "CUSTOMER" | "SERVICE" | (string & {});
export type UpdateTimestamp = Date;
export interface ChangeProgressDetails {
  ChangeId?: string;
  Message?: string;
  ConfigChangeStatus?: ConfigChangeStatus;
  InitiatedBy?: InitiatedBy;
  StartTime?: Date;
  LastUpdatedTime?: Date;
}
export type DomainProcessingStatusType =
  | "Creating"
  | "Active"
  | "Modifying"
  | "UpgradingEngineVersion"
  | "UpdatingServiceSoftware"
  | "Isolated"
  | "Deleting"
  | (string & {});
export type PropertyValueType = "PLAIN_TEXT" | "STRINGIFIED_JSON" | (string & {});
export interface ModifyingProperties {
  Name?: string;
  ActiveValue?: string;
  PendingValue?: string;
  ValueType?: PropertyValueType;
}
export type ModifyingPropertiesList = ModifyingProperties[];
export type NaturalLanguageQueryGenerationCurrentState =
  | "NOT_ENABLED"
  | "ENABLE_COMPLETE"
  | "ENABLE_IN_PROGRESS"
  | "ENABLE_FAILED"
  | "DISABLE_COMPLETE"
  | "DISABLE_IN_PROGRESS"
  | "DISABLE_FAILED"
  | (string & {});
export interface NaturalLanguageQueryGenerationOptionsOutput {
  DesiredState?: NaturalLanguageQueryGenerationDesiredState;
  CurrentState?: NaturalLanguageQueryGenerationCurrentState;
}
export interface AIMLOptionsOutput {
  NaturalLanguageQueryGenerationOptions?: NaturalLanguageQueryGenerationOptionsOutput;
  S3VectorsEngine?: S3VectorsEngine;
  ServerlessVectorAcceleration?: ServerlessVectorAcceleration;
}
export type PauseState = "Active" | "Completed" | "Scheduled" | "Disabled" | (string & {});
export interface AutomatedSnapshotPauseOptions {
  Enabled: boolean;
  StartTime?: Date;
  EndTime?: Date;
  State?: PauseState;
}
export interface DomainStatus {
  DomainId: string;
  DomainName: string;
  ARN: string;
  Created?: boolean;
  Deleted?: boolean;
  Endpoint?: string;
  EndpointV2?: string;
  Endpoints?: { [key: string]: string | undefined };
  DomainEndpointV2HostedZoneId?: string;
  Processing?: boolean;
  UpgradeProcessing?: boolean;
  EngineVersion?: string;
  ClusterConfig: ClusterConfig;
  EBSOptions?: EBSOptions;
  AccessPolicies?: string;
  IPAddressType?: IPAddressType;
  SnapshotOptions?: SnapshotOptions;
  VPCOptions?: VPCDerivedInfo;
  CognitoOptions?: CognitoOptions;
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  AdvancedOptions?: { [key: string]: string | undefined };
  LogPublishingOptions?: { [key: string]: LogPublishingOption | undefined };
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
  DomainEndpointOptions?: DomainEndpointOptions;
  AdvancedSecurityOptions?: AdvancedSecurityOptions;
  IdentityCenterOptions?: IdentityCenterOptions;
  AutoTuneOptions?: AutoTuneOptionsOutput;
  ChangeProgressDetails?: ChangeProgressDetails;
  OffPeakWindowOptions?: OffPeakWindowOptions;
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
  DomainProcessingStatus?: DomainProcessingStatusType;
  ModifyingProperties?: ModifyingProperties[];
  AIMLOptions?: AIMLOptionsOutput;
  DeploymentStrategyOptions?: DeploymentStrategyOptions;
  AutomatedSnapshotPauseOptions?: AutomatedSnapshotPauseOptions;
  UseCase?: DomainUseCase;
  EngineMode?: EngineMode;
}
export interface CreateDomainResponse {
  DomainStatus?: DomainStatus;
}
export type IndexName = string;
export type IndexSchema = unknown;
export interface CreateIndexRequest {
  DomainName: string;
  IndexName: string;
  IndexSchema: any;
}
export type IndexStatus = "CREATED" | "UPDATED" | "DELETED" | (string & {});
export interface CreateIndexResponse {
  Status: IndexStatus;
}
export type ConnectionAlias = string;
export type Endpoint = string;
export type SkipUnavailableStatus = "ENABLED" | "DISABLED" | (string & {});
export interface CrossClusterSearchConnectionProperties {
  SkipUnavailable?: SkipUnavailableStatus;
}
export interface ConnectionProperties {
  Endpoint?: string;
  CrossClusterSearch?: CrossClusterSearchConnectionProperties;
}
export interface CreateOutboundConnectionRequest {
  LocalDomainInfo: DomainInformationContainer;
  RemoteDomainInfo: DomainInformationContainer;
  ConnectionAlias: string;
  ConnectionMode?: ConnectionMode;
  ConnectionProperties?: ConnectionProperties;
}
export type OutboundConnectionStatusCode =
  | "VALIDATING"
  | "VALIDATION_FAILED"
  | "PENDING_ACCEPTANCE"
  | "APPROVED"
  | "PROVISIONING"
  | "ACTIVE"
  | "REJECTING"
  | "REJECTED"
  | "DELETING"
  | "DELETED"
  | (string & {});
export interface OutboundConnectionStatus {
  StatusCode?: OutboundConnectionStatusCode;
  Message?: string;
}
export interface CreateOutboundConnectionResponse {
  LocalDomainInfo?: DomainInformationContainer;
  RemoteDomainInfo?: DomainInformationContainer;
  ConnectionAlias?: string;
  ConnectionStatus?: OutboundConnectionStatus;
  ConnectionId?: string;
  ConnectionMode?: ConnectionMode;
  ConnectionProperties?: ConnectionProperties;
}
export type PackageDescription = string;
export type S3BucketName = string;
export type S3Key = string;
export interface PackageSource {
  S3BucketName?: string;
  S3Key?: string;
}
export type RequirementLevel = "REQUIRED" | "OPTIONAL" | "NONE" | (string & {});
export type LicenseFilepath = string;
export interface PackageConfiguration {
  LicenseRequirement: RequirementLevel;
  LicenseFilepath?: string;
  ConfigurationRequirement: RequirementLevel;
  RequiresRestartForConfigurationUpdate?: boolean;
}
export type EngineVersion = string;
export interface PackageVendingOptions {
  VendingEnabled: boolean;
}
export interface PackageEncryptionOptions {
  KmsKeyIdentifier?: string;
  EncryptionEnabled: boolean;
}
export interface CreatePackageRequest {
  PackageName: string;
  PackageType: PackageType;
  PackageDescription?: string;
  PackageSource: PackageSource;
  PackageConfiguration?: PackageConfiguration;
  EngineVersion?: string;
  PackageVendingOptions?: PackageVendingOptions;
  PackageEncryptionOptions?: PackageEncryptionOptions;
}
export type PackageStatus =
  | "COPYING"
  | "COPY_FAILED"
  | "VALIDATING"
  | "VALIDATION_FAILED"
  | "AVAILABLE"
  | "DELETING"
  | "DELETED"
  | "DELETE_FAILED"
  | (string & {});
export type CreatedAt = Date;
export type PluginName = string;
export type PluginDescription = string;
export type PluginVersion = string;
export type PluginClassName = string;
export type UncompressedPluginSizeInBytes = number;
export interface PluginProperties {
  Name?: string;
  Description?: string;
  Version?: string;
  ClassName?: string;
  UncompressedSizeInBytes?: number;
}
export type PackageUser = string;
export type PackageUserList = string[];
export type PackageOwner = string;
export interface PackageDetails {
  PackageID?: string;
  PackageName?: string;
  PackageType?: PackageType;
  PackageDescription?: string;
  PackageStatus?: PackageStatus;
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  AvailablePackageVersion?: string;
  ErrorDetails?: ErrorDetails;
  EngineVersion?: string;
  AvailablePluginProperties?: PluginProperties;
  AvailablePackageConfiguration?: PackageConfiguration;
  AllowListedUserList?: string[];
  PackageOwner?: string;
  PackageVendingOptions?: PackageVendingOptions;
  PackageEncryptionOptions?: PackageEncryptionOptions;
}
export interface CreatePackageResponse {
  PackageDetails?: PackageDetails;
}
export type DomainArn = string;
export interface CreateVpcEndpointRequest {
  DomainArn: string;
  VpcOptions: VPCOptions;
  ClientToken?: string;
}
export type VpcEndpointId = string;
export type VpcEndpointStatus =
  | "CREATING"
  | "CREATE_FAILED"
  | "ACTIVE"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface VpcEndpoint {
  VpcEndpointId?: string;
  VpcEndpointOwner?: string;
  DomainArn?: string;
  VpcOptions?: VPCDerivedInfo;
  Status?: VpcEndpointStatus;
  Endpoint?: string;
}
export interface CreateVpcEndpointResponse {
  VpcEndpoint: VpcEndpoint;
}
export interface DeleteApplicationRequest {
  id: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteDataSourceRequest {
  DomainName: string;
  Name: string;
}
export interface DeleteDataSourceResponse {
  Message?: string;
}
export interface DeleteDirectQueryDataSourceRequest {
  DataSourceName: string;
}
export interface DeleteDirectQueryDataSourceResponse {}
export interface DeleteDomainRequest {
  DomainName: string;
}
export interface DeleteDomainResponse {
  DomainStatus?: DomainStatus;
}
export interface DeleteInboundConnectionRequest {
  ConnectionId: string;
}
export interface DeleteInboundConnectionResponse {
  Connection?: InboundConnection;
}
export interface DeleteIndexRequest {
  DomainName: string;
  IndexName: string;
}
export interface DeleteIndexResponse {
  Status: IndexStatus;
}
export interface DeleteOutboundConnectionRequest {
  ConnectionId: string;
}
export interface OutboundConnection {
  LocalDomainInfo?: DomainInformationContainer;
  RemoteDomainInfo?: DomainInformationContainer;
  ConnectionId?: string;
  ConnectionAlias?: string;
  ConnectionStatus?: OutboundConnectionStatus;
  ConnectionMode?: ConnectionMode;
  ConnectionProperties?: ConnectionProperties;
}
export interface DeleteOutboundConnectionResponse {
  Connection?: OutboundConnection;
}
export interface DeletePackageRequest {
  PackageID: string;
}
export interface DeletePackageResponse {
  PackageDetails?: PackageDetails;
}
export interface DeleteVpcEndpointRequest {
  VpcEndpointId: string;
}
export interface VpcEndpointSummary {
  VpcEndpointId?: string;
  VpcEndpointOwner?: string;
  DomainArn?: string;
  Status?: VpcEndpointStatus;
}
export interface DeleteVpcEndpointResponse {
  VpcEndpointSummary: VpcEndpointSummary;
}
export type ApplicationId = string;
export type CapabilityName = string;
export interface DeregisterCapabilityRequest {
  applicationId: string;
  capabilityName: string;
}
export type CapabilityStatus =
  | "creating"
  | "create_failed"
  | "active"
  | "updating"
  | "update_failed"
  | "deleting"
  | "delete_failed"
  | (string & {});
export interface DeregisterCapabilityResponse {
  status?: CapabilityStatus;
}
export interface DescribeDataSourceAttachmentRequest {
  id: string;
  dataSourceArn: string;
}
export interface DescribeDataSourceAttachmentResponse {
  attachmentId?: string;
  id?: string;
  arn?: string;
  dataSourceArn?: string;
  status?: DataSourceAttachmentStatus;
}
export interface DescribeDomainRequest {
  DomainName: string;
}
export interface DescribeDomainResponse {
  DomainStatus: DomainStatus;
}
export type MaxResults = number;
export type NextToken = string;
export interface DescribeDomainAutoTunesRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export type AutoTuneType = "SCHEDULED_ACTION" | (string & {});
export type AutoTuneDate = Date;
export type ScheduledAutoTuneActionType =
  | "JVM_HEAP_SIZE_TUNING"
  | "JVM_YOUNG_GEN_TUNING"
  | (string & {});
export type ScheduledAutoTuneDescription = string;
export type ScheduledAutoTuneSeverityType = "LOW" | "MEDIUM" | "HIGH" | (string & {});
export interface ScheduledAutoTuneDetails {
  Date?: Date;
  ActionType?: ScheduledAutoTuneActionType;
  Action?: string;
  Severity?: ScheduledAutoTuneSeverityType;
}
export interface AutoTuneDetails {
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails;
}
export interface AutoTune {
  AutoTuneType?: AutoTuneType;
  AutoTuneDetails?: AutoTuneDetails;
}
export type AutoTuneList = AutoTune[];
export interface DescribeDomainAutoTunesResponse {
  AutoTunes?: AutoTune[];
  NextToken?: string;
}
export interface DescribeDomainChangeProgressRequest {
  DomainName: string;
  ChangeId?: string;
}
export type OverallChangeStatus = "PENDING" | "PROCESSING" | "COMPLETED" | "FAILED" | (string & {});
export type TotalNumberOfStages = number;
export type ChangeProgressStageName = string;
export type ChangeProgressStageStatus = string;
export type Description = string;
export interface ChangeProgressStage {
  Name?: string;
  Status?: string;
  Description?: string;
  LastUpdated?: Date;
}
export type ChangeProgressStageList = ChangeProgressStage[];
export type ValidationFailureSeverity = "Critical" | "Warning" | (string & {});
export interface ValidationFailure {
  Code?: string;
  Message?: string;
  Severity?: ValidationFailureSeverity;
}
export type ValidationFailures = ValidationFailure[];
export type AcceptedWarningsList = string[];
export interface ChangeProgressStatusDetails {
  ChangeId?: string;
  StartTime?: Date;
  Status?: OverallChangeStatus;
  PendingProperties?: string[];
  CompletedProperties?: string[];
  TotalNumberOfStages?: number;
  ChangeProgressStages?: ChangeProgressStage[];
  LastUpdatedTime?: Date;
  ConfigChangeStatus?: ConfigChangeStatus;
  InitiatedBy?: InitiatedBy;
  ValidationFailures?: ValidationFailure[];
  AcceptedWarnings?: string[];
}
export interface DescribeDomainChangeProgressResponse {
  ChangeProgressStatus?: ChangeProgressStatusDetails;
}
export interface DescribeDomainConfigRequest {
  DomainName: string;
}
export type UIntValue = number;
export type OptionState = "RequiresIndexDocuments" | "Processing" | "Active" | (string & {});
export interface OptionStatus {
  CreationDate: Date;
  UpdateDate: Date;
  UpdateVersion?: number;
  State: OptionState;
  PendingDeletion?: boolean;
}
export interface VersionStatus {
  Options: string;
  Status: OptionStatus;
}
export interface ClusterConfigStatus {
  Options: ClusterConfig;
  Status: OptionStatus;
}
export interface EBSOptionsStatus {
  Options: EBSOptions;
  Status: OptionStatus;
}
export interface AccessPoliciesStatus {
  Options: string;
  Status: OptionStatus;
}
export interface IPAddressTypeStatus {
  Options: IPAddressType;
  Status: OptionStatus;
}
export interface SnapshotOptionsStatus {
  Options: SnapshotOptions;
  Status: OptionStatus;
}
export interface VPCDerivedInfoStatus {
  Options: VPCDerivedInfo;
  Status: OptionStatus;
}
export interface CognitoOptionsStatus {
  Options: CognitoOptions;
  Status: OptionStatus;
}
export interface EncryptionAtRestOptionsStatus {
  Options: EncryptionAtRestOptions;
  Status: OptionStatus;
}
export interface NodeToNodeEncryptionOptionsStatus {
  Options: NodeToNodeEncryptionOptions;
  Status: OptionStatus;
}
export interface AdvancedOptionsStatus {
  Options: { [key: string]: string | undefined };
  Status: OptionStatus;
}
export interface LogPublishingOptionsStatus {
  Options?: { [key: string]: LogPublishingOption | undefined };
  Status?: OptionStatus;
}
export interface DomainEndpointOptionsStatus {
  Options: DomainEndpointOptions;
  Status: OptionStatus;
}
export interface AdvancedSecurityOptionsStatus {
  Options: AdvancedSecurityOptions;
  Status: OptionStatus;
}
export interface IdentityCenterOptionsStatus {
  Options: IdentityCenterOptions;
  Status: OptionStatus;
}
export type RollbackOnDisable = "NO_ROLLBACK" | "DEFAULT_ROLLBACK" | (string & {});
export interface AutoTuneOptions {
  DesiredState?: AutoTuneDesiredState;
  RollbackOnDisable?: RollbackOnDisable;
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
  UseOffPeakWindow?: boolean;
}
export interface AutoTuneStatus {
  CreationDate: Date;
  UpdateDate: Date;
  UpdateVersion?: number;
  State: AutoTuneState;
  ErrorMessage?: string;
  PendingDeletion?: boolean;
}
export interface AutoTuneOptionsStatus {
  Options?: AutoTuneOptions;
  Status?: AutoTuneStatus;
}
export interface OffPeakWindowOptionsStatus {
  Options?: OffPeakWindowOptions;
  Status?: OptionStatus;
}
export interface SoftwareUpdateOptionsStatus {
  Options?: SoftwareUpdateOptions;
  Status?: OptionStatus;
}
export interface AIMLOptionsStatus {
  Options?: AIMLOptionsOutput;
  Status?: OptionStatus;
}
export interface DeploymentStrategyOptionsStatus {
  Options: DeploymentStrategyOptions;
  Status: OptionStatus;
}
export interface AutomatedSnapshotPauseOptionsStatus {
  Options: AutomatedSnapshotPauseOptions;
  Status: OptionStatus;
}
export interface UseCaseStatus {
  Options: DomainUseCase;
  Status: OptionStatus;
}
export interface EngineModeStatus {
  Options: EngineMode;
  Status: OptionStatus;
}
export interface DomainConfig {
  EngineVersion?: VersionStatus;
  ClusterConfig?: ClusterConfigStatus;
  EBSOptions?: EBSOptionsStatus;
  AccessPolicies?: AccessPoliciesStatus;
  IPAddressType?: IPAddressTypeStatus;
  SnapshotOptions?: SnapshotOptionsStatus;
  VPCOptions?: VPCDerivedInfoStatus;
  CognitoOptions?: CognitoOptionsStatus;
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;
  AdvancedOptions?: AdvancedOptionsStatus;
  LogPublishingOptions?: LogPublishingOptionsStatus;
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;
  IdentityCenterOptions?: IdentityCenterOptionsStatus;
  AutoTuneOptions?: AutoTuneOptionsStatus;
  ChangeProgressDetails?: ChangeProgressDetails;
  OffPeakWindowOptions?: OffPeakWindowOptionsStatus;
  SoftwareUpdateOptions?: SoftwareUpdateOptionsStatus;
  ModifyingProperties?: ModifyingProperties[];
  AIMLOptions?: AIMLOptionsStatus;
  DeploymentStrategyOptions?: DeploymentStrategyOptionsStatus;
  AutomatedSnapshotPauseOptions?: AutomatedSnapshotPauseOptionsStatus;
  UseCase?: UseCaseStatus;
  EngineMode?: EngineModeStatus;
}
export interface DescribeDomainConfigResponse {
  DomainConfig: DomainConfig;
}
export interface DescribeDomainHealthRequest {
  DomainName: string;
}
export type DomainState = "Active" | "Processing" | "NotAvailable" | (string & {});
export type NumberOfAZs = string;
export type NumberOfNodes = string;
export type MasterNodeStatus = "Available" | "UnAvailable" | (string & {});
export type DomainHealth = "Red" | "Yellow" | "Green" | "NotAvailable" | (string & {});
export type NumberOfShards = string;
export type AvailabilityZone = string;
export type ZoneStatus = "Active" | "StandBy" | "NotAvailable" | (string & {});
export interface AvailabilityZoneInfo {
  AvailabilityZoneName?: string;
  ZoneStatus?: ZoneStatus;
  ConfiguredDataNodeCount?: string;
  AvailableDataNodeCount?: string;
  TotalShards?: string;
  TotalUnAssignedShards?: string;
}
export type AvailabilityZoneInfoList = AvailabilityZoneInfo[];
export interface EnvironmentInfo {
  AvailabilityZoneInformation?: AvailabilityZoneInfo[];
}
export type EnvironmentInfoList = EnvironmentInfo[];
export interface DescribeDomainHealthResponse {
  DomainState?: DomainState;
  AvailabilityZoneCount?: string;
  ActiveAvailabilityZoneCount?: string;
  StandByAvailabilityZoneCount?: string;
  DataNodeCount?: string;
  DedicatedMaster?: boolean;
  MasterEligibleNodeCount?: string;
  WarmNodeCount?: string;
  MasterNode?: MasterNodeStatus;
  ClusterHealth?: DomainHealth;
  TotalShards?: string;
  TotalUnAssignedShards?: string;
  EnvironmentInformation?: EnvironmentInfo[];
}
export interface DescribeDomainNodesRequest {
  DomainName: string;
}
export type NodeId = string;
export type NodeType = "Data" | "Ultrawarm" | "Master" | "Warm" | (string & {});
export type NodeStatus = "Active" | "StandBy" | "NotAvailable" | (string & {});
export type StorageTypeName = string;
export type VolumeSize = string;
export interface DomainNodesStatus {
  NodeId?: string;
  NodeType?: NodeType;
  AvailabilityZone?: string;
  InstanceType?: OpenSearchPartitionInstanceType;
  NodeStatus?: NodeStatus;
  StorageType?: string;
  StorageVolumeType?: VolumeType;
  StorageSize?: string;
}
export type DomainNodesStatusList = DomainNodesStatus[];
export interface DescribeDomainNodesResponse {
  DomainNodesStatusList?: DomainNodesStatus[];
}
export type DomainNameList = string[];
export interface DescribeDomainsRequest {
  DomainNames: string[];
}
export type DomainStatusList = DomainStatus[];
export interface DescribeDomainsResponse {
  DomainStatusList: DomainStatus[];
}
export interface DescribeDryRunProgressRequest {
  DomainName: string;
  DryRunId?: string;
  LoadDryRunConfig?: boolean;
}
export interface DryRunProgressStatus {
  DryRunId: string;
  DryRunStatus: string;
  CreationDate: string;
  UpdateDate: string;
  ValidationFailures?: ValidationFailure[];
  AcceptedWarnings?: string[];
}
export type DeploymentType = string;
export interface DryRunResults {
  DeploymentType?: string;
  Message?: string;
}
export interface DescribeDryRunProgressResponse {
  DryRunProgressStatus?: DryRunProgressStatus;
  DryRunConfig?: DomainStatus;
  DryRunResults?: DryRunResults;
}
export type NonEmptyString = string;
export type ValueStringList = string[];
export interface Filter {
  Name?: string;
  Values?: string[];
}
export type FilterList = Filter[];
export interface DescribeInboundConnectionsRequest {
  Filters?: Filter[];
  MaxResults?: number;
  NextToken?: string;
}
export type InboundConnections = InboundConnection[];
export interface DescribeInboundConnectionsResponse {
  Connections?: InboundConnection[];
  NextToken?: string;
}
export type InsightEntityType = "Account" | "DomainName" | (string & {});
export type InsightEntityValue = string;
export interface InsightEntity {
  Type: InsightEntityType;
  Value?: string;
}
export interface DescribeInsightDetailsRequest {
  Entity: InsightEntity;
  InsightId: string;
  ShowHtmlContent?: boolean;
}
export type InsightFieldType = "text" | "metric" | (string & {});
export interface InsightField {
  Name: string;
  Type: InsightFieldType;
  Value: string;
}
export type InsightFieldList = InsightField[];
export interface DescribeInsightDetailsResponse {
  Fields: InsightField[];
}
export interface DescribeInstanceTypeLimitsRequest {
  DomainName?: string;
  InstanceType: OpenSearchPartitionInstanceType;
  EngineVersion: string;
}
export type InstanceRole = string;
export type StorageSubTypeName = string;
export type LimitName = string;
export type LimitValue = string;
export type LimitValueList = string[];
export interface StorageTypeLimit {
  LimitName?: string;
  LimitValues?: string[];
}
export type StorageTypeLimitList = StorageTypeLimit[];
export interface StorageType {
  StorageTypeName?: string;
  StorageSubTypeName?: string;
  StorageTypeLimits?: StorageTypeLimit[];
}
export type StorageTypeList = StorageType[];
export type MinimumInstanceCount = number;
export type MaximumInstanceCount = number;
export interface InstanceCountLimits {
  MinimumInstanceCount?: number;
  MaximumInstanceCount?: number;
}
export interface InstanceLimits {
  InstanceCountLimits?: InstanceCountLimits;
}
export interface AdditionalLimit {
  LimitName?: string;
  LimitValues?: string[];
}
export type AdditionalLimitList = AdditionalLimit[];
export interface Limits {
  StorageTypes?: StorageType[];
  InstanceLimits?: InstanceLimits;
  AdditionalLimits?: AdditionalLimit[];
}
export type LimitsByRole = { [key: string]: Limits | undefined };
export interface DescribeInstanceTypeLimitsResponse {
  LimitsByRole?: { [key: string]: Limits | undefined };
}
export interface DescribeOutboundConnectionsRequest {
  Filters?: Filter[];
  MaxResults?: number;
  NextToken?: string;
}
export type OutboundConnections = OutboundConnection[];
export interface DescribeOutboundConnectionsResponse {
  Connections?: OutboundConnection[];
  NextToken?: string;
}
export type DescribePackagesFilterName =
  | "PackageID"
  | "PackageName"
  | "PackageStatus"
  | "PackageType"
  | "EngineVersion"
  | "PackageOwner"
  | (string & {});
export type DescribePackagesFilterValue = string;
export type DescribePackagesFilterValues = string[];
export interface DescribePackagesFilter {
  Name?: DescribePackagesFilterName;
  Value?: string[];
}
export type DescribePackagesFilterList = DescribePackagesFilter[];
export interface DescribePackagesRequest {
  Filters?: DescribePackagesFilter[];
  MaxResults?: number;
  NextToken?: string;
}
export type PackageDetailsList = PackageDetails[];
export interface DescribePackagesResponse {
  PackageDetailsList?: PackageDetails[];
  NextToken?: string;
}
export interface DescribeReservedInstanceOfferingsRequest {
  ReservedInstanceOfferingId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ReservedInstancePaymentOption =
  | "ALL_UPFRONT"
  | "PARTIAL_UPFRONT"
  | "NO_UPFRONT"
  | (string & {});
export interface RecurringCharge {
  RecurringChargeAmount?: number;
  RecurringChargeFrequency?: string;
}
export type RecurringChargeList = RecurringCharge[];
export interface ReservedInstanceOffering {
  ReservedInstanceOfferingId?: string;
  InstanceType?: OpenSearchPartitionInstanceType;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  PaymentOption?: ReservedInstancePaymentOption;
  RecurringCharges?: RecurringCharge[];
}
export type ReservedInstanceOfferingList = ReservedInstanceOffering[];
export interface DescribeReservedInstanceOfferingsResponse {
  NextToken?: string;
  ReservedInstanceOfferings?: ReservedInstanceOffering[];
}
export interface DescribeReservedInstancesRequest {
  ReservedInstanceId?: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ReservationToken = string;
export interface ReservedInstance {
  ReservationName?: string;
  ReservedInstanceId?: string;
  BillingSubscriptionId?: number;
  ReservedInstanceOfferingId?: string;
  InstanceType?: OpenSearchPartitionInstanceType;
  StartTime?: Date;
  Duration?: number;
  FixedPrice?: number;
  UsagePrice?: number;
  CurrencyCode?: string;
  InstanceCount?: number;
  State?: string;
  PaymentOption?: ReservedInstancePaymentOption;
  RecurringCharges?: RecurringCharge[];
}
export type ReservedInstanceList = ReservedInstance[];
export interface DescribeReservedInstancesResponse {
  NextToken?: string;
  ReservedInstances?: ReservedInstance[];
}
export type VpcEndpointIdList = string[];
export interface DescribeVpcEndpointsRequest {
  VpcEndpointIds: string[];
}
export type VpcEndpoints = VpcEndpoint[];
export type VpcEndpointErrorCode = "ENDPOINT_NOT_FOUND" | "SERVER_ERROR" | (string & {});
export interface VpcEndpointError {
  VpcEndpointId?: string;
  ErrorCode?: VpcEndpointErrorCode;
  ErrorMessage?: string;
}
export type VpcEndpointErrorList = VpcEndpointError[];
export interface DescribeVpcEndpointsResponse {
  VpcEndpoints: VpcEndpoint[];
  VpcEndpointErrors: VpcEndpointError[];
}
export interface DetachDataSourceRequest {
  id: string;
  dataSourceArn: string;
}
export interface DetachDataSourceResponse {
  id?: string;
  arn?: string;
  dataSourceArn?: string;
}
export interface DissociatePackageRequest {
  PackageID: string;
  DomainName: string;
}
export interface DissociatePackageResponse {
  DomainPackageDetails?: DomainPackageDetails;
}
export interface DissociatePackagesRequest {
  PackageList: string[];
  DomainName: string;
}
export interface DissociatePackagesResponse {
  DomainPackageDetailsList?: DomainPackageDetails[];
}
export interface GetApplicationRequest {
  id: string;
}
export type ApplicationStatus =
  | "CREATING"
  | "UPDATING"
  | "DELETING"
  | "ACTIVE"
  | "FAILED"
  | (string & {});
export interface GetApplicationResponse {
  id?: string;
  arn?: string;
  name?: string;
  endpoint?: string;
  status?: ApplicationStatus;
  iamIdentityCenterOptions?: IamIdentityCenterOptions;
  dataSources?: DataSource[];
  appConfigs?: AppConfig[];
  createdAt?: Date;
  lastUpdatedAt?: Date;
  kmsKeyArn?: string;
}
export interface GetCapabilityRequest {
  applicationId: string;
  capabilityName: string;
}
export interface AIConfig {}
export type CapabilityExtendedResponseConfig = { aiConfig: AIConfig };
export type CapabilityFailureReason = "KMS_KEY_INSUFFICIENT_PERMISSION" | (string & {});
export type CapabilityFailureDetails = string;
export interface CapabilityFailure {
  reason?: CapabilityFailureReason;
  details?: string;
}
export type CapabilityFailures = CapabilityFailure[];
export interface GetCapabilityResponse {
  capabilityName?: string;
  applicationId?: string;
  status?: CapabilityStatus;
  capabilityConfig?: CapabilityExtendedResponseConfig;
  failures?: CapabilityFailure[];
}
export interface GetCompatibleVersionsRequest {
  DomainName?: string;
}
export type VersionList = string[];
export interface CompatibleVersionsMap {
  SourceVersion?: string;
  TargetVersions?: string[];
}
export type CompatibleVersionsList = CompatibleVersionsMap[];
export interface GetCompatibleVersionsResponse {
  CompatibleVersions?: CompatibleVersionsMap[];
}
export interface GetDataSourceRequest {
  DomainName: string;
  Name: string;
}
export type DataSourceStatus = "ACTIVE" | "DISABLED" | (string & {});
export interface GetDataSourceResponse {
  DataSourceType?: DataSourceType;
  Name?: string;
  Description?: string;
  Status?: DataSourceStatus;
}
export interface GetDefaultApplicationSettingRequest {}
export interface GetDefaultApplicationSettingResponse {
  applicationArn?: string;
}
export interface GetDirectQueryDataSourceRequest {
  DataSourceName: string;
}
export interface GetDirectQueryDataSourceResponse {
  DataSourceName?: string;
  DataSourceType?: DirectQueryDataSourceType;
  Description?: string;
  OpenSearchArns?: string[];
  DataSourceAccessPolicy?: string;
  DataSourceArn?: string;
}
export type RequestId = string;
export interface GetDomainMaintenanceStatusRequest {
  DomainName: string;
  MaintenanceId: string;
}
export type MaintenanceStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "TIMED_OUT"
  | (string & {});
export type MaintenanceStatusMessage = string;
export type MaintenanceType =
  | "REBOOT_NODE"
  | "RESTART_SEARCH_PROCESS"
  | "RESTART_DASHBOARD"
  | (string & {});
export interface GetDomainMaintenanceStatusResponse {
  Status?: MaintenanceStatus;
  StatusMessage?: string;
  NodeId?: string;
  Action?: MaintenanceType;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export interface GetIndexRequest {
  DomainName: string;
  IndexName: string;
}
export interface GetIndexResponse {
  IndexSchema: any;
}
export interface GetMigrationRequest {
  migrationId: string;
}
export interface MigrationSource {
  datasourceArn: string;
}
export interface MigrationError {
  code?: string;
  message?: string;
}
export interface GetMigrationResponse {
  migrationId?: string;
  status?: string;
  applicationId?: string;
  source?: MigrationSource;
  exportedCount?: number;
  importedCount?: number;
  error?: MigrationError;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface GetPackageVersionHistoryRequest {
  PackageID: string;
  MaxResults?: number;
  NextToken?: string;
}
export type CommitMessage = string;
export interface PackageVersionHistory {
  PackageVersion?: string;
  CommitMessage?: string;
  CreatedAt?: Date;
  PluginProperties?: PluginProperties;
  PackageConfiguration?: PackageConfiguration;
}
export type PackageVersionHistoryList = PackageVersionHistory[];
export interface GetPackageVersionHistoryResponse {
  PackageID?: string;
  PackageVersionHistoryList?: PackageVersionHistory[];
  NextToken?: string;
}
export interface GetUpgradeHistoryRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export type UpgradeName = string;
export type StartTimestamp = Date;
export type UpgradeStatus =
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "SUCCEEDED_WITH_ISSUES"
  | "FAILED"
  | (string & {});
export type UpgradeStep = "PRE_UPGRADE_CHECK" | "SNAPSHOT" | "UPGRADE" | (string & {});
export type Issue = string;
export type Issues = string[];
export interface UpgradeStepItem {
  UpgradeStep?: UpgradeStep;
  UpgradeStepStatus?: UpgradeStatus;
  Issues?: string[];
  ProgressPercent?: number;
}
export type UpgradeStepsList = UpgradeStepItem[];
export interface UpgradeHistory {
  UpgradeName?: string;
  StartTimestamp?: Date;
  UpgradeStatus?: UpgradeStatus;
  StepsList?: UpgradeStepItem[];
}
export type UpgradeHistoryList = UpgradeHistory[];
export interface GetUpgradeHistoryResponse {
  UpgradeHistories?: UpgradeHistory[];
  NextToken?: string;
}
export interface GetUpgradeStatusRequest {
  DomainName: string;
}
export interface GetUpgradeStatusResponse {
  UpgradeStep?: UpgradeStep;
  StepStatus?: UpgradeStatus;
  UpgradeName?: string;
}
export type InsightFeedbackEntityType = "DomainName" | (string & {});
export interface InsightFeedbackEntity {
  Type: InsightFeedbackEntityType;
  Value: string;
}
export type InsightFeedbackThumbs = "Up" | "Down" | (string & {});
export type InsightFeedbackText = string;
export interface InsightFeedbackRequest {
  Entity: InsightFeedbackEntity;
  InsightId: string;
  Thumbs: InsightFeedbackThumbs;
  FeedbackText?: string;
}
export type InsightResponseStatus = "SUCCESS" | "ERROR" | (string & {});
export interface InsightFeedbackResponse {
  Status?: InsightResponseStatus;
}
export type ApplicationStatuses = ApplicationStatus[];
export interface ListApplicationsRequest {
  nextToken?: string;
  statuses?: ApplicationStatus[];
  maxResults?: number;
}
export interface ApplicationSummary {
  id?: string;
  arn?: string;
  name?: string;
  endpoint?: string;
  status?: ApplicationStatus;
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
export type ApplicationSummaries = ApplicationSummary[];
export interface ListApplicationsResponse {
  ApplicationSummaries?: ApplicationSummary[];
  nextToken?: string;
}
export interface ListDataSourceAttachmentsRequest {
  id: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DataSourceAttachmentSummary {
  attachmentId?: string;
  dataSourceArn?: string;
  status?: DataSourceAttachmentStatus;
}
export type DataSourceAttachmentSummaryList = DataSourceAttachmentSummary[];
export interface ListDataSourceAttachmentsResponse {
  attachments?: DataSourceAttachmentSummary[];
  nextToken?: string;
}
export interface ListDataSourcesRequest {
  DomainName: string;
}
export interface DataSourceDetails {
  DataSourceType?: DataSourceType;
  Name?: string;
  Description?: string;
  Status?: DataSourceStatus;
}
export type DataSourceList = DataSourceDetails[];
export interface ListDataSourcesResponse {
  DataSources?: DataSourceDetails[];
}
export interface ListDirectQueryDataSourcesRequest {
  NextToken?: string;
}
export interface DirectQueryDataSource {
  DataSourceName?: string;
  DataSourceType?: DirectQueryDataSourceType;
  Description?: string;
  OpenSearchArns?: string[];
  DataSourceArn?: string;
  TagList?: Tag[];
}
export type DirectQueryDataSourceList = DirectQueryDataSource[];
export interface ListDirectQueryDataSourcesResponse {
  NextToken?: string;
  DirectQueryDataSources?: DirectQueryDataSource[];
}
export interface ListDomainMaintenancesRequest {
  DomainName: string;
  Action?: MaintenanceType;
  Status?: MaintenanceStatus;
  MaxResults?: number;
  NextToken?: string;
}
export interface DomainMaintenanceDetails {
  MaintenanceId?: string;
  DomainName?: string;
  Action?: MaintenanceType;
  NodeId?: string;
  Status?: MaintenanceStatus;
  StatusMessage?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
export type DomainMaintenanceList = DomainMaintenanceDetails[];
export interface ListDomainMaintenancesResponse {
  DomainMaintenances?: DomainMaintenanceDetails[];
  NextToken?: string;
}
export type EngineType = "OpenSearch" | "Elasticsearch" | (string & {});
export interface ListDomainNamesRequest {
  EngineType?: EngineType;
}
export interface DomainInfo {
  DomainName?: string;
  EngineType?: EngineType;
}
export type DomainInfoList = DomainInfo[];
export interface ListDomainNamesResponse {
  DomainNames?: DomainInfo[];
}
export interface ListDomainsForPackageRequest {
  PackageID: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDomainsForPackageResponse {
  DomainPackageDetailsList?: DomainPackageDetails[];
  NextToken?: string;
}
export interface InsightTimeRange {
  From: number;
  To: number;
}
export type InsightSortOrder = "ASC" | "DESC" | (string & {});
export type InsightPageSize = number;
export interface ListInsightsRequest {
  Entity: InsightEntity;
  TimeRange?: InsightTimeRange;
  SortOrder?: InsightSortOrder;
  MaxResults?: number;
  NextToken?: string;
}
export type InsightType = "EVENT" | "RECOMMENDATION" | (string & {});
export type InsightPriorityLevel = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | (string & {});
export type InsightStatus = "ACTIVE" | "RESOLVED" | "DISMISSED" | (string & {});
export interface Insight {
  InsightId?: string;
  DisplayName?: string;
  Type?: InsightType;
  Priority?: InsightPriorityLevel;
  Status?: InsightStatus;
  CreationTime?: Date;
  UpdateTime?: Date;
  IsExperimental?: boolean;
}
export type InsightList = Insight[];
export interface ListInsightsResponse {
  Insights?: Insight[];
  NextToken?: string;
}
export type InstanceTypeString = string;
export interface ListInstanceTypeDetailsRequest {
  EngineVersion: string;
  DomainName?: string;
  MaxResults?: number;
  NextToken?: string;
  RetrieveAZs?: boolean;
  InstanceType?: string;
}
export type InstanceRoleList = string[];
export type AvailabilityZoneList = string[];
export interface InstanceTypeDetails {
  InstanceType?: OpenSearchPartitionInstanceType;
  EncryptionEnabled?: boolean;
  CognitoEnabled?: boolean;
  AppLogsEnabled?: boolean;
  AdvancedSecurityEnabled?: boolean;
  WarmEnabled?: boolean;
  InstanceRole?: string[];
  AvailabilityZones?: string[];
}
export type InstanceTypeDetailsList = InstanceTypeDetails[];
export interface ListInstanceTypeDetailsResponse {
  InstanceTypeDetails?: InstanceTypeDetails[];
  NextToken?: string;
}
export interface ListMigrationsRequest {
  applicationId: string;
  status?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface MigrationSummary {
  migrationId?: string;
  status?: string;
  applicationId?: string;
  source?: MigrationSource;
  exportedCount?: number;
  importedCount?: number;
  error?: MigrationError;
  createdAt?: Date;
  updatedAt?: Date;
}
export type MigrationSummaryList = MigrationSummary[];
export interface ListMigrationsResponse {
  migrations?: MigrationSummary[];
  nextToken?: string;
}
export interface ListPackagesForDomainRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListPackagesForDomainResponse {
  DomainPackageDetailsList?: DomainPackageDetails[];
  NextToken?: string;
}
export interface ListScheduledActionsRequest {
  DomainName: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ActionType =
  | "SERVICE_SOFTWARE_UPDATE"
  | "JVM_HEAP_SIZE_TUNING"
  | "JVM_YOUNG_GEN_TUNING"
  | (string & {});
export type ActionSeverity = "HIGH" | "MEDIUM" | "LOW" | (string & {});
export type ScheduledBy = "CUSTOMER" | "SYSTEM" | (string & {});
export type ActionStatus =
  | "PENDING_UPDATE"
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED"
  | "NOT_ELIGIBLE"
  | "ELIGIBLE"
  | (string & {});
export interface ScheduledAction {
  Id: string;
  Type: ActionType;
  Severity: ActionSeverity;
  ScheduledTime: number;
  Description?: string;
  ScheduledBy?: ScheduledBy;
  Status?: ActionStatus;
  Mandatory?: boolean;
  Cancellable?: boolean;
}
export type ScheduledActionsList = ScheduledAction[];
export interface ListScheduledActionsResponse {
  ScheduledActions?: ScheduledAction[];
  NextToken?: string;
}
export interface ListTagsRequest {
  ARN: string;
}
export interface ListTagsResponse {
  TagList?: Tag[];
}
export interface ListVersionsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListVersionsResponse {
  Versions?: string[];
  NextToken?: string;
}
export interface ListVpcEndpointAccessRequest {
  DomainName: string;
  NextToken?: string;
}
export type AuthorizedPrincipalList = AuthorizedPrincipal[];
export interface ListVpcEndpointAccessResponse {
  AuthorizedPrincipalList: AuthorizedPrincipal[];
  NextToken: string;
}
export interface ListVpcEndpointsRequest {
  NextToken?: string;
}
export type VpcEndpointSummaryList = VpcEndpointSummary[];
export interface ListVpcEndpointsResponse {
  VpcEndpointSummaryList: VpcEndpointSummary[];
  NextToken: string;
}
export interface ListVpcEndpointsForDomainRequest {
  DomainName: string;
  NextToken?: string;
}
export interface ListVpcEndpointsForDomainResponse {
  VpcEndpointSummaryList: VpcEndpointSummary[];
  NextToken: string;
}
export type InstanceCount = number;
export interface PurchaseReservedInstanceOfferingRequest {
  ReservedInstanceOfferingId: string;
  ReservationName: string;
  InstanceCount?: number;
}
export interface PurchaseReservedInstanceOfferingResponse {
  ReservedInstanceId?: string;
  ReservationName?: string;
}
export interface PutDefaultApplicationSettingRequest {
  applicationArn: string;
  setAsDefault: boolean;
}
export interface PutDefaultApplicationSettingResponse {
  applicationArn?: string;
}
export type CapabilityBaseRequestConfig = { aiConfig: AIConfig };
export interface RegisterCapabilityRequest {
  applicationId: string;
  capabilityName: string;
  capabilityConfig: CapabilityBaseRequestConfig;
}
export type CapabilityBaseResponseConfig = { aiConfig: AIConfig };
export interface RegisterCapabilityResponse {
  capabilityName?: string;
  applicationId?: string;
  status?: CapabilityStatus;
  capabilityConfig?: CapabilityBaseResponseConfig;
}
export interface RejectInboundConnectionRequest {
  ConnectionId: string;
}
export interface RejectInboundConnectionResponse {
  Connection?: InboundConnection;
}
export interface RemoveTagsRequest {
  ARN: string;
  TagKeys: string[];
}
export interface RemoveTagsResponse {}
export interface RevokeVpcEndpointAccessRequest {
  DomainName: string;
  Account?: string;
  Service?: AWSServicePrincipal;
  ServiceOptions?: ServiceOptions;
}
export interface RevokeVpcEndpointAccessResponse {}
export interface RollbackServiceSoftwareUpdateRequest {
  DomainName: string;
}
export interface RollbackServiceSoftwareOptions {
  CurrentVersion?: string;
  NewVersion?: string;
  RollbackAvailable?: boolean;
  Description?: string;
}
export interface RollbackServiceSoftwareUpdateResponse {
  RollbackServiceSoftwareOptions?: RollbackServiceSoftwareOptions;
}
export interface StartDomainMaintenanceRequest {
  DomainName: string;
  Action: MaintenanceType;
  NodeId?: string;
}
export interface StartDomainMaintenanceResponse {
  MaintenanceId?: string;
}
export interface MigrationWorkspace {
  workspaceId?: string;
  createWorkspace?: boolean;
  name?: string;
  type?: string;
}
export interface SavedObjectIdentifier {
  type: string;
  id: string;
}
export type SavedObjectIdentifierList = SavedObjectIdentifier[];
export interface ExportOptions {
  types?: string[];
  objects?: SavedObjectIdentifier[];
  includeReferencesDeep?: boolean;
}
export interface MigrationOptions {
  source: MigrationSource;
  workspace: MigrationWorkspace;
  exportOptions?: ExportOptions;
  conflictResolution?: string;
}
export interface StartMigrationRequest {
  applicationId: string;
  migrationOptions: MigrationOptions;
  clientToken?: string;
}
export interface StartMigrationResponse {
  migrationId?: string;
  status?: string;
}
export type ScheduleAt = "NOW" | "TIMESTAMP" | "OFF_PEAK_WINDOW" | (string & {});
export interface StartServiceSoftwareUpdateRequest {
  DomainName: string;
  ScheduleAt?: ScheduleAt;
  DesiredStartTime?: number;
}
export interface StartServiceSoftwareUpdateResponse {
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}
export interface UpdateApplicationRequest {
  id: string;
  dataSources?: DataSource[];
  appConfigs?: AppConfig[];
  iamIdentityCenterOptions?: IamIdentityCenterOptionsInput;
}
export interface UpdateApplicationResponse {
  id?: string;
  name?: string;
  arn?: string;
  dataSources?: DataSource[];
  iamIdentityCenterOptions?: IamIdentityCenterOptions;
  appConfigs?: AppConfig[];
  createdAt?: Date;
  lastUpdatedAt?: Date;
}
export interface UpdateDataSourceRequest {
  DomainName: string;
  Name: string;
  DataSourceType: DataSourceType;
  Description?: string;
  Status?: DataSourceStatus;
}
export interface UpdateDataSourceResponse {
  Message?: string;
}
export interface UpdateDirectQueryDataSourceRequest {
  DataSourceName: string;
  DataSourceType: DirectQueryDataSourceType;
  Description?: string;
  OpenSearchArns?: string[];
  DataSourceAccessPolicy?: string;
}
export interface UpdateDirectQueryDataSourceResponse {
  DataSourceArn?: string;
}
export type DryRunMode = "Basic" | "Verbose" | (string & {});
export interface UpdateDomainConfigRequest {
  DomainName: string;
  ClusterConfig?: ClusterConfig;
  EBSOptions?: EBSOptions;
  SnapshotOptions?: SnapshotOptions;
  VPCOptions?: VPCOptions;
  CognitoOptions?: CognitoOptions;
  AdvancedOptions?: { [key: string]: string | undefined };
  AccessPolicies?: string;
  IPAddressType?: IPAddressType;
  LogPublishingOptions?: { [key: string]: LogPublishingOption | undefined };
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
  DomainEndpointOptions?: DomainEndpointOptions;
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
  IdentityCenterOptions?: IdentityCenterOptionsInput;
  AutoTuneOptions?: AutoTuneOptions;
  DryRun?: boolean;
  DryRunMode?: DryRunMode;
  OffPeakWindowOptions?: OffPeakWindowOptions;
  SoftwareUpdateOptions?: SoftwareUpdateOptions;
  AIMLOptions?: AIMLOptionsInput;
  DeploymentStrategyOptions?: DeploymentStrategyOptions;
  AutomatedSnapshotPauseOptions?: AutomatedSnapshotPauseRequestOptions;
  UseCase?: DomainUseCase;
  EngineMode?: EngineMode;
  AcceptedWarnings?: string[];
}
export interface UpdateDomainConfigResponse {
  DomainConfig: DomainConfig;
  DryRunResults?: DryRunResults;
  DryRunProgressStatus?: DryRunProgressStatus;
}
export interface UpdateIndexRequest {
  DomainName: string;
  IndexName: string;
  IndexSchema: any;
}
export interface UpdateIndexResponse {
  Status: IndexStatus;
}
export interface UpdatePackageRequest {
  PackageID: string;
  PackageSource: PackageSource;
  PackageDescription?: string;
  CommitMessage?: string;
  PackageConfiguration?: PackageConfiguration;
  PackageEncryptionOptions?: PackageEncryptionOptions;
}
export interface UpdatePackageResponse {
  PackageDetails?: PackageDetails;
}
export type PackageScopeOperationEnum = "ADD" | "OVERRIDE" | "REMOVE" | (string & {});
export interface UpdatePackageScopeRequest {
  PackageID: string;
  Operation: PackageScopeOperationEnum;
  PackageUserList: string[];
}
export interface UpdatePackageScopeResponse {
  PackageID?: string;
  Operation?: PackageScopeOperationEnum;
  PackageUserList?: string[];
}
export interface UpdateScheduledActionRequest {
  DomainName: string;
  ActionID: string;
  ActionType: ActionType;
  ScheduleAt: ScheduleAt;
  DesiredStartTime?: number;
}
export interface UpdateScheduledActionResponse {
  ScheduledAction?: ScheduledAction;
}
export interface UpdateVpcEndpointRequest {
  VpcEndpointId: string;
  VpcOptions: VPCOptions;
}
export interface UpdateVpcEndpointResponse {
  VpcEndpoint: VpcEndpoint;
}
export interface UpgradeDomainRequest {
  DomainName: string;
  TargetVersion: string;
  PerformCheckOnly?: boolean;
  AdvancedOptions?: { [key: string]: string | undefined };
}
export interface UpgradeDomainResponse {
  UpgradeId?: string;
  DomainName?: string;
  TargetVersion?: string;
  PerformCheckOnly?: boolean;
  AdvancedOptions?: { [key: string]: string | undefined };
  ChangeProgressDetails?: ChangeProgressDetails;
}
export type SlotList = number[];
export type AcceptInboundConnectionError =
  | DisabledOperationException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Allows the destination Amazon OpenSearch Service domain owner to accept an inbound
 * cross-cluster search connection request. For more information, see Cross-cluster search for Amazon OpenSearch Service.
 */
export const acceptInboundConnection: API.OperationMethod<
  AcceptInboundConnectionRequest,
  AcceptInboundConnectionResponse,
  AcceptInboundConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AcceptInboundConnectionRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<AcceptInboundConnectionResponse>,
  errors: [DisabledOperationException, LimitExceededException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptInboundConnection",
}));

export type AddDataSourceError =
  | BaseException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new direct-query data source to the specified domain. For more information,
 * see Creating Amazon OpenSearch Service data source integrations with Amazon
 * S3.
 */
export const addDataSource: API.OperationMethod<
  AddDataSourceRequest,
  AddDataSourceResponse,
  AddDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8, __c1, 0) as any as S.Schema<AddDataSourceRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<AddDataSourceResponse>,
  errors: [
    BaseException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddDataSource",
}));

export type AddDirectQueryDataSourceError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Adds a new data source in Amazon OpenSearch Service so that you can perform direct
 * queries on external data.
 */
export const addDirectQueryDataSource: API.OperationMethod<
  AddDirectQueryDataSourceRequest,
  AddDirectQueryDataSourceResponse,
  AddDirectQueryDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16, __c2, 0) as any as S.Schema<AddDirectQueryDataSourceRequest>,
  output: __S(17, __c2, 1) as any as S.Schema<AddDirectQueryDataSourceResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddDirectQueryDataSource",
}));

export type AddTagsError =
  | BaseException
  | InternalException
  | LimitExceededException
  | ValidationException
  | CommonErrors;
/**
 * Attaches tags to an existing Amazon OpenSearch Service domain, data source, or
 * application.
 *
 * Tags are a set of case-sensitive key-value pairs. A domain, data source, or
 * application can have up to 10 tags. For more information, see Tagging Amazon OpenSearch Service resources.
 */
export const addTags: API.OperationMethod<
  AddTagsRequest,
  AddTagsResponse,
  AddTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18, __c2, 2) as any as S.Schema<AddTagsRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<AddTagsResponse>,
  errors: [BaseException, InternalException, LimitExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddTags",
}));

export type AssociatePackageError =
  | AccessDeniedException
  | BaseException
  | ConflictException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Associates a package with an Amazon OpenSearch Service domain. For more information,
 * see Custom packages
 * for Amazon OpenSearch Service.
 */
export const associatePackage: API.OperationMethod<
  AssociatePackageRequest,
  AssociatePackageResponse,
  AssociatePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<AssociatePackageRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<AssociatePackageResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    ConflictException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociatePackage",
}));

export type AssociatePackagesError =
  | BaseException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Operation in the Amazon OpenSearch Service API for associating multiple packages with
 * a domain simultaneously.
 */
export const associatePackages: API.OperationMethod<
  AssociatePackagesRequest,
  AssociatePackagesResponse,
  AssociatePackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28, __c3, 4) as any as S.Schema<AssociatePackagesRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<AssociatePackagesResponse>,
  errors: [
    BaseException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociatePackages",
}));

export type AttachDataSourceError =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Attaches a data source to an OpenSearch application. The data source must be an Amazon OpenSearch Service domain. If both the application and the data source are active, the attachment completes immediately with a status of `ATTACHED`. Otherwise, the operation returns `PENDING` and completes the attachment automatically once both become active. If the attachment cannot be completed, its status becomes `FAILED`. This operation is idempotent: If the data source is already attached or pending, the operation returns the existing attachment.
 */
export const attachDataSource: API.OperationMethod<
  AttachDataSourceRequest,
  AttachDataSourceResponse,
  AttachDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<AttachDataSourceRequest>,
  output: __S(33, __c4, 1) as any as S.Schema<AttachDataSourceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AttachDataSource",
}));

export type AuthorizeVpcEndpointAccessError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Provides access to an Amazon OpenSearch Service domain through the use of an interface
 * VPC endpoint.
 */
export const authorizeVpcEndpointAccess: API.OperationMethod<
  AuthorizeVpcEndpointAccessRequest,
  AuthorizeVpcEndpointAccessResponse,
  AuthorizeVpcEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35, __c4, 3) as any as S.Schema<AuthorizeVpcEndpointAccessRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<AuthorizeVpcEndpointAccessResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AuthorizeVpcEndpointAccess",
}));

export type CancelDomainConfigChangeError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Cancels a pending configuration change on an Amazon OpenSearch Service domain.
 */
export const cancelDomainConfigChange: API.OperationMethod<
  CancelDomainConfigChangeRequest,
  CancelDomainConfigChangeResponse,
  CancelDomainConfigChangeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38, __c4, 6) as any as S.Schema<CancelDomainConfigChangeRequest>,
  output: __S(41, __c5, 1) as any as S.Schema<CancelDomainConfigChangeResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelDomainConfigChange",
}));

export type CancelServiceSoftwareUpdateError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Cancels a scheduled service software update for an Amazon OpenSearch Service domain.
 * You can only perform this operation before the `AutomatedUpdateDate` and when
 * the domain's `UpdateStatus` is `PENDING_UPDATE`. For more
 * information, see Service
 * software updates in Amazon OpenSearch Service.
 */
export const cancelServiceSoftwareUpdate: API.OperationMethod<
  CancelServiceSoftwareUpdateRequest,
  CancelServiceSoftwareUpdateResponse,
  CancelServiceSoftwareUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42, __c5, 2) as any as S.Schema<CancelServiceSoftwareUpdateRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<CancelServiceSoftwareUpdateResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CancelServiceSoftwareUpdate",
}));

export type CreateApplicationError =
  | AccessDeniedException
  | BaseException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates an OpenSearch UI application. For more information, see Using the OpenSearch user interface in Amazon OpenSearch Service.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50, __c6, 2) as any as S.Schema<CreateApplicationRequest>,
  output: __S(52, __c6, 4) as any as S.Schema<CreateApplicationResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateDomainError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon OpenSearch Service domain. For more information, see Creating and
 * managing Amazon OpenSearch Service domains.
 */
export const createDomain: API.OperationMethod<
  CreateDomainRequest,
  CreateDomainResponse,
  CreateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<CreateDomainRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<CreateDomainResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomain",
}));

export type CreateIndexError =
  | AccessDeniedException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an OpenSearch index with optional automatic semantic enrichment for specified text fields. Automatic semantic enrichment enables semantic search capabilities without requiring machine learning expertise, improving search relevance by up to 20% by understanding search intent and contextual meaning beyond keyword matching. The semantic enrichment process has zero impact on search latency as sparse encodings are stored directly within the index during indexing. For more information, see Automatic semantic enrichment.
 */
export const createIndex: API.OperationMethod<
  CreateIndexRequest,
  CreateIndexResponse,
  CreateIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<CreateIndexRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<CreateIndexResponse>,
  errors: [
    AccessDeniedException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIndex",
}));

export type CreateOutboundConnectionError =
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | CommonErrors;
/**
 * Creates a new cross-cluster search connection from a source Amazon OpenSearch Service domain
 * to a destination domain. For more information, see Cross-cluster search
 * for Amazon OpenSearch Service.
 */
export const createOutboundConnection: API.OperationMethod<
  CreateOutboundConnectionRequest,
  CreateOutboundConnectionResponse,
  CreateOutboundConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107, __c13, 3) as any as S.Schema<CreateOutboundConnectionRequest>,
  output: __S(108, __c13, 4) as any as S.Schema<CreateOutboundConnectionResponse>,
  errors: [
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceAlreadyExistsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateOutboundConnection",
}));

export type CreatePackageError =
  | AccessDeniedException
  | BaseException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ValidationException
  | CommonErrors;
/**
 * Creates a package for use with Amazon OpenSearch Service domains. For more
 * information, see Custom packages
 * for Amazon OpenSearch Service.
 */
export const createPackage: API.OperationMethod<
  CreatePackageRequest,
  CreatePackageResponse,
  CreatePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(113, __c14, 1) as any as S.Schema<CreatePackageRequest>,
  output: __S(116, __c14, 4) as any as S.Schema<CreatePackageResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePackage",
}));

export type CreateVpcEndpointError =
  | BaseException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Amazon OpenSearch Service-managed VPC endpoint.
 */
export const createVpcEndpoint: API.OperationMethod<
  CreateVpcEndpointRequest,
  CreateVpcEndpointResponse,
  CreateVpcEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<CreateVpcEndpointRequest>,
  output: __S(119, __c14, 7) as any as S.Schema<CreateVpcEndpointResponse>,
  errors: [
    BaseException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVpcEndpoint",
}));

export type DeleteApplicationError =
  | AccessDeniedException
  | BaseException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a specified OpenSearch application.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(120, __c15, 0) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<DeleteApplicationResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApplication",
}));

export type DeleteDataSourceError =
  | BaseException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a direct-query data source. For more information, see Deleting
 * an Amazon OpenSearch Service data source with Amazon S3.
 */
export const deleteDataSource: API.OperationMethod<
  DeleteDataSourceRequest,
  DeleteDataSourceResponse,
  DeleteDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122, __c15, 2) as any as S.Schema<DeleteDataSourceRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<DeleteDataSourceResponse>,
  errors: [
    BaseException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataSource",
}));

export type DeleteDirectQueryDataSourceError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a previously configured direct query data source from Amazon OpenSearch
 * Service.
 */
export const deleteDirectQueryDataSource: API.OperationMethod<
  DeleteDirectQueryDataSourceRequest,
  DeleteDirectQueryDataSourceResponse,
  DeleteDirectQueryDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<DeleteDirectQueryDataSourceRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<DeleteDirectQueryDataSourceResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDirectQueryDataSource",
}));

export type DeleteDomainError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon OpenSearch Service domain and all of its data. You can't recover a
 * domain after you delete it.
 */
export const deleteDomain: API.OperationMethod<
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<DeleteDomainRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<DeleteDomainResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomain",
}));

export type DeleteInboundConnectionError =
  | DisabledOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Allows the destination Amazon OpenSearch Service domain owner to delete an existing
 * inbound cross-cluster search connection. For more information, see Cross-cluster search for Amazon OpenSearch Service.
 */
export const deleteInboundConnection: API.OperationMethod<
  DeleteInboundConnectionRequest,
  DeleteInboundConnectionResponse,
  DeleteInboundConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125, __c15, 5) as any as S.Schema<DeleteInboundConnectionRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<DeleteInboundConnectionResponse>,
  errors: [DisabledOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInboundConnection",
}));

export type DeleteIndexError =
  | AccessDeniedException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an OpenSearch index. This operation permanently removes the index and cannot be undone.
 */
export const deleteIndex: API.OperationMethod<
  DeleteIndexRequest,
  DeleteIndexResponse,
  DeleteIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126, __c15, 6) as any as S.Schema<DeleteIndexRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<DeleteIndexResponse>,
  errors: [
    AccessDeniedException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIndex",
}));

export type DeleteOutboundConnectionError =
  | DisabledOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Allows the source Amazon OpenSearch Service domain owner to delete an existing
 * outbound cross-cluster search connection. For more information, see Cross-cluster search for Amazon OpenSearch Service.
 */
export const deleteOutboundConnection: API.OperationMethod<
  DeleteOutboundConnectionRequest,
  DeleteOutboundConnectionResponse,
  DeleteOutboundConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<DeleteOutboundConnectionRequest>,
  output: __S(129, __c16, 1) as any as S.Schema<DeleteOutboundConnectionResponse>,
  errors: [DisabledOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteOutboundConnection",
}));

export type DeletePackageError =
  | AccessDeniedException
  | BaseException
  | ConflictException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon OpenSearch Service package. For more information, see Custom packages
 * for Amazon OpenSearch Service.
 */
export const deletePackage: API.OperationMethod<
  DeletePackageRequest,
  DeletePackageResponse,
  DeletePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(130, __c16, 2) as any as S.Schema<DeletePackageRequest>,
  output: __S(116, __c14, 4) as any as S.Schema<DeletePackageResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    ConflictException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePackage",
}));

export type DeleteVpcEndpointError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an Amazon OpenSearch Service-managed interface VPC endpoint.
 */
export const deleteVpcEndpoint: API.OperationMethod<
  DeleteVpcEndpointRequest,
  DeleteVpcEndpointResponse,
  DeleteVpcEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(131, __c16, 3) as any as S.Schema<DeleteVpcEndpointRequest>,
  output: __S(133, __c16, 5) as any as S.Schema<DeleteVpcEndpointResponse>,
  errors: [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVpcEndpoint",
}));

export type DeregisterCapabilityError =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deregisters a capability from an OpenSearch UI application. This operation removes the capability and its associated configuration.
 */
export const deregisterCapability: API.OperationMethod<
  DeregisterCapabilityRequest,
  DeregisterCapabilityResponse,
  DeregisterCapabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(134, __c16, 6) as any as S.Schema<DeregisterCapabilityRequest>,
  output: __S(135, __c16, 7) as any as S.Schema<DeregisterCapabilityResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterCapability",
}));

export type DescribeDataSourceAttachmentError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the current status and details of a specific data source attachment for an OpenSearch application. Throws a `ResourceNotFoundException` if no attachment record exists for the specified application and data source combination.
 */
export const describeDataSourceAttachment: API.OperationMethod<
  DescribeDataSourceAttachmentRequest,
  DescribeDataSourceAttachmentResponse,
  DescribeDataSourceAttachmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(136, __c17, 0) as any as S.Schema<DescribeDataSourceAttachmentRequest>,
  output: __S(137, __c17, 1) as any as S.Schema<DescribeDataSourceAttachmentResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDataSourceAttachment",
}));

export type DescribeDomainError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the domain configuration for the specified Amazon OpenSearch Service domain,
 * including the domain ID, domain service endpoint, and domain ARN.
 */
export const describeDomain: API.OperationMethod<
  DescribeDomainRequest,
  DescribeDomainResponse,
  DescribeDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(138, __c17, 2) as any as S.Schema<DescribeDomainRequest>,
  output: __S(139, __c17, 3) as any as S.Schema<DescribeDomainResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomain",
}));

export type DescribeDomainAutoTunesError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the list of optimizations that Auto-Tune has made to an Amazon OpenSearch
 * Service domain. For more information, see Auto-Tune for Amazon
 * OpenSearch Service.
 */
export const describeDomainAutoTunes: API.PaginatedOperationMethod<
  DescribeDomainAutoTunesRequest,
  DescribeDomainAutoTunesResponse,
  DescribeDomainAutoTunesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(140, __c17, 4) as any as S.Schema<DescribeDomainAutoTunesRequest>,
  output: __S(145, __c18, 1) as any as S.Schema<DescribeDomainAutoTunesResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomainAutoTunes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeDomainChangeProgressError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about the current blue/green deployment happening on an Amazon
 * OpenSearch Service domain. For more information, see Making configuration changes in Amazon OpenSearch Service.
 */
export const describeDomainChangeProgress: API.OperationMethod<
  DescribeDomainChangeProgressRequest,
  DescribeDomainChangeProgressResponse,
  DescribeDomainChangeProgressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(146, __c18, 2) as any as S.Schema<DescribeDomainChangeProgressRequest>,
  output: __S(152, __c19, 0) as any as S.Schema<DescribeDomainChangeProgressResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomainChangeProgress",
}));

export type DescribeDomainConfigError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the configuration of an Amazon OpenSearch Service domain.
 */
export const describeDomainConfig: API.OperationMethod<
  DescribeDomainConfigRequest,
  DescribeDomainConfigResponse,
  DescribeDomainConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(153, __c19, 1) as any as S.Schema<DescribeDomainConfigRequest>,
  output: __S(178, __c22, 2) as any as S.Schema<DescribeDomainConfigResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomainConfig",
}));

export type DescribeDomainHealthError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about domain and node health, the standby Availability Zone,
 * number of nodes per Availability Zone, and shard count per node.
 */
export const describeDomainHealth: API.OperationMethod<
  DescribeDomainHealthRequest,
  DescribeDomainHealthResponse,
  DescribeDomainHealthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179, __c22, 3) as any as S.Schema<DescribeDomainHealthRequest>,
  output: __S(184, __c23, 0) as any as S.Schema<DescribeDomainHealthResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomainHealth",
}));

export type DescribeDomainNodesError =
  | BaseException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about domain and nodes, including data nodes, master nodes,
 * ultrawarm nodes, Availability Zone(s), standby nodes, node configurations, and node
 * states.
 */
export const describeDomainNodes: API.OperationMethod<
  DescribeDomainNodesRequest,
  DescribeDomainNodesResponse,
  DescribeDomainNodesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185, __c23, 1) as any as S.Schema<DescribeDomainNodesRequest>,
  output: __S(188, __c23, 4) as any as S.Schema<DescribeDomainNodesResponse>,
  errors: [
    BaseException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomainNodes",
}));

export type DescribeDomainsError =
  | BaseException
  | InternalException
  | ValidationException
  | CommonErrors;
/**
 * Returns domain configuration information about the specified Amazon OpenSearch Service
 * domains.
 */
export const describeDomains: API.OperationMethod<
  DescribeDomainsRequest,
  DescribeDomainsResponse,
  DescribeDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189, __c23, 5) as any as S.Schema<DescribeDomainsRequest>,
  output: __S(191, __c23, 7) as any as S.Schema<DescribeDomainsResponse>,
  errors: [BaseException, InternalException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDomains",
}));

export type DescribeDryRunProgressError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the progress of a pre-update dry run analysis on an Amazon OpenSearch
 * Service domain. For more information, see Determining whether a change will cause a blue/green deployment.
 */
export const describeDryRunProgress: API.OperationMethod<
  DescribeDryRunProgressRequest,
  DescribeDryRunProgressResponse,
  DescribeDryRunProgressError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192, __c24, 0) as any as S.Schema<DescribeDryRunProgressRequest>,
  output: __S(195, __c24, 3) as any as S.Schema<DescribeDryRunProgressResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDryRunProgress",
}));

export type DescribeInboundConnectionsError =
  | DisabledOperationException
  | InvalidPaginationTokenException
  | CommonErrors;
/**
 * Lists all the inbound cross-cluster search connections for a destination (remote)
 * Amazon OpenSearch Service domain. For more information, see Cross-cluster search for Amazon OpenSearch Service.
 */
export const describeInboundConnections: API.PaginatedOperationMethod<
  DescribeInboundConnectionsRequest,
  DescribeInboundConnectionsResponse,
  DescribeInboundConnectionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(198, __c24, 6) as any as S.Schema<DescribeInboundConnectionsRequest>,
  output: __S(200, __c25, 0) as any as S.Schema<DescribeInboundConnectionsResponse>,
  errors: [DisabledOperationException, InvalidPaginationTokenException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInboundConnections",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeInsightDetailsError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the details of an existing insight for an Amazon OpenSearch Service domain.
 * Returns detailed fields associated with the specified insight, such as text descriptions
 * and metric data.
 */
export const describeInsightDetails: API.OperationMethod<
  DescribeInsightDetailsRequest,
  DescribeInsightDetailsResponse,
  DescribeInsightDetailsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(202, __c25, 2) as any as S.Schema<DescribeInsightDetailsRequest>,
  output: __S(205, __c25, 5) as any as S.Schema<DescribeInsightDetailsResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInsightDetails",
}));

export type DescribeInstanceTypeLimitsError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the instance count, storage, and master node limits for a given OpenSearch
 * or Elasticsearch version and instance type.
 */
export const describeInstanceTypeLimits: API.OperationMethod<
  DescribeInstanceTypeLimitsRequest,
  DescribeInstanceTypeLimitsResponse,
  DescribeInstanceTypeLimitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(206, __c25, 6) as any as S.Schema<DescribeInstanceTypeLimitsRequest>,
  output: __S(215, __c26, 7) as any as S.Schema<DescribeInstanceTypeLimitsResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInstanceTypeLimits",
}));

export type DescribeOutboundConnectionsError =
  | DisabledOperationException
  | InvalidPaginationTokenException
  | CommonErrors;
/**
 * Lists all the outbound cross-cluster connections for a local (source) Amazon
 * OpenSearch Service domain. For more information, see Cross-cluster search for Amazon OpenSearch Service.
 */
export const describeOutboundConnections: API.PaginatedOperationMethod<
  DescribeOutboundConnectionsRequest,
  DescribeOutboundConnectionsResponse,
  DescribeOutboundConnectionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(216, __c27, 0) as any as S.Schema<DescribeOutboundConnectionsRequest>,
  output: __S(218, __c27, 2) as any as S.Schema<DescribeOutboundConnectionsResponse>,
  errors: [DisabledOperationException, InvalidPaginationTokenException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOutboundConnections",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribePackagesError =
  | AccessDeniedException
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes all packages available to OpenSearch Service. For more information, see
 * Custom packages
 * for Amazon OpenSearch Service.
 */
export const describePackages: API.PaginatedOperationMethod<
  DescribePackagesRequest,
  DescribePackagesResponse,
  DescribePackagesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(221, __c27, 5) as any as S.Schema<DescribePackagesRequest>,
  output: __S(223, __c27, 7) as any as S.Schema<DescribePackagesResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePackages",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeReservedInstanceOfferingsError =
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the available Amazon OpenSearch Service Reserved Instance offerings for a
 * given Region. For more information, see Reserved Instances in Amazon
 * OpenSearch Service.
 */
export const describeReservedInstanceOfferings: API.PaginatedOperationMethod<
  DescribeReservedInstanceOfferingsRequest,
  DescribeReservedInstanceOfferingsResponse,
  DescribeReservedInstanceOfferingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(224, __c28, 0) as any as S.Schema<DescribeReservedInstanceOfferingsRequest>,
  output: __S(229, __c28, 5) as any as S.Schema<DescribeReservedInstanceOfferingsResponse>,
  errors: [
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReservedInstanceOfferings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeReservedInstancesError =
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Describes the Amazon OpenSearch Service instances that you have reserved in a given
 * Region. For more information, see Reserved Instances in Amazon
 * OpenSearch Service.
 */
export const describeReservedInstances: API.PaginatedOperationMethod<
  DescribeReservedInstancesRequest,
  DescribeReservedInstancesResponse,
  DescribeReservedInstancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(230, __c28, 6) as any as S.Schema<DescribeReservedInstancesRequest>,
  output: __S(233, __c29, 1) as any as S.Schema<DescribeReservedInstancesResponse>,
  errors: [
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeReservedInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeVpcEndpointsError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ValidationException
  | CommonErrors;
/**
 * Describes one or more Amazon OpenSearch Service-managed VPC endpoints.
 */
export const describeVpcEndpoints: API.OperationMethod<
  DescribeVpcEndpointsRequest,
  DescribeVpcEndpointsResponse,
  DescribeVpcEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(234, __c29, 2) as any as S.Schema<DescribeVpcEndpointsRequest>,
  output: __S(238, __c29, 6) as any as S.Schema<DescribeVpcEndpointsResponse>,
  errors: [BaseException, DisabledOperationException, InternalException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeVpcEndpoints",
}));

export type DetachDataSourceError =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes a data source from an OpenSearch application. The application must be in the `ACTIVE` state. This operation removes the data source saved object from the application and deletes the attachment record. Throws a `ConflictException` if the specified data source has a `PENDING` attachment, and a `ResourceNotFoundException` if the data source is not currently attached to the application.
 */
export const detachDataSource: API.OperationMethod<
  DetachDataSourceRequest,
  DetachDataSourceResponse,
  DetachDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(239, __c29, 7) as any as S.Schema<DetachDataSourceRequest>,
  output: __S(240, __c30, 0) as any as S.Schema<DetachDataSourceResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DetachDataSource",
}));

export type DissociatePackageError =
  | AccessDeniedException
  | BaseException
  | ConflictException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Removes a package from the specified Amazon OpenSearch Service domain. The package
 * can't be in use with any OpenSearch index for the dissociation to succeed. The package
 * is still available in OpenSearch Service for association later. For more information,
 * see Custom packages
 * for Amazon OpenSearch Service.
 */
export const dissociatePackage: API.OperationMethod<
  DissociatePackageRequest,
  DissociatePackageResponse,
  DissociatePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(241, __c30, 1) as any as S.Schema<DissociatePackageRequest>,
  output: __S(242, __c30, 2) as any as S.Schema<DissociatePackageResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    ConflictException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DissociatePackage",
}));

export type DissociatePackagesError =
  | BaseException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Dissociates multiple packages from a domain simultaneously.
 */
export const dissociatePackages: API.OperationMethod<
  DissociatePackagesRequest,
  DissociatePackagesResponse,
  DissociatePackagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(243, __c30, 3) as any as S.Schema<DissociatePackagesRequest>,
  output: __S(30, __c3, 6) as any as S.Schema<DissociatePackagesResponse>,
  errors: [
    BaseException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DissociatePackages",
}));

export type GetApplicationError =
  | AccessDeniedException
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the configuration and status of an existing OpenSearch application.
 */
export const getApplication: API.OperationMethod<
  GetApplicationRequest,
  GetApplicationResponse,
  GetApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(244, __c30, 4) as any as S.Schema<GetApplicationRequest>,
  output: __S(245, __c30, 5) as any as S.Schema<GetApplicationResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplication",
}));

export type GetCapabilityError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a registered capability for an OpenSearch UI application, including its configuration and current status.
 */
export const getCapability: API.OperationMethod<
  GetCapabilityRequest,
  GetCapabilityResponse,
  GetCapabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(246, __c30, 6) as any as S.Schema<GetCapabilityRequest>,
  output: __S(251, __c31, 3) as any as S.Schema<GetCapabilityResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCapability",
}));

export type GetCompatibleVersionsError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a map of OpenSearch or Elasticsearch versions and the versions you can upgrade
 * them to.
 */
export const getCompatibleVersions: API.OperationMethod<
  GetCompatibleVersionsRequest,
  GetCompatibleVersionsResponse,
  GetCompatibleVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(252, __c31, 4) as any as S.Schema<GetCompatibleVersionsRequest>,
  output: __S(255, __c31, 7) as any as S.Schema<GetCompatibleVersionsResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCompatibleVersions",
}));

export type GetDataSourceError =
  | BaseException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a direct query data source.
 */
export const getDataSource: API.OperationMethod<
  GetDataSourceRequest,
  GetDataSourceResponse,
  GetDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(256, __c32, 0) as any as S.Schema<GetDataSourceRequest>,
  output: __S(257, __c32, 1) as any as S.Schema<GetDataSourceResponse>,
  errors: [
    BaseException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataSource",
}));

export type GetDefaultApplicationSettingError =
  | AccessDeniedException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets the ARN of the current default application.
 *
 * If the default application isn't set, the operation returns a resource not found
 * error.
 */
export const getDefaultApplicationSetting: API.OperationMethod<
  GetDefaultApplicationSettingRequest,
  GetDefaultApplicationSettingResponse,
  GetDefaultApplicationSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(258, __c32, 2) as any as S.Schema<GetDefaultApplicationSettingRequest>,
  output: __S(259, __c32, 3) as any as S.Schema<GetDefaultApplicationSettingResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDefaultApplicationSetting",
}));

export type GetDirectQueryDataSourceError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns detailed configuration information for a specific direct query data source in
 * Amazon OpenSearch Service.
 */
export const getDirectQueryDataSource: API.OperationMethod<
  GetDirectQueryDataSourceRequest,
  GetDirectQueryDataSourceResponse,
  GetDirectQueryDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(260, __c32, 4) as any as S.Schema<GetDirectQueryDataSourceRequest>,
  output: __S(261, __c32, 5) as any as S.Schema<GetDirectQueryDataSourceResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDirectQueryDataSource",
}));

export type GetDomainMaintenanceStatusError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * The status of the maintenance action.
 */
export const getDomainMaintenanceStatus: API.OperationMethod<
  GetDomainMaintenanceStatusRequest,
  GetDomainMaintenanceStatusResponse,
  GetDomainMaintenanceStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(262, __c32, 6) as any as S.Schema<GetDomainMaintenanceStatusRequest>,
  output: __S(263, __c32, 7) as any as S.Schema<GetDomainMaintenanceStatusResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomainMaintenanceStatus",
}));

export type GetIndexError =
  | AccessDeniedException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about an OpenSearch index including its schema and semantic enrichment configuration. Use this operation to view the current index structure and semantic search settings.
 */
export const getIndex: API.OperationMethod<
  GetIndexRequest,
  GetIndexResponse,
  GetIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(264, __c33, 0) as any as S.Schema<GetIndexRequest>,
  output: __S(265, __c33, 1) as any as S.Schema<GetIndexResponse>,
  errors: [
    AccessDeniedException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIndex",
}));

export type GetMigrationError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the current status and progress of a migration job, including the number of exported and imported objects and error details if the migration failed.
 */
export const getMigration: API.OperationMethod<
  GetMigrationRequest,
  GetMigrationResponse,
  GetMigrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(266, __c33, 2) as any as S.Schema<GetMigrationRequest>,
  output: __S(269, __c33, 5) as any as S.Schema<GetMigrationResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMigration",
}));

export type GetPackageVersionHistoryError =
  | AccessDeniedException
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of Amazon OpenSearch Service package versions, along with their creation
 * time, commit message, and plugin properties (if the package is a zip plugin package). For more
 * information, see Custom packages for Amazon
 * OpenSearch Service.
 */
export const getPackageVersionHistory: API.PaginatedOperationMethod<
  GetPackageVersionHistoryRequest,
  GetPackageVersionHistoryResponse,
  GetPackageVersionHistoryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(270, __c33, 6) as any as S.Schema<GetPackageVersionHistoryRequest>,
  output: __S(273, __c34, 1) as any as S.Schema<GetPackageVersionHistoryResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPackageVersionHistory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetUpgradeHistoryError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the complete history of the last 10 upgrades performed on an Amazon OpenSearch
 * Service domain.
 */
export const getUpgradeHistory: API.PaginatedOperationMethod<
  GetUpgradeHistoryRequest,
  GetUpgradeHistoryResponse,
  GetUpgradeHistoryError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(274, __c34, 2) as any as S.Schema<GetUpgradeHistoryRequest>,
  output: __S(279, __c34, 7) as any as S.Schema<GetUpgradeHistoryResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUpgradeHistory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetUpgradeStatusError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns the most recent status of the last upgrade or upgrade eligibility check performed on
 * an Amazon OpenSearch Service domain.
 */
export const getUpgradeStatus: API.OperationMethod<
  GetUpgradeStatusRequest,
  GetUpgradeStatusResponse,
  GetUpgradeStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(280, __c35, 0) as any as S.Schema<GetUpgradeStatusRequest>,
  output: __S(281, __c35, 1) as any as S.Schema<GetUpgradeStatusResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUpgradeStatus",
}));

export type InsightFeedbackError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Submits feedback for an existing insight in an Amazon OpenSearch Service domain.
 * Allows users to provide a thumbs up or thumbs down rating and optional text feedback
 * for a specific insight.
 */
export const insightFeedback: API.OperationMethod<
  InsightFeedbackRequest,
  InsightFeedbackResponse,
  InsightFeedbackError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(283, __c35, 3) as any as S.Schema<InsightFeedbackRequest>,
  output: __S(284, __c35, 4) as any as S.Schema<InsightFeedbackResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InsightFeedback",
}));

export type ListApplicationsError =
  | AccessDeniedException
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all OpenSearch applications under your account.
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  ApplicationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(286, __c35, 6) as any as S.Schema<ListApplicationsRequest>,
  output: __S(289, __c36, 1) as any as S.Schema<ListApplicationsResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "ApplicationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataSourceAttachmentsError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns a paginated list of all data source attachments for an OpenSearch application, including attachments in all states (`PENDING`, `ATTACHED`, and `FAILED`).
 */
export const listDataSourceAttachments: API.OperationMethod<
  ListDataSourceAttachmentsRequest,
  ListDataSourceAttachmentsResponse,
  ListDataSourceAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(290, __c36, 2) as any as S.Schema<ListDataSourceAttachmentsRequest>,
  output: __S(293, __c36, 5) as any as S.Schema<ListDataSourceAttachmentsResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataSourceAttachments",
}));

export type ListDataSourcesError =
  | BaseException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists direct-query data sources for a specific domain. For more information, see For
 * more information, see Working with
 * Amazon OpenSearch Service direct queries with Amazon S3.
 */
export const listDataSources: API.OperationMethod<
  ListDataSourcesRequest,
  ListDataSourcesResponse,
  ListDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(294, __c36, 6) as any as S.Schema<ListDataSourcesRequest>,
  output: __S(297, __c37, 1) as any as S.Schema<ListDataSourcesResponse>,
  errors: [
    BaseException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataSources",
}));

export type ListDirectQueryDataSourcesError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists an inventory of all the direct query data sources that you have configured
 * within Amazon OpenSearch Service.
 */
export const listDirectQueryDataSources: API.OperationMethod<
  ListDirectQueryDataSourcesRequest,
  ListDirectQueryDataSourcesResponse,
  ListDirectQueryDataSourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(298, __c37, 2) as any as S.Schema<ListDirectQueryDataSourcesRequest>,
  output: __S(301, __c37, 5) as any as S.Schema<ListDirectQueryDataSourcesResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDirectQueryDataSources",
}));

export type ListDomainMaintenancesError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * A list of maintenance actions for the domain.
 */
export const listDomainMaintenances: API.PaginatedOperationMethod<
  ListDomainMaintenancesRequest,
  ListDomainMaintenancesResponse,
  ListDomainMaintenancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(302, __c37, 6) as any as S.Schema<ListDomainMaintenancesRequest>,
  output: __S(305, __c38, 1) as any as S.Schema<ListDomainMaintenancesResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainMaintenances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDomainNamesError = BaseException | ValidationException | CommonErrors;
/**
 * Returns the names of all Amazon OpenSearch Service domains owned by the current user
 * in the active Region.
 */
export const listDomainNames: API.OperationMethod<
  ListDomainNamesRequest,
  ListDomainNamesResponse,
  ListDomainNamesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(306, __c38, 2) as any as S.Schema<ListDomainNamesRequest>,
  output: __S(309, __c38, 5) as any as S.Schema<ListDomainNamesResponse>,
  errors: [BaseException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainNames",
}));

export type ListDomainsForPackageError =
  | AccessDeniedException
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Amazon OpenSearch Service domains associated with a given package. For more
 * information, see Custom packages
 * for Amazon OpenSearch Service.
 */
export const listDomainsForPackage: API.PaginatedOperationMethod<
  ListDomainsForPackageRequest,
  ListDomainsForPackageResponse,
  ListDomainsForPackageError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(310, __c38, 6) as any as S.Schema<ListDomainsForPackageRequest>,
  output: __S(311, __c38, 7) as any as S.Schema<ListDomainsForPackageResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomainsForPackage",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInsightsError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists insights for an Amazon OpenSearch Service domain or Amazon Web Services account.
 * Returns a paginated list of insights based on the specified entity, filters, time range,
 * and sort order.
 */
export const listInsights: API.OperationMethod<
  ListInsightsRequest,
  ListInsightsResponse,
  ListInsightsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(313, __c39, 1) as any as S.Schema<ListInsightsRequest>,
  output: __S(316, __c39, 4) as any as S.Schema<ListInsightsResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInsights",
}));

export type ListInstanceTypeDetailsError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all instance types and available features for a given OpenSearch or
 * Elasticsearch version.
 */
export const listInstanceTypeDetails: API.PaginatedOperationMethod<
  ListInstanceTypeDetailsRequest,
  ListInstanceTypeDetailsResponse,
  ListInstanceTypeDetailsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(317, __c39, 5) as any as S.Schema<ListInstanceTypeDetailsRequest>,
  output: __S(320, __c40, 0) as any as S.Schema<ListInstanceTypeDetailsResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInstanceTypeDetails",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMigrationsError =
  | AccessDeniedException
  | DisabledOperationException
  | InternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists migration jobs for an Amazon OpenSearch Service application. You can filter results by migration status. Use pagination to ensure that the operation returns quickly and successfully.
 */
export const listMigrations: API.OperationMethod<
  ListMigrationsRequest,
  ListMigrationsResponse,
  ListMigrationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(321, __c40, 1) as any as S.Schema<ListMigrationsRequest>,
  output: __S(324, __c40, 4) as any as S.Schema<ListMigrationsResponse>,
  errors: [
    AccessDeniedException,
    DisabledOperationException,
    InternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMigrations",
}));

export type ListPackagesForDomainError =
  | AccessDeniedException
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all packages associated with an Amazon OpenSearch Service domain. For more
 * information, see Custom packages
 * for Amazon OpenSearch Service.
 */
export const listPackagesForDomain: API.PaginatedOperationMethod<
  ListPackagesForDomainRequest,
  ListPackagesForDomainResponse,
  ListPackagesForDomainError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(325, __c40, 5) as any as S.Schema<ListPackagesForDomainRequest>,
  output: __S(311, __c38, 7) as any as S.Schema<ListPackagesForDomainResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPackagesForDomain",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListScheduledActionsError =
  | BaseException
  | InternalException
  | InvalidPaginationTokenException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of configuration changes that are scheduled for a domain. These
 * changes can be service
 * software updates or blue/green Auto-Tune enhancements.
 */
export const listScheduledActions: API.PaginatedOperationMethod<
  ListScheduledActionsRequest,
  ListScheduledActionsResponse,
  ListScheduledActionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(326, __c40, 6) as any as S.Schema<ListScheduledActionsRequest>,
  output: __S(329, __c41, 1) as any as S.Schema<ListScheduledActionsResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidPaginationTokenException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListScheduledActions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Returns all resource tags for an Amazon OpenSearch Service domain, data source, or
 * application. For more information, see Tagging Amazon OpenSearch Service resources.
 */
export const listTags: API.OperationMethod<
  ListTagsRequest,
  ListTagsResponse,
  ListTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(330, __c41, 2) as any as S.Schema<ListTagsRequest>,
  output: __S(331, __c41, 3) as any as S.Schema<ListTagsResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTags",
}));

export type ListVersionsError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists all versions of OpenSearch and Elasticsearch that Amazon OpenSearch Service
 * supports.
 */
export const listVersions: API.PaginatedOperationMethod<
  ListVersionsRequest,
  ListVersionsResponse,
  ListVersionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(332, __c41, 4) as any as S.Schema<ListVersionsRequest>,
  output: __S(333, __c41, 5) as any as S.Schema<ListVersionsResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListVpcEndpointAccessError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves information about each Amazon Web Services principal that is allowed to
 * access a given Amazon OpenSearch Service domain through the use of an interface VPC
 * endpoint.
 */
export const listVpcEndpointAccess: API.OperationMethod<
  ListVpcEndpointAccessRequest,
  ListVpcEndpointAccessResponse,
  ListVpcEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(334, __c41, 6) as any as S.Schema<ListVpcEndpointAccessRequest>,
  output: __S(336, __c42, 0) as any as S.Schema<ListVpcEndpointAccessResponse>,
  errors: [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVpcEndpointAccess",
}));

export type ListVpcEndpointsError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | CommonErrors;
/**
 * Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current Amazon Web Services account and Region.
 */
export const listVpcEndpoints: API.OperationMethod<
  ListVpcEndpointsRequest,
  ListVpcEndpointsResponse,
  ListVpcEndpointsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(337, __c42, 1) as any as S.Schema<ListVpcEndpointsRequest>,
  output: __S(339, __c42, 3) as any as S.Schema<ListVpcEndpointsResponse>,
  errors: [BaseException, DisabledOperationException, InternalException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVpcEndpoints",
}));

export type ListVpcEndpointsForDomainError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves all Amazon OpenSearch Service-managed VPC endpoints associated with a
 * particular domain.
 */
export const listVpcEndpointsForDomain: API.OperationMethod<
  ListVpcEndpointsForDomainRequest,
  ListVpcEndpointsForDomainResponse,
  ListVpcEndpointsForDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(340, __c42, 4) as any as S.Schema<ListVpcEndpointsForDomainRequest>,
  output: __S(341, __c42, 5) as any as S.Schema<ListVpcEndpointsForDomainResponse>,
  errors: [BaseException, DisabledOperationException, InternalException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVpcEndpointsForDomain",
}));

export type PurchaseReservedInstanceOfferingError =
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Allows you to purchase Amazon OpenSearch Service Reserved Instances.
 */
export const purchaseReservedInstanceOffering: API.OperationMethod<
  PurchaseReservedInstanceOfferingRequest,
  PurchaseReservedInstanceOfferingResponse,
  PurchaseReservedInstanceOfferingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(342, __c42, 6) as any as S.Schema<PurchaseReservedInstanceOfferingRequest>,
  output: __S(343, __c42, 7) as any as S.Schema<PurchaseReservedInstanceOfferingResponse>,
  errors: [
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PurchaseReservedInstanceOffering",
}));

export type PutDefaultApplicationSettingError =
  | AccessDeniedException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Sets the default application to the application with the specified ARN.
 *
 * To remove the default application, use the `GetDefaultApplicationSetting`
 * operation to get the current default and then call the
 * `PutDefaultApplicationSetting` with the current applications ARN and the
 * `setAsDefault` parameter set to `false`.
 */
export const putDefaultApplicationSetting: API.OperationMethod<
  PutDefaultApplicationSettingRequest,
  PutDefaultApplicationSettingResponse,
  PutDefaultApplicationSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(344, __c43, 0) as any as S.Schema<PutDefaultApplicationSettingRequest>,
  output: __S(259, __c32, 3) as any as S.Schema<PutDefaultApplicationSettingResponse>,
  errors: [
    AccessDeniedException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDefaultApplicationSetting",
}));

export type RegisterCapabilityError =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Registers a capability for an OpenSearch UI application. Use this operation to enable specific capabilities, such as AI features, for a given application. The capability configuration defines the type and settings of the capability to register. For more information about the AI features, see Agentic AI for OpenSearch UI.
 */
export const registerCapability: API.OperationMethod<
  RegisterCapabilityRequest,
  RegisterCapabilityResponse,
  RegisterCapabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(345, __c43, 1) as any as S.Schema<RegisterCapabilityRequest>,
  output: __S(346, __c43, 2) as any as S.Schema<RegisterCapabilityResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterCapability",
}));

export type RejectInboundConnectionError =
  | DisabledOperationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Allows the remote Amazon OpenSearch Service domain owner to reject an inbound
 * cross-cluster connection request.
 */
export const rejectInboundConnection: API.OperationMethod<
  RejectInboundConnectionRequest,
  RejectInboundConnectionResponse,
  RejectInboundConnectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(347, __c43, 3) as any as S.Schema<RejectInboundConnectionRequest>,
  output: __S(5, __c0, 5) as any as S.Schema<RejectInboundConnectionResponse>,
  errors: [DisabledOperationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectInboundConnection",
}));

export type RemoveTagsError =
  | BaseException
  | InternalException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified set of tags from an Amazon OpenSearch Service domain, data
 * source, or application. For more information, see Tagging Amazon OpenSearch Service resources.
 */
export const removeTags: API.OperationMethod<
  RemoveTagsRequest,
  RemoveTagsResponse,
  RemoveTagsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(348, __c43, 4) as any as S.Schema<RemoveTagsRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<RemoveTagsResponse>,
  errors: [BaseException, InternalException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveTags",
}));

export type RevokeVpcEndpointAccessError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Revokes access to an Amazon OpenSearch Service domain that was provided through an
 * interface VPC endpoint.
 */
export const revokeVpcEndpointAccess: API.OperationMethod<
  RevokeVpcEndpointAccessRequest,
  RevokeVpcEndpointAccessResponse,
  RevokeVpcEndpointAccessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(349, __c43, 5) as any as S.Schema<RevokeVpcEndpointAccessRequest>,
  output: __S(121, __c15, 1) as any as S.Schema<RevokeVpcEndpointAccessResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RevokeVpcEndpointAccess",
}));

export type RollbackServiceSoftwareUpdateError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Rolls back a service software update for a domain to the previous version. For more
 * information, see Service
 * software updates in Amazon OpenSearch Service.
 */
export const rollbackServiceSoftwareUpdate: API.OperationMethod<
  RollbackServiceSoftwareUpdateRequest,
  RollbackServiceSoftwareUpdateResponse,
  RollbackServiceSoftwareUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(350, __c43, 6) as any as S.Schema<RollbackServiceSoftwareUpdateRequest>,
  output: __S(352, __c44, 0) as any as S.Schema<RollbackServiceSoftwareUpdateResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RollbackServiceSoftwareUpdate",
}));

export type StartDomainMaintenanceError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Starts the node maintenance process on the data node. These processes can include a
 * node reboot, an Opensearch or Elasticsearch process restart, or a Dashboard or Kibana
 * restart.
 */
export const startDomainMaintenance: API.OperationMethod<
  StartDomainMaintenanceRequest,
  StartDomainMaintenanceResponse,
  StartDomainMaintenanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(353, __c44, 1) as any as S.Schema<StartDomainMaintenanceRequest>,
  output: __S(354, __c44, 2) as any as S.Schema<StartDomainMaintenanceResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDomainMaintenance",
}));

export type StartMigrationError =
  | AccessDeniedException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Initiates a migration job to migrate saved objects from a data source to an Amazon OpenSearch Service application workspace. Saved objects include dashboards, visualizations, index patterns, and searches. You can specify export filters to control the scope of the migration and a conflict resolution strategy for handling existing objects in the target workspace.
 */
export const startMigration: API.OperationMethod<
  StartMigrationRequest,
  StartMigrationResponse,
  StartMigrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(360, __c45, 0) as any as S.Schema<StartMigrationRequest>,
  output: __S(361, __c45, 1) as any as S.Schema<StartMigrationResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMigration",
}));

export type StartServiceSoftwareUpdateError =
  | BaseException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Schedules a service software update for an Amazon OpenSearch Service domain. For more
 * information, see Service
 * software updates in Amazon OpenSearch Service.
 */
export const startServiceSoftwareUpdate: API.OperationMethod<
  StartServiceSoftwareUpdateRequest,
  StartServiceSoftwareUpdateResponse,
  StartServiceSoftwareUpdateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(362, __c45, 2) as any as S.Schema<StartServiceSoftwareUpdateRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<StartServiceSoftwareUpdateResponse>,
  errors: [BaseException, InternalException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartServiceSoftwareUpdate",
}));

export type UpdateApplicationError =
  | AccessDeniedException
  | BaseException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration and settings of an existing OpenSearch application.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(363, __c45, 3) as any as S.Schema<UpdateApplicationRequest>,
  output: __S(364, __c45, 4) as any as S.Schema<UpdateApplicationResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApplication",
}));

export type UpdateDataSourceError =
  | BaseException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a direct-query data source. For more information, see Working
 * with Amazon OpenSearch Service data source integrations with Amazon
 * S3.
 */
export const updateDataSource: API.OperationMethod<
  UpdateDataSourceRequest,
  UpdateDataSourceResponse,
  UpdateDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(365, __c45, 5) as any as S.Schema<UpdateDataSourceRequest>,
  output: __S(9, __c1, 1) as any as S.Schema<UpdateDataSourceResponse>,
  errors: [
    BaseException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataSource",
}));

export type UpdateDirectQueryDataSourceError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration or properties of an existing direct query data source in
 * Amazon OpenSearch Service.
 */
export const updateDirectQueryDataSource: API.OperationMethod<
  UpdateDirectQueryDataSourceRequest,
  UpdateDirectQueryDataSourceResponse,
  UpdateDirectQueryDataSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(366, __c45, 6) as any as S.Schema<UpdateDirectQueryDataSourceRequest>,
  output: __S(17, __c2, 1) as any as S.Schema<UpdateDirectQueryDataSourceResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDirectQueryDataSource",
}));

export type UpdateDomainConfigError =
  | BaseException
  | InternalException
  | InvalidTypeException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Modifies the cluster configuration of the specified Amazon OpenSearch Service
 * domain.
 */
export const updateDomainConfig: API.OperationMethod<
  UpdateDomainConfigRequest,
  UpdateDomainConfigResponse,
  UpdateDomainConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(367, __c45, 7) as any as S.Schema<UpdateDomainConfigRequest>,
  output: __S(368, __c46, 0) as any as S.Schema<UpdateDomainConfigResponse>,
  errors: [
    BaseException,
    InternalException,
    InvalidTypeException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDomainConfig",
}));

export type UpdateIndexError =
  | AccessDeniedException
  | DependencyFailureException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing OpenSearch index schema and semantic enrichment configuration. This operation allows modification of field mappings and semantic search settings for text fields. Changes to semantic enrichment configuration will apply to newly ingested documents.
 */
export const updateIndex: API.OperationMethod<
  UpdateIndexRequest,
  UpdateIndexResponse,
  UpdateIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(369, __c46, 1) as any as S.Schema<UpdateIndexRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<UpdateIndexResponse>,
  errors: [
    AccessDeniedException,
    DependencyFailureException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIndex",
}));

export type UpdatePackageError =
  | AccessDeniedException
  | BaseException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates a package for use with Amazon OpenSearch Service domains. For more
 * information, see Custom packages
 * for Amazon OpenSearch Service.
 */
export const updatePackage: API.OperationMethod<
  UpdatePackageRequest,
  UpdatePackageResponse,
  UpdatePackageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(370, __c46, 2) as any as S.Schema<UpdatePackageRequest>,
  output: __S(116, __c14, 4) as any as S.Schema<UpdatePackageResponse>,
  errors: [
    AccessDeniedException,
    BaseException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePackage",
}));

export type UpdatePackageScopeError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the scope of a package. Scope of the package defines users who can view and
 * associate a package.
 */
export const updatePackageScope: API.OperationMethod<
  UpdatePackageScopeRequest,
  UpdatePackageScopeResponse,
  UpdatePackageScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(371, __c46, 3) as any as S.Schema<UpdatePackageScopeRequest>,
  output: __S(372, __c46, 4) as any as S.Schema<UpdatePackageScopeResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePackageScope",
}));

export type UpdateScheduledActionError =
  | BaseException
  | ConflictException
  | InternalException
  | LimitExceededException
  | ResourceNotFoundException
  | SlotNotAvailableException
  | ValidationException
  | CommonErrors;
/**
 * Reschedules a planned domain configuration change for a later time. This change can be
 * a scheduled service
 * software update or a blue/green Auto-Tune enhancement.
 */
export const updateScheduledAction: API.OperationMethod<
  UpdateScheduledActionRequest,
  UpdateScheduledActionResponse,
  UpdateScheduledActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(373, __c46, 5) as any as S.Schema<UpdateScheduledActionRequest>,
  output: __S(374, __c46, 6) as any as S.Schema<UpdateScheduledActionResponse>,
  errors: [
    BaseException,
    ConflictException,
    InternalException,
    LimitExceededException,
    ResourceNotFoundException,
    SlotNotAvailableException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateScheduledAction",
}));

export type UpdateVpcEndpointError =
  | BaseException
  | ConflictException
  | DisabledOperationException
  | InternalException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Modifies an Amazon OpenSearch Service-managed interface VPC endpoint.
 */
export const updateVpcEndpoint: API.OperationMethod<
  UpdateVpcEndpointRequest,
  UpdateVpcEndpointResponse,
  UpdateVpcEndpointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(375, __c46, 7) as any as S.Schema<UpdateVpcEndpointRequest>,
  output: __S(119, __c14, 7) as any as S.Schema<UpdateVpcEndpointResponse>,
  errors: [
    BaseException,
    ConflictException,
    DisabledOperationException,
    InternalException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVpcEndpoint",
}));

export type UpgradeDomainError =
  | BaseException
  | DisabledOperationException
  | InternalException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Allows you to either upgrade your Amazon OpenSearch Service domain or perform an
 * upgrade eligibility check to a compatible version of OpenSearch or Elasticsearch.
 */
export const upgradeDomain: API.OperationMethod<
  UpgradeDomainRequest,
  UpgradeDomainResponse,
  UpgradeDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(376, __c47, 0) as any as S.Schema<UpgradeDomainRequest>,
  output: __S(377, __c47, 1) as any as S.Schema<UpgradeDomainResponse>,
  errors: [
    BaseException,
    DisabledOperationException,
    InternalException,
    ResourceAlreadyExistsException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpgradeDomain",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConnectionId: S.String.pipe(T.HttpLabel("ConnectionId")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "PUT",
              uri: "/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/accept",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AcceptInboundConnectionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          OwnerId: S.optional(S.String),
          DomainName: S.String,
          Region: S.optional(S.String),
        }),
      ).annotate({ identifier: "AWSDomainInformation" });
    case 2:
      return S.suspend(() =>
        S.Struct({ AWSDomainInformation: S.optional(__S(1, __c0, 1)) }),
      ).annotate({
        identifier: "DomainInformationContainer",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StatusCode: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "InboundConnectionStatus" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LocalDomainInfo: S.optional(__S(2, __c0, 2)),
          RemoteDomainInfo: S.optional(__S(2, __c0, 2)),
          ConnectionId: S.optional(S.String),
          ConnectionStatus: S.optional(__S(3, __c0, 3)),
          ConnectionMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "InboundConnection" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Connection: S.optional(__S(4, __c0, 4)) }).pipe(ns),
      ).annotate({
        identifier: "AcceptInboundConnectionResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ RoleArn: S.optional(S.String) })).annotate({
        identifier: "S3GlueDataCatalog",
      });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ S3GlueDataCatalog: __S(6, __c0, 6) })]);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Name: S.String,
          DataSourceType: __S(7, __c0, 7),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/dataSource",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AddDataSourceRequest" });
    case 1:
      return S.suspend(() => S.Struct({ Message: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "AddDataSourceResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ RoleArn: S.String })).annotate({
        identifier: "CloudWatchDirectQueryDataSource",
      });
    case 3:
      return S.suspend(() => S.Struct({ RoleArn: S.String, WorkspaceArn: S.String })).annotate({
        identifier: "PrometheusDirectQueryDataSource",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ CloudWatchLog: __S(10, __c1, 2) }),
        /*@__PURE__*/ S.Struct({ SecurityLake: __S(10, __c1, 2) }),
        /*@__PURE__*/ S.Struct({ Prometheus: __S(11, __c1, 3) }),
      ]);
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DataSourceName: S.String,
          DataSourceType: __S(12, __c1, 4),
          Description: S.optional(S.String),
          OpenSearchArns: S.optional(__S(13, __c1, 5)),
          DataSourceAccessPolicy: S.optional(S.String),
          TagList: S.optional(__S(15, __c1, 7)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/directQueryDataSource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AddDirectQueryDataSourceRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ DataSourceArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "AddDirectQueryDataSourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ARN: S.String, TagList: __S(15, __c1, 7) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/tags" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AddTagsRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "AddTagsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ KeyAccessRoleArn: S.optional(S.String), KeyStoreAccessEnabled: S.Boolean }),
      ).annotate({ identifier: "KeyStoreAccessOption" });
    case 5:
      return S.suspend(() =>
        S.Struct({ KeyStoreAccessOption: S.optional(__S(20, __c2, 4)) }),
      ).annotate({
        identifier: "PackageAssociationConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.String.pipe(T.HttpLabel("PackageID")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          PrerequisitePackageIDList: S.optional(__S(13, __c1, 5)),
          AssociationConfiguration: S.optional(__S(21, __c2, 5)),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/packages/associate/{PackageID}/{DomainName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociatePackageRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ErrorType: S.optional(S.String), ErrorMessage: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorDetails" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.optional(S.String),
          PackageName: S.optional(S.String),
          PackageType: S.optional(S.String),
          LastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          DomainName: S.optional(S.String),
          DomainPackageStatus: S.optional(S.String),
          PackageVersion: S.optional(S.String),
          PrerequisitePackageIDList: S.optional(__S(13, __c1, 5)),
          ReferencePath: S.optional(S.String),
          ErrorDetails: S.optional(__S(23, __c2, 7)),
          AssociationConfiguration: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({ identifier: "DomainPackageDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({ DomainPackageDetails: S.optional(__S(24, __c3, 0)) }).pipe(ns),
      ).annotate({ identifier: "AssociatePackageResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.String,
          PrerequisitePackageIDList: S.optional(__S(13, __c1, 5)),
          AssociationConfiguration: S.optional(__S(21, __c2, 5)),
        }),
      ).annotate({
        identifier: "PackageDetailsForAssociation",
      });
    case 3:
      return S.Array(__S(26, __c3, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ PackageList: __S(27, __c3, 3), DomainName: S.String }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/packages/associateMultiple" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociatePackagesRequest" });
    case 5:
      return S.Array(__S(24, __c3, 0));
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainPackageDetailsList: S.optional(__S(29, __c3, 5)) }).pipe(ns),
      ).annotate({
        identifier: "AssociatePackagesResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ name: S.String, workspaceType: S.String })).annotate({
        identifier: "WorkspaceConfigurationInput",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          dataSourceArn: S.String,
          workspaceId: S.optional(S.String),
          workspaceConfiguration: S.optional(__S(31, __c3, 7)),
          clientToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/application/{id}/attachDataSource",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AttachDataSourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          attachmentId: S.optional(S.String),
          id: S.optional(S.String),
          arn: S.optional(S.String),
          dataSourceArn: S.optional(S.String),
          status: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "AttachDataSourceResponse" });
    case 2:
      return S.suspend(() => S.Struct({ SupportedRegions: S.optional(__S(13, __c1, 5)) })).annotate(
        {
          identifier: "ServiceOptions",
        },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Account: S.optional(S.String),
          Service: S.optional(S.String),
          ServiceOptions: S.optional(__S(34, __c4, 2)),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/authorizeVpcEndpointAccess",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AuthorizeVpcEndpointAccessRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PrincipalType: S.optional(S.String),
          Principal: S.optional(S.String),
          ServiceOptions: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({ identifier: "AuthorizedPrincipal" });
    case 5:
      return S.suspend(() => S.Struct({ AuthorizedPrincipal: __S(36, __c4, 4) }).pipe(ns)).annotate(
        {
          identifier: "AuthorizeVpcEndpointAccessResponse",
        },
      );
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          DryRun: S.optional(S.Boolean),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/config/cancel",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelDomainConfigChangeRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PropertyName: S.optional(S.String),
          CancelledValue: S.optional(S.String),
          ActiveValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "CancelledChangeProperty" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39, __c4, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          CancelledChangeIds: S.optional(__S(13, __c1, 5)),
          CancelledChangeProperties: S.optional(__S(40, __c5, 0)),
          DryRun: S.optional(S.Boolean),
        }).pipe(ns),
      ).annotate({
        identifier: "CancelDomainConfigChangeResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/serviceSoftwareUpdate/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CancelServiceSoftwareUpdateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CurrentVersion: S.optional(S.String),
          NewVersion: S.optional(S.String),
          UpdateAvailable: S.optional(S.Boolean),
          Cancellable: S.optional(S.Boolean),
          UpdateStatus: S.optional(S.String),
          Description: S.optional(S.String),
          AutomatedUpdateDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          OptionalDeployment: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ServiceSoftwareOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ServiceSoftwareOptions: S.optional(__S(43, __c5, 3)) }).pipe(ns),
      ).annotate({
        identifier: "CancelServiceSoftwareUpdateResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          dataSourceArn: S.optional(S.String),
          dataSourceDescription: S.optional(S.String),
          iamRoleForDataSourceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataSource" });
    case 6:
      return S.Array(__S(45, __c5, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          iamIdentityCenterInstanceArn: S.optional(S.String),
          iamRoleForIdentityCenterApplicationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IamIdentityCenterOptionsInput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ key: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "AppConfig" });
    case 1:
      return S.Array(__S(48, __c6, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.String,
          dataSources: S.optional(__S(46, __c5, 6)),
          iamIdentityCenterOptions: S.optional(__S(47, __c5, 7)),
          appConfigs: S.optional(__S(49, __c6, 1)),
          tagList: S.optional(__S(15, __c1, 7)),
          kmsKeyArn: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/application" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          enabled: S.optional(S.Boolean),
          iamIdentityCenterInstanceArn: S.optional(S.String),
          iamRoleForIdentityCenterApplicationArn: S.optional(S.String),
          iamIdentityCenterApplicationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "IamIdentityCenterOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          dataSources: S.optional(__S(46, __c5, 6)),
          iamIdentityCenterOptions: S.optional(__S(51, __c6, 3)),
          appConfigs: S.optional(__S(49, __c6, 1)),
          tagList: S.optional(__S(15, __c1, 7)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          kmsKeyArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateApplicationResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ AvailabilityZoneCount: S.optional(S.Number) })).annotate({
        identifier: "ZoneAwarenessConfig",
      });
    case 6:
      return S.suspend(() => S.Struct({ Enabled: S.Boolean })).annotate({
        identifier: "ColdStorageOptions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          Type: S.optional(S.String),
          Count: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NodeConfig" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NodeType: S.optional(S.String), NodeConfig: S.optional(__S(55, __c6, 7)) }),
      ).annotate({ identifier: "NodeOption" });
    case 1:
      return S.Array(__S(56, __c7, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          InstanceType: S.optional(S.String),
          InstanceCount: S.optional(S.Number),
          DedicatedMasterEnabled: S.optional(S.Boolean),
          ZoneAwarenessEnabled: S.optional(S.Boolean),
          ZoneAwarenessConfig: S.optional(__S(53, __c6, 5)),
          DedicatedMasterType: S.optional(S.String),
          DedicatedMasterCount: S.optional(S.Number),
          WarmEnabled: S.optional(S.Boolean),
          WarmType: S.optional(S.String),
          WarmCount: S.optional(S.Number),
          ColdStorageOptions: S.optional(__S(54, __c6, 6)),
          MultiAZWithStandbyEnabled: S.optional(S.Boolean),
          NodeOptions: S.optional(__S(57, __c7, 1)),
        }),
      ).annotate({ identifier: "ClusterConfig" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EBSEnabled: S.optional(S.Boolean),
          VolumeType: S.optional(S.String),
          VolumeSize: S.optional(S.Number),
          Iops: S.optional(S.Number),
          Throughput: S.optional(S.Number),
        }),
      ).annotate({ identifier: "EBSOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({ AutomatedSnapshotStartHour: S.optional(S.Number) }),
      ).annotate({ identifier: "SnapshotOptions" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SubnetIds: S.optional(__S(13, __c1, 5)),
          SecurityGroupIds: S.optional(__S(13, __c1, 5)),
          EgressEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "VPCOptions" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          UserPoolId: S.optional(S.String),
          IdentityPoolId: S.optional(S.String),
          RoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "CognitoOptions" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), KmsKeyId: S.optional(S.String) }),
      ).annotate({ identifier: "EncryptionAtRestOptions" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "NodeToNodeEncryptionOptions",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsLogGroupArn: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "LogPublishingOption" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(66, __c8, 2).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          EnforceHTTPS: S.optional(S.Boolean),
          TLSSecurityPolicy: S.optional(S.String),
          CustomEndpointEnabled: S.optional(S.Boolean),
          CustomEndpoint: S.optional(S.String),
          CustomEndpointCertificateArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "DomainEndpointOptions" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MasterUserARN: S.optional(S.String),
          MasterUserName: S.optional(SensitiveString),
          MasterUserPassword: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "MasterUserOptions" });
    case 6:
      return S.suspend(() => S.Struct({ MetadataContent: S.String, EntityId: S.String })).annotate({
        identifier: "SAMLIdp",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          Idp: S.optional(__S(70, __c8, 6)),
          MasterUserName: S.optional(SensitiveString),
          MasterBackendRole: S.optional(S.String),
          SubjectKey: S.optional(S.String),
          RolesKey: S.optional(S.String),
          SessionTimeoutMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SAMLOptionsInput" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          SubjectKey: S.optional(S.String),
          RolesKey: S.optional(S.String),
          JwksUrl: S.optional(S.String),
          PublicKey: S.optional(S.String),
        }),
      ).annotate({ identifier: "JWTOptionsInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          SubjectKey: S.optional(S.String),
          RolesKey: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IAMFederationOptionsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          InternalUserDatabaseEnabled: S.optional(S.Boolean),
          MasterUserOptions: S.optional(__S(69, __c8, 5)),
          SAMLOptions: S.optional(__S(71, __c8, 7)),
          JWTOptions: S.optional(__S(72, __c9, 0)),
          IAMFederationOptions: S.optional(__S(73, __c9, 1)),
          AnonymousAuthEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AdvancedSecurityOptionsInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EnabledAPIAccess: S.optional(S.Boolean),
          IdentityCenterInstanceARN: S.optional(S.String),
          IdentityCenterInstanceRegion: S.optional(S.String),
          SubjectKey: S.optional(S.String),
          RolesKey: S.optional(S.String),
        }),
      ).annotate({
        identifier: "IdentityCenterOptionsInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.Number), Unit: S.optional(S.String) }),
      ).annotate({ identifier: "Duration" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StartAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Duration: S.optional(__S(76, __c9, 4)),
          CronExpressionForRecurrence: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutoTuneMaintenanceSchedule",
      });
    case 6:
      return S.Array(__S(77, __c9, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          DesiredState: S.optional(S.String),
          MaintenanceSchedules: S.optional(__S(78, __c9, 6)),
          UseOffPeakWindow: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AutoTuneOptionsInput" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Hours: S.Number, Minutes: S.Number })).annotate({
        identifier: "WindowStartTime",
      });
    case 1:
      return S.suspend(() => S.Struct({ WindowStartTime: S.optional(__S(80, __c10, 0)) })).annotate(
        {
          identifier: "OffPeakWindow",
        },
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), OffPeakWindow: S.optional(__S(81, __c10, 1)) }),
      ).annotate({ identifier: "OffPeakWindowOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AutoSoftwareUpdateEnabled: S.optional(S.Boolean),
          UseLatestServiceSoftwareForBlueGreen: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SoftwareUpdateOptions" });
    case 4:
      return S.suspend(() => S.Struct({ DesiredState: S.optional(S.String) })).annotate({
        identifier: "NaturalLanguageQueryGenerationOptionsInput",
      });
    case 5:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "S3VectorsEngine",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NaturalLanguageQueryGenerationOptions: S.optional(__S(84, __c10, 4)),
          S3VectorsEngine: S.optional(__S(85, __c10, 5)),
          ServerlessVectorAcceleration: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({ identifier: "AIMLOptionsInput" });
    case 7:
      return S.suspend(() => S.Struct({ DeploymentStrategy: S.String })).annotate({
        identifier: "DeploymentStrategyOptions",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.Boolean,
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "AutomatedSnapshotPauseRequestOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          EngineVersion: S.optional(S.String),
          ClusterConfig: S.optional(__S(58, __c7, 2)),
          EBSOptions: S.optional(__S(59, __c7, 3)),
          AccessPolicies: S.optional(S.String),
          IPAddressType: S.optional(S.String),
          SnapshotOptions: S.optional(__S(60, __c7, 4)),
          VPCOptions: S.optional(__S(61, __c7, 5)),
          CognitoOptions: S.optional(__S(62, __c7, 6)),
          EncryptionAtRestOptions: S.optional(__S(63, __c7, 7)),
          NodeToNodeEncryptionOptions: S.optional(__S(64, __c8, 0)),
          AdvancedOptions: S.optional(__S(65, __c8, 1)),
          LogPublishingOptions: S.optional(__S(67, __c8, 3)),
          DomainEndpointOptions: S.optional(__S(68, __c8, 4)),
          AdvancedSecurityOptions: S.optional(__S(74, __c9, 2)),
          IdentityCenterOptions: S.optional(__S(75, __c9, 3)),
          TagList: S.optional(__S(15, __c1, 7)),
          AutoTuneOptions: S.optional(__S(79, __c9, 7)),
          OffPeakWindowOptions: S.optional(__S(82, __c10, 2)),
          SoftwareUpdateOptions: S.optional(__S(83, __c10, 3)),
          AIMLOptions: S.optional(__S(86, __c10, 6)),
          DeploymentStrategyOptions: S.optional(__S(87, __c10, 7)),
          AutomatedSnapshotPauseOptions: S.optional(__S(88, __c11, 0)),
          UseCase: S.optional(S.String),
          EngineMode: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/domain" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDomainRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          VPCId: S.optional(S.String),
          SubnetIds: S.optional(__S(13, __c1, 5)),
          AvailabilityZones: S.optional(__S(13, __c1, 5)),
          SecurityGroupIds: S.optional(__S(13, __c1, 5)),
          EgressEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "VPCDerivedInfo" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          Idp: S.optional(__S(70, __c8, 6)),
          SubjectKey: S.optional(S.String),
          RolesKey: S.optional(S.String),
          SessionTimeoutMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SAMLOptionsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          InternalUserDatabaseEnabled: S.optional(S.Boolean),
          SAMLOptions: S.optional(__S(91, __c11, 3)),
          JWTOptions: S.optional(__S(72, __c9, 0)),
          IAMFederationOptions: S.optional(__S(73, __c9, 1)),
          AnonymousAuthDisableDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AnonymousAuthEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AdvancedSecurityOptions" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EnabledAPIAccess: S.optional(S.Boolean),
          IdentityCenterInstanceARN: S.optional(S.String),
          IdentityCenterInstanceRegion: S.optional(S.String),
          SubjectKey: S.optional(S.String),
          RolesKey: S.optional(S.String),
          IdentityCenterApplicationARN: S.optional(S.String),
          IdentityStoreId: S.optional(S.String),
        }),
      ).annotate({ identifier: "IdentityCenterOptions" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          State: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
          UseOffPeakWindow: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AutoTuneOptionsOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChangeId: S.optional(S.String),
          Message: S.optional(S.String),
          ConfigChangeStatus: S.optional(S.String),
          InitiatedBy: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ChangeProgressDetails" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ActiveValue: S.optional(S.String),
          PendingValue: S.optional(S.String),
          ValueType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ModifyingProperties" });
    case 1:
      return S.Array(__S(96, __c12, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          DesiredState: S.optional(S.String),
          CurrentState: S.optional(S.String),
        }),
      ).annotate({
        identifier: "NaturalLanguageQueryGenerationOptionsOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NaturalLanguageQueryGenerationOptions: S.optional(__S(98, __c12, 2)),
          S3VectorsEngine: S.optional(__S(85, __c10, 5)),
          ServerlessVectorAcceleration: S.optional(__S(64, __c8, 0)),
        }),
      ).annotate({ identifier: "AIMLOptionsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.Boolean,
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          State: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AutomatedSnapshotPauseOptions",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainId: S.String,
          DomainName: S.String,
          ARN: S.String,
          Created: S.optional(S.Boolean),
          Deleted: S.optional(S.Boolean),
          Endpoint: S.optional(S.String),
          EndpointV2: S.optional(S.String),
          Endpoints: S.optional(__S(65, __c8, 1)),
          DomainEndpointV2HostedZoneId: S.optional(S.String),
          Processing: S.optional(S.Boolean),
          UpgradeProcessing: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          ClusterConfig: __S(58, __c7, 2),
          EBSOptions: S.optional(__S(59, __c7, 3)),
          AccessPolicies: S.optional(S.String),
          IPAddressType: S.optional(S.String),
          SnapshotOptions: S.optional(__S(60, __c7, 4)),
          VPCOptions: S.optional(__S(90, __c11, 2)),
          CognitoOptions: S.optional(__S(62, __c7, 6)),
          EncryptionAtRestOptions: S.optional(__S(63, __c7, 7)),
          NodeToNodeEncryptionOptions: S.optional(__S(64, __c8, 0)),
          AdvancedOptions: S.optional(__S(65, __c8, 1)),
          LogPublishingOptions: S.optional(__S(67, __c8, 3)),
          ServiceSoftwareOptions: S.optional(__S(43, __c5, 3)),
          DomainEndpointOptions: S.optional(__S(68, __c8, 4)),
          AdvancedSecurityOptions: S.optional(__S(92, __c11, 4)),
          IdentityCenterOptions: S.optional(__S(93, __c11, 5)),
          AutoTuneOptions: S.optional(__S(94, __c11, 6)),
          ChangeProgressDetails: S.optional(__S(95, __c11, 7)),
          OffPeakWindowOptions: S.optional(__S(82, __c10, 2)),
          SoftwareUpdateOptions: S.optional(__S(83, __c10, 3)),
          DomainProcessingStatus: S.optional(S.String),
          ModifyingProperties: S.optional(__S(97, __c12, 1)),
          AIMLOptions: S.optional(__S(99, __c12, 3)),
          DeploymentStrategyOptions: S.optional(__S(87, __c10, 7)),
          AutomatedSnapshotPauseOptions: S.optional(__S(100, __c12, 4)),
          UseCase: S.optional(S.String),
          EngineMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "DomainStatus" });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainStatus: S.optional(__S(101, __c12, 5)) }).pipe(ns),
      ).annotate({ identifier: "CreateDomainResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          IndexName: S.String,
          IndexSchema: S.Any,
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/domain/{DomainName}/index" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateIndexRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Status: S.String }).pipe(ns)).annotate({
        identifier: "CreateIndexResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ SkipUnavailable: S.optional(S.String) })).annotate({
        identifier: "CrossClusterSearchConnectionProperties",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Endpoint: S.optional(S.String),
          CrossClusterSearch: S.optional(__S(105, __c13, 1)),
        }),
      ).annotate({ identifier: "ConnectionProperties" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LocalDomainInfo: __S(2, __c0, 2),
          RemoteDomainInfo: __S(2, __c0, 2),
          ConnectionAlias: S.String,
          ConnectionMode: S.optional(S.String),
          ConnectionProperties: S.optional(__S(106, __c13, 2)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/cc/outboundConnection" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateOutboundConnectionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LocalDomainInfo: S.optional(__S(2, __c0, 2)),
          RemoteDomainInfo: S.optional(__S(2, __c0, 2)),
          ConnectionAlias: S.optional(S.String),
          ConnectionStatus: S.optional(__S(3, __c0, 3)),
          ConnectionId: S.optional(S.String),
          ConnectionMode: S.optional(S.String),
          ConnectionProperties: S.optional(__S(106, __c13, 2)),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateOutboundConnectionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ S3BucketName: S.optional(S.String), S3Key: S.optional(S.String) }),
      ).annotate({ identifier: "PackageSource" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LicenseRequirement: S.String,
          LicenseFilepath: S.optional(S.String),
          ConfigurationRequirement: S.String,
          RequiresRestartForConfigurationUpdate: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PackageConfiguration" });
    case 7:
      return S.suspend(() => S.Struct({ VendingEnabled: S.Boolean })).annotate({
        identifier: "PackageVendingOptions",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ KmsKeyIdentifier: S.optional(S.String), EncryptionEnabled: S.Boolean }),
      ).annotate({ identifier: "PackageEncryptionOptions" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PackageName: S.String,
          PackageType: S.String,
          PackageDescription: S.optional(S.String),
          PackageSource: __S(109, __c13, 5),
          PackageConfiguration: S.optional(__S(110, __c13, 6)),
          EngineVersion: S.optional(S.String),
          PackageVendingOptions: S.optional(__S(111, __c13, 7)),
          PackageEncryptionOptions: S.optional(__S(112, __c14, 0)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/packages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreatePackageRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Version: S.optional(S.String),
          ClassName: S.optional(S.String),
          UncompressedSizeInBytes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "PluginProperties" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.optional(S.String),
          PackageName: S.optional(S.String),
          PackageType: S.optional(S.String),
          PackageDescription: S.optional(S.String),
          PackageStatus: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AvailablePackageVersion: S.optional(S.String),
          ErrorDetails: S.optional(__S(23, __c2, 7)),
          EngineVersion: S.optional(S.String),
          AvailablePluginProperties: S.optional(__S(114, __c14, 2)),
          AvailablePackageConfiguration: S.optional(__S(110, __c13, 6)),
          AllowListedUserList: S.optional(__S(13, __c1, 5)),
          PackageOwner: S.optional(S.String),
          PackageVendingOptions: S.optional(__S(111, __c13, 7)),
          PackageEncryptionOptions: S.optional(__S(112, __c14, 0)),
        }),
      ).annotate({ identifier: "PackageDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ PackageDetails: S.optional(__S(115, __c14, 3)) }).pipe(ns),
      ).annotate({ identifier: "CreatePackageResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainArn: S.String,
          VpcOptions: __S(61, __c7, 5),
          ClientToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/vpcEndpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateVpcEndpointRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          VpcEndpointId: S.optional(S.String),
          VpcEndpointOwner: S.optional(S.String),
          DomainArn: S.optional(S.String),
          VpcOptions: S.optional(__S(90, __c11, 2)),
          Status: S.optional(S.String),
          Endpoint: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcEndpoint" });
    case 7:
      return S.suspend(() => S.Struct({ VpcEndpoint: __S(118, __c14, 6) }).pipe(ns)).annotate({
        identifier: "CreateVpcEndpointResponse",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/2021-01-01/opensearch/application/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteApplicationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDataSourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DataSourceName: S.String.pipe(T.HttpLabel("DataSourceName")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/2021-01-01/opensearch/directQueryDataSource/{DataSourceName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDirectQueryDataSourceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/2021-01-01/opensearch/domain/{DomainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDomainRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ConnectionId: S.String.pipe(T.HttpLabel("ConnectionId")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteInboundConnectionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          IndexName: S.String.pipe(T.HttpLabel("IndexName")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/index/{IndexName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteIndexRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ConnectionId: S.String.pipe(T.HttpLabel("ConnectionId")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/2021-01-01/opensearch/cc/outboundConnection/{ConnectionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteOutboundConnectionRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LocalDomainInfo: S.optional(__S(2, __c0, 2)),
          RemoteDomainInfo: S.optional(__S(2, __c0, 2)),
          ConnectionId: S.optional(S.String),
          ConnectionAlias: S.optional(S.String),
          ConnectionStatus: S.optional(__S(3, __c0, 3)),
          ConnectionMode: S.optional(S.String),
          ConnectionProperties: S.optional(__S(106, __c13, 2)),
        }),
      ).annotate({ identifier: "OutboundConnection" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Connection: S.optional(__S(128, __c16, 0)) }).pipe(ns),
      ).annotate({
        identifier: "DeleteOutboundConnectionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ PackageID: S.String.pipe(T.HttpLabel("PackageID")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "DELETE", uri: "/2021-01-01/packages/{PackageID}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePackageRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ VpcEndpointId: S.String.pipe(T.HttpLabel("VpcEndpointId")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/2021-01-01/opensearch/vpcEndpoints/{VpcEndpointId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteVpcEndpointRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          VpcEndpointId: S.optional(S.String),
          VpcEndpointOwner: S.optional(S.String),
          DomainArn: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcEndpointSummary" });
    case 5:
      return S.suspend(() =>
        S.Struct({ VpcEndpointSummary: __S(132, __c16, 4) }).pipe(ns),
      ).annotate({
        identifier: "DeleteVpcEndpointResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          capabilityName: S.String.pipe(T.HttpLabel("capabilityName")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "DELETE",
              uri: "/2021-01-01/opensearch/application/{applicationId}/capability/deregister/{capabilityName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeregisterCapabilityRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "DeregisterCapabilityResponse",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")), dataSourceArn: S.String }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/application/{id}/describeDataSourceAttachment",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDataSourceAttachmentRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          attachmentId: S.optional(S.String),
          id: S.optional(S.String),
          arn: S.optional(S.String),
          dataSourceArn: S.optional(S.String),
          status: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDataSourceAttachmentResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/domain/{DomainName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeDomainRequest" });
    case 3:
      return S.suspend(() => S.Struct({ DomainStatus: __S(101, __c12, 5) }).pipe(ns)).annotate({
        identifier: "DescribeDomainResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/domain/{DomainName}/autoTunes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDomainAutoTunesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Date: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ActionType: S.optional(S.String),
          Action: S.optional(S.String),
          Severity: S.optional(S.String),
        }),
      ).annotate({ identifier: "ScheduledAutoTuneDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ScheduledAutoTuneDetails: S.optional(__S(141, __c17, 5)) }),
      ).annotate({ identifier: "AutoTuneDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AutoTuneType: S.optional(S.String),
          AutoTuneDetails: S.optional(__S(142, __c17, 6)),
        }),
      ).annotate({ identifier: "AutoTune" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143, __c17, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AutoTunes: S.optional(__S(144, __c18, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDomainAutoTunesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ChangeId: S.optional(S.String).pipe(T.HttpQuery("changeid")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/domain/{DomainName}/progress" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDomainChangeProgressRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          Description: S.optional(S.String),
          LastUpdated: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ChangeProgressStage" });
    case 4:
      return S.Array(__S(147, __c18, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Code: S.optional(S.String),
          Message: S.optional(S.String),
          Severity: S.optional(S.String),
        }),
      ).annotate({ identifier: "ValidationFailure" });
    case 6:
      return S.Array(__S(149, __c18, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          ChangeId: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(S.String),
          PendingProperties: S.optional(__S(13, __c1, 5)),
          CompletedProperties: S.optional(__S(13, __c1, 5)),
          TotalNumberOfStages: S.optional(S.Number),
          ChangeProgressStages: S.optional(__S(148, __c18, 4)),
          LastUpdatedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ConfigChangeStatus: S.optional(S.String),
          InitiatedBy: S.optional(S.String),
          ValidationFailures: S.optional(__S(150, __c18, 6)),
          AcceptedWarnings: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({
        identifier: "ChangeProgressStatusDetails",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ChangeProgressStatus: S.optional(__S(151, __c18, 7)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDomainChangeProgressResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/domain/{DomainName}/config" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDomainConfigRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          UpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          UpdateVersion: S.optional(S.Number),
          State: S.String,
          PendingDeletion: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "OptionStatus" });
    case 3:
      return S.suspend(() => S.Struct({ Options: S.String, Status: __S(154, __c19, 2) })).annotate({
        identifier: "VersionStatus",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Options: __S(58, __c7, 2), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "ClusterConfigStatus",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Options: __S(59, __c7, 3), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "EBSOptionsStatus",
      });
    case 6:
      return S.suspend(() => S.Struct({ Options: S.String, Status: __S(154, __c19, 2) })).annotate({
        identifier: "IPAddressTypeStatus",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Options: __S(60, __c7, 4), Status: __S(154, __c19, 2) }),
      ).annotate({ identifier: "SnapshotOptionsStatus" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Options: __S(90, __c11, 2), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "VPCDerivedInfoStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Options: __S(62, __c7, 6), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "CognitoOptionsStatus",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Options: __S(63, __c7, 7), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "EncryptionAtRestOptionsStatus",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Options: __S(64, __c8, 0), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "NodeToNodeEncryptionOptionsStatus",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Options: __S(65, __c8, 1), Status: __S(154, __c19, 2) }),
      ).annotate({ identifier: "AdvancedOptionsStatus" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Options: S.optional(__S(67, __c8, 3)), Status: S.optional(__S(154, __c19, 2)) }),
      ).annotate({
        identifier: "LogPublishingOptionsStatus",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Options: __S(68, __c8, 4), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "DomainEndpointOptionsStatus",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Options: __S(92, __c11, 4), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "AdvancedSecurityOptionsStatus",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Options: __S(93, __c11, 5), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "IdentityCenterOptionsStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DesiredState: S.optional(S.String),
          RollbackOnDisable: S.optional(S.String),
          MaintenanceSchedules: S.optional(__S(78, __c9, 6)),
          UseOffPeakWindow: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AutoTuneOptions" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CreationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          UpdateDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          UpdateVersion: S.optional(S.Number),
          State: S.String,
          ErrorMessage: S.optional(S.String),
          PendingDeletion: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AutoTuneStatus" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Options: S.optional(__S(169, __c21, 1)),
          Status: S.optional(__S(170, __c21, 2)),
        }),
      ).annotate({ identifier: "AutoTuneOptionsStatus" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Options: S.optional(__S(82, __c10, 2)),
          Status: S.optional(__S(154, __c19, 2)),
        }),
      ).annotate({
        identifier: "OffPeakWindowOptionsStatus",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Options: S.optional(__S(83, __c10, 3)),
          Status: S.optional(__S(154, __c19, 2)),
        }),
      ).annotate({
        identifier: "SoftwareUpdateOptionsStatus",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Options: S.optional(__S(99, __c12, 3)),
          Status: S.optional(__S(154, __c19, 2)),
        }),
      ).annotate({ identifier: "AIMLOptionsStatus" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Options: __S(87, __c10, 7), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "DeploymentStrategyOptionsStatus",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Options: __S(100, __c12, 4), Status: __S(154, __c19, 2) }),
      ).annotate({
        identifier: "AutomatedSnapshotPauseOptionsStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EngineVersion: S.optional(__S(155, __c19, 3)),
          ClusterConfig: S.optional(__S(156, __c19, 4)),
          EBSOptions: S.optional(__S(157, __c19, 5)),
          AccessPolicies: S.optional(__S(155, __c19, 3)),
          IPAddressType: S.optional(__S(158, __c19, 6)),
          SnapshotOptions: S.optional(__S(159, __c19, 7)),
          VPCOptions: S.optional(__S(160, __c20, 0)),
          CognitoOptions: S.optional(__S(161, __c20, 1)),
          EncryptionAtRestOptions: S.optional(__S(162, __c20, 2)),
          NodeToNodeEncryptionOptions: S.optional(__S(163, __c20, 3)),
          AdvancedOptions: S.optional(__S(164, __c20, 4)),
          LogPublishingOptions: S.optional(__S(165, __c20, 5)),
          DomainEndpointOptions: S.optional(__S(166, __c20, 6)),
          AdvancedSecurityOptions: S.optional(__S(167, __c20, 7)),
          IdentityCenterOptions: S.optional(__S(168, __c21, 0)),
          AutoTuneOptions: S.optional(__S(171, __c21, 3)),
          ChangeProgressDetails: S.optional(__S(95, __c11, 7)),
          OffPeakWindowOptions: S.optional(__S(172, __c21, 4)),
          SoftwareUpdateOptions: S.optional(__S(173, __c21, 5)),
          ModifyingProperties: S.optional(__S(97, __c12, 1)),
          AIMLOptions: S.optional(__S(174, __c21, 6)),
          DeploymentStrategyOptions: S.optional(__S(175, __c21, 7)),
          AutomatedSnapshotPauseOptions: S.optional(__S(176, __c22, 0)),
          UseCase: S.optional(__S(158, __c19, 6)),
          EngineMode: S.optional(__S(158, __c19, 6)),
        }),
      ).annotate({ identifier: "DomainConfig" });
    case 2:
      return S.suspend(() => S.Struct({ DomainConfig: __S(177, __c22, 1) }).pipe(ns)).annotate({
        identifier: "DescribeDomainConfigResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/domain/{DomainName}/health" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDomainHealthRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZoneName: S.optional(S.String),
          ZoneStatus: S.optional(S.String),
          ConfiguredDataNodeCount: S.optional(S.String),
          AvailableDataNodeCount: S.optional(S.String),
          TotalShards: S.optional(S.String),
          TotalUnAssignedShards: S.optional(S.String),
        }),
      ).annotate({ identifier: "AvailabilityZoneInfo" });
    case 5:
      return S.Array(__S(180, __c22, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ AvailabilityZoneInformation: S.optional(__S(181, __c22, 5)) }),
      ).annotate({ identifier: "EnvironmentInfo" });
    case 7:
      return S.Array(__S(182, __c22, 6));
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainState: S.optional(S.String),
          AvailabilityZoneCount: S.optional(S.String),
          ActiveAvailabilityZoneCount: S.optional(S.String),
          StandByAvailabilityZoneCount: S.optional(S.String),
          DataNodeCount: S.optional(S.String),
          DedicatedMaster: S.optional(S.Boolean),
          MasterEligibleNodeCount: S.optional(S.String),
          WarmNodeCount: S.optional(S.String),
          MasterNode: S.optional(S.String),
          ClusterHealth: S.optional(S.String),
          TotalShards: S.optional(S.String),
          TotalUnAssignedShards: S.optional(S.String),
          EnvironmentInformation: S.optional(__S(183, __c22, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDomainHealthResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/domain/{DomainName}/nodes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDomainNodesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NodeId: S.optional(S.String),
          NodeType: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          InstanceType: S.optional(S.String),
          NodeStatus: S.optional(S.String),
          StorageType: S.optional(S.String),
          StorageVolumeType: S.optional(S.String),
          StorageSize: S.optional(S.String),
        }),
      ).annotate({ identifier: "DomainNodesStatus" });
    case 3:
      return S.Array(__S(186, __c23, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainNodesStatusList: S.optional(__S(187, __c23, 3)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeDomainNodesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DomainNames: __S(13, __c1, 5) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/domain-info" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeDomainsRequest" });
    case 6:
      return S.Array(__S(101, __c12, 5));
    case 7:
      return S.suspend(() => S.Struct({ DomainStatusList: __S(190, __c23, 6) }).pipe(ns)).annotate({
        identifier: "DescribeDomainsResponse",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          DryRunId: S.optional(S.String).pipe(T.HttpQuery("dryRunId")),
          LoadDryRunConfig: S.optional(S.Boolean).pipe(T.HttpQuery("loadDryRunConfig")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/domain/{DomainName}/dryRun" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDryRunProgressRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DryRunId: S.String,
          DryRunStatus: S.String,
          CreationDate: S.String,
          UpdateDate: S.String,
          ValidationFailures: S.optional(__S(150, __c18, 6)),
          AcceptedWarnings: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "DryRunProgressStatus" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DeploymentType: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "DryRunResults" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DryRunProgressStatus: S.optional(__S(193, __c24, 1)),
          DryRunConfig: S.optional(__S(101, __c12, 5)),
          DryRunResults: S.optional(__S(194, __c24, 2)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeDryRunProgressResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(__S(13, __c1, 5)) }),
      ).annotate({ identifier: "Filter" });
    case 5:
      return S.Array(__S(196, __c24, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(197, __c24, 5)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/cc/inboundConnection/search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeInboundConnectionsRequest",
      });
    case 7:
      return S.Array(__S(4, __c0, 4));
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Connections: S.optional(__S(199, __c24, 7)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeInboundConnectionsResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ Type: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "InsightEntity",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Entity: __S(201, __c25, 1),
          InsightId: S.String,
          ShowHtmlContent: S.optional(S.Boolean),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/insight-details" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeInsightDetailsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Type: S.String, Value: S.String }),
      ).annotate({ identifier: "InsightField" });
    case 4:
      return S.Array(__S(203, __c25, 3));
    case 5:
      return S.suspend(() => S.Struct({ Fields: __S(204, __c25, 4) }).pipe(ns)).annotate({
        identifier: "DescribeInsightDetailsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String).pipe(T.HttpQuery("domainName")),
          InstanceType: S.String.pipe(T.HttpLabel("InstanceType")),
          EngineVersion: S.String.pipe(T.HttpLabel("EngineVersion")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/instanceTypeLimits/{EngineVersion}/{InstanceType}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeInstanceTypeLimitsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ LimitName: S.optional(S.String), LimitValues: S.optional(__S(13, __c1, 5)) }),
      ).annotate({ identifier: "StorageTypeLimit" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(207, __c25, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          StorageTypeName: S.optional(S.String),
          StorageSubTypeName: S.optional(S.String),
          StorageTypeLimits: S.optional(__S(208, __c26, 0)),
        }),
      ).annotate({ identifier: "StorageType" });
    case 2:
      return S.Array(__S(209, __c26, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          MinimumInstanceCount: S.optional(S.Number),
          MaximumInstanceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InstanceCountLimits" });
    case 4:
      return S.suspend(() =>
        S.Struct({ InstanceCountLimits: S.optional(__S(211, __c26, 3)) }),
      ).annotate({ identifier: "InstanceLimits" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StorageTypes: S.optional(__S(210, __c26, 2)),
          InstanceLimits: S.optional(__S(212, __c26, 4)),
          AdditionalLimits: S.optional(__S(208, __c26, 0)),
        }),
      ).annotate({ identifier: "Limits" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(213, __c26, 5).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({ LimitsByRole: S.optional(__S(214, __c26, 6)) }).pipe(ns),
      ).annotate({
        identifier: "DescribeInstanceTypeLimitsResponse",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(197, __c24, 5)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/cc/outboundConnection/search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeOutboundConnectionsRequest",
      });
    case 1:
      return S.Array(__S(128, __c16, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          Connections: S.optional(__S(217, __c27, 1)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeOutboundConnectionsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Value: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "DescribePackagesFilter" });
    case 4:
      return S.Array(__S(219, __c27, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(220, __c27, 4)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/packages/describe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribePackagesRequest" });
    case 6:
      return S.Array(__S(115, __c14, 3));
    case 7:
      return S.suspend(() =>
        S.Struct({
          PackageDetailsList: S.optional(__S(222, __c27, 6)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DescribePackagesResponse" });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ReservedInstanceOfferingId: S.optional(S.String).pipe(T.HttpQuery("offeringId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/reservedInstanceOfferings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeReservedInstanceOfferingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RecurringChargeAmount: S.optional(S.Number),
          RecurringChargeFrequency: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecurringCharge" });
    case 2:
      return S.Array(
        /*@__PURE__*/ __S(225, __c28, 1).pipe(/*@__PURE__*/ T.XmlName("RecurringCharge")).annotate({
          identifier: "RecurringCharge",
        }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          ReservedInstanceOfferingId: S.optional(S.String),
          InstanceType: S.optional(S.String),
          Duration: S.optional(S.Number),
          FixedPrice: S.optional(S.Number),
          UsagePrice: S.optional(S.Number),
          CurrencyCode: S.optional(S.String),
          PaymentOption: S.optional(S.String),
          RecurringCharges: S.optional(__S(226, __c28, 2)),
        }),
      ).annotate({ identifier: "ReservedInstanceOffering" });
    case 4:
      return S.Array(
        /*@__PURE__*/ __S(227, __c28, 3)
          .pipe(/*@__PURE__*/ T.XmlName("ReservedInstanceOffering"))
          .annotate({
            identifier: "ReservedInstanceOffering",
          }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ReservedInstanceOfferings: S.optional(__S(228, __c28, 4)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReservedInstanceOfferingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ReservedInstanceId: S.optional(S.String).pipe(T.HttpQuery("reservationId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/reservedInstances" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeReservedInstancesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReservationName: S.optional(S.String),
          ReservedInstanceId: S.optional(S.String),
          BillingSubscriptionId: S.optional(S.Number),
          ReservedInstanceOfferingId: S.optional(S.String),
          InstanceType: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Duration: S.optional(S.Number),
          FixedPrice: S.optional(S.Number),
          UsagePrice: S.optional(S.Number),
          CurrencyCode: S.optional(S.String),
          InstanceCount: S.optional(S.Number),
          State: S.optional(S.String),
          PaymentOption: S.optional(S.String),
          RecurringCharges: S.optional(__S(226, __c28, 2)),
        }),
      ).annotate({ identifier: "ReservedInstance" });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(231, __c28, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          ReservedInstances: S.optional(__S(232, __c29, 0)),
        }).pipe(ns),
      ).annotate({
        identifier: "DescribeReservedInstancesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ VpcEndpointIds: __S(13, __c1, 5) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/vpcEndpoints/describe" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeVpcEndpointsRequest",
      });
    case 3:
      return S.Array(__S(118, __c14, 6));
    case 4:
      return S.suspend(() =>
        S.Struct({
          VpcEndpointId: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "VpcEndpointError" });
    case 5:
      return S.Array(__S(236, __c29, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ VpcEndpoints: __S(235, __c29, 3), VpcEndpointErrors: __S(237, __c29, 5) }).pipe(
          ns,
        ),
      ).annotate({
        identifier: "DescribeVpcEndpointsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")), dataSourceArn: S.String }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/application/{id}/detachDataSource",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DetachDataSourceRequest" });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          dataSourceArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DetachDataSourceResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.String.pipe(T.HttpLabel("PackageID")),
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/packages/dissociate/{PackageID}/{DomainName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DissociatePackageRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DomainPackageDetails: S.optional(__S(24, __c3, 0)) }).pipe(ns),
      ).annotate({
        identifier: "DissociatePackageResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ PackageList: __S(13, __c1, 5), DomainName: S.String }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/packages/dissociateMultiple" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DissociatePackagesRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/application/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetApplicationRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          endpoint: S.optional(S.String),
          status: S.optional(S.String),
          iamIdentityCenterOptions: S.optional(__S(51, __c6, 3)),
          dataSources: S.optional(__S(46, __c5, 6)),
          appConfigs: S.optional(__S(49, __c6, 1)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          kmsKeyArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetApplicationResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          capabilityName: S.String.pipe(T.HttpLabel("capabilityName")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/application/{applicationId}/capability/{capabilityName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCapabilityRequest" });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AIConfig",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ aiConfig: __S(247, __c30, 7) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({ reason: S.optional(S.String), details: S.optional(S.String) }),
      ).annotate({ identifier: "CapabilityFailure" });
    case 2:
      return S.Array(__S(249, __c31, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          capabilityName: S.optional(S.String),
          applicationId: S.optional(S.String),
          status: S.optional(S.String),
          capabilityConfig: S.optional(__S(248, __c31, 0)),
          failures: S.optional(__S(250, __c31, 2)),
        }).pipe(ns),
      ).annotate({ identifier: "GetCapabilityResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainName: S.optional(S.String).pipe(T.HttpQuery("domainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/compatibleVersions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCompatibleVersionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SourceVersion: S.optional(S.String),
          TargetVersions: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "CompatibleVersionsMap" });
    case 6:
      return S.Array(__S(253, __c31, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ CompatibleVersions: S.optional(__S(254, __c31, 6)) }).pipe(ns),
      ).annotate({
        identifier: "GetCompatibleVersionsResponse",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Name: S.String.pipe(T.HttpLabel("Name")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDataSourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DataSourceType: S.optional(__S(7, __c0, 7)),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetDataSourceResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/defaultApplicationSetting" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDefaultApplicationSettingRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ applicationArn: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "GetDefaultApplicationSettingResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DataSourceName: S.String.pipe(T.HttpLabel("DataSourceName")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/directQueryDataSource/{DataSourceName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDirectQueryDataSourceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DataSourceName: S.optional(S.String),
          DataSourceType: S.optional(__S(12, __c1, 4)),
          Description: S.optional(S.String),
          OpenSearchArns: S.optional(__S(13, __c1, 5)),
          DataSourceAccessPolicy: S.optional(S.String),
          DataSourceArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDirectQueryDataSourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaintenanceId: S.String.pipe(T.HttpQuery("maintenanceId")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/domainMaintenance",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDomainMaintenanceStatusRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          NodeId: S.optional(S.String),
          Action: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDomainMaintenanceStatusResponse",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          IndexName: S.String.pipe(T.HttpLabel("IndexName")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/index/{IndexName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetIndexRequest" });
    case 1:
      return S.suspend(() => S.Struct({ IndexSchema: S.Any }).pipe(ns)).annotate({
        identifier: "GetIndexResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ migrationId: S.String.pipe(T.HttpLabel("migrationId")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/app-migrations/{migrationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMigrationRequest" });
    case 3:
      return S.suspend(() => S.Struct({ datasourceArn: S.String })).annotate({
        identifier: "MigrationSource",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
      ).annotate({ identifier: "MigrationError" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          migrationId: S.optional(S.String),
          status: S.optional(S.String),
          applicationId: S.optional(S.String),
          source: S.optional(__S(267, __c33, 3)),
          exportedCount: S.optional(S.Number),
          importedCount: S.optional(S.Number),
          error: S.optional(__S(268, __c33, 4)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "GetMigrationResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.String.pipe(T.HttpLabel("PackageID")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/packages/{PackageID}/history" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPackageVersionHistoryRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          PackageVersion: S.optional(S.String),
          CommitMessage: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          PluginProperties: S.optional(__S(114, __c14, 2)),
          PackageConfiguration: S.optional(__S(110, __c13, 6)),
        }),
      ).annotate({ identifier: "PackageVersionHistory" });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(271, __c33, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.optional(S.String),
          PackageVersionHistoryList: S.optional(__S(272, __c34, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetPackageVersionHistoryResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/upgradeDomain/{DomainName}/history",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetUpgradeHistoryRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UpgradeStep: S.optional(S.String),
          UpgradeStepStatus: S.optional(S.String),
          Issues: S.optional(__S(13, __c1, 5)),
          ProgressPercent: S.optional(S.Number),
        }),
      ).annotate({ identifier: "UpgradeStepItem" });
    case 4:
      return S.Array(__S(275, __c34, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          UpgradeName: S.optional(S.String),
          StartTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpgradeStatus: S.optional(S.String),
          StepsList: S.optional(__S(276, __c34, 4)),
        }),
      ).annotate({ identifier: "UpgradeHistory" });
    case 6:
      return S.Array(__S(277, __c34, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          UpgradeHistories: S.optional(__S(278, __c34, 6)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "GetUpgradeHistoryResponse",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/upgradeDomain/{DomainName}/status",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetUpgradeStatusRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UpgradeStep: S.optional(S.String),
          StepStatus: S.optional(S.String),
          UpgradeName: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetUpgradeStatusResponse" });
    case 2:
      return S.suspend(() => S.Struct({ Type: S.String, Value: S.String })).annotate({
        identifier: "InsightFeedbackEntity",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Entity: __S(282, __c35, 2),
          InsightId: S.String,
          Thumbs: S.String,
          FeedbackText: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/insight-feedback" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "InsightFeedbackRequest" });
    case 4:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "InsightFeedbackResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          statuses: S.optional(__S(285, __c35, 5)).pipe(T.HttpQuery("statuses")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/list-applications" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          name: S.optional(S.String),
          endpoint: S.optional(S.String),
          status: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ApplicationSummary" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(287, __c35, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationSummaries: S.optional(__S(288, __c36, 0)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListApplicationsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/application/{id}/listDataSourceAttachments",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataSourceAttachmentsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          attachmentId: S.optional(S.String),
          dataSourceArn: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DataSourceAttachmentSummary",
      });
    case 4:
      return S.Array(__S(291, __c36, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          attachments: S.optional(__S(292, __c36, 4)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListDataSourceAttachmentsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String.pipe(T.HttpLabel("DomainName")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/domain/{DomainName}/dataSource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDataSourcesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DataSourceType: S.optional(__S(7, __c0, 7)),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "DataSourceDetails" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(295, __c36, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ DataSources: S.optional(__S(296, __c37, 0)) }).pipe(ns),
      ).annotate({ identifier: "ListDataSourcesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String).pipe(T.HttpQuery("nexttoken")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/directQueryDataSource" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDirectQueryDataSourcesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DataSourceName: S.optional(S.String),
          DataSourceType: S.optional(__S(12, __c1, 4)),
          Description: S.optional(S.String),
          OpenSearchArns: S.optional(__S(13, __c1, 5)),
          DataSourceArn: S.optional(S.String),
          TagList: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({ identifier: "DirectQueryDataSource" });
    case 4:
      return S.Array(__S(299, __c37, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          DirectQueryDataSources: S.optional(__S(300, __c37, 4)),
        }).pipe(ns),
      ).annotate({
        identifier: "ListDirectQueryDataSourcesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Action: S.optional(S.String).pipe(T.HttpQuery("action")),
          Status: S.optional(S.String).pipe(T.HttpQuery("status")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/domainMaintenances",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDomainMaintenancesRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaintenanceId: S.optional(S.String),
          DomainName: S.optional(S.String),
          Action: S.optional(S.String),
          NodeId: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DomainMaintenanceDetails" });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(303, __c37, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainMaintenances: S.optional(__S(304, __c38, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListDomainMaintenancesResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ EngineType: S.optional(S.String).pipe(T.HttpQuery("engineType")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/domain" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDomainNamesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainName: S.optional(S.String), EngineType: S.optional(S.String) }),
      ).annotate({ identifier: "DomainInfo" });
    case 4:
      return S.Array(__S(307, __c38, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ DomainNames: S.optional(__S(308, __c38, 4)) }).pipe(ns),
      ).annotate({ identifier: "ListDomainNamesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.String.pipe(T.HttpLabel("PackageID")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/packages/{PackageID}/domains" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDomainsForPackageRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainPackageDetailsList: S.optional(__S(29, __c3, 5)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListDomainsForPackageResponse",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ From: S.Number, To: S.Number })).annotate({
        identifier: "InsightTimeRange",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Entity: __S(201, __c25, 1),
          TimeRange: S.optional(__S(312, __c39, 0)),
          SortOrder: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/insights" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListInsightsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InsightId: S.optional(S.String),
          DisplayName: S.optional(S.String),
          Type: S.optional(S.String),
          Priority: S.optional(S.String),
          Status: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IsExperimental: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Insight" });
    case 3:
      return S.Array(__S(314, __c39, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Insights: S.optional(__S(315, __c39, 3)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListInsightsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          EngineVersion: S.String.pipe(T.HttpLabel("EngineVersion")),
          DomainName: S.optional(S.String).pipe(T.HttpQuery("domainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          RetrieveAZs: S.optional(S.Boolean).pipe(T.HttpQuery("retrieveAZs")),
          InstanceType: S.optional(S.String).pipe(T.HttpQuery("instanceType")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/instanceTypeDetails/{EngineVersion}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListInstanceTypeDetailsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InstanceType: S.optional(S.String),
          EncryptionEnabled: S.optional(S.Boolean),
          CognitoEnabled: S.optional(S.Boolean),
          AppLogsEnabled: S.optional(S.Boolean),
          AdvancedSecurityEnabled: S.optional(S.Boolean),
          WarmEnabled: S.optional(S.Boolean),
          InstanceRole: S.optional(__S(13, __c1, 5)),
          AvailabilityZones: S.optional(__S(13, __c1, 5)),
        }),
      ).annotate({ identifier: "InstanceTypeDetails" });
    case 7:
      return S.Array(__S(318, __c39, 6));
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InstanceTypeDetails: S.optional(__S(319, __c39, 7)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListInstanceTypeDetailsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpQuery("applicationId")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/app-migrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListMigrationsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          migrationId: S.optional(S.String),
          status: S.optional(S.String),
          applicationId: S.optional(S.String),
          source: S.optional(__S(267, __c33, 3)),
          exportedCount: S.optional(S.Number),
          importedCount: S.optional(S.Number),
          error: S.optional(__S(268, __c33, 4)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "MigrationSummary" });
    case 3:
      return S.Array(__S(322, __c40, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          migrations: S.optional(__S(323, __c40, 3)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListMigrationsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/domain/{DomainName}/packages" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPackagesForDomainRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/scheduledActions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListScheduledActionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.String,
          Type: S.String,
          Severity: S.String,
          ScheduledTime: S.Number,
          Description: S.optional(S.String),
          ScheduledBy: S.optional(S.String),
          Status: S.optional(S.String),
          Mandatory: S.optional(S.Boolean),
          Cancellable: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ScheduledAction" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(327, __c40, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          ScheduledActions: S.optional(__S(328, __c41, 0)),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListScheduledActionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ARN: S.String.pipe(T.HttpQuery("arn")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/tags" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTagsRequest" });
    case 3:
      return S.suspend(() => S.Struct({ TagList: S.optional(__S(15, __c1, 7)) }).pipe(ns)).annotate(
        {
          identifier: "ListTagsResponse",
        },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListVersionsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Versions: S.optional(__S(13, __c1, 5)), NextToken: S.optional(S.String) }).pipe(
          ns,
        ),
      ).annotate({ identifier: "ListVersionsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/listVpcEndpointAccess",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListVpcEndpointAccessRequest",
      });
    case 7:
      return S.Array(__S(36, __c4, 4));
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AuthorizedPrincipalList: __S(335, __c41, 7), NextToken: S.String }).pipe(ns),
      ).annotate({
        identifier: "ListVpcEndpointAccessResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")) }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2021-01-01/opensearch/vpcEndpoints" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListVpcEndpointsRequest" });
    case 2:
      return S.Array(__S(132, __c16, 4));
    case 3:
      return S.suspend(() =>
        S.Struct({ VpcEndpointSummaryList: __S(338, __c42, 2), NextToken: S.String }).pipe(ns),
      ).annotate({ identifier: "ListVpcEndpointsResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "GET",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/vpcEndpoints",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListVpcEndpointsForDomainRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ VpcEndpointSummaryList: __S(338, __c42, 2), NextToken: S.String }).pipe(ns),
      ).annotate({
        identifier: "ListVpcEndpointsForDomainResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ReservedInstanceOfferingId: S.String,
          ReservationName: S.String,
          InstanceCount: S.optional(S.Number),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/purchaseReservedInstanceOffering",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PurchaseReservedInstanceOfferingRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ReservedInstanceId: S.optional(S.String),
          ReservationName: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "PurchaseReservedInstanceOfferingResponse",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ applicationArn: S.String, setAsDefault: S.Boolean }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/2021-01-01/opensearch/defaultApplicationSetting" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutDefaultApplicationSettingRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String.pipe(T.HttpLabel("applicationId")),
          capabilityName: S.String,
          capabilityConfig: __S(248, __c31, 0),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/application/{applicationId}/capability/register",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterCapabilityRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          capabilityName: S.optional(S.String),
          applicationId: S.optional(S.String),
          status: S.optional(S.String),
          capabilityConfig: S.optional(__S(248, __c31, 0)),
        }).pipe(ns),
      ).annotate({
        identifier: "RegisterCapabilityResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ConnectionId: S.String.pipe(T.HttpLabel("ConnectionId")) }).pipe(
          T.all(
            ns,
            T.Http({
              method: "PUT",
              uri: "/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/reject",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RejectInboundConnectionRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ARN: S.String, TagKeys: __S(13, __c1, 5) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/tags-removal" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "RemoveTagsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Account: S.optional(S.String),
          Service: S.optional(S.String),
          ServiceOptions: S.optional(__S(34, __c4, 2)),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/revokeVpcEndpointAccess",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RevokeVpcEndpointAccessRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/serviceSoftwareUpdate/rollback",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RollbackServiceSoftwareUpdateRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CurrentVersion: S.optional(S.String),
          NewVersion: S.optional(S.String),
          RollbackAvailable: S.optional(S.Boolean),
          Description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RollbackServiceSoftwareOptions",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RollbackServiceSoftwareOptions: S.optional(__S(351, __c43, 7)),
        }).pipe(ns),
      ).annotate({
        identifier: "RollbackServiceSoftwareUpdateResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Action: S.String,
          NodeId: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "POST",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/domainMaintenance",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDomainMaintenanceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ MaintenanceId: S.optional(S.String) }).pipe(ns)).annotate({
        identifier: "StartDomainMaintenanceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          workspaceId: S.optional(S.String),
          createWorkspace: S.optional(S.Boolean),
          name: S.optional(S.String),
          type: S.optional(S.String),
        }),
      ).annotate({ identifier: "MigrationWorkspace" });
    case 4:
      return S.suspend(() => S.Struct({ type: S.String, id: S.String })).annotate({
        identifier: "SavedObjectIdentifier",
      });
    case 5:
      return S.Array(__S(356, __c44, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          types: S.optional(__S(13, __c1, 5)),
          objects: S.optional(__S(357, __c44, 5)),
          includeReferencesDeep: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ExportOptions" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          source: __S(267, __c33, 3),
          workspace: __S(355, __c44, 3),
          exportOptions: S.optional(__S(358, __c44, 6)),
          conflictResolution: S.optional(S.String),
        }),
      ).annotate({ identifier: "MigrationOptions" });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationId: S.String,
          migrationOptions: __S(359, __c44, 7),
          clientToken: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/app-migrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartMigrationRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ migrationId: S.optional(S.String), status: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "StartMigrationResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          ScheduleAt: S.optional(S.String),
          DesiredStartTime: S.optional(S.Number),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/serviceSoftwareUpdate/start" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartServiceSoftwareUpdateRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          dataSources: S.optional(__S(46, __c5, 6)),
          appConfigs: S.optional(__S(49, __c6, 1)),
          iamIdentityCenterOptions: S.optional(__S(47, __c5, 7)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "PUT", uri: "/2021-01-01/opensearch/application/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateApplicationRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          arn: S.optional(S.String),
          dataSources: S.optional(__S(46, __c5, 6)),
          iamIdentityCenterOptions: S.optional(__S(51, __c6, 3)),
          appConfigs: S.optional(__S(49, __c6, 1)),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdateApplicationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          Name: S.String.pipe(T.HttpLabel("Name")),
          DataSourceType: __S(7, __c0, 7),
          Description: S.optional(S.String),
          Status: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "PUT",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDataSourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DataSourceName: S.String.pipe(T.HttpLabel("DataSourceName")),
          DataSourceType: __S(12, __c1, 4),
          Description: S.optional(S.String),
          OpenSearchArns: S.optional(__S(13, __c1, 5)),
          DataSourceAccessPolicy: S.optional(S.String),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "PUT",
              uri: "/2021-01-01/opensearch/directQueryDataSource/{DataSourceName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDirectQueryDataSourceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ClusterConfig: S.optional(__S(58, __c7, 2)),
          EBSOptions: S.optional(__S(59, __c7, 3)),
          SnapshotOptions: S.optional(__S(60, __c7, 4)),
          VPCOptions: S.optional(__S(61, __c7, 5)),
          CognitoOptions: S.optional(__S(62, __c7, 6)),
          AdvancedOptions: S.optional(__S(65, __c8, 1)),
          AccessPolicies: S.optional(S.String),
          IPAddressType: S.optional(S.String),
          LogPublishingOptions: S.optional(__S(67, __c8, 3)),
          EncryptionAtRestOptions: S.optional(__S(63, __c7, 7)),
          DomainEndpointOptions: S.optional(__S(68, __c8, 4)),
          NodeToNodeEncryptionOptions: S.optional(__S(64, __c8, 0)),
          AdvancedSecurityOptions: S.optional(__S(74, __c9, 2)),
          IdentityCenterOptions: S.optional(__S(75, __c9, 3)),
          AutoTuneOptions: S.optional(__S(169, __c21, 1)),
          DryRun: S.optional(S.Boolean),
          DryRunMode: S.optional(S.String),
          OffPeakWindowOptions: S.optional(__S(82, __c10, 2)),
          SoftwareUpdateOptions: S.optional(__S(83, __c10, 3)),
          AIMLOptions: S.optional(__S(86, __c10, 6)),
          DeploymentStrategyOptions: S.optional(__S(87, __c10, 7)),
          AutomatedSnapshotPauseOptions: S.optional(__S(88, __c11, 0)),
          UseCase: S.optional(S.String),
          EngineMode: S.optional(S.String),
          AcceptedWarnings: S.optional(__S(13, __c1, 5)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/domain/{DomainName}/config" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDomainConfigRequest",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainConfig: __S(177, __c22, 1),
          DryRunResults: S.optional(__S(194, __c24, 2)),
          DryRunProgressStatus: S.optional(__S(193, __c24, 1)),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdateDomainConfigResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          IndexName: S.String.pipe(T.HttpLabel("IndexName")),
          IndexSchema: S.Any,
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "PUT",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/index/{IndexName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateIndexRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.String,
          PackageSource: __S(109, __c13, 5),
          PackageDescription: S.optional(S.String),
          CommitMessage: S.optional(S.String),
          PackageConfiguration: S.optional(__S(110, __c13, 6)),
          PackageEncryptionOptions: S.optional(__S(112, __c14, 0)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/packages/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePackageRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.String,
          Operation: S.String,
          PackageUserList: __S(13, __c1, 5),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/packages/updateScope" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePackageScopeRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PackageID: S.optional(S.String),
          Operation: S.optional(S.String),
          PackageUserList: S.optional(__S(13, __c1, 5)),
        }).pipe(ns),
      ).annotate({
        identifier: "UpdatePackageScopeResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String.pipe(T.HttpLabel("DomainName")),
          ActionID: S.String,
          ActionType: S.String,
          ScheduleAt: S.String,
          DesiredStartTime: S.optional(S.Number),
        }).pipe(
          T.all(
            ns,
            T.Http({
              method: "PUT",
              uri: "/2021-01-01/opensearch/domain/{DomainName}/scheduledAction/update",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateScheduledActionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ScheduledAction: S.optional(__S(327, __c40, 7)) }).pipe(ns),
      ).annotate({
        identifier: "UpdateScheduledActionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ VpcEndpointId: S.String, VpcOptions: __S(61, __c7, 5) }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/vpcEndpoints/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateVpcEndpointRequest" });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          TargetVersion: S.String,
          PerformCheckOnly: S.optional(S.Boolean),
          AdvancedOptions: S.optional(__S(65, __c8, 1)),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2021-01-01/opensearch/upgradeDomain" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpgradeDomainRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          UpgradeId: S.optional(S.String),
          DomainName: S.optional(S.String),
          TargetVersion: S.optional(S.String),
          PerformCheckOnly: S.optional(S.Boolean),
          AdvancedOptions: S.optional(__S(65, __c8, 1)),
          ChangeProgressDetails: S.optional(__S(95, __c11, 7)),
        }).pipe(ns),
      ).annotate({ identifier: "UpgradeDomainResponse" });
    case 2:
      return S.Array(S.Number);
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
