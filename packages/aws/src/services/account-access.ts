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
  sdkId: "Account Access",
  serviceShapeName: "AWSAccountAccess",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "account-access" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://account-access-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://account-access.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
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
export class AlreadyCreatedException
  extends /*@__PURE__*/ S.TaggedError<AlreadyCreatedException>()("AlreadyCreatedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
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
export type IdentityCenterInstanceArn = string;
export interface IdentityCenter {
  instanceArn: string;
}
export type IdentitySource = { identityCenter: IdentityCenter };
export type TagsMap = { [key: string]: string | undefined };
export interface CreateApplicationRequest {
  identitySource: IdentitySource;
  tags?: { [key: string]: string | undefined };
}
export type ApplicationArn = string;
export interface CreateApplicationResponse {
  applicationArn: string;
}
export type UserId = string;
export type GroupId = string;
export type IdentityCenterPrincipal =
  | { userId: string; groupId?: never }
  | { userId?: never; groupId: string };
export type Principal = { identityCenter: IdentityCenterPrincipal };
export type RoleArn = string;
export interface PrincipalRoleEntitlement {
  principal: Principal;
  roleArn: string;
}
export type Entitlement = { principalRole: PrincipalRoleEntitlement };
export interface CreateEntitlementRequest {
  applicationArn: string;
  entitlement: Entitlement;
}
export interface CreateEntitlementResponse {
  entitlementId: string;
}
export interface DeleteApplicationRequest {
  applicationArn: string;
}
export interface DeleteApplicationResponse {}
export interface DeleteEntitlementRequest {
  applicationArn: string;
  entitlementId: string;
}
export interface DeleteEntitlementResponse {}
export interface GetApplicationRequest {
  applicationArn: string;
}
export type IdentityCenterApplicationArn = string;
export interface IdentityCenterDetails {
  instanceArn: string;
  applicationArn?: string;
}
export type IdentitySourceDetails = { identityCenter: IdentityCenterDetails };
export type Status =
  | "CREATE_IN_PROGRESS"
  | "ACTIVE"
  | "DELETE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
export type ErrorCode =
  | "AUTHORIZATION_ERROR"
  | "RESOURCE_NOT_FOUND_ERROR"
  | "SERVICE_QUOTA_EXCEEDED_ERROR"
  | "INTERNAL_SERVICE_ERROR"
  | (string & {});
export interface ErrorDetails {
  code: ErrorCode;
  message: string;
}
export interface GetApplicationResponse {
  identitySource: IdentitySourceDetails;
  status: Status;
  tenantId?: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: { [key: string]: string | undefined };
  error?: ErrorDetails;
}
export interface GetEntitlementRequest {
  applicationArn: string;
  entitlementId: string;
}
export type Account = string;
export interface PrincipalRoleEntitlementDetails {
  principal: Principal;
  roleArn: string;
  account: string;
  accountName?: string;
}
export type EntitlementDetails = { principalRole: PrincipalRoleEntitlementDetails };
export interface GetEntitlementResponse {
  applicationArn: string;
  entitlementId: string;
  entitlement: EntitlementDetails;
  createdAt: Date;
}
export interface ListApplicationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ApplicationSummary {
  applicationArn: string;
  tenantId?: string;
  createdAt: Date;
  updatedAt: Date;
}
export type ApplicationList = ApplicationSummary[];
export interface ListApplicationsResponse {
  applications: ApplicationSummary[];
  nextToken?: string;
}
export type IdentityCenterPrincipalFilter =
  | { userId: string; groupId?: never }
  | { userId?: never; groupId: string };
export type PrincipalFilter = { identityCenter: IdentityCenterPrincipalFilter };
export interface PrincipalRoleEntitlementFilter {
  principal?: PrincipalFilter;
  roleArn?: string;
  account?: string;
}
export interface EntitlementFilter {
  principalRole?: PrincipalRoleEntitlementFilter;
}
export interface ListEntitlementsRequest {
  applicationArn: string;
  filter: EntitlementFilter;
  nextToken?: string;
  maxResults?: number;
}
export interface PrincipalRoleEntitlementSummary {
  principal: Principal;
  roleArn: string;
  account: string;
  accountName?: string;
}
export type EntitlementSummary = { principalRole: PrincipalRoleEntitlementSummary };
export interface EntitlementsListMember {
  entitlementId: string;
  entitlement: EntitlementSummary;
  createdAt: Date;
}
export type EntitlementsList = EntitlementsListMember[];
export interface ListEntitlementsResponse {
  entitlements: EntitlementsListMember[];
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
export type CreateApplicationError =
  | AccessDeniedException
  | AlreadyCreatedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an account access manager instance and its Amazon Web Services account access application in the associated IAM Identity Center instance. This operation is idempotent; calling it multiple times with the same parameters returns the existing application.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3, __c0, 3) as any as S.Schema<CreateApplicationRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<CreateApplicationResponse>,
  errors: [
    AccessDeniedException,
    AlreadyCreatedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApplication",
}));

export type CreateEntitlementError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an entitlement (assignment) in account access manager. An entitlement (assignment) grants a principal (IAM Identity Center user or group) permission to assume a specified IAM role in an Amazon Web Services account. This operation is idempotent.
 */
export const createEntitlement: API.OperationMethod<
  CreateEntitlementRequest,
  CreateEntitlementResponse,
  CreateEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9, __c1, 1) as any as S.Schema<CreateEntitlementRequest>,
  output: __S(10, __c1, 2) as any as S.Schema<CreateEntitlementResponse>,
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
  operationName: "CreateEntitlement",
}));

export type DeleteApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an account access manager application. This operation is idempotent; deleting an application that has already been deleted does not return an error.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11, __c1, 3) as any as S.Schema<DeleteApplicationRequest>,
  output: __S(12, __c1, 4) as any as S.Schema<DeleteApplicationResponse>,
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
  operationName: "DeleteApplication",
}));

export type DeleteEntitlementError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an entitlement from an account access manager application. This operation is idempotent; deleting an entitlement that has already been deleted does not return an error.
 */
export const deleteEntitlement: API.OperationMethod<
  DeleteEntitlementRequest,
  DeleteEntitlementResponse,
  DeleteEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13, __c1, 5) as any as S.Schema<DeleteEntitlementRequest>,
  output: __S(12, __c1, 4) as any as S.Schema<DeleteEntitlementResponse>,
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
  operationName: "DeleteEntitlement",
}));

export type GetApplicationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about an account access manager application, including its status, identity source, and tags.
 */
export const getApplication: API.OperationMethod<
  GetApplicationRequest,
  GetApplicationResponse,
  GetApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14, __c1, 6) as any as S.Schema<GetApplicationRequest>,
  output: __S(18, __c2, 2) as any as S.Schema<GetApplicationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplication",
}));

export type GetEntitlementError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a specific entitlement for an account access manager application, including the principal, IAM role, and target account.
 */
export const getEntitlement: API.OperationMethod<
  GetEntitlementRequest,
  GetEntitlementResponse,
  GetEntitlementError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<GetEntitlementRequest>,
  output: __S(22, __c2, 6) as any as S.Schema<GetEntitlementResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEntitlement",
}));

export type ListApplicationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the account access manager applications in your account. Use pagination to ensure that the operation returns quickly and successfully.
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  ApplicationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(23, __c2, 7) as any as S.Schema<ListApplicationsRequest>,
  output: __S(26, __c3, 2) as any as S.Schema<ListApplicationsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "applications" } as const,
})) as any;

export type ListEntitlementsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the entitlements for a specified account access manager application. You can filter results by principal, IAM role, or account. Use pagination to ensure that the operation returns quickly and successfully.
 */
export const listEntitlements: API.PaginatedOperationMethod<
  ListEntitlementsRequest,
  ListEntitlementsResponse,
  ListEntitlementsError,
  Credentials | HttpClient.HttpClient,
  EntitlementsListMember
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(29, __c3, 5) as any as S.Schema<ListEntitlementsRequest>,
  output: __S(32, __c4, 0) as any as S.Schema<ListEntitlementsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEntitlements",
  pagination: { inputToken: "nextToken", outputToken: "nextToken", items: "entitlements" } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags associated with an account access manager resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33, __c4, 1) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(34, __c4, 2) as any as S.Schema<ListTagsForResourceResponse>,
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

export type TagResourceError =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds tags to an account access manager resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35, __c4, 3) as any as S.Schema<TagResourceRequest>,
  output: __S(12, __c1, 4) as any as S.Schema<TagResourceResponse>,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
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
 * Removes tags from an account access manager resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(37, __c4, 5) as any as S.Schema<UntagResourceRequest>,
  output: __S(12, __c1, 4) as any as S.Schema<UntagResourceResponse>,
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

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ instanceArn: S.String })).annotate({
        identifier: "IdentityCenter",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ identityCenter: __S(0, __c0, 0) })]);
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ identitySource: __S(1, __c0, 1), tags: S.optional(__S(2, __c0, 2)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/applications" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 4:
      return S.suspend(() => S.Struct({ applicationArn: S.String })).annotate({
        identifier: "CreateApplicationResponse",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ userId: S.String }),
        /*@__PURE__*/ S.Struct({ groupId: S.String }),
      ]);
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ identityCenter: __S(5, __c0, 5) })]);
    case 7:
      return S.suspend(() => S.Struct({ principal: __S(6, __c0, 6), roleArn: S.String })).annotate({
        identifier: "PrincipalRoleEntitlement",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ principalRole: __S(7, __c0, 7) })]);
    case 1:
      return S.suspend(() =>
        S.Struct({ applicationArn: S.String, entitlement: __S(8, __c1, 0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/entitlements" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateEntitlementRequest" });
    case 2:
      return S.suspend(() => S.Struct({ entitlementId: S.String })).annotate({
        identifier: "CreateEntitlementResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ applicationArn: S.String.pipe(T.HttpLabel("applicationArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/applications/{applicationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteApplicationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationArn: S.String.pipe(T.HttpQuery("applicationArn")),
          entitlementId: S.String.pipe(T.HttpLabel("entitlementId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/entitlements/{entitlementId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEntitlementRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ applicationArn: S.String.pipe(T.HttpLabel("applicationArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/applications/{applicationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetApplicationRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ instanceArn: S.String, applicationArn: S.optional(S.String) }),
      ).annotate({ identifier: "IdentityCenterDetails" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ identityCenter: __S(15, __c1, 7) })]);
    case 1:
      return S.suspend(() => S.Struct({ code: S.String, message: S.String })).annotate({
        identifier: "ErrorDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          identitySource: __S(16, __c2, 0),
          status: S.String,
          tenantId: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          tags: S.optional(__S(2, __c0, 2)),
          error: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "GetApplicationResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          applicationArn: S.String.pipe(T.HttpQuery("applicationArn")),
          entitlementId: S.String.pipe(T.HttpLabel("entitlementId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/entitlements/{entitlementId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEntitlementRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          principal: __S(6, __c0, 6),
          roleArn: S.String,
          account: S.String,
          accountName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PrincipalRoleEntitlementDetails",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ principalRole: __S(20, __c2, 4) })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationArn: S.String,
          entitlementId: S.String,
          entitlement: __S(21, __c2, 5),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "GetEntitlementResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ maxResults: S.optional(S.Number), nextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/applications-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListApplicationsRequest" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          applicationArn: S.String,
          tenantId: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ApplicationSummary" });
    case 1:
      return S.Array(__S(24, __c3, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ applications: __S(25, __c3, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListApplicationsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          principal: S.optional(__S(6, __c0, 6)),
          roleArn: S.optional(S.String),
          account: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PrincipalRoleEntitlementFilter",
      });
    case 4:
      return S.suspend(() => S.Struct({ principalRole: S.optional(__S(27, __c3, 3)) })).annotate({
        identifier: "EntitlementFilter",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationArn: S.String,
          filter: __S(28, __c3, 4),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/entitlements-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListEntitlementsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          entitlementId: S.String,
          entitlement: __S(21, __c2, 5),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "EntitlementsListMember" });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ entitlements: __S(31, __c3, 7), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEntitlementsResponse" });
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
      return S.suspend(() => S.Struct({ tags: S.optional(__S(2, __c0, 2)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(2, __c0, 2),
        }).pipe(
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
          tagKeys: __S(36, __c4, 4).pipe(T.HttpQuery("tagKeys")),
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
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
