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
const IdentityCenter = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<IdentityCenter>;
export type IdentitySource = { identityCenter: IdentityCenter };
const IdentitySource = /*@__PURE__*/ __L.at(__c0, 1);
export type TagsMap = { [key: string]: string | undefined };
const TagsMap = /*@__PURE__*/ __L.at(__c0, 2);
export interface CreateApplicationRequest {
  identitySource: IdentitySource;
  tags?: { [key: string]: string | undefined };
}
const CreateApplicationRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreateApplicationRequest>;
export type ApplicationArn = string;
export interface CreateApplicationResponse {
  applicationArn: string;
}
const CreateApplicationResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CreateApplicationResponse>;
export type UserId = string;
export type GroupId = string;
export type IdentityCenterPrincipal =
  | { userId: string; groupId?: never }
  | { userId?: never; groupId: string };
const IdentityCenterPrincipal = /*@__PURE__*/ __L.at(__c0, 5);
export type Principal = { identityCenter: IdentityCenterPrincipal };
const Principal = /*@__PURE__*/ __L.at(__c0, 6);
export type RoleArn = string;
export interface PrincipalRoleEntitlement {
  principal: Principal;
  roleArn: string;
}
const PrincipalRoleEntitlement = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<PrincipalRoleEntitlement>;
export type Entitlement = { principalRole: PrincipalRoleEntitlement };
const Entitlement = /*@__PURE__*/ __L.at(__c1, 0);
export interface CreateEntitlementRequest {
  applicationArn: string;
  entitlement: Entitlement;
}
const CreateEntitlementRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateEntitlementRequest>;
export interface CreateEntitlementResponse {
  entitlementId: string;
}
const CreateEntitlementResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateEntitlementResponse>;
export interface DeleteApplicationRequest {
  applicationArn: string;
}
const DeleteApplicationRequest = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<DeleteApplicationRequest>;
export interface DeleteApplicationResponse {}
const DeleteApplicationResponse = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<DeleteApplicationResponse>;
export interface DeleteEntitlementRequest {
  applicationArn: string;
  entitlementId: string;
}
const DeleteEntitlementRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<DeleteEntitlementRequest>;
export interface DeleteEntitlementResponse {}
const DeleteEntitlementResponse =
  DeleteApplicationResponse as any as S.Schema<DeleteEntitlementResponse>;
export interface GetApplicationRequest {
  applicationArn: string;
}
const GetApplicationRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<GetApplicationRequest>;
export type IdentityCenterApplicationArn = string;
export interface IdentityCenterDetails {
  instanceArn: string;
  applicationArn?: string;
}
const IdentityCenterDetails = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<IdentityCenterDetails>;
export type IdentitySourceDetails = { identityCenter: IdentityCenterDetails };
const IdentitySourceDetails = /*@__PURE__*/ __L.at(__c2, 0);
export type Status =
  | "CREATE_IN_PROGRESS"
  | "ACTIVE"
  | "DELETE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_FAILED"
  | (string & {});
const Status = S.String;

export type ErrorCode =
  | "AUTHORIZATION_ERROR"
  | "RESOURCE_NOT_FOUND_ERROR"
  | "SERVICE_QUOTA_EXCEEDED_ERROR"
  | "INTERNAL_SERVICE_ERROR"
  | (string & {});
const ErrorCode = S.String;

export interface ErrorDetails {
  code: ErrorCode;
  message: string;
}
const ErrorDetails = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<ErrorDetails>;
export interface GetApplicationResponse {
  identitySource: IdentitySourceDetails;
  status: Status;
  tenantId?: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: { [key: string]: string | undefined };
  error?: ErrorDetails;
}
const GetApplicationResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<GetApplicationResponse>;
export interface GetEntitlementRequest {
  applicationArn: string;
  entitlementId: string;
}
const GetEntitlementRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<GetEntitlementRequest>;
export type Account = string;
export interface PrincipalRoleEntitlementDetails {
  principal: Principal;
  roleArn: string;
  account: string;
  accountName?: string;
}
const PrincipalRoleEntitlementDetails = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<PrincipalRoleEntitlementDetails>;
export type EntitlementDetails = { principalRole: PrincipalRoleEntitlementDetails };
const EntitlementDetails = /*@__PURE__*/ __L.at(__c2, 5);
export interface GetEntitlementResponse {
  applicationArn: string;
  entitlementId: string;
  entitlement: EntitlementDetails;
  createdAt: Date;
}
const GetEntitlementResponse = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<GetEntitlementResponse>;
export interface ListApplicationsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListApplicationsRequest = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<ListApplicationsRequest>;
export interface ApplicationSummary {
  applicationArn: string;
  tenantId?: string;
  createdAt: Date;
  updatedAt: Date;
}
const ApplicationSummary = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ApplicationSummary>;
export type ApplicationList = ApplicationSummary[];
const ApplicationList = /*@__PURE__*/ __L.at(__c3, 1);
export interface ListApplicationsResponse {
  applications: ApplicationSummary[];
  nextToken?: string;
}
const ListApplicationsResponse = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<ListApplicationsResponse>;
export type IdentityCenterPrincipalFilter =
  | { userId: string; groupId?: never }
  | { userId?: never; groupId: string };
export type PrincipalFilter = { identityCenter: IdentityCenterPrincipalFilter };
const PrincipalFilter = Principal as any as S.Schema<PrincipalFilter>;
export interface PrincipalRoleEntitlementFilter {
  principal?: PrincipalFilter;
  roleArn?: string;
  account?: string;
}
const PrincipalRoleEntitlementFilter = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<PrincipalRoleEntitlementFilter>;
export interface EntitlementFilter {
  principalRole?: PrincipalRoleEntitlementFilter;
}
const EntitlementFilter = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<EntitlementFilter>;
export interface ListEntitlementsRequest {
  applicationArn: string;
  filter: EntitlementFilter;
  nextToken?: string;
  maxResults?: number;
}
const ListEntitlementsRequest = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<ListEntitlementsRequest>;
export interface PrincipalRoleEntitlementSummary {
  principal: Principal;
  roleArn: string;
  account: string;
  accountName?: string;
}
export type EntitlementSummary = { principalRole: PrincipalRoleEntitlementSummary };
const EntitlementSummary = EntitlementDetails as any as S.Schema<EntitlementSummary>;
export interface EntitlementsListMember {
  entitlementId: string;
  entitlement: EntitlementSummary;
  createdAt: Date;
}
const EntitlementsListMember = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<EntitlementsListMember>;
export type EntitlementsList = EntitlementsListMember[];
const EntitlementsList = /*@__PURE__*/ __L.at(__c3, 7);
export interface ListEntitlementsResponse {
  entitlements: EntitlementsListMember[];
  nextToken?: string;
}
const ListEntitlementsResponse = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<ListEntitlementsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteApplicationResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = /*@__PURE__*/ __L.at(__c4, 4);
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteApplicationResponse as any as S.Schema<UntagResourceResponse>;
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
  input: CreateApplicationRequest,
  output: CreateApplicationResponse,
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
  input: CreateEntitlementRequest,
  output: CreateEntitlementResponse,
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
  input: DeleteApplicationRequest,
  output: DeleteApplicationResponse,
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
  input: DeleteEntitlementRequest,
  output: DeleteEntitlementResponse,
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
  input: GetApplicationRequest,
  output: GetApplicationResponse,
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
  input: GetEntitlementRequest,
  output: GetEntitlementResponse,
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
  input: ListApplicationsRequest,
  output: ListApplicationsResponse,
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
  input: ListEntitlementsRequest,
  output: ListEntitlementsResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ instanceArn: S.String })).annotate({
        identifier: "IdentityCenter",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ identityCenter: IdentityCenter })]);
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ identitySource: IdentitySource, tags: S.optional(TagsMap) }).pipe(
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
      return S.Union([/*@__PURE__*/ S.Struct({ identityCenter: IdentityCenterPrincipal })]);
    case 7:
      return S.suspend(() => S.Struct({ principal: Principal, roleArn: S.String })).annotate({
        identifier: "PrincipalRoleEntitlement",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ principalRole: PrincipalRoleEntitlement })]);
    case 1:
      return S.suspend(() =>
        S.Struct({ applicationArn: S.String, entitlement: Entitlement }).pipe(
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
      return S.Union([/*@__PURE__*/ S.Struct({ identityCenter: IdentityCenterDetails })]);
    case 1:
      return S.suspend(() => S.Struct({ code: ErrorCode, message: S.String })).annotate({
        identifier: "ErrorDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          identitySource: IdentitySourceDetails,
          status: Status,
          tenantId: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          tags: S.optional(TagsMap),
          error: S.optional(ErrorDetails),
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
          principal: Principal,
          roleArn: S.String,
          account: S.String,
          accountName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PrincipalRoleEntitlementDetails",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ principalRole: PrincipalRoleEntitlementDetails })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          applicationArn: S.String,
          entitlementId: S.String,
          entitlement: EntitlementDetails,
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
      return S.Array(ApplicationSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ applications: ApplicationList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListApplicationsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          principal: S.optional(PrincipalFilter),
          roleArn: S.optional(S.String),
          account: S.optional(S.String),
        }),
      ).annotate({
        identifier: "PrincipalRoleEntitlementFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ principalRole: S.optional(PrincipalRoleEntitlementFilter) }),
      ).annotate({ identifier: "EntitlementFilter" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          applicationArn: S.String,
          filter: EntitlementFilter,
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
          entitlement: EntitlementSummary,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "EntitlementsListMember" });
    case 7:
      return S.Array(EntitlementsListMember);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ entitlements: EntitlementsList, nextToken: S.optional(S.String) }),
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
      return S.suspend(() => S.Struct({ tags: S.optional(TagsMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagsMap }).pipe(
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
      ).annotate({ identifier: "UntagResourceRequest" });
  }
}
