/**
 * Cloudflare EMAIL-SENDING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service email-sending
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Errors
// =============================================================================

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class SendingSubdomainAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SendingSubdomainAlreadyExists>()(
    "SendingSubdomainAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 2040 }],
) {}

export class SendingSubdomainNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SendingSubdomainNotFound>()(
    "SendingSubdomainNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 2033 }],
) {}

// =============================================================================
// EmailSending
// =============================================================================

export interface SendEmailSendingRequest {
  /** Path param: Identifier of the account. */
  accountId: string;
  /** Body param: Sender email address. Either a plain string or an object with address and name. */
  from: string | { address: string; name: string };
  /** Body param: Email subject line. */
  subject: string;
  /** Body param: File attachments and inline images. */
  attachments?: (
    | {
        content: string;
        contentId: string;
        disposition: "inline";
        filename: string;
        type: string;
      }
    | {
        content: string;
        disposition: "attachment";
        filename: string;
        type: string;
      }
  )[];
  /** Body param: BCC recipient(s). A single email string or an array of email strings. */
  bcc?: string | string[];
  /** Body param: CC recipient(s). A single email string or an array of email strings. */
  cc?: string | string[];
  /** Body param: Custom email headers as key-value pairs. */
  headers?: Record<string, unknown>;
  /** Body param: HTML body of the email. At least one of text or html must be provided (non-empty). */
  html?: string;
  /** Body param: Reply-to address. Either a plain string or an object with address and name. */
  replyTo?: string | { address: string; name: string };
  /** Body param: Plain text body of the email. At least one of text or html must be provided (non-empty). */
  text?: string;
  /** Body param: Recipient(s). Optional if cc or bcc is provided. A single email string or an array of email strings. */
  to?: string | string[];
}

export const SendEmailSendingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      from: Schema.Union([
        Schema.Struct({
          address: Schema.String,
          name: Schema.String,
        }),
        Schema.String,
      ]),
      subject: Schema.String,
      attachments: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Struct({
              content: Schema.String,
              contentId: Schema.String,
              disposition: Schema.Literal("inline"),
              filename: Schema.String,
              type: Schema.String,
            }).pipe(
              Schema.encodeKeys({
                content: "content",
                contentId: "content_id",
                disposition: "disposition",
                filename: "filename",
                type: "type",
              }),
            ),
            Schema.Struct({
              content: Schema.String,
              disposition: Schema.Literal("attachment"),
              filename: Schema.String,
              type: Schema.String,
            }),
          ]),
        ),
      ),
      bcc: Schema.optional(
        Schema.Union([Schema.String, Schema.Array(Schema.String)]),
      ),
      cc: Schema.optional(
        Schema.Union([Schema.String, Schema.Array(Schema.String)]),
      ),
      headers: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      html: Schema.optional(Schema.String),
      replyTo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            address: Schema.String,
            name: Schema.String,
          }),
          Schema.String,
        ]),
      ),
      text: Schema.optional(Schema.String),
      to: Schema.optional(
        Schema.Union([Schema.String, Schema.Array(Schema.String)]),
      ),
    }).pipe(
      Schema.encodeKeys({
        from: "from",
        subject: "subject",
        attachments: "attachments",
        bcc: "bcc",
        cc: "cc",
        headers: "headers",
        html: "html",
        replyTo: "reply_to",
        text: "text",
        to: "to",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email/sending/send",
      }),
    ),
  ) as unknown as Schema.Schema<SendEmailSendingRequest>;

export interface SendEmailSendingResponse {
  /** Email addresses to which the message was delivered immediately. */
  delivered: string[];
  /** Message ID of the sent email. */
  messageId: string;
  /** Email addresses that permanently bounced. */
  permanentBounces: string[];
  /** Email addresses for which delivery was queued for later. */
  queued: string[];
}

export const SendEmailSendingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      delivered: Schema.Array(Schema.String),
      messageId: Schema.String,
      permanentBounces: Schema.Array(Schema.String),
      queued: Schema.Array(Schema.String),
    })
      .pipe(
        Schema.encodeKeys({
          delivered: "delivered",
          messageId: "message_id",
          permanentBounces: "permanent_bounces",
          queued: "queued",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<SendEmailSendingResponse>;

export type SendEmailSendingError = DefaultErrors;

export const sendEmailSending: API.OperationMethod<
  SendEmailSendingRequest,
  SendEmailSendingResponse,
  SendEmailSendingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendEmailSendingRequest,
  output: SendEmailSendingResponse,
  errors: [],
}));

// =============================================================================
// RawEmailSending
// =============================================================================

export interface SendRawEmailSendingRequest {
  /** Path param: Identifier of the account. */
  accountId: string;
  /** Body param: Sender email address. */
  from: string;
  /** Body param: The full MIME-encoded email message. Should include standard RFC 5322 headers such as From, To, Subject, and Content-Type. The from and recipients fields in the request body control SMTP e */
  mimeMessage: string;
  /** Body param: List of recipient email addresses. */
  recipients: string[];
}

export const SendRawEmailSendingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      from: Schema.String,
      mimeMessage: Schema.String,
      recipients: Schema.Array(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        from: "from",
        mimeMessage: "mime_message",
        recipients: "recipients",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email/sending/send_raw",
      }),
    ),
  ) as unknown as Schema.Schema<SendRawEmailSendingRequest>;

export interface SendRawEmailSendingResponse {
  /** Email addresses to which the message was delivered immediately. */
  delivered: string[];
  /** Message ID of the sent email. */
  messageId: string;
  /** Email addresses that permanently bounced. */
  permanentBounces: string[];
  /** Email addresses for which delivery was queued for later. */
  queued: string[];
}

export const SendRawEmailSendingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      delivered: Schema.Array(Schema.String),
      messageId: Schema.String,
      permanentBounces: Schema.Array(Schema.String),
      queued: Schema.Array(Schema.String),
    })
      .pipe(
        Schema.encodeKeys({
          delivered: "delivered",
          messageId: "message_id",
          permanentBounces: "permanent_bounces",
          queued: "queued",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<SendRawEmailSendingResponse>;

export type SendRawEmailSendingError = DefaultErrors;

export const sendRawEmailSending: API.OperationMethod<
  SendRawEmailSendingRequest,
  SendRawEmailSendingResponse,
  SendRawEmailSendingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SendRawEmailSendingRequest,
  output: SendRawEmailSendingResponse,
  errors: [],
}));

// =============================================================================
// Subdomain
// =============================================================================

export interface GetSubdomainRequest {
  subdomainId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetSubdomainRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      subdomainId: Schema.String.pipe(T.HttpPath("subdomainId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/email/sending/subdomains/{subdomainId}",
      }),
    ),
) as unknown as Schema.Schema<GetSubdomainRequest>;

export interface GetSubdomainResponse {
  /** Whether Email Sending is enabled on this subdomain. */
  enabled: boolean;
  /** The subdomain domain name. */
  name: string;
  /** Sending subdomain identifier. */
  tag: string;
  /** The date and time the destination address has been created. */
  created?: string | null;
  /** The DKIM selector used for email signing. */
  dkimSelector?: string | null;
  /** The date and time the destination address was last modified. */
  modified?: string | null;
  /** The return-path domain used for bounce handling. */
  returnPathDomain?: string | null;
}

export const GetSubdomainResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      enabled: Schema.Boolean,
      name: Schema.String,
      tag: Schema.String,
      created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dkimSelector: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      returnPathDomain: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          enabled: "enabled",
          name: "name",
          tag: "tag",
          created: "created",
          dkimSelector: "dkim_selector",
          modified: "modified",
          returnPathDomain: "return_path_domain",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetSubdomainResponse>;

export type GetSubdomainError =
  | DefaultErrors
  | Forbidden
  | SendingSubdomainNotFound;

export const getSubdomain: API.OperationMethod<
  GetSubdomainRequest,
  GetSubdomainResponse,
  GetSubdomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSubdomainRequest,
  output: GetSubdomainResponse,
  errors: [Forbidden, SendingSubdomainNotFound],
}));

export interface ListSubdomainsRequest {
  /** Identifier. */
  zoneId: string;
}

export const ListSubdomainsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/email/sending/subdomains",
      }),
    ),
) as unknown as Schema.Schema<ListSubdomainsRequest>;

export interface ListSubdomainsResponse {
  result: {
    enabled: boolean;
    name: string;
    tag: string;
    created?: string | null;
    dkimSelector?: string | null;
    modified?: string | null;
    returnPathDomain?: string | null;
  }[];
}

export const ListSubdomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          enabled: Schema.Boolean,
          name: Schema.String,
          tag: Schema.String,
          created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          dkimSelector: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          returnPathDomain: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            enabled: "enabled",
            name: "name",
            tag: "tag",
            created: "created",
            dkimSelector: "dkim_selector",
            modified: "modified",
            returnPathDomain: "return_path_domain",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<ListSubdomainsResponse>;

export type ListSubdomainsError = DefaultErrors | Forbidden;

export const listSubdomains: API.PaginatedOperationMethod<
  ListSubdomainsRequest,
  ListSubdomainsResponse,
  ListSubdomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSubdomainsRequest,
  output: ListSubdomainsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateSubdomainRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The subdomain name. Must be within the zone. */
  name: string;
}

export const CreateSubdomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      name: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/email/sending/subdomains",
      }),
    ),
  ) as unknown as Schema.Schema<CreateSubdomainRequest>;

export interface CreateSubdomainResponse {
  /** Whether Email Sending is enabled on this subdomain. */
  enabled: boolean;
  /** The subdomain domain name. */
  name: string;
  /** Sending subdomain identifier. */
  tag: string;
  /** The date and time the destination address has been created. */
  created?: string | null;
  /** The DKIM selector used for email signing. */
  dkimSelector?: string | null;
  /** The date and time the destination address was last modified. */
  modified?: string | null;
  /** The return-path domain used for bounce handling. */
  returnPathDomain?: string | null;
}

export const CreateSubdomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      enabled: Schema.Boolean,
      name: Schema.String,
      tag: Schema.String,
      created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dkimSelector: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      returnPathDomain: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          enabled: "enabled",
          name: "name",
          tag: "tag",
          created: "created",
          dkimSelector: "dkim_selector",
          modified: "modified",
          returnPathDomain: "return_path_domain",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateSubdomainResponse>;

export type CreateSubdomainError =
  | DefaultErrors
  | Forbidden
  | SendingSubdomainAlreadyExists;

export const createSubdomain: API.OperationMethod<
  CreateSubdomainRequest,
  CreateSubdomainResponse,
  CreateSubdomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSubdomainRequest,
  output: CreateSubdomainResponse,
  errors: [Forbidden, SendingSubdomainAlreadyExists],
}));

export interface DeleteSubdomainRequest {
  subdomainId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteSubdomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      subdomainId: Schema.String.pipe(T.HttpPath("subdomainId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/email/sending/subdomains/{subdomainId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteSubdomainRequest>;

export interface DeleteSubdomainResponse {
  errors: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  messages: {
    code: number;
    message: string;
    documentationUrl?: string | null;
    source?: { pointer?: string | null } | null;
  }[];
  /** Whether the API call was successful. */
  success: true;
}

export const DeleteSubdomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(
        Schema.Struct({
          code: Schema.Number,
          message: Schema.String,
          documentationUrl: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          source: Schema.optional(
            Schema.Union([
              Schema.Struct({
                pointer: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            code: "code",
            message: "message",
            documentationUrl: "documentation_url",
            source: "source",
          }),
        ),
      ),
      messages: Schema.Array(
        Schema.Struct({
          code: Schema.Number,
          message: Schema.String,
          documentationUrl: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          source: Schema.optional(
            Schema.Union([
              Schema.Struct({
                pointer: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            code: "code",
            message: "message",
            documentationUrl: "documentation_url",
            source: "source",
          }),
        ),
      ),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Schema<DeleteSubdomainResponse>;

export type DeleteSubdomainError =
  | DefaultErrors
  | Forbidden
  | SendingSubdomainNotFound;

export const deleteSubdomain: API.OperationMethod<
  DeleteSubdomainRequest,
  DeleteSubdomainResponse,
  DeleteSubdomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSubdomainRequest,
  output: DeleteSubdomainResponse,
  errors: [Forbidden, SendingSubdomainNotFound],
}));

// =============================================================================
// SubdomainDn
// =============================================================================

export interface GetSubdomainDnsRequest {
  subdomainId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetSubdomainDnsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      subdomainId: Schema.String.pipe(T.HttpPath("subdomainId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/email/sending/subdomains/{subdomainId}/dns",
      }),
    ),
  ) as unknown as Schema.Schema<GetSubdomainDnsRequest>;

export interface GetSubdomainDnsResponse {
  result: {
    content?: string | null;
    name?: string | null;
    priority?: number | null;
    ttl?: number | "1" | null;
    type?:
      | "A"
      | "AAAA"
      | "CNAME"
      | "HTTPS"
      | "TXT"
      | "SRV"
      | "LOC"
      | "MX"
      | "NS"
      | "CERT"
      | "DNSKEY"
      | "DS"
      | "NAPTR"
      | "SMIMEA"
      | "SSHFP"
      | "SVCB"
      | "TLSA"
      | "URI"
      | (string & {})
      | null;
  }[];
}

export const GetSubdomainDnsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          ttl: Schema.optional(
            Schema.Union([
              Schema.Union([Schema.Number, Schema.Literal("1")]),
              Schema.Null,
            ]),
          ),
          type: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "A",
                  "AAAA",
                  "CNAME",
                  "HTTPS",
                  "TXT",
                  "SRV",
                  "LOC",
                  "MX",
                  "NS",
                  "CERT",
                  "DNSKEY",
                  "DS",
                  "NAPTR",
                  "SMIMEA",
                  "SSHFP",
                  "SVCB",
                  "TLSA",
                  "URI",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }),
      ),
    }),
  ) as unknown as Schema.Schema<GetSubdomainDnsResponse>;

export type GetSubdomainDnsError = DefaultErrors;

export const getSubdomainDns: API.PaginatedOperationMethod<
  GetSubdomainDnsRequest,
  GetSubdomainDnsResponse,
  GetSubdomainDnsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetSubdomainDnsRequest,
  output: GetSubdomainDnsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));
