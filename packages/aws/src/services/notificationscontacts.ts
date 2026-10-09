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
  sdkId: "NotificationsContacts",
  serviceShapeName: "NotificationsContacts",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "notifications-contacts" });
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
  const _p0 = (_0: unknown) => ({
    authSchemes: [{ name: "sigv4", signingRegion: `${_.getAttr(_0, "implicitGlobalRegion")}` }],
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
            `https://notifications-contacts-fips.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            _p0(PartitionResult),
            {},
          );
        }
        return e(
          `https://notifications-contacts.${_.getAttr(PartitionResult, "implicitGlobalRegion")}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          _p0(PartitionResult),
          {},
        );
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
      resourceId: S.String,
      resourceType: S.String,
      serviceCode: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
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
export type EmailContactArn = string;
export type Token = string | redacted.Redacted<string>;
export interface ActivateEmailContactRequest {
  arn: string;
  code: string | redacted.Redacted<string>;
}
const ActivateEmailContactRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<ActivateEmailContactRequest>;
export interface ActivateEmailContactResponse {}
const ActivateEmailContactResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<ActivateEmailContactResponse>;
export type EmailContactName = string | redacted.Redacted<string>;
export type EmailContactAddress = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c0, 2);
export interface CreateEmailContactRequest {
  name: string | redacted.Redacted<string>;
  emailAddress: string;
  tags?: { [key: string]: string | undefined };
}
const CreateEmailContactRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreateEmailContactRequest>;
export interface CreateEmailContactResponse {
  arn: string;
}
const CreateEmailContactResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CreateEmailContactResponse>;
export interface DeleteEmailContactRequest {
  arn: string;
}
const DeleteEmailContactRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<DeleteEmailContactRequest>;
export interface DeleteEmailContactResponse {}
const DeleteEmailContactResponse =
  ActivateEmailContactResponse as any as S.Schema<DeleteEmailContactResponse>;
export interface GetEmailContactRequest {
  arn: string;
}
const GetEmailContactRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<GetEmailContactRequest>;
export type SensitiveEmailContactAddress = string | redacted.Redacted<string>;
export type EmailContactStatus = string;
export type CreationTime = Date;
export type UpdateTime = Date;
export interface EmailContact {
  arn: string;
  name: string | redacted.Redacted<string>;
  address: string | redacted.Redacted<string>;
  status: string;
  creationTime: Date;
  updateTime: Date;
}
const EmailContact = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<EmailContact>;
export interface GetEmailContactResponse {
  emailContact: EmailContact;
}
const GetEmailContactResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<GetEmailContactResponse>;
export interface ListEmailContactsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListEmailContactsRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<ListEmailContactsRequest>;
export type EmailContacts = EmailContact[];
const EmailContacts = /*@__PURE__*/ __L.at(__c1, 2);
export interface ListEmailContactsResponse {
  nextToken?: string;
  emailContacts: EmailContact[];
}
const ListEmailContactsResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<ListEmailContactsResponse>;
export interface ListTagsForResourceRequest {
  arn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface SendActivationCodeRequest {
  arn: string;
}
const SendActivationCodeRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<SendActivationCodeRequest>;
export interface SendActivationCodeResponse {}
const SendActivationCodeResponse =
  ActivateEmailContactResponse as any as S.Schema<SendActivationCodeResponse>;
export interface TagResourceRequest {
  arn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = ActivateEmailContactResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = /*@__PURE__*/ __L.at(__c2, 0);
export interface UntagResourceRequest {
  arn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse =
  ActivateEmailContactResponse as any as S.Schema<UntagResourceResponse>;
export type ErrorMessage = string;
export type ResourceId = string;
export type ResourceType = string;
export type ServiceCode = string;
export type QuotaCode = string;
export type ValidationExceptionReason = "fieldValidationFailed" | "other" | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c2, 3);
export type ActivateEmailContactError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Activates an email contact using an activation code. This code is in the activation email sent to the email address associated with this email contact.
 */
export const activateEmailContact: API.OperationMethod<
  ActivateEmailContactRequest,
  ActivateEmailContactResponse,
  ActivateEmailContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ActivateEmailContactRequest,
  output: ActivateEmailContactResponse,
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
  operationName: "ActivateEmailContact",
}));

export type CreateEmailContactError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an email contact for the provided email address.
 */
export const createEmailContact: API.OperationMethod<
  CreateEmailContactRequest,
  CreateEmailContactResponse,
  CreateEmailContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEmailContactRequest,
  output: CreateEmailContactResponse,
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
  operationName: "CreateEmailContact",
}));

export type DeleteEmailContactError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an email contact.
 *
 * Deleting an email contact removes it from all associated notification configurations.
 */
export const deleteEmailContact: API.OperationMethod<
  DeleteEmailContactRequest,
  DeleteEmailContactResponse,
  DeleteEmailContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEmailContactRequest,
  output: DeleteEmailContactResponse,
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
  operationName: "DeleteEmailContact",
}));

export type GetEmailContactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an email contact.
 */
export const getEmailContact: API.OperationMethod<
  GetEmailContactRequest,
  GetEmailContactResponse,
  GetEmailContactError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEmailContactRequest,
  output: GetEmailContactResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEmailContact",
}));

export type ListEmailContactsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all email contacts created under the Account.
 */
export const listEmailContacts: API.PaginatedOperationMethod<
  ListEmailContactsRequest,
  ListEmailContactsResponse,
  ListEmailContactsError,
  Credentials | HttpClient.HttpClient,
  EmailContact
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEmailContactsRequest,
  output: ListEmailContactsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEmailContacts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "emailContacts",
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
 * Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
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
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type SendActivationCodeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends an activation email to the email address associated with the specified email contact.
 *
 * It might take a few minutes for the activation email to arrive. If it doesn't arrive, check in your spam folder or try sending another activation email.
 */
export const sendActivationCode: API.OperationMethod<
  SendActivationCodeRequest,
  SendActivationCodeResponse,
  SendActivationCodeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SendActivationCodeRequest,
  output: SendActivationCodeResponse,
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
  operationName: "SendActivationCode",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Taggable resources in AWS User Notifications Contacts include email contacts.
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
    AccessDeniedException,
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
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Taggable resources in AWS User Notifications Contacts include email contacts..
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
    AccessDeniedException,
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
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          code: SensitiveString.pipe(T.HttpLabel("code")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/emailcontacts/{arn}/activate/{code}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ActivateEmailContactRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "ActivateEmailContactResponse",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({ name: SensitiveString, emailAddress: S.String, tags: S.optional(TagMap) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2022-09-19/emailcontacts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateEmailContactRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ arn: S.String })).annotate({
        identifier: "CreateEmailContactResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/emailcontacts/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteEmailContactRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/emailcontacts/{arn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEmailContactRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          arn: S.String,
          name: SensitiveString,
          address: SensitiveString,
          status: S.String,
          creationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updateTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "EmailContact" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ emailContact: EmailContact })).annotate({
        identifier: "GetEmailContactResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/emailcontacts" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListEmailContactsRequest" });
    case 2:
      return S.Array(EmailContact);
    case 3:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), emailContacts: EmailContacts }),
      ).annotate({
        identifier: "ListEmailContactsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/2022-10-31/emailcontacts/{arn}/activate/send" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SendActivationCodeRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")), tags: TagMap }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tags/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/tags/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 3:
      return S.Array(ValidationExceptionField);
  }
}
