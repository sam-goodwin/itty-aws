import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Cloud9",
  serviceShapeName: "AWSCloud9WorkspaceManagementService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cloud9" });
const ver = /*@__PURE__*/ T.ServiceVersion("2017-09-23");
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
              `https://cloud9-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://cloud9-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://cloud9.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cloud9.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()("BadRequestException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    className: /*@__PURE__*/ S.optional(S.String),
    code: /*@__PURE__*/ S.optional(S.Number),
  }) {}
export class ConcurrentAccessException
  extends /*@__PURE__*/ S.TaggedError<ConcurrentAccessException>()("ConcurrentAccessException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    className: /*@__PURE__*/ S.optional(S.String),
    code: /*@__PURE__*/ S.optional(S.Number),
  }) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    className: /*@__PURE__*/ S.optional(S.String),
    code: /*@__PURE__*/ S.optional(S.Number),
  }) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()("ForbiddenException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    className: /*@__PURE__*/ S.optional(S.String),
    code: /*@__PURE__*/ S.optional(S.Number),
  }) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      className: /*@__PURE__*/ S.optional(S.String),
      code: /*@__PURE__*/ S.optional(S.Number),
    },
  ) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    className: /*@__PURE__*/ S.optional(S.String),
    code: /*@__PURE__*/ S.optional(S.Number),
  }) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()("NotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    className: /*@__PURE__*/ S.optional(S.String),
    code: /*@__PURE__*/ S.optional(S.Number),
  }) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    className: /*@__PURE__*/ S.optional(S.String),
    code: /*@__PURE__*/ S.optional(S.Number),
  }) {}
export type EnvironmentName = string;
export type EnvironmentDescription = string | redacted.Redacted<string>;
export type ClientRequestToken = string;
export type InstanceType = string;
export type SubnetId = string;
export type ImageId = string;
export type AutomaticStopTimeMinutes = number;
export type UserArn = string;
export type TagKey = string | redacted.Redacted<string>;
export type TagValue = string | redacted.Redacted<string>;
export interface Tag {
  Key: string | redacted.Redacted<string>;
  Value: string | redacted.Redacted<string>;
}
export type TagList = Tag[];
export type ConnectionType = "CONNECT_SSH" | "CONNECT_SSM" | (string & {});
export interface CreateEnvironmentEC2Request {
  name: string;
  description?: string | redacted.Redacted<string>;
  clientRequestToken?: string;
  instanceType: string;
  subnetId?: string;
  imageId: string;
  automaticStopTimeMinutes?: number;
  ownerArn?: string;
  tags?: Tag[];
  connectionType?: ConnectionType;
  dryRun?: boolean;
}
export type EnvironmentId = string;
export interface CreateEnvironmentEC2Result {
  environmentId?: string;
}
export type MemberPermissions = "read-write" | "read-only" | (string & {});
export interface CreateEnvironmentMembershipRequest {
  environmentId: string;
  userArn: string;
  permissions: MemberPermissions;
}
export type Permissions = "owner" | "read-write" | "read-only" | (string & {});
export interface EnvironmentMember {
  permissions: Permissions;
  userId: string;
  userArn: string;
  environmentId: string;
  lastAccess?: Date;
}
export interface CreateEnvironmentMembershipResult {
  membership: EnvironmentMember;
}
export interface DeleteEnvironmentRequest {
  environmentId: string;
}
export interface DeleteEnvironmentResult {}
export interface DeleteEnvironmentMembershipRequest {
  environmentId: string;
  userArn: string;
}
export interface DeleteEnvironmentMembershipResult {}
export type PermissionsList = Permissions[];
export type MaxResults = number;
export interface DescribeEnvironmentMembershipsRequest {
  userArn?: string;
  environmentId?: string;
  permissions?: Permissions[];
  nextToken?: string;
  maxResults?: number;
}
export type EnvironmentMembersList = EnvironmentMember[];
export interface DescribeEnvironmentMembershipsResult {
  memberships?: EnvironmentMember[];
  nextToken?: string;
}
export type BoundedEnvironmentIdList = string[];
export interface DescribeEnvironmentsRequest {
  environmentIds: string[];
}
export type EnvironmentType = "ssh" | "ec2" | (string & {});
export type EnvironmentLifecycleStatus =
  | "CREATING"
  | "CREATED"
  | "CREATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED"
  | (string & {});
export interface EnvironmentLifecycle {
  status?: EnvironmentLifecycleStatus;
  reason?: string;
  failureResource?: string;
}
export type ManagedCredentialsStatus =
  | "ENABLED_ON_CREATE"
  | "ENABLED_BY_OWNER"
  | "DISABLED_BY_DEFAULT"
  | "DISABLED_BY_OWNER"
  | "DISABLED_BY_COLLABORATOR"
  | "PENDING_REMOVAL_BY_COLLABORATOR"
  | "PENDING_START_REMOVAL_BY_COLLABORATOR"
  | "PENDING_REMOVAL_BY_OWNER"
  | "PENDING_START_REMOVAL_BY_OWNER"
  | "FAILED_REMOVAL_BY_COLLABORATOR"
  | "FAILED_REMOVAL_BY_OWNER"
  | (string & {});
export interface Environment {
  id?: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  type: EnvironmentType;
  connectionType?: ConnectionType;
  arn: string;
  ownerArn: string;
  lifecycle?: EnvironmentLifecycle;
  managedCredentialsStatus?: ManagedCredentialsStatus;
}
export type EnvironmentList = Environment[];
export interface DescribeEnvironmentsResult {
  environments?: Environment[];
}
export interface DescribeEnvironmentStatusRequest {
  environmentId: string;
}
export type EnvironmentStatus =
  | "error"
  | "creating"
  | "connecting"
  | "ready"
  | "stopping"
  | "stopped"
  | "deleting"
  | (string & {});
export interface DescribeEnvironmentStatusResult {
  status: EnvironmentStatus;
  message: string;
}
export interface ListEnvironmentsRequest {
  nextToken?: string;
  maxResults?: number;
}
export type EnvironmentIdList = string[];
export interface ListEnvironmentsResult {
  nextToken?: string;
  environmentIds?: string[];
}
export type EnvironmentArn = string;
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = (string | redacted.Redacted<string>)[];
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: (string | redacted.Redacted<string>)[];
}
export interface UntagResourceResponse {}
export type ManagedCredentialsAction = "ENABLE" | "DISABLE" | (string & {});
export interface UpdateEnvironmentRequest {
  environmentId: string;
  name?: string;
  description?: string | redacted.Redacted<string>;
  managedCredentialsAction?: ManagedCredentialsAction;
}
export interface UpdateEnvironmentResult {}
export interface UpdateEnvironmentMembershipRequest {
  environmentId: string;
  userArn: string;
  permissions: MemberPermissions;
}
export interface UpdateEnvironmentMembershipResult {
  membership?: EnvironmentMember;
}
export type CreateEnvironmentEC2Error =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and
 * then connects from the instance to the environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const createEnvironmentEC2: API.OperationMethod<
  CreateEnvironmentEC2Request,
  CreateEnvironmentEC2Result,
  CreateEnvironmentEC2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<CreateEnvironmentEC2Request>,
  output: __S(3) as any as S.Schema<CreateEnvironmentEC2Result>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEnvironmentEC2",
}));

export type CreateEnvironmentMembershipError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Adds an environment member to an Cloud9 development environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const createEnvironmentMembership: API.OperationMethod<
  CreateEnvironmentMembershipRequest,
  CreateEnvironmentMembershipResult,
  CreateEnvironmentMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4) as any as S.Schema<CreateEnvironmentMembershipRequest>,
  output: __S(6) as any as S.Schema<CreateEnvironmentMembershipResult>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEnvironmentMembership",
}));

export type DeleteEnvironmentError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the
 * environment, also terminates the instance.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const deleteEnvironment: API.OperationMethod<
  DeleteEnvironmentRequest,
  DeleteEnvironmentResult,
  DeleteEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<DeleteEnvironmentRequest>,
  output: __S(8) as any as S.Schema<DeleteEnvironmentResult>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEnvironment",
}));

export type DeleteEnvironmentMembershipError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes an environment member from a development environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const deleteEnvironmentMembership: API.OperationMethod<
  DeleteEnvironmentMembershipRequest,
  DeleteEnvironmentMembershipResult,
  DeleteEnvironmentMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<DeleteEnvironmentMembershipRequest>,
  output: __S(10) as any as S.Schema<DeleteEnvironmentMembershipResult>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEnvironmentMembership",
}));

export type DescribeEnvironmentMembershipsError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets information about environment members for an Cloud9 development environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const describeEnvironmentMemberships: API.PaginatedOperationMethod<
  DescribeEnvironmentMembershipsRequest,
  DescribeEnvironmentMembershipsResult,
  DescribeEnvironmentMembershipsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(12) as any as S.Schema<DescribeEnvironmentMembershipsRequest>,
  output: __S(14) as any as S.Schema<DescribeEnvironmentMembershipsResult>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEnvironmentMemberships",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type DescribeEnvironmentsError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets information about Cloud9 development environments.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const describeEnvironments: API.OperationMethod<
  DescribeEnvironmentsRequest,
  DescribeEnvironmentsResult,
  DescribeEnvironmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(16) as any as S.Schema<DescribeEnvironmentsRequest>,
  output: __S(20) as any as S.Schema<DescribeEnvironmentsResult>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEnvironments",
}));

export type DescribeEnvironmentStatusError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets status information for an Cloud9 development environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const describeEnvironmentStatus: API.OperationMethod<
  DescribeEnvironmentStatusRequest,
  DescribeEnvironmentStatusResult,
  DescribeEnvironmentStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<DescribeEnvironmentStatusRequest>,
  output: __S(22) as any as S.Schema<DescribeEnvironmentStatusResult>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeEnvironmentStatus",
}));

export type ListEnvironmentsError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Gets a list of Cloud9 development environment identifiers.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const listEnvironments: API.PaginatedOperationMethod<
  ListEnvironmentsRequest,
  ListEnvironmentsResult,
  ListEnvironmentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(23) as any as S.Schema<ListEnvironmentsRequest>,
  output: __S(24) as any as S.Schema<ListEnvironmentsResult>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnvironments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Gets a list of the tags associated with an Cloud9 development environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(26) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [BadRequestException, InternalServerErrorException, NotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError =
  | BadRequestException
  | ConcurrentAccessException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Adds tags to an Cloud9 development environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 *
 * Tags that you add to an Cloud9 environment by using this method will NOT be
 * automatically propagated to underlying resources.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<TagResourceRequest>,
  output: __S(8) as any as S.Schema<TagResourceResponse>,
  errors: [
    BadRequestException,
    ConcurrentAccessException,
    InternalServerErrorException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | ConcurrentAccessException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Removes tags from an Cloud9 development environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<UntagResourceRequest>,
  output: __S(8) as any as S.Schema<UntagResourceResponse>,
  errors: [
    BadRequestException,
    ConcurrentAccessException,
    InternalServerErrorException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateEnvironmentError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Changes the settings of an existing Cloud9 development environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const updateEnvironment: API.OperationMethod<
  UpdateEnvironmentRequest,
  UpdateEnvironmentResult,
  UpdateEnvironmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<UpdateEnvironmentRequest>,
  output: __S(8) as any as S.Schema<UpdateEnvironmentResult>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEnvironment",
}));

export type UpdateEnvironmentMembershipError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | LimitExceededException
  | NotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Changes the settings of an existing environment member for an Cloud9 development
 * environment.
 *
 * Cloud9 is no longer available to new customers. Existing customers of
 * Cloud9 can continue to use the service as normal.
 * Learn more"
 */
export const updateEnvironmentMembership: API.OperationMethod<
  UpdateEnvironmentMembershipRequest,
  UpdateEnvironmentMembershipResult,
  UpdateEnvironmentMembershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<UpdateEnvironmentMembershipRequest>,
  output: __S(32) as any as S.Schema<UpdateEnvironmentMembershipResult>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    LimitExceededException,
    NotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateEnvironmentMembership",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: SensitiveString, Value: SensitiveString })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(__S(0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(SensitiveString),
          clientRequestToken: S.optional(S.String),
          instanceType: S.String,
          subnetId: S.optional(S.String),
          imageId: S.String,
          automaticStopTimeMinutes: S.optional(S.Number),
          ownerArn: S.optional(S.String),
          tags: S.optional(__S(1)),
          connectionType: S.optional(S.String),
          dryRun: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateEnvironmentEC2Request",
      });
    case 3:
      return S.suspend(() => S.Struct({ environmentId: S.optional(S.String) })).annotate({
        identifier: "CreateEnvironmentEC2Result",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          environmentId: S.String,
          userArn: S.String,
          permissions: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateEnvironmentMembershipRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          permissions: S.String,
          userId: S.String,
          userArn: S.String,
          environmentId: S.String,
          lastAccess: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "EnvironmentMember" });
    case 6:
      return S.suspend(() => S.Struct({ membership: __S(5) })).annotate({
        identifier: "CreateEnvironmentMembershipResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ environmentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteEnvironmentRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteEnvironmentResult",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ environmentId: S.String, userArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteEnvironmentMembershipRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteEnvironmentMembershipResult",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          userArn: S.optional(S.String),
          environmentId: S.optional(S.String),
          permissions: S.optional(__S(11)),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeEnvironmentMembershipsRequest",
      });
    case 5:
      return S.Array(__S(5));
    case 6:
      return S.suspend(() =>
        S.Struct({
          memberships: S.optional(__S(13)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeEnvironmentMembershipsResult",
      });
    case 7:
      return S.Array(S.String);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ environmentIds: __S(15) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEnvironmentsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          reason: S.optional(S.String),
          failureResource: S.optional(S.String),
        }),
      ).annotate({ identifier: "EnvironmentLifecycle" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          type: S.String,
          connectionType: S.optional(S.String),
          arn: S.String,
          ownerArn: S.String,
          lifecycle: S.optional(__S(17)),
          managedCredentialsStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "Environment" });
    case 3:
      return S.Array(__S(18));
    case 4:
      return S.suspend(() => S.Struct({ environments: S.optional(__S(19)) })).annotate({
        identifier: "DescribeEnvironmentsResult",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ environmentId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeEnvironmentStatusRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ status: S.String, message: S.String })).annotate({
        identifier: "DescribeEnvironmentStatusResult",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEnvironmentsRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          environmentIds: S.optional(__S(15)),
        }),
      ).annotate({ identifier: "ListEnvironmentsResult" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(1)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, Tags: __S(1) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 4:
      return S.Array(SensitiveString);
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceARN: S.String, TagKeys: __S(28) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          environmentId: S.String,
          name: S.optional(S.String),
          description: S.optional(SensitiveString),
          managedCredentialsAction: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateEnvironmentRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          environmentId: S.String,
          userArn: S.String,
          permissions: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateEnvironmentMembershipRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ membership: S.optional(__S(5)) })).annotate({
        identifier: "UpdateEnvironmentMembershipResult",
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
  }
}
