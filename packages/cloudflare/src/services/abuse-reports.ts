/**
 * Cloudflare ABUSE-REPORTS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service abuse-reports
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

export class AbuseReportNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AbuseReportNotFound>()("AbuseReportNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 0 }],
) {}

export class InvalidAccountId extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidAccountId>()("InvalidAccountId", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class InvalidRequest extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRequest>()("InvalidRequest", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

// =============================================================================
// AbuseReport
// =============================================================================

export interface GetAbuseReportRequest {
  reportParam: string;
  /** Cloudflare Account ID */
  accountId: string;
}

export const GetAbuseReportRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      reportParam: Schema.String.pipe(T.HttpPath("reportParam")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/abuse-reports/{reportParam}",
      }),
    ),
) as unknown as Schema.Schema<GetAbuseReportRequest>;

export interface GetAbuseReportResponse {
  /** Public facing ID of abuse report, aka abuse_rand. */
  id: string;
  /** Creation date of report. Time in RFC 3339 format (https://www.rfc-editor.org/rfc/rfc3339.html) */
  cdate: string;
  /** Domain that relates to the report. */
  domain: string;
  /** A summary of the mitigations related to this report. */
  mitigationSummary: {
    acceptedUrlCount: number;
    activeCount: number;
    externalHostNotified: boolean;
    inReviewCount: number;
    pendingCount: number;
  };
  /** An enum value that represents the status of an abuse record */
  status: "accepted" | "in_review" | (string & {});
  /** The abuse report type */
  type:
    | "PHISH"
    | "GEN"
    | "THREAT"
    | "DMCA"
    | "EMER"
    | "TM"
    | "REG_WHO"
    | "NCSEI"
    | "NETWORK"
    | (string & {});
  /** Justification for the report. */
  justification?: string | null;
  /** Original work / Targeted brand in the alleged abuse. */
  originalWork?: string | null;
  /** Information about the submitter of the report. */
  submitter?: {
    company?: string | null;
    email?: string | null;
    name?: string | null;
    telephone?: string | null;
  } | null;
  urls?: string[] | null;
}

export const GetAbuseReportResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      cdate: Schema.String,
      domain: Schema.String,
      mitigationSummary: Schema.Struct({
        acceptedUrlCount: Schema.Number,
        activeCount: Schema.Number,
        externalHostNotified: Schema.Boolean,
        inReviewCount: Schema.Number,
        pendingCount: Schema.Number,
      }).pipe(
        Schema.encodeKeys({
          acceptedUrlCount: "accepted_url_count",
          activeCount: "active_count",
          externalHostNotified: "external_host_notified",
          inReviewCount: "in_review_count",
          pendingCount: "pending_count",
        }),
      ),
      status: Schema.Union([
        Schema.Literals(["accepted", "in_review"]),
        Schema.String,
      ]),
      type: Schema.Union([
        Schema.Literals([
          "PHISH",
          "GEN",
          "THREAT",
          "DMCA",
          "EMER",
          "TM",
          "REG_WHO",
          "NCSEI",
          "NETWORK",
        ]),
        Schema.String,
      ]),
      justification: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      originalWork: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      submitter: Schema.optional(
        Schema.Union([
          Schema.Struct({
            company: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
            email: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            telephone: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }),
          Schema.Null,
        ]),
      ),
      urls: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          cdate: "cdate",
          domain: "domain",
          mitigationSummary: "mitigation_summary",
          status: "status",
          type: "type",
          justification: "justification",
          originalWork: "original_work",
          submitter: "submitter",
          urls: "urls",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetAbuseReportResponse>;

export type GetAbuseReportError =
  | DefaultErrors
  | InvalidAccountId
  | AbuseReportNotFound;

export const getAbuseReport: API.OperationMethod<
  GetAbuseReportRequest,
  GetAbuseReportResponse,
  GetAbuseReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAbuseReportRequest,
  output: GetAbuseReportResponse,
  errors: [InvalidAccountId, AbuseReportNotFound],
}));

export interface ListAbuseReportsRequest {
  /** Path param: Cloudflare Account ID */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Returns reports created after the specified date */
  createdAfter?: string;
  /** Query param: Returns reports created before the specified date */
  createdBefore?: string;
  /** Query param: Filter by domain name related to the abuse report */
  domain?: string;
  /** Query param: Filter reports that have any mitigations in the given status. */
  mitigationStatus?:
    | "pending"
    | "active"
    | "in_review"
    | "cancelled"
    | "removed"
    | (string & {});
  /** Query param: A property to sort by, followed by the order (id, cdate, domain, type, status) */
  sort?: string;
  /** Query param: Filter by the status of the report. */
  status?: "accepted" | "in_review" | (string & {});
  /** Query param: Filter by the type of the report. */
  type?:
    | "PHISH"
    | "GEN"
    | "THREAT"
    | "DMCA"
    | "EMER"
    | "TM"
    | "REG_WHO"
    | "NCSEI"
    | "NETWORK"
    | (string & {});
}

export const ListAbuseReportsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      createdAfter: Schema.optional(Schema.String).pipe(
        T.HttpQuery("created_after"),
      ),
      createdBefore: Schema.optional(Schema.String).pipe(
        T.HttpQuery("created_before"),
      ),
      domain: Schema.optional(Schema.String).pipe(T.HttpQuery("domain")),
      mitigationStatus: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "pending",
            "active",
            "in_review",
            "cancelled",
            "removed",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("mitigation_status")),
      sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals(["accepted", "in_review"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "PHISH",
            "GEN",
            "THREAT",
            "DMCA",
            "EMER",
            "TM",
            "REG_WHO",
            "NCSEI",
            "NETWORK",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("type")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/abuse-reports" }),
    ),
  ) as unknown as Schema.Schema<ListAbuseReportsRequest>;

export interface ListAbuseReportsResponse {
  result: {
    items?:
      | {
          reports: {
            id: string;
            cdate: string;
            domain: string;
            mitigationSummary: {
              acceptedUrlCount: number;
              activeCount: number;
              externalHostNotified: boolean;
              inReviewCount: number;
              pendingCount: number;
            };
            status: "accepted" | "in_review" | (string & {});
            type:
              | "PHISH"
              | "GEN"
              | "THREAT"
              | "DMCA"
              | "EMER"
              | "TM"
              | "REG_WHO"
              | "NCSEI"
              | "NETWORK"
              | (string & {});
            justification?: string | null;
            originalWork?: string | null;
            submitter?: {
              company?: string | null;
              email?: string | null;
              name?: string | null;
              telephone?: string | null;
            } | null;
            urls?: string[] | null;
          }[];
        }[]
      | null;
  };
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListAbuseReportsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Struct({
        items: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                reports: Schema.Array(
                  Schema.Struct({
                    id: Schema.String,
                    cdate: Schema.String,
                    domain: Schema.String,
                    mitigationSummary: Schema.Struct({
                      acceptedUrlCount: Schema.Number,
                      activeCount: Schema.Number,
                      externalHostNotified: Schema.Boolean,
                      inReviewCount: Schema.Number,
                      pendingCount: Schema.Number,
                    }).pipe(
                      Schema.encodeKeys({
                        acceptedUrlCount: "accepted_url_count",
                        activeCount: "active_count",
                        externalHostNotified: "external_host_notified",
                        inReviewCount: "in_review_count",
                        pendingCount: "pending_count",
                      }),
                    ),
                    status: Schema.Union([
                      Schema.Literals(["accepted", "in_review"]),
                      Schema.String,
                    ]),
                    type: Schema.Union([
                      Schema.Literals([
                        "PHISH",
                        "GEN",
                        "THREAT",
                        "DMCA",
                        "EMER",
                        "TM",
                        "REG_WHO",
                        "NCSEI",
                        "NETWORK",
                      ]),
                      Schema.String,
                    ]),
                    justification: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    originalWork: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    submitter: Schema.optional(
                      Schema.Union([
                        Schema.Struct({
                          company: Schema.optional(
                            Schema.Union([Schema.String, Schema.Null]),
                          ),
                          email: Schema.optional(
                            Schema.Union([Schema.String, Schema.Null]),
                          ),
                          name: Schema.optional(
                            Schema.Union([Schema.String, Schema.Null]),
                          ),
                          telephone: Schema.optional(
                            Schema.Union([Schema.String, Schema.Null]),
                          ),
                        }),
                        Schema.Null,
                      ]),
                    ),
                    urls: Schema.optional(
                      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
                    ),
                  }).pipe(
                    Schema.encodeKeys({
                      id: "id",
                      cdate: "cdate",
                      domain: "domain",
                      mitigationSummary: "mitigation_summary",
                      status: "status",
                      type: "type",
                      justification: "justification",
                      originalWork: "original_work",
                      submitter: "submitter",
                      urls: "urls",
                    }),
                  ),
                ),
              }),
            ),
            Schema.Null,
          ]),
        ),
      }),
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
  ) as unknown as Schema.Schema<ListAbuseReportsResponse>;

export type ListAbuseReportsError = DefaultErrors | InvalidAccountId;

export const listAbuseReports: API.PaginatedOperationMethod<
  ListAbuseReportsRequest,
  ListAbuseReportsResponse,
  ListAbuseReportsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAbuseReportsRequest,
  output: ListAbuseReportsResponse,
  errors: [InvalidAccountId],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result.items",
    pageSize: "perPage",
  } as const,
}));

export interface CreateAbuseReportRequest {
  reportParam: string;
  /** Path param: Cloudflare Account ID */
  accountId: string;
  /** Body param: The report type for submitted reports. */
  act:
    | "abuse_dmca"
    | "abuse_trademark"
    | "abuse_general"
    | "abuse_phishing"
    | "abuse_children"
    | "abuse_threat"
    | "abuse_registrar_whois"
    | "abuse_ncsei"
    | (string & {});
  /** Body param: Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  address1?: string;
  /** Body param: The name of the copyright holder. Text not exceeding 60 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  agentName?: string;
  /** Body param: Can be `0` for false or `1` for true. Must be value: 1 for DMCA reports */
  agree?: "1";
  /** Body param: Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  city?: string;
  /** Body param: Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  country?: string;
  /** Body param: A valid email of the abuse reporter. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  email: string;
  /** Body param: Should match the value provided in `email` */
  email2: string;
  /** Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous. */
  hostNotification?: "send" | "send-anon" | (string & {});
  /** Body param: Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  name: string;
  /** Body param: Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  originalWork?: string;
  /** Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous. */
  ownerNotification: "send" | "send-anon" | "none" | (string & {});
  /** Body param: Required for DMCA reports, should be same as Name. An affirmation that all information in the report is true and accurate while agreeing to the policies of Cloudflare's abuse reports */
  signature?: string;
  /** Body param: Text not exceeding 255 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  state?: string;
  /** Body param: A list of valid URLs separated by ‘\n’ (new line character). The list of the URLs should not exceed 250 URLs. All URLs should have the same hostname. Each URL should be unique. This field  */
  urls: string;
  /** Body param: Any additional comments about the infringement not exceeding 2000 characters */
  comments?: string;
  /** Body param: Text not exceeding 100 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  company?: string;
  /** Body param: Text containing 2 characters */
  reportedCountry?: string;
  /** Body param: Text not exceeding 255 characters */
  reportedUserAgent?: string;
  /** Body param: Text not exceeding 20 characters. This field may be released by Cloudflare to third parties such as the Lumen Database (https://lumendatabase.org/). */
  tele?: string;
  /** Body param: Text not exceeding 255 characters */
  title?: string;
  /** Body param: A detailed description of the infringement, including any necessary access details and the exact steps needed to view the content, not exceeding 5000 characters. */
  justification?: string;
  /** Body param: Text not exceeding 1000 characters */
  trademarkNumber?: string;
  /** Body param: Text not exceeding 1000 characters */
  trademarkOffice?: string;
  /** Body param: Text not exceeding 1000 characters */
  trademarkSymbol?: string;
  /** Body param: A list of IP addresses separated by ‘\n’ (new line character). The list of destination IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique. */
  destinationIps?: string;
  /** Body param: A comma separated list of ports and protocols e.g. 80/TCP, 22/UDP. The total size of the field should not exceed 2000 characters. Each individual port/protocol should not exceed 100 charac */
  portsProtocols?: string;
  /** Body param: A list of IP addresses separated by ‘\n’ (new line character). The list of source IPs should not exceed 30 IP addresses. Each one of the IP addresses ought to be unique. */
  sourceIps?: string;
  /** Body param: Notification type based on the abuse type. NOTE: Copyright (DMCA) and Trademark reports cannot be anonymous. */
  ncmecNotification?: "send" | "send-anon" | (string & {});
  /** Body param: RDP-mandated fields for registrar WHOIS data disclosure requests. */
  regWhoRequest?: {
    regWhoGoodFaithAffirmation: boolean;
    regWhoLawfulProcessingAgreement: boolean;
    regWhoLegalBasis: string;
    regWhoRequestType: "disclosure" | "invalid_whois" | (string & {});
    regWhoRequestedDataElements: (
      | "registrant_name"
      | "registrant_organization"
      | "registrant_email"
      | "registrant_phone"
      | "registrant_address"
      | "registrant_address_country"
      | "registrant_address_postal_code"
      | "admin_name"
      | "admin_organization"
      | "admin_email"
      | "admin_phone"
      | "admin_address"
      | "tech_name"
      | "tech_organization"
      | "tech_email"
      | "tech_phone"
      | "tech_address"
      | (string & {})
    )[];
    regWhoAuthorizationStatement?: string;
    regWhoRequestorType?:
      | "government"
      | "corporation"
      | "individual"
      | (string & {});
  };
  /** Body param: If the submitter is the target of NCSEI in the URLs of the abuse report. */
  ncseiSubjectRepresentation?: boolean;
}

export const CreateAbuseReportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      reportParam: Schema.String.pipe(T.HttpPath("reportParam")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      act: Schema.Union([
        Schema.Literals([
          "abuse_dmca",
          "abuse_trademark",
          "abuse_general",
          "abuse_phishing",
          "abuse_children",
          "abuse_threat",
          "abuse_registrar_whois",
          "abuse_ncsei",
        ]),
        Schema.String,
      ]),
      address1: Schema.optional(Schema.String),
      agentName: Schema.optional(Schema.String),
      agree: Schema.optional(Schema.Literal("1")),
      city: Schema.optional(Schema.String),
      country: Schema.optional(Schema.String),
      email: Schema.String,
      email2: Schema.String,
      hostNotification: Schema.optional(
        Schema.Union([Schema.Literals(["send", "send-anon"]), Schema.String]),
      ),
      name: Schema.String,
      originalWork: Schema.optional(Schema.String),
      ownerNotification: Schema.Union([
        Schema.Literals(["send", "send-anon", "none"]),
        Schema.String,
      ]),
      signature: Schema.optional(Schema.String),
      state: Schema.optional(Schema.String),
      urls: Schema.String,
      comments: Schema.optional(Schema.String),
      company: Schema.optional(Schema.String),
      reportedCountry: Schema.optional(Schema.String),
      reportedUserAgent: Schema.optional(Schema.String),
      tele: Schema.optional(Schema.String),
      title: Schema.optional(Schema.String),
      justification: Schema.optional(Schema.String),
      trademarkNumber: Schema.optional(Schema.String),
      trademarkOffice: Schema.optional(Schema.String),
      trademarkSymbol: Schema.optional(Schema.String),
      destinationIps: Schema.optional(Schema.String),
      portsProtocols: Schema.optional(Schema.String),
      sourceIps: Schema.optional(Schema.String),
      ncmecNotification: Schema.optional(
        Schema.Union([Schema.Literals(["send", "send-anon"]), Schema.String]),
      ),
      regWhoRequest: Schema.optional(
        Schema.Struct({
          regWhoGoodFaithAffirmation: Schema.Boolean,
          regWhoLawfulProcessingAgreement: Schema.Boolean,
          regWhoLegalBasis: Schema.String,
          regWhoRequestType: Schema.Union([
            Schema.Literals(["disclosure", "invalid_whois"]),
            Schema.String,
          ]),
          regWhoRequestedDataElements: Schema.Array(
            Schema.Union([
              Schema.Literals([
                "registrant_name",
                "registrant_organization",
                "registrant_email",
                "registrant_phone",
                "registrant_address",
                "registrant_address_country",
                "registrant_address_postal_code",
                "admin_name",
                "admin_organization",
                "admin_email",
                "admin_phone",
                "admin_address",
                "tech_name",
                "tech_organization",
                "tech_email",
                "tech_phone",
                "tech_address",
              ]),
              Schema.String,
            ]),
          ),
          regWhoAuthorizationStatement: Schema.optional(Schema.String),
          regWhoRequestorType: Schema.optional(
            Schema.Union([
              Schema.Literals(["government", "corporation", "individual"]),
              Schema.String,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            regWhoGoodFaithAffirmation: "reg_who_good_faith_affirmation",
            regWhoLawfulProcessingAgreement:
              "reg_who_lawful_processing_agreement",
            regWhoLegalBasis: "reg_who_legal_basis",
            regWhoRequestType: "reg_who_request_type",
            regWhoRequestedDataElements: "reg_who_requested_data_elements",
            regWhoAuthorizationStatement: "reg_who_authorization_statement",
            regWhoRequestorType: "reg_who_requestor_type",
          }),
        ),
      ),
      ncseiSubjectRepresentation: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({
        act: "act",
        address1: "address1",
        agentName: "agent_name",
        agree: "agree",
        city: "city",
        country: "country",
        email: "email",
        email2: "email2",
        hostNotification: "host_notification",
        name: "name",
        originalWork: "original_work",
        ownerNotification: "owner_notification",
        signature: "signature",
        state: "state",
        urls: "urls",
        comments: "comments",
        company: "company",
        reportedCountry: "reported_country",
        reportedUserAgent: "reported_user_agent",
        tele: "tele",
        title: "title",
        justification: "justification",
        trademarkNumber: "trademark_number",
        trademarkOffice: "trademark_office",
        trademarkSymbol: "trademark_symbol",
        destinationIps: "destination_ips",
        portsProtocols: "ports_protocols",
        sourceIps: "source_ips",
        ncmecNotification: "ncmec_notification",
        regWhoRequest: "reg_who_request",
        ncseiSubjectRepresentation: "ncsei_subject_representation",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/abuse-reports/{reportParam}",
      }),
    ),
  ) as unknown as Schema.Schema<CreateAbuseReportRequest>;

export type CreateAbuseReportResponse = string;

export const CreateAbuseReportResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateAbuseReportResponse>;

export type CreateAbuseReportError = DefaultErrors | InvalidRequest;

export const createAbuseReport: API.OperationMethod<
  CreateAbuseReportRequest,
  CreateAbuseReportResponse,
  CreateAbuseReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateAbuseReportRequest,
  output: CreateAbuseReportResponse,
  errors: [InvalidRequest],
}));

// =============================================================================
// Mitigation
// =============================================================================

export interface ListMitigationsRequest {
  reportId: string;
  /** Path param: Cloudflare Account ID */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Returns mitigation that were dispatched after the given date */
  effectiveAfter?: string;
  /** Query param: Returns mitigations that were dispatched before the given date */
  effectiveBefore?: string;
  /** Query param: Filter by the type of entity the mitigation impacts. */
  entityType?: "url_pattern" | "account" | "zone" | (string & {});
  /** Query param: A property to sort by, followed by the order */
  sort?:
    | "type,asc"
    | "type,desc"
    | "effective_date,asc"
    | "effective_date,desc"
    | "status,asc"
    | "status,desc"
    | "entity_type,asc"
    | "entity_type,desc"
    | (string & {});
  /** Query param: Filter by the status of the mitigation. */
  status?:
    | "pending"
    | "active"
    | "in_review"
    | "cancelled"
    | "removed"
    | (string & {});
  /** Query param: Filter by the type of mitigation. This filter parameter can be specified multiple times to include multiple types of mitigations in the result set, e.g. ?type=rate_limit_cache&type=legal_ */
  type?:
    | "account_suspend"
    | "copyright_interstitial"
    | "geo_block"
    | "legal_block"
    | "malware_interstitial"
    | "misleading_interstitial"
    | "network_block"
    | "phishing_interstitial"
    | "playfairite_enforce"
    | "r2_takedown_account"
    | "r2_takedown_bucket"
    | "r2_takedown_object"
    | "rate_limit_cache"
    | "redirect_video_stream"
    | "registrar_freeze"
    | "registrar_parking"
    | "stream_block_account"
    | "user_suspend"
    | "workers_takedown_by_zone_id"
    | (string & {});
}

export const ListMitigationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      reportId: Schema.String.pipe(T.HttpPath("reportId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      effectiveAfter: Schema.optional(Schema.String).pipe(
        T.HttpQuery("effective_after"),
      ),
      effectiveBefore: Schema.optional(Schema.String).pipe(
        T.HttpQuery("effective_before"),
      ),
      entityType: Schema.optional(
        Schema.Union([
          Schema.Literals(["url_pattern", "account", "zone"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("entity_type")),
      sort: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "type,asc",
            "type,desc",
            "effective_date,asc",
            "effective_date,desc",
            "status,asc",
            "status,desc",
            "entity_type,asc",
            "entity_type,desc",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("sort")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "pending",
            "active",
            "in_review",
            "cancelled",
            "removed",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "account_suspend",
            "copyright_interstitial",
            "geo_block",
            "legal_block",
            "malware_interstitial",
            "misleading_interstitial",
            "network_block",
            "phishing_interstitial",
            "playfairite_enforce",
            "r2_takedown_account",
            "r2_takedown_bucket",
            "r2_takedown_object",
            "rate_limit_cache",
            "redirect_video_stream",
            "registrar_freeze",
            "registrar_parking",
            "stream_block_account",
            "user_suspend",
            "workers_takedown_by_zone_id",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("type")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/abuse-reports/{reportId}/mitigations",
      }),
    ),
  ) as unknown as Schema.Schema<ListMitigationsRequest>;

export interface ListMitigationsResponse {
  result: {
    items?:
      | {
          mitigations: {
            id: string;
            effectiveDate: string;
            entityId: string;
            entityType: "url_pattern" | "account" | "zone" | (string & {});
            status:
              | "pending"
              | "active"
              | "in_review"
              | "cancelled"
              | "removed"
              | (string & {});
            type:
              | "account_suspend"
              | "copyright_interstitial"
              | "geo_block"
              | "legal_block"
              | "malware_interstitial"
              | "misleading_interstitial"
              | "network_block"
              | "phishing_interstitial"
              | "playfairite_enforce"
              | "r2_takedown_account"
              | "r2_takedown_bucket"
              | "r2_takedown_object"
              | "rate_limit_cache"
              | "redirect_video_stream"
              | "registrar_freeze"
              | "registrar_parking"
              | "stream_block_account"
              | "user_suspend"
              | "workers_takedown_by_zone_id"
              | (string & {});
          }[];
        }[]
      | null;
  };
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListMitigationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Struct({
        items: Schema.optional(
          Schema.Union([
            Schema.Array(
              Schema.Struct({
                mitigations: Schema.Array(
                  Schema.Struct({
                    id: Schema.String,
                    effectiveDate: Schema.String,
                    entityId: Schema.String,
                    entityType: Schema.Union([
                      Schema.Literals(["url_pattern", "account", "zone"]),
                      Schema.String,
                    ]),
                    status: Schema.Union([
                      Schema.Literals([
                        "pending",
                        "active",
                        "in_review",
                        "cancelled",
                        "removed",
                      ]),
                      Schema.String,
                    ]),
                    type: Schema.Union([
                      Schema.Literals([
                        "account_suspend",
                        "copyright_interstitial",
                        "geo_block",
                        "legal_block",
                        "malware_interstitial",
                        "misleading_interstitial",
                        "network_block",
                        "phishing_interstitial",
                        "playfairite_enforce",
                        "r2_takedown_account",
                        "r2_takedown_bucket",
                        "r2_takedown_object",
                        "rate_limit_cache",
                        "redirect_video_stream",
                        "registrar_freeze",
                        "registrar_parking",
                        "stream_block_account",
                        "user_suspend",
                        "workers_takedown_by_zone_id",
                      ]),
                      Schema.String,
                    ]),
                  }).pipe(
                    Schema.encodeKeys({
                      id: "id",
                      effectiveDate: "effective_date",
                      entityId: "entity_id",
                      entityType: "entity_type",
                      status: "status",
                      type: "type",
                    }),
                  ),
                ),
              }),
            ),
            Schema.Null,
          ]),
        ),
      }),
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
  ) as unknown as Schema.Schema<ListMitigationsResponse>;

export type ListMitigationsError = DefaultErrors;

export const listMitigations: API.PaginatedOperationMethod<
  ListMitigationsRequest,
  ListMitigationsResponse,
  ListMitigationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListMitigationsRequest,
  output: ListMitigationsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result.items",
    pageSize: "perPage",
  } as const,
}));

export interface ReviewMitigationRequest {
  reportId: string;
  /** Path param: Cloudflare Account ID */
  accountId: string;
  /** Body param: List of mitigations to appeal. */
  appeals: {
    id: string;
    reason: "removed" | "misclassified" | (string & {});
  }[];
}

export const ReviewMitigationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      reportId: Schema.String.pipe(T.HttpPath("reportId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      appeals: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          reason: Schema.Union([
            Schema.Literals(["removed", "misclassified"]),
            Schema.String,
          ]),
        }),
      ),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/abuse-reports/{reportId}/mitigations/appeal",
      }),
    ),
  ) as unknown as Schema.Schema<ReviewMitigationRequest>;

export interface ReviewMitigationResponse {
  result: {
    id: string;
    effectiveDate: string;
    entityId: string;
    entityType: "url_pattern" | "account" | "zone" | (string & {});
    status:
      | "pending"
      | "active"
      | "in_review"
      | "cancelled"
      | "removed"
      | (string & {});
    type:
      | "account_suspend"
      | "copyright_interstitial"
      | "geo_block"
      | "legal_block"
      | "malware_interstitial"
      | "misleading_interstitial"
      | "network_block"
      | "phishing_interstitial"
      | "playfairite_enforce"
      | "r2_takedown_account"
      | "r2_takedown_bucket"
      | "r2_takedown_object"
      | "rate_limit_cache"
      | "redirect_video_stream"
      | "registrar_freeze"
      | "registrar_parking"
      | "stream_block_account"
      | "user_suspend"
      | "workers_takedown_by_zone_id"
      | (string & {});
  }[];
}

export const ReviewMitigationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          effectiveDate: Schema.String,
          entityId: Schema.String,
          entityType: Schema.Union([
            Schema.Literals(["url_pattern", "account", "zone"]),
            Schema.String,
          ]),
          status: Schema.Union([
            Schema.Literals([
              "pending",
              "active",
              "in_review",
              "cancelled",
              "removed",
            ]),
            Schema.String,
          ]),
          type: Schema.Union([
            Schema.Literals([
              "account_suspend",
              "copyright_interstitial",
              "geo_block",
              "legal_block",
              "malware_interstitial",
              "misleading_interstitial",
              "network_block",
              "phishing_interstitial",
              "playfairite_enforce",
              "r2_takedown_account",
              "r2_takedown_bucket",
              "r2_takedown_object",
              "rate_limit_cache",
              "redirect_video_stream",
              "registrar_freeze",
              "registrar_parking",
              "stream_block_account",
              "user_suspend",
              "workers_takedown_by_zone_id",
            ]),
            Schema.String,
          ]),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            effectiveDate: "effective_date",
            entityId: "entity_id",
            entityType: "entity_type",
            status: "status",
            type: "type",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<ReviewMitigationResponse>;

export type ReviewMitigationError = DefaultErrors;

export const reviewMitigation: API.PaginatedOperationMethod<
  ReviewMitigationRequest,
  ReviewMitigationResponse,
  ReviewMitigationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ReviewMitigationRequest,
  output: ReviewMitigationResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));
