import * as API from "@distilled.cloud/core/api";
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
  sdkId: "PCS",
  serviceShapeName: "AWSParallelComputingService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "pcs" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-02-10");
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
              `https://pcs-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://pcs-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://pcs.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://pcs.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: S.String,
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ClusterName = string;
export type SchedulerType = "SLURM" | (string & {});
const SchedulerType = S.String;

export interface SchedulerRequest {
  type: SchedulerType;
  version: string;
}
const SchedulerRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ type: SchedulerType, version: S.String }),
).annotate({ identifier: "SchedulerRequest" }) as any as S.Schema<SchedulerRequest>;
export type Size = "SMALL" | "MEDIUM" | "LARGE" | (string & {});
const Size = S.String;

export type SubnetId = string;
export type SubnetIdList = string[];
const SubnetIdList = /*@__PURE__*/ S.Array(S.String);
export type SecurityGroupId = string;
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = SubnetIdList as any as S.Schema<SecurityGroupIdList>;
export type NetworkType = "IPV4" | "IPV6" | (string & {});
const NetworkType = S.String;

export interface NetworkingRequest {
  subnetIds?: string[];
  securityGroupIds?: string[];
  networkType?: NetworkType;
}
const NetworkingRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    subnetIds: S.optional(SubnetIdList),
    securityGroupIds: S.optional(SecurityGroupIdList),
    networkType: S.optional(NetworkType),
  }),
).annotate({ identifier: "NetworkingRequest" }) as any as S.Schema<NetworkingRequest>;
export interface SlurmCustomSetting {
  parameterName: string;
  parameterValue: string;
}
const SlurmCustomSetting = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ parameterName: S.String, parameterValue: S.String }),
).annotate({ identifier: "SlurmCustomSetting" }) as any as S.Schema<SlurmCustomSetting>;
export type SlurmCustomSettings = SlurmCustomSetting[];
const SlurmCustomSettings = /*@__PURE__*/ S.Array(SlurmCustomSetting);
export interface SlurmdbdCustomSetting {
  parameterName: string;
  parameterValue: string;
}
export type SlurmdbdCustomSettings = SlurmdbdCustomSetting[];
const SlurmdbdCustomSettings = SlurmCustomSettings as any as S.Schema<SlurmdbdCustomSettings>;
export interface CgroupCustomSetting {
  parameterName: string;
  parameterValue: string;
}
export type CgroupCustomSettings = CgroupCustomSetting[];
const CgroupCustomSettings = SlurmCustomSettings as any as S.Schema<CgroupCustomSettings>;
export type AccountingMode = "STANDARD" | "NONE" | (string & {});
const AccountingMode = S.String;

export interface AccountingRequest {
  defaultPurgeTimeInDays?: number;
  mode: AccountingMode;
}
const AccountingRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ defaultPurgeTimeInDays: S.optional(S.Number), mode: AccountingMode }),
).annotate({ identifier: "AccountingRequest" }) as any as S.Schema<AccountingRequest>;
export type SlurmRestMode = "STANDARD" | "NONE" | (string & {});
const SlurmRestMode = S.String;

export interface SlurmRestRequest {
  mode: SlurmRestMode;
}
const SlurmRestRequest = /*@__PURE__*/ S.suspend(() => S.Struct({ mode: SlurmRestMode })).annotate({
  identifier: "SlurmRestRequest",
}) as any as S.Schema<SlurmRestRequest>;
export interface ClusterSlurmConfigurationRequest {
  scaleDownIdleTimeInSeconds?: number;
  slurmCustomSettings?: SlurmCustomSetting[];
  slurmdbdCustomSettings?: SlurmdbdCustomSetting[];
  cgroupCustomSettings?: CgroupCustomSetting[];
  accounting?: AccountingRequest;
  slurmRest?: SlurmRestRequest;
}
const ClusterSlurmConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scaleDownIdleTimeInSeconds: S.optional(S.Number),
    slurmCustomSettings: S.optional(SlurmCustomSettings),
    slurmdbdCustomSettings: S.optional(SlurmdbdCustomSettings),
    cgroupCustomSettings: S.optional(CgroupCustomSettings),
    accounting: S.optional(AccountingRequest),
    slurmRest: S.optional(SlurmRestRequest),
  }),
).annotate({
  identifier: "ClusterSlurmConfigurationRequest",
}) as any as S.Schema<ClusterSlurmConfigurationRequest>;
export type SBClientToken = string;
export type TagKey = string;
export type TagValue = string;
export type RequestTagMap = { [key: string]: string | undefined };
const RequestTagMap = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export interface CreateClusterRequest {
  clusterName: string;
  scheduler: SchedulerRequest;
  size: Size;
  networking: NetworkingRequest;
  slurmConfiguration?: ClusterSlurmConfigurationRequest;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateClusterRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterName: S.String,
    scheduler: SchedulerRequest,
    size: Size,
    networking: NetworkingRequest,
    slurmConfiguration: S.optional(ClusterSlurmConfigurationRequest),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(RequestTagMap),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateClusterRequest" }) as any as S.Schema<CreateClusterRequest>;
export type ClusterStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | "UPDATE_FAILED"
  | "SUSPENDING"
  | "SUSPENDED"
  | "RESUMING"
  | (string & {});
const ClusterStatus = S.String;

export interface Scheduler {
  type: SchedulerType;
  version: string;
}
const Scheduler = SchedulerRequest as any as S.Schema<Scheduler>;
export interface SlurmAuthKey {
  secretArn: string;
  secretVersion: string;
}
const SlurmAuthKey = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ secretArn: S.String, secretVersion: S.String }),
).annotate({ identifier: "SlurmAuthKey" }) as any as S.Schema<SlurmAuthKey>;
export interface JwtKey {
  secretArn: string;
  secretVersion: string;
}
const JwtKey = SlurmAuthKey as any as S.Schema<JwtKey>;
export interface JwtAuth {
  jwtKey?: JwtKey;
}
const JwtAuth = /*@__PURE__*/ S.suspend(() => S.Struct({ jwtKey: S.optional(JwtKey) })).annotate({
  identifier: "JwtAuth",
}) as any as S.Schema<JwtAuth>;
export interface Accounting {
  defaultPurgeTimeInDays?: number;
  mode: AccountingMode;
}
const Accounting = AccountingRequest as any as S.Schema<Accounting>;
export interface SlurmRest {
  mode: SlurmRestMode;
}
const SlurmRest = /*@__PURE__*/ S.suspend(() => S.Struct({ mode: SlurmRestMode })).annotate({
  identifier: "SlurmRest",
}) as any as S.Schema<SlurmRest>;
export interface ClusterSlurmConfiguration {
  scaleDownIdleTimeInSeconds?: number;
  slurmCustomSettings?: SlurmCustomSetting[];
  slurmdbdCustomSettings?: SlurmdbdCustomSetting[];
  cgroupCustomSettings?: CgroupCustomSetting[];
  authKey?: SlurmAuthKey;
  jwtAuth?: JwtAuth;
  accounting?: Accounting;
  slurmRest?: SlurmRest;
}
const ClusterSlurmConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scaleDownIdleTimeInSeconds: S.optional(S.Number),
    slurmCustomSettings: S.optional(SlurmCustomSettings),
    slurmdbdCustomSettings: S.optional(SlurmdbdCustomSettings),
    cgroupCustomSettings: S.optional(CgroupCustomSettings),
    authKey: S.optional(SlurmAuthKey),
    jwtAuth: S.optional(JwtAuth),
    accounting: S.optional(Accounting),
    slurmRest: S.optional(SlurmRest),
  }),
).annotate({
  identifier: "ClusterSlurmConfiguration",
}) as any as S.Schema<ClusterSlurmConfiguration>;
export interface Networking {
  subnetIds?: string[];
  securityGroupIds?: string[];
  networkType?: NetworkType;
}
const Networking = NetworkingRequest as any as S.Schema<Networking>;
export type EndpointType = "SLURMCTLD" | "SLURMDBD" | "SLURMRESTD" | (string & {});
const EndpointType = S.String;

export interface Endpoint {
  type: EndpointType;
  privateIpAddress: string;
  publicIpAddress?: string;
  ipv6Address?: string;
  port: string;
}
const Endpoint = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: EndpointType,
    privateIpAddress: S.String,
    publicIpAddress: S.optional(S.String),
    ipv6Address: S.optional(S.String),
    port: S.String,
  }),
).annotate({ identifier: "Endpoint" }) as any as S.Schema<Endpoint>;
export type Endpoints = Endpoint[];
const Endpoints = /*@__PURE__*/ S.Array(Endpoint);
export interface ErrorInfo {
  code?: string;
  message?: string;
}
const ErrorInfo = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ code: S.optional(S.String), message: S.optional(S.String) }),
).annotate({ identifier: "ErrorInfo" }) as any as S.Schema<ErrorInfo>;
export type ErrorInfoList = ErrorInfo[];
const ErrorInfoList = /*@__PURE__*/ S.Array(ErrorInfo);
export interface Cluster {
  name: string;
  id: string;
  arn: string;
  status: ClusterStatus;
  createdAt: Date;
  modifiedAt: Date;
  scheduler: Scheduler;
  size: Size;
  slurmConfiguration?: ClusterSlurmConfiguration;
  networking: Networking;
  endpoints?: Endpoint[];
  errorInfo?: ErrorInfo[];
}
const Cluster = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    id: S.String,
    arn: S.String,
    status: ClusterStatus,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    modifiedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    scheduler: Scheduler,
    size: Size,
    slurmConfiguration: S.optional(ClusterSlurmConfiguration),
    networking: Networking,
    endpoints: S.optional(Endpoints),
    errorInfo: S.optional(ErrorInfoList),
  }),
).annotate({ identifier: "Cluster" }) as any as S.Schema<Cluster>;
export interface CreateClusterResponse {
  cluster?: Cluster;
}
const CreateClusterResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ cluster: S.optional(Cluster) }),
).annotate({ identifier: "CreateClusterResponse" }) as any as S.Schema<CreateClusterResponse>;
export type ClusterIdentifier = string;
export type ComputeNodeGroupName = string;
export type AmiId = string;
export type StringList = string[];
const StringList = SubnetIdList as any as S.Schema<StringList>;
export type PurchaseOption =
  | "ONDEMAND"
  | "SPOT"
  | "CAPACITY_BLOCK"
  | "INTERRUPTIBLE_CAPACITY_RESERVATION"
  | (string & {});
const PurchaseOption = S.String;

export interface CustomLaunchTemplate {
  id: string;
  version: string;
}
const CustomLaunchTemplate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String, version: S.String }),
).annotate({ identifier: "CustomLaunchTemplate" }) as any as S.Schema<CustomLaunchTemplate>;
export type InstanceProfileArn = string;
export interface ScalingConfigurationRequest {
  minInstanceCount: number;
  maxInstanceCount: number;
}
const ScalingConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ minInstanceCount: S.Number, maxInstanceCount: S.Number }),
).annotate({
  identifier: "ScalingConfigurationRequest",
}) as any as S.Schema<ScalingConfigurationRequest>;
export interface InstanceConfig {
  instanceType?: string;
}
const InstanceConfig = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ instanceType: S.optional(S.String) }),
).annotate({ identifier: "InstanceConfig" }) as any as S.Schema<InstanceConfig>;
export type InstanceList = InstanceConfig[];
const InstanceList = /*@__PURE__*/ S.Array(InstanceConfig);
export type SpotAllocationStrategy =
  | "lowest-price"
  | "capacity-optimized"
  | "price-capacity-optimized"
  | (string & {});
const SpotAllocationStrategy = S.String;

export interface SpotOptions {
  allocationStrategy?: SpotAllocationStrategy;
}
const SpotOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ allocationStrategy: S.optional(SpotAllocationStrategy) }),
).annotate({ identifier: "SpotOptions" }) as any as S.Schema<SpotOptions>;
export type GresCustomSettingMap = { [key: string]: string | undefined };
const GresCustomSettingMap = RequestTagMap as any as S.Schema<GresCustomSettingMap>;
export type GresCustomSettings = { [key: string]: string | undefined }[];
const GresCustomSettings = /*@__PURE__*/ S.Array(GresCustomSettingMap);
export interface ComputeNodeGroupSlurmConfigurationRequest {
  scaleDownIdleTimeInSeconds?: number;
  slurmCustomSettings?: SlurmCustomSetting[];
  gresCustomSettings?: { [key: string]: string | undefined }[];
}
const ComputeNodeGroupSlurmConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scaleDownIdleTimeInSeconds: S.optional(S.Number),
    slurmCustomSettings: S.optional(SlurmCustomSettings),
    gresCustomSettings: S.optional(GresCustomSettings),
  }),
).annotate({
  identifier: "ComputeNodeGroupSlurmConfigurationRequest",
}) as any as S.Schema<ComputeNodeGroupSlurmConfigurationRequest>;
export interface ScriptSource {
  scriptLocation: string;
  s3VersionId?: string;
  checksum?: string;
}
const ScriptSource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scriptLocation: S.String,
    s3VersionId: S.optional(S.String),
    checksum: S.optional(S.String),
  }),
).annotate({ identifier: "ScriptSource" }) as any as S.Schema<ScriptSource>;
export type NodeLifecycleScriptArgument = string;
export type NodeLifecycleScriptArguments = string[];
const NodeLifecycleScriptArguments = SubnetIdList as any as S.Schema<NodeLifecycleScriptArguments>;
export type OnError = "TERMINATE" | "STOP_SEQUENCE" | "CONTINUE" | (string & {});
const OnError = S.String;

export type ExecutionPolicy = "FIRST_BOOT_ONLY" | "EVERY_BOOT" | (string & {});
const ExecutionPolicy = S.String;

export interface NodeLifecycleScript {
  name: string;
  scriptSource: ScriptSource;
  arguments?: string[];
  onError?: OnError;
  executionPolicy?: ExecutionPolicy;
}
const NodeLifecycleScript = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    scriptSource: ScriptSource,
    arguments: S.optional(NodeLifecycleScriptArguments),
    onError: S.optional(OnError),
    executionPolicy: S.optional(ExecutionPolicy),
  }),
).annotate({ identifier: "NodeLifecycleScript" }) as any as S.Schema<NodeLifecycleScript>;
export type NodeLifecycleScriptList = NodeLifecycleScript[];
const NodeLifecycleScriptList = /*@__PURE__*/ S.Array(NodeLifecycleScript);
export interface NodeLifecycleStages {
  nodeBootstrapped?: NodeLifecycleScript[];
  nodeReady?: NodeLifecycleScript[];
}
const NodeLifecycleStages = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nodeBootstrapped: S.optional(NodeLifecycleScriptList),
    nodeReady: S.optional(NodeLifecycleScriptList),
  }),
).annotate({ identifier: "NodeLifecycleStages" }) as any as S.Schema<NodeLifecycleStages>;
export type ScriptCachingPolicy = "CACHE_ONCE" | "REFRESH_ON_REBOOT" | (string & {});
const ScriptCachingPolicy = S.String;

export interface NodeLifecycleActionsRequest {
  stages: NodeLifecycleStages;
  scriptCachingPolicy?: ScriptCachingPolicy;
}
const NodeLifecycleActionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ stages: NodeLifecycleStages, scriptCachingPolicy: S.optional(ScriptCachingPolicy) }),
).annotate({
  identifier: "NodeLifecycleActionsRequest",
}) as any as S.Schema<NodeLifecycleActionsRequest>;
export interface CreateComputeNodeGroupRequest {
  clusterIdentifier: string;
  computeNodeGroupName: string;
  amiId?: string;
  subnetIds: string[];
  purchaseOption?: PurchaseOption;
  customLaunchTemplate: CustomLaunchTemplate;
  iamInstanceProfileArn: string;
  scalingConfiguration: ScalingConfigurationRequest;
  instanceConfigs: InstanceConfig[];
  spotOptions?: SpotOptions;
  slurmConfiguration?: ComputeNodeGroupSlurmConfigurationRequest;
  nodeLifecycleActions?: NodeLifecycleActionsRequest;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateComputeNodeGroupRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    computeNodeGroupName: S.String,
    amiId: S.optional(S.String),
    subnetIds: StringList,
    purchaseOption: S.optional(PurchaseOption),
    customLaunchTemplate: CustomLaunchTemplate,
    iamInstanceProfileArn: S.String,
    scalingConfiguration: ScalingConfigurationRequest,
    instanceConfigs: InstanceList,
    spotOptions: S.optional(SpotOptions),
    slurmConfiguration: S.optional(ComputeNodeGroupSlurmConfigurationRequest),
    nodeLifecycleActions: S.optional(NodeLifecycleActionsRequest),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(RequestTagMap),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "CreateComputeNodeGroupRequest",
}) as any as S.Schema<CreateComputeNodeGroupRequest>;
export type ComputeNodeGroupStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | "UPDATE_FAILED"
  | "DELETED"
  | "SUSPENDING"
  | "SUSPENDED"
  | "RESUMING"
  | (string & {});
const ComputeNodeGroupStatus = S.String;

export interface ScalingConfiguration {
  minInstanceCount: number;
  maxInstanceCount: number;
}
const ScalingConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ minInstanceCount: S.Number, maxInstanceCount: S.Number }),
).annotate({ identifier: "ScalingConfiguration" }) as any as S.Schema<ScalingConfiguration>;
export interface ComputeNodeGroupSlurmConfiguration {
  scaleDownIdleTimeInSeconds?: number;
  slurmCustomSettings?: SlurmCustomSetting[];
  gresCustomSettings?: { [key: string]: string | undefined }[];
}
const ComputeNodeGroupSlurmConfiguration =
  ComputeNodeGroupSlurmConfigurationRequest as any as S.Schema<ComputeNodeGroupSlurmConfiguration>;
export interface NodeLifecycleActions {
  stages: NodeLifecycleStages;
  scriptCachingPolicy?: ScriptCachingPolicy;
}
const NodeLifecycleActions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ stages: NodeLifecycleStages, scriptCachingPolicy: S.optional(ScriptCachingPolicy) }),
).annotate({ identifier: "NodeLifecycleActions" }) as any as S.Schema<NodeLifecycleActions>;
export interface ComputeNodeGroup {
  name: string;
  id: string;
  arn: string;
  clusterId: string;
  createdAt: Date;
  modifiedAt: Date;
  status: ComputeNodeGroupStatus;
  amiId?: string;
  subnetIds: string[];
  purchaseOption?: PurchaseOption;
  customLaunchTemplate: CustomLaunchTemplate;
  iamInstanceProfileArn: string;
  scalingConfiguration: ScalingConfiguration;
  instanceConfigs: InstanceConfig[];
  spotOptions?: SpotOptions;
  slurmConfiguration?: ComputeNodeGroupSlurmConfiguration;
  nodeLifecycleActions?: NodeLifecycleActions;
  errorInfo?: ErrorInfo[];
}
const ComputeNodeGroup = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    id: S.String,
    arn: S.String,
    clusterId: S.String,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    modifiedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    status: ComputeNodeGroupStatus,
    amiId: S.optional(S.String),
    subnetIds: SubnetIdList,
    purchaseOption: S.optional(PurchaseOption),
    customLaunchTemplate: CustomLaunchTemplate,
    iamInstanceProfileArn: S.String,
    scalingConfiguration: ScalingConfiguration,
    instanceConfigs: InstanceList,
    spotOptions: S.optional(SpotOptions),
    slurmConfiguration: S.optional(ComputeNodeGroupSlurmConfiguration),
    nodeLifecycleActions: S.optional(NodeLifecycleActions),
    errorInfo: S.optional(ErrorInfoList),
  }),
).annotate({ identifier: "ComputeNodeGroup" }) as any as S.Schema<ComputeNodeGroup>;
export interface CreateComputeNodeGroupResponse {
  computeNodeGroup?: ComputeNodeGroup;
}
const CreateComputeNodeGroupResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ computeNodeGroup: S.optional(ComputeNodeGroup) }),
).annotate({
  identifier: "CreateComputeNodeGroupResponse",
}) as any as S.Schema<CreateComputeNodeGroupResponse>;
export type QueueName = string;
export interface ComputeNodeGroupConfiguration {
  computeNodeGroupId?: string;
}
const ComputeNodeGroupConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ computeNodeGroupId: S.optional(S.String) }),
).annotate({
  identifier: "ComputeNodeGroupConfiguration",
}) as any as S.Schema<ComputeNodeGroupConfiguration>;
export type ComputeNodeGroupConfigurationList = ComputeNodeGroupConfiguration[];
const ComputeNodeGroupConfigurationList = /*@__PURE__*/ S.Array(ComputeNodeGroupConfiguration);
export interface QueueSlurmConfigurationRequest {
  slurmCustomSettings?: SlurmCustomSetting[];
}
const QueueSlurmConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ slurmCustomSettings: S.optional(SlurmCustomSettings) }),
).annotate({
  identifier: "QueueSlurmConfigurationRequest",
}) as any as S.Schema<QueueSlurmConfigurationRequest>;
export interface CreateQueueRequest {
  clusterIdentifier: string;
  queueName: string;
  computeNodeGroupConfigurations?: ComputeNodeGroupConfiguration[];
  slurmConfiguration?: QueueSlurmConfigurationRequest;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateQueueRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    queueName: S.String,
    computeNodeGroupConfigurations: S.optional(ComputeNodeGroupConfigurationList),
    slurmConfiguration: S.optional(QueueSlurmConfigurationRequest),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(RequestTagMap),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateQueueRequest" }) as any as S.Schema<CreateQueueRequest>;
export type QueueStatus =
  | "CREATING"
  | "ACTIVE"
  | "UPDATING"
  | "DELETING"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | "UPDATE_FAILED"
  | "SUSPENDING"
  | "SUSPENDED"
  | "RESUMING"
  | (string & {});
const QueueStatus = S.String;

export interface QueueSlurmConfiguration {
  slurmCustomSettings?: SlurmCustomSetting[];
}
const QueueSlurmConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ slurmCustomSettings: S.optional(SlurmCustomSettings) }),
).annotate({ identifier: "QueueSlurmConfiguration" }) as any as S.Schema<QueueSlurmConfiguration>;
export interface Queue {
  name: string;
  id: string;
  arn: string;
  clusterId: string;
  createdAt: Date;
  modifiedAt: Date;
  status: QueueStatus;
  computeNodeGroupConfigurations: ComputeNodeGroupConfiguration[];
  slurmConfiguration?: QueueSlurmConfiguration;
  errorInfo?: ErrorInfo[];
}
const Queue = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    id: S.String,
    arn: S.String,
    clusterId: S.String,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    modifiedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    status: QueueStatus,
    computeNodeGroupConfigurations: ComputeNodeGroupConfigurationList,
    slurmConfiguration: S.optional(QueueSlurmConfiguration),
    errorInfo: S.optional(ErrorInfoList),
  }),
).annotate({ identifier: "Queue" }) as any as S.Schema<Queue>;
export interface CreateQueueResponse {
  queue?: Queue;
}
const CreateQueueResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ queue: S.optional(Queue) }),
).annotate({ identifier: "CreateQueueResponse" }) as any as S.Schema<CreateQueueResponse>;
export interface DeleteClusterRequest {
  clusterIdentifier: string;
  clientToken?: string;
}
const DeleteClusterRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "DeleteClusterRequest" }) as any as S.Schema<DeleteClusterRequest>;
export interface DeleteClusterResponse {}
const DeleteClusterResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "DeleteClusterResponse",
}) as any as S.Schema<DeleteClusterResponse>;
export type ComputeNodeGroupIdentifier = string;
export interface DeleteComputeNodeGroupRequest {
  clusterIdentifier: string;
  computeNodeGroupIdentifier: string;
  clientToken?: string;
}
const DeleteComputeNodeGroupRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    computeNodeGroupIdentifier: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "DeleteComputeNodeGroupRequest",
}) as any as S.Schema<DeleteComputeNodeGroupRequest>;
export interface DeleteComputeNodeGroupResponse {}
const DeleteComputeNodeGroupResponse =
  DeleteClusterResponse as any as S.Schema<DeleteComputeNodeGroupResponse>;
export type QueueIdentifier = string;
export interface DeleteQueueRequest {
  clusterIdentifier: string;
  queueIdentifier: string;
  clientToken?: string;
}
const DeleteQueueRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    queueIdentifier: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "DeleteQueueRequest" }) as any as S.Schema<DeleteQueueRequest>;
export interface DeleteQueueResponse {}
const DeleteQueueResponse = DeleteClusterResponse as any as S.Schema<DeleteQueueResponse>;
export interface GetClusterRequest {
  clusterIdentifier: string;
}
const GetClusterRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ clusterIdentifier: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetClusterRequest" }) as any as S.Schema<GetClusterRequest>;
export interface GetClusterResponse {
  cluster?: Cluster;
}
const GetClusterResponse = CreateClusterResponse as any as S.Schema<GetClusterResponse>;
export interface GetComputeNodeGroupRequest {
  clusterIdentifier: string;
  computeNodeGroupIdentifier: string;
}
const GetComputeNodeGroupRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ clusterIdentifier: S.String, computeNodeGroupIdentifier: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "GetComputeNodeGroupRequest",
}) as any as S.Schema<GetComputeNodeGroupRequest>;
export interface GetComputeNodeGroupResponse {
  computeNodeGroup?: ComputeNodeGroup;
}
const GetComputeNodeGroupResponse =
  CreateComputeNodeGroupResponse as any as S.Schema<GetComputeNodeGroupResponse>;
export interface GetQueueRequest {
  clusterIdentifier: string;
  queueIdentifier: string;
}
const GetQueueRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ clusterIdentifier: S.String, queueIdentifier: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetQueueRequest" }) as any as S.Schema<GetQueueRequest>;
export interface GetQueueResponse {
  queue?: Queue;
}
const GetQueueResponse = CreateQueueResponse as any as S.Schema<GetQueueResponse>;
export type MaxResults = number;
export interface ListClustersRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListClustersRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListClustersRequest" }) as any as S.Schema<ListClustersRequest>;
export interface ClusterSummary {
  name: string;
  id: string;
  arn: string;
  createdAt: Date;
  modifiedAt: Date;
  status: ClusterStatus;
}
const ClusterSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    id: S.String,
    arn: S.String,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    modifiedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    status: ClusterStatus,
  }),
).annotate({ identifier: "ClusterSummary" }) as any as S.Schema<ClusterSummary>;
export type ClusterList = ClusterSummary[];
const ClusterList = /*@__PURE__*/ S.Array(ClusterSummary);
export interface ListClustersResponse {
  clusters: ClusterSummary[];
  nextToken?: string;
}
const ListClustersResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ clusters: ClusterList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListClustersResponse" }) as any as S.Schema<ListClustersResponse>;
export interface ListComputeNodeGroupsRequest {
  clusterIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListComputeNodeGroupsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "ListComputeNodeGroupsRequest",
}) as any as S.Schema<ListComputeNodeGroupsRequest>;
export interface ComputeNodeGroupSummary {
  name: string;
  id: string;
  arn: string;
  clusterId: string;
  createdAt: Date;
  modifiedAt: Date;
  status: ComputeNodeGroupStatus;
}
const ComputeNodeGroupSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    id: S.String,
    arn: S.String,
    clusterId: S.String,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    modifiedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    status: ComputeNodeGroupStatus,
  }),
).annotate({ identifier: "ComputeNodeGroupSummary" }) as any as S.Schema<ComputeNodeGroupSummary>;
export type ComputeNodeGroupList = ComputeNodeGroupSummary[];
const ComputeNodeGroupList = /*@__PURE__*/ S.Array(ComputeNodeGroupSummary);
export interface ListComputeNodeGroupsResponse {
  computeNodeGroups: ComputeNodeGroupSummary[];
  nextToken?: string;
}
const ListComputeNodeGroupsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ computeNodeGroups: ComputeNodeGroupList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListComputeNodeGroupsResponse",
}) as any as S.Schema<ListComputeNodeGroupsResponse>;
export interface ListQueuesRequest {
  clusterIdentifier: string;
  nextToken?: string;
  maxResults?: number;
}
const ListQueuesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListQueuesRequest" }) as any as S.Schema<ListQueuesRequest>;
export interface QueueSummary {
  name: string;
  id: string;
  arn: string;
  clusterId: string;
  createdAt: Date;
  modifiedAt: Date;
  status: QueueStatus;
}
export type QueueList = QueueSummary[];
const QueueList = ComputeNodeGroupList as any as S.Schema<QueueList>;
export interface ListQueuesResponse {
  queues: QueueSummary[];
  nextToken?: string;
}
const ListQueuesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ queues: QueueList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListQueuesResponse" }) as any as S.Schema<ListQueuesResponse>;
export type Arn = string;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export type ResponseTagMap = { [key: string]: string | undefined };
const ResponseTagMap = RequestTagMap as any as S.Schema<ResponseTagMap>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ tags: S.optional(ResponseTagMap) }),
).annotate({
  identifier: "ListTagsForResourceResponse",
}) as any as S.Schema<ListTagsForResourceResponse>;
export type BootstrapId = string;
export interface RegisterComputeNodeGroupInstanceRequest {
  clusterIdentifier: string;
  bootstrapId: string;
}
const RegisterComputeNodeGroupInstanceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ clusterIdentifier: S.String, bootstrapId: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "RegisterComputeNodeGroupInstanceRequest",
}) as any as S.Schema<RegisterComputeNodeGroupInstanceRequest>;
export type SharedSecret = string | redacted.Redacted<string>;
export interface RegisterComputeNodeGroupInstanceResponse {
  nodeID: string;
  sharedSecret: string | redacted.Redacted<string>;
  endpoints: Endpoint[];
  clusterName?: string;
  computeNodeGroupId?: string;
  computeNodeGroupName?: string;
  nodeLifecycleActions?: NodeLifecycleActions;
}
const RegisterComputeNodeGroupInstanceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nodeID: S.String,
    sharedSecret: SensitiveString,
    endpoints: Endpoints,
    clusterName: S.optional(S.String),
    computeNodeGroupId: S.optional(S.String),
    computeNodeGroupName: S.optional(S.String),
    nodeLifecycleActions: S.optional(NodeLifecycleActions),
  }),
).annotate({
  identifier: "RegisterComputeNodeGroupInstanceResponse",
}) as any as S.Schema<RegisterComputeNodeGroupInstanceResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String, tags: RequestTagMap }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagResourceRequest" }) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteClusterResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = SubnetIdList as any as S.Schema<TagKeys>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tagKeys: TagKeys }).pipe(
    T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteClusterResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAccountingRequest {
  defaultPurgeTimeInDays?: number;
  mode?: AccountingMode;
}
const UpdateAccountingRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ defaultPurgeTimeInDays: S.optional(S.Number), mode: S.optional(AccountingMode) }),
).annotate({ identifier: "UpdateAccountingRequest" }) as any as S.Schema<UpdateAccountingRequest>;
export interface UpdateSlurmRestRequest {
  mode?: SlurmRestMode;
}
const UpdateSlurmRestRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ mode: S.optional(SlurmRestMode) }),
).annotate({ identifier: "UpdateSlurmRestRequest" }) as any as S.Schema<UpdateSlurmRestRequest>;
export interface UpdateClusterSlurmConfigurationRequest {
  scaleDownIdleTimeInSeconds?: number;
  slurmCustomSettings?: SlurmCustomSetting[];
  slurmdbdCustomSettings?: SlurmdbdCustomSetting[];
  cgroupCustomSettings?: CgroupCustomSetting[];
  accounting?: UpdateAccountingRequest;
  slurmRest?: UpdateSlurmRestRequest;
}
const UpdateClusterSlurmConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    scaleDownIdleTimeInSeconds: S.optional(S.Number),
    slurmCustomSettings: S.optional(SlurmCustomSettings),
    slurmdbdCustomSettings: S.optional(SlurmdbdCustomSettings),
    cgroupCustomSettings: S.optional(CgroupCustomSettings),
    accounting: S.optional(UpdateAccountingRequest),
    slurmRest: S.optional(UpdateSlurmRestRequest),
  }),
).annotate({
  identifier: "UpdateClusterSlurmConfigurationRequest",
}) as any as S.Schema<UpdateClusterSlurmConfigurationRequest>;
export interface UpdateSchedulerRequest {
  version: string;
}
const UpdateSchedulerRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ version: S.String }),
).annotate({ identifier: "UpdateSchedulerRequest" }) as any as S.Schema<UpdateSchedulerRequest>;
export interface UpdateClusterRequest {
  clusterIdentifier: string;
  clientToken?: string;
  slurmConfiguration?: UpdateClusterSlurmConfigurationRequest;
  scheduler?: UpdateSchedulerRequest;
}
const UpdateClusterRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    slurmConfiguration: S.optional(UpdateClusterSlurmConfigurationRequest),
    scheduler: S.optional(UpdateSchedulerRequest),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "UpdateClusterRequest" }) as any as S.Schema<UpdateClusterRequest>;
export interface UpdateClusterResponse {
  cluster?: Cluster;
}
const UpdateClusterResponse = CreateClusterResponse as any as S.Schema<UpdateClusterResponse>;
export interface UpdateComputeNodeGroupSlurmConfigurationRequest {
  scaleDownIdleTimeInSeconds?: number;
  slurmCustomSettings?: SlurmCustomSetting[];
  gresCustomSettings?: { [key: string]: string | undefined }[];
}
const UpdateComputeNodeGroupSlurmConfigurationRequest =
  ComputeNodeGroupSlurmConfigurationRequest as any as S.Schema<UpdateComputeNodeGroupSlurmConfigurationRequest>;
export interface UpdateNodeLifecycleActionsRequest {
  stages: NodeLifecycleStages;
  scriptCachingPolicy?: ScriptCachingPolicy;
}
const UpdateNodeLifecycleActionsRequest =
  NodeLifecycleActionsRequest as any as S.Schema<UpdateNodeLifecycleActionsRequest>;
export interface UpdateComputeNodeGroupRequest {
  clusterIdentifier: string;
  computeNodeGroupIdentifier: string;
  amiId?: string;
  subnetIds?: string[];
  customLaunchTemplate?: CustomLaunchTemplate;
  purchaseOption?: PurchaseOption;
  spotOptions?: SpotOptions;
  scalingConfiguration?: ScalingConfigurationRequest;
  iamInstanceProfileArn?: string;
  slurmConfiguration?: UpdateComputeNodeGroupSlurmConfigurationRequest;
  nodeLifecycleActions?: UpdateNodeLifecycleActionsRequest;
  clientToken?: string;
}
const UpdateComputeNodeGroupRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    computeNodeGroupIdentifier: S.String,
    amiId: S.optional(S.String),
    subnetIds: S.optional(StringList),
    customLaunchTemplate: S.optional(CustomLaunchTemplate),
    purchaseOption: S.optional(PurchaseOption),
    spotOptions: S.optional(SpotOptions),
    scalingConfiguration: S.optional(ScalingConfigurationRequest),
    iamInstanceProfileArn: S.optional(S.String),
    slurmConfiguration: S.optional(UpdateComputeNodeGroupSlurmConfigurationRequest),
    nodeLifecycleActions: S.optional(UpdateNodeLifecycleActionsRequest),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({
  identifier: "UpdateComputeNodeGroupRequest",
}) as any as S.Schema<UpdateComputeNodeGroupRequest>;
export interface UpdateComputeNodeGroupResponse {
  computeNodeGroup?: ComputeNodeGroup;
}
const UpdateComputeNodeGroupResponse =
  CreateComputeNodeGroupResponse as any as S.Schema<UpdateComputeNodeGroupResponse>;
export interface UpdateQueueSlurmConfigurationRequest {
  slurmCustomSettings?: SlurmCustomSetting[];
}
const UpdateQueueSlurmConfigurationRequest =
  QueueSlurmConfigurationRequest as any as S.Schema<UpdateQueueSlurmConfigurationRequest>;
export interface UpdateQueueRequest {
  clusterIdentifier: string;
  queueIdentifier: string;
  computeNodeGroupConfigurations?: ComputeNodeGroupConfiguration[];
  slurmConfiguration?: UpdateQueueSlurmConfigurationRequest;
  clientToken?: string;
}
const UpdateQueueRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clusterIdentifier: S.String,
    queueIdentifier: S.String,
    computeNodeGroupConfigurations: S.optional(ComputeNodeGroupConfigurationList),
    slurmConfiguration: S.optional(UpdateQueueSlurmConfigurationRequest),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "UpdateQueueRequest" }) as any as S.Schema<UpdateQueueRequest>;
export interface UpdateQueueResponse {
  queue?: Queue;
}
const UpdateQueueResponse = CreateQueueResponse as any as S.Schema<UpdateQueueResponse>;
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.String, message: S.String }),
).annotate({ identifier: "ValidationExceptionField" }) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ S.Array(ValidationExceptionField);
export type CreateClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a cluster in your account. PCS creates the cluster controller in a service-owned account. The cluster controller communicates with the cluster resources in your account. The subnets and security groups for the cluster must already exist before you use this API action.
 *
 * It takes time for PCS to create the cluster. The cluster is in a `Creating` state until it is ready to use. There can only be 1 cluster in a `Creating` state per Amazon Web Services Region per Amazon Web Services account. `CreateCluster` fails with a `ServiceQuotaExceededException` if there is already a cluster in a `Creating` state.
 */
export const createCluster: API.OperationMethod<
  CreateClusterRequest,
  CreateClusterResponse,
  CreateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateClusterRequest,
  output: CreateClusterResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateCluster",
}));

export type CreateComputeNodeGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a managed set of compute nodes. You associate a compute node group with a cluster through 1 or more PCS queues or as part of the login fleet. A compute node group includes the definition of the compute properties and lifecycle management. PCS uses the information you provide to this API action to launch compute nodes in your account. You can only specify subnets in the same Amazon VPC as your cluster. You receive billing charges for the compute nodes that PCS launches in your account. You must already have a launch template before you call this API. For more information, see Launch an instance from a launch template in the *Amazon Elastic Compute Cloud User Guide for Linux Instances*.
 */
export const createComputeNodeGroup: API.OperationMethod<
  CreateComputeNodeGroupRequest,
  CreateComputeNodeGroupResponse,
  CreateComputeNodeGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateComputeNodeGroupRequest,
  output: CreateComputeNodeGroupResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateComputeNodeGroup",
}));

export type CreateQueueError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a job queue. You must associate 1 or more compute node groups with the queue. You can associate 1 compute node group with multiple queues.
 */
export const createQueue: API.OperationMethod<
  CreateQueueRequest,
  CreateQueueResponse,
  CreateQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateQueueRequest,
  output: CreateQueueResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQueue",
}));

export type DeleteClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a cluster and all its linked resources. You must delete all queues and compute node groups associated with the cluster before you can delete the cluster.
 */
export const deleteCluster: API.OperationMethod<
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteClusterRequest,
  output: DeleteClusterResponse,
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
  operationName: "DeleteCluster",
}));

export type DeleteComputeNodeGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a compute node group. You must delete all queues associated with the compute node group first.
 */
export const deleteComputeNodeGroup: API.OperationMethod<
  DeleteComputeNodeGroupRequest,
  DeleteComputeNodeGroupResponse,
  DeleteComputeNodeGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteComputeNodeGroupRequest,
  output: DeleteComputeNodeGroupResponse,
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
  operationName: "DeleteComputeNodeGroup",
}));

export type DeleteQueueError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a job queue. If the compute node group associated with this queue isn't associated with any other queues, PCS terminates all the compute nodes for this queue.
 */
export const deleteQueue: API.OperationMethod<
  DeleteQueueRequest,
  DeleteQueueResponse,
  DeleteQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteQueueRequest,
  output: DeleteQueueResponse,
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
  operationName: "DeleteQueue",
}));

export type GetClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns detailed information about a running cluster in your account. This API action provides networking information, endpoint information for communication with the scheduler, and provisioning status.
 */
export const getCluster: API.OperationMethod<
  GetClusterRequest,
  GetClusterResponse,
  GetClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetClusterRequest,
  output: GetClusterResponse,
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
  operationName: "GetCluster",
}));

export type GetComputeNodeGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns detailed information about a compute node group. This API action provides networking information, EC2 instance type, compute node group status, and scheduler (such as Slurm) configuration.
 */
export const getComputeNodeGroup: API.OperationMethod<
  GetComputeNodeGroupRequest,
  GetComputeNodeGroupResponse,
  GetComputeNodeGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetComputeNodeGroupRequest,
  output: GetComputeNodeGroupResponse,
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
  operationName: "GetComputeNodeGroup",
}));

export type GetQueueError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns detailed information about a queue. The information includes the compute node groups that the queue uses to schedule jobs.
 */
export const getQueue: API.OperationMethod<
  GetQueueRequest,
  GetQueueResponse,
  GetQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetQueueRequest,
  output: GetQueueResponse,
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
  operationName: "GetQueue",
}));

export type ListClustersError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of running clusters in your account.
 */
export const listClusters: API.PaginatedOperationMethod<
  ListClustersRequest,
  ListClustersResponse,
  ListClustersError,
  Credentials | HttpClient.HttpClient,
  ClusterSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListClustersRequest,
  output: ListClustersResponse,
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
  operationName: "ListClusters",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "clusters",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListComputeNodeGroupsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all compute node groups associated with a cluster.
 */
export const listComputeNodeGroups: API.PaginatedOperationMethod<
  ListComputeNodeGroupsRequest,
  ListComputeNodeGroupsResponse,
  ListComputeNodeGroupsError,
  Credentials | HttpClient.HttpClient,
  ComputeNodeGroupSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListComputeNodeGroupsRequest,
  output: ListComputeNodeGroupsResponse,
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
  operationName: "ListComputeNodeGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "computeNodeGroups",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListQueuesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all queues associated with a cluster.
 */
export const listQueues: API.PaginatedOperationMethod<
  ListQueuesRequest,
  ListQueuesResponse,
  ListQueuesError,
  Credentials | HttpClient.HttpClient,
  QueueSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListQueuesRequest,
  output: ListQueuesResponse,
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
  operationName: "ListQueues",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "queues",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Returns a list of all tags on an PCS resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RegisterComputeNodeGroupInstanceError =
  | AccessDeniedException
  | InternalServerException
  | CommonErrors;
/**
 * This API action isn't intended for you to use.
 *
 * PCS uses this API action to register the compute nodes it launches in your account.
 */
export const registerComputeNodeGroupInstance: API.OperationMethod<
  RegisterComputeNodeGroupInstanceRequest,
  RegisterComputeNodeGroupInstanceResponse,
  RegisterComputeNodeGroupInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterComputeNodeGroupInstanceRequest,
  output: RegisterComputeNodeGroupInstanceResponse,
  errors: [AccessDeniedException, InternalServerException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterComputeNodeGroupInstance",
}));

export type TagResourceError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * Adds or edits tags on an PCS resource. Each tag consists of a tag key and a tag value. The tag key and tag value are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [ResourceNotFoundException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * Deletes tags from an PCS resource. To delete a tag, specify the tag key and the Amazon Resource Name (ARN) of the PCS resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateClusterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a cluster configuration. You can update the scheduler version, modify scheduler settings, and update accounting configuration for an existing cluster. For more information about updating the scheduler version, see Updating the scheduler version on a cluster in the *PCS User Guide*.
 *
 * You can only update clusters that are in `ACTIVE`, `UPDATE_FAILED`, or `SUSPENDED` state. All associated resources (queues and compute node groups) must be in `ACTIVE` state before you can update the cluster.
 */
export const updateCluster: API.OperationMethod<
  UpdateClusterRequest,
  UpdateClusterResponse,
  UpdateClusterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateClusterRequest,
  output: UpdateClusterResponse,
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
  operationName: "UpdateCluster",
}));

export type UpdateComputeNodeGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a compute node group. You can update many of the fields related to your compute node group including the configurations for networking, compute nodes, and settings specific to your scheduler (such as Slurm).
 */
export const updateComputeNodeGroup: API.OperationMethod<
  UpdateComputeNodeGroupRequest,
  UpdateComputeNodeGroupResponse,
  UpdateComputeNodeGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateComputeNodeGroupRequest,
  output: UpdateComputeNodeGroupResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateComputeNodeGroup",
}));

export type UpdateQueueError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the compute node group configuration of a queue. Use this API to change the compute node groups that the queue can send jobs to.
 */
export const updateQueue: API.OperationMethod<
  UpdateQueueRequest,
  UpdateQueueResponse,
  UpdateQueueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateQueueRequest,
  output: UpdateQueueResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQueue",
}));
