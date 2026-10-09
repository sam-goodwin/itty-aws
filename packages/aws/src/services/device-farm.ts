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
const ns = /*@__PURE__*/ T.XmlNamespace("http://devicefarm.amazonaws.com/doc/2015-06-23/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Device Farm",
  serviceShapeName: "DeviceFarm_20150623",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "devicefarm" });
const ver = /*@__PURE__*/ T.ServiceVersion("2015-06-23");
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
              `https://devicefarm-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://devicefarm-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://devicefarm.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://devicefarm.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ArgumentException
  extends /*@__PURE__*/ S.TaggedError<ArgumentException>()("ArgumentException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class CannotDeleteException
  extends /*@__PURE__*/ S.TaggedError<CannotDeleteException>()(
    "CannotDeleteException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class IdempotencyException
  extends /*@__PURE__*/ S.TaggedError<IdempotencyException>()("IdempotencyException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InternalServiceException
  extends /*@__PURE__*/ S.TaggedError<InternalServiceException>()(
    "InternalServiceException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidOperationException
  extends /*@__PURE__*/ S.TaggedError<InvalidOperationException>()("InvalidOperationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class NotEligibleException
  extends /*@__PURE__*/ S.TaggedError<NotEligibleException>()("NotEligibleException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()("NotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ServiceAccountException
  extends /*@__PURE__*/ S.TaggedError<ServiceAccountException>()("ServiceAccountException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class TagOperationException
  extends /*@__PURE__*/ S.TaggedError<TagOperationException>()(
    "TagOperationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TagPolicyException
  extends /*@__PURE__*/ S.TaggedError<TagPolicyException>()(
    "TagPolicyException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type AmazonResourceName = string;
export type Name = string;
export type Message = string;
export type DeviceAttribute =
  | "ARN"
  | "PLATFORM"
  | "FORM_FACTOR"
  | "MANUFACTURER"
  | "REMOTE_ACCESS_ENABLED"
  | "REMOTE_DEBUG_ENABLED"
  | "APPIUM_VERSION"
  | "INSTANCE_ARN"
  | "INSTANCE_LABELS"
  | "FLEET_TYPE"
  | "OS_VERSION"
  | "MODEL"
  | "AVAILABILITY"
  | (string & {});
export type RuleOperator =
  | "EQUALS"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUALS"
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUALS"
  | "IN"
  | "NOT_IN"
  | "CONTAINS"
  | (string & {});
export interface Rule {
  attribute?: DeviceAttribute;
  operator?: RuleOperator;
  value?: string;
}
export type Rules = Rule[];
export interface CreateDevicePoolRequest {
  projectArn: string;
  name: string;
  description?: string;
  rules: Rule[];
  maxDevices?: number;
}
export type DevicePoolType = "CURATED" | "PRIVATE" | (string & {});
export interface DevicePool {
  arn?: string;
  name?: string;
  description?: string;
  type?: DevicePoolType;
  rules?: Rule[];
  maxDevices?: number;
}
export interface CreateDevicePoolResult {
  devicePool?: DevicePool;
}
export type PackageIds = string[];
export interface CreateInstanceProfileRequest {
  name: string;
  description?: string;
  packageCleanup?: boolean;
  excludeAppPackagesFromCleanup?: string[];
  rebootAfterUse?: boolean;
}
export interface InstanceProfile {
  arn?: string;
  packageCleanup?: boolean;
  excludeAppPackagesFromCleanup?: string[];
  rebootAfterUse?: boolean;
  name?: string;
  description?: string;
}
export interface CreateInstanceProfileResult {
  instanceProfile?: InstanceProfile;
}
export type NetworkProfileType = "CURATED" | "PRIVATE" | (string & {});
export type PercentInteger = number;
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
export interface CreateNetworkProfileResult {
  networkProfile?: NetworkProfile;
}
export type JobTimeoutMinutes = number;
export type SecurityGroupId = string;
export type VpcSecurityGroupIds = string[];
export type SubnetId = string;
export type VpcSubnetIds = string[];
export type NonEmptyString = string;
export interface VpcConfig {
  securityGroupIds: string[];
  subnetIds: string[];
  vpcId: string;
}
export type EnvironmentVariableName = string;
export type EnvironmentVariableValue = string;
export interface EnvironmentVariable {
  name: string;
  value: string;
}
export type EnvironmentVariables = EnvironmentVariable[];
export type AmazonRoleResourceName = string;
export interface CreateProjectRequest {
  name: string;
  defaultJobTimeoutMinutes?: number;
  vpcConfig?: VpcConfig;
  environmentVariables?: EnvironmentVariable[];
  executionRoleArn?: string;
}
export interface Project {
  arn?: string;
  name?: string;
  defaultJobTimeoutMinutes?: number;
  created?: Date;
  vpcConfig?: VpcConfig;
  environmentVariables?: EnvironmentVariable[];
  executionRoleArn?: string;
}
export interface CreateProjectResult {
  project?: Project;
}
export type AuxiliaryAppArnList = string[];
export type BillingMethod = "METERED" | "UNMETERED" | (string & {});
export type AmazonResourceNames = string[];
export type DeviceProxyHost = string;
export type DeviceProxyPort = number;
export interface DeviceProxy {
  host: string;
  port: number;
}
export type RemoteAccessParameterKey = string;
export type RemoteAccessParameterValue = string;
export type RemoteAccessParameters = { [key: string]: string | undefined };
export interface CreateRemoteAccessSessionConfiguration {
  auxiliaryApps?: string[];
  billingMethod?: BillingMethod;
  vpceConfigurationArns?: string[];
  deviceProxy?: DeviceProxy;
  parameters?: { [key: string]: string | undefined };
}
export type InteractionMode = "INTERACTIVE" | "NO_VIDEO" | "VIDEO_ONLY" | (string & {});
export interface CreateRemoteAccessSessionRequest {
  projectArn: string;
  deviceArn: string;
  appArn?: string;
  instanceArn?: string;
  name?: string;
  configuration?: CreateRemoteAccessSessionConfiguration;
  interactionMode?: InteractionMode;
  skipAppResign?: boolean;
}
export type ExecutionStatus =
  | "PENDING"
  | "PENDING_CONCURRENCY"
  | "PENDING_DEVICE"
  | "PROCESSING"
  | "SCHEDULING"
  | "PREPARING"
  | "RUNNING"
  | "COMPLETED"
  | "STOPPING"
  | (string & {});
export type ExecutionResult =
  | "PENDING"
  | "PASSED"
  | "WARNED"
  | "FAILED"
  | "SKIPPED"
  | "ERRORED"
  | "STOPPED"
  | (string & {});
export type DeviceFormFactor = "PHONE" | "TABLET" | (string & {});
export type DevicePlatform = "ANDROID" | "IOS" | (string & {});
export interface CPU {
  frequency?: string;
  architecture?: string;
  clock?: number;
}
export interface Resolution {
  width?: number;
  height?: number;
}
export type InstanceLabels = string[];
export type InstanceStatus = "IN_USE" | "PREPARING" | "AVAILABLE" | "NOT_AVAILABLE" | (string & {});
export interface DeviceInstance {
  arn?: string;
  deviceArn?: string;
  labels?: string[];
  status?: InstanceStatus;
  udid?: string;
  instanceProfile?: InstanceProfile;
}
export type DeviceInstances = DeviceInstance[];
export type DeviceAvailability =
  | "TEMPORARY_NOT_AVAILABLE"
  | "BUSY"
  | "AVAILABLE"
  | "HIGHLY_AVAILABLE"
  | (string & {});
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
  instances?: DeviceInstance[];
  availability?: DeviceAvailability;
}
export interface DeviceMinutes {
  total?: number;
  metered?: number;
  unmetered?: number;
}
export type SkipAppResign = boolean;
export type SensitiveURL = string | redacted.Redacted<string>;
export interface RemoteAccessEndpoints {
  remoteDriverEndpoint?: string | redacted.Redacted<string>;
  interactiveEndpoint?: string | redacted.Redacted<string>;
}
export interface RemoteAccessSession {
  arn?: string;
  name?: string;
  created?: Date;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  message?: string;
  started?: Date;
  stopped?: Date;
  device?: Device;
  instanceArn?: string;
  billingMethod?: BillingMethod;
  deviceMinutes?: DeviceMinutes;
  endpoint?: string;
  deviceUdid?: string;
  interactionMode?: InteractionMode;
  skipAppResign?: boolean;
  vpcConfig?: VpcConfig;
  deviceProxy?: DeviceProxy;
  appUpload?: string;
  endpoints?: RemoteAccessEndpoints;
}
export interface CreateRemoteAccessSessionResult {
  remoteAccessSession?: RemoteAccessSession;
}
export type ResourceName = string;
export type ResourceDescription = string;
export type SecurityGroupIds = string[];
export type SubnetIds = string[];
export interface TestGridVpcConfig {
  securityGroupIds: string[];
  subnetIds: string[];
  vpcId: string;
}
export interface CreateTestGridProjectRequest {
  name: string;
  description?: string;
  vpcConfig?: TestGridVpcConfig;
}
export type DeviceFarmArn = string;
export interface TestGridProject {
  arn?: string;
  name?: string;
  description?: string;
  vpcConfig?: TestGridVpcConfig;
  created?: Date;
}
export interface CreateTestGridProjectResult {
  testGridProject?: TestGridProject;
}
export type TestGridUrlExpiresInSecondsInput = number;
export interface CreateTestGridUrlRequest {
  projectArn: string;
  expiresInSeconds: number;
}
export type SensitiveString = string | redacted.Redacted<string>;
export interface CreateTestGridUrlResult {
  url?: string | redacted.Redacted<string>;
  expires?: Date;
}
export type UploadType =
  | "ANDROID_APP"
  | "IOS_APP"
  | "WEB_APP"
  | "EXTERNAL_DATA"
  | "APPIUM_JAVA_JUNIT_TEST_PACKAGE"
  | "APPIUM_JAVA_TESTNG_TEST_PACKAGE"
  | "APPIUM_PYTHON_TEST_PACKAGE"
  | "APPIUM_NODE_TEST_PACKAGE"
  | "APPIUM_RUBY_TEST_PACKAGE"
  | "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE"
  | "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE"
  | "APPIUM_WEB_PYTHON_TEST_PACKAGE"
  | "APPIUM_WEB_NODE_TEST_PACKAGE"
  | "APPIUM_WEB_RUBY_TEST_PACKAGE"
  | "CALABASH_TEST_PACKAGE"
  | "INSTRUMENTATION_TEST_PACKAGE"
  | "UIAUTOMATION_TEST_PACKAGE"
  | "UIAUTOMATOR_TEST_PACKAGE"
  | "XCTEST_TEST_PACKAGE"
  | "XCTEST_UI_TEST_PACKAGE"
  | "APPIUM_JAVA_JUNIT_TEST_SPEC"
  | "APPIUM_JAVA_TESTNG_TEST_SPEC"
  | "APPIUM_PYTHON_TEST_SPEC"
  | "APPIUM_NODE_TEST_SPEC"
  | "APPIUM_RUBY_TEST_SPEC"
  | "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC"
  | "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC"
  | "APPIUM_WEB_PYTHON_TEST_SPEC"
  | "APPIUM_WEB_NODE_TEST_SPEC"
  | "APPIUM_WEB_RUBY_TEST_SPEC"
  | "INSTRUMENTATION_TEST_SPEC"
  | "XCTEST_UI_TEST_SPEC"
  | (string & {});
export type ContentType = string;
export interface CreateUploadRequest {
  projectArn: string;
  name: string;
  type: UploadType;
  contentType?: string;
}
export type UploadStatus = "INITIALIZED" | "PROCESSING" | "SUCCEEDED" | "FAILED" | (string & {});
export type Metadata = string;
export type UploadCategory = "CURATED" | "PRIVATE" | (string & {});
export interface Upload {
  arn?: string;
  name?: string;
  created?: Date;
  type?: UploadType;
  status?: UploadStatus;
  url?: string | redacted.Redacted<string>;
  metadata?: string;
  contentType?: string;
  message?: string;
  category?: UploadCategory;
}
export interface CreateUploadResult {
  upload?: Upload;
}
export type VPCEConfigurationName = string;
export type VPCEServiceName = string;
export type ServiceDnsName = string;
export type VPCEConfigurationDescription = string;
export interface CreateVPCEConfigurationRequest {
  vpceConfigurationName: string;
  vpceServiceName: string;
  serviceDnsName: string;
  vpceConfigurationDescription?: string;
}
export interface VPCEConfiguration {
  arn?: string;
  vpceConfigurationName?: string;
  vpceServiceName?: string;
  serviceDnsName?: string;
  vpceConfigurationDescription?: string;
}
export interface CreateVPCEConfigurationResult {
  vpceConfiguration?: VPCEConfiguration;
}
export interface DeleteDevicePoolRequest {
  arn: string;
}
export interface DeleteDevicePoolResult {}
export interface DeleteInstanceProfileRequest {
  arn: string;
}
export interface DeleteInstanceProfileResult {}
export interface DeleteNetworkProfileRequest {
  arn: string;
}
export interface DeleteNetworkProfileResult {}
export interface DeleteProjectRequest {
  arn: string;
}
export interface DeleteProjectResult {}
export interface DeleteRemoteAccessSessionRequest {
  arn: string;
}
export interface DeleteRemoteAccessSessionResult {}
export interface DeleteRunRequest {
  arn: string;
}
export interface DeleteRunResult {}
export interface DeleteTestGridProjectRequest {
  projectArn: string;
}
export interface DeleteTestGridProjectResult {}
export interface DeleteUploadRequest {
  arn: string;
}
export interface DeleteUploadResult {}
export interface DeleteVPCEConfigurationRequest {
  arn: string;
}
export interface DeleteVPCEConfigurationResult {}
export interface GetAccountSettingsRequest {}
export type AWSAccountNumber = string;
export type PurchasedDevicesMap = { [key in DevicePlatform]?: number };
export interface TrialMinutes {
  total?: number;
  remaining?: number;
}
export type MaxSlotMap = { [key: string]: number | undefined };
export interface AccountSettings {
  awsAccountNumber?: string;
  unmeteredDevices?: { [key: string]: number | undefined };
  unmeteredRemoteAccessDevices?: { [key: string]: number | undefined };
  maxJobTimeoutMinutes?: number;
  trialMinutes?: TrialMinutes;
  maxSlots?: { [key: string]: number | undefined };
  defaultJobTimeoutMinutes?: number;
  skipAppResign?: boolean;
}
export interface GetAccountSettingsResult {
  accountSettings?: AccountSettings;
}
export interface GetDeviceRequest {
  arn: string;
}
export interface GetDeviceResult {
  device?: Device;
}
export interface GetDeviceInstanceRequest {
  arn: string;
}
export interface GetDeviceInstanceResult {
  deviceInstance?: DeviceInstance;
}
export interface GetDevicePoolRequest {
  arn: string;
}
export interface GetDevicePoolResult {
  devicePool?: DevicePool;
}
export type TestType =
  | "BUILTIN_FUZZ"
  | "APPIUM_JAVA_JUNIT"
  | "APPIUM_JAVA_TESTNG"
  | "APPIUM_PYTHON"
  | "APPIUM_NODE"
  | "APPIUM_RUBY"
  | "APPIUM_WEB_JAVA_JUNIT"
  | "APPIUM_WEB_JAVA_TESTNG"
  | "APPIUM_WEB_PYTHON"
  | "APPIUM_WEB_NODE"
  | "APPIUM_WEB_RUBY"
  | "INSTRUMENTATION"
  | "XCTEST"
  | "XCTEST_UI"
  | (string & {});
export type Filter = string;
export type TestParameters = { [key: string]: string | undefined };
export interface ScheduleRunTest {
  type: TestType;
  testPackageArn?: string;
  testSpecArn?: string;
  filter?: string;
  parameters?: { [key: string]: string | undefined };
}
export interface Location {
  latitude: number;
  longitude: number;
}
export type IosPaths = string[];
export type AndroidPaths = string[];
export type DeviceHostPaths = string[];
export interface CustomerArtifactPaths {
  iosPaths?: string[];
  androidPaths?: string[];
  deviceHostPaths?: string[];
}
export interface Radios {
  wifi?: boolean;
  bluetooth?: boolean;
  nfc?: boolean;
  gps?: boolean;
}
export type InsightsType = "TEST_REPORT" | (string & {});
export type InsightsTypes = InsightsType[];
export interface ScheduleRunConfiguration {
  extraDataPackageArn?: string;
  networkProfileArn?: string;
  locale?: string;
  location?: Location;
  vpceConfigurationArns?: string[];
  deviceProxy?: DeviceProxy;
  customerArtifactPaths?: CustomerArtifactPaths;
  radios?: Radios;
  auxiliaryApps?: string[];
  billingMethod?: BillingMethod;
  environmentVariables?: EnvironmentVariable[];
  executionRoleArn?: string;
  insightsTypes?: InsightsType[];
}
export interface GetDevicePoolCompatibilityRequest {
  devicePoolArn: string;
  appArn?: string;
  testType?: TestType;
  test?: ScheduleRunTest;
  configuration?: ScheduleRunConfiguration;
  projectArn?: string;
}
export interface IncompatibilityMessage {
  message?: string;
  type?: DeviceAttribute;
}
export type IncompatibilityMessages = IncompatibilityMessage[];
export interface DevicePoolCompatibilityResult {
  device?: Device;
  compatible?: boolean;
  incompatibilityMessages?: IncompatibilityMessage[];
}
export type DevicePoolCompatibilityResults = DevicePoolCompatibilityResult[];
export interface GetDevicePoolCompatibilityResult {
  compatibleDevices?: DevicePoolCompatibilityResult[];
  incompatibleDevices?: DevicePoolCompatibilityResult[];
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
export interface Counters {
  total?: number;
  passed?: number;
  failed?: number;
  warned?: number;
  errored?: number;
  stopped?: number;
  skipped?: number;
}
export type VideoCapture = boolean;
export type ReportStatus =
  | "PENDING"
  | "RUNNING"
  | "COMPLETED"
  | "SKIPPED"
  | "ERRORED"
  | (string & {});
export type ReportMessage = string;
export interface TestReportMetrics {
  testsTotal?: number;
  testsPassed?: number;
  testsFailed?: number;
  testsSkipped?: number;
  testsErrored?: number;
  testsOther?: number;
  testsPassedPercentage?: number;
  totalTestExecutionDurationSeconds?: number;
  medianTestExecutionDurationSeconds?: number;
}
export interface TestReport {
  message?: string;
  metrics?: TestReportMetrics;
  testDetailsUrl?: string | redacted.Redacted<string>;
}
export interface JobInsights {
  status?: ReportStatus;
  testReport?: TestReport;
}
export interface Job {
  arn?: string;
  name?: string;
  type?: TestType;
  created?: Date;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  started?: Date;
  stopped?: Date;
  counters?: Counters;
  message?: string;
  device?: Device;
  instanceArn?: string;
  deviceMinutes?: DeviceMinutes;
  videoEndpoint?: string;
  videoCapture?: boolean;
  insights?: JobInsights;
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
export type PaginationToken = string;
export interface GetOfferingStatusRequest {
  nextToken?: string;
}
export type OfferingIdentifier = string;
export type OfferingTransactionType = "PURCHASE" | "RENEW" | "SYSTEM" | (string & {});
export type OfferingType = "RECURRING" | (string & {});
export type CurrencyCode = "USD" | (string & {});
export interface MonetaryAmount {
  amount?: number;
  currencyCode?: CurrencyCode;
}
export type RecurringChargeFrequency = "MONTHLY" | (string & {});
export interface RecurringCharge {
  cost?: MonetaryAmount;
  frequency?: RecurringChargeFrequency;
}
export type RecurringCharges = RecurringCharge[];
export interface Offering {
  id?: string;
  description?: string;
  type?: OfferingType;
  platform?: DevicePlatform;
  recurringCharges?: RecurringCharge[];
}
export interface OfferingStatus {
  type?: OfferingTransactionType;
  offering?: Offering;
  quantity?: number;
  effectiveOn?: Date;
}
export type OfferingStatusMap = { [key: string]: OfferingStatus | undefined };
export interface GetOfferingStatusResult {
  current?: { [key: string]: OfferingStatus | undefined };
  nextPeriod?: { [key: string]: OfferingStatus | undefined };
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
export type ExecutionResultCode = "PARSING_FAILED" | "VPC_ENDPOINT_SETUP_FAILED" | (string & {});
export type DeviceFilterAttribute =
  | "ARN"
  | "PLATFORM"
  | "OS_VERSION"
  | "MODEL"
  | "AVAILABILITY"
  | "FORM_FACTOR"
  | "MANUFACTURER"
  | "REMOTE_ACCESS_ENABLED"
  | "REMOTE_DEBUG_ENABLED"
  | "INSTANCE_ARN"
  | "INSTANCE_LABELS"
  | "FLEET_TYPE"
  | (string & {});
export type DeviceFilterValues = string[];
export interface DeviceFilter {
  attribute: DeviceFilterAttribute;
  operator: RuleOperator;
  values: string[];
}
export type DeviceFilters = DeviceFilter[];
export interface DeviceSelectionResult {
  filters?: DeviceFilter[];
  matchedDevicesCount?: number;
  maxDevices?: number;
}
export interface JobReportMetrics {
  jobsTotal?: number;
  jobsPassed?: number;
  jobsFailed?: number;
  jobsSkipped?: number;
  jobsErrored?: number;
  jobsStopped?: number;
  jobsPassedPercentage?: number;
  totalJobExecutionDurationSeconds?: number;
  averageJobExecutionDurationSeconds?: number;
  medianJobExecutionDurationSeconds?: number;
}
export interface JobReport {
  message?: string;
  metrics?: JobReportMetrics;
  jobDetailsUrl?: string | redacted.Redacted<string>;
}
export interface RunInsights {
  status?: ReportStatus;
  jobReport?: JobReport;
}
export interface Run {
  arn?: string;
  name?: string;
  type?: TestType;
  platform?: DevicePlatform;
  created?: Date;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  started?: Date;
  stopped?: Date;
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
  executionRoleArn?: string;
  environmentVariables?: EnvironmentVariable[];
  insightsTypes?: InsightsType[];
  insights?: RunInsights;
}
export interface GetRunResult {
  run?: Run;
}
export interface GetSuiteRequest {
  arn: string;
}
export interface Suite {
  arn?: string;
  name?: string;
  type?: TestType;
  created?: Date;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  started?: Date;
  stopped?: Date;
  counters?: Counters;
  message?: string;
  deviceMinutes?: DeviceMinutes;
}
export interface GetSuiteResult {
  suite?: Suite;
}
export interface GetTestRequest {
  arn: string;
}
export interface Test {
  arn?: string;
  name?: string;
  type?: TestType;
  created?: Date;
  status?: ExecutionStatus;
  result?: ExecutionResult;
  started?: Date;
  stopped?: Date;
  counters?: Counters;
  message?: string;
  deviceMinutes?: DeviceMinutes;
}
export interface GetTestResult {
  test?: Test;
}
export interface GetTestGridProjectRequest {
  projectArn: string;
}
export interface GetTestGridProjectResult {
  testGridProject?: TestGridProject;
}
export type ResourceId = string;
export interface GetTestGridSessionRequest {
  projectArn?: string;
  sessionId?: string;
  sessionArn?: string;
}
export type TestGridSessionStatus = "ACTIVE" | "CLOSED" | "ERRORED" | (string & {});
export interface TestGridSession {
  arn?: string;
  status?: TestGridSessionStatus;
  created?: Date;
  ended?: Date;
  billingMinutes?: number;
  seleniumProperties?: string;
}
export interface GetTestGridSessionResult {
  testGridSession?: TestGridSession;
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
export interface InstallToRemoteAccessSessionRequest {
  remoteAccessSessionArn: string;
  appArn: string;
}
export interface InstallToRemoteAccessSessionResult {
  appUpload?: Upload;
}
export type ArtifactCategory = "SCREENSHOT" | "FILE" | "LOG" | (string & {});
export interface ListArtifactsRequest {
  arn: string;
  type: ArtifactCategory;
  nextToken?: string;
}
export type ArtifactType =
  | "UNKNOWN"
  | "SCREENSHOT"
  | "DEVICE_LOG"
  | "MESSAGE_LOG"
  | "VIDEO_LOG"
  | "RESULT_LOG"
  | "SERVICE_LOG"
  | "WEBKIT_LOG"
  | "INSTRUMENTATION_OUTPUT"
  | "EXERCISER_MONKEY_OUTPUT"
  | "CALABASH_JSON_OUTPUT"
  | "CALABASH_PRETTY_OUTPUT"
  | "CALABASH_STANDARD_OUTPUT"
  | "CALABASH_JAVA_XML_OUTPUT"
  | "AUTOMATION_OUTPUT"
  | "APPIUM_SERVER_OUTPUT"
  | "APPIUM_JAVA_OUTPUT"
  | "APPIUM_JAVA_XML_OUTPUT"
  | "APPIUM_PYTHON_OUTPUT"
  | "APPIUM_PYTHON_XML_OUTPUT"
  | "EXPLORER_EVENT_LOG"
  | "EXPLORER_SUMMARY_LOG"
  | "APPLICATION_CRASH_REPORT"
  | "XCTEST_LOG"
  | "VIDEO"
  | "CUSTOMER_ARTIFACT"
  | "CUSTOMER_ARTIFACT_LOG"
  | "TESTSPEC_OUTPUT"
  | (string & {});
export type URL = string;
export interface Artifact {
  arn?: string;
  name?: string;
  type?: ArtifactType;
  extension?: string;
  url?: string;
}
export type Artifacts = Artifact[];
export interface ListArtifactsResult {
  artifacts?: Artifact[];
  nextToken?: string;
}
export interface ListDeviceInstancesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListDeviceInstancesResult {
  deviceInstances?: DeviceInstance[];
  nextToken?: string;
}
export interface ListDevicePoolsRequest {
  arn: string;
  type?: DevicePoolType;
  nextToken?: string;
}
export type DevicePools = DevicePool[];
export interface ListDevicePoolsResult {
  devicePools?: DevicePool[];
  nextToken?: string;
}
export interface ListDevicesRequest {
  arn?: string;
  nextToken?: string;
  filters?: DeviceFilter[];
}
export type Devices = Device[];
export interface ListDevicesResult {
  devices?: Device[];
  nextToken?: string;
}
export interface ListInstanceProfilesRequest {
  maxResults?: number;
  nextToken?: string;
}
export type InstanceProfiles = InstanceProfile[];
export interface ListInstanceProfilesResult {
  instanceProfiles?: InstanceProfile[];
  nextToken?: string;
}
export interface ListJobsRequest {
  arn: string;
  nextToken?: string;
}
export type Jobs = Job[];
export interface ListJobsResult {
  jobs?: Job[];
  nextToken?: string;
}
export interface ListNetworkProfilesRequest {
  arn: string;
  type?: NetworkProfileType;
  nextToken?: string;
}
export type NetworkProfiles = NetworkProfile[];
export interface ListNetworkProfilesResult {
  networkProfiles?: NetworkProfile[];
  nextToken?: string;
}
export interface ListOfferingPromotionsRequest {
  nextToken?: string;
}
export type OfferingPromotionIdentifier = string;
export interface OfferingPromotion {
  id?: string;
  description?: string;
}
export type OfferingPromotions = OfferingPromotion[];
export interface ListOfferingPromotionsResult {
  offeringPromotions?: OfferingPromotion[];
  nextToken?: string;
}
export interface ListOfferingsRequest {
  nextToken?: string;
}
export type Offerings = Offering[];
export interface ListOfferingsResult {
  offerings?: Offering[];
  nextToken?: string;
}
export interface ListOfferingTransactionsRequest {
  nextToken?: string;
}
export type TransactionIdentifier = string;
export interface OfferingTransaction {
  offeringStatus?: OfferingStatus;
  transactionId?: string;
  offeringPromotionId?: string;
  createdOn?: Date;
  cost?: MonetaryAmount;
}
export type OfferingTransactions = OfferingTransaction[];
export interface ListOfferingTransactionsResult {
  offeringTransactions?: OfferingTransaction[];
  nextToken?: string;
}
export interface ListProjectsRequest {
  arn?: string;
  nextToken?: string;
}
export type Projects = Project[];
export interface ListProjectsResult {
  projects?: Project[];
  nextToken?: string;
}
export interface ListRemoteAccessSessionsRequest {
  arn: string;
  nextToken?: string;
}
export type RemoteAccessSessions = RemoteAccessSession[];
export interface ListRemoteAccessSessionsResult {
  remoteAccessSessions?: RemoteAccessSession[];
  nextToken?: string;
}
export interface ListRunsRequest {
  arn: string;
  nextToken?: string;
}
export type Runs = Run[];
export interface ListRunsResult {
  runs?: Run[];
  nextToken?: string;
}
export interface ListSamplesRequest {
  arn: string;
  nextToken?: string;
}
export type SampleType =
  | "CPU"
  | "MEMORY"
  | "THREADS"
  | "RX_RATE"
  | "TX_RATE"
  | "RX"
  | "TX"
  | "NATIVE_FRAMES"
  | "NATIVE_FPS"
  | "NATIVE_MIN_DRAWTIME"
  | "NATIVE_AVG_DRAWTIME"
  | "NATIVE_MAX_DRAWTIME"
  | "OPENGL_FRAMES"
  | "OPENGL_FPS"
  | "OPENGL_MIN_DRAWTIME"
  | "OPENGL_AVG_DRAWTIME"
  | "OPENGL_MAX_DRAWTIME"
  | (string & {});
export interface Sample {
  arn?: string;
  type?: SampleType;
  url?: string;
}
export type Samples = Sample[];
export interface ListSamplesResult {
  samples?: Sample[];
  nextToken?: string;
}
export interface ListSuitesRequest {
  arn: string;
  nextToken?: string;
}
export type Suites = Suite[];
export interface ListSuitesResult {
  suites?: Suite[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export type MaxPageSize = number;
export interface ListTestGridProjectsRequest {
  maxResult?: number;
  nextToken?: string;
}
export type TestGridProjects = TestGridProject[];
export interface ListTestGridProjectsResult {
  testGridProjects?: TestGridProject[];
  nextToken?: string;
}
export interface ListTestGridSessionActionsRequest {
  sessionArn: string;
  maxResult?: number;
  nextToken?: string;
}
export interface TestGridSessionAction {
  action?: string;
  started?: Date;
  duration?: number;
  statusCode?: string;
  requestMethod?: string;
}
export type TestGridSessionActions = TestGridSessionAction[];
export interface ListTestGridSessionActionsResult {
  actions?: TestGridSessionAction[];
  nextToken?: string;
}
export type TestGridSessionArtifactCategory = "VIDEO" | "LOG" | (string & {});
export interface ListTestGridSessionArtifactsRequest {
  sessionArn: string;
  type?: TestGridSessionArtifactCategory;
  maxResult?: number;
  nextToken?: string;
}
export type TestGridSessionArtifactType = "UNKNOWN" | "VIDEO" | "SELENIUM_LOG" | (string & {});
export interface TestGridSessionArtifact {
  filename?: string;
  type?: TestGridSessionArtifactType;
  url?: string | redacted.Redacted<string>;
}
export type TestGridSessionArtifacts = TestGridSessionArtifact[];
export interface ListTestGridSessionArtifactsResult {
  artifacts?: TestGridSessionArtifact[];
  nextToken?: string;
}
export interface ListTestGridSessionsRequest {
  projectArn: string;
  status?: TestGridSessionStatus;
  creationTimeAfter?: Date;
  creationTimeBefore?: Date;
  endTimeAfter?: Date;
  endTimeBefore?: Date;
  maxResult?: number;
  nextToken?: string;
}
export type TestGridSessions = TestGridSession[];
export interface ListTestGridSessionsResult {
  testGridSessions?: TestGridSession[];
  nextToken?: string;
}
export interface ListTestsRequest {
  arn: string;
  nextToken?: string;
}
export type Tests = Test[];
export interface ListTestsResult {
  tests?: Test[];
  nextToken?: string;
}
export interface ListUniqueProblemsRequest {
  arn: string;
  nextToken?: string;
}
export interface ProblemDetail {
  arn?: string;
  name?: string;
}
export interface Problem {
  run?: ProblemDetail;
  job?: ProblemDetail;
  suite?: ProblemDetail;
  test?: ProblemDetail;
  device?: Device;
  result?: ExecutionResult;
  message?: string;
}
export type Problems = Problem[];
export interface UniqueProblem {
  message?: string;
  problems?: Problem[];
}
export type UniqueProblems = UniqueProblem[];
export type UniqueProblemsByExecutionResultMap = { [key in ExecutionResult]?: UniqueProblem[] };
export interface ListUniqueProblemsResult {
  uniqueProblems?: { [key: string]: UniqueProblem[] | undefined };
  nextToken?: string;
}
export interface ListUploadsRequest {
  arn: string;
  type?: UploadType;
  nextToken?: string;
}
export type Uploads = Upload[];
export interface ListUploadsResult {
  uploads?: Upload[];
  nextToken?: string;
}
export interface ListVPCEConfigurationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export type VPCEConfigurations = VPCEConfiguration[];
export interface ListVPCEConfigurationsResult {
  vpceConfigurations?: VPCEConfiguration[];
  nextToken?: string;
}
export interface PurchaseOfferingRequest {
  offeringId: string;
  quantity: number;
  offeringPromotionId?: string;
}
export interface PurchaseOfferingResult {
  offeringTransaction?: OfferingTransaction;
}
export interface RenewOfferingRequest {
  offeringId: string;
  quantity: number;
}
export interface RenewOfferingResult {
  offeringTransaction?: OfferingTransaction;
}
export interface DeviceSelectionConfiguration {
  filters: DeviceFilter[];
  maxDevices: number;
}
export type AccountsCleanup = boolean;
export type AppPackagesCleanup = boolean;
export interface ExecutionConfiguration {
  jobTimeoutMinutes?: number;
  accountsCleanup?: boolean;
  appPackagesCleanup?: boolean;
  videoCapture?: boolean;
  skipAppResign?: boolean;
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
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateDeviceInstanceRequest {
  arn: string;
  profileArn?: string;
  labels?: string[];
}
export interface UpdateDeviceInstanceResult {
  deviceInstance?: DeviceInstance;
}
export interface UpdateDevicePoolRequest {
  arn: string;
  name?: string;
  description?: string;
  rules?: Rule[];
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
  excludeAppPackagesFromCleanup?: string[];
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
  environmentVariables?: EnvironmentVariable[];
  executionRoleArn?: string;
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
export type ExceptionMessage = string;
export type CreateDevicePoolError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Creates a device pool.
 */
export const createDevicePool: API.OperationMethod<
  CreateDevicePoolRequest,
  CreateDevicePoolResult,
  CreateDevicePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<CreateDevicePoolRequest>,
  output: __S(4) as any as S.Schema<CreateDevicePoolResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDevicePool",
}));

export type CreateInstanceProfileError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Creates a profile that can be applied to one or more private fleet device
 * instances.
 */
export const createInstanceProfile: API.OperationMethod<
  CreateInstanceProfileRequest,
  CreateInstanceProfileResult,
  CreateInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<CreateInstanceProfileRequest>,
  output: __S(8) as any as S.Schema<CreateInstanceProfileResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInstanceProfile",
}));

export type CreateNetworkProfileError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Creates a network profile.
 */
export const createNetworkProfile: API.OperationMethod<
  CreateNetworkProfileRequest,
  CreateNetworkProfileResult,
  CreateNetworkProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<CreateNetworkProfileRequest>,
  output: __S(11) as any as S.Schema<CreateNetworkProfileResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateNetworkProfile",
}));

export type CreateProjectError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | TagOperationException
  | CommonErrors;
/**
 * Creates a project.
 */
export const createProject: API.OperationMethod<
  CreateProjectRequest,
  CreateProjectResult,
  CreateProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<CreateProjectRequest>,
  output: __S(17) as any as S.Schema<CreateProjectResult>,
  errors: [
    ArgumentException,
    LimitExceededException,
    NotFoundException,
    ServiceAccountException,
    TagOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProject",
}));

export type CreateRemoteAccessSessionError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Specifies and starts a remote access session.
 */
export const createRemoteAccessSession: API.OperationMethod<
  CreateRemoteAccessSessionRequest,
  CreateRemoteAccessSessionResult,
  CreateRemoteAccessSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<CreateRemoteAccessSessionRequest>,
  output: __S(30) as any as S.Schema<CreateRemoteAccessSessionResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRemoteAccessSession",
}));

export type CreateTestGridProjectError =
  | ArgumentException
  | InternalServiceException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates a Selenium testing project. Projects are used to track TestGridSession
 * instances.
 */
export const createTestGridProject: API.OperationMethod<
  CreateTestGridProjectRequest,
  CreateTestGridProjectResult,
  CreateTestGridProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<CreateTestGridProjectRequest>,
  output: __S(33) as any as S.Schema<CreateTestGridProjectResult>,
  errors: [ArgumentException, InternalServiceException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTestGridProject",
}));

export type CreateTestGridUrlError =
  | ArgumentException
  | InternalServiceException
  | NotFoundException
  | CommonErrors;
/**
 * Creates a signed, short-term URL that can be passed to a Selenium `RemoteWebDriver`
 * constructor.
 */
export const createTestGridUrl: API.OperationMethod<
  CreateTestGridUrlRequest,
  CreateTestGridUrlResult,
  CreateTestGridUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<CreateTestGridUrlRequest>,
  output: __S(35) as any as S.Schema<CreateTestGridUrlResult>,
  errors: [ArgumentException, InternalServiceException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTestGridUrl",
}));

export type CreateUploadError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Uploads an app or test scripts.
 */
export const createUpload: API.OperationMethod<
  CreateUploadRequest,
  CreateUploadResult,
  CreateUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<CreateUploadRequest>,
  output: __S(38) as any as S.Schema<CreateUploadResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUpload",
}));

export type CreateVPCEConfigurationError =
  | ArgumentException
  | LimitExceededException
  | ServiceAccountException
  | CommonErrors;
/**
 * Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud
 * (VPC) endpoint.
 */
export const createVPCEConfiguration: API.OperationMethod<
  CreateVPCEConfigurationRequest,
  CreateVPCEConfigurationResult,
  CreateVPCEConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(39) as any as S.Schema<CreateVPCEConfigurationRequest>,
  output: __S(41) as any as S.Schema<CreateVPCEConfigurationResult>,
  errors: [ArgumentException, LimitExceededException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateVPCEConfiguration",
}));

export type DeleteDevicePoolError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Deletes a device pool given the pool ARN. Does not allow deletion of curated pools
 * owned by the system.
 */
export const deleteDevicePool: API.OperationMethod<
  DeleteDevicePoolRequest,
  DeleteDevicePoolResult,
  DeleteDevicePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<DeleteDevicePoolRequest>,
  output: __S(43) as any as S.Schema<DeleteDevicePoolResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDevicePool",
}));

export type DeleteInstanceProfileError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Deletes a profile that can be applied to one or more private device instances.
 */
export const deleteInstanceProfile: API.OperationMethod<
  DeleteInstanceProfileRequest,
  DeleteInstanceProfileResult,
  DeleteInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<DeleteInstanceProfileRequest>,
  output: __S(45) as any as S.Schema<DeleteInstanceProfileResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInstanceProfile",
}));

export type DeleteNetworkProfileError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Deletes a network profile.
 */
export const deleteNetworkProfile: API.OperationMethod<
  DeleteNetworkProfileRequest,
  DeleteNetworkProfileResult,
  DeleteNetworkProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46) as any as S.Schema<DeleteNetworkProfileRequest>,
  output: __S(45) as any as S.Schema<DeleteNetworkProfileResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNetworkProfile",
}));

export type DeleteProjectError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Deletes an AWS Device Farm project, given the project ARN. You cannot delete a project if it has an active run or session.
 *
 * You cannot undo this operation.
 */
export const deleteProject: API.OperationMethod<
  DeleteProjectRequest,
  DeleteProjectResult,
  DeleteProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47) as any as S.Schema<DeleteProjectRequest>,
  output: __S(48) as any as S.Schema<DeleteProjectResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProject",
}));

export type DeleteRemoteAccessSessionError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Deletes a completed remote access session and its results. You cannot delete a remote access session if it is still active.
 *
 * You cannot undo this operation.
 */
export const deleteRemoteAccessSession: API.OperationMethod<
  DeleteRemoteAccessSessionRequest,
  DeleteRemoteAccessSessionResult,
  DeleteRemoteAccessSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<DeleteRemoteAccessSessionRequest>,
  output: __S(45) as any as S.Schema<DeleteRemoteAccessSessionResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRemoteAccessSession",
}));

export type DeleteRunError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Deletes the run, given the run ARN. You cannot delete a run if it is still active.
 *
 * You cannot undo this operation.
 */
export const deleteRun: API.OperationMethod<
  DeleteRunRequest,
  DeleteRunResult,
  DeleteRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<DeleteRunRequest>,
  output: __S(48) as any as S.Schema<DeleteRunResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRun",
}));

export type DeleteTestGridProjectError =
  | ArgumentException
  | CannotDeleteException
  | InternalServiceException
  | NotFoundException
  | CommonErrors;
/**
 * Deletes a Selenium testing project and all content generated under it. You cannot delete a project if it has active sessions.
 *
 * You cannot undo this operation.
 */
export const deleteTestGridProject: API.OperationMethod<
  DeleteTestGridProjectRequest,
  DeleteTestGridProjectResult,
  DeleteTestGridProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<DeleteTestGridProjectRequest>,
  output: __S(45) as any as S.Schema<DeleteTestGridProjectResult>,
  errors: [ArgumentException, CannotDeleteException, InternalServiceException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTestGridProject",
}));

export type DeleteUploadError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Deletes an upload given the upload ARN.
 */
export const deleteUpload: API.OperationMethod<
  DeleteUploadRequest,
  DeleteUploadResult,
  DeleteUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52) as any as S.Schema<DeleteUploadRequest>,
  output: __S(48) as any as S.Schema<DeleteUploadResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUpload",
}));

export type DeleteVPCEConfigurationError =
  | ArgumentException
  | InvalidOperationException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
 */
export const deleteVPCEConfiguration: API.OperationMethod<
  DeleteVPCEConfigurationRequest,
  DeleteVPCEConfigurationResult,
  DeleteVPCEConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(53) as any as S.Schema<DeleteVPCEConfigurationRequest>,
  output: __S(45) as any as S.Schema<DeleteVPCEConfigurationResult>,
  errors: [
    ArgumentException,
    InvalidOperationException,
    NotFoundException,
    ServiceAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteVPCEConfiguration",
}));

export type GetAccountSettingsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the
 * account.
 */
export const getAccountSettings: API.OperationMethod<
  GetAccountSettingsRequest,
  GetAccountSettingsResult,
  GetAccountSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(54) as any as S.Schema<GetAccountSettingsRequest>,
  output: __S(59) as any as S.Schema<GetAccountSettingsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountSettings",
}));

export type GetDeviceError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about a unique device type.
 */
export const getDevice: API.OperationMethod<
  GetDeviceRequest,
  GetDeviceResult,
  GetDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<GetDeviceRequest>,
  output: __S(61) as any as S.Schema<GetDeviceResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDevice",
}));

export type GetDeviceInstanceError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns information about a device instance that belongs to a private device fleet.
 */
export const getDeviceInstance: API.OperationMethod<
  GetDeviceInstanceRequest,
  GetDeviceInstanceResult,
  GetDeviceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<GetDeviceInstanceRequest>,
  output: __S(63) as any as S.Schema<GetDeviceInstanceResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDeviceInstance",
}));

export type GetDevicePoolError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about a device pool.
 */
export const getDevicePool: API.OperationMethod<
  GetDevicePoolRequest,
  GetDevicePoolResult,
  GetDevicePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<GetDevicePoolRequest>,
  output: __S(4) as any as S.Schema<GetDevicePoolResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDevicePool",
}));

export type GetDevicePoolCompatibilityError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about compatibility with a device pool.
 */
export const getDevicePoolCompatibility: API.OperationMethod<
  GetDevicePoolCompatibilityRequest,
  GetDevicePoolCompatibilityResult,
  GetDevicePoolCompatibilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<GetDevicePoolCompatibilityRequest>,
  output: __S(76) as any as S.Schema<GetDevicePoolCompatibilityResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDevicePoolCompatibility",
}));

export type GetInstanceProfileError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns information about the specified instance profile.
 */
export const getInstanceProfile: API.OperationMethod<
  GetInstanceProfileRequest,
  GetInstanceProfileResult,
  GetInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<GetInstanceProfileRequest>,
  output: __S(78) as any as S.Schema<GetInstanceProfileResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInstanceProfile",
}));

export type GetJobError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about a job.
 */
export const getJob: API.OperationMethod<
  GetJobRequest,
  GetJobResult,
  GetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79) as any as S.Schema<GetJobRequest>,
  output: __S(85) as any as S.Schema<GetJobResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetJob",
}));

export type GetNetworkProfileError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns information about a network profile.
 */
export const getNetworkProfile: API.OperationMethod<
  GetNetworkProfileRequest,
  GetNetworkProfileResult,
  GetNetworkProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86) as any as S.Schema<GetNetworkProfileRequest>,
  output: __S(87) as any as S.Schema<GetNetworkProfileResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkProfile",
}));

export type GetOfferingStatusError =
  | ArgumentException
  | LimitExceededException
  | NotEligibleException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets the current status and future status of all offerings purchased by an AWS account. The response
 * indicates how many offerings are currently available and the offerings that will be available in the next
 * period. The API returns a `NotEligible` error if the user is not permitted to invoke the
 * operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.
 */
export const getOfferingStatus: API.PaginatedOperationMethod<
  GetOfferingStatusRequest,
  GetOfferingStatusResult,
  GetOfferingStatusError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(88) as any as S.Schema<GetOfferingStatusRequest>,
  output: __S(95) as any as S.Schema<GetOfferingStatusResult>,
  errors: [
    ArgumentException,
    LimitExceededException,
    NotEligibleException,
    NotFoundException,
    ServiceAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetOfferingStatus",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type GetProjectError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about a project.
 */
export const getProject: API.OperationMethod<
  GetProjectRequest,
  GetProjectResult,
  GetProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(96) as any as S.Schema<GetProjectRequest>,
  output: __S(17) as any as S.Schema<GetProjectResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProject",
}));

export type GetRemoteAccessSessionError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns a link to a currently running remote access session.
 */
export const getRemoteAccessSession: API.OperationMethod<
  GetRemoteAccessSessionRequest,
  GetRemoteAccessSessionResult,
  GetRemoteAccessSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97) as any as S.Schema<GetRemoteAccessSessionRequest>,
  output: __S(30) as any as S.Schema<GetRemoteAccessSessionResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRemoteAccessSession",
}));

export type GetRunError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about a run.
 */
export const getRun: API.OperationMethod<
  GetRunRequest,
  GetRunResult,
  GetRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98) as any as S.Schema<GetRunRequest>,
  output: __S(106) as any as S.Schema<GetRunResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRun",
}));

export type GetSuiteError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about a suite.
 */
export const getSuite: API.OperationMethod<
  GetSuiteRequest,
  GetSuiteResult,
  GetSuiteError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107) as any as S.Schema<GetSuiteRequest>,
  output: __S(109) as any as S.Schema<GetSuiteResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSuite",
}));

export type GetTestError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about a test.
 */
export const getTest: API.OperationMethod<
  GetTestRequest,
  GetTestResult,
  GetTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110) as any as S.Schema<GetTestRequest>,
  output: __S(111) as any as S.Schema<GetTestResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTest",
}));

export type GetTestGridProjectError =
  | ArgumentException
  | InternalServiceException
  | NotFoundException
  | CommonErrors;
/**
 * Retrieves information about a Selenium testing project.
 */
export const getTestGridProject: API.OperationMethod<
  GetTestGridProjectRequest,
  GetTestGridProjectResult,
  GetTestGridProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<GetTestGridProjectRequest>,
  output: __S(113) as any as S.Schema<GetTestGridProjectResult>,
  errors: [ArgumentException, InternalServiceException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTestGridProject",
}));

export type GetTestGridSessionError =
  | ArgumentException
  | InternalServiceException
  | NotFoundException
  | CommonErrors;
/**
 * A session is an instance of a browser created through a `RemoteWebDriver` with the URL from
 * CreateTestGridUrlResult. You can use the following to look up sessions:
 *
 * - The session ARN.
 *
 * - The project ARN and a session ID.
 */
export const getTestGridSession: API.OperationMethod<
  GetTestGridSessionRequest,
  GetTestGridSessionResult,
  GetTestGridSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114) as any as S.Schema<GetTestGridSessionRequest>,
  output: __S(116) as any as S.Schema<GetTestGridSessionResult>,
  errors: [ArgumentException, InternalServiceException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTestGridSession",
}));

export type GetUploadError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about an upload.
 */
export const getUpload: API.OperationMethod<
  GetUploadRequest,
  GetUploadResult,
  GetUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117) as any as S.Schema<GetUploadRequest>,
  output: __S(38) as any as S.Schema<GetUploadResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUpload",
}));

export type GetVPCEConfigurationError =
  | ArgumentException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns information about the configuration settings for your Amazon Virtual Private
 * Cloud (VPC) endpoint.
 */
export const getVPCEConfiguration: API.OperationMethod<
  GetVPCEConfigurationRequest,
  GetVPCEConfigurationResult,
  GetVPCEConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118) as any as S.Schema<GetVPCEConfigurationRequest>,
  output: __S(41) as any as S.Schema<GetVPCEConfigurationResult>,
  errors: [ArgumentException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetVPCEConfiguration",
}));

export type InstallToRemoteAccessSessionError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Installs an application to the device in a remote access session. For Android
 * applications, the file must be in .apk format. For iOS applications, the file must be in
 * .ipa format.
 */
export const installToRemoteAccessSession: API.OperationMethod<
  InstallToRemoteAccessSessionRequest,
  InstallToRemoteAccessSessionResult,
  InstallToRemoteAccessSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119) as any as S.Schema<InstallToRemoteAccessSessionRequest>,
  output: __S(120) as any as S.Schema<InstallToRemoteAccessSessionResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InstallToRemoteAccessSession",
}));

export type ListArtifactsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about artifacts.
 */
export const listArtifacts: API.PaginatedOperationMethod<
  ListArtifactsRequest,
  ListArtifactsResult,
  ListArtifactsError,
  Credentials | HttpClient.HttpClient,
  Artifact
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(121) as any as S.Schema<ListArtifactsRequest>,
  output: __S(124) as any as S.Schema<ListArtifactsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListArtifacts",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "artifacts" } as const,
})) as any;

export type ListDeviceInstancesError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns information about the private device instances associated with one or more AWS
 * accounts.
 */
export const listDeviceInstances: API.OperationMethod<
  ListDeviceInstancesRequest,
  ListDeviceInstancesResult,
  ListDeviceInstancesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(125) as any as S.Schema<ListDeviceInstancesRequest>,
  output: __S(126) as any as S.Schema<ListDeviceInstancesResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDeviceInstances",
}));

export type ListDevicePoolsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about device pools.
 */
export const listDevicePools: API.PaginatedOperationMethod<
  ListDevicePoolsRequest,
  ListDevicePoolsResult,
  ListDevicePoolsError,
  Credentials | HttpClient.HttpClient,
  DevicePool
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(127) as any as S.Schema<ListDevicePoolsRequest>,
  output: __S(129) as any as S.Schema<ListDevicePoolsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevicePools",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "devicePools" } as const,
})) as any;

export type ListDevicesError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about unique device types.
 */
export const listDevices: API.PaginatedOperationMethod<
  ListDevicesRequest,
  ListDevicesResult,
  ListDevicesError,
  Credentials | HttpClient.HttpClient,
  Device
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(130) as any as S.Schema<ListDevicesRequest>,
  output: __S(132) as any as S.Schema<ListDevicesResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevices",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "devices" } as const,
})) as any;

export type ListInstanceProfilesError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns information about all the instance profiles in an AWS account.
 */
export const listInstanceProfiles: API.OperationMethod<
  ListInstanceProfilesRequest,
  ListInstanceProfilesResult,
  ListInstanceProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133) as any as S.Schema<ListInstanceProfilesRequest>,
  output: __S(135) as any as S.Schema<ListInstanceProfilesResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInstanceProfiles",
}));

export type ListJobsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about jobs for a given test run.
 */
export const listJobs: API.PaginatedOperationMethod<
  ListJobsRequest,
  ListJobsResult,
  ListJobsError,
  Credentials | HttpClient.HttpClient,
  Job
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(136) as any as S.Schema<ListJobsRequest>,
  output: __S(138) as any as S.Schema<ListJobsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListJobs",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "jobs" } as const,
})) as any;

export type ListNetworkProfilesError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns the list of available network profiles.
 */
export const listNetworkProfiles: API.OperationMethod<
  ListNetworkProfilesRequest,
  ListNetworkProfilesResult,
  ListNetworkProfilesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(139) as any as S.Schema<ListNetworkProfilesRequest>,
  output: __S(141) as any as S.Schema<ListNetworkProfilesResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkProfiles",
}));

export type ListOfferingPromotionsError =
  | ArgumentException
  | LimitExceededException
  | NotEligibleException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns a list of offering promotions. Each offering promotion record contains the ID and description
 * of the promotion. The API returns a `NotEligible` error if the caller is not permitted to invoke
 * the operation. Contact aws-devicefarm-support@amazon.com if you must be able to invoke this operation.
 */
export const listOfferingPromotions: API.OperationMethod<
  ListOfferingPromotionsRequest,
  ListOfferingPromotionsResult,
  ListOfferingPromotionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(142) as any as S.Schema<ListOfferingPromotionsRequest>,
  output: __S(145) as any as S.Schema<ListOfferingPromotionsResult>,
  errors: [
    ArgumentException,
    LimitExceededException,
    NotEligibleException,
    NotFoundException,
    ServiceAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOfferingPromotions",
}));

export type ListOfferingsError =
  | ArgumentException
  | LimitExceededException
  | NotEligibleException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns a list of products or offerings that the user can manage through the API. Each offering record
 * indicates the recurring price per unit and the frequency for that offering. The API returns a
 * `NotEligible` error if the user is not permitted to invoke the operation. If you must be
 * able to invoke this operation, contact aws-devicefarm-support@amazon.com.
 */
export const listOfferings: API.PaginatedOperationMethod<
  ListOfferingsRequest,
  ListOfferingsResult,
  ListOfferingsError,
  Credentials | HttpClient.HttpClient,
  Offering
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(146) as any as S.Schema<ListOfferingsRequest>,
  output: __S(148) as any as S.Schema<ListOfferingsResult>,
  errors: [
    ArgumentException,
    LimitExceededException,
    NotEligibleException,
    NotFoundException,
    ServiceAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOfferings",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "offerings" } as const,
})) as any;

export type ListOfferingTransactionsError =
  | ArgumentException
  | LimitExceededException
  | NotEligibleException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS
 * account. The list is paginated and ordered by a descending timestamp (most recent transactions are first).
 * The API returns a `NotEligible` error if the user is not permitted to invoke the operation. If
 * you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.
 */
export const listOfferingTransactions: API.PaginatedOperationMethod<
  ListOfferingTransactionsRequest,
  ListOfferingTransactionsResult,
  ListOfferingTransactionsError,
  Credentials | HttpClient.HttpClient,
  OfferingTransaction
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(149) as any as S.Schema<ListOfferingTransactionsRequest>,
  output: __S(152) as any as S.Schema<ListOfferingTransactionsResult>,
  errors: [
    ArgumentException,
    LimitExceededException,
    NotEligibleException,
    NotFoundException,
    ServiceAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOfferingTransactions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "offeringTransactions",
  } as const,
})) as any;

export type ListProjectsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about projects.
 */
export const listProjects: API.PaginatedOperationMethod<
  ListProjectsRequest,
  ListProjectsResult,
  ListProjectsError,
  Credentials | HttpClient.HttpClient,
  Project
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(153) as any as S.Schema<ListProjectsRequest>,
  output: __S(155) as any as S.Schema<ListProjectsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProjects",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "projects" } as const,
})) as any;

export type ListRemoteAccessSessionsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns a list of all currently running remote access sessions.
 */
export const listRemoteAccessSessions: API.OperationMethod<
  ListRemoteAccessSessionsRequest,
  ListRemoteAccessSessionsResult,
  ListRemoteAccessSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(156) as any as S.Schema<ListRemoteAccessSessionsRequest>,
  output: __S(158) as any as S.Schema<ListRemoteAccessSessionsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRemoteAccessSessions",
}));

export type ListRunsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about runs, given an AWS Device Farm project ARN.
 */
export const listRuns: API.PaginatedOperationMethod<
  ListRunsRequest,
  ListRunsResult,
  ListRunsError,
  Credentials | HttpClient.HttpClient,
  Run
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(159) as any as S.Schema<ListRunsRequest>,
  output: __S(161) as any as S.Schema<ListRunsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuns",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "runs" } as const,
})) as any;

export type ListSamplesError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about samples, given an AWS Device Farm job ARN.
 *
 * Device Farm does not support performance data samples during test executions.
 */
export const listSamples: API.PaginatedOperationMethod<
  ListSamplesRequest,
  ListSamplesResult,
  ListSamplesError,
  Credentials | HttpClient.HttpClient,
  Sample
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(162) as any as S.Schema<ListSamplesRequest>,
  output: __S(165) as any as S.Schema<ListSamplesResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSamples",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "samples" } as const,
})) as any;

export type ListSuitesError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about test suites for a given job.
 */
export const listSuites: API.PaginatedOperationMethod<
  ListSuitesRequest,
  ListSuitesResult,
  ListSuitesError,
  Credentials | HttpClient.HttpClient,
  Suite
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(166) as any as S.Schema<ListSuitesRequest>,
  output: __S(168) as any as S.Schema<ListSuitesResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSuites",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "suites" } as const,
})) as any;

export type ListTagsForResourceError =
  | ArgumentException
  | NotFoundException
  | TagOperationException
  | CommonErrors;
/**
 * List the tags for an AWS Device Farm resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(172) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [ArgumentException, NotFoundException, TagOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTestGridProjectsError = ArgumentException | InternalServiceException | CommonErrors;
/**
 * Gets a list of all Selenium testing projects in your account.
 */
export const listTestGridProjects: API.PaginatedOperationMethod<
  ListTestGridProjectsRequest,
  ListTestGridProjectsResult,
  ListTestGridProjectsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(173) as any as S.Schema<ListTestGridProjectsRequest>,
  output: __S(175) as any as S.Schema<ListTestGridProjectsResult>,
  errors: [ArgumentException, InternalServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTestGridProjects",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", pageSize: "maxResult" } as const,
})) as any;

export type ListTestGridSessionActionsError =
  | ArgumentException
  | InternalServiceException
  | NotFoundException
  | CommonErrors;
/**
 * Returns a list of the actions taken in a TestGridSession.
 */
export const listTestGridSessionActions: API.PaginatedOperationMethod<
  ListTestGridSessionActionsRequest,
  ListTestGridSessionActionsResult,
  ListTestGridSessionActionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(176) as any as S.Schema<ListTestGridSessionActionsRequest>,
  output: __S(179) as any as S.Schema<ListTestGridSessionActionsResult>,
  errors: [ArgumentException, InternalServiceException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTestGridSessionActions",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", pageSize: "maxResult" } as const,
})) as any;

export type ListTestGridSessionArtifactsError =
  | ArgumentException
  | InternalServiceException
  | NotFoundException
  | CommonErrors;
/**
 * Retrieves a list of artifacts created during the session.
 */
export const listTestGridSessionArtifacts: API.PaginatedOperationMethod<
  ListTestGridSessionArtifactsRequest,
  ListTestGridSessionArtifactsResult,
  ListTestGridSessionArtifactsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(180) as any as S.Schema<ListTestGridSessionArtifactsRequest>,
  output: __S(183) as any as S.Schema<ListTestGridSessionArtifactsResult>,
  errors: [ArgumentException, InternalServiceException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTestGridSessionArtifacts",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", pageSize: "maxResult" } as const,
})) as any;

export type ListTestGridSessionsError =
  | ArgumentException
  | InternalServiceException
  | NotFoundException
  | CommonErrors;
/**
 * Retrieves a list of sessions for a TestGridProject.
 */
export const listTestGridSessions: API.PaginatedOperationMethod<
  ListTestGridSessionsRequest,
  ListTestGridSessionsResult,
  ListTestGridSessionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(184) as any as S.Schema<ListTestGridSessionsRequest>,
  output: __S(186) as any as S.Schema<ListTestGridSessionsResult>,
  errors: [ArgumentException, InternalServiceException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTestGridSessions",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", pageSize: "maxResult" } as const,
})) as any;

export type ListTestsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about tests in a given test suite.
 */
export const listTests: API.PaginatedOperationMethod<
  ListTestsRequest,
  ListTestsResult,
  ListTestsError,
  Credentials | HttpClient.HttpClient,
  Test
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(187) as any as S.Schema<ListTestsRequest>,
  output: __S(188) as any as S.Schema<ListTestsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTests",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "tests" } as const,
})) as any;

export type ListUniqueProblemsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about unique problems, such as exceptions or crashes.
 *
 * Unique problems are defined as a single instance of an error across a run, job, or suite. For example,
 * if a call in your application consistently raises an exception (OutOfBoundsException in
 * MyActivity.java:386), `ListUniqueProblems` returns a single entry instead of many
 * individual entries for that exception.
 */
export const listUniqueProblems: API.PaginatedOperationMethod<
  ListUniqueProblemsRequest,
  ListUniqueProblemsResult,
  ListUniqueProblemsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(189) as any as S.Schema<ListUniqueProblemsRequest>,
  output: __S(196) as any as S.Schema<ListUniqueProblemsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUniqueProblems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "uniqueProblems",
  } as const,
})) as any;

export type ListUploadsError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Gets information about uploads, given an AWS Device Farm project ARN.
 */
export const listUploads: API.PaginatedOperationMethod<
  ListUploadsRequest,
  ListUploadsResult,
  ListUploadsError,
  Credentials | HttpClient.HttpClient,
  Upload
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(197) as any as S.Schema<ListUploadsRequest>,
  output: __S(199) as any as S.Schema<ListUploadsResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUploads",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "uploads" } as const,
})) as any;

export type ListVPCEConfigurationsError =
  | ArgumentException
  | ServiceAccountException
  | CommonErrors;
/**
 * Returns information about all Amazon Virtual Private Cloud (VPC) endpoint
 * configurations in the AWS account.
 */
export const listVPCEConfigurations: API.OperationMethod<
  ListVPCEConfigurationsRequest,
  ListVPCEConfigurationsResult,
  ListVPCEConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(200) as any as S.Schema<ListVPCEConfigurationsRequest>,
  output: __S(202) as any as S.Schema<ListVPCEConfigurationsResult>,
  errors: [ArgumentException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListVPCEConfigurations",
}));

export type PurchaseOfferingError =
  | ArgumentException
  | LimitExceededException
  | NotEligibleException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased
 * quantity for an offering, unless the renewal was overridden. The API returns a `NotEligible`
 * error if the user is not permitted to invoke the operation. If you must be able to invoke this operation,
 * contact aws-devicefarm-support@amazon.com.
 */
export const purchaseOffering: API.OperationMethod<
  PurchaseOfferingRequest,
  PurchaseOfferingResult,
  PurchaseOfferingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(203) as any as S.Schema<PurchaseOfferingRequest>,
  output: __S(204) as any as S.Schema<PurchaseOfferingResult>,
  errors: [
    ArgumentException,
    LimitExceededException,
    NotEligibleException,
    NotFoundException,
    ServiceAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PurchaseOffering",
}));

export type RenewOfferingError =
  | ArgumentException
  | LimitExceededException
  | NotEligibleException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Explicitly sets the quantity of devices to renew for an offering, starting from the
 * `effectiveDate` of the next period. The API returns a `NotEligible` error if the
 * user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.
 */
export const renewOffering: API.OperationMethod<
  RenewOfferingRequest,
  RenewOfferingResult,
  RenewOfferingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(205) as any as S.Schema<RenewOfferingRequest>,
  output: __S(204) as any as S.Schema<RenewOfferingResult>,
  errors: [
    ArgumentException,
    LimitExceededException,
    NotEligibleException,
    NotFoundException,
    ServiceAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RenewOffering",
}));

export type ScheduleRunError =
  | ArgumentException
  | IdempotencyException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Schedules a run.
 */
export const scheduleRun: API.OperationMethod<
  ScheduleRunRequest,
  ScheduleRunResult,
  ScheduleRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(208) as any as S.Schema<ScheduleRunRequest>,
  output: __S(106) as any as S.Schema<ScheduleRunResult>,
  errors: [
    ArgumentException,
    IdempotencyException,
    LimitExceededException,
    NotFoundException,
    ServiceAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ScheduleRun",
}));

export type StopJobError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device
 * where tests have not started. You are not billed for this device. On the device where tests have started,
 * setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown,
 * and any tests that were in progress or already completed.
 */
export const stopJob: API.OperationMethod<
  StopJobRequest,
  StopJobResult,
  StopJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(209) as any as S.Schema<StopJobRequest>,
  output: __S(85) as any as S.Schema<StopJobResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopJob",
}));

export type StopRemoteAccessSessionError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Ends a specified remote access session.
 */
export const stopRemoteAccessSession: API.OperationMethod<
  StopRemoteAccessSessionRequest,
  StopRemoteAccessSessionResult,
  StopRemoteAccessSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(210) as any as S.Schema<StopRemoteAccessSessionRequest>,
  output: __S(30) as any as S.Schema<StopRemoteAccessSessionResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopRemoteAccessSession",
}));

export type StopRunError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices
 * where tests have not started. You are not billed for these devices. On devices where tests have started
 * executing, setup suite and teardown suite tests run to completion on those devices. You are billed for
 * setup, teardown, and any tests that were in progress or already completed.
 */
export const stopRun: API.OperationMethod<
  StopRunRequest,
  StopRunResult,
  StopRunError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(211) as any as S.Schema<StopRunRequest>,
  output: __S(106) as any as S.Schema<StopRunResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopRun",
}));

export type TagResourceError =
  | ArgumentException
  | NotFoundException
  | TagOperationException
  | TagPolicyException
  | TooManyTagsException
  | CommonErrors;
/**
 * Associates the specified tags to a resource with the specified `resourceArn`. If existing tags
 * on a resource are not specified in the request parameters, they are not changed. When a resource is deleted,
 * the tags associated with that resource are also deleted.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(212) as any as S.Schema<TagResourceRequest>,
  output: __S(48) as any as S.Schema<TagResourceResponse>,
  errors: [
    ArgumentException,
    NotFoundException,
    TagOperationException,
    TagPolicyException,
    TooManyTagsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ArgumentException
  | NotFoundException
  | TagOperationException
  | CommonErrors;
/**
 * Deletes the specified tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(213) as any as S.Schema<UntagResourceRequest>,
  output: __S(48) as any as S.Schema<UntagResourceResponse>,
  errors: [ArgumentException, NotFoundException, TagOperationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDeviceInstanceError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Updates information about a private device instance.
 */
export const updateDeviceInstance: API.OperationMethod<
  UpdateDeviceInstanceRequest,
  UpdateDeviceInstanceResult,
  UpdateDeviceInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(214) as any as S.Schema<UpdateDeviceInstanceRequest>,
  output: __S(215) as any as S.Schema<UpdateDeviceInstanceResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDeviceInstance",
}));

export type UpdateDevicePoolError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Modifies the name, description, and rules in a device pool given the attributes and
 * the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a
 * whole (or not at all).
 */
export const updateDevicePool: API.OperationMethod<
  UpdateDevicePoolRequest,
  UpdateDevicePoolResult,
  UpdateDevicePoolError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(216) as any as S.Schema<UpdateDevicePoolRequest>,
  output: __S(4) as any as S.Schema<UpdateDevicePoolResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDevicePool",
}));

export type UpdateInstanceProfileError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Updates information about an existing private device instance profile.
 */
export const updateInstanceProfile: API.OperationMethod<
  UpdateInstanceProfileRequest,
  UpdateInstanceProfileResult,
  UpdateInstanceProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(217) as any as S.Schema<UpdateInstanceProfileRequest>,
  output: __S(8) as any as S.Schema<UpdateInstanceProfileResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateInstanceProfile",
}));

export type UpdateNetworkProfileError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Updates the network profile.
 */
export const updateNetworkProfile: API.OperationMethod<
  UpdateNetworkProfileRequest,
  UpdateNetworkProfileResult,
  UpdateNetworkProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(218) as any as S.Schema<UpdateNetworkProfileRequest>,
  output: __S(11) as any as S.Schema<UpdateNetworkProfileResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNetworkProfile",
}));

export type UpdateProjectError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Modifies the specified project name, given the project ARN and a new
 * name.
 */
export const updateProject: API.OperationMethod<
  UpdateProjectRequest,
  UpdateProjectResult,
  UpdateProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(219) as any as S.Schema<UpdateProjectRequest>,
  output: __S(17) as any as S.Schema<UpdateProjectResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProject",
}));

export type UpdateTestGridProjectError =
  | ArgumentException
  | InternalServiceException
  | LimitExceededException
  | NotFoundException
  | CommonErrors;
/**
 * Change details of a project.
 */
export const updateTestGridProject: API.OperationMethod<
  UpdateTestGridProjectRequest,
  UpdateTestGridProjectResult,
  UpdateTestGridProjectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(220) as any as S.Schema<UpdateTestGridProjectRequest>,
  output: __S(33) as any as S.Schema<UpdateTestGridProjectResult>,
  errors: [ArgumentException, InternalServiceException, LimitExceededException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTestGridProject",
}));

export type UpdateUploadError =
  | ArgumentException
  | LimitExceededException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Updates an uploaded test spec.
 */
export const updateUpload: API.OperationMethod<
  UpdateUploadRequest,
  UpdateUploadResult,
  UpdateUploadError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(221) as any as S.Schema<UpdateUploadRequest>,
  output: __S(38) as any as S.Schema<UpdateUploadResult>,
  errors: [ArgumentException, LimitExceededException, NotFoundException, ServiceAccountException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUpload",
}));

export type UpdateVPCEConfigurationError =
  | ArgumentException
  | InvalidOperationException
  | NotFoundException
  | ServiceAccountException
  | CommonErrors;
/**
 * Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.
 */
export const updateVPCEConfiguration: API.OperationMethod<
  UpdateVPCEConfigurationRequest,
  UpdateVPCEConfigurationResult,
  UpdateVPCEConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(222) as any as S.Schema<UpdateVPCEConfigurationRequest>,
  output: __S(41) as any as S.Schema<UpdateVPCEConfigurationResult>,
  errors: [
    ArgumentException,
    InvalidOperationException,
    NotFoundException,
    ServiceAccountException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateVPCEConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          attribute: S.optional(S.String),
          operator: S.optional(S.String),
          value: S.optional(S.String),
        }),
      ).annotate({ identifier: "Rule" });
    case 1:
      return S.Array(__S(0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          rules: __S(1),
          maxDevices: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateDevicePoolRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          type: S.optional(S.String),
          rules: S.optional(__S(1)),
          maxDevices: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DevicePool" });
    case 4:
      return S.suspend(() => S.Struct({ devicePool: S.optional(__S(3)) }).pipe(ns)).annotate({
        identifier: "CreateDevicePoolResult",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          packageCleanup: S.optional(S.Boolean),
          excludeAppPackagesFromCleanup: S.optional(__S(5)),
          rebootAfterUse: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateInstanceProfileRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          packageCleanup: S.optional(S.Boolean),
          excludeAppPackagesFromCleanup: S.optional(__S(5)),
          rebootAfterUse: S.optional(S.Boolean),
          name: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "InstanceProfile" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ instanceProfile: S.optional(__S(7)) }).pipe(ns)).annotate({
        identifier: "CreateInstanceProfileResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          type: S.optional(S.String),
          uplinkBandwidthBits: S.optional(S.Number),
          downlinkBandwidthBits: S.optional(S.Number),
          uplinkDelayMs: S.optional(S.Number),
          downlinkDelayMs: S.optional(S.Number),
          uplinkJitterMs: S.optional(S.Number),
          downlinkJitterMs: S.optional(S.Number),
          uplinkLossPercent: S.optional(S.Number),
          downlinkLossPercent: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateNetworkProfileRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          type: S.optional(S.String),
          uplinkBandwidthBits: S.optional(S.Number),
          downlinkBandwidthBits: S.optional(S.Number),
          uplinkDelayMs: S.optional(S.Number),
          downlinkDelayMs: S.optional(S.Number),
          uplinkJitterMs: S.optional(S.Number),
          downlinkJitterMs: S.optional(S.Number),
          uplinkLossPercent: S.optional(S.Number),
          downlinkLossPercent: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NetworkProfile" });
    case 3:
      return S.suspend(() => S.Struct({ networkProfile: S.optional(__S(10)) }).pipe(ns)).annotate({
        identifier: "CreateNetworkProfileResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          securityGroupIds: __S(5),
          subnetIds: __S(5),
          vpcId: S.String,
        }),
      ).annotate({ identifier: "VpcConfig" });
    case 5:
      return S.suspend(() => S.Struct({ name: S.String, value: S.String })).annotate({
        identifier: "EnvironmentVariable",
      });
    case 6:
      return S.Array(__S(13));
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          defaultJobTimeoutMinutes: S.optional(S.Number),
          vpcConfig: S.optional(__S(12)),
          environmentVariables: S.optional(__S(14)),
          executionRoleArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateProjectRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          defaultJobTimeoutMinutes: S.optional(S.Number),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          vpcConfig: S.optional(__S(12)),
          environmentVariables: S.optional(__S(14)),
          executionRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Project" });
    case 1:
      return S.suspend(() => S.Struct({ project: S.optional(__S(16)) }).pipe(ns)).annotate({
        identifier: "CreateProjectResult",
      });
    case 2:
      return S.suspend(() => S.Struct({ host: S.String, port: S.Number })).annotate({
        identifier: "DeviceProxy",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          auxiliaryApps: S.optional(__S(5)),
          billingMethod: S.optional(S.String),
          vpceConfigurationArns: S.optional(__S(5)),
          deviceProxy: S.optional(__S(18)),
          parameters: S.optional(__S(19)),
        }),
      ).annotate({
        identifier: "CreateRemoteAccessSessionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          deviceArn: S.String,
          appArn: S.optional(S.String),
          instanceArn: S.optional(S.String),
          name: S.optional(S.String),
          configuration: S.optional(__S(20)),
          interactionMode: S.optional(S.String),
          skipAppResign: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateRemoteAccessSessionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          frequency: S.optional(S.String),
          architecture: S.optional(S.String),
          clock: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CPU" });
    case 7:
      return S.suspend(() =>
        S.Struct({ width: S.optional(S.Number), height: S.optional(S.Number) }),
      ).annotate({ identifier: "Resolution" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          deviceArn: S.optional(S.String),
          labels: S.optional(__S(5)),
          status: S.optional(S.String),
          udid: S.optional(S.String),
          instanceProfile: S.optional(__S(7)),
        }),
      ).annotate({ identifier: "DeviceInstance" });
    case 1:
      return S.Array(__S(24));
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          manufacturer: S.optional(S.String),
          model: S.optional(S.String),
          modelId: S.optional(S.String),
          formFactor: S.optional(S.String),
          platform: S.optional(S.String),
          os: S.optional(S.String),
          cpu: S.optional(__S(22)),
          resolution: S.optional(__S(23)),
          heapSize: S.optional(S.Number),
          memory: S.optional(S.Number),
          image: S.optional(S.String),
          carrier: S.optional(S.String),
          radio: S.optional(S.String),
          remoteAccessEnabled: S.optional(S.Boolean),
          remoteDebugEnabled: S.optional(S.Boolean),
          fleetType: S.optional(S.String),
          fleetName: S.optional(S.String),
          instances: S.optional(__S(25)),
          availability: S.optional(S.String),
        }),
      ).annotate({ identifier: "Device" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          total: S.optional(S.Number),
          metered: S.optional(S.Number),
          unmetered: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DeviceMinutes" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          remoteDriverEndpoint: S.optional(SensitiveString),
          interactiveEndpoint: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "RemoteAccessEndpoints" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          result: S.optional(S.String),
          message: S.optional(S.String),
          started: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stopped: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          device: S.optional(__S(26)),
          instanceArn: S.optional(S.String),
          billingMethod: S.optional(S.String),
          deviceMinutes: S.optional(__S(27)),
          endpoint: S.optional(S.String),
          deviceUdid: S.optional(S.String),
          interactionMode: S.optional(S.String),
          skipAppResign: S.optional(S.Boolean),
          vpcConfig: S.optional(__S(12)),
          deviceProxy: S.optional(__S(18)),
          appUpload: S.optional(S.String),
          endpoints: S.optional(__S(28)),
        }),
      ).annotate({ identifier: "RemoteAccessSession" });
    case 6:
      return S.suspend(() =>
        S.Struct({ remoteAccessSession: S.optional(__S(29)) }).pipe(ns),
      ).annotate({
        identifier: "CreateRemoteAccessSessionResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          vpcConfig: S.optional(__S(12)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateTestGridProjectRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          vpcConfig: S.optional(__S(12)),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "TestGridProject" });
    case 1:
      return S.suspend(() => S.Struct({ testGridProject: S.optional(__S(32)) }).pipe(ns)).annotate({
        identifier: "CreateTestGridProjectResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ projectArn: S.String, expiresInSeconds: S.Number }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTestGridUrlRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          url: S.optional(SensitiveString),
          expires: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({ identifier: "CreateTestGridUrlResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          name: S.String,
          type: S.String,
          contentType: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUploadRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          type: S.optional(S.String),
          status: S.optional(S.String),
          url: S.optional(SensitiveString),
          metadata: S.optional(S.String),
          contentType: S.optional(S.String),
          message: S.optional(S.String),
          category: S.optional(S.String),
        }),
      ).annotate({ identifier: "Upload" });
    case 6:
      return S.suspend(() => S.Struct({ upload: S.optional(__S(37)) }).pipe(ns)).annotate({
        identifier: "CreateUploadResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          vpceConfigurationName: S.String,
          vpceServiceName: S.String,
          serviceDnsName: S.String,
          vpceConfigurationDescription: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateVPCEConfigurationRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          vpceConfigurationName: S.optional(S.String),
          vpceServiceName: S.optional(S.String),
          serviceDnsName: S.optional(S.String),
          vpceConfigurationDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "VPCEConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({ vpceConfiguration: S.optional(__S(40)) }).pipe(ns),
      ).annotate({
        identifier: "CreateVPCEConfigurationResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDevicePoolRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteDevicePoolResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteInstanceProfileRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteInstanceProfileResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteNetworkProfileRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteProjectRequest" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteProjectResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteRemoteAccessSessionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRunRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ projectArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteTestGridProjectRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteUploadRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteVPCEConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAccountSettingsRequest",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ total: S.optional(S.Number), remaining: S.optional(S.Number) }),
      ).annotate({ identifier: "TrialMinutes" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.Number.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          awsAccountNumber: S.optional(S.String),
          unmeteredDevices: S.optional(__S(55)),
          unmeteredRemoteAccessDevices: S.optional(__S(55)),
          maxJobTimeoutMinutes: S.optional(S.Number),
          trialMinutes: S.optional(__S(56)),
          maxSlots: S.optional(__S(57)),
          defaultJobTimeoutMinutes: S.optional(S.Number),
          skipAppResign: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AccountSettings" });
    case 3:
      return S.suspend(() => S.Struct({ accountSettings: S.optional(__S(58)) }).pipe(ns)).annotate({
        identifier: "GetAccountSettingsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDeviceRequest" });
    case 5:
      return S.suspend(() => S.Struct({ device: S.optional(__S(26)) }).pipe(ns)).annotate({
        identifier: "GetDeviceResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDeviceInstanceRequest" });
    case 7:
      return S.suspend(() => S.Struct({ deviceInstance: S.optional(__S(24)) }).pipe(ns)).annotate({
        identifier: "GetDeviceInstanceResult",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDevicePoolRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          testPackageArn: S.optional(S.String),
          testSpecArn: S.optional(S.String),
          filter: S.optional(S.String),
          parameters: S.optional(__S(19)),
        }),
      ).annotate({ identifier: "ScheduleRunTest" });
    case 2:
      return S.suspend(() => S.Struct({ latitude: S.Number, longitude: S.Number })).annotate({
        identifier: "Location",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          iosPaths: S.optional(__S(5)),
          androidPaths: S.optional(__S(5)),
          deviceHostPaths: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "CustomerArtifactPaths" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          wifi: S.optional(S.Boolean),
          bluetooth: S.optional(S.Boolean),
          nfc: S.optional(S.Boolean),
          gps: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Radios" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          extraDataPackageArn: S.optional(S.String),
          networkProfileArn: S.optional(S.String),
          locale: S.optional(S.String),
          location: S.optional(__S(66)),
          vpceConfigurationArns: S.optional(__S(5)),
          deviceProxy: S.optional(__S(18)),
          customerArtifactPaths: S.optional(__S(67)),
          radios: S.optional(__S(68)),
          auxiliaryApps: S.optional(__S(5)),
          billingMethod: S.optional(S.String),
          environmentVariables: S.optional(__S(14)),
          executionRoleArn: S.optional(S.String),
          insightsTypes: S.optional(__S(69)),
        }),
      ).annotate({ identifier: "ScheduleRunConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          devicePoolArn: S.String,
          appArn: S.optional(S.String),
          testType: S.optional(S.String),
          test: S.optional(__S(65)),
          configuration: S.optional(__S(70)),
          projectArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetDevicePoolCompatibilityRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ message: S.optional(S.String), type: S.optional(S.String) }),
      ).annotate({ identifier: "IncompatibilityMessage" });
    case 1:
      return S.Array(__S(72));
    case 2:
      return S.suspend(() =>
        S.Struct({
          device: S.optional(__S(26)),
          compatible: S.optional(S.Boolean),
          incompatibilityMessages: S.optional(__S(73)),
        }),
      ).annotate({
        identifier: "DevicePoolCompatibilityResult",
      });
    case 3:
      return S.Array(__S(74));
    case 4:
      return S.suspend(() =>
        S.Struct({
          compatibleDevices: S.optional(__S(75)),
          incompatibleDevices: S.optional(__S(75)),
        }).pipe(ns),
      ).annotate({
        identifier: "GetDevicePoolCompatibilityResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetInstanceProfileRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ instanceProfile: S.optional(__S(7)) }).pipe(ns)).annotate({
        identifier: "GetInstanceProfileResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetJobRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          total: S.optional(S.Number),
          passed: S.optional(S.Number),
          failed: S.optional(S.Number),
          warned: S.optional(S.Number),
          errored: S.optional(S.Number),
          stopped: S.optional(S.Number),
          skipped: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Counters" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          testsTotal: S.optional(S.Number),
          testsPassed: S.optional(S.Number),
          testsFailed: S.optional(S.Number),
          testsSkipped: S.optional(S.Number),
          testsErrored: S.optional(S.Number),
          testsOther: S.optional(S.Number),
          testsPassedPercentage: S.optional(S.Number),
          totalTestExecutionDurationSeconds: S.optional(S.Number),
          medianTestExecutionDurationSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TestReportMetrics" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          message: S.optional(S.String),
          metrics: S.optional(__S(81)),
          testDetailsUrl: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "TestReport" });
    case 3:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), testReport: S.optional(__S(82)) }),
      ).annotate({ identifier: "JobInsights" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          result: S.optional(S.String),
          started: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stopped: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          counters: S.optional(__S(80)),
          message: S.optional(S.String),
          device: S.optional(__S(26)),
          instanceArn: S.optional(S.String),
          deviceMinutes: S.optional(__S(27)),
          videoEndpoint: S.optional(S.String),
          videoCapture: S.optional(S.Boolean),
          insights: S.optional(__S(83)),
        }),
      ).annotate({ identifier: "Job" });
    case 5:
      return S.suspend(() => S.Struct({ job: S.optional(__S(84)) }).pipe(ns)).annotate({
        identifier: "GetJobResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetNetworkProfileRequest" });
    case 7:
      return S.suspend(() => S.Struct({ networkProfile: S.optional(__S(10)) }).pipe(ns)).annotate({
        identifier: "GetNetworkProfileResult",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetOfferingStatusRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ amount: S.optional(S.Number), currencyCode: S.optional(S.String) }),
      ).annotate({ identifier: "MonetaryAmount" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          cost: S.optional(__S(89)),
          frequency: S.optional(S.String),
        }),
      ).annotate({ identifier: "RecurringCharge" });
    case 3:
      return S.Array(__S(90));
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          description: S.optional(S.String),
          type: S.optional(S.String),
          platform: S.optional(S.String),
          recurringCharges: S.optional(__S(91)),
        }),
      ).annotate({ identifier: "Offering" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          offering: S.optional(__S(92)),
          quantity: S.optional(S.Number),
          effectiveOn: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "OfferingStatus" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ __S(93).pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          current: S.optional(__S(94)),
          nextPeriod: S.optional(__S(94)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "GetOfferingStatusResult" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetProjectRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetRemoteAccessSessionRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRunRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          attribute: S.String,
          operator: S.String,
          values: __S(5),
        }),
      ).annotate({ identifier: "DeviceFilter" });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          filters: S.optional(__S(100)),
          matchedDevicesCount: S.optional(S.Number),
          maxDevices: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DeviceSelectionResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          jobsTotal: S.optional(S.Number),
          jobsPassed: S.optional(S.Number),
          jobsFailed: S.optional(S.Number),
          jobsSkipped: S.optional(S.Number),
          jobsErrored: S.optional(S.Number),
          jobsStopped: S.optional(S.Number),
          jobsPassedPercentage: S.optional(S.Number),
          totalJobExecutionDurationSeconds: S.optional(S.Number),
          averageJobExecutionDurationSeconds: S.optional(S.Number),
          medianJobExecutionDurationSeconds: S.optional(S.Number),
        }),
      ).annotate({ identifier: "JobReportMetrics" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          message: S.optional(S.String),
          metrics: S.optional(__S(102)),
          jobDetailsUrl: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "JobReport" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), jobReport: S.optional(__S(103)) }),
      ).annotate({ identifier: "RunInsights" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          platform: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          result: S.optional(S.String),
          started: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stopped: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          counters: S.optional(__S(80)),
          message: S.optional(S.String),
          totalJobs: S.optional(S.Number),
          completedJobs: S.optional(S.Number),
          billingMethod: S.optional(S.String),
          deviceMinutes: S.optional(__S(27)),
          networkProfile: S.optional(__S(10)),
          deviceProxy: S.optional(__S(18)),
          parsingResultUrl: S.optional(S.String),
          resultCode: S.optional(S.String),
          seed: S.optional(S.Number),
          appUpload: S.optional(S.String),
          eventCount: S.optional(S.Number),
          jobTimeoutMinutes: S.optional(S.Number),
          devicePoolArn: S.optional(S.String),
          locale: S.optional(S.String),
          radios: S.optional(__S(68)),
          location: S.optional(__S(66)),
          customerArtifactPaths: S.optional(__S(67)),
          webUrl: S.optional(S.String),
          skipAppResign: S.optional(S.Boolean),
          testSpecArn: S.optional(S.String),
          deviceSelectionResult: S.optional(__S(101)),
          vpcConfig: S.optional(__S(12)),
          executionRoleArn: S.optional(S.String),
          environmentVariables: S.optional(__S(14)),
          insightsTypes: S.optional(__S(69)),
          insights: S.optional(__S(104)),
        }),
      ).annotate({ identifier: "Run" });
    case 2:
      return S.suspend(() => S.Struct({ run: S.optional(__S(105)) }).pipe(ns)).annotate({
        identifier: "GetRunResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSuiteRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          result: S.optional(S.String),
          started: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stopped: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          counters: S.optional(__S(80)),
          message: S.optional(S.String),
          deviceMinutes: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "Suite" });
    case 5:
      return S.suspend(() => S.Struct({ suite: S.optional(__S(108)) }).pipe(ns)).annotate({
        identifier: "GetSuiteResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTestRequest" });
    case 7:
      return S.suspend(() => S.Struct({ test: S.optional(__S(108)) }).pipe(ns)).annotate({
        identifier: "GetTestResult",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ projectArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetTestGridProjectRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ testGridProject: S.optional(__S(32)) }).pipe(ns)).annotate({
        identifier: "GetTestGridProjectResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.optional(S.String),
          sessionId: S.optional(S.String),
          sessionArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetTestGridSessionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          status: S.optional(S.String),
          created: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ended: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          billingMinutes: S.optional(S.Number),
          seleniumProperties: S.optional(S.String),
        }),
      ).annotate({ identifier: "TestGridSession" });
    case 4:
      return S.suspend(() => S.Struct({ testGridSession: S.optional(__S(115)) }).pipe(ns)).annotate(
        { identifier: "GetTestGridSessionResult" },
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetUploadRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetVPCEConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ remoteAccessSessionArn: S.String, appArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "InstallToRemoteAccessSessionRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ appUpload: S.optional(__S(37)) }).pipe(ns)).annotate({
        identifier: "InstallToRemoteAccessSessionResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String, type: S.String, nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListArtifactsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          name: S.optional(S.String),
          type: S.optional(S.String),
          extension: S.optional(S.String),
          url: S.optional(S.String),
        }),
      ).annotate({ identifier: "Artifact" });
    case 3:
      return S.Array(__S(122));
    case 4:
      return S.suspend(() =>
        S.Struct({ artifacts: S.optional(__S(123)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListArtifactsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListDeviceInstancesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          deviceInstances: S.optional(__S(25)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListDeviceInstancesResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          type: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDevicePoolsRequest" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(3));
    case 1:
      return S.suspend(() =>
        S.Struct({ devicePools: S.optional(__S(128)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListDevicePoolsResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          nextToken: S.optional(S.String),
          filters: S.optional(__S(100)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDevicesRequest" });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({ devices: S.optional(__S(131)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListDevicesResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListInstanceProfilesRequest",
      });
    case 6:
      return S.Array(__S(7));
    case 7:
      return S.suspend(() =>
        S.Struct({
          instanceProfiles: S.optional(__S(134)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListInstanceProfilesResult",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ arn: S.String, nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListJobsRequest" });
    case 1:
      return S.Array(__S(84));
    case 2:
      return S.suspend(() =>
        S.Struct({ jobs: S.optional(__S(137)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListJobsResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          type: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListNetworkProfilesRequest",
      });
    case 4:
      return S.Array(__S(10));
    case 5:
      return S.suspend(() =>
        S.Struct({
          networkProfiles: S.optional(__S(140)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListNetworkProfilesResult",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListOfferingPromotionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), description: S.optional(S.String) }),
      ).annotate({ identifier: "OfferingPromotion" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143));
    case 1:
      return S.suspend(() =>
        S.Struct({
          offeringPromotions: S.optional(__S(144)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListOfferingPromotionsResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListOfferingsRequest" });
    case 3:
      return S.Array(__S(92));
    case 4:
      return S.suspend(() =>
        S.Struct({ offerings: S.optional(__S(147)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListOfferingsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListOfferingTransactionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          offeringStatus: S.optional(__S(93)),
          transactionId: S.optional(S.String),
          offeringPromotionId: S.optional(S.String),
          createdOn: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          cost: S.optional(__S(89)),
        }),
      ).annotate({ identifier: "OfferingTransaction" });
    case 7:
      return S.Array(__S(150));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          offeringTransactions: S.optional(__S(151)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListOfferingTransactionsResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.optional(S.String), nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListProjectsRequest" });
    case 2:
      return S.Array(__S(16));
    case 3:
      return S.suspend(() =>
        S.Struct({ projects: S.optional(__S(154)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListProjectsResult" });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String, nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListRemoteAccessSessionsRequest",
      });
    case 5:
      return S.Array(__S(29));
    case 6:
      return S.suspend(() =>
        S.Struct({
          remoteAccessSessions: S.optional(__S(157)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListRemoteAccessSessionsResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String, nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListRunsRequest" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(105));
    case 1:
      return S.suspend(() =>
        S.Struct({ runs: S.optional(__S(160)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListRunsResult" });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String, nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSamplesRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.optional(S.String),
          type: S.optional(S.String),
          url: S.optional(S.String),
        }),
      ).annotate({ identifier: "Sample" });
    case 4:
      return S.Array(__S(163));
    case 5:
      return S.suspend(() =>
        S.Struct({ samples: S.optional(__S(164)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListSamplesResult" });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String, nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSuitesRequest" });
    case 7:
      return S.Array(__S(108));
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ suites: S.optional(__S(167)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListSuitesResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 3:
      return S.Array(__S(170));
    case 4:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(171)) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ maxResult: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTestGridProjectsRequest",
      });
    case 6:
      return S.Array(__S(32));
    case 7:
      return S.suspend(() =>
        S.Struct({
          testGridProjects: S.optional(__S(174)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListTestGridProjectsResult",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sessionArn: S.String,
          maxResult: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTestGridSessionActionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(S.String),
          started: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          duration: S.optional(S.Number),
          statusCode: S.optional(S.String),
          requestMethod: S.optional(S.String),
        }),
      ).annotate({ identifier: "TestGridSessionAction" });
    case 2:
      return S.Array(__S(177));
    case 3:
      return S.suspend(() =>
        S.Struct({
          actions: S.optional(__S(178)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListTestGridSessionActionsResult",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sessionArn: S.String,
          type: S.optional(S.String),
          maxResult: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTestGridSessionArtifactsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          filename: S.optional(S.String),
          type: S.optional(S.String),
          url: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "TestGridSessionArtifact" });
    case 6:
      return S.Array(__S(181));
    case 7:
      return S.suspend(() =>
        S.Struct({
          artifacts: S.optional(__S(182)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListTestGridSessionArtifactsResult",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          status: S.optional(S.String),
          creationTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          creationTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTimeAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTimeBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          maxResult: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTestGridSessionsRequest",
      });
    case 1:
      return S.Array(__S(115));
    case 2:
      return S.suspend(() =>
        S.Struct({
          testGridSessions: S.optional(__S(185)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListTestGridSessionsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.String, nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTestsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ tests: S.optional(__S(167)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListTestsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String, nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListUniqueProblemsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.optional(S.String), name: S.optional(S.String) }),
      ).annotate({ identifier: "ProblemDetail" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          run: S.optional(__S(190)),
          job: S.optional(__S(190)),
          suite: S.optional(__S(190)),
          test: S.optional(__S(190)),
          device: S.optional(__S(26)),
          result: S.optional(S.String),
          message: S.optional(S.String),
        }),
      ).annotate({ identifier: "Problem" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(191));
    case 1:
      return S.suspend(() =>
        S.Struct({ message: S.optional(S.String), problems: S.optional(__S(192)) }),
      ).annotate({ identifier: "UniqueProblem" });
    case 2:
      return S.Array(__S(193));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(194).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          uniqueProblems: S.optional(__S(195)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListUniqueProblemsResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          type: S.optional(S.String),
          nextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListUploadsRequest" });
    case 6:
      return S.Array(__S(37));
    case 7:
      return S.suspend(() =>
        S.Struct({ uploads: S.optional(__S(198)), nextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListUploadsResult" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListVPCEConfigurationsRequest",
      });
    case 1:
      return S.Array(__S(40));
    case 2:
      return S.suspend(() =>
        S.Struct({
          vpceConfigurations: S.optional(__S(201)),
          nextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListVPCEConfigurationsResult",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          offeringId: S.String,
          quantity: S.Number,
          offeringPromotionId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PurchaseOfferingRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ offeringTransaction: S.optional(__S(150)) }).pipe(ns),
      ).annotate({ identifier: "PurchaseOfferingResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({ offeringId: S.String, quantity: S.Number }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RenewOfferingRequest" });
    case 6:
      return S.suspend(() => S.Struct({ filters: __S(100), maxDevices: S.Number })).annotate({
        identifier: "DeviceSelectionConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          jobTimeoutMinutes: S.optional(S.Number),
          accountsCleanup: S.optional(S.Boolean),
          appPackagesCleanup: S.optional(S.Boolean),
          videoCapture: S.optional(S.Boolean),
          skipAppResign: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ExecutionConfiguration" });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          appArn: S.optional(S.String),
          devicePoolArn: S.optional(S.String),
          deviceSelectionConfiguration: S.optional(__S(206)),
          name: S.optional(S.String),
          test: __S(65),
          configuration: S.optional(__S(70)),
          executionConfiguration: S.optional(__S(207)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ScheduleRunRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopJobRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopRemoteAccessSessionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopRunRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(171) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(5) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          profileArn: S.optional(S.String),
          labels: S.optional(__S(5)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateDeviceInstanceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ deviceInstance: S.optional(__S(24)) }).pipe(ns)).annotate({
        identifier: "UpdateDeviceInstanceResult",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          rules: S.optional(__S(1)),
          maxDevices: S.optional(S.Number),
          clearMaxDevices: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateDevicePoolRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          packageCleanup: S.optional(S.Boolean),
          excludeAppPackagesFromCleanup: S.optional(__S(5)),
          rebootAfterUse: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateInstanceProfileRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          type: S.optional(S.String),
          uplinkBandwidthBits: S.optional(S.Number),
          downlinkBandwidthBits: S.optional(S.Number),
          uplinkDelayMs: S.optional(S.Number),
          downlinkDelayMs: S.optional(S.Number),
          uplinkJitterMs: S.optional(S.Number),
          downlinkJitterMs: S.optional(S.Number),
          uplinkLossPercent: S.optional(S.Number),
          downlinkLossPercent: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateNetworkProfileRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          defaultJobTimeoutMinutes: S.optional(S.Number),
          vpcConfig: S.optional(__S(12)),
          environmentVariables: S.optional(__S(14)),
          executionRoleArn: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateProjectRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          projectArn: S.String,
          name: S.optional(S.String),
          description: S.optional(S.String),
          vpcConfig: S.optional(__S(12)),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateTestGridProjectRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: S.optional(S.String),
          contentType: S.optional(S.String),
          editContent: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateUploadRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          vpceConfigurationName: S.optional(S.String),
          vpceServiceName: S.optional(S.String),
          serviceDnsName: S.optional(S.String),
          vpceConfigurationDescription: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateVPCEConfigurationRequest",
      });
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
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
    case 25:
      return __c25(i & 7);
    case 26:
      return __c26(i & 7);
    case 27:
      return __c27(i & 7);
  }
}
