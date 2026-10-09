import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials as Creds } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "finspace data",
  serviceShapeName: "AWSHabaneroPublicAPI",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "finspace-api" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-07-13");
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
              `https://finspace-api-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://finspace-api-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://finspace-api.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://finspace-api.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      reason: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type PermissionGroupId = string;
export type UserId = string;
export type ClientToken = string;
export interface AssociateUserToPermissionGroupRequest {
  permissionGroupId: string;
  userId: string;
  clientToken?: string;
}
export type StatusCode = number;
export interface AssociateUserToPermissionGroupResponse {
  statusCode?: number;
}
export type DatasetId = string;
export type ChangeType = "REPLACE" | "APPEND" | "MODIFY" | (string & {});
export type StringMapKey = string;
export type StringMapValue = string;
export type SourceParams = { [key: string]: string | undefined };
export type FormatParams = { [key: string]: string | undefined };
export interface CreateChangesetRequest {
  clientToken?: string;
  datasetId: string;
  changeType: ChangeType;
  sourceParams: { [key: string]: string | undefined };
  formatParams: { [key: string]: string | undefined };
}
export type ChangesetId = string;
export interface CreateChangesetResponse {
  datasetId?: string;
  changesetId?: string;
}
export type DatasetTitle = string;
export type DatasetKind = "TABULAR" | "NON_TABULAR" | (string & {});
export type DatasetDescription = string;
export type OwnerName = string;
export type PhoneNumber = string;
export type Email = string | redacted.Redacted<string>;
export interface DatasetOwnerInfo {
  name?: string;
  phoneNumber?: string;
  email?: string | redacted.Redacted<string>;
}
export type StringValueLength1to250 = string;
export interface ResourcePermission {
  permission?: string;
}
export type ResourcePermissionsList = ResourcePermission[];
export interface PermissionGroupParams {
  permissionGroupId?: string;
  datasetPermissions?: ResourcePermission[];
}
export type AliasString = string;
export type ColumnDataType =
  | "STRING"
  | "CHAR"
  | "INTEGER"
  | "TINYINT"
  | "SMALLINT"
  | "BIGINT"
  | "FLOAT"
  | "DOUBLE"
  | "DATE"
  | "DATETIME"
  | "BOOLEAN"
  | "BINARY"
  | (string & {});
export type ColumnName = string;
export type ColumnDescription = string;
export interface ColumnDefinition {
  dataType?: ColumnDataType;
  columnName?: string;
  columnDescription?: string;
}
export type ColumnList = ColumnDefinition[];
export type ColumnNameList = string[];
export interface SchemaDefinition {
  columns?: ColumnDefinition[];
  primaryKeyColumns?: string[];
}
export interface SchemaUnion {
  tabularSchemaConfig?: SchemaDefinition;
}
export interface CreateDatasetRequest {
  clientToken?: string;
  datasetTitle: string;
  kind: DatasetKind;
  datasetDescription?: string;
  ownerInfo?: DatasetOwnerInfo;
  permissionGroupParams: PermissionGroupParams;
  alias?: string;
  schemaDefinition?: SchemaUnion;
}
export interface CreateDatasetResponse {
  datasetId?: string;
}
export type StringValueLength1to255 = string;
export type SortColumnList = string[];
export type PartitionColumnList = string[];
export type TimestampEpoch = number;
export type DataViewDestinationType = string;
export type ExportFileFormat = "PARQUET" | "DELIMITED_TEXT" | (string & {});
export type S3DestinationFormatOptions = { [key: string]: string | undefined };
export interface DataViewDestinationTypeParams {
  destinationType: string;
  s3DestinationExportFileFormat?: ExportFileFormat;
  s3DestinationExportFileFormatOptions?: { [key: string]: string | undefined };
}
export interface CreateDataViewRequest {
  clientToken?: string;
  datasetId: string;
  autoUpdate?: boolean;
  sortColumns?: string[];
  partitionColumns?: string[];
  asOfTimestamp?: number;
  destinationTypeParams: DataViewDestinationTypeParams;
}
export type DataViewId = string;
export interface CreateDataViewResponse {
  datasetId?: string;
  dataViewId?: string;
}
export type PermissionGroupName = string | redacted.Redacted<string>;
export type PermissionGroupDescription = string | redacted.Redacted<string>;
export type ApplicationPermission =
  | "CreateDataset"
  | "ManageClusters"
  | "ManageUsersAndGroups"
  | "ManageAttributeSets"
  | "ViewAuditData"
  | "AccessNotebooks"
  | "GetTemporaryCredentials"
  | (string & {});
export type ApplicationPermissionList = ApplicationPermission[];
export interface CreatePermissionGroupRequest {
  name: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  applicationPermissions: ApplicationPermission[];
  clientToken?: string;
}
export interface CreatePermissionGroupResponse {
  permissionGroupId?: string;
}
export type UserType = "SUPER_USER" | "APP_USER" | (string & {});
export type FirstName = string | redacted.Redacted<string>;
export type LastName = string | redacted.Redacted<string>;
export type ApiAccess = "ENABLED" | "DISABLED" | (string & {});
export type RoleArn = string;
export interface CreateUserRequest {
  emailAddress: string | redacted.Redacted<string>;
  type: UserType;
  firstName?: string | redacted.Redacted<string>;
  lastName?: string | redacted.Redacted<string>;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  clientToken?: string;
}
export interface CreateUserResponse {
  userId?: string;
}
export interface DeleteDatasetRequest {
  clientToken?: string;
  datasetId: string;
}
export interface DeleteDatasetResponse {
  datasetId?: string;
}
export interface DeletePermissionGroupRequest {
  permissionGroupId: string;
  clientToken?: string;
}
export interface DeletePermissionGroupResponse {
  permissionGroupId?: string;
}
export interface DisableUserRequest {
  userId: string;
  clientToken?: string;
}
export interface DisableUserResponse {
  userId?: string;
}
export interface DisassociateUserFromPermissionGroupRequest {
  permissionGroupId: string;
  userId: string;
  clientToken?: string;
}
export interface DisassociateUserFromPermissionGroupResponse {
  statusCode?: number;
}
export interface EnableUserRequest {
  userId: string;
  clientToken?: string;
}
export interface EnableUserResponse {
  userId?: string;
}
export interface GetChangesetRequest {
  datasetId: string;
  changesetId: string;
}
export type ChangesetArn = string;
export type IngestionStatus =
  | "PENDING"
  | "FAILED"
  | "SUCCESS"
  | "RUNNING"
  | "STOP_REQUESTED"
  | (string & {});
export type ErrorMessage = string;
export type ErrorCategory =
  | "VALIDATION"
  | "SERVICE_QUOTA_EXCEEDED"
  | "ACCESS_DENIED"
  | "RESOURCE_NOT_FOUND"
  | "THROTTLING"
  | "INTERNAL_SERVICE_EXCEPTION"
  | "CANCELLED"
  | "USER_RECOVERABLE"
  | (string & {});
export interface ChangesetErrorInfo {
  errorMessage?: string;
  errorCategory?: ErrorCategory;
}
export interface GetChangesetResponse {
  changesetId?: string;
  changesetArn?: string;
  datasetId?: string;
  changeType?: ChangeType;
  sourceParams?: { [key: string]: string | undefined };
  formatParams?: { [key: string]: string | undefined };
  createTime?: number;
  status?: IngestionStatus;
  errorInfo?: ChangesetErrorInfo;
  activeUntilTimestamp?: number;
  activeFromTimestamp?: number;
  updatesChangesetId?: string;
  updatedByChangesetId?: string;
}
export interface GetDatasetRequest {
  datasetId: string;
}
export type DatasetArn = string;
export type DatasetStatus = "PENDING" | "FAILED" | "SUCCESS" | "RUNNING" | (string & {});
export interface GetDatasetResponse {
  datasetId?: string;
  datasetArn?: string;
  datasetTitle?: string;
  kind?: DatasetKind;
  datasetDescription?: string;
  createTime?: number;
  lastModifiedTime?: number;
  schemaDefinition?: SchemaUnion;
  alias?: string;
  status?: DatasetStatus;
}
export interface GetDataViewRequest {
  dataViewId: string;
  datasetId: string;
}
export interface DataViewErrorInfo {
  errorMessage?: string;
  errorCategory?: ErrorCategory;
}
export type DataViewArn = string;
export type DataViewStatus =
  | "RUNNING"
  | "STARTING"
  | "FAILED"
  | "CANCELLED"
  | "TIMEOUT"
  | "SUCCESS"
  | "PENDING"
  | "FAILED_CLEANUP_FAILED"
  | (string & {});
export interface GetDataViewResponse {
  autoUpdate?: boolean;
  partitionColumns?: string[];
  datasetId?: string;
  asOfTimestamp?: number;
  errorInfo?: DataViewErrorInfo;
  lastModifiedTime?: number;
  createTime?: number;
  sortColumns?: string[];
  dataViewId?: string;
  dataViewArn?: string;
  destinationTypeParams?: DataViewDestinationTypeParams;
  status?: DataViewStatus;
}
export interface GetExternalDataViewAccessDetailsRequest {
  dataViewId: string;
  datasetId: string;
}
export type AccessKeyId = string;
export type SecretAccessKey = string | redacted.Redacted<string>;
export type SessionToken = string | redacted.Redacted<string>;
export interface AwsCredentials {
  accessKeyId?: string;
  secretAccessKey?: string | redacted.Redacted<string>;
  sessionToken?: string | redacted.Redacted<string>;
  expiration?: number;
}
export type S3BucketName = string;
export type S3Key = string;
export interface S3Location {
  bucket: string;
  key: string;
}
export interface GetExternalDataViewAccessDetailsResponse {
  credentials?: AwsCredentials;
  s3Location?: S3Location;
}
export interface GetPermissionGroupRequest {
  permissionGroupId: string;
}
export type PermissionGroupMembershipStatus =
  | "ADDITION_IN_PROGRESS"
  | "ADDITION_SUCCESS"
  | "REMOVAL_IN_PROGRESS"
  | (string & {});
export interface PermissionGroup {
  permissionGroupId?: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  applicationPermissions?: ApplicationPermission[];
  createTime?: number;
  lastModifiedTime?: number;
  membershipStatus?: PermissionGroupMembershipStatus;
}
export interface GetPermissionGroupResponse {
  permissionGroup?: PermissionGroup;
}
export type SessionDuration = number;
export type IdType = string;
export interface GetProgrammaticAccessCredentialsRequest {
  durationInMinutes?: number;
  environmentId: string;
}
export type StringValueLength1to2552 = string;
export type StringValueMaxLength1000 = string;
export interface Credentials {
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
}
export interface GetProgrammaticAccessCredentialsResponse {
  credentials?: Credentials;
  durationInMinutes?: number;
}
export interface GetUserRequest {
  userId: string;
}
export type UserStatus = "CREATING" | "ENABLED" | "DISABLED" | (string & {});
export interface GetUserResponse {
  userId?: string;
  status?: UserStatus;
  firstName?: string | redacted.Redacted<string>;
  lastName?: string | redacted.Redacted<string>;
  emailAddress?: string | redacted.Redacted<string>;
  type?: UserType;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  createTime?: number;
  lastEnabledTime?: number;
  lastDisabledTime?: number;
  lastModifiedTime?: number;
  lastLoginTime?: number;
}
export type LocationType = "INGESTION" | "SAGEMAKER" | (string & {});
export interface GetWorkingLocationRequest {
  locationType?: LocationType;
}
export type StringValueLength1to1024 = string;
export type StringValueLength1to63 = string;
export interface GetWorkingLocationResponse {
  s3Uri?: string;
  s3Path?: string;
  s3Bucket?: string;
}
export type ResultLimit = number;
export type PaginationToken = string;
export interface ListChangesetsRequest {
  datasetId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ChangesetSummary {
  changesetId?: string;
  changesetArn?: string;
  datasetId?: string;
  changeType?: ChangeType;
  sourceParams?: { [key: string]: string | undefined };
  formatParams?: { [key: string]: string | undefined };
  createTime?: number;
  status?: IngestionStatus;
  errorInfo?: ChangesetErrorInfo;
  activeUntilTimestamp?: number;
  activeFromTimestamp?: number;
  updatesChangesetId?: string;
  updatedByChangesetId?: string;
}
export type ChangesetList = ChangesetSummary[];
export interface ListChangesetsResponse {
  changesets?: ChangesetSummary[];
  nextToken?: string;
}
export interface ListDatasetsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface Dataset {
  datasetId?: string;
  datasetArn?: string;
  datasetTitle?: string;
  kind?: DatasetKind;
  datasetDescription?: string;
  ownerInfo?: DatasetOwnerInfo;
  createTime?: number;
  lastModifiedTime?: number;
  schemaDefinition?: SchemaUnion;
  alias?: string;
}
export type DatasetList = Dataset[];
export interface ListDatasetsResponse {
  datasets?: Dataset[];
  nextToken?: string;
}
export interface ListDataViewsRequest {
  datasetId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DataViewSummary {
  dataViewId?: string;
  dataViewArn?: string;
  datasetId?: string;
  asOfTimestamp?: number;
  partitionColumns?: string[];
  sortColumns?: string[];
  status?: DataViewStatus;
  errorInfo?: DataViewErrorInfo;
  destinationTypeProperties?: DataViewDestinationTypeParams;
  autoUpdate?: boolean;
  createTime?: number;
  lastModifiedTime?: number;
}
export type DataViewList = DataViewSummary[];
export interface ListDataViewsResponse {
  nextToken?: string;
  dataViews?: DataViewSummary[];
}
export interface ListPermissionGroupsRequest {
  nextToken?: string;
  maxResults: number;
}
export type PermissionGroupList = PermissionGroup[];
export interface ListPermissionGroupsResponse {
  permissionGroups?: PermissionGroup[];
  nextToken?: string;
}
export interface ListPermissionGroupsByUserRequest {
  userId: string;
  nextToken?: string;
  maxResults: number;
}
export interface PermissionGroupByUser {
  permissionGroupId?: string;
  name?: string | redacted.Redacted<string>;
  membershipStatus?: PermissionGroupMembershipStatus;
}
export type PermissionGroupByUserList = PermissionGroupByUser[];
export interface ListPermissionGroupsByUserResponse {
  permissionGroups?: PermissionGroupByUser[];
  nextToken?: string;
}
export interface ListUsersRequest {
  nextToken?: string;
  maxResults: number;
}
export interface User {
  userId?: string;
  status?: UserStatus;
  firstName?: string | redacted.Redacted<string>;
  lastName?: string | redacted.Redacted<string>;
  emailAddress?: string | redacted.Redacted<string>;
  type?: UserType;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  createTime?: number;
  lastEnabledTime?: number;
  lastDisabledTime?: number;
  lastModifiedTime?: number;
  lastLoginTime?: number;
}
export type UserList = User[];
export interface ListUsersResponse {
  users?: User[];
  nextToken?: string;
}
export interface ListUsersByPermissionGroupRequest {
  permissionGroupId: string;
  nextToken?: string;
  maxResults: number;
}
export interface UserByPermissionGroup {
  userId?: string;
  status?: UserStatus;
  firstName?: string | redacted.Redacted<string>;
  lastName?: string | redacted.Redacted<string>;
  emailAddress?: string | redacted.Redacted<string>;
  type?: UserType;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  membershipStatus?: PermissionGroupMembershipStatus;
}
export type UserByPermissionGroupList = UserByPermissionGroup[];
export interface ListUsersByPermissionGroupResponse {
  users?: UserByPermissionGroup[];
  nextToken?: string;
}
export interface ResetUserPasswordRequest {
  userId: string;
  clientToken?: string;
}
export type Password = string | redacted.Redacted<string>;
export interface ResetUserPasswordResponse {
  userId?: string;
  temporaryPassword?: string | redacted.Redacted<string>;
}
export interface UpdateChangesetRequest {
  clientToken?: string;
  datasetId: string;
  changesetId: string;
  sourceParams: { [key: string]: string | undefined };
  formatParams: { [key: string]: string | undefined };
}
export interface UpdateChangesetResponse {
  changesetId?: string;
  datasetId?: string;
}
export interface UpdateDatasetRequest {
  clientToken?: string;
  datasetId: string;
  datasetTitle: string;
  kind: DatasetKind;
  datasetDescription?: string;
  alias?: string;
  schemaDefinition?: SchemaUnion;
}
export interface UpdateDatasetResponse {
  datasetId?: string;
}
export interface UpdatePermissionGroupRequest {
  permissionGroupId: string;
  name?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  applicationPermissions?: ApplicationPermission[];
  clientToken?: string;
}
export interface UpdatePermissionGroupResponse {
  permissionGroupId?: string;
}
export interface UpdateUserRequest {
  userId: string;
  type?: UserType;
  firstName?: string | redacted.Redacted<string>;
  lastName?: string | redacted.Redacted<string>;
  apiAccess?: ApiAccess;
  apiAccessPrincipalArn?: string;
  clientToken?: string;
}
export interface UpdateUserResponse {
  userId?: string;
}
export type ErrorMessage2 = string;
export type AssociateUserToPermissionGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a user to a permission group to grant permissions for actions a user can perform in FinSpace.
 */
export const associateUserToPermissionGroup: API.OperationMethod<
  AssociateUserToPermissionGroupRequest,
  AssociateUserToPermissionGroupResponse,
  AssociateUserToPermissionGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AssociateUserToPermissionGroupRequest>,
  output: __S(1) as any as S.Schema<AssociateUserToPermissionGroupResponse>,
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
  operationName: "AssociateUserToPermissionGroup",
}));

export type CreateChangesetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Changeset in a FinSpace Dataset.
 */
export const createChangeset: API.OperationMethod<
  CreateChangesetRequest,
  CreateChangesetResponse,
  CreateChangesetError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3) as any as S.Schema<CreateChangesetRequest>,
  output: __S(4) as any as S.Schema<CreateChangesetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateChangeset",
}));

export type CreateDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new FinSpace Dataset.
 */
export const createDataset: API.OperationMethod<
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateDatasetError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<CreateDatasetRequest>,
  output: __S(15) as any as S.Schema<CreateDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataset",
}));

export type CreateDataViewError =
  | ConflictException
  | InternalServerException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Dataview for a Dataset.
 */
export const createDataView: API.OperationMethod<
  CreateDataViewRequest,
  CreateDataViewResponse,
  CreateDataViewError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<CreateDataViewRequest>,
  output: __S(18) as any as S.Schema<CreateDataViewResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDataView",
}));

export type CreatePermissionGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | LimitExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a group of permissions for various actions that a user can perform in FinSpace.
 */
export const createPermissionGroup: API.OperationMethod<
  CreatePermissionGroupRequest,
  CreatePermissionGroupResponse,
  CreatePermissionGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<CreatePermissionGroupRequest>,
  output: __S(21) as any as S.Schema<CreatePermissionGroupResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    LimitExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePermissionGroup",
}));

export type CreateUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | LimitExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new user in FinSpace.
 */
export const createUser: API.OperationMethod<
  CreateUserRequest,
  CreateUserResponse,
  CreateUserError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<CreateUserRequest>,
  output: __S(23) as any as S.Schema<CreateUserResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    LimitExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateUser",
}));

export type DeleteDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a FinSpace Dataset.
 */
export const deleteDataset: API.OperationMethod<
  DeleteDatasetRequest,
  DeleteDatasetResponse,
  DeleteDatasetError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24) as any as S.Schema<DeleteDatasetRequest>,
  output: __S(15) as any as S.Schema<DeleteDatasetResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataset",
}));

export type DeletePermissionGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a permission group. This action is irreversible.
 */
export const deletePermissionGroup: API.OperationMethod<
  DeletePermissionGroupRequest,
  DeletePermissionGroupResponse,
  DeletePermissionGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<DeletePermissionGroupRequest>,
  output: __S(21) as any as S.Schema<DeletePermissionGroupResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePermissionGroup",
}));

export type DisableUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Denies access to the FinSpace web application and API for the specified user.
 */
export const disableUser: API.OperationMethod<
  DisableUserRequest,
  DisableUserResponse,
  DisableUserError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26) as any as S.Schema<DisableUserRequest>,
  output: __S(23) as any as S.Schema<DisableUserResponse>,
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
  operationName: "DisableUser",
}));

export type DisassociateUserFromPermissionGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a user from a permission group.
 */
export const disassociateUserFromPermissionGroup: API.OperationMethod<
  DisassociateUserFromPermissionGroupRequest,
  DisassociateUserFromPermissionGroupResponse,
  DisassociateUserFromPermissionGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<DisassociateUserFromPermissionGroupRequest>,
  output: __S(1) as any as S.Schema<DisassociateUserFromPermissionGroupResponse>,
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
  operationName: "DisassociateUserFromPermissionGroup",
}));

export type EnableUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Allows the specified user to access the FinSpace web application and API.
 */
export const enableUser: API.OperationMethod<
  EnableUserRequest,
  EnableUserResponse,
  EnableUserError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28) as any as S.Schema<EnableUserRequest>,
  output: __S(23) as any as S.Schema<EnableUserResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableUser",
}));

export type GetChangesetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get information about a Changeset.
 */
export const getChangeset: API.OperationMethod<
  GetChangesetRequest,
  GetChangesetResponse,
  GetChangesetError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<GetChangesetRequest>,
  output: __S(31) as any as S.Schema<GetChangesetResponse>,
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
  operationName: "GetChangeset",
}));

export type GetDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a Dataset.
 */
export const getDataset: API.OperationMethod<
  GetDatasetRequest,
  GetDatasetResponse,
  GetDatasetError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<GetDatasetRequest>,
  output: __S(33) as any as S.Schema<GetDatasetResponse>,
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
  operationName: "GetDataset",
}));

export type GetDataViewError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about a Dataview.
 */
export const getDataView: API.OperationMethod<
  GetDataViewRequest,
  GetDataViewResponse,
  GetDataViewError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<GetDataViewRequest>,
  output: __S(35) as any as S.Schema<GetDataViewResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataView",
}));

export type GetExternalDataViewAccessDetailsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the credentials to access the external Dataview from an S3 location. To call this API:
 *
 * - You must retrieve the programmatic credentials.
 *
 * - You must be a member of a FinSpace user group, where the dataset that you want to access has `Read Dataset Data` permissions.
 */
export const getExternalDataViewAccessDetails: API.OperationMethod<
  GetExternalDataViewAccessDetailsRequest,
  GetExternalDataViewAccessDetailsResponse,
  GetExternalDataViewAccessDetailsError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<GetExternalDataViewAccessDetailsRequest>,
  output: __S(39) as any as S.Schema<GetExternalDataViewAccessDetailsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExternalDataViewAccessDetails",
}));

export type GetPermissionGroupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of a specific permission group.
 */
export const getPermissionGroup: API.OperationMethod<
  GetPermissionGroupRequest,
  GetPermissionGroupResponse,
  GetPermissionGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<GetPermissionGroupRequest>,
  output: __S(42) as any as S.Schema<GetPermissionGroupResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPermissionGroup",
}));

export type GetProgrammaticAccessCredentialsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Request programmatic credentials to use with FinSpace SDK. For more information, see Step 2. Access credentials programmatically using IAM access key id and secret access key.
 */
export const getProgrammaticAccessCredentials: API.OperationMethod<
  GetProgrammaticAccessCredentialsRequest,
  GetProgrammaticAccessCredentialsResponse,
  GetProgrammaticAccessCredentialsError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<GetProgrammaticAccessCredentialsRequest>,
  output: __S(45) as any as S.Schema<GetProgrammaticAccessCredentialsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProgrammaticAccessCredentials",
}));

export type GetUserError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details for a specific user.
 */
export const getUser: API.OperationMethod<
  GetUserRequest,
  GetUserResponse,
  GetUserError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46) as any as S.Schema<GetUserRequest>,
  output: __S(47) as any as S.Schema<GetUserResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUser",
}));

export type GetWorkingLocationError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * A temporary Amazon S3 location, where you can copy your files from a source location to stage or use
 * as a scratch space in FinSpace notebook.
 */
export const getWorkingLocation: API.OperationMethod<
  GetWorkingLocationRequest,
  GetWorkingLocationResponse,
  GetWorkingLocationError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48) as any as S.Schema<GetWorkingLocationRequest>,
  output: __S(49) as any as S.Schema<GetWorkingLocationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetWorkingLocation",
}));

export type ListChangesetsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the FinSpace Changesets for a Dataset.
 */
export const listChangesets: API.PaginatedOperationMethod<
  ListChangesetsRequest,
  ListChangesetsResponse,
  ListChangesetsError,
  Creds | HttpClient.HttpClient,
  ChangesetSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(50) as any as S.Schema<ListChangesetsRequest>,
  output: __S(52) as any as S.Schema<ListChangesetsResponse>,
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
  operationName: "ListChangesets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "changesets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDatasetsError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all of the active Datasets that a user has access to.
 */
export const listDatasets: API.PaginatedOperationMethod<
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListDatasetsError,
  Creds | HttpClient.HttpClient,
  Dataset
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(53) as any as S.Schema<ListDatasetsRequest>,
  output: __S(56) as any as S.Schema<ListDatasetsResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDatasets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "datasets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataViewsError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all available Dataviews for a Dataset.
 */
export const listDataViews: API.PaginatedOperationMethod<
  ListDataViewsRequest,
  ListDataViewsResponse,
  ListDataViewsError,
  Creds | HttpClient.HttpClient,
  DataViewSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(57) as any as S.Schema<ListDataViewsRequest>,
  output: __S(60) as any as S.Schema<ListDataViewsResponse>,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataViews",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataViews",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPermissionGroupsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all available permission groups in FinSpace.
 */
export const listPermissionGroups: API.PaginatedOperationMethod<
  ListPermissionGroupsRequest,
  ListPermissionGroupsResponse,
  ListPermissionGroupsError,
  Creds | HttpClient.HttpClient,
  PermissionGroup
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(61) as any as S.Schema<ListPermissionGroupsRequest>,
  output: __S(63) as any as S.Schema<ListPermissionGroupsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPermissionGroups",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "permissionGroups",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPermissionGroupsByUserError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the permission groups that are associated with a specific user.
 */
export const listPermissionGroupsByUser: API.OperationMethod<
  ListPermissionGroupsByUserRequest,
  ListPermissionGroupsByUserResponse,
  ListPermissionGroupsByUserError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<ListPermissionGroupsByUserRequest>,
  output: __S(67) as any as S.Schema<ListPermissionGroupsByUserResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPermissionGroupsByUser",
}));

export type ListUsersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all available users in FinSpace.
 */
export const listUsers: API.PaginatedOperationMethod<
  ListUsersRequest,
  ListUsersResponse,
  ListUsersError,
  Creds | HttpClient.HttpClient,
  User
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(68) as any as S.Schema<ListUsersRequest>,
  output: __S(70) as any as S.Schema<ListUsersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "users",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListUsersByPermissionGroupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists details of all the users in a specific permission group.
 */
export const listUsersByPermissionGroup: API.OperationMethod<
  ListUsersByPermissionGroupRequest,
  ListUsersByPermissionGroupResponse,
  ListUsersByPermissionGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<ListUsersByPermissionGroupRequest>,
  output: __S(74) as any as S.Schema<ListUsersByPermissionGroupResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsersByPermissionGroup",
}));

export type ResetUserPasswordError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user.
 */
export const resetUserPassword: API.OperationMethod<
  ResetUserPasswordRequest,
  ResetUserPasswordResponse,
  ResetUserPasswordError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<ResetUserPasswordRequest>,
  output: __S(76) as any as S.Schema<ResetUserPasswordResponse>,
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
  operationName: "ResetUserPassword",
}));

export type UpdateChangesetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a FinSpace Changeset.
 */
export const updateChangeset: API.OperationMethod<
  UpdateChangesetRequest,
  UpdateChangesetResponse,
  UpdateChangesetError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<UpdateChangesetRequest>,
  output: __S(78) as any as S.Schema<UpdateChangesetResponse>,
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
  operationName: "UpdateChangeset",
}));

export type UpdateDatasetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a FinSpace Dataset.
 */
export const updateDataset: API.OperationMethod<
  UpdateDatasetRequest,
  UpdateDatasetResponse,
  UpdateDatasetError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79) as any as S.Schema<UpdateDatasetRequest>,
  output: __S(15) as any as S.Schema<UpdateDatasetResponse>,
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
  operationName: "UpdateDataset",
}));

export type UpdatePermissionGroupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Modifies the details of a permission group. You cannot modify a `permissionGroupID`.
 */
export const updatePermissionGroup: API.OperationMethod<
  UpdatePermissionGroupRequest,
  UpdatePermissionGroupResponse,
  UpdatePermissionGroupError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<UpdatePermissionGroupRequest>,
  output: __S(21) as any as S.Schema<UpdatePermissionGroupResponse>,
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
  operationName: "UpdatePermissionGroup",
}));

export type UpdateUserError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Modifies the details of the specified user. You cannot update the `userId` for a user.
 */
export const updateUser: API.OperationMethod<
  UpdateUserRequest,
  UpdateUserResponse,
  UpdateUserError,
  Creds | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81) as any as S.Schema<UpdateUserRequest>,
  output: __S(23) as any as S.Schema<UpdateUserResponse>,
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
  operationName: "UpdateUser",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          permissionGroupId: S.String.pipe(T.HttpLabel("permissionGroupId")),
          userId: S.String.pipe(T.HttpLabel("userId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/permission-group/{permissionGroupId}/users/{userId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateUserToPermissionGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ statusCode: S.optional(S.Number).pipe(T.HttpResponseCode()) }),
      ).annotate({
        identifier: "AssociateUserToPermissionGroupResponse",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          changeType: S.String,
          sourceParams: __S(2),
          formatParams: __S(2),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasets/{datasetId}/changesetsv2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateChangesetRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ datasetId: S.optional(S.String), changesetId: S.optional(S.String) }),
      ).annotate({ identifier: "CreateChangesetResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.optional(S.String),
          phoneNumber: S.optional(S.String),
          email: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "DatasetOwnerInfo" });
    case 6:
      return S.suspend(() => S.Struct({ permission: S.optional(S.String) })).annotate({
        identifier: "ResourcePermission",
      });
    case 7:
      return S.Array(__S(6));
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          permissionGroupId: S.optional(S.String),
          datasetPermissions: S.optional(__S(7)),
        }),
      ).annotate({ identifier: "PermissionGroupParams" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          dataType: S.optional(S.String),
          columnName: S.optional(S.String),
          columnDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "ColumnDefinition" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          columns: S.optional(__S(10)),
          primaryKeyColumns: S.optional(__S(11)),
        }),
      ).annotate({ identifier: "SchemaDefinition" });
    case 5:
      return S.suspend(() => S.Struct({ tabularSchemaConfig: S.optional(__S(12)) })).annotate({
        identifier: "SchemaUnion",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          datasetTitle: S.String,
          kind: S.String,
          datasetDescription: S.optional(S.String),
          ownerInfo: S.optional(__S(5)),
          permissionGroupParams: __S(8),
          alias: S.optional(S.String),
          schemaDefinition: S.optional(__S(13)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/datasetsv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDatasetRequest" });
    case 7:
      return S.suspend(() => S.Struct({ datasetId: S.optional(S.String) })).annotate({
        identifier: "CreateDatasetResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          destinationType: S.String,
          s3DestinationExportFileFormat: S.optional(S.String),
          s3DestinationExportFileFormatOptions: S.optional(__S(2)),
        }),
      ).annotate({
        identifier: "DataViewDestinationTypeParams",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          autoUpdate: S.optional(S.Boolean),
          sortColumns: S.optional(__S(11)),
          partitionColumns: S.optional(__S(11)),
          asOfTimestamp: S.optional(S.Number),
          destinationTypeParams: __S(16),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/datasets/{datasetId}/dataviewsv2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateDataViewRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ datasetId: S.optional(S.String), dataViewId: S.optional(S.String) }),
      ).annotate({ identifier: "CreateDataViewResponse" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          description: S.optional(SensitiveString),
          applicationPermissions: __S(19),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/permission-group" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreatePermissionGroupRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ permissionGroupId: S.optional(S.String) })).annotate({
        identifier: "CreatePermissionGroupResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          emailAddress: SensitiveString,
          type: S.String,
          firstName: S.optional(SensitiveString),
          lastName: S.optional(SensitiveString),
          apiAccess: S.optional(S.String),
          apiAccessPrincipalArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/user" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateUserRequest" });
    case 7:
      return S.suspend(() => S.Struct({ userId: S.optional(S.String) })).annotate({
        identifier: "CreateUserResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/datasetsv2/{datasetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDatasetRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          permissionGroupId: S.String.pipe(T.HttpLabel("permissionGroupId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/permission-group/{permissionGroupId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePermissionGroupRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          userId: S.String.pipe(T.HttpLabel("userId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/user/{userId}/disable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DisableUserRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          permissionGroupId: S.String.pipe(T.HttpLabel("permissionGroupId")),
          userId: S.String.pipe(T.HttpLabel("userId")),
          clientToken: S.optional(S.String).pipe(T.HttpQuery("clientToken"), T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/permission-group/{permissionGroupId}/users/{userId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateUserFromPermissionGroupRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          userId: S.String.pipe(T.HttpLabel("userId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/user/{userId}/enable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "EnableUserRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          changesetId: S.String.pipe(T.HttpLabel("changesetId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}/changesetsv2/{changesetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetChangesetRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ errorMessage: S.optional(S.String), errorCategory: S.optional(S.String) }),
      ).annotate({ identifier: "ChangesetErrorInfo" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          changesetId: S.optional(S.String),
          changesetArn: S.optional(S.String),
          datasetId: S.optional(S.String),
          changeType: S.optional(S.String),
          sourceParams: S.optional(__S(2)),
          formatParams: S.optional(__S(2)),
          createTime: S.optional(S.Number),
          status: S.optional(S.String),
          errorInfo: S.optional(__S(30)),
          activeUntilTimestamp: S.optional(S.Number),
          activeFromTimestamp: S.optional(S.Number),
          updatesChangesetId: S.optional(S.String),
          updatedByChangesetId: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetChangesetResponse" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ datasetId: S.String.pipe(T.HttpLabel("datasetId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasetsv2/{datasetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDatasetRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.optional(S.String),
          datasetArn: S.optional(S.String),
          datasetTitle: S.optional(S.String),
          kind: S.optional(S.String),
          datasetDescription: S.optional(S.String),
          createTime: S.optional(S.Number),
          lastModifiedTime: S.optional(S.Number),
          schemaDefinition: S.optional(__S(13)),
          alias: S.optional(S.String),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetDatasetResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          dataViewId: S.String.pipe(T.HttpLabel("dataViewId")),
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}/dataviewsv2/{dataViewId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDataViewRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          autoUpdate: S.optional(S.Boolean),
          partitionColumns: S.optional(__S(11)),
          datasetId: S.optional(S.String),
          asOfTimestamp: S.optional(S.Number),
          errorInfo: S.optional(__S(30)),
          lastModifiedTime: S.optional(S.Number),
          createTime: S.optional(S.Number),
          sortColumns: S.optional(__S(11)),
          dataViewId: S.optional(S.String),
          dataViewArn: S.optional(S.String),
          destinationTypeParams: S.optional(__S(16)),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetDataViewResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          dataViewId: S.String.pipe(T.HttpLabel("dataViewId")),
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/datasets/{datasetId}/dataviewsv2/{dataViewId}/external-access-details",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetExternalDataViewAccessDetailsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: S.optional(S.String),
          secretAccessKey: S.optional(SensitiveString),
          sessionToken: S.optional(SensitiveString),
          expiration: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AwsCredentials" });
    case 6:
      return S.suspend(() => S.Struct({ bucket: S.String, key: S.String })).annotate({
        identifier: "S3Location",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ credentials: S.optional(__S(37)), s3Location: S.optional(__S(38)) }),
      ).annotate({
        identifier: "GetExternalDataViewAccessDetailsResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ permissionGroupId: S.String.pipe(T.HttpLabel("permissionGroupId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/permission-group/{permissionGroupId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPermissionGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          permissionGroupId: S.optional(S.String),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          applicationPermissions: S.optional(__S(19)),
          createTime: S.optional(S.Number),
          lastModifiedTime: S.optional(S.Number),
          membershipStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "PermissionGroup" });
    case 2:
      return S.suspend(() => S.Struct({ permissionGroup: S.optional(__S(41)) })).annotate({
        identifier: "GetPermissionGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          durationInMinutes: S.optional(S.Number).pipe(T.HttpQuery("durationInMinutes")),
          environmentId: S.String.pipe(T.HttpQuery("environmentId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/credentials/programmatic" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetProgrammaticAccessCredentialsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          accessKeyId: S.optional(S.String),
          secretAccessKey: S.optional(S.String),
          sessionToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "Credentials" });
    case 5:
      return S.suspend(() =>
        S.Struct({ credentials: S.optional(__S(44)), durationInMinutes: S.optional(S.Number) }),
      ).annotate({
        identifier: "GetProgrammaticAccessCredentialsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ userId: S.String.pipe(T.HttpLabel("userId")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/user/{userId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetUserRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String),
          status: S.optional(S.String),
          firstName: S.optional(SensitiveString),
          lastName: S.optional(SensitiveString),
          emailAddress: S.optional(SensitiveString),
          type: S.optional(S.String),
          apiAccess: S.optional(S.String),
          apiAccessPrincipalArn: S.optional(S.String),
          createTime: S.optional(S.Number),
          lastEnabledTime: S.optional(S.Number),
          lastDisabledTime: S.optional(S.Number),
          lastModifiedTime: S.optional(S.Number),
          lastLoginTime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "GetUserResponse" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ locationType: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/workingLocationV1" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkingLocationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          s3Uri: S.optional(S.String),
          s3Path: S.optional(S.String),
          s3Bucket: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetWorkingLocationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}/changesetsv2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListChangesetsRequest" });
    case 3:
      return S.Array(__S(31));
    case 4:
      return S.suspend(() =>
        S.Struct({ changesets: S.optional(__S(51)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListChangesetsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/datasetsv2" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDatasetsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.optional(S.String),
          datasetArn: S.optional(S.String),
          datasetTitle: S.optional(S.String),
          kind: S.optional(S.String),
          datasetDescription: S.optional(S.String),
          ownerInfo: S.optional(__S(5)),
          createTime: S.optional(S.Number),
          lastModifiedTime: S.optional(S.Number),
          schemaDefinition: S.optional(__S(13)),
          alias: S.optional(S.String),
        }),
      ).annotate({ identifier: "Dataset" });
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ datasets: S.optional(__S(55)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDatasetsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/datasets/{datasetId}/dataviewsv2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListDataViewsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          dataViewId: S.optional(S.String),
          dataViewArn: S.optional(S.String),
          datasetId: S.optional(S.String),
          asOfTimestamp: S.optional(S.Number),
          partitionColumns: S.optional(__S(11)),
          sortColumns: S.optional(__S(11)),
          status: S.optional(S.String),
          errorInfo: S.optional(__S(30)),
          destinationTypeProperties: S.optional(__S(16)),
          autoUpdate: S.optional(S.Boolean),
          createTime: S.optional(S.Number),
          lastModifiedTime: S.optional(S.Number),
        }),
      ).annotate({ identifier: "DataViewSummary" });
    case 3:
      return S.Array(__S(58));
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), dataViews: S.optional(__S(59)) }),
      ).annotate({ identifier: "ListDataViewsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.Number.pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/permission-group" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListPermissionGroupsRequest",
      });
    case 6:
      return S.Array(__S(41));
    case 7:
      return S.suspend(() =>
        S.Struct({
          permissionGroups: S.optional(__S(62)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPermissionGroupsResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userId: S.String.pipe(T.HttpLabel("userId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.Number.pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/user/{userId}/permission-groups" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPermissionGroupsByUserRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          permissionGroupId: S.optional(S.String),
          name: S.optional(SensitiveString),
          membershipStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "PermissionGroupByUser" });
    case 2:
      return S.Array(__S(65));
    case 3:
      return S.suspend(() =>
        S.Struct({
          permissionGroups: S.optional(__S(66)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPermissionGroupsByUserResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.Number.pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/user" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListUsersRequest" });
    case 5:
      return S.Array(__S(47));
    case 6:
      return S.suspend(() =>
        S.Struct({ users: S.optional(__S(69)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListUsersResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          permissionGroupId: S.String.pipe(T.HttpLabel("permissionGroupId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.Number.pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/permission-group/{permissionGroupId}/users" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListUsersByPermissionGroupRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String),
          status: S.optional(S.String),
          firstName: S.optional(SensitiveString),
          lastName: S.optional(SensitiveString),
          emailAddress: S.optional(SensitiveString),
          type: S.optional(S.String),
          apiAccess: S.optional(S.String),
          apiAccessPrincipalArn: S.optional(S.String),
          membershipStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "UserByPermissionGroup" });
    case 1:
      return S.Array(__S(72));
    case 2:
      return S.suspend(() =>
        S.Struct({ users: S.optional(__S(73)), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListUsersByPermissionGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          userId: S.String.pipe(T.HttpLabel("userId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/user/{userId}/password" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ResetUserPasswordRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ userId: S.optional(S.String), temporaryPassword: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "ResetUserPasswordResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          changesetId: S.String.pipe(T.HttpLabel("changesetId")),
          sourceParams: __S(2),
          formatParams: __S(2),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/datasets/{datasetId}/changesetsv2/{changesetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateChangesetRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ changesetId: S.optional(S.String), datasetId: S.optional(S.String) }),
      ).annotate({ identifier: "UpdateChangesetResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          datasetId: S.String.pipe(T.HttpLabel("datasetId")),
          datasetTitle: S.String,
          kind: S.String,
          datasetDescription: S.optional(S.String),
          alias: S.optional(S.String),
          schemaDefinition: S.optional(__S(13)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/datasetsv2/{datasetId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDatasetRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          permissionGroupId: S.String.pipe(T.HttpLabel("permissionGroupId")),
          name: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          applicationPermissions: S.optional(__S(19)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/permission-group/{permissionGroupId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdatePermissionGroupRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          userId: S.String.pipe(T.HttpLabel("userId")),
          type: S.optional(S.String),
          firstName: S.optional(SensitiveString),
          lastName: S.optional(SensitiveString),
          apiAccess: S.optional(S.String),
          apiAccessPrincipalArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/user/{userId}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateUserRequest" });
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
  }
}
