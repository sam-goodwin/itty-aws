/**
 * Cloudflare EMAIL-SECURITY API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service email-security
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

export class AllowPolicyNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AllowPolicyNotFound>()("AllowPolicyNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class BlockSenderNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<BlockSenderNotFound>()("BlockSenderNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class EmailSecurityDomainNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<EmailSecurityDomainNotFound>()(
    "EmailSecurityDomainNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class EmailSecurityNotEntitled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<EmailSecurityNotEntitled>()(
    "EmailSecurityNotEntitled",
    { code: Schema.Number, message: Schema.String },
  ),
  [
    {
      status: 403,
      message: { includes: "not available in the current subscription" },
    },
  ],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class ImpersonationRegistryEntryNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ImpersonationRegistryEntryNotFound>()(
    "ImpersonationRegistryEntryNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class TrustedDomainNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TrustedDomainNotFound>()("TrustedDomainNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

// =============================================================================
// Investigate
// =============================================================================

export interface GetInvestigateRequest {
  investigateId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: When true, search the submissions datastore only. When false or omitted, search the regular datastore only. */
  submission?: boolean;
}

export const GetInvestigateRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      investigateId: Schema.String.pipe(T.HttpPath("investigateId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      submission: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("submission"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/investigate/{investigateId}",
      }),
    ),
) as unknown as Schema.Schema<GetInvestigateRequest>;

export interface GetInvestigateResponse {
  /** Unique identifier for a message retrieved from investigation */
  id: string;
  /** @deprecated Deprecated, use `GET /investigate/{investigate_id}/action_log` instead. End of life: November 1, 2026. */
  actionLog: {
    completedAt: string;
    operation:
      | "MOVE"
      | "RELEASE"
      | "RECLASSIFY"
      | "SUBMISSION"
      | "QUARANTINE_RELEASE"
      | "PREVIEW"
      | (string & {});
    completedTimestamp?: string | null;
    properties?: { folder?: string | null; requestedBy?: string | null } | null;
    status?: string | null;
  }[];
  clientRecipients: string[];
  detectionReasons: string[];
  isPhishSubmission: boolean;
  isQuarantined: boolean;
  /** The identifier of the message */
  postfixId: string;
  /** Message processing properties */
  properties: {
    allowlistedPattern?: string | null;
    allowlistedPatternType?:
      | "quarantine_release"
      | "acceptable_sender"
      | "allowed_sender"
      | "allowed_recipient"
      | "domain_similarity"
      | "domain_recency"
      | "managed_acceptable_sender"
      | "outbound_ndr"
      | null;
    blocklistedMessage?: boolean | null;
    blocklistedPattern?: string | null;
    whitelistedPatternType?:
      | "quarantine_release"
      | "acceptable_sender"
      | "allowed_sender"
      | "allowed_recipient"
      | "domain_similarity"
      | "domain_recency"
      | "managed_acceptable_sender"
      | "outbound_ndr"
      | null;
  };
  /** @deprecated Deprecated, use `scanned_at` instead. End of life: November 1, 2026. */
  ts: string;
  alertId?: string | null;
  deliveryMode?:
    | "DIRECT"
    | "BCC"
    | "JOURNAL"
    | "REVIEW_SUBMISSION"
    | "DMARC_UNVERIFIED"
    | "DMARC_FAILURE_REPORT"
    | "DMARC_AGGREGATE_REPORT"
    | "THREAT_INTEL_SUBMISSION"
    | "SIMULATION_SUBMISSION"
    | "API"
    | "RETRO_SCAN"
    | (string & {})
    | null;
  deliveryStatus?:
    | (
        | "delivered"
        | "moved"
        | "quarantined"
        | "rejected"
        | "deferred"
        | "bounced"
        | "queued"
        | (string & {})
      )[]
    | null;
  edfHash?: string | null;
  envelopeFrom?: string | null;
  envelopeTo?: string[] | null;
  finalDisposition?:
    | "MALICIOUS"
    | "MALICIOUS-BEC"
    | "SUSPICIOUS"
    | "SPOOF"
    | "SPAM"
    | "BULK"
    | "ENCRYPTED"
    | "EXTERNAL"
    | "UNKNOWN"
    | "NONE"
    | (string & {})
    | null;
  /** @deprecated Deprecated, use the `findings` field from `GET /investigate/{investigate_id}/detections` instead. End of life: November 1, 2026. Detection findings for this message. */
  findings?:
    | {
        attachment?: string | null;
        detail?: string | null;
        detection?:
          | "MALICIOUS"
          | "MALICIOUS-BEC"
          | "SUSPICIOUS"
          | "SPOOF"
          | "SPAM"
          | "BULK"
          | "ENCRYPTED"
          | "EXTERNAL"
          | "UNKNOWN"
          | "NONE"
          | (string & {})
          | null;
        field?: string | null;
        name?: string | null;
        portion?: string | null;
        reason?: string | null;
        score?: number | null;
        value?: string | null;
      }[]
    | null;
  from?: string | null;
  fromName?: string | null;
  htmltextStructureHash?: string | null;
  messageId?: string | null;
  /** Post-delivery operations performed on this message */
  postDeliveryOperations?:
    | (
        | "PREVIEW"
        | "QUARANTINE_RELEASE"
        | "SUBMISSION"
        | "MOVE"
        | (string & {})
      )[]
    | null;
  postfixIdOutbound?: string | null;
  replyto?: string | null;
  /** When the message was scanned (UTC) */
  scannedAt?: string | null;
  /** When the message was sent (UTC) */
  sentAt?: string | null;
  sentDate?: string | null;
  smtpHeloServerIp?: string | null;
  smtpPreviousHopIp?: string | null;
  subject?: string | null;
  threatCategories?: string[] | null;
  to?: string[] | null;
  toName?: string[] | null;
  validation?: {
    comment?: string | null;
    dkim?:
      | "pass"
      | "neutral"
      | "fail"
      | "error"
      | "none"
      | (string & {})
      | null;
    dmarc?:
      | "pass"
      | "neutral"
      | "fail"
      | "error"
      | "none"
      | (string & {})
      | null;
    spf?: "pass" | "neutral" | "fail" | "error" | "none" | (string & {}) | null;
  } | null;
  xOriginatingIp?: string | null;
}

export const GetInvestigateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      actionLog: Schema.Array(
        Schema.Struct({
          completedAt: Schema.String,
          operation: Schema.Union([
            Schema.Literals([
              "MOVE",
              "RELEASE",
              "RECLASSIFY",
              "SUBMISSION",
              "QUARANTINE_RELEASE",
              "PREVIEW",
            ]),
            Schema.String,
          ]),
          completedTimestamp: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          properties: Schema.optional(
            Schema.Union([
              Schema.Struct({
                folder: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                requestedBy: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  folder: "folder",
                  requestedBy: "requested_by",
                }),
              ),
              Schema.Null,
            ]),
          ),
          status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            completedAt: "completed_at",
            operation: "operation",
            completedTimestamp: "completed_timestamp",
            properties: "properties",
            status: "status",
          }),
        ),
      ),
      clientRecipients: Schema.Array(Schema.String),
      detectionReasons: Schema.Array(Schema.String),
      isPhishSubmission: Schema.Boolean,
      isQuarantined: Schema.Boolean,
      postfixId: Schema.String,
      properties: Schema.Struct({
        allowlistedPattern: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        allowlistedPatternType: Schema.optional(
          Schema.Union([
            Schema.Literal("quarantine_release"),
            Schema.Literal("acceptable_sender"),
            Schema.Literal("allowed_sender"),
            Schema.Literal("allowed_recipient"),
            Schema.Literal("domain_similarity"),
            Schema.Literal("domain_recency"),
            Schema.Literal("managed_acceptable_sender"),
            Schema.Literal("outbound_ndr"),
            Schema.Null,
          ]),
        ),
        blocklistedMessage: Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        blocklistedPattern: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        whitelistedPatternType: Schema.optional(
          Schema.Union([
            Schema.Literal("quarantine_release"),
            Schema.Literal("acceptable_sender"),
            Schema.Literal("allowed_sender"),
            Schema.Literal("allowed_recipient"),
            Schema.Literal("domain_similarity"),
            Schema.Literal("domain_recency"),
            Schema.Literal("managed_acceptable_sender"),
            Schema.Literal("outbound_ndr"),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          allowlistedPattern: "allowlisted_pattern",
          allowlistedPatternType: "allowlisted_pattern_type",
          blocklistedMessage: "blocklisted_message",
          blocklistedPattern: "blocklisted_pattern",
          whitelistedPatternType: "whitelisted_pattern_type",
        }),
      ),
      ts: Schema.String,
      alertId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      deliveryMode: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "DIRECT",
              "BCC",
              "JOURNAL",
              "REVIEW_SUBMISSION",
              "DMARC_UNVERIFIED",
              "DMARC_FAILURE_REPORT",
              "DMARC_AGGREGATE_REPORT",
              "THREAT_INTEL_SUBMISSION",
              "SIMULATION_SUBMISSION",
              "API",
              "RETRO_SCAN",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      deliveryStatus: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "delivered",
                "moved",
                "quarantined",
                "rejected",
                "deferred",
                "bounced",
                "queued",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      edfHash: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      envelopeFrom: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      envelopeTo: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      finalDisposition: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "MALICIOUS",
              "MALICIOUS-BEC",
              "SUSPICIOUS",
              "SPOOF",
              "SPAM",
              "BULK",
              "ENCRYPTED",
              "EXTERNAL",
              "UNKNOWN",
              "NONE",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      findings: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              attachment: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              detail: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              detection: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals([
                      "MALICIOUS",
                      "MALICIOUS-BEC",
                      "SUSPICIOUS",
                      "SPOOF",
                      "SPAM",
                      "BULK",
                      "ENCRYPTED",
                      "EXTERNAL",
                      "UNKNOWN",
                      "NONE",
                    ]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
              field: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              portion: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              reason: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              score: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              value: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
          ),
          Schema.Null,
        ]),
      ),
      from: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      fromName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      htmltextStructureHash: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      messageId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      postDeliveryOperations: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "PREVIEW",
                "QUARANTINE_RELEASE",
                "SUBMISSION",
                "MOVE",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      postfixIdOutbound: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      replyto: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      scannedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sentAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      sentDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      smtpHeloServerIp: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      smtpPreviousHopIp: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      subject: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      threatCategories: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      to: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      toName: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      validation: Schema.optional(
        Schema.Union([
          Schema.Struct({
            comment: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            dkim: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["pass", "neutral", "fail", "error", "none"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            dmarc: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["pass", "neutral", "fail", "error", "none"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            spf: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals(["pass", "neutral", "fail", "error", "none"]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      xOriginatingIp: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          actionLog: "action_log",
          clientRecipients: "client_recipients",
          detectionReasons: "detection_reasons",
          isPhishSubmission: "is_phish_submission",
          isQuarantined: "is_quarantined",
          postfixId: "postfix_id",
          properties: "properties",
          ts: "ts",
          alertId: "alert_id",
          deliveryMode: "delivery_mode",
          deliveryStatus: "delivery_status",
          edfHash: "edf_hash",
          envelopeFrom: "envelope_from",
          envelopeTo: "envelope_to",
          finalDisposition: "final_disposition",
          findings: "findings",
          from: "from",
          fromName: "from_name",
          htmltextStructureHash: "htmltext_structure_hash",
          messageId: "message_id",
          postDeliveryOperations: "post_delivery_operations",
          postfixIdOutbound: "postfix_id_outbound",
          replyto: "replyto",
          scannedAt: "scanned_at",
          sentAt: "sent_at",
          sentDate: "sent_date",
          smtpHeloServerIp: "smtp_helo_server_ip",
          smtpPreviousHopIp: "smtp_previous_hop_ip",
          subject: "subject",
          threatCategories: "threat_categories",
          to: "to",
          toName: "to_name",
          validation: "validation",
          xOriginatingIp: "x_originating_ip",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetInvestigateResponse>;

export type GetInvestigateError = DefaultErrors;

export const getInvestigate: API.OperationMethod<
  GetInvestigateRequest,
  GetInvestigateResponse,
  GetInvestigateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInvestigateRequest,
  output: GetInvestigateResponse,
  errors: [],
}));

export interface ListInvestigatesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param */
  alertId?: string;
  /** Query param */
  cursor?: string;
  /** Query param: Delivery status to filter by. */
  deliveryStatus?:
    | "delivered"
    | "moved"
    | "quarantined"
    | "rejected"
    | "deferred"
    | "bounced"
    | "queued"
    | (string & {});
  /** Query param: Whether to include only detections in search results. */
  detectionsOnly?: boolean;
  /** Query param: Sender domains to filter by. */
  domain?: string;
  /** Query param: The end of the search date range. Defaults to `now`. */
  end?: string;
  /** Query param: Dispositions to filter by. */
  finalDisposition?:
    | "MALICIOUS"
    | "SUSPICIOUS"
    | "SPOOF"
    | "SPAM"
    | "BULK"
    | "NONE"
    | (string & {});
  /** Query param: Message actions to filter by. */
  messageAction?: "PREVIEW" | "QUARANTINE_RELEASED" | "MOVED" | (string & {});
  /** Query param */
  messageId?: string;
  /** Query param */
  metric?: string;
  /** Query param: Space-delimited search term. Case-insensitive. */
  query?: string;
  /** Query param */
  recipient?: string;
  /** Query param */
  sender?: string;
  /** Query param: The beginning of the search date range. Defaults to `now - 30 days`. */
  start?: string;
  /** Query param */
  subject?: string;
}

export const ListInvestigatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      alertId: Schema.optional(Schema.String).pipe(T.HttpQuery("alert_id")),
      cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
      deliveryStatus: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "delivered",
            "moved",
            "quarantined",
            "rejected",
            "deferred",
            "bounced",
            "queued",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("delivery_status")),
      detectionsOnly: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("detections_only"),
      ),
      domain: Schema.optional(Schema.String).pipe(T.HttpQuery("domain")),
      end: Schema.optional(Schema.String).pipe(T.HttpQuery("end")),
      finalDisposition: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "MALICIOUS",
            "SUSPICIOUS",
            "SPOOF",
            "SPAM",
            "BULK",
            "NONE",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("final_disposition")),
      messageAction: Schema.optional(
        Schema.Union([
          Schema.Literals(["PREVIEW", "QUARANTINE_RELEASED", "MOVED"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("message_action")),
      messageId: Schema.optional(Schema.String).pipe(T.HttpQuery("message_id")),
      metric: Schema.optional(Schema.String).pipe(T.HttpQuery("metric")),
      query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
      recipient: Schema.optional(Schema.String).pipe(T.HttpQuery("recipient")),
      sender: Schema.optional(Schema.String).pipe(T.HttpQuery("sender")),
      start: Schema.optional(Schema.String).pipe(T.HttpQuery("start")),
      subject: Schema.optional(Schema.String).pipe(T.HttpQuery("subject")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/investigate",
      }),
    ),
  ) as unknown as Schema.Schema<ListInvestigatesRequest>;

export interface ListInvestigatesResponse {
  result: {
    id: string;
    actionLog: {
      completedAt: string;
      operation:
        | "MOVE"
        | "RELEASE"
        | "RECLASSIFY"
        | "SUBMISSION"
        | "QUARANTINE_RELEASE"
        | "PREVIEW"
        | (string & {});
      completedTimestamp?: string | null;
      properties?: {
        folder?: string | null;
        requestedBy?: string | null;
      } | null;
      status?: string | null;
    }[];
    clientRecipients: string[];
    detectionReasons: string[];
    isPhishSubmission: boolean;
    isQuarantined: boolean;
    postfixId: string;
    properties: {
      allowlistedPattern?: string | null;
      allowlistedPatternType?:
        | "quarantine_release"
        | "acceptable_sender"
        | "allowed_sender"
        | "allowed_recipient"
        | "domain_similarity"
        | "domain_recency"
        | "managed_acceptable_sender"
        | "outbound_ndr"
        | null;
      blocklistedMessage?: boolean | null;
      blocklistedPattern?: string | null;
      whitelistedPatternType?:
        | "quarantine_release"
        | "acceptable_sender"
        | "allowed_sender"
        | "allowed_recipient"
        | "domain_similarity"
        | "domain_recency"
        | "managed_acceptable_sender"
        | "outbound_ndr"
        | null;
    };
    ts: string;
    alertId?: string | null;
    deliveryMode?:
      | "DIRECT"
      | "BCC"
      | "JOURNAL"
      | "REVIEW_SUBMISSION"
      | "DMARC_UNVERIFIED"
      | "DMARC_FAILURE_REPORT"
      | "DMARC_AGGREGATE_REPORT"
      | "THREAT_INTEL_SUBMISSION"
      | "SIMULATION_SUBMISSION"
      | "API"
      | "RETRO_SCAN"
      | (string & {})
      | null;
    deliveryStatus?:
      | (
          | "delivered"
          | "moved"
          | "quarantined"
          | "rejected"
          | "deferred"
          | "bounced"
          | "queued"
          | (string & {})
        )[]
      | null;
    edfHash?: string | null;
    envelopeFrom?: string | null;
    envelopeTo?: string[] | null;
    finalDisposition?:
      | "MALICIOUS"
      | "MALICIOUS-BEC"
      | "SUSPICIOUS"
      | "SPOOF"
      | "SPAM"
      | "BULK"
      | "ENCRYPTED"
      | "EXTERNAL"
      | "UNKNOWN"
      | "NONE"
      | (string & {})
      | null;
    findings?:
      | {
          attachment?: string | null;
          detail?: string | null;
          detection?:
            | "MALICIOUS"
            | "MALICIOUS-BEC"
            | "SUSPICIOUS"
            | "SPOOF"
            | "SPAM"
            | "BULK"
            | "ENCRYPTED"
            | "EXTERNAL"
            | "UNKNOWN"
            | "NONE"
            | (string & {})
            | null;
          field?: string | null;
          name?: string | null;
          portion?: string | null;
          reason?: string | null;
          score?: number | null;
          value?: string | null;
        }[]
      | null;
    from?: string | null;
    fromName?: string | null;
    htmltextStructureHash?: string | null;
    messageId?: string | null;
    postDeliveryOperations?:
      | (
          | "PREVIEW"
          | "QUARANTINE_RELEASE"
          | "SUBMISSION"
          | "MOVE"
          | (string & {})
        )[]
      | null;
    postfixIdOutbound?: string | null;
    replyto?: string | null;
    scannedAt?: string | null;
    sentAt?: string | null;
    sentDate?: string | null;
    smtpHeloServerIp?: string | null;
    smtpPreviousHopIp?: string | null;
    subject?: string | null;
    threatCategories?: string[] | null;
    to?: string[] | null;
    toName?: string[] | null;
    validation?: {
      comment?: string | null;
      dkim?:
        | "pass"
        | "neutral"
        | "fail"
        | "error"
        | "none"
        | (string & {})
        | null;
      dmarc?:
        | "pass"
        | "neutral"
        | "fail"
        | "error"
        | "none"
        | (string & {})
        | null;
      spf?:
        | "pass"
        | "neutral"
        | "fail"
        | "error"
        | "none"
        | (string & {})
        | null;
    } | null;
    xOriginatingIp?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListInvestigatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          actionLog: Schema.Array(
            Schema.Struct({
              completedAt: Schema.String,
              operation: Schema.Union([
                Schema.Literals([
                  "MOVE",
                  "RELEASE",
                  "RECLASSIFY",
                  "SUBMISSION",
                  "QUARANTINE_RELEASE",
                  "PREVIEW",
                ]),
                Schema.String,
              ]),
              completedTimestamp: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              properties: Schema.optional(
                Schema.Union([
                  Schema.Struct({
                    folder: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    requestedBy: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      folder: "folder",
                      requestedBy: "requested_by",
                    }),
                  ),
                  Schema.Null,
                ]),
              ),
              status: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }).pipe(
              Schema.encodeKeys({
                completedAt: "completed_at",
                operation: "operation",
                completedTimestamp: "completed_timestamp",
                properties: "properties",
                status: "status",
              }),
            ),
          ),
          clientRecipients: Schema.Array(Schema.String),
          detectionReasons: Schema.Array(Schema.String),
          isPhishSubmission: Schema.Boolean,
          isQuarantined: Schema.Boolean,
          postfixId: Schema.String,
          properties: Schema.Struct({
            allowlistedPattern: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            allowlistedPatternType: Schema.optional(
              Schema.Union([
                Schema.Literal("quarantine_release"),
                Schema.Literal("acceptable_sender"),
                Schema.Literal("allowed_sender"),
                Schema.Literal("allowed_recipient"),
                Schema.Literal("domain_similarity"),
                Schema.Literal("domain_recency"),
                Schema.Literal("managed_acceptable_sender"),
                Schema.Literal("outbound_ndr"),
                Schema.Null,
              ]),
            ),
            blocklistedMessage: Schema.optional(
              Schema.Union([Schema.Boolean, Schema.Null]),
            ),
            blocklistedPattern: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            whitelistedPatternType: Schema.optional(
              Schema.Union([
                Schema.Literal("quarantine_release"),
                Schema.Literal("acceptable_sender"),
                Schema.Literal("allowed_sender"),
                Schema.Literal("allowed_recipient"),
                Schema.Literal("domain_similarity"),
                Schema.Literal("domain_recency"),
                Schema.Literal("managed_acceptable_sender"),
                Schema.Literal("outbound_ndr"),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              allowlistedPattern: "allowlisted_pattern",
              allowlistedPatternType: "allowlisted_pattern_type",
              blocklistedMessage: "blocklisted_message",
              blocklistedPattern: "blocklisted_pattern",
              whitelistedPatternType: "whitelisted_pattern_type",
            }),
          ),
          ts: Schema.String,
          alertId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          deliveryMode: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "DIRECT",
                  "BCC",
                  "JOURNAL",
                  "REVIEW_SUBMISSION",
                  "DMARC_UNVERIFIED",
                  "DMARC_FAILURE_REPORT",
                  "DMARC_AGGREGATE_REPORT",
                  "THREAT_INTEL_SUBMISSION",
                  "SIMULATION_SUBMISSION",
                  "API",
                  "RETRO_SCAN",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          deliveryStatus: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Union([
                  Schema.Literals([
                    "delivered",
                    "moved",
                    "quarantined",
                    "rejected",
                    "deferred",
                    "bounced",
                    "queued",
                  ]),
                  Schema.String,
                ]),
              ),
              Schema.Null,
            ]),
          ),
          edfHash: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          envelopeFrom: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          envelopeTo: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          finalDisposition: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "MALICIOUS",
                  "MALICIOUS-BEC",
                  "SUSPICIOUS",
                  "SPOOF",
                  "SPAM",
                  "BULK",
                  "ENCRYPTED",
                  "EXTERNAL",
                  "UNKNOWN",
                  "NONE",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          findings: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  attachment: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                  detail: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                  detection: Schema.optional(
                    Schema.Union([
                      Schema.Union([
                        Schema.Literals([
                          "MALICIOUS",
                          "MALICIOUS-BEC",
                          "SUSPICIOUS",
                          "SPOOF",
                          "SPAM",
                          "BULK",
                          "ENCRYPTED",
                          "EXTERNAL",
                          "UNKNOWN",
                          "NONE",
                        ]),
                        Schema.String,
                      ]),
                      Schema.Null,
                    ]),
                  ),
                  field: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                  name: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                  portion: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                  reason: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                  score: Schema.optional(
                    Schema.Union([Schema.Number, Schema.Null]),
                  ),
                  value: Schema.optional(
                    Schema.Union([Schema.String, Schema.Null]),
                  ),
                }),
              ),
              Schema.Null,
            ]),
          ),
          from: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          fromName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          htmltextStructureHash: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          messageId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          postDeliveryOperations: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Union([
                  Schema.Literals([
                    "PREVIEW",
                    "QUARANTINE_RELEASE",
                    "SUBMISSION",
                    "MOVE",
                  ]),
                  Schema.String,
                ]),
              ),
              Schema.Null,
            ]),
          ),
          postfixIdOutbound: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          replyto: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          scannedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          sentAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          sentDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          smtpHeloServerIp: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          smtpPreviousHopIp: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          subject: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          threatCategories: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          to: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          toName: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          validation: Schema.optional(
            Schema.Union([
              Schema.Struct({
                comment: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                dkim: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals([
                        "pass",
                        "neutral",
                        "fail",
                        "error",
                        "none",
                      ]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
                dmarc: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals([
                        "pass",
                        "neutral",
                        "fail",
                        "error",
                        "none",
                      ]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
                spf: Schema.optional(
                  Schema.Union([
                    Schema.Union([
                      Schema.Literals([
                        "pass",
                        "neutral",
                        "fail",
                        "error",
                        "none",
                      ]),
                      Schema.String,
                    ]),
                    Schema.Null,
                  ]),
                ),
              }),
              Schema.Null,
            ]),
          ),
          xOriginatingIp: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            actionLog: "action_log",
            clientRecipients: "client_recipients",
            detectionReasons: "detection_reasons",
            isPhishSubmission: "is_phish_submission",
            isQuarantined: "is_quarantined",
            postfixId: "postfix_id",
            properties: "properties",
            ts: "ts",
            alertId: "alert_id",
            deliveryMode: "delivery_mode",
            deliveryStatus: "delivery_status",
            edfHash: "edf_hash",
            envelopeFrom: "envelope_from",
            envelopeTo: "envelope_to",
            finalDisposition: "final_disposition",
            findings: "findings",
            from: "from",
            fromName: "from_name",
            htmltextStructureHash: "htmltext_structure_hash",
            messageId: "message_id",
            postDeliveryOperations: "post_delivery_operations",
            postfixIdOutbound: "postfix_id_outbound",
            replyto: "replyto",
            scannedAt: "scanned_at",
            sentAt: "sent_at",
            sentDate: "sent_date",
            smtpHeloServerIp: "smtp_helo_server_ip",
            smtpPreviousHopIp: "smtp_previous_hop_ip",
            subject: "subject",
            threatCategories: "threat_categories",
            to: "to",
            toName: "to_name",
            validation: "validation",
            xOriginatingIp: "x_originating_ip",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListInvestigatesResponse>;

export type ListInvestigatesError = DefaultErrors;

export const listInvestigates: API.PaginatedOperationMethod<
  ListInvestigatesRequest,
  ListInvestigatesResponse,
  ListInvestigatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListInvestigatesRequest,
  output: ListInvestigatesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// InvestigateDetection
// =============================================================================

export interface GetInvestigateDetectionRequest {
  investigateId: string;
  /** Identifier. */
  accountId: string;
}

export const GetInvestigateDetectionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      investigateId: Schema.String.pipe(T.HttpPath("investigateId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/investigate/{investigateId}/detections",
      }),
    ),
  ) as unknown as Schema.Schema<GetInvestigateDetectionRequest>;

export interface GetInvestigateDetectionResponse {
  action: string;
  attachments: {
    size: number;
    contentType?: string | null;
    detection?:
      | "MALICIOUS"
      | "MALICIOUS-BEC"
      | "SUSPICIOUS"
      | "SPOOF"
      | "SPAM"
      | "BULK"
      | "ENCRYPTED"
      | "EXTERNAL"
      | "UNKNOWN"
      | "NONE"
      | null;
    encrypted?: boolean | null;
    filename?: string | null;
    md5?: string | null;
    name?: string | null;
    sha1?: string | null;
    sha256?: string | null;
  }[];
  findings:
    | {
        attachment?: string | null;
        detail?: string | null;
        detection?:
          | "MALICIOUS"
          | "MALICIOUS-BEC"
          | "SUSPICIOUS"
          | "SPOOF"
          | "SPAM"
          | "BULK"
          | "ENCRYPTED"
          | "EXTERNAL"
          | "UNKNOWN"
          | "NONE"
          | (string & {})
          | null;
        field?: string | null;
        name?: string | null;
        portion?: string | null;
        reason?: string | null;
        score?: number | null;
        value?: string | null;
      }[]
    | null;
  headers: { name: string; value: string }[];
  links: { href: string; text?: string | null }[];
  senderInfo: {
    asName?: string | null;
    asNumber?: number | null;
    geo?: string | null;
    ip?: string | null;
    pld?: string | null;
  };
  threatCategories: {
    id?: number | null;
    description?: string | null;
    name?: string | null;
  }[];
  validation: {
    comment?: string | null;
    dkim?:
      | "pass"
      | "neutral"
      | "fail"
      | "error"
      | "none"
      | (string & {})
      | null;
    dmarc?:
      | "pass"
      | "neutral"
      | "fail"
      | "error"
      | "none"
      | (string & {})
      | null;
    spf?: "pass" | "neutral" | "fail" | "error" | "none" | (string & {}) | null;
  };
  finalDisposition?:
    | "MALICIOUS"
    | "MALICIOUS-BEC"
    | "SUSPICIOUS"
    | "SPOOF"
    | "SPAM"
    | "BULK"
    | "ENCRYPTED"
    | "EXTERNAL"
    | "UNKNOWN"
    | "NONE"
    | (string & {})
    | null;
}

export const GetInvestigateDetectionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      action: Schema.String,
      attachments: Schema.Array(
        Schema.Struct({
          size: Schema.Number,
          contentType: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          detection: Schema.optional(
            Schema.Union([
              Schema.Literal("MALICIOUS"),
              Schema.Literal("MALICIOUS-BEC"),
              Schema.Literal("SUSPICIOUS"),
              Schema.Literal("SPOOF"),
              Schema.Literal("SPAM"),
              Schema.Literal("BULK"),
              Schema.Literal("ENCRYPTED"),
              Schema.Literal("EXTERNAL"),
              Schema.Literal("UNKNOWN"),
              Schema.Literal("NONE"),
              Schema.Null,
            ]),
          ),
          encrypted: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          filename: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          md5: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          sha1: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          sha256: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            size: "size",
            contentType: "content_type",
            detection: "detection",
            encrypted: "encrypted",
            filename: "filename",
            md5: "md5",
            name: "name",
            sha1: "sha1",
            sha256: "sha256",
          }),
        ),
      ),
      findings: Schema.Union([
        Schema.Array(
          Schema.Struct({
            attachment: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            detail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            detection: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals([
                    "MALICIOUS",
                    "MALICIOUS-BEC",
                    "SUSPICIOUS",
                    "SPOOF",
                    "SPAM",
                    "BULK",
                    "ENCRYPTED",
                    "EXTERNAL",
                    "UNKNOWN",
                    "NONE",
                  ]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            field: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            portion: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            reason: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            score: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }),
        ),
        Schema.Null,
      ]),
      headers: Schema.Array(
        Schema.Struct({
          name: Schema.String,
          value: Schema.String,
        }),
      ),
      links: Schema.Array(
        Schema.Struct({
          href: Schema.String,
          text: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
      ),
      senderInfo: Schema.Struct({
        asName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        asNumber: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        geo: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        pld: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          asName: "as_name",
          asNumber: "as_number",
          geo: "geo",
          ip: "ip",
          pld: "pld",
        }),
      ),
      threatCategories: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          description: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
      ),
      validation: Schema.Struct({
        comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        dkim: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["pass", "neutral", "fail", "error", "none"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        dmarc: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["pass", "neutral", "fail", "error", "none"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
        spf: Schema.optional(
          Schema.Union([
            Schema.Union([
              Schema.Literals(["pass", "neutral", "fail", "error", "none"]),
              Schema.String,
            ]),
            Schema.Null,
          ]),
        ),
      }),
      finalDisposition: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "MALICIOUS",
              "MALICIOUS-BEC",
              "SUSPICIOUS",
              "SPOOF",
              "SPAM",
              "BULK",
              "ENCRYPTED",
              "EXTERNAL",
              "UNKNOWN",
              "NONE",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          action: "action",
          attachments: "attachments",
          findings: "findings",
          headers: "headers",
          links: "links",
          senderInfo: "sender_info",
          threatCategories: "threat_categories",
          validation: "validation",
          finalDisposition: "final_disposition",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetInvestigateDetectionResponse>;

export type GetInvestigateDetectionError = DefaultErrors;

export const getInvestigateDetection: API.OperationMethod<
  GetInvestigateDetectionRequest,
  GetInvestigateDetectionResponse,
  GetInvestigateDetectionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInvestigateDetectionRequest,
  output: GetInvestigateDetectionResponse,
  errors: [],
}));

// =============================================================================
// InvestigateMove
// =============================================================================

export interface CreateInvestigateMoveRequest {
  investigateId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  destination:
    | "Inbox"
    | "JunkEmail"
    | "DeletedItems"
    | "RecoverableItemsDeletions"
    | "RecoverableItemsPurges"
    | (string & {});
}

export const CreateInvestigateMoveRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      investigateId: Schema.String.pipe(T.HttpPath("investigateId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      destination: Schema.Union([
        Schema.Literals([
          "Inbox",
          "JunkEmail",
          "DeletedItems",
          "RecoverableItemsDeletions",
          "RecoverableItemsPurges",
        ]),
        Schema.String,
      ]),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/investigate/{investigateId}/move",
      }),
    ),
  ) as unknown as Schema.Schema<CreateInvestigateMoveRequest>;

export interface CreateInvestigateMoveResponse {
  result: {
    success: boolean;
    completedAt?: string | null;
    completedTimestamp?: string | null;
    destination?: string | null;
    itemCount?: number | null;
    messageId?: string | null;
    operation?: string | null;
    recipient?: string | null;
    status?: string | null;
  }[];
}

export const CreateInvestigateMoveResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          success: Schema.Boolean,
          completedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          completedTimestamp: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          destination: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          itemCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          messageId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          operation: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          recipient: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            success: "success",
            completedAt: "completed_at",
            completedTimestamp: "completed_timestamp",
            destination: "destination",
            itemCount: "item_count",
            messageId: "message_id",
            operation: "operation",
            recipient: "recipient",
            status: "status",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<CreateInvestigateMoveResponse>;

export type CreateInvestigateMoveError = DefaultErrors;

export const createInvestigateMove: API.PaginatedOperationMethod<
  CreateInvestigateMoveRequest,
  CreateInvestigateMoveResponse,
  CreateInvestigateMoveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: CreateInvestigateMoveRequest,
  output: CreateInvestigateMoveResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface BulkInvestigateMoveRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** @deprecated Body param: Deprecated, use `ids` instead. End of life: November 1, 2026. List of message IDs to move. */
  postfixIds?: string[];
  /** Body param */
  destination:
    | "Inbox"
    | "JunkEmail"
    | "DeletedItems"
    | "RecoverableItemsDeletions"
    | "RecoverableItemsPurges"
    | (string & {});
  /** Body param: List of message IDs to move */
  ids?: string[];
}

export const BulkInvestigateMoveRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      postfixIds: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("postfix_ids"),
      ),
      destination: Schema.Union([
        Schema.Literals([
          "Inbox",
          "JunkEmail",
          "DeletedItems",
          "RecoverableItemsDeletions",
          "RecoverableItemsPurges",
        ]),
        Schema.String,
      ]),
      ids: Schema.optional(Schema.Array(Schema.String)),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/investigate/move",
      }),
    ),
  ) as unknown as Schema.Schema<BulkInvestigateMoveRequest>;

export interface BulkInvestigateMoveResponse {
  result: {
    success: boolean;
    completedAt?: string | null;
    completedTimestamp?: string | null;
    destination?: string | null;
    itemCount?: number | null;
    messageId?: string | null;
    operation?: string | null;
    recipient?: string | null;
    status?: string | null;
  }[];
}

export const BulkInvestigateMoveResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          success: Schema.Boolean,
          completedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          completedTimestamp: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          destination: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          itemCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          messageId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          operation: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          recipient: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            success: "success",
            completedAt: "completed_at",
            completedTimestamp: "completed_timestamp",
            destination: "destination",
            itemCount: "item_count",
            messageId: "message_id",
            operation: "operation",
            recipient: "recipient",
            status: "status",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<BulkInvestigateMoveResponse>;

export type BulkInvestigateMoveError = DefaultErrors;

export const bulkInvestigateMove: API.PaginatedOperationMethod<
  BulkInvestigateMoveRequest,
  BulkInvestigateMoveResponse,
  BulkInvestigateMoveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: BulkInvestigateMoveRequest,
  output: BulkInvestigateMoveResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// InvestigatePreview
// =============================================================================

export interface GetInvestigatePreviewRequest {
  investigateId: string;
  /** Identifier. */
  accountId: string;
}

export const GetInvestigatePreviewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      investigateId: Schema.String.pipe(T.HttpPath("investigateId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/investigate/{investigateId}/preview",
      }),
    ),
  ) as unknown as Schema.Schema<GetInvestigatePreviewRequest>;

export interface GetInvestigatePreviewResponse {
  /** A base64 encoded PNG image of the email. */
  screenshot: string;
}

export const GetInvestigatePreviewResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      screenshot: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetInvestigatePreviewResponse>;

export type GetInvestigatePreviewError = DefaultErrors;

export const getInvestigatePreview: API.OperationMethod<
  GetInvestigatePreviewRequest,
  GetInvestigatePreviewResponse,
  GetInvestigatePreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInvestigatePreviewRequest,
  output: GetInvestigatePreviewResponse,
  errors: [],
}));

export interface CreateInvestigatePreviewRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The identifier of the message */
  postfixId: string;
}

export const CreateInvestigatePreviewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      postfixId: Schema.String,
    }).pipe(
      Schema.encodeKeys({ postfixId: "postfix_id" }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/investigate/preview",
      }),
    ),
  ) as unknown as Schema.Schema<CreateInvestigatePreviewRequest>;

export interface CreateInvestigatePreviewResponse {
  /** A base64 encoded PNG image of the email. */
  screenshot: string;
}

export const CreateInvestigatePreviewResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      screenshot: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateInvestigatePreviewResponse>;

export type CreateInvestigatePreviewError = DefaultErrors;

export const createInvestigatePreview: API.OperationMethod<
  CreateInvestigatePreviewRequest,
  CreateInvestigatePreviewResponse,
  CreateInvestigatePreviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInvestigatePreviewRequest,
  output: CreateInvestigatePreviewResponse,
  errors: [],
}));

// =============================================================================
// InvestigateRaw
// =============================================================================

export interface GetInvestigateRawRequest {
  investigateId: string;
  /** Identifier. */
  accountId: string;
}

export const GetInvestigateRawRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      investigateId: Schema.String.pipe(T.HttpPath("investigateId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/investigate/{investigateId}/raw",
      }),
    ),
  ) as unknown as Schema.Schema<GetInvestigateRawRequest>;

export interface GetInvestigateRawResponse {
  /** A UTF-8 encoded eml file of the email. */
  raw: string;
}

export const GetInvestigateRawResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      raw: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetInvestigateRawResponse>;

export type GetInvestigateRawError = DefaultErrors;

export const getInvestigateRaw: API.OperationMethod<
  GetInvestigateRawRequest,
  GetInvestigateRawResponse,
  GetInvestigateRawError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInvestigateRawRequest,
  output: GetInvestigateRawResponse,
  errors: [],
}));

// =============================================================================
// InvestigateReclassify
// =============================================================================

export interface CreateInvestigateReclassifyRequest {
  investigateId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  expectedDisposition:
    | "NONE"
    | "BULK"
    | "MALICIOUS"
    | "SPAM"
    | "SPOOF"
    | "SUSPICIOUS"
    | (string & {});
  /** Body param: Base64 encoded content of the EML file. */
  emlContent?: string;
  /** Body param */
  escalatedSubmissionId?: string;
}

export const CreateInvestigateReclassifyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      investigateId: Schema.String.pipe(T.HttpPath("investigateId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      expectedDisposition: Schema.Union([
        Schema.Literals([
          "NONE",
          "BULK",
          "MALICIOUS",
          "SPAM",
          "SPOOF",
          "SUSPICIOUS",
        ]),
        Schema.String,
      ]),
      emlContent: Schema.optional(Schema.String),
      escalatedSubmissionId: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        expectedDisposition: "expected_disposition",
        emlContent: "eml_content",
        escalatedSubmissionId: "escalated_submission_id",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/investigate/{investigateId}/reclassify",
      }),
    ),
  ) as unknown as Schema.Schema<CreateInvestigateReclassifyRequest>;

export type CreateInvestigateReclassifyResponse = unknown;

export const CreateInvestigateReclassifyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateInvestigateReclassifyResponse>;

export type CreateInvestigateReclassifyError = DefaultErrors;

export const createInvestigateReclassify: API.OperationMethod<
  CreateInvestigateReclassifyRequest,
  CreateInvestigateReclassifyResponse,
  CreateInvestigateReclassifyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateInvestigateReclassifyRequest,
  output: CreateInvestigateReclassifyResponse,
  errors: [],
}));

// =============================================================================
// InvestigateRelease
// =============================================================================

export interface BulkInvestigateReleaseRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  body: string[];
}

export const BulkInvestigateReleaseRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.Array(Schema.String).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/investigate/release",
      }),
    ),
  ) as unknown as Schema.Schema<BulkInvestigateReleaseRequest>;

export interface BulkInvestigateReleaseResponse {
  result: {
    id: string;
    delivered?: string[] | null;
    failed?: string[] | null;
    postfixId?: string | null;
    undelivered?: string[] | null;
  }[];
}

export const BulkInvestigateReleaseResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          delivered: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          failed: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          postfixId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          undelivered: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            delivered: "delivered",
            failed: "failed",
            postfixId: "postfix_id",
            undelivered: "undelivered",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<BulkInvestigateReleaseResponse>;

export type BulkInvestigateReleaseError = DefaultErrors;

export const bulkInvestigateRelease: API.PaginatedOperationMethod<
  BulkInvestigateReleaseRequest,
  BulkInvestigateReleaseResponse,
  BulkInvestigateReleaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: BulkInvestigateReleaseRequest,
  output: BulkInvestigateReleaseResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// InvestigateTrace
// =============================================================================

export interface GetInvestigateTraceRequest {
  investigateId: string;
  /** Identifier. */
  accountId: string;
}

export const GetInvestigateTraceRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      investigateId: Schema.String.pipe(T.HttpPath("investigateId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/investigate/{investigateId}/trace",
      }),
    ),
  ) as unknown as Schema.Schema<GetInvestigateTraceRequest>;

export interface GetInvestigateTraceResponse {
  inbound: {
    lines?:
      | {
          lineno?: number | null;
          loggedAt?: string | null;
          message?: string | null;
          ts?: string | null;
        }[]
      | null;
    pending?: boolean | null;
  };
  outbound: {
    lines?:
      | {
          lineno?: number | null;
          loggedAt?: string | null;
          message?: string | null;
          ts?: string | null;
        }[]
      | null;
    pending?: boolean | null;
  };
}

export const GetInvestigateTraceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      inbound: Schema.Struct({
        lines: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                lineno: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                loggedAt: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                message: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                ts: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              }).pipe(
                Schema.encodeKeys({
                  lineno: "lineno",
                  loggedAt: "logged_at",
                  message: "message",
                  ts: "ts",
                }),
              ),
            ),
            Schema.Null,
          ]),
        ),
        pending: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      }),
      outbound: Schema.Struct({
        lines: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                lineno: Schema.optional(
                  Schema.Union([Schema.Number, Schema.Null]),
                ),
                loggedAt: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                message: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
                ts: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              }).pipe(
                Schema.encodeKeys({
                  lineno: "lineno",
                  loggedAt: "logged_at",
                  message: "message",
                  ts: "ts",
                }),
              ),
            ),
            Schema.Null,
          ]),
        ),
        pending: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      }),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetInvestigateTraceResponse>;

export type GetInvestigateTraceError = DefaultErrors;

export const getInvestigateTrace: API.OperationMethod<
  GetInvestigateTraceRequest,
  GetInvestigateTraceResponse,
  GetInvestigateTraceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetInvestigateTraceRequest,
  output: GetInvestigateTraceResponse,
  errors: [],
}));

// =============================================================================
// PhishguardReport
// =============================================================================

export interface ListPhishguardReportsRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: End of the time range (RFC3339). Takes precedence over to_date. */
  end?: string;
  /** Query param: Deprecated, use `start` instead. Start date in YYYY-MM-DD format. */
  fromDate?: string;
  /** Query param: Start of the time range (RFC3339). Takes precedence over from_date. */
  start?: string;
  /** Query param: Deprecated, use `end` instead. End date in YYYY-MM-DD format. */
  toDate?: string;
}

export const ListPhishguardReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      end: Schema.optional(Schema.String).pipe(T.HttpQuery("end")),
      fromDate: Schema.optional(Schema.String).pipe(T.HttpQuery("from_date")),
      start: Schema.optional(Schema.String).pipe(T.HttpQuery("start")),
      toDate: Schema.optional(Schema.String).pipe(T.HttpQuery("to_date")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/phishguard/reports",
      }),
    ),
  ) as unknown as Schema.Schema<ListPhishguardReportsRequest>;

export interface ListPhishguardReportsResponse {
  result: {
    id: number;
    content: string;
    disposition:
      | "MALICIOUS"
      | "MALICIOUS-BEC"
      | "SUSPICIOUS"
      | "SPOOF"
      | "SPAM"
      | "BULK"
      | "ENCRYPTED"
      | "EXTERNAL"
      | "UNKNOWN"
      | "NONE"
      | (string & {});
    fields: {
      to: string[];
      from?: string | null;
      occurredAt?: string | null;
      postfixId?: string | null;
      ts?: string | null;
    };
    priority: string;
    title: string;
    createdAt?: string | null;
    tags?: { category: string; value: string }[] | null;
    ts?: string | null;
    updatedAt?: string | null;
  }[];
}

export const ListPhishguardReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.Number,
          content: Schema.String,
          disposition: Schema.Union([
            Schema.Literals([
              "MALICIOUS",
              "MALICIOUS-BEC",
              "SUSPICIOUS",
              "SPOOF",
              "SPAM",
              "BULK",
              "ENCRYPTED",
              "EXTERNAL",
              "UNKNOWN",
              "NONE",
            ]),
            Schema.String,
          ]),
          fields: Schema.Struct({
            to: Schema.Array(Schema.String),
            from: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            occurredAt: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            postfixId: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            ts: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          }).pipe(
            Schema.encodeKeys({
              to: "to",
              from: "from",
              occurredAt: "occurred_at",
              postfixId: "postfix_id",
              ts: "ts",
            }),
          ),
          priority: Schema.String,
          title: Schema.String,
          createdAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          tags: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  category: Schema.String,
                  value: Schema.String,
                }),
              ),
              Schema.Null,
            ]),
          ),
          ts: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          updatedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            content: "content",
            disposition: "disposition",
            fields: "fields",
            priority: "priority",
            title: "title",
            createdAt: "created_at",
            tags: "tags",
            ts: "ts",
            updatedAt: "updated_at",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<ListPhishguardReportsResponse>;

export type ListPhishguardReportsError = DefaultErrors;

export const listPhishguardReports: API.PaginatedOperationMethod<
  ListPhishguardReportsRequest,
  ListPhishguardReportsResponse,
  ListPhishguardReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListPhishguardReportsRequest,
  output: ListPhishguardReportsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// SettingAllowPolicy
// =============================================================================

export interface GetSettingAllowPolicyRequest {
  policyId: string;
  /** Identifier. */
  accountId: string;
}

export const GetSettingAllowPolicyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      policyId: Schema.String.pipe(T.HttpPath("policyId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/allow_policies/{policyId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetSettingAllowPolicyRequest>;

export interface GetSettingAllowPolicyResponse {
  /** Allow policy identifier */
  id: string;
  createdAt: string;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified: string;
  comments?: string | null;
  /** Messages from this sender will be exempted from Spam, Spoof and Bulk dispositions. Note - This will not exempt messages with Malicious or Suspicious dispositions. */
  isAcceptableSender?: boolean | null;
  /** Messages to this recipient will bypass all detections */
  isExemptRecipient?: boolean | null;
  /** @deprecated Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. */
  isRecipient?: boolean | null;
  isRegex?: boolean | null;
  /** @deprecated Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. */
  isSender?: boolean | null;
  /** @deprecated Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. */
  isSpoof?: boolean | null;
  /** Messages from this sender will bypass all detections and link following */
  isTrustedSender?: boolean | null;
  modifiedAt?: string | null;
  pattern?: string | null;
  /** Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {}) | null;
  /** Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. */
  verifySender?: boolean | null;
}

export const GetSettingAllowPolicyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      lastModified: Schema.String,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isAcceptableSender: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isExemptRecipient: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isRecipient: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isSender: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isSpoof: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isTrustedSender: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      verifySender: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          lastModified: "last_modified",
          comments: "comments",
          isAcceptableSender: "is_acceptable_sender",
          isExemptRecipient: "is_exempt_recipient",
          isRecipient: "is_recipient",
          isRegex: "is_regex",
          isSender: "is_sender",
          isSpoof: "is_spoof",
          isTrustedSender: "is_trusted_sender",
          modifiedAt: "modified_at",
          pattern: "pattern",
          patternType: "pattern_type",
          verifySender: "verify_sender",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetSettingAllowPolicyResponse>;

export type GetSettingAllowPolicyError =
  | DefaultErrors
  | AllowPolicyNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const getSettingAllowPolicy: API.OperationMethod<
  GetSettingAllowPolicyRequest,
  GetSettingAllowPolicyResponse,
  GetSettingAllowPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingAllowPolicyRequest,
  output: GetSettingAllowPolicyResponse,
  errors: [AllowPolicyNotFound, EmailSecurityNotEntitled, Forbidden],
}));

export interface ListSettingAllowPoliciesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The sorting direction. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Filter to show only policies where messages from the sender are exempted from Spam, Spoof, and Bulk dispositions (not Malicious or Suspicious). */
  isAcceptableSender?: boolean;
  /** Query param: Filter to show only policies where messages to the recipient bypass all detections. */
  isExemptRecipient?: boolean;
  /** Query param: Filter to show only policies where messages from the sender bypass all detections and link following. */
  isTrustedSender?: boolean;
  /** Query param: Field to sort by. */
  order?: "pattern" | "created_at" | (string & {});
  /** Query param */
  pattern?: string;
  /** Query param: Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {});
  /** Query param: Search term for filtering records. Behavior may change. */
  search?: string;
  /** Query param: Filter to show only policies that enforce DMARC, SPF, or DKIM authentication. */
  verifySender?: boolean;
}

export const ListSettingAllowPoliciesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      isAcceptableSender: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("is_acceptable_sender"),
      ),
      isExemptRecipient: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("is_exempt_recipient"),
      ),
      isTrustedSender: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("is_trusted_sender"),
      ),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["pattern", "created_at"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      pattern: Schema.optional(Schema.String).pipe(T.HttpQuery("pattern")),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("pattern_type")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
      verifySender: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("verify_sender"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/allow_policies",
      }),
    ),
  ) as unknown as Schema.Schema<ListSettingAllowPoliciesRequest>;

export interface ListSettingAllowPoliciesResponse {
  result: {
    id: string;
    createdAt: string;
    lastModified: string;
    comments?: string | null;
    isAcceptableSender?: boolean | null;
    isExemptRecipient?: boolean | null;
    isRecipient?: boolean | null;
    isRegex?: boolean | null;
    isSender?: boolean | null;
    isSpoof?: boolean | null;
    isTrustedSender?: boolean | null;
    modifiedAt?: string | null;
    pattern?: string | null;
    patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {}) | null;
    verifySender?: boolean | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSettingAllowPoliciesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdAt: Schema.String,
          lastModified: Schema.String,
          comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          isAcceptableSender: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          isExemptRecipient: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          isRecipient: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          isSender: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          isSpoof: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          isTrustedSender: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          modifiedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          patternType: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          verifySender: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdAt: "created_at",
            lastModified: "last_modified",
            comments: "comments",
            isAcceptableSender: "is_acceptable_sender",
            isExemptRecipient: "is_exempt_recipient",
            isRecipient: "is_recipient",
            isRegex: "is_regex",
            isSender: "is_sender",
            isSpoof: "is_spoof",
            isTrustedSender: "is_trusted_sender",
            modifiedAt: "modified_at",
            pattern: "pattern",
            patternType: "pattern_type",
            verifySender: "verify_sender",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListSettingAllowPoliciesResponse>;

export type ListSettingAllowPoliciesError =
  | DefaultErrors
  | EmailSecurityNotEntitled
  | Forbidden;

export const listSettingAllowPolicies: API.PaginatedOperationMethod<
  ListSettingAllowPoliciesRequest,
  ListSettingAllowPoliciesResponse,
  ListSettingAllowPoliciesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingAllowPoliciesRequest,
  output: ListSettingAllowPoliciesResponse,
  errors: [EmailSecurityNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateSettingAllowPolicyRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Messages from this sender will be exempted from Spam, Spoof and Bulk dispositions. Note - This will not exempt messages with Malicious or Suspicious dispositions. */
  isAcceptableSender: boolean;
  /** Body param: Messages to this recipient will bypass all detections */
  isExemptRecipient: boolean;
  /** Body param */
  isRegex: boolean;
  /** Body param: Messages from this sender will bypass all detections and link following */
  isTrustedSender: boolean;
  /** Body param */
  pattern: string;
  /** Body param: Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {});
  /** Body param: Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. */
  verifySender: boolean;
  /** Body param */
  comments?: string | null;
  /** @deprecated Body param: Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. */
  isRecipient?: boolean;
  /** @deprecated Body param: Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. */
  isSender?: boolean;
  /** @deprecated Body param: Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. */
  isSpoof?: boolean;
}

export const CreateSettingAllowPolicyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      isAcceptableSender: Schema.Boolean,
      isExemptRecipient: Schema.Boolean,
      isRegex: Schema.Boolean,
      isTrustedSender: Schema.Boolean,
      pattern: Schema.String,
      patternType: Schema.Union([
        Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
        Schema.String,
      ]),
      verifySender: Schema.Boolean,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isRecipient: Schema.optional(Schema.Boolean),
      isSender: Schema.optional(Schema.Boolean),
      isSpoof: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        isAcceptableSender: "is_acceptable_sender",
        isExemptRecipient: "is_exempt_recipient",
        isRegex: "is_regex",
        isTrustedSender: "is_trusted_sender",
        pattern: "pattern",
        patternType: "pattern_type",
        verifySender: "verify_sender",
        comments: "comments",
        isRecipient: "is_recipient",
        isSender: "is_sender",
        isSpoof: "is_spoof",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/settings/allow_policies",
      }),
    ),
  ) as unknown as Schema.Schema<CreateSettingAllowPolicyRequest>;

export interface CreateSettingAllowPolicyResponse {
  /** Allow policy identifier */
  id: string;
  createdAt: string;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified: string;
  comments?: string | null;
  /** Messages from this sender will be exempted from Spam, Spoof and Bulk dispositions. Note - This will not exempt messages with Malicious or Suspicious dispositions. */
  isAcceptableSender?: boolean | null;
  /** Messages to this recipient will bypass all detections */
  isExemptRecipient?: boolean | null;
  /** @deprecated Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. */
  isRecipient?: boolean | null;
  isRegex?: boolean | null;
  /** @deprecated Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. */
  isSender?: boolean | null;
  /** @deprecated Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. */
  isSpoof?: boolean | null;
  /** Messages from this sender will bypass all detections and link following */
  isTrustedSender?: boolean | null;
  modifiedAt?: string | null;
  pattern?: string | null;
  /** Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {}) | null;
  /** Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. */
  verifySender?: boolean | null;
}

export const CreateSettingAllowPolicyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      lastModified: Schema.String,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isAcceptableSender: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isExemptRecipient: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isRecipient: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isSender: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isSpoof: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isTrustedSender: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      verifySender: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          lastModified: "last_modified",
          comments: "comments",
          isAcceptableSender: "is_acceptable_sender",
          isExemptRecipient: "is_exempt_recipient",
          isRecipient: "is_recipient",
          isRegex: "is_regex",
          isSender: "is_sender",
          isSpoof: "is_spoof",
          isTrustedSender: "is_trusted_sender",
          modifiedAt: "modified_at",
          pattern: "pattern",
          patternType: "pattern_type",
          verifySender: "verify_sender",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateSettingAllowPolicyResponse>;

export type CreateSettingAllowPolicyError =
  | DefaultErrors
  | EmailSecurityNotEntitled
  | Forbidden;

export const createSettingAllowPolicy: API.OperationMethod<
  CreateSettingAllowPolicyRequest,
  CreateSettingAllowPolicyResponse,
  CreateSettingAllowPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSettingAllowPolicyRequest,
  output: CreateSettingAllowPolicyResponse,
  errors: [EmailSecurityNotEntitled, Forbidden],
}));

export interface PatchSettingAllowPolicyRequest {
  policyId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  comments?: string | null;
  /** Body param: Messages from this sender will be exempted from Spam, Spoof and Bulk dispositions. Note - This will not exempt messages with Malicious or Suspicious dispositions. */
  isAcceptableSender?: boolean;
  /** Body param: Messages to this recipient will bypass all detections */
  isExemptRecipient?: boolean;
  /** @deprecated Body param: Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. */
  isRecipient?: boolean;
  /** Body param */
  isRegex?: boolean;
  /** @deprecated Body param: Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. */
  isSender?: boolean;
  /** @deprecated Body param: Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. */
  isSpoof?: boolean;
  /** Body param: Messages from this sender will bypass all detections and link following */
  isTrustedSender?: boolean;
  /** Body param */
  pattern?: string;
  /** Body param: Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {});
  /** Body param: Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. */
  verifySender?: boolean;
}

export const PatchSettingAllowPolicyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      policyId: Schema.String.pipe(T.HttpPath("policyId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isAcceptableSender: Schema.optional(Schema.Boolean),
      isExemptRecipient: Schema.optional(Schema.Boolean),
      isRecipient: Schema.optional(Schema.Boolean),
      isRegex: Schema.optional(Schema.Boolean),
      isSender: Schema.optional(Schema.Boolean),
      isSpoof: Schema.optional(Schema.Boolean),
      isTrustedSender: Schema.optional(Schema.Boolean),
      pattern: Schema.optional(Schema.String),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
          Schema.String,
        ]),
      ),
      verifySender: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        comments: "comments",
        isAcceptableSender: "is_acceptable_sender",
        isExemptRecipient: "is_exempt_recipient",
        isRecipient: "is_recipient",
        isRegex: "is_regex",
        isSender: "is_sender",
        isSpoof: "is_spoof",
        isTrustedSender: "is_trusted_sender",
        pattern: "pattern",
        patternType: "pattern_type",
        verifySender: "verify_sender",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/email-security/settings/allow_policies/{policyId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchSettingAllowPolicyRequest>;

export interface PatchSettingAllowPolicyResponse {
  /** Allow policy identifier */
  id: string;
  createdAt: string;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified: string;
  comments?: string | null;
  /** Messages from this sender will be exempted from Spam, Spoof and Bulk dispositions. Note - This will not exempt messages with Malicious or Suspicious dispositions. */
  isAcceptableSender?: boolean | null;
  /** Messages to this recipient will bypass all detections */
  isExemptRecipient?: boolean | null;
  /** @deprecated Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. */
  isRecipient?: boolean | null;
  isRegex?: boolean | null;
  /** @deprecated Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. */
  isSender?: boolean | null;
  /** @deprecated Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. */
  isSpoof?: boolean | null;
  /** Messages from this sender will bypass all detections and link following */
  isTrustedSender?: boolean | null;
  modifiedAt?: string | null;
  pattern?: string | null;
  /** Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {}) | null;
  /** Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. */
  verifySender?: boolean | null;
}

export const PatchSettingAllowPolicyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      lastModified: Schema.String,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isAcceptableSender: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isExemptRecipient: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isRecipient: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isSender: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isSpoof: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isTrustedSender: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      verifySender: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          lastModified: "last_modified",
          comments: "comments",
          isAcceptableSender: "is_acceptable_sender",
          isExemptRecipient: "is_exempt_recipient",
          isRecipient: "is_recipient",
          isRegex: "is_regex",
          isSender: "is_sender",
          isSpoof: "is_spoof",
          isTrustedSender: "is_trusted_sender",
          modifiedAt: "modified_at",
          pattern: "pattern",
          patternType: "pattern_type",
          verifySender: "verify_sender",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchSettingAllowPolicyResponse>;

export type PatchSettingAllowPolicyError =
  | DefaultErrors
  | AllowPolicyNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const patchSettingAllowPolicy: API.OperationMethod<
  PatchSettingAllowPolicyRequest,
  PatchSettingAllowPolicyResponse,
  PatchSettingAllowPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingAllowPolicyRequest,
  output: PatchSettingAllowPolicyResponse,
  errors: [AllowPolicyNotFound, EmailSecurityNotEntitled, Forbidden],
}));

export interface DeleteSettingAllowPolicyRequest {
  policyId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteSettingAllowPolicyRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      policyId: Schema.String.pipe(T.HttpPath("policyId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/email-security/settings/allow_policies/{policyId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteSettingAllowPolicyRequest>;

export interface DeleteSettingAllowPolicyResponse {
  /** Allow policy identifier */
  id: string;
}

export const DeleteSettingAllowPolicyResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteSettingAllowPolicyResponse>;

export type DeleteSettingAllowPolicyError =
  | DefaultErrors
  | AllowPolicyNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const deleteSettingAllowPolicy: API.OperationMethod<
  DeleteSettingAllowPolicyRequest,
  DeleteSettingAllowPolicyResponse,
  DeleteSettingAllowPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingAllowPolicyRequest,
  output: DeleteSettingAllowPolicyResponse,
  errors: [AllowPolicyNotFound, EmailSecurityNotEntitled, Forbidden],
}));

// =============================================================================
// SettingBlockSender
// =============================================================================

export interface GetSettingBlockSenderRequest {
  patternId: string;
  /** Identifier. */
  accountId: string;
}

export const GetSettingBlockSenderRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      patternId: Schema.String.pipe(T.HttpPath("patternId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/block_senders/{patternId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetSettingBlockSenderRequest>;

export interface GetSettingBlockSenderResponse {
  /** Blocked sender pattern identifier */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  isRegex?: boolean | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
  pattern?: string | null;
  /** Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {}) | null;
}

export const GetSettingBlockSenderResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          isRegex: "is_regex",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
          pattern: "pattern",
          patternType: "pattern_type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetSettingBlockSenderResponse>;

export type GetSettingBlockSenderError =
  | DefaultErrors
  | BlockSenderNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const getSettingBlockSender: API.OperationMethod<
  GetSettingBlockSenderRequest,
  GetSettingBlockSenderResponse,
  GetSettingBlockSenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingBlockSenderRequest,
  output: GetSettingBlockSenderResponse,
  errors: [BlockSenderNotFound, EmailSecurityNotEntitled, Forbidden],
}));

export interface ListSettingBlockSendersRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The sorting direction. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Field to sort by. */
  order?: "pattern" | "created_at" | (string & {});
  /** Query param: Filter by pattern value. */
  pattern?: string;
  /** Query param: Filter by pattern type. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {});
  /** Query param: Search term for filtering records. Behavior may change. */
  search?: string;
}

export const ListSettingBlockSendersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["pattern", "created_at"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      pattern: Schema.optional(Schema.String).pipe(T.HttpQuery("pattern")),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("pattern_type")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/block_senders",
      }),
    ),
  ) as unknown as Schema.Schema<ListSettingBlockSendersRequest>;

export interface ListSettingBlockSendersResponse {
  result: {
    id?: string | null;
    comments?: string | null;
    createdAt?: string | null;
    isRegex?: boolean | null;
    lastModified?: string | null;
    modifiedAt?: string | null;
    pattern?: string | null;
    patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {}) | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSettingBlockSendersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          createdAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          lastModified: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          modifiedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          patternType: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            comments: "comments",
            createdAt: "created_at",
            isRegex: "is_regex",
            lastModified: "last_modified",
            modifiedAt: "modified_at",
            pattern: "pattern",
            patternType: "pattern_type",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListSettingBlockSendersResponse>;

export type ListSettingBlockSendersError =
  | DefaultErrors
  | EmailSecurityNotEntitled
  | Forbidden;

export const listSettingBlockSenders: API.PaginatedOperationMethod<
  ListSettingBlockSendersRequest,
  ListSettingBlockSendersResponse,
  ListSettingBlockSendersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingBlockSendersRequest,
  output: ListSettingBlockSendersResponse,
  errors: [EmailSecurityNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateSettingBlockSenderRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  isRegex: boolean;
  /** Body param */
  pattern: string;
  /** Body param: Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {});
  /** Body param */
  comments?: string | null;
}

export const CreateSettingBlockSenderRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      isRegex: Schema.Boolean,
      pattern: Schema.String,
      patternType: Schema.Union([
        Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
        Schema.String,
      ]),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        isRegex: "is_regex",
        pattern: "pattern",
        patternType: "pattern_type",
        comments: "comments",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/settings/block_senders",
      }),
    ),
  ) as unknown as Schema.Schema<CreateSettingBlockSenderRequest>;

export interface CreateSettingBlockSenderResponse {
  /** Blocked sender pattern identifier */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  isRegex?: boolean | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
  pattern?: string | null;
  /** Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {}) | null;
}

export const CreateSettingBlockSenderResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          isRegex: "is_regex",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
          pattern: "pattern",
          patternType: "pattern_type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateSettingBlockSenderResponse>;

export type CreateSettingBlockSenderError =
  | DefaultErrors
  | EmailSecurityNotEntitled
  | Forbidden;

export const createSettingBlockSender: API.OperationMethod<
  CreateSettingBlockSenderRequest,
  CreateSettingBlockSenderResponse,
  CreateSettingBlockSenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSettingBlockSenderRequest,
  output: CreateSettingBlockSenderResponse,
  errors: [EmailSecurityNotEntitled, Forbidden],
}));

export interface PatchSettingBlockSenderRequest {
  patternId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  comments?: string | null;
  /** Body param */
  isRegex?: boolean;
  /** Body param */
  pattern?: string;
  /** Body param: Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {});
}

export const PatchSettingBlockSenderRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      patternId: Schema.String.pipe(T.HttpPath("patternId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isRegex: Schema.optional(Schema.Boolean),
      pattern: Schema.optional(Schema.String),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        comments: "comments",
        isRegex: "is_regex",
        pattern: "pattern",
        patternType: "pattern_type",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/email-security/settings/block_senders/{patternId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchSettingBlockSenderRequest>;

export interface PatchSettingBlockSenderResponse {
  /** Blocked sender pattern identifier */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  isRegex?: boolean | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
  pattern?: string | null;
  /** Type of pattern matching. Note: UNKNOWN is deprecated and cannot be used when creating or updating policies, but may be returned for existing entries. */
  patternType?: "EMAIL" | "DOMAIN" | "IP" | "UNKNOWN" | (string & {}) | null;
}

export const PatchSettingBlockSenderResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      patternType: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["EMAIL", "DOMAIN", "IP", "UNKNOWN"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          isRegex: "is_regex",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
          pattern: "pattern",
          patternType: "pattern_type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchSettingBlockSenderResponse>;

export type PatchSettingBlockSenderError =
  | DefaultErrors
  | BlockSenderNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const patchSettingBlockSender: API.OperationMethod<
  PatchSettingBlockSenderRequest,
  PatchSettingBlockSenderResponse,
  PatchSettingBlockSenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingBlockSenderRequest,
  output: PatchSettingBlockSenderResponse,
  errors: [BlockSenderNotFound, EmailSecurityNotEntitled, Forbidden],
}));

export interface DeleteSettingBlockSenderRequest {
  patternId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteSettingBlockSenderRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      patternId: Schema.String.pipe(T.HttpPath("patternId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/email-security/settings/block_senders/{patternId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteSettingBlockSenderRequest>;

export interface DeleteSettingBlockSenderResponse {
  /** Blocked sender pattern identifier */
  id: string;
}

export const DeleteSettingBlockSenderResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteSettingBlockSenderResponse>;

export type DeleteSettingBlockSenderError =
  | DefaultErrors
  | BlockSenderNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const deleteSettingBlockSender: API.OperationMethod<
  DeleteSettingBlockSenderRequest,
  DeleteSettingBlockSenderResponse,
  DeleteSettingBlockSenderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingBlockSenderRequest,
  output: DeleteSettingBlockSenderResponse,
  errors: [BlockSenderNotFound, EmailSecurityNotEntitled, Forbidden],
}));

// =============================================================================
// SettingDomain
// =============================================================================

export interface GetSettingDomainRequest {
  domainId: string;
  /** Identifier. */
  accountId: string;
}

export const GetSettingDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      domainId: Schema.String.pipe(T.HttpPath("domainId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/domains/{domainId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetSettingDomainRequest>;

export interface GetSettingDomainResponse {
  /** Domain identifier */
  id?: string | null;
  allowedDeliveryModes?:
    | ("DIRECT" | "BCC" | "JOURNAL" | "API" | "RETRO_SCAN" | (string & {}))[]
    | null;
  authorization?: {
    authorized: boolean;
    timestamp: string;
    statusMessage?: string | null;
  } | null;
  createdAt?: string | null;
  dmarcStatus?: "none" | "good" | "invalid" | (string & {}) | null;
  domain?: string | null;
  dropDispositions?:
    | (
        | "MALICIOUS"
        | "MALICIOUS-BEC"
        | "SUSPICIOUS"
        | "SPOOF"
        | "SPAM"
        | "BULK"
        | "ENCRYPTED"
        | "EXTERNAL"
        | "UNKNOWN"
        | "NONE"
        | (string & {})
      )[]
    | null;
  emailsProcessed?: {
    timestamp: string;
    totalEmailsProcessed: number;
    totalEmailsProcessedPrevious: number;
  } | null;
  folder?: "AllItems" | "Inbox" | (string & {}) | null;
  inboxProvider?: "Microsoft" | "Google" | null;
  integrationId?: string | null;
  ipRestrictions?: string[] | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  lookbackHops?: number | null;
  modifiedAt?: string | null;
  o365TenantId?: string | null;
  regions?: ("GLOBAL" | "AU" | "DE" | "IN" | "US" | (string & {}))[] | null;
  requireTlsInbound?: boolean | null;
  requireTlsOutbound?: boolean | null;
  spfStatus?:
    | "none"
    | "good"
    | "neutral"
    | "open"
    | "invalid"
    | (string & {})
    | null;
  status?: "pending" | "active" | "failed" | "timeout" | (string & {}) | null;
  transport?: string | null;
}

export const GetSettingDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      allowedDeliveryModes: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "DIRECT",
                "BCC",
                "JOURNAL",
                "API",
                "RETRO_SCAN",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      authorization: Schema.optional(
        Schema.Union([
          Schema.Struct({
            authorized: Schema.Boolean,
            timestamp: Schema.String,
            statusMessage: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              authorized: "authorized",
              timestamp: "timestamp",
              statusMessage: "status_message",
            }),
          ),
          Schema.Null,
        ]),
      ),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dmarcStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "good", "invalid"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dropDispositions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "MALICIOUS",
                "MALICIOUS-BEC",
                "SUSPICIOUS",
                "SPOOF",
                "SPAM",
                "BULK",
                "ENCRYPTED",
                "EXTERNAL",
                "UNKNOWN",
                "NONE",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      emailsProcessed: Schema.optional(
        Schema.Union([
          Schema.Struct({
            timestamp: Schema.String,
            totalEmailsProcessed: Schema.Number,
            totalEmailsProcessedPrevious: Schema.Number,
          }).pipe(
            Schema.encodeKeys({
              timestamp: "timestamp",
              totalEmailsProcessed: "total_emails_processed",
              totalEmailsProcessedPrevious: "total_emails_processed_previous",
            }),
          ),
          Schema.Null,
        ]),
      ),
      folder: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["AllItems", "Inbox"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      inboxProvider: Schema.optional(
        Schema.Union([
          Schema.Literal("Microsoft"),
          Schema.Literal("Google"),
          Schema.Null,
        ]),
      ),
      integrationId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      ipRestrictions: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lookbackHops: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      o365TenantId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      regions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals(["GLOBAL", "AU", "DE", "IN", "US"]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      requireTlsInbound: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      requireTlsOutbound: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      spfStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "good", "neutral", "open", "invalid"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["pending", "active", "failed", "timeout"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      transport: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          allowedDeliveryModes: "allowed_delivery_modes",
          authorization: "authorization",
          createdAt: "created_at",
          dmarcStatus: "dmarc_status",
          domain: "domain",
          dropDispositions: "drop_dispositions",
          emailsProcessed: "emails_processed",
          folder: "folder",
          inboxProvider: "inbox_provider",
          integrationId: "integration_id",
          ipRestrictions: "ip_restrictions",
          lastModified: "last_modified",
          lookbackHops: "lookback_hops",
          modifiedAt: "modified_at",
          o365TenantId: "o365_tenant_id",
          regions: "regions",
          requireTlsInbound: "require_tls_inbound",
          requireTlsOutbound: "require_tls_outbound",
          spfStatus: "spf_status",
          status: "status",
          transport: "transport",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetSettingDomainResponse>;

export type GetSettingDomainError =
  | DefaultErrors
  | EmailSecurityDomainNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const getSettingDomain: API.OperationMethod<
  GetSettingDomainRequest,
  GetSettingDomainResponse,
  GetSettingDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingDomainRequest,
  output: GetSettingDomainResponse,
  errors: [EmailSecurityDomainNotFound, EmailSecurityNotEntitled, Forbidden],
}));

export interface ListSettingDomainsRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Currently active delivery mode to filter by. */
  activeDeliveryMode?:
    | "DIRECT"
    | "BCC"
    | "JOURNAL"
    | "API"
    | "RETRO_SCAN"
    | (string & {});
  /** Query param: Delivery mode to filter by. */
  allowedDeliveryMode?:
    | "DIRECT"
    | "BCC"
    | "JOURNAL"
    | "API"
    | "RETRO_SCAN"
    | (string & {});
  /** Query param: The sorting direction. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Domain names to filter by. */
  domain?: string[];
  /** Query param: Integration ID to filter by. */
  integrationId?: string;
  /** Query param: Field to sort by. */
  order?: "domain" | "created_at" | (string & {});
  /** Query param: Search term for filtering records. Behavior may change. */
  search?: string;
  /** Query param: Filters response to domains with the provided status. */
  status?: "pending" | "active" | "failed" | "timeout" | (string & {});
}

export const ListSettingDomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      activeDeliveryMode: Schema.optional(
        Schema.Union([
          Schema.Literals(["DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("active_delivery_mode")),
      allowedDeliveryMode: Schema.optional(
        Schema.Union([
          Schema.Literals(["DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("allowed_delivery_mode")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      domain: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("domain"),
      ),
      integrationId: Schema.optional(Schema.String).pipe(
        T.HttpQuery("integration_id"),
      ),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["domain", "created_at"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals(["pending", "active", "failed", "timeout"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/domains",
      }),
    ),
  ) as unknown as Schema.Schema<ListSettingDomainsRequest>;

export interface ListSettingDomainsResponse {
  result: {
    id?: string | null;
    allowedDeliveryModes?:
      | ("DIRECT" | "BCC" | "JOURNAL" | "API" | "RETRO_SCAN" | (string & {}))[]
      | null;
    authorization?: {
      authorized: boolean;
      timestamp: string;
      statusMessage?: string | null;
    } | null;
    createdAt?: string | null;
    dmarcStatus?: "none" | "good" | "invalid" | (string & {}) | null;
    domain?: string | null;
    dropDispositions?:
      | (
          | "MALICIOUS"
          | "MALICIOUS-BEC"
          | "SUSPICIOUS"
          | "SPOOF"
          | "SPAM"
          | "BULK"
          | "ENCRYPTED"
          | "EXTERNAL"
          | "UNKNOWN"
          | "NONE"
          | (string & {})
        )[]
      | null;
    emailsProcessed?: {
      timestamp: string;
      totalEmailsProcessed: number;
      totalEmailsProcessedPrevious: number;
    } | null;
    folder?: "AllItems" | "Inbox" | (string & {}) | null;
    inboxProvider?: "Microsoft" | "Google" | null;
    integrationId?: string | null;
    ipRestrictions?: string[] | null;
    lastModified?: string | null;
    lookbackHops?: number | null;
    modifiedAt?: string | null;
    o365TenantId?: string | null;
    regions?: ("GLOBAL" | "AU" | "DE" | "IN" | "US" | (string & {}))[] | null;
    requireTlsInbound?: boolean | null;
    requireTlsOutbound?: boolean | null;
    spfStatus?:
      | "none"
      | "good"
      | "neutral"
      | "open"
      | "invalid"
      | (string & {})
      | null;
    status?: "pending" | "active" | "failed" | "timeout" | (string & {}) | null;
    transport?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSettingDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          allowedDeliveryModes: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Union([
                  Schema.Literals([
                    "DIRECT",
                    "BCC",
                    "JOURNAL",
                    "API",
                    "RETRO_SCAN",
                  ]),
                  Schema.String,
                ]),
              ),
              Schema.Null,
            ]),
          ),
          authorization: Schema.optional(
            Schema.Union([
              Schema.Struct({
                authorized: Schema.Boolean,
                timestamp: Schema.String,
                statusMessage: Schema.optional(
                  Schema.Union([Schema.String, Schema.Null]),
                ),
              }).pipe(
                Schema.encodeKeys({
                  authorized: "authorized",
                  timestamp: "timestamp",
                  statusMessage: "status_message",
                }),
              ),
              Schema.Null,
            ]),
          ),
          createdAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          dmarcStatus: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["none", "good", "invalid"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          dropDispositions: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Union([
                  Schema.Literals([
                    "MALICIOUS",
                    "MALICIOUS-BEC",
                    "SUSPICIOUS",
                    "SPOOF",
                    "SPAM",
                    "BULK",
                    "ENCRYPTED",
                    "EXTERNAL",
                    "UNKNOWN",
                    "NONE",
                  ]),
                  Schema.String,
                ]),
              ),
              Schema.Null,
            ]),
          ),
          emailsProcessed: Schema.optional(
            Schema.Union([
              Schema.Struct({
                timestamp: Schema.String,
                totalEmailsProcessed: Schema.Number,
                totalEmailsProcessedPrevious: Schema.Number,
              }).pipe(
                Schema.encodeKeys({
                  timestamp: "timestamp",
                  totalEmailsProcessed: "total_emails_processed",
                  totalEmailsProcessedPrevious:
                    "total_emails_processed_previous",
                }),
              ),
              Schema.Null,
            ]),
          ),
          folder: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["AllItems", "Inbox"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          inboxProvider: Schema.optional(
            Schema.Union([
              Schema.Literal("Microsoft"),
              Schema.Literal("Google"),
              Schema.Null,
            ]),
          ),
          integrationId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          ipRestrictions: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          lastModified: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          lookbackHops: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          modifiedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          o365TenantId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          regions: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Union([
                  Schema.Literals(["GLOBAL", "AU", "DE", "IN", "US"]),
                  Schema.String,
                ]),
              ),
              Schema.Null,
            ]),
          ),
          requireTlsInbound: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          requireTlsOutbound: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          spfStatus: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["none", "good", "neutral", "open", "invalid"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          status: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["pending", "active", "failed", "timeout"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          transport: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            allowedDeliveryModes: "allowed_delivery_modes",
            authorization: "authorization",
            createdAt: "created_at",
            dmarcStatus: "dmarc_status",
            domain: "domain",
            dropDispositions: "drop_dispositions",
            emailsProcessed: "emails_processed",
            folder: "folder",
            inboxProvider: "inbox_provider",
            integrationId: "integration_id",
            ipRestrictions: "ip_restrictions",
            lastModified: "last_modified",
            lookbackHops: "lookback_hops",
            modifiedAt: "modified_at",
            o365TenantId: "o365_tenant_id",
            regions: "regions",
            requireTlsInbound: "require_tls_inbound",
            requireTlsOutbound: "require_tls_outbound",
            spfStatus: "spf_status",
            status: "status",
            transport: "transport",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListSettingDomainsResponse>;

export type ListSettingDomainsError =
  | DefaultErrors
  | EmailSecurityNotEntitled
  | Forbidden;

export const listSettingDomains: API.PaginatedOperationMethod<
  ListSettingDomainsRequest,
  ListSettingDomainsResponse,
  ListSettingDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingDomainsRequest,
  output: ListSettingDomainsResponse,
  errors: [EmailSecurityNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface PatchSettingDomainRequest {
  domainId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  allowedDeliveryModes?: (
    | "DIRECT"
    | "BCC"
    | "JOURNAL"
    | "API"
    | "RETRO_SCAN"
    | (string & {})
  )[];
  /** Body param */
  domain?: string;
  /** Body param */
  dropDispositions?: (
    | "MALICIOUS"
    | "MALICIOUS-BEC"
    | "SUSPICIOUS"
    | "SPOOF"
    | "SPAM"
    | "BULK"
    | "ENCRYPTED"
    | "EXTERNAL"
    | "UNKNOWN"
    | "NONE"
    | (string & {})
  )[];
  /** Body param */
  folder?: "AllItems" | "Inbox" | (string & {});
  /** Body param */
  integrationId?: string | null;
  /** Body param */
  ipRestrictions?: string[];
  /** Body param */
  lookbackHops?: number;
  /** Body param */
  regions?: ("GLOBAL" | "AU" | "DE" | "IN" | "US" | (string & {}))[];
  /** Body param */
  requireTlsInbound?: boolean;
  /** Body param */
  requireTlsOutbound?: boolean;
  /** Body param */
  transport?: string;
}

export const PatchSettingDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      domainId: Schema.String.pipe(T.HttpPath("domainId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      allowedDeliveryModes: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["DIRECT", "BCC", "JOURNAL", "API", "RETRO_SCAN"]),
            Schema.String,
          ]),
        ),
      ),
      domain: Schema.optional(Schema.String),
      dropDispositions: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "MALICIOUS",
              "MALICIOUS-BEC",
              "SUSPICIOUS",
              "SPOOF",
              "SPAM",
              "BULK",
              "ENCRYPTED",
              "EXTERNAL",
              "UNKNOWN",
              "NONE",
            ]),
            Schema.String,
          ]),
        ),
      ),
      folder: Schema.optional(
        Schema.Union([Schema.Literals(["AllItems", "Inbox"]), Schema.String]),
      ),
      integrationId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      ipRestrictions: Schema.optional(Schema.Array(Schema.String)),
      lookbackHops: Schema.optional(Schema.Number),
      regions: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["GLOBAL", "AU", "DE", "IN", "US"]),
            Schema.String,
          ]),
        ),
      ),
      requireTlsInbound: Schema.optional(Schema.Boolean),
      requireTlsOutbound: Schema.optional(Schema.Boolean),
      transport: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        allowedDeliveryModes: "allowed_delivery_modes",
        domain: "domain",
        dropDispositions: "drop_dispositions",
        folder: "folder",
        integrationId: "integration_id",
        ipRestrictions: "ip_restrictions",
        lookbackHops: "lookback_hops",
        regions: "regions",
        requireTlsInbound: "require_tls_inbound",
        requireTlsOutbound: "require_tls_outbound",
        transport: "transport",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/email-security/settings/domains/{domainId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchSettingDomainRequest>;

export interface PatchSettingDomainResponse {
  /** Domain identifier */
  id?: string | null;
  allowedDeliveryModes?:
    | ("DIRECT" | "BCC" | "JOURNAL" | "API" | "RETRO_SCAN" | (string & {}))[]
    | null;
  authorization?: {
    authorized: boolean;
    timestamp: string;
    statusMessage?: string | null;
  } | null;
  createdAt?: string | null;
  dmarcStatus?: "none" | "good" | "invalid" | (string & {}) | null;
  domain?: string | null;
  dropDispositions?:
    | (
        | "MALICIOUS"
        | "MALICIOUS-BEC"
        | "SUSPICIOUS"
        | "SPOOF"
        | "SPAM"
        | "BULK"
        | "ENCRYPTED"
        | "EXTERNAL"
        | "UNKNOWN"
        | "NONE"
        | (string & {})
      )[]
    | null;
  emailsProcessed?: {
    timestamp: string;
    totalEmailsProcessed: number;
    totalEmailsProcessedPrevious: number;
  } | null;
  folder?: "AllItems" | "Inbox" | (string & {}) | null;
  inboxProvider?: "Microsoft" | "Google" | null;
  integrationId?: string | null;
  ipRestrictions?: string[] | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  lookbackHops?: number | null;
  modifiedAt?: string | null;
  o365TenantId?: string | null;
  regions?: ("GLOBAL" | "AU" | "DE" | "IN" | "US" | (string & {}))[] | null;
  requireTlsInbound?: boolean | null;
  requireTlsOutbound?: boolean | null;
  spfStatus?:
    | "none"
    | "good"
    | "neutral"
    | "open"
    | "invalid"
    | (string & {})
    | null;
  status?: "pending" | "active" | "failed" | "timeout" | (string & {}) | null;
  transport?: string | null;
}

export const PatchSettingDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      allowedDeliveryModes: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "DIRECT",
                "BCC",
                "JOURNAL",
                "API",
                "RETRO_SCAN",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      authorization: Schema.optional(
        Schema.Union([
          Schema.Struct({
            authorized: Schema.Boolean,
            timestamp: Schema.String,
            statusMessage: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              authorized: "authorized",
              timestamp: "timestamp",
              statusMessage: "status_message",
            }),
          ),
          Schema.Null,
        ]),
      ),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dmarcStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "good", "invalid"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dropDispositions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals([
                "MALICIOUS",
                "MALICIOUS-BEC",
                "SUSPICIOUS",
                "SPOOF",
                "SPAM",
                "BULK",
                "ENCRYPTED",
                "EXTERNAL",
                "UNKNOWN",
                "NONE",
              ]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      emailsProcessed: Schema.optional(
        Schema.Union([
          Schema.Struct({
            timestamp: Schema.String,
            totalEmailsProcessed: Schema.Number,
            totalEmailsProcessedPrevious: Schema.Number,
          }).pipe(
            Schema.encodeKeys({
              timestamp: "timestamp",
              totalEmailsProcessed: "total_emails_processed",
              totalEmailsProcessedPrevious: "total_emails_processed_previous",
            }),
          ),
          Schema.Null,
        ]),
      ),
      folder: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["AllItems", "Inbox"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      inboxProvider: Schema.optional(
        Schema.Union([
          Schema.Literal("Microsoft"),
          Schema.Literal("Google"),
          Schema.Null,
        ]),
      ),
      integrationId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      ipRestrictions: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lookbackHops: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      o365TenantId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      regions: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Schema.Literals(["GLOBAL", "AU", "DE", "IN", "US"]),
              Schema.String,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      requireTlsInbound: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      requireTlsOutbound: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      spfStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["none", "good", "neutral", "open", "invalid"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["pending", "active", "failed", "timeout"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      transport: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          allowedDeliveryModes: "allowed_delivery_modes",
          authorization: "authorization",
          createdAt: "created_at",
          dmarcStatus: "dmarc_status",
          domain: "domain",
          dropDispositions: "drop_dispositions",
          emailsProcessed: "emails_processed",
          folder: "folder",
          inboxProvider: "inbox_provider",
          integrationId: "integration_id",
          ipRestrictions: "ip_restrictions",
          lastModified: "last_modified",
          lookbackHops: "lookback_hops",
          modifiedAt: "modified_at",
          o365TenantId: "o365_tenant_id",
          regions: "regions",
          requireTlsInbound: "require_tls_inbound",
          requireTlsOutbound: "require_tls_outbound",
          spfStatus: "spf_status",
          status: "status",
          transport: "transport",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchSettingDomainResponse>;

export type PatchSettingDomainError =
  | DefaultErrors
  | EmailSecurityDomainNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const patchSettingDomain: API.OperationMethod<
  PatchSettingDomainRequest,
  PatchSettingDomainResponse,
  PatchSettingDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingDomainRequest,
  output: PatchSettingDomainResponse,
  errors: [EmailSecurityDomainNotFound, EmailSecurityNotEntitled, Forbidden],
}));

export interface DeleteSettingDomainRequest {
  domainId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteSettingDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      domainId: Schema.String.pipe(T.HttpPath("domainId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/email-security/settings/domains/{domainId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteSettingDomainRequest>;

export interface DeleteSettingDomainResponse {
  /** Domain identifier */
  id: string;
}

export const DeleteSettingDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteSettingDomainResponse>;

export type DeleteSettingDomainError =
  | DefaultErrors
  | EmailSecurityDomainNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const deleteSettingDomain: API.OperationMethod<
  DeleteSettingDomainRequest,
  DeleteSettingDomainResponse,
  DeleteSettingDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingDomainRequest,
  output: DeleteSettingDomainResponse,
  errors: [EmailSecurityDomainNotFound, EmailSecurityNotEntitled, Forbidden],
}));

// =============================================================================
// SettingImpersonationRegistry
// =============================================================================

export interface GetSettingImpersonationRegistryRequest {
  impersonationRegistryId: string;
  /** Identifier. */
  accountId: string;
}

export const GetSettingImpersonationRegistryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      impersonationRegistryId: Schema.String.pipe(
        T.HttpPath("impersonationRegistryId"),
      ),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/impersonation_registry/{impersonationRegistryId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetSettingImpersonationRegistryRequest>;

export interface GetSettingImpersonationRegistryResponse {
  /** Impersonation registry entry identifier */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  directoryId?: number | null;
  directoryNodeId?: number | null;
  email?: string | null;
  /** @deprecated */
  externalDirectoryNodeId?: string | null;
  isEmailRegex?: boolean | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
  name?: string | null;
  provenance?:
    | "A1S_INTERNAL"
    | "SNOOPY-CASB_OFFICE_365"
    | "SNOOPY-OFFICE_365"
    | "SNOOPY-GOOGLE_DIRECTORY"
    | (string & {})
    | null;
}

export const GetSettingImpersonationRegistryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      directoryId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      directoryNodeId: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      externalDirectoryNodeId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      isEmailRegex: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      provenance: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "A1S_INTERNAL",
              "SNOOPY-CASB_OFFICE_365",
              "SNOOPY-OFFICE_365",
              "SNOOPY-GOOGLE_DIRECTORY",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          directoryId: "directory_id",
          directoryNodeId: "directory_node_id",
          email: "email",
          externalDirectoryNodeId: "external_directory_node_id",
          isEmailRegex: "is_email_regex",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
          name: "name",
          provenance: "provenance",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetSettingImpersonationRegistryResponse>;

export type GetSettingImpersonationRegistryError =
  | DefaultErrors
  | ImpersonationRegistryEntryNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const getSettingImpersonationRegistry: API.OperationMethod<
  GetSettingImpersonationRegistryRequest,
  GetSettingImpersonationRegistryResponse,
  GetSettingImpersonationRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingImpersonationRegistryRequest,
  output: GetSettingImpersonationRegistryResponse,
  errors: [
    ImpersonationRegistryEntryNotFound,
    EmailSecurityNotEntitled,
    Forbidden,
  ],
}));

export interface ListSettingImpersonationRegistriesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The sorting direction. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Field to sort by. */
  order?: "name" | "email" | "created_at" | (string & {});
  /** Query param */
  provenance?:
    | "A1S_INTERNAL"
    | "SNOOPY-CASB_OFFICE_365"
    | "SNOOPY-OFFICE_365"
    | "SNOOPY-GOOGLE_DIRECTORY"
    | (string & {});
  /** Query param: Search term for filtering records. Behavior may change. */
  search?: string;
}

export const ListSettingImpersonationRegistriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["name", "email", "created_at"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      provenance: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "A1S_INTERNAL",
            "SNOOPY-CASB_OFFICE_365",
            "SNOOPY-OFFICE_365",
            "SNOOPY-GOOGLE_DIRECTORY",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("provenance")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/impersonation_registry",
      }),
    ),
  ) as unknown as Schema.Schema<ListSettingImpersonationRegistriesRequest>;

export interface ListSettingImpersonationRegistriesResponse {
  result: {
    id?: string | null;
    comments?: string | null;
    createdAt?: string | null;
    directoryId?: number | null;
    directoryNodeId?: number | null;
    email?: string | null;
    externalDirectoryNodeId?: string | null;
    isEmailRegex?: boolean | null;
    lastModified?: string | null;
    modifiedAt?: string | null;
    name?: string | null;
    provenance?:
      | "A1S_INTERNAL"
      | "SNOOPY-CASB_OFFICE_365"
      | "SNOOPY-OFFICE_365"
      | "SNOOPY-GOOGLE_DIRECTORY"
      | (string & {})
      | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSettingImpersonationRegistriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          createdAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          directoryId: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          directoryNodeId: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          externalDirectoryNodeId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          isEmailRegex: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          lastModified: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          modifiedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          provenance: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals([
                  "A1S_INTERNAL",
                  "SNOOPY-CASB_OFFICE_365",
                  "SNOOPY-OFFICE_365",
                  "SNOOPY-GOOGLE_DIRECTORY",
                ]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            comments: "comments",
            createdAt: "created_at",
            directoryId: "directory_id",
            directoryNodeId: "directory_node_id",
            email: "email",
            externalDirectoryNodeId: "external_directory_node_id",
            isEmailRegex: "is_email_regex",
            lastModified: "last_modified",
            modifiedAt: "modified_at",
            name: "name",
            provenance: "provenance",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListSettingImpersonationRegistriesResponse>;

export type ListSettingImpersonationRegistriesError =
  | DefaultErrors
  | EmailSecurityNotEntitled
  | Forbidden;

export const listSettingImpersonationRegistries: API.PaginatedOperationMethod<
  ListSettingImpersonationRegistriesRequest,
  ListSettingImpersonationRegistriesResponse,
  ListSettingImpersonationRegistriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingImpersonationRegistriesRequest,
  output: ListSettingImpersonationRegistriesResponse,
  errors: [EmailSecurityNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateSettingImpersonationRegistryRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  email: string;
  /** Body param */
  isEmailRegex: boolean;
  /** Body param */
  name: string;
  /** Body param */
  comments?: string | null;
  /** Body param */
  directoryId?: number | null;
  /** Body param */
  directoryNodeId?: number | null;
  /** @deprecated Body param */
  externalDirectoryNodeId?: string | null;
  /** Body param */
  provenance?:
    | "A1S_INTERNAL"
    | "SNOOPY-CASB_OFFICE_365"
    | "SNOOPY-OFFICE_365"
    | "SNOOPY-GOOGLE_DIRECTORY"
    | (string & {});
}

export const CreateSettingImpersonationRegistryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      email: Schema.String,
      isEmailRegex: Schema.Boolean,
      name: Schema.String,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      directoryId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      directoryNodeId: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      externalDirectoryNodeId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      provenance: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "A1S_INTERNAL",
            "SNOOPY-CASB_OFFICE_365",
            "SNOOPY-OFFICE_365",
            "SNOOPY-GOOGLE_DIRECTORY",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        email: "email",
        isEmailRegex: "is_email_regex",
        name: "name",
        comments: "comments",
        directoryId: "directory_id",
        directoryNodeId: "directory_node_id",
        externalDirectoryNodeId: "external_directory_node_id",
        provenance: "provenance",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/settings/impersonation_registry",
      }),
    ),
  ) as unknown as Schema.Schema<CreateSettingImpersonationRegistryRequest>;

export interface CreateSettingImpersonationRegistryResponse {
  /** Impersonation registry entry identifier */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  directoryId?: number | null;
  directoryNodeId?: number | null;
  email?: string | null;
  /** @deprecated */
  externalDirectoryNodeId?: string | null;
  isEmailRegex?: boolean | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
  name?: string | null;
  provenance?:
    | "A1S_INTERNAL"
    | "SNOOPY-CASB_OFFICE_365"
    | "SNOOPY-OFFICE_365"
    | "SNOOPY-GOOGLE_DIRECTORY"
    | (string & {})
    | null;
}

export const CreateSettingImpersonationRegistryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      directoryId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      directoryNodeId: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      externalDirectoryNodeId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      isEmailRegex: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      provenance: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "A1S_INTERNAL",
              "SNOOPY-CASB_OFFICE_365",
              "SNOOPY-OFFICE_365",
              "SNOOPY-GOOGLE_DIRECTORY",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          directoryId: "directory_id",
          directoryNodeId: "directory_node_id",
          email: "email",
          externalDirectoryNodeId: "external_directory_node_id",
          isEmailRegex: "is_email_regex",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
          name: "name",
          provenance: "provenance",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateSettingImpersonationRegistryResponse>;

export type CreateSettingImpersonationRegistryError =
  | DefaultErrors
  | EmailSecurityNotEntitled
  | Forbidden;

export const createSettingImpersonationRegistry: API.OperationMethod<
  CreateSettingImpersonationRegistryRequest,
  CreateSettingImpersonationRegistryResponse,
  CreateSettingImpersonationRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSettingImpersonationRegistryRequest,
  output: CreateSettingImpersonationRegistryResponse,
  errors: [EmailSecurityNotEntitled, Forbidden],
}));

export interface PatchSettingImpersonationRegistryRequest {
  impersonationRegistryId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  comments?: string | null;
  /** Body param */
  directoryId?: number | null;
  /** Body param */
  directoryNodeId?: number | null;
  /** Body param */
  email?: string;
  /** @deprecated Body param */
  externalDirectoryNodeId?: string | null;
  /** Body param */
  isEmailRegex?: boolean;
  /** Body param */
  name?: string;
  /** Body param */
  provenance?:
    | "A1S_INTERNAL"
    | "SNOOPY-CASB_OFFICE_365"
    | "SNOOPY-OFFICE_365"
    | "SNOOPY-GOOGLE_DIRECTORY"
    | (string & {});
}

export const PatchSettingImpersonationRegistryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      impersonationRegistryId: Schema.String.pipe(
        T.HttpPath("impersonationRegistryId"),
      ),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      directoryId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      directoryNodeId: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      email: Schema.optional(Schema.String),
      externalDirectoryNodeId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      isEmailRegex: Schema.optional(Schema.Boolean),
      name: Schema.optional(Schema.String),
      provenance: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "A1S_INTERNAL",
            "SNOOPY-CASB_OFFICE_365",
            "SNOOPY-OFFICE_365",
            "SNOOPY-GOOGLE_DIRECTORY",
          ]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        comments: "comments",
        directoryId: "directory_id",
        directoryNodeId: "directory_node_id",
        email: "email",
        externalDirectoryNodeId: "external_directory_node_id",
        isEmailRegex: "is_email_regex",
        name: "name",
        provenance: "provenance",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/email-security/settings/impersonation_registry/{impersonationRegistryId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchSettingImpersonationRegistryRequest>;

export interface PatchSettingImpersonationRegistryResponse {
  /** Impersonation registry entry identifier */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  directoryId?: number | null;
  directoryNodeId?: number | null;
  email?: string | null;
  /** @deprecated */
  externalDirectoryNodeId?: string | null;
  isEmailRegex?: boolean | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
  name?: string | null;
  provenance?:
    | "A1S_INTERNAL"
    | "SNOOPY-CASB_OFFICE_365"
    | "SNOOPY-OFFICE_365"
    | "SNOOPY-GOOGLE_DIRECTORY"
    | (string & {})
    | null;
}

export const PatchSettingImpersonationRegistryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      directoryId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      directoryNodeId: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      externalDirectoryNodeId: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      isEmailRegex: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      provenance: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "A1S_INTERNAL",
              "SNOOPY-CASB_OFFICE_365",
              "SNOOPY-OFFICE_365",
              "SNOOPY-GOOGLE_DIRECTORY",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          directoryId: "directory_id",
          directoryNodeId: "directory_node_id",
          email: "email",
          externalDirectoryNodeId: "external_directory_node_id",
          isEmailRegex: "is_email_regex",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
          name: "name",
          provenance: "provenance",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchSettingImpersonationRegistryResponse>;

export type PatchSettingImpersonationRegistryError =
  | DefaultErrors
  | ImpersonationRegistryEntryNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const patchSettingImpersonationRegistry: API.OperationMethod<
  PatchSettingImpersonationRegistryRequest,
  PatchSettingImpersonationRegistryResponse,
  PatchSettingImpersonationRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingImpersonationRegistryRequest,
  output: PatchSettingImpersonationRegistryResponse,
  errors: [
    ImpersonationRegistryEntryNotFound,
    EmailSecurityNotEntitled,
    Forbidden,
  ],
}));

export interface DeleteSettingImpersonationRegistryRequest {
  impersonationRegistryId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteSettingImpersonationRegistryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      impersonationRegistryId: Schema.String.pipe(
        T.HttpPath("impersonationRegistryId"),
      ),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/email-security/settings/impersonation_registry/{impersonationRegistryId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteSettingImpersonationRegistryRequest>;

export interface DeleteSettingImpersonationRegistryResponse {
  /** Impersonation registry entry identifier */
  id: string;
}

export const DeleteSettingImpersonationRegistryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteSettingImpersonationRegistryResponse>;

export type DeleteSettingImpersonationRegistryError =
  | DefaultErrors
  | ImpersonationRegistryEntryNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const deleteSettingImpersonationRegistry: API.OperationMethod<
  DeleteSettingImpersonationRegistryRequest,
  DeleteSettingImpersonationRegistryResponse,
  DeleteSettingImpersonationRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingImpersonationRegistryRequest,
  output: DeleteSettingImpersonationRegistryResponse,
  errors: [
    ImpersonationRegistryEntryNotFound,
    EmailSecurityNotEntitled,
    Forbidden,
  ],
}));

// =============================================================================
// SettingSendingDomainRestriction
// =============================================================================

export interface GetSettingSendingDomainRestrictionRequest {
  sendingDomainRestrictionId: string;
  /** Identifier. */
  accountId: string;
}

export const GetSettingSendingDomainRestrictionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sendingDomainRestrictionId: Schema.String.pipe(
        T.HttpPath("sendingDomainRestrictionId"),
      ),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/sending_domain_restrictions/{sendingDomainRestrictionId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetSettingSendingDomainRestrictionRequest>;

export interface GetSettingSendingDomainRestrictionResponse {
  /** Sending domain restriction identifier. */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  /** Domain that requires TLS enforcement. */
  domain?: string | null;
  /** Excluded subdomains that are exempt from TLS requirements. */
  exclude?: string[] | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
}

export const GetSettingSendingDomainRestrictionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      exclude: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          domain: "domain",
          exclude: "exclude",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetSettingSendingDomainRestrictionResponse>;

export type GetSettingSendingDomainRestrictionError = DefaultErrors;

export const getSettingSendingDomainRestriction: API.OperationMethod<
  GetSettingSendingDomainRestrictionRequest,
  GetSettingSendingDomainRestrictionResponse,
  GetSettingSendingDomainRestrictionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingSendingDomainRestrictionRequest,
  output: GetSettingSendingDomainRestrictionResponse,
  errors: [],
}));

export interface ListSettingSendingDomainRestrictionsRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The sorting direction. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Field to sort by. */
  order?: "domain" | "created_at" | (string & {});
  /** Query param: Search term for filtering records. Behavior may change. */
  search?: string;
}

export const ListSettingSendingDomainRestrictionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["domain", "created_at"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/sending_domain_restrictions",
      }),
    ),
  ) as unknown as Schema.Schema<ListSettingSendingDomainRestrictionsRequest>;

export interface ListSettingSendingDomainRestrictionsResponse {
  result: {
    id?: string | null;
    comments?: string | null;
    createdAt?: string | null;
    domain?: string | null;
    exclude?: string[] | null;
    lastModified?: string | null;
    modifiedAt?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSettingSendingDomainRestrictionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          createdAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          exclude: Schema.optional(
            Schema.Union([Schema.Array(Schema.String), Schema.Null]),
          ),
          lastModified: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          modifiedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            comments: "comments",
            createdAt: "created_at",
            domain: "domain",
            exclude: "exclude",
            lastModified: "last_modified",
            modifiedAt: "modified_at",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListSettingSendingDomainRestrictionsResponse>;

export type ListSettingSendingDomainRestrictionsError = DefaultErrors;

export const listSettingSendingDomainRestrictions: API.PaginatedOperationMethod<
  ListSettingSendingDomainRestrictionsRequest,
  ListSettingSendingDomainRestrictionsResponse,
  ListSettingSendingDomainRestrictionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingSendingDomainRestrictionsRequest,
  output: ListSettingSendingDomainRestrictionsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateSettingSendingDomainRestrictionRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Domain that requires TLS enforcement. */
  domain: string;
  /** Body param: Excluded subdomains that are exempt from TLS requirements. */
  exclude: string[];
  /** Body param */
  comments?: string | null;
}

export const CreateSettingSendingDomainRestrictionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      domain: Schema.String,
      exclude: Schema.Array(Schema.String),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/settings/sending_domain_restrictions",
      }),
    ),
  ) as unknown as Schema.Schema<CreateSettingSendingDomainRestrictionRequest>;

export interface CreateSettingSendingDomainRestrictionResponse {
  /** Sending domain restriction identifier. */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  /** Domain that requires TLS enforcement. */
  domain?: string | null;
  /** Excluded subdomains that are exempt from TLS requirements. */
  exclude?: string[] | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
}

export const CreateSettingSendingDomainRestrictionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      exclude: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          domain: "domain",
          exclude: "exclude",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateSettingSendingDomainRestrictionResponse>;

export type CreateSettingSendingDomainRestrictionError = DefaultErrors;

export const createSettingSendingDomainRestriction: API.OperationMethod<
  CreateSettingSendingDomainRestrictionRequest,
  CreateSettingSendingDomainRestrictionResponse,
  CreateSettingSendingDomainRestrictionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSettingSendingDomainRestrictionRequest,
  output: CreateSettingSendingDomainRestrictionResponse,
  errors: [],
}));

export interface PatchSettingSendingDomainRestrictionRequest {
  sendingDomainRestrictionId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  comments?: string | null;
  /** Body param: Domain that requires TLS enforcement. */
  domain?: string;
  /** Body param: Excluded subdomains that are exempt from TLS requirements. */
  exclude?: string[];
}

export const PatchSettingSendingDomainRestrictionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sendingDomainRestrictionId: Schema.String.pipe(
        T.HttpPath("sendingDomainRestrictionId"),
      ),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      domain: Schema.optional(Schema.String),
      exclude: Schema.optional(Schema.Array(Schema.String)),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/email-security/settings/sending_domain_restrictions/{sendingDomainRestrictionId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchSettingSendingDomainRestrictionRequest>;

export interface PatchSettingSendingDomainRestrictionResponse {
  /** Sending domain restriction identifier. */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  /** Domain that requires TLS enforcement. */
  domain?: string | null;
  /** Excluded subdomains that are exempt from TLS requirements. */
  exclude?: string[] | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
}

export const PatchSettingSendingDomainRestrictionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      exclude: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          domain: "domain",
          exclude: "exclude",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchSettingSendingDomainRestrictionResponse>;

export type PatchSettingSendingDomainRestrictionError = DefaultErrors;

export const patchSettingSendingDomainRestriction: API.OperationMethod<
  PatchSettingSendingDomainRestrictionRequest,
  PatchSettingSendingDomainRestrictionResponse,
  PatchSettingSendingDomainRestrictionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingSendingDomainRestrictionRequest,
  output: PatchSettingSendingDomainRestrictionResponse,
  errors: [],
}));

export interface DeleteSettingSendingDomainRestrictionRequest {
  sendingDomainRestrictionId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteSettingSendingDomainRestrictionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      sendingDomainRestrictionId: Schema.String.pipe(
        T.HttpPath("sendingDomainRestrictionId"),
      ),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/email-security/settings/sending_domain_restrictions/{sendingDomainRestrictionId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteSettingSendingDomainRestrictionRequest>;

export interface DeleteSettingSendingDomainRestrictionResponse {
  /** Sending domain restriction identifier. */
  id: string;
}

export const DeleteSettingSendingDomainRestrictionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteSettingSendingDomainRestrictionResponse>;

export type DeleteSettingSendingDomainRestrictionError = DefaultErrors;

export const deleteSettingSendingDomainRestriction: API.OperationMethod<
  DeleteSettingSendingDomainRestrictionRequest,
  DeleteSettingSendingDomainRestrictionResponse,
  DeleteSettingSendingDomainRestrictionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingSendingDomainRestrictionRequest,
  output: DeleteSettingSendingDomainRestrictionResponse,
  errors: [],
}));

// =============================================================================
// SettingTrustedDomain
// =============================================================================

export interface GetSettingTrustedDomainRequest {
  trustedDomainId: string;
  /** Identifier. */
  accountId: string;
}

export const GetSettingTrustedDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      trustedDomainId: Schema.String.pipe(T.HttpPath("trustedDomainId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/trusted_domains/{trustedDomainId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetSettingTrustedDomainRequest>;

export interface GetSettingTrustedDomainResponse {
  /** Trusted domain identifier */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  /** Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. */
  isRecent?: boolean | null;
  isRegex?: boolean | null;
  /** Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a Spoof disposition. */
  isSimilarity?: boolean | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
  pattern?: string | null;
}

export const GetSettingTrustedDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isRecent: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isSimilarity: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          isRecent: "is_recent",
          isRegex: "is_regex",
          isSimilarity: "is_similarity",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
          pattern: "pattern",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetSettingTrustedDomainResponse>;

export type GetSettingTrustedDomainError =
  | DefaultErrors
  | TrustedDomainNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const getSettingTrustedDomain: API.OperationMethod<
  GetSettingTrustedDomainRequest,
  GetSettingTrustedDomainResponse,
  GetSettingTrustedDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingTrustedDomainRequest,
  output: GetSettingTrustedDomainResponse,
  errors: [TrustedDomainNotFound, EmailSecurityNotEntitled, Forbidden],
}));

export interface ListSettingTrustedDomainsRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The sorting direction. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Filter to show only recently registered domains that are trusted to prevent triggering Suspicious or Malicious dispositions. */
  isRecent?: boolean;
  /** Query param: Filter to show only proximity domains (partner or approved domains with similar spelling to connected domains) that prevent Spoof dispositions. */
  isSimilarity?: boolean;
  /** Query param: Field to sort by. */
  order?: "pattern" | "created_at" | (string & {});
  /** Query param */
  pattern?: string;
  /** Query param: Search term for filtering records. Behavior may change. */
  search?: string;
}

export const ListSettingTrustedDomainsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      isRecent: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("is_recent")),
      isSimilarity: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("is_similarity"),
      ),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["pattern", "created_at"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      pattern: Schema.optional(Schema.String).pipe(T.HttpQuery("pattern")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/trusted_domains",
      }),
    ),
  ) as unknown as Schema.Schema<ListSettingTrustedDomainsRequest>;

export interface ListSettingTrustedDomainsResponse {
  result: {
    id?: string | null;
    comments?: string | null;
    createdAt?: string | null;
    isRecent?: boolean | null;
    isRegex?: boolean | null;
    isSimilarity?: boolean | null;
    lastModified?: string | null;
    modifiedAt?: string | null;
    pattern?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSettingTrustedDomainsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          createdAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          isRecent: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
          isSimilarity: Schema.optional(
            Schema.Union([Schema.Boolean, Schema.Null]),
          ),
          lastModified: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          modifiedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            comments: "comments",
            createdAt: "created_at",
            isRecent: "is_recent",
            isRegex: "is_regex",
            isSimilarity: "is_similarity",
            lastModified: "last_modified",
            modifiedAt: "modified_at",
            pattern: "pattern",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListSettingTrustedDomainsResponse>;

export type ListSettingTrustedDomainsError =
  | DefaultErrors
  | EmailSecurityNotEntitled
  | Forbidden;

export const listSettingTrustedDomains: API.PaginatedOperationMethod<
  ListSettingTrustedDomainsRequest,
  ListSettingTrustedDomainsResponse,
  ListSettingTrustedDomainsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingTrustedDomainsRequest,
  output: ListSettingTrustedDomainsResponse,
  errors: [EmailSecurityNotEntitled, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateSettingTrustedDomainRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. */
  isRecent: boolean;
  /** Body param */
  isRegex: boolean;
  /** Body param: Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a Spoof disposition. */
  isSimilarity: boolean;
  /** Body param */
  pattern: string;
  /** Body param */
  comments?: string | null;
}

export const CreateSettingTrustedDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      isRecent: Schema.Boolean,
      isRegex: Schema.Boolean,
      isSimilarity: Schema.Boolean,
      pattern: Schema.String,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        isRecent: "is_recent",
        isRegex: "is_regex",
        isSimilarity: "is_similarity",
        pattern: "pattern",
        comments: "comments",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/settings/trusted_domains",
      }),
    ),
  ) as unknown as Schema.Schema<CreateSettingTrustedDomainRequest>;

export interface CreateSettingTrustedDomainResponse {
  /** Trusted domain identifier */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  /** Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. */
  isRecent?: boolean | null;
  isRegex?: boolean | null;
  /** Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a Spoof disposition. */
  isSimilarity?: boolean | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
  pattern?: string | null;
}

export const CreateSettingTrustedDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isRecent: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isSimilarity: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          isRecent: "is_recent",
          isRegex: "is_regex",
          isSimilarity: "is_similarity",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
          pattern: "pattern",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateSettingTrustedDomainResponse>;

export type CreateSettingTrustedDomainError =
  | DefaultErrors
  | EmailSecurityNotEntitled
  | Forbidden;

export const createSettingTrustedDomain: API.OperationMethod<
  CreateSettingTrustedDomainRequest,
  CreateSettingTrustedDomainResponse,
  CreateSettingTrustedDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSettingTrustedDomainRequest,
  output: CreateSettingTrustedDomainResponse,
  errors: [EmailSecurityNotEntitled, Forbidden],
}));

export interface PatchSettingTrustedDomainRequest {
  trustedDomainId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  comments?: string | null;
  /** Body param: Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. */
  isRecent?: boolean;
  /** Body param */
  isRegex?: boolean;
  /** Body param: Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a Spoof disposition. */
  isSimilarity?: boolean;
  /** Body param */
  pattern?: string;
}

export const PatchSettingTrustedDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      trustedDomainId: Schema.String.pipe(T.HttpPath("trustedDomainId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isRecent: Schema.optional(Schema.Boolean),
      isRegex: Schema.optional(Schema.Boolean),
      isSimilarity: Schema.optional(Schema.Boolean),
      pattern: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        comments: "comments",
        isRecent: "is_recent",
        isRegex: "is_regex",
        isSimilarity: "is_similarity",
        pattern: "pattern",
      }),
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/email-security/settings/trusted_domains/{trustedDomainId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchSettingTrustedDomainRequest>;

export interface PatchSettingTrustedDomainResponse {
  /** Trusted domain identifier */
  id?: string | null;
  comments?: string | null;
  createdAt?: string | null;
  /** Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. */
  isRecent?: boolean | null;
  isRegex?: boolean | null;
  /** Select for partner or other approved domains that have similar spelling to your connected domains. Prevents listed domains from triggering a Spoof disposition. */
  isSimilarity?: boolean | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
  pattern?: string | null;
}

export const PatchSettingTrustedDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isRecent: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isRegex: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      isSimilarity: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          comments: "comments",
          createdAt: "created_at",
          isRecent: "is_recent",
          isRegex: "is_regex",
          isSimilarity: "is_similarity",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
          pattern: "pattern",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchSettingTrustedDomainResponse>;

export type PatchSettingTrustedDomainError =
  | DefaultErrors
  | TrustedDomainNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const patchSettingTrustedDomain: API.OperationMethod<
  PatchSettingTrustedDomainRequest,
  PatchSettingTrustedDomainResponse,
  PatchSettingTrustedDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingTrustedDomainRequest,
  output: PatchSettingTrustedDomainResponse,
  errors: [TrustedDomainNotFound, EmailSecurityNotEntitled, Forbidden],
}));

export interface DeleteSettingTrustedDomainRequest {
  trustedDomainId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteSettingTrustedDomainRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      trustedDomainId: Schema.String.pipe(T.HttpPath("trustedDomainId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/email-security/settings/trusted_domains/{trustedDomainId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteSettingTrustedDomainRequest>;

export interface DeleteSettingTrustedDomainResponse {
  /** Trusted domain identifier */
  id: string;
}

export const DeleteSettingTrustedDomainResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteSettingTrustedDomainResponse>;

export type DeleteSettingTrustedDomainError =
  | DefaultErrors
  | TrustedDomainNotFound
  | EmailSecurityNotEntitled
  | Forbidden;

export const deleteSettingTrustedDomain: API.OperationMethod<
  DeleteSettingTrustedDomainRequest,
  DeleteSettingTrustedDomainResponse,
  DeleteSettingTrustedDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingTrustedDomainRequest,
  output: DeleteSettingTrustedDomainResponse,
  errors: [TrustedDomainNotFound, EmailSecurityNotEntitled, Forbidden],
}));

// =============================================================================
// SettingUrlIgnorePattern
// =============================================================================

export interface GetSettingUrlIgnorePatternRequest {
  patternId: string;
  /** Identifier. */
  accountId: string;
}

export const GetSettingUrlIgnorePatternRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      patternId: Schema.String.pipe(T.HttpPath("patternId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/url_ignore_patterns/{patternId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetSettingUrlIgnorePatternRequest>;

export interface GetSettingUrlIgnorePatternResponse {
  /** URL ignore pattern identifier */
  id: string;
  createdAt: string;
  /** Regular expression matching URLs that should not be rewritten. */
  pattern: string;
  /** Optional note describing the reason for the ignore pattern. */
  comments?: string | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
}

export const GetSettingUrlIgnorePatternResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      pattern: Schema.String,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          pattern: "pattern",
          comments: "comments",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetSettingUrlIgnorePatternResponse>;

export type GetSettingUrlIgnorePatternError = DefaultErrors;

export const getSettingUrlIgnorePattern: API.OperationMethod<
  GetSettingUrlIgnorePatternRequest,
  GetSettingUrlIgnorePatternResponse,
  GetSettingUrlIgnorePatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingUrlIgnorePatternRequest,
  output: GetSettingUrlIgnorePatternResponse,
  errors: [],
}));

export interface ListSettingUrlIgnorePatternsRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
}

export const ListSettingUrlIgnorePatternsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/settings/url_ignore_patterns",
      }),
    ),
  ) as unknown as Schema.Schema<ListSettingUrlIgnorePatternsRequest>;

export interface ListSettingUrlIgnorePatternsResponse {
  result: {
    id: string;
    createdAt: string;
    pattern: string;
    comments?: string | null;
    lastModified?: string | null;
    modifiedAt?: string | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSettingUrlIgnorePatternsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          createdAt: Schema.String,
          pattern: Schema.String,
          comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          lastModified: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          modifiedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdAt: "created_at",
            pattern: "pattern",
            comments: "comments",
            lastModified: "last_modified",
            modifiedAt: "modified_at",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListSettingUrlIgnorePatternsResponse>;

export type ListSettingUrlIgnorePatternsError = DefaultErrors;

export const listSettingUrlIgnorePatterns: API.PaginatedOperationMethod<
  ListSettingUrlIgnorePatternsRequest,
  ListSettingUrlIgnorePatternsResponse,
  ListSettingUrlIgnorePatternsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingUrlIgnorePatternsRequest,
  output: ListSettingUrlIgnorePatternsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateSettingUrlIgnorePatternRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Regular expression matching URLs that should not be rewritten. */
  pattern: string;
  /** Body param: Optional note describing the reason for the ignore pattern. */
  comments?: string | null;
}

export const CreateSettingUrlIgnorePatternRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      pattern: Schema.String,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/email-security/settings/url_ignore_patterns",
      }),
    ),
  ) as unknown as Schema.Schema<CreateSettingUrlIgnorePatternRequest>;

export interface CreateSettingUrlIgnorePatternResponse {
  /** URL ignore pattern identifier */
  id: string;
  createdAt: string;
  /** Regular expression matching URLs that should not be rewritten. */
  pattern: string;
  /** Optional note describing the reason for the ignore pattern. */
  comments?: string | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
}

export const CreateSettingUrlIgnorePatternResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      pattern: Schema.String,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          pattern: "pattern",
          comments: "comments",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateSettingUrlIgnorePatternResponse>;

export type CreateSettingUrlIgnorePatternError = DefaultErrors;

export const createSettingUrlIgnorePattern: API.OperationMethod<
  CreateSettingUrlIgnorePatternRequest,
  CreateSettingUrlIgnorePatternResponse,
  CreateSettingUrlIgnorePatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSettingUrlIgnorePatternRequest,
  output: CreateSettingUrlIgnorePatternResponse,
  errors: [],
}));

export interface PatchSettingUrlIgnorePatternRequest {
  patternId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Optional note describing the reason for the ignore pattern. */
  comments?: string | null;
  /** Body param: Regular expression matching URLs that should not be rewritten. */
  pattern?: string;
}

export const PatchSettingUrlIgnorePatternRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      patternId: Schema.String.pipe(T.HttpPath("patternId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      pattern: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/email-security/settings/url_ignore_patterns/{patternId}",
      }),
    ),
  ) as unknown as Schema.Schema<PatchSettingUrlIgnorePatternRequest>;

export interface PatchSettingUrlIgnorePatternResponse {
  /** URL ignore pattern identifier */
  id: string;
  createdAt: string;
  /** Regular expression matching URLs that should not be rewritten. */
  pattern: string;
  /** Optional note describing the reason for the ignore pattern. */
  comments?: string | null;
  /** @deprecated Deprecated, use `modified_at` instead. End of life: November 1, 2026. */
  lastModified?: string | null;
  modifiedAt?: string | null;
}

export const PatchSettingUrlIgnorePatternResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdAt: Schema.String,
      pattern: Schema.String,
      comments: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastModified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdAt: "created_at",
          pattern: "pattern",
          comments: "comments",
          lastModified: "last_modified",
          modifiedAt: "modified_at",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchSettingUrlIgnorePatternResponse>;

export type PatchSettingUrlIgnorePatternError = DefaultErrors;

export const patchSettingUrlIgnorePattern: API.OperationMethod<
  PatchSettingUrlIgnorePatternRequest,
  PatchSettingUrlIgnorePatternResponse,
  PatchSettingUrlIgnorePatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingUrlIgnorePatternRequest,
  output: PatchSettingUrlIgnorePatternResponse,
  errors: [],
}));

export interface DeleteSettingUrlIgnorePatternRequest {
  patternId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteSettingUrlIgnorePatternRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      patternId: Schema.String.pipe(T.HttpPath("patternId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/email-security/settings/url_ignore_patterns/{patternId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteSettingUrlIgnorePatternRequest>;

export interface DeleteSettingUrlIgnorePatternResponse {
  /** URL ignore pattern identifier */
  id: string;
}

export const DeleteSettingUrlIgnorePatternResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteSettingUrlIgnorePatternResponse>;

export type DeleteSettingUrlIgnorePatternError = DefaultErrors;

export const deleteSettingUrlIgnorePattern: API.OperationMethod<
  DeleteSettingUrlIgnorePatternRequest,
  DeleteSettingUrlIgnorePatternResponse,
  DeleteSettingUrlIgnorePatternError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingUrlIgnorePatternRequest,
  output: DeleteSettingUrlIgnorePatternResponse,
  errors: [],
}));

// =============================================================================
// Submission
// =============================================================================

export interface ListSubmissionsRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: The end of the search date range. Defaults to `now`. */
  end?: string;
  /** Query param: When true, return only submissions that were escalated by an end user (vs. by the security team). When false, return only submissions that were not escalated by an end user. When omitted, */
  escalatedFromUser?: boolean;
  /** Query param */
  originalDisposition?:
    | "MALICIOUS"
    | "SUSPICIOUS"
    | "SPOOF"
    | "SPAM"
    | "BULK"
    | "NONE"
    | (string & {});
  /** Query param */
  outcomeDisposition?:
    | "MALICIOUS"
    | "SUSPICIOUS"
    | "SPOOF"
    | "SPAM"
    | "BULK"
    | "NONE"
    | (string & {});
  /** Query param */
  query?: string | null;
  /** Query param */
  requestedDisposition?:
    | "MALICIOUS"
    | "SUSPICIOUS"
    | "SPOOF"
    | "SPAM"
    | "BULK"
    | "NONE"
    | (string & {});
  /** Query param: The beginning of the search date range. Defaults to `now - 30 days`. */
  start?: string;
  /** Query param */
  status?: string;
  /** Query param */
  submissionId?: string;
  /** Query param */
  type?: "TEAM" | "USER" | (string & {});
}

export const ListSubmissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      end: Schema.optional(Schema.String).pipe(T.HttpQuery("end")),
      escalatedFromUser: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("escalated_from_user"),
      ),
      originalDisposition: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "MALICIOUS",
            "SUSPICIOUS",
            "SPOOF",
            "SPAM",
            "BULK",
            "NONE",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("original_disposition")),
      outcomeDisposition: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "MALICIOUS",
            "SUSPICIOUS",
            "SPOOF",
            "SPAM",
            "BULK",
            "NONE",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("outcome_disposition")),
      query: Schema.optional(Schema.Union([Schema.String, Schema.Null])).pipe(
        T.HttpQuery("query"),
      ),
      requestedDisposition: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "MALICIOUS",
            "SUSPICIOUS",
            "SPOOF",
            "SPAM",
            "BULK",
            "NONE",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("requested_disposition")),
      start: Schema.optional(Schema.String).pipe(T.HttpQuery("start")),
      status: Schema.optional(Schema.String).pipe(T.HttpQuery("status")),
      submissionId: Schema.optional(Schema.String).pipe(
        T.HttpQuery("submission_id"),
      ),
      type: Schema.optional(
        Schema.Union([Schema.Literals(["TEAM", "USER"]), Schema.String]),
      ).pipe(T.HttpQuery("type")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/email-security/submissions",
      }),
    ),
  ) as unknown as Schema.Schema<ListSubmissionsRequest>;

export interface ListSubmissionsResponse {
  result: {
    requestedAt: string;
    submissionId: string;
    customerStatus?: "escalated" | "reviewed" | "unreviewed" | null;
    escalatedAs?:
      | "MALICIOUS"
      | "SUSPICIOUS"
      | "SPOOF"
      | "SPAM"
      | "BULK"
      | "NONE"
      | null;
    escalatedAt?: string | null;
    escalatedBy?: string | null;
    escalatedSubmissionId?: string | null;
    originalDisposition?:
      | "MALICIOUS"
      | "SUSPICIOUS"
      | "SPOOF"
      | "SPAM"
      | "BULK"
      | "NONE"
      | null;
    originalEdfHash?: string | null;
    originalPostfixId?: string | null;
    outcome?: string | null;
    outcomeDisposition?:
      | "MALICIOUS"
      | "SUSPICIOUS"
      | "SPOOF"
      | "SPAM"
      | "BULK"
      | "NONE"
      | null;
    requestedBy?: string | null;
    requestedDisposition?:
      | "MALICIOUS"
      | "SUSPICIOUS"
      | "SPOOF"
      | "SPAM"
      | "BULK"
      | "NONE"
      | null;
    requestedTs?: string | null;
    status?: string | null;
    subject?: string | null;
    type?: "Team" | "User" | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSubmissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          requestedAt: Schema.String,
          submissionId: Schema.String,
          customerStatus: Schema.optional(
            Schema.Union([
              Schema.Literal("escalated"),
              Schema.Literal("reviewed"),
              Schema.Literal("unreviewed"),
              Schema.Null,
            ]),
          ),
          escalatedAs: Schema.optional(
            Schema.Union([
              Schema.Literal("MALICIOUS"),
              Schema.Literal("SUSPICIOUS"),
              Schema.Literal("SPOOF"),
              Schema.Literal("SPAM"),
              Schema.Literal("BULK"),
              Schema.Literal("NONE"),
              Schema.Null,
            ]),
          ),
          escalatedAt: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          escalatedBy: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          escalatedSubmissionId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          originalDisposition: Schema.optional(
            Schema.Union([
              Schema.Literal("MALICIOUS"),
              Schema.Literal("SUSPICIOUS"),
              Schema.Literal("SPOOF"),
              Schema.Literal("SPAM"),
              Schema.Literal("BULK"),
              Schema.Literal("NONE"),
              Schema.Null,
            ]),
          ),
          originalEdfHash: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          originalPostfixId: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          outcome: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          outcomeDisposition: Schema.optional(
            Schema.Union([
              Schema.Literal("MALICIOUS"),
              Schema.Literal("SUSPICIOUS"),
              Schema.Literal("SPOOF"),
              Schema.Literal("SPAM"),
              Schema.Literal("BULK"),
              Schema.Literal("NONE"),
              Schema.Null,
            ]),
          ),
          requestedBy: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          requestedDisposition: Schema.optional(
            Schema.Union([
              Schema.Literal("MALICIOUS"),
              Schema.Literal("SUSPICIOUS"),
              Schema.Literal("SPOOF"),
              Schema.Literal("SPAM"),
              Schema.Literal("BULK"),
              Schema.Literal("NONE"),
              Schema.Null,
            ]),
          ),
          requestedTs: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          subject: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          type: Schema.optional(
            Schema.Union([
              Schema.Literal("Team"),
              Schema.Literal("User"),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            requestedAt: "requested_at",
            submissionId: "submission_id",
            customerStatus: "customer_status",
            escalatedAs: "escalated_as",
            escalatedAt: "escalated_at",
            escalatedBy: "escalated_by",
            escalatedSubmissionId: "escalated_submission_id",
            originalDisposition: "original_disposition",
            originalEdfHash: "original_edf_hash",
            originalPostfixId: "original_postfix_id",
            outcome: "outcome",
            outcomeDisposition: "outcome_disposition",
            requestedBy: "requested_by",
            requestedDisposition: "requested_disposition",
            requestedTs: "requested_ts",
            status: "status",
            subject: "subject",
            type: "type",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListSubmissionsResponse>;

export type ListSubmissionsError = DefaultErrors;

export const listSubmissions: API.PaginatedOperationMethod<
  ListSubmissionsRequest,
  ListSubmissionsResponse,
  ListSubmissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSubmissionsRequest,
  output: ListSubmissionsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));
