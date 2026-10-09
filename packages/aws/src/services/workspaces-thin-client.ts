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
  sdkId: "WorkSpaces Thin Client",
  serviceShapeName: "ThinClient",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "thinclient" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-08-22");
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
              `https://thinclient-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://thinclient-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://thinclient.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://thinclient.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => S.String).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(43)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type EnvironmentName = string | redacted.Redacted<string>;
export type Arn = string;
export type DesktopEndpoint = string | redacted.Redacted<string>;
export type SoftwareSetUpdateSchedule =
  | "USE_MAINTENANCE_WINDOW"
  | "APPLY_IMMEDIATELY"
  | (string & {});
export type MaintenanceWindowType = "SYSTEM" | "CUSTOM" | (string & {});
export type Hour = number;
export type Minute = number;
export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY"
  | (string & {});
export type DayOfWeekList = DayOfWeek[];
export type ApplyTimeOf = "UTC" | "DEVICE" | (string & {});
export interface MaintenanceWindow {
  type: MaintenanceWindowType;
  startTimeHour?: number;
  startTimeMinute?: number;
  endTimeHour?: number;
  endTimeMinute?: number;
  daysOfTheWeek?: DayOfWeek[];
  applyTimeOf?: ApplyTimeOf;
}
export type SoftwareSetUpdateMode = "USE_LATEST" | "USE_DESIRED" | (string & {});
export type SoftwareSetId = string;
export type KmsKeyArn = string;
export type ClientToken = string;
export type TagsMap = { [key: string]: string | undefined };
export type DeviceCreationTagKey = string;
export type DeviceCreationTagValue = string;
export type DeviceCreationTagsMap = { [key: string]: string | undefined };
export interface CreateEnvironmentRequest {
  name?: string | redacted.Redacted<string>;
  desktopArn: string;
  desktopEndpoint?: string | redacted.Redacted<string>;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  maintenanceWindow?: MaintenanceWindow;
  softwareSetUpdateMode?: SoftwareSetUpdateMode;
  desiredSoftwareSetId?: string;
  kmsKeyArn?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  deviceCreationTags?: { [key: string]: string | undefined };
}
export type EnvironmentId = string;
export type DesktopType = "workspaces" | "appstream" | "workspaces-web" | (string & {});
export type ActivationCode = string | redacted.Redacted<string>;
export interface EnvironmentSummary {
  id?: string;
  name?: string | redacted.Redacted<string>;
  desktopArn?: string;
  desktopEndpoint?: string | redacted.Redacted<string>;
  desktopType?: DesktopType;
  activationCode?: string | redacted.Redacted<string>;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  maintenanceWindow?: MaintenanceWindow;
  softwareSetUpdateMode?: SoftwareSetUpdateMode;
  desiredSoftwareSetId?: string;
  pendingSoftwareSetId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  arn?: string;
}
export interface CreateEnvironmentResponse {
  environment?: EnvironmentSummary;
}
export type DeviceId = string;
export interface DeleteDeviceRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteDeviceResponse {}
export interface DeleteEnvironmentRequest {
  id: string;
  clientToken?: string;
}
export interface DeleteEnvironmentResponse {}
export type TargetDeviceStatus = "DEREGISTERED" | "ARCHIVED" | (string & {});
export interface DeregisterDeviceRequest {
  id: string;
  targetDeviceStatus?: TargetDeviceStatus;
  clientToken?: string;
}
export interface DeregisterDeviceResponse {}
export interface GetDeviceRequest {
  id: string;
}
export type DeviceName = string | redacted.Redacted<string>;
export type DeviceStatus =
  | "REGISTERED"
  | "DEREGISTERING"
  | "DEREGISTERED"
  | "ARCHIVED"
  | (string & {});
export type DeviceSoftwareSetComplianceStatus =
  | "NONE"
  | "COMPLIANT"
  | "NOT_COMPLIANT"
  | (string & {});
export type SoftwareSetUpdateStatus = "AVAILABLE" | "IN_PROGRESS" | "UP_TO_DATE" | (string & {});
export type UserId = string | redacted.Redacted<string>;
export interface Device {
  id?: string;
  serialNumber?: string;
  name?: string | redacted.Redacted<string>;
  model?: string;
  environmentId?: string;
  status?: DeviceStatus;
  currentSoftwareSetId?: string;
  currentSoftwareSetVersion?: string;
  desiredSoftwareSetId?: string;
  pendingSoftwareSetId?: string;
  pendingSoftwareSetVersion?: string;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  softwareSetComplianceStatus?: DeviceSoftwareSetComplianceStatus;
  softwareSetUpdateStatus?: SoftwareSetUpdateStatus;
  lastConnectedAt?: Date;
  lastPostureAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  arn?: string;
  kmsKeyArn?: string;
  lastUserId?: string | redacted.Redacted<string>;
}
export interface GetDeviceResponse {
  device?: Device;
}
export interface GetEnvironmentRequest {
  id: string;
}
export type EnvironmentSoftwareSetComplianceStatus =
  | "NO_REGISTERED_DEVICES"
  | "COMPLIANT"
  | "NOT_COMPLIANT"
  | (string & {});
export interface Environment {
  id?: string;
  name?: string | redacted.Redacted<string>;
  desktopArn?: string;
  desktopEndpoint?: string | redacted.Redacted<string>;
  desktopType?: DesktopType;
  activationCode?: string | redacted.Redacted<string>;
  registeredDevicesCount?: number;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  maintenanceWindow?: MaintenanceWindow;
  softwareSetUpdateMode?: SoftwareSetUpdateMode;
  desiredSoftwareSetId?: string;
  pendingSoftwareSetId?: string;
  pendingSoftwareSetVersion?: string;
  softwareSetComplianceStatus?: EnvironmentSoftwareSetComplianceStatus;
  createdAt?: Date;
  updatedAt?: Date;
  arn?: string;
  kmsKeyArn?: string;
  deviceCreationTags?: { [key: string]: string | undefined };
}
export interface GetEnvironmentResponse {
  environment?: Environment;
}
export interface GetSoftwareSetRequest {
  id: string;
}
export type SoftwareSetValidationStatus = "VALIDATED" | "NOT_VALIDATED" | (string & {});
export interface Software {
  name?: string;
  version?: string;
}
export type SoftwareList = Software[];
export interface SoftwareSet {
  id?: string;
  version?: string;
  releasedAt?: Date;
  supportedUntil?: Date;
  validationStatus?: SoftwareSetValidationStatus;
  software?: Software[];
  arn?: string;
}
export interface GetSoftwareSetResponse {
  softwareSet?: SoftwareSet;
}
export type PaginationToken = string;
export type MaxResults = number;
export interface ListDevicesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface DeviceSummary {
  id?: string;
  serialNumber?: string;
  name?: string | redacted.Redacted<string>;
  model?: string;
  environmentId?: string;
  status?: DeviceStatus;
  currentSoftwareSetId?: string;
  desiredSoftwareSetId?: string;
  pendingSoftwareSetId?: string;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  lastConnectedAt?: Date;
  lastPostureAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  arn?: string;
  lastUserId?: string | redacted.Redacted<string>;
}
export type DeviceList = DeviceSummary[];
export interface ListDevicesResponse {
  devices?: DeviceSummary[];
  nextToken?: string;
}
export interface ListEnvironmentsRequest {
  nextToken?: string;
  maxResults?: number;
}
export type EnvironmentList = EnvironmentSummary[];
export interface ListEnvironmentsResponse {
  environments?: EnvironmentSummary[];
  nextToken?: string;
}
export interface ListSoftwareSetsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface SoftwareSetSummary {
  id?: string;
  version?: string;
  releasedAt?: Date;
  supportedUntil?: Date;
  validationStatus?: SoftwareSetValidationStatus;
  arn?: string;
}
export type SoftwareSetList = SoftwareSetSummary[];
export interface ListSoftwareSetsResponse {
  softwareSets?: SoftwareSetSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateDeviceRequest {
  id: string;
  name?: string | redacted.Redacted<string>;
  desiredSoftwareSetId?: string;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
}
export interface UpdateDeviceResponse {
  device?: DeviceSummary;
}
export type SoftwareSetIdOrEmptyString = string;
export interface UpdateEnvironmentRequest {
  id: string;
  name?: string | redacted.Redacted<string>;
  desktopArn?: string;
  desktopEndpoint?: string | redacted.Redacted<string>;
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
  maintenanceWindow?: MaintenanceWindow;
  softwareSetUpdateMode?: SoftwareSetUpdateMode;
  desiredSoftwareSetId?: string;
  deviceCreationTags?: { [key: string]: string | undefined };
}
export interface UpdateEnvironmentResponse {
  environment?: EnvironmentSummary;
}
export interface UpdateSoftwareSetRequest {
  id: string;
  validationStatus: SoftwareSetValidationStatus;
}
export interface UpdateSoftwareSetResponse {}
export type ExceptionMessage = string;
export type ResourceId = string;
export type ResourceType = string;
export type RetryAfterSeconds = number;
export type ServiceCode = string;
export type QuotaCode = string;
export type ValidationExceptionReason =
  | "unknownOperation"
  | "cannotParse"
  | "fieldValidationFailed"
  | "other"
  | (string & {});
export type FieldName = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type CreateEnvironmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an environment for your thin client devices.
 */
export const createEnvironment: API.OperationMethod<
  CreateEnvironmentRequest,
  CreateEnvironmentResponse,
  CreateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4) as any as S.Schema<CreateEnvironmentRequest>,
  output: __S(6) as any as S.Schema<CreateEnvironmentResponse>,
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
  operationName: "CreateEnvironment",
  endpointHostPrefix: "api.",
}));

export type DeleteDeviceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a thin client device.
 */
export const deleteDevice: API.OperationMethod<
  DeleteDeviceRequest,
  DeleteDeviceResponse,
  DeleteDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<DeleteDeviceRequest>,
  output: __S(8) as any as S.Schema<DeleteDeviceResponse>,
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
  operationName: "DeleteDevice",
  endpointHostPrefix: "api.",
}));

export type DeleteEnvironmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an environment.
 */
export const deleteEnvironment: API.OperationMethod<
  DeleteEnvironmentRequest,
  DeleteEnvironmentResponse,
  DeleteEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<DeleteEnvironmentRequest>,
  output: __S(8) as any as S.Schema<DeleteEnvironmentResponse>,
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
  operationName: "DeleteEnvironment",
  endpointHostPrefix: "api.",
}));

export type DeregisterDeviceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deregisters a thin client device.
 */
export const deregisterDevice: API.OperationMethod<
  DeregisterDeviceRequest,
  DeregisterDeviceResponse,
  DeregisterDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<DeregisterDeviceRequest>,
  output: __S(8) as any as S.Schema<DeregisterDeviceResponse>,
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
  operationName: "DeregisterDevice",
  endpointHostPrefix: "api.",
}));

export type GetDeviceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information for a thin client device.
 */
export const getDevice: API.OperationMethod<
  GetDeviceRequest,
  GetDeviceResponse,
  GetDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<GetDeviceRequest>,
  output: __S(13) as any as S.Schema<GetDeviceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDevice",
  endpointHostPrefix: "api.",
}));

export type GetEnvironmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information for an environment.
 */
export const getEnvironment: API.OperationMethod<
  GetEnvironmentRequest,
  GetEnvironmentResponse,
  GetEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<GetEnvironmentRequest>,
  output: __S(16) as any as S.Schema<GetEnvironmentResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnvironment",
  endpointHostPrefix: "api.",
}));

export type GetSoftwareSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information for a software set.
 */
export const getSoftwareSet: API.OperationMethod<
  GetSoftwareSetRequest,
  GetSoftwareSetResponse,
  GetSoftwareSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<GetSoftwareSetRequest>,
  output: __S(21) as any as S.Schema<GetSoftwareSetResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSoftwareSet",
  endpointHostPrefix: "api.",
}));

export type ListDevicesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of thin client devices.
 */
export const listDevices: API.PaginatedOperationMethod<
  ListDevicesRequest,
  ListDevicesResponse,
  ListDevicesError,
  Credentials | HttpClient.HttpClient,
  DeviceSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(22) as any as S.Schema<ListDevicesRequest>,
  output: __S(25) as any as S.Schema<ListDevicesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDevices",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "devices",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListEnvironmentsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of environments.
 */
export const listEnvironments: API.PaginatedOperationMethod<
  ListEnvironmentsRequest,
  ListEnvironmentsResponse,
  ListEnvironmentsError,
  Credentials | HttpClient.HttpClient,
  EnvironmentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(26) as any as S.Schema<ListEnvironmentsRequest>,
  output: __S(28) as any as S.Schema<ListEnvironmentsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnvironments",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "environments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSoftwareSetsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of software sets.
 */
export const listSoftwareSets: API.PaginatedOperationMethod<
  ListSoftwareSetsRequest,
  ListSoftwareSetsResponse,
  ListSoftwareSetsError,
  Credentials | HttpClient.HttpClient,
  SoftwareSetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(29) as any as S.Schema<ListSoftwareSetsRequest>,
  output: __S(32) as any as S.Schema<ListSoftwareSetsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSoftwareSets",
  endpointHostPrefix: "api.",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "softwareSets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(34) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
  endpointHostPrefix: "api.",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<TagResourceRequest>,
  output: __S(8) as any as S.Schema<TagResourceResponse>,
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
  operationName: "TagResource",
  endpointHostPrefix: "api.",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a tag or tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37) as any as S.Schema<UntagResourceRequest>,
  output: __S(8) as any as S.Schema<UntagResourceResponse>,
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
  operationName: "UntagResource",
  endpointHostPrefix: "api.",
}));

export type UpdateDeviceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a thin client device.
 */
export const updateDevice: API.OperationMethod<
  UpdateDeviceRequest,
  UpdateDeviceResponse,
  UpdateDeviceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38) as any as S.Schema<UpdateDeviceRequest>,
  output: __S(39) as any as S.Schema<UpdateDeviceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDevice",
  endpointHostPrefix: "api.",
}));

export type UpdateEnvironmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an environment.
 */
export const updateEnvironment: API.OperationMethod<
  UpdateEnvironmentRequest,
  UpdateEnvironmentResponse,
  UpdateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<UpdateEnvironmentRequest>,
  output: __S(6) as any as S.Schema<UpdateEnvironmentResponse>,
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
  operationName: "UpdateEnvironment",
  endpointHostPrefix: "api.",
}));

export type UpdateSoftwareSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a software set.
 */
export const updateSoftwareSet: API.OperationMethod<
  UpdateSoftwareSetRequest,
  UpdateSoftwareSetResponse,
  UpdateSoftwareSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<UpdateSoftwareSetRequest>,
  output: __S(8) as any as S.Schema<UpdateSoftwareSetResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSoftwareSet",
  endpointHostPrefix: "api.",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          type: S.String,
          startTimeHour: S.optional(S.Number),
          startTimeMinute: S.optional(S.Number),
          endTimeHour: S.optional(S.Number),
          endTimeMinute: S.optional(S.Number),
          daysOfTheWeek: S.optional(__S(0)),
          applyTimeOf: S.optional(S.String),
        }),
      ).annotate({ identifier: "MaintenanceWindow" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(SensitiveString),
          desktopArn: S.String,
          desktopEndpoint: S.optional(SensitiveString),
          softwareSetUpdateSchedule: S.optional(S.String),
          maintenanceWindow: S.optional(__S(1)),
          softwareSetUpdateMode: S.optional(S.String),
          desiredSoftwareSetId: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(2)),
          deviceCreationTags: S.optional(__S(3)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/environments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateEnvironmentRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(SensitiveString),
          desktopArn: S.optional(S.String),
          desktopEndpoint: S.optional(SensitiveString),
          desktopType: S.optional(S.String),
          activationCode: S.optional(SensitiveString),
          softwareSetUpdateSchedule: S.optional(S.String),
          maintenanceWindow: S.optional(__S(1)),
          softwareSetUpdateMode: S.optional(S.String),
          desiredSoftwareSetId: S.optional(S.String),
          pendingSoftwareSetId: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "EnvironmentSummary" });
    case 6:
      return S.suspend(() => S.Struct({ environment: S.optional(__S(5)) })).annotate({
        identifier: "CreateEnvironmentResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/devices/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDeviceRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteDeviceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/environments/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEnvironmentRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          targetDeviceStatus: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/deregister-device/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeregisterDeviceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/devices/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDeviceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          serialNumber: S.optional(S.String),
          name: S.optional(SensitiveString),
          model: S.optional(S.String),
          environmentId: S.optional(S.String),
          status: S.optional(S.String),
          currentSoftwareSetId: S.optional(S.String),
          currentSoftwareSetVersion: S.optional(S.String),
          desiredSoftwareSetId: S.optional(S.String),
          pendingSoftwareSetId: S.optional(S.String),
          pendingSoftwareSetVersion: S.optional(S.String),
          softwareSetUpdateSchedule: S.optional(S.String),
          softwareSetComplianceStatus: S.optional(S.String),
          softwareSetUpdateStatus: S.optional(S.String),
          lastConnectedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastPostureAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          arn: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          lastUserId: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "Device" });
    case 5:
      return S.suspend(() => S.Struct({ device: S.optional(__S(12)) })).annotate({
        identifier: "GetDeviceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/environments/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetEnvironmentRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(SensitiveString),
          desktopArn: S.optional(S.String),
          desktopEndpoint: S.optional(SensitiveString),
          desktopType: S.optional(S.String),
          activationCode: S.optional(SensitiveString),
          registeredDevicesCount: S.optional(S.Number),
          softwareSetUpdateSchedule: S.optional(S.String),
          maintenanceWindow: S.optional(__S(1)),
          softwareSetUpdateMode: S.optional(S.String),
          desiredSoftwareSetId: S.optional(S.String),
          pendingSoftwareSetId: S.optional(S.String),
          pendingSoftwareSetVersion: S.optional(S.String),
          softwareSetComplianceStatus: S.optional(S.String),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          arn: S.optional(S.String),
          kmsKeyArn: S.optional(S.String),
          deviceCreationTags: S.optional(__S(3)),
        }),
      ).annotate({ identifier: "Environment" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ environment: S.optional(__S(15)) })).annotate({
        identifier: "GetEnvironmentResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/softwaresets/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSoftwareSetRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), version: S.optional(S.String) }),
      ).annotate({ identifier: "Software" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          version: S.optional(S.String),
          releasedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          supportedUntil: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          validationStatus: S.optional(S.String),
          software: S.optional(__S(19)),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SoftwareSet" });
    case 5:
      return S.suspend(() => S.Struct({ softwareSet: S.optional(__S(20)) })).annotate({
        identifier: "GetSoftwareSetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/devices" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDevicesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          serialNumber: S.optional(S.String),
          name: S.optional(SensitiveString),
          model: S.optional(S.String),
          environmentId: S.optional(S.String),
          status: S.optional(S.String),
          currentSoftwareSetId: S.optional(S.String),
          desiredSoftwareSetId: S.optional(S.String),
          pendingSoftwareSetId: S.optional(S.String),
          softwareSetUpdateSchedule: S.optional(S.String),
          lastConnectedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastPostureAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          updatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          arn: S.optional(S.String),
          lastUserId: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "DeviceSummary" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(23));
    case 1:
      return S.suspend(() =>
        S.Struct({ devices: S.optional(__S(24)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDevicesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/environments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEnvironmentsRequest" });
    case 3:
      return S.Array(__S(5));
    case 4:
      return S.suspend(() =>
        S.Struct({ environments: S.optional(__S(27)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEnvironmentsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/softwaresets" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSoftwareSetsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          version: S.optional(S.String),
          releasedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          supportedUntil: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          validationStatus: S.optional(S.String),
          arn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SoftwareSetSummary" });
    case 7:
      return S.Array(__S(30));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ softwareSets: S.optional(__S(31)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSoftwareSetsResponse" });
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(2)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(2) }).pipe(
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
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(36).pipe(T.HttpQuery("tagKeys")),
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
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          name: S.optional(SensitiveString),
          desiredSoftwareSetId: S.optional(S.String),
          softwareSetUpdateSchedule: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "PATCH", uri: "/devices/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateDeviceRequest" });
    case 7:
      return S.suspend(() => S.Struct({ device: S.optional(__S(23)) })).annotate({
        identifier: "UpdateDeviceResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          name: S.optional(SensitiveString),
          desktopArn: S.optional(S.String),
          desktopEndpoint: S.optional(SensitiveString),
          softwareSetUpdateSchedule: S.optional(S.String),
          maintenanceWindow: S.optional(__S(1)),
          softwareSetUpdateMode: S.optional(S.String),
          desiredSoftwareSetId: S.optional(S.String),
          deviceCreationTags: S.optional(__S(3)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/environments/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateEnvironmentRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          validationStatus: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/softwaresets/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSoftwareSetRequest" });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 3:
      return S.Array(__S(42));
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
  }
}
