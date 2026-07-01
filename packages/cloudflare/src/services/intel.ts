/**
 * Cloudflare INTEL API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service intel
 */

import * as Schema from "@distilled.cloud/core/schema";
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

export class IndicatorFeedNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<IndicatorFeedNotFound>()("IndicatorFeedNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403, message: { includes: "does not exist" } }],
) {}

export class IndicatorFeedsNotEntitled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<IndicatorFeedsNotEntitled>()(
    "IndicatorFeedsNotEntitled",
    { code: Schema.Number, message: Schema.String },
  ),
  [
    {
      status: 403,
      message: { includes: "does not have permission to create a feed" },
    },
  ],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Payload {
  /** Describes the method used to detect insight. */
  detectionMethod?: string | null;
  zoneTag?: string | null;
}
const Payload = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    detectionMethod: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    zoneTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      detectionMethod: "detection_method",
      zoneTag: "zone_tag",
    }),
  ),
) as unknown as Schema.Codec<Payload>;

interface Issue {
  id?: string | null;
  dismissed?: boolean | null;
  /** Indicates whether the insight has a large payload that requires fetching via the context endpoint. */
  hasExtendedContext?: boolean | null;
  issueClass?: string | null;
  issueType?:
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
    | null;
  payload?: { detectionMethod?: string | null; zoneTag?: string | null } | null;
  resolveLink?: string | null;
  resolveText?: string | null;
  severity?: "Low" | "Moderate" | "Critical" | (string & {}) | null;
  since?: string | null;
  /** The current status of the insight. */
  status?: "active" | "resolved" | (string & {}) | null;
  subject?: string | null;
  timestamp?: string | null;
  /** User-defined classification for the insight. Can be 'false_positive', 'accept_risk', 'other', or null. */
  userClassification?: "false_positive" | "accept_risk" | "other" | null;
}
const Issue = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    dismissed: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    hasExtendedContext: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    issueClass: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    issueType: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "compliance_violation",
            "email_security",
            "exposed_infrastructure",
            "insecure_configuration",
            "weak_authentication",
            "configuration_suggestion",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    payload: Schema.optional(Schema.Union([Payload, Schema.Null])),
    resolveLink: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    resolveText: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    severity: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["Low", "Moderate", "Critical"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    since: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    status: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["active", "resolved"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    subject: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    timestamp: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    userClassification: Schema.optional(
      Schema.Union([
        Schema.Literal("false_positive"),
        Schema.Literal("accept_risk"),
        Schema.Literal("other"),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      dismissed: "dismissed",
      hasExtendedContext: "has_extended_context",
      issueClass: "issue_class",
      issueType: "issue_type",
      payload: "payload",
      resolveLink: "resolve_link",
      resolveText: "resolve_text",
      severity: "severity",
      since: "since",
      status: "status",
      subject: "subject",
      timestamp: "timestamp",
      userClassification: "user_classification",
    }),
  ),
) as unknown as Schema.Codec<Issue>;

interface ListAttackSurfaceReportIssuesResponseResultItem {
  /** Indicates the total number of results. */
  count?: number | null;
  issues?:
    | {
        id?: string | null;
        dismissed?: boolean | null;
        hasExtendedContext?: boolean | null;
        issueClass?: string | null;
        issueType?:
          | "compliance_violation"
          | "email_security"
          | "exposed_infrastructure"
          | "insecure_configuration"
          | "weak_authentication"
          | "configuration_suggestion"
          | (string & {})
          | null;
        payload?: {
          detectionMethod?: string | null;
          zoneTag?: string | null;
        } | null;
        resolveLink?: string | null;
        resolveText?: string | null;
        severity?: "Low" | "Moderate" | "Critical" | (string & {}) | null;
        since?: string | null;
        status?: "active" | "resolved" | (string & {}) | null;
        subject?: string | null;
        timestamp?: string | null;
        userClassification?: "false_positive" | "accept_risk" | "other" | null;
      }[]
    | null;
  /** Specifies the current page within paginated list of results. */
  page?: number | null;
  /** Sets the number of results per page of results. */
  perPage?: number | null;
}
const ListAttackSurfaceReportIssuesResponseResultItem =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      issues: Schema.optional(Schema.Union([Schema.Array(Issue), Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        issues: "issues",
        page: "page",
        perPage: "per_page",
      }),
    ),
  ) as unknown as Schema.Codec<ListAttackSurfaceReportIssuesResponseResultItem>;

interface ListAttackSurfaceReportIssuesResponseResult {
  items?:
    | {
        count?: number | null;
        issues?:
          | {
              id?: string | null;
              dismissed?: boolean | null;
              hasExtendedContext?: boolean | null;
              issueClass?: string | null;
              issueType?:
                | "compliance_violation"
                | "email_security"
                | "exposed_infrastructure"
                | "insecure_configuration"
                | "weak_authentication"
                | "configuration_suggestion"
                | (string & {})
                | null;
              payload?: {
                detectionMethod?: string | null;
                zoneTag?: string | null;
              } | null;
              resolveLink?: string | null;
              resolveText?: string | null;
              severity?: "Low" | "Moderate" | "Critical" | (string & {}) | null;
              since?: string | null;
              status?: "active" | "resolved" | (string & {}) | null;
              subject?: string | null;
              timestamp?: string | null;
              userClassification?:
                | "false_positive"
                | "accept_risk"
                | "other"
                | null;
            }[]
          | null;
        page?: number | null;
        perPage?: number | null;
      }[]
    | null;
}
const ListAttackSurfaceReportIssuesResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      items: Schema.optional(
        Schema.Union([
          Schema.Array(ListAttackSurfaceReportIssuesResponseResultItem),
          Schema.Null,
        ]),
      ),
    }),
  ) as unknown as Schema.Codec<ListAttackSurfaceReportIssuesResponseResult>;

interface ListAttackSurfaceReportIssuesResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListAttackSurfaceReportIssuesResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        totalCount: "total_count",
      }),
    ),
  ) as unknown as Schema.Codec<ListAttackSurfaceReportIssuesResponseResultInfo>;

interface IssueClassResponseItem {
  count?: number | null;
  value?: string | null;
}
const IssueClassResponseItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<IssueClassResponseItem>;

interface Source {
  pointer?: string | null;
}
const Source = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    pointer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Source>;

interface Error2 {
  code: number;
  message: string;
  documentationUrl?: string | null;
  source?: { pointer?: string | null } | null;
}
const Error2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    code: Schema.Number,
    message: Schema.String,
    documentationUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    source: Schema.optional(Schema.Union([Source, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      code: "code",
      message: "message",
      documentationUrl: "documentation_url",
      source: "source",
    }),
  ),
) as unknown as Schema.Codec<Error2>;

interface ReverseRecord {
  /** First seen date of the DNS record during the time period. */
  firstSeen?: string | null;
  /** Hostname that the IP was observed resolving to. */
  hostname?: string | null;
  /** Last seen date of the DNS record during the time period. */
  lastSeen?: string | null;
}
const ReverseRecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    firstSeen: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    hostname: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    lastSeen: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      firstSeen: "first_seen",
      hostname: "hostname",
      lastSeen: "last_seen",
    }),
  ),
) as unknown as Schema.Codec<ReverseRecord>;

interface ListDnsResponseResultItem {
  /** Total results returned based on your search parameters. */
  count?: number | null;
  /** Current page within paginated list of results. */
  page?: number | null;
  /** Number of results per page of results. */
  perPage?: number | null;
  /** Reverse DNS look-ups observed during the time period. */
  reverseRecords?:
    | {
        firstSeen?: string | null;
        hostname?: string | null;
        lastSeen?: string | null;
      }[]
    | null;
}
const ListDnsResponseResultItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      reverseRecords: Schema.optional(
        Schema.Union([Schema.Array(ReverseRecord), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        count: "count",
        page: "page",
        perPage: "per_page",
        reverseRecords: "reverse_records",
      }),
    ),
) as unknown as Schema.Codec<ListDnsResponseResultItem>;

interface ListDnsResponseResult {
  items?:
    | {
        count?: number | null;
        page?: number | null;
        perPage?: number | null;
        reverseRecords?:
          | {
              firstSeen?: string | null;
              hostname?: string | null;
              lastSeen?: string | null;
            }[]
          | null;
      }[]
    | null;
}
const ListDnsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    items: Schema.optional(
      Schema.Union([Schema.Array(ListDnsResponseResultItem), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<ListDnsResponseResult>;

interface AdditionalInformation {
  /** Suspected DGA malware family. */
  suspectedMalwareFamily?: string | null;
}
const AdditionalInformation = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    suspectedMalwareFamily: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({ suspectedMalwareFamily: "suspected_malware_family" }),
  ),
) as unknown as Schema.Codec<AdditionalInformation>;

interface Application {
  id?: number | null;
  name?: string | null;
}
const Application = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Application>;

interface ContentCategory {
  id?: number | null;
  name?: string | null;
  superCategoryId?: number | null;
}
const ContentCategory = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    superCategoryId: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      name: "name",
      superCategoryId: "super_category_id",
    }),
  ),
) as unknown as Schema.Codec<ContentCategory>;

interface ResolvesToRef {
  /** STIX 2.1 identifier: https://docs.oasis-open.org/cti/stix/v2.1/cs02/stix-v2.1-cs02.html#_64yvzeku5a5c. */
  id?: string | null;
  /** IP address or domain name. */
  value?: string | null;
}
const ResolvesToRef = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ResolvesToRef>;

interface BulkGetResponseItem {
  /** Additional information related to the host name. */
  additionalInformation?: { suspectedMalwareFamily?: string | null } | null;
  /** Application that the hostname belongs to. */
  application?: { id?: number | null; name?: string | null } | null;
  contentCategories?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
  domain?: string | null;
  inheritedContentCategories?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
  /** Domain from which `inherited_content_categories` and `inherited_risk_types` are inherited, if applicable. */
  inheritedFrom?: string | null;
  inheritedRiskTypes?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
  /** Global Cloudflare 100k ranking for the last 30 days, if available for the hostname. The top ranked domain is 1, the lowest ranked domain is 100,000. */
  popularityRank?: number | null;
  /** Hostname risk score, which is a value between 0 (lowest risk) to 1 (highest risk). */
  riskScore?: number | null;
  riskTypes?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
}
const BulkGetResponseItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    additionalInformation: Schema.optional(
      Schema.Union([AdditionalInformation, Schema.Null]),
    ),
    application: Schema.optional(Schema.Union([Application, Schema.Null])),
    contentCategories: Schema.optional(
      Schema.Union([Schema.Array(ContentCategory), Schema.Null]),
    ),
    domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    inheritedContentCategories: Schema.optional(
      Schema.Union([Schema.Array(ContentCategory), Schema.Null]),
    ),
    inheritedFrom: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    inheritedRiskTypes: Schema.optional(
      Schema.Union([Schema.Array(ContentCategory), Schema.Null]),
    ),
    popularityRank: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    riskScore: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    riskTypes: Schema.optional(
      Schema.Union([Schema.Array(ContentCategory), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      additionalInformation: "additional_information",
      application: "application",
      contentCategories: "content_categories",
      domain: "domain",
      inheritedContentCategories: "inherited_content_categories",
      inheritedFrom: "inherited_from",
      inheritedRiskTypes: "inherited_risk_types",
      popularityRank: "popularity_rank",
      riskScore: "risk_score",
      riskTypes: "risk_types",
    }),
  ),
) as unknown as Schema.Codec<BulkGetResponseItem>;

interface Categorization {
  categories?: { id?: number | null; name?: string | null }[] | null;
  end?: string | null;
  start?: string | null;
}
const Categorization = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    categories: Schema.optional(
      Schema.Union([Schema.Array(Application), Schema.Null]),
    ),
    end: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    start: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Categorization>;

interface DomainHistory {
  categorizations?:
    | {
        categories?: { id?: number | null; name?: string | null }[] | null;
        end?: string | null;
        start?: string | null;
      }[]
    | null;
  domain?: string | null;
}
const DomainHistory = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    categorizations: Schema.optional(
      Schema.Union([Schema.Array(Categorization), Schema.Null]),
    ),
    domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<DomainHistory>;

interface Persisted {
  domainsAdded?: number | null;
  domainsRemoved?: number | null;
  ipsAdded?: number | null;
  ipsRemoved?: number | null;
  urlsAdded?: number | null;
  urlsRemoved?: number | null;
}
const Persisted = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    domainsAdded: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    domainsRemoved: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    ipsAdded: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    ipsRemoved: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    urlsAdded: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    urlsRemoved: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      domainsAdded: "domains_added",
      domainsRemoved: "domains_removed",
      ipsAdded: "ips_added",
      ipsRemoved: "ips_removed",
      urlsAdded: "urls_added",
      urlsRemoved: "urls_removed",
    }),
  ),
) as unknown as Schema.Codec<Persisted>;

interface Skipped {
  /** Domains filtered by the global popularity allowlist at QS provisioning time. Popular domains (bing.com, naver.com, etc.) are protected from custom-threat-feed enforcement. */
  allowlistedDomains?: number | null;
  /** Indicators in the upload whose valid_until is already in the past. These are not added to QS; the expiration cron handles cleanup. */
  expiredIndicators?: number | null;
  /** Reserved for future use. Currently always 0 — the unifier aborts the entire upload on a single bad indicator. */
  invalidIndicators?: number | null;
}
const Skipped = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    allowlistedDomains: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    expiredIndicators: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    invalidIndicators: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      allowlistedDomains: "allowlisted_domains",
      expiredIndicators: "expired_indicators",
      invalidIndicators: "invalid_indicators",
    }),
  ),
) as unknown as Schema.Codec<Skipped>;

interface Uploaded {
  /** Number of domain indicators in the upload */
  domains?: number | null;
  /** Number of IP indicators in the upload */
  ips?: number | null;
  /** Number of URL indicators in the upload */
  urls?: number | null;
}
const Uploaded = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    domains: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    ips: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    urls: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Uploaded>;

interface LastUploadSummary {
  /** Net delta applied to feed indicators by this upload. Snapshot uploads emit both _\_added and _\_removed; delta-add emits only _\_added; delta-remove emits only _\_removed. */
  persisted?: {
    domainsAdded?: number | null;
    domainsRemoved?: number | null;
    ipsAdded?: number | null;
    ipsRemoved?: number | null;
    urlsAdded?: number | null;
    urlsRemoved?: number | null;
  } | null;
  /** Counts of indicators that were uploaded but did not reach QuickSilver, broken down by reason. */
  skipped?: {
    allowlistedDomains?: number | null;
    expiredIndicators?: number | null;
    invalidIndicators?: number | null;
  } | null;
  /** Indicator counts from the unified file the loader received */
  uploaded?: {
    domains?: number | null;
    ips?: number | null;
    urls?: number | null;
  } | null;
}
const LastUploadSummary = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    persisted: Schema.optional(Schema.Union([Persisted, Schema.Null])),
    skipped: Schema.optional(Schema.Union([Skipped, Schema.Null])),
    uploaded: Schema.optional(Schema.Union([Uploaded, Schema.Null])),
  }),
) as unknown as Schema.Codec<LastUploadSummary>;

interface ListIndicatorFeedsResponseResult {
  /** The unique identifier for the indicator feed */
  id?: number | null;
  /** The date and time when the data entry was created */
  createdOn?: string | null;
  /** The description of the example test */
  description?: string | null;
  /** Whether the indicator feed can be attributed to a provider */
  isAttributable?: boolean | null;
  /** Whether the indicator feed can be downloaded */
  isDownloadable?: boolean | null;
  /** Whether the indicator feed is exposed to customers */
  isPublic?: boolean | null;
  /** The date and time when the data entry was last modified */
  modifiedOn?: string | null;
  /** The name of the indicator feed */
  name?: string | null;
}
const ListIndicatorFeedsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isAttributable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isDownloadable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isPublic: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdOn: "created_on",
        description: "description",
        isAttributable: "is_attributable",
        isDownloadable: "is_downloadable",
        isPublic: "is_public",
        modifiedOn: "modified_on",
        name: "name",
      }),
    ),
  ) as unknown as Schema.Codec<ListIndicatorFeedsResponseResult>;

interface PermissionListResponseItem {
  /** The unique identifier for the indicator feed */
  id?: number | null;
  /** The description of the example test */
  description?: string | null;
  /** Whether the indicator feed can be attributed to a provider */
  isAttributable?: boolean | null;
  /** Whether the indicator feed can be downloaded */
  isDownloadable?: boolean | null;
  /** Whether the indicator feed is exposed to customers */
  isPublic?: boolean | null;
  /** The name of the indicator feed */
  name?: string | null;
}
const PermissionListResponseItem = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isAttributable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isDownloadable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isPublic: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        description: "description",
        isAttributable: "is_attributable",
        isDownloadable: "is_downloadable",
        isPublic: "is_public",
        name: "name",
      }),
    ),
) as unknown as Schema.Codec<PermissionListResponseItem>;

interface BelongsToRef {
  id?: string | null;
  country?: string | null;
  description?: string | null;
  /** Infrastructure type of this ASN. */
  type?: "hosting_provider" | "isp" | "organization" | (string & {}) | null;
  value?: string | null;
}
const BelongsToRef = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    country: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["hosting_provider", "isp", "organization"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<BelongsToRef>;

interface Ip {
  /** Specifies a reference to the autonomous systems (AS) that the IP address belongs to. */
  belongsToRef?: {
    id?: string | null;
    country?: string | null;
    description?: string | null;
    type?: "hosting_provider" | "isp" | "organization" | (string & {}) | null;
    value?: string | null;
  } | null;
  ip?: string | null;
  riskTypes?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
}
const Ip = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    belongsToRef: Schema.optional(Schema.Union([BelongsToRef, Schema.Null])),
    ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    riskTypes: Schema.optional(
      Schema.Union([Schema.Array(ContentCategory), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      belongsToRef: "belongs_to_ref",
      ip: "ip",
      riskTypes: "risk_types",
    }),
  ),
) as unknown as Schema.Codec<Ip>;

interface ListSinkholesResponseResult {
  /** The unique identifier for the sinkhole. */
  id?: string | null;
  /** The account tag that owns this sinkhole. */
  accountTag?: string | null;
  /** The date and time when the sinkhole was created. */
  createdOn?: string | null;
  /** The date and time when the sinkhole was last modified. */
  modifiedOn?: string | null;
  /** The name of the sinkhole. */
  name?: string | null;
  /** The name of the R2 bucket to store results. */
  r2Bucket?: string | null;
  /** The id of the R2 instance. */
  r2Id?: string | null;
}
const ListSinkholesResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      accountTag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      r2Bucket: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      r2Id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        accountTag: "account_tag",
        createdOn: "created_on",
        modifiedOn: "modified_on",
        name: "name",
        r2Bucket: "r2_bucket",
        r2Id: "r2_id",
      }),
    ),
) as unknown as Schema.Codec<ListSinkholesResponseResult>;

// =============================================================================
// Asn
// =============================================================================

export interface GetAsnRequest {
  /** Identifier. */
  accountId: string;
  asn: string;
}

export const GetAsnRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    asn: Schema.String.pipe(T.HttpPath("asn")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/intel/asn/{asn}" }),
  ),
) as unknown as Schema.Codec<GetAsnRequest>;

export type GetAsnResponse = number;

export const GetAsnResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Number.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetAsnResponse>;

export type GetAsnError = DefaultErrors;

export const getAsn: API.OperationMethod<
  GetAsnRequest,
  GetAsnResponse,
  GetAsnError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAsnRequest,
  output: GetAsnResponse,
  errors: [],
}));

// =============================================================================
// AsnSubnet
// =============================================================================

export interface GetAsnSubnetRequest {
  /** Identifier. */
  accountId: string;
  asn: string;
}

export const GetAsnSubnetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      asn: Schema.String.pipe(T.HttpPath("asn")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/asn/{asn}/subnets",
      }),
    ),
) as unknown as Schema.Codec<GetAsnSubnetRequest>;

export interface GetAsnSubnetResponse {
  asn?: number | null;
  /** Total results returned based on your search parameters. */
  count?: number | null;
  ipCountTotal?: number | null;
  /** Current page within paginated list of results. */
  page?: number | null;
  /** Number of results per page of results. */
  perPage?: number | null;
  subnets?: string[] | null;
}

export const GetAsnSubnetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      asn: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      ipCountTotal: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      perPage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      subnets: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        asn: "asn",
        count: "count",
        ipCountTotal: "ip_count_total",
        page: "page",
        perPage: "per_page",
        subnets: "subnets",
      }),
    ),
) as unknown as Schema.Codec<GetAsnSubnetResponse>;

export type GetAsnSubnetError = DefaultErrors;

export const getAsnSubnet: API.OperationMethod<
  GetAsnSubnetRequest,
  GetAsnSubnetResponse,
  GetAsnSubnetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAsnSubnetRequest,
  output: GetAsnSubnetResponse,
  errors: [],
}));

// =============================================================================
// AttackSurfaceReportIssue
// =============================================================================

export interface ListAttackSurfaceReportIssuesRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param */
  dismissed?: boolean;
  /** Query param */
  issueClass?: string[];
  /** Query param */
  issueClassNeq?: string[];
  /** Query param */
  issueType?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  issueTypeNeq?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  product?: string[];
  /** Query param */
  productNeq?: string[];
  /** Query param */
  severity?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  severityNeq?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  subject?: string[];
  /** Query param */
  subjectNeq?: string[];
}

export const ListAttackSurfaceReportIssuesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      dismissed: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("dismissed")),
      issueClass: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("issue_class"),
      ),
      issueClassNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("issue_class~neq"),
      ),
      issueType: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "compliance_violation",
              "email_security",
              "exposed_infrastructure",
              "insecure_configuration",
              "weak_authentication",
              "configuration_suggestion",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("issue_type")),
      issueTypeNeq: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "compliance_violation",
              "email_security",
              "exposed_infrastructure",
              "insecure_configuration",
              "weak_authentication",
              "configuration_suggestion",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("issue_type~neq")),
      product: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("product"),
      ),
      productNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("product~neq"),
      ),
      severity: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["low", "moderate", "critical"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("severity")),
      severityNeq: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["low", "moderate", "critical"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("severity~neq")),
      subject: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("subject"),
      ),
      subjectNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("subject~neq"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/attack-surface-report/issues",
      }),
    ),
  ) as unknown as Schema.Codec<ListAttackSurfaceReportIssuesRequest>;

export interface ListAttackSurfaceReportIssuesResponse {
  result: {
    items?:
      | {
          count?: number | null;
          issues?:
            | {
                id?: string | null;
                dismissed?: boolean | null;
                hasExtendedContext?: boolean | null;
                issueClass?: string | null;
                issueType?:
                  | "compliance_violation"
                  | "email_security"
                  | "exposed_infrastructure"
                  | "insecure_configuration"
                  | "weak_authentication"
                  | "configuration_suggestion"
                  | (string & {})
                  | null;
                payload?: {
                  detectionMethod?: string | null;
                  zoneTag?: string | null;
                } | null;
                resolveLink?: string | null;
                resolveText?: string | null;
                severity?:
                  | "Low"
                  | "Moderate"
                  | "Critical"
                  | (string & {})
                  | null;
                since?: string | null;
                status?: "active" | "resolved" | (string & {}) | null;
                subject?: string | null;
                timestamp?: string | null;
                userClassification?:
                  | "false_positive"
                  | "accept_risk"
                  | "other"
                  | null;
              }[]
            | null;
          page?: number | null;
          perPage?: number | null;
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

export const ListAttackSurfaceReportIssuesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: ListAttackSurfaceReportIssuesResponseResult,
      resultInfo: Schema.optional(
        Schema.Union([
          ListAttackSurfaceReportIssuesResponseResultInfo,
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListAttackSurfaceReportIssuesResponse>;

export type ListAttackSurfaceReportIssuesError = DefaultErrors;

export const listAttackSurfaceReportIssues: API.PaginatedOperationMethod<
  ListAttackSurfaceReportIssuesRequest,
  ListAttackSurfaceReportIssuesResponse,
  ListAttackSurfaceReportIssuesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListAttackSurfaceReportIssuesRequest,
  output: ListAttackSurfaceReportIssuesResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result.items",
    pageSize: "perPage",
  } as const,
}));

export interface ClassAttackSurfaceReportIssueRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param */
  dismissed?: boolean;
  /** Query param */
  issueClass?: string[];
  /** Query param */
  issueClassNeq?: string[];
  /** Query param */
  issueType?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  issueTypeNeq?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  product?: string[];
  /** Query param */
  productNeq?: string[];
  /** Query param */
  severity?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  severityNeq?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  subject?: string[];
  /** Query param */
  subjectNeq?: string[];
}

export const ClassAttackSurfaceReportIssueRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      dismissed: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("dismissed")),
      issueClass: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("issue_class"),
      ),
      issueClassNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("issue_class~neq"),
      ),
      issueType: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "compliance_violation",
              "email_security",
              "exposed_infrastructure",
              "insecure_configuration",
              "weak_authentication",
              "configuration_suggestion",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("issue_type")),
      issueTypeNeq: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "compliance_violation",
              "email_security",
              "exposed_infrastructure",
              "insecure_configuration",
              "weak_authentication",
              "configuration_suggestion",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("issue_type~neq")),
      product: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("product"),
      ),
      productNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("product~neq"),
      ),
      severity: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["low", "moderate", "critical"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("severity")),
      severityNeq: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["low", "moderate", "critical"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("severity~neq")),
      subject: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("subject"),
      ),
      subjectNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("subject~neq"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/attack-surface-report/issues/class",
      }),
    ),
  ) as unknown as Schema.Codec<ClassAttackSurfaceReportIssueRequest>;

export type ClassAttackSurfaceReportIssueResponse = {
  count?: number | null;
  value?: string | null;
}[];

export const ClassAttackSurfaceReportIssueResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(IssueClassResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ClassAttackSurfaceReportIssueResponse>;

export type ClassAttackSurfaceReportIssueError = DefaultErrors;

export const classAttackSurfaceReportIssue: API.OperationMethod<
  ClassAttackSurfaceReportIssueRequest,
  ClassAttackSurfaceReportIssueResponse,
  ClassAttackSurfaceReportIssueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClassAttackSurfaceReportIssueRequest,
  output: ClassAttackSurfaceReportIssueResponse,
  errors: [],
}));

export interface DismissAttackSurfaceReportIssueRequest {
  issueId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param */
  dismiss?: boolean;
}

export const DismissAttackSurfaceReportIssueRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      issueId: Schema.String.pipe(T.HttpPath("issueId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      dismiss: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/intel/attack-surface-report/{issueId}/dismiss",
      }),
    ),
  ) as unknown as Schema.Codec<DismissAttackSurfaceReportIssueRequest>;

export interface DismissAttackSurfaceReportIssueResponse {
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

export const DismissAttackSurfaceReportIssueResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<DismissAttackSurfaceReportIssueResponse>;

export type DismissAttackSurfaceReportIssueError = DefaultErrors;

export const dismissAttackSurfaceReportIssue: API.OperationMethod<
  DismissAttackSurfaceReportIssueRequest,
  DismissAttackSurfaceReportIssueResponse,
  DismissAttackSurfaceReportIssueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DismissAttackSurfaceReportIssueRequest,
  output: DismissAttackSurfaceReportIssueResponse,
  errors: [],
}));

export interface SeverityAttackSurfaceReportIssueRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param */
  dismissed?: boolean;
  /** Query param */
  issueClass?: string[];
  /** Query param */
  issueClassNeq?: string[];
  /** Query param */
  issueType?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  issueTypeNeq?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  product?: string[];
  /** Query param */
  productNeq?: string[];
  /** Query param */
  severity?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  severityNeq?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  subject?: string[];
  /** Query param */
  subjectNeq?: string[];
}

export const SeverityAttackSurfaceReportIssueRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      dismissed: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("dismissed")),
      issueClass: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("issue_class"),
      ),
      issueClassNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("issue_class~neq"),
      ),
      issueType: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "compliance_violation",
              "email_security",
              "exposed_infrastructure",
              "insecure_configuration",
              "weak_authentication",
              "configuration_suggestion",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("issue_type")),
      issueTypeNeq: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "compliance_violation",
              "email_security",
              "exposed_infrastructure",
              "insecure_configuration",
              "weak_authentication",
              "configuration_suggestion",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("issue_type~neq")),
      product: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("product"),
      ),
      productNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("product~neq"),
      ),
      severity: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["low", "moderate", "critical"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("severity")),
      severityNeq: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["low", "moderate", "critical"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("severity~neq")),
      subject: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("subject"),
      ),
      subjectNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("subject~neq"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/attack-surface-report/issues/severity",
      }),
    ),
  ) as unknown as Schema.Codec<SeverityAttackSurfaceReportIssueRequest>;

export type SeverityAttackSurfaceReportIssueResponse = {
  count?: number | null;
  value?: string | null;
}[];

export const SeverityAttackSurfaceReportIssueResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(IssueClassResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<SeverityAttackSurfaceReportIssueResponse>;

export type SeverityAttackSurfaceReportIssueError = DefaultErrors;

export const severityAttackSurfaceReportIssue: API.OperationMethod<
  SeverityAttackSurfaceReportIssueRequest,
  SeverityAttackSurfaceReportIssueResponse,
  SeverityAttackSurfaceReportIssueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SeverityAttackSurfaceReportIssueRequest,
  output: SeverityAttackSurfaceReportIssueResponse,
  errors: [],
}));

export interface TypeAttackSurfaceReportIssueRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param */
  dismissed?: boolean;
  /** Query param */
  issueClass?: string[];
  /** Query param */
  issueClassNeq?: string[];
  /** Query param */
  issueType?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  issueTypeNeq?: (
    | "compliance_violation"
    | "email_security"
    | "exposed_infrastructure"
    | "insecure_configuration"
    | "weak_authentication"
    | "configuration_suggestion"
    | (string & {})
  )[];
  /** Query param */
  product?: string[];
  /** Query param */
  productNeq?: string[];
  /** Query param */
  severity?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  severityNeq?: ("low" | "moderate" | "critical" | (string & {}))[];
  /** Query param */
  subject?: string[];
  /** Query param */
  subjectNeq?: string[];
}

export const TypeAttackSurfaceReportIssueRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      dismissed: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("dismissed")),
      issueClass: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("issue_class"),
      ),
      issueClassNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("issue_class~neq"),
      ),
      issueType: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "compliance_violation",
              "email_security",
              "exposed_infrastructure",
              "insecure_configuration",
              "weak_authentication",
              "configuration_suggestion",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("issue_type")),
      issueTypeNeq: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "compliance_violation",
              "email_security",
              "exposed_infrastructure",
              "insecure_configuration",
              "weak_authentication",
              "configuration_suggestion",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("issue_type~neq")),
      product: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("product"),
      ),
      productNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("product~neq"),
      ),
      severity: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["low", "moderate", "critical"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("severity")),
      severityNeq: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals(["low", "moderate", "critical"]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("severity~neq")),
      subject: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("subject"),
      ),
      subjectNeq: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("subject~neq"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/attack-surface-report/issues/type",
      }),
    ),
  ) as unknown as Schema.Codec<TypeAttackSurfaceReportIssueRequest>;

export type TypeAttackSurfaceReportIssueResponse = {
  count?: number | null;
  value?: string | null;
}[];

export const TypeAttackSurfaceReportIssueResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(IssueClassResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<TypeAttackSurfaceReportIssueResponse>;

export type TypeAttackSurfaceReportIssueError = DefaultErrors;

export const typeAttackSurfaceReportIssue: API.OperationMethod<
  TypeAttackSurfaceReportIssueRequest,
  TypeAttackSurfaceReportIssueResponse,
  TypeAttackSurfaceReportIssueError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: TypeAttackSurfaceReportIssueRequest,
  output: TypeAttackSurfaceReportIssueResponse,
  errors: [],
}));

// =============================================================================
// AttackSurfaceReportIssueType
// =============================================================================

export interface GetAttackSurfaceReportIssueTypeRequest {
  /** Identifier. */
  accountId: string;
}

export const GetAttackSurfaceReportIssueTypeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/attack-surface-report/issue-types",
      }),
    ),
  ) as unknown as Schema.Codec<GetAttackSurfaceReportIssueTypeRequest>;

export interface GetAttackSurfaceReportIssueTypeResponse {
  result: string[];
}

export const GetAttackSurfaceReportIssueTypeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.String),
    }),
  ) as unknown as Schema.Codec<GetAttackSurfaceReportIssueTypeResponse>;

export type GetAttackSurfaceReportIssueTypeError = DefaultErrors;

export const getAttackSurfaceReportIssueType: API.PaginatedOperationMethod<
  GetAttackSurfaceReportIssueTypeRequest,
  GetAttackSurfaceReportIssueTypeResponse,
  GetAttackSurfaceReportIssueTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetAttackSurfaceReportIssueTypeRequest,
  output: GetAttackSurfaceReportIssueTypeResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Dns
// =============================================================================

export interface ListDnsRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param */
  ipv4?: string;
  /** Query param */
  startEndParams?: { end?: string; start?: string };
}

export const ListDnsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
    perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    ipv4: Schema.optional(Schema.String).pipe(T.HttpQuery("ipv4")),
    startEndParams: Schema.optional(
      Schema.Struct({
        end: Schema.optional(Schema.String),
        start: Schema.optional(Schema.String),
      }),
    ).pipe(T.HttpQuery("start_end_params")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/intel/dns" })),
) as unknown as Schema.Codec<ListDnsRequest>;

export interface ListDnsResponse {
  result: {
    items?:
      | {
          count?: number | null;
          page?: number | null;
          perPage?: number | null;
          reverseRecords?:
            | {
                firstSeen?: string | null;
                hostname?: string | null;
                lastSeen?: string | null;
              }[]
            | null;
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

export const ListDnsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    result: ListDnsResponseResult,
    resultInfo: Schema.optional(
      Schema.Union([
        ListAttackSurfaceReportIssuesResponseResultInfo,
        Schema.Null,
      ]),
    ),
  }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListDnsResponse>;

export type ListDnsError = DefaultErrors;

export const listDns: API.PaginatedOperationMethod<
  ListDnsRequest,
  ListDnsResponse,
  ListDnsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDnsRequest,
  output: ListDnsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result.items",
    pageSize: "perPage",
  } as const,
}));

// =============================================================================
// Domain
// =============================================================================

export interface GetDomainRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param */
  domain?: string;
  /** Query param: Skip DNS resolution lookups for faster response. */
  skipDns?: boolean;
  /** Query param: Skip the domain ranking lookup for faster responses. Defaults to `false` (ranking is included). Set to `true` to opt out — primarily used by callers like Cloudflare Radar that need to avo */
  skipRanking?: boolean;
}

export const GetDomainRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    domain: Schema.optional(Schema.String).pipe(T.HttpQuery("domain")),
    skipDns: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("skip_dns")),
    skipRanking: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("skip_ranking"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/intel/domain" }),
  ),
) as unknown as Schema.Codec<GetDomainRequest>;

export interface GetDomainResponse {
  /** Additional information related to the host name. */
  additionalInformation?: { suspectedMalwareFamily?: string | null } | null;
  /** Application that the hostname belongs to. */
  application?: { id?: number | null; name?: string | null } | null;
  contentCategories?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
  domain?: string | null;
  inheritedContentCategories?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
  /** Domain from which `inherited_content_categories` and `inherited_risk_types` are inherited, if applicable. */
  inheritedFrom?: string | null;
  inheritedRiskTypes?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
  /** Global Cloudflare 100k ranking for the last 30 days, if available for the hostname. The top ranked domain is 1, the lowest ranked domain is 100,000. */
  popularityRank?: number | null;
  /** Specifies a list of references to one or more IP addresses or domain names that the domain name currently resolves to. */
  resolvesToRefs?: { id?: string | null; value?: string | null }[] | null;
  /** Hostname risk score, which is a value between 0 (lowest risk) to 1 (highest risk). */
  riskScore?: number | null;
  riskTypes?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
}

export const GetDomainResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      additionalInformation: Schema.optional(
        Schema.Union([AdditionalInformation, Schema.Null]),
      ),
      application: Schema.optional(Schema.Union([Application, Schema.Null])),
      contentCategories: Schema.optional(
        Schema.Union([Schema.Array(ContentCategory), Schema.Null]),
      ),
      domain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      inheritedContentCategories: Schema.optional(
        Schema.Union([Schema.Array(ContentCategory), Schema.Null]),
      ),
      inheritedFrom: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      inheritedRiskTypes: Schema.optional(
        Schema.Union([Schema.Array(ContentCategory), Schema.Null]),
      ),
      popularityRank: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      resolvesToRefs: Schema.optional(
        Schema.Union([Schema.Array(ResolvesToRef), Schema.Null]),
      ),
      riskScore: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      riskTypes: Schema.optional(
        Schema.Union([Schema.Array(ContentCategory), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          additionalInformation: "additional_information",
          application: "application",
          contentCategories: "content_categories",
          domain: "domain",
          inheritedContentCategories: "inherited_content_categories",
          inheritedFrom: "inherited_from",
          inheritedRiskTypes: "inherited_risk_types",
          popularityRank: "popularity_rank",
          resolvesToRefs: "resolves_to_refs",
          riskScore: "risk_score",
          riskTypes: "risk_types",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetDomainResponse>;

export type GetDomainError = DefaultErrors;

export const getDomain: API.OperationMethod<
  GetDomainRequest,
  GetDomainResponse,
  GetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDomainRequest,
  output: GetDomainResponse,
  errors: [],
}));

// =============================================================================
// DomainBulk
// =============================================================================

export interface GetDomainBulkRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param: Accepts multiple values like `?domain=cloudflare.com&domain=example.com`. */
  domain?: string[];
  /** Query param: Whether to include domain ranking data in the response. Defaults to `false` — ranking lookups are expensive at bulk scale and most callers do not need them. Set to `true` to opt in. This  */
  includeRanking?: boolean;
  /** Query param:  Deprecated.  Previously controlled whether the ranking lookup was skipped (defaulted to `false`, meaning ranking ran). The endpoint's default behavior is being flipped — ranking is now o */
  skipRanking?: boolean;
}

export const GetDomainBulkRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      domain: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("domain"),
      ),
      includeRanking: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_ranking"),
      ),
      skipRanking: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("skip_ranking"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/domain/bulk",
      }),
    ),
) as unknown as Schema.Codec<GetDomainBulkRequest>;

export type GetDomainBulkResponse = {
  additionalInformation?: { suspectedMalwareFamily?: string | null } | null;
  application?: { id?: number | null; name?: string | null } | null;
  contentCategories?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
  domain?: string | null;
  inheritedContentCategories?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
  inheritedFrom?: string | null;
  inheritedRiskTypes?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
  popularityRank?: number | null;
  riskScore?: number | null;
  riskTypes?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
}[];

export const GetDomainBulkResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Array(BulkGetResponseItem).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetDomainBulkResponse>;

export type GetDomainBulkError = DefaultErrors;

export const getDomainBulk: API.OperationMethod<
  GetDomainBulkRequest,
  GetDomainBulkResponse,
  GetDomainBulkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDomainBulkRequest,
  output: GetDomainBulkResponse,
  errors: [],
}));

// =============================================================================
// DomainHistory
// =============================================================================

export interface GetDomainHistoryRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param */
  domain?: string;
}

export const GetDomainHistoryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      domain: Schema.optional(Schema.String).pipe(T.HttpQuery("domain")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/domain-history",
      }),
    ),
  ) as unknown as Schema.Codec<GetDomainHistoryRequest>;

export type GetDomainHistoryResponse = {
  categorizations?:
    | {
        categories?: { id?: number | null; name?: string | null }[] | null;
        end?: string | null;
        start?: string | null;
      }[]
    | null;
  domain?: string | null;
}[];

export const GetDomainHistoryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(DomainHistory).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetDomainHistoryResponse>;

export type GetDomainHistoryError = DefaultErrors;

export const getDomainHistory: API.OperationMethod<
  GetDomainHistoryRequest,
  GetDomainHistoryResponse,
  GetDomainHistoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDomainHistoryRequest,
  output: GetDomainHistoryResponse,
  errors: [],
}));

// =============================================================================
// IndicatorFeed
// =============================================================================

export interface GetIndicatorFeedRequest {
  feedId: number;
  /** Identifier */
  accountId: string;
}

export const GetIndicatorFeedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      feedId: Schema.Number.pipe(T.HttpPath("feedId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/indicator-feeds/{feedId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetIndicatorFeedRequest>;

export interface GetIndicatorFeedResponse {
  /** The unique identifier for the indicator feed */
  id?: number | null;
  /** The date and time when the data entry was created */
  createdOn?: string | null;
  /** The description of the example test */
  description?: string | null;
  /** Whether the indicator feed can be attributed to a provider */
  isAttributable?: boolean | null;
  /** Whether the indicator feed can be downloaded */
  isDownloadable?: boolean | null;
  /** Whether the indicator feed is exposed to customers */
  isPublic?: boolean | null;
  /** Summary of indicator counts from the last successful upload to this feed. Populated by the custom-threat-feeds loader at the end of each successful load. Absent (omitted) when no upload has completed  */
  lastUploadSummary?: {
    persisted?: {
      domainsAdded?: number | null;
      domainsRemoved?: number | null;
      ipsAdded?: number | null;
      ipsRemoved?: number | null;
      urlsAdded?: number | null;
      urlsRemoved?: number | null;
    } | null;
    skipped?: {
      allowlistedDomains?: number | null;
      expiredIndicators?: number | null;
      invalidIndicators?: number | null;
    } | null;
    uploaded?: {
      domains?: number | null;
      ips?: number | null;
      urls?: number | null;
    } | null;
  } | null;
  /** Human-readable error message describing why the latest upload failed. Populated only when `latest_upload_status` is `Error`. Returns one of a small fixed set of category-level messages (invalid domain */
  latestUploadError?: string | null;
  /** Status of the latest snapshot uploaded */
  latestUploadStatus?:
    | "Mirroring"
    | "Unifying"
    | "Loading"
    | "Provisioning"
    | "Complete"
    | "Error"
    | (string & {})
    | null;
  /** The date and time when the data entry was last modified */
  modifiedOn?: string | null;
  /** The name of the indicator feed */
  name?: string | null;
  /** The unique identifier for the provider */
  providerId?: number | null;
  /** The provider of the indicator feed */
  providerName?: string | null;
}

export const GetIndicatorFeedResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isAttributable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isDownloadable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isPublic: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      lastUploadSummary: Schema.optional(
        Schema.Union([LastUploadSummary, Schema.Null]),
      ),
      latestUploadError: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      latestUploadStatus: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "Mirroring",
              "Unifying",
              "Loading",
              "Provisioning",
              "Complete",
              "Error",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      providerId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      providerName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          description: "description",
          isAttributable: "is_attributable",
          isDownloadable: "is_downloadable",
          isPublic: "is_public",
          lastUploadSummary: "last_upload_summary",
          latestUploadError: "latest_upload_error",
          latestUploadStatus: "latest_upload_status",
          modifiedOn: "modified_on",
          name: "name",
          providerId: "provider_id",
          providerName: "provider_name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetIndicatorFeedResponse>;

export type GetIndicatorFeedError =
  | DefaultErrors
  | IndicatorFeedNotFound
  | Forbidden;

export const getIndicatorFeed: API.OperationMethod<
  GetIndicatorFeedRequest,
  GetIndicatorFeedResponse,
  GetIndicatorFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIndicatorFeedRequest,
  output: GetIndicatorFeedResponse,
  errors: [IndicatorFeedNotFound, Forbidden],
}));

export interface ListIndicatorFeedsRequest {
  /** Identifier */
  accountId: string;
}

export const ListIndicatorFeedsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/indicator-feeds",
      }),
    ),
  ) as unknown as Schema.Codec<ListIndicatorFeedsRequest>;

export interface ListIndicatorFeedsResponse {
  result: {
    id?: number | null;
    createdOn?: string | null;
    description?: string | null;
    isAttributable?: boolean | null;
    isDownloadable?: boolean | null;
    isPublic?: boolean | null;
    modifiedOn?: string | null;
    name?: string | null;
  }[];
}

export const ListIndicatorFeedsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListIndicatorFeedsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListIndicatorFeedsResponse>;

export type ListIndicatorFeedsError = DefaultErrors | Forbidden;

export const listIndicatorFeeds: API.PaginatedOperationMethod<
  ListIndicatorFeedsRequest,
  ListIndicatorFeedsResponse,
  ListIndicatorFeedsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListIndicatorFeedsRequest,
  output: ListIndicatorFeedsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateIndicatorFeedRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Body param: The description of the example test */
  description?: string;
  /** Body param: The name of the indicator feed */
  name?: string;
}

export const CreateIndicatorFeedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/intel/indicator-feeds",
      }),
    ),
  ) as unknown as Schema.Codec<CreateIndicatorFeedRequest>;

export interface CreateIndicatorFeedResponse {
  /** The unique identifier for the indicator feed */
  id?: number | null;
  /** The date and time when the data entry was created */
  createdOn?: string | null;
  /** The description of the example test */
  description?: string | null;
  /** Whether the indicator feed can be attributed to a provider */
  isAttributable?: boolean | null;
  /** Whether the indicator feed can be downloaded */
  isDownloadable?: boolean | null;
  /** Whether the indicator feed is exposed to customers */
  isPublic?: boolean | null;
  /** The date and time when the data entry was last modified */
  modifiedOn?: string | null;
  /** The name of the indicator feed */
  name?: string | null;
}

export const CreateIndicatorFeedResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isAttributable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isDownloadable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isPublic: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          description: "description",
          isAttributable: "is_attributable",
          isDownloadable: "is_downloadable",
          isPublic: "is_public",
          modifiedOn: "modified_on",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateIndicatorFeedResponse>;

export type CreateIndicatorFeedError =
  | DefaultErrors
  | IndicatorFeedsNotEntitled
  | Forbidden;

export const createIndicatorFeed: API.OperationMethod<
  CreateIndicatorFeedRequest,
  CreateIndicatorFeedResponse,
  CreateIndicatorFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateIndicatorFeedRequest,
  output: CreateIndicatorFeedResponse,
  errors: [IndicatorFeedsNotEntitled, Forbidden],
}));

export interface UpdateIndicatorFeedRequest {
  feedId: number;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: The new description of the feed */
  description?: string;
  /** Body param: The new is_attributable value of the feed */
  isAttributable?: boolean;
  /** Body param: The new is_downloadable value of the feed */
  isDownloadable?: boolean;
  /** Body param: The new is_public value of the feed */
  isPublic?: boolean;
  /** Body param: The new name of the feed */
  name?: string;
}

export const UpdateIndicatorFeedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      feedId: Schema.Number.pipe(T.HttpPath("feedId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      description: Schema.optional(Schema.String),
      isAttributable: Schema.optional(Schema.Boolean),
      isDownloadable: Schema.optional(Schema.Boolean),
      isPublic: Schema.optional(Schema.Boolean),
      name: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        description: "description",
        isAttributable: "is_attributable",
        isDownloadable: "is_downloadable",
        isPublic: "is_public",
        name: "name",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/intel/indicator-feeds/{feedId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateIndicatorFeedRequest>;

export interface UpdateIndicatorFeedResponse {
  /** The unique identifier for the indicator feed */
  id?: number | null;
  /** The date and time when the data entry was created */
  createdOn?: string | null;
  /** The description of the example test */
  description?: string | null;
  /** Whether the indicator feed can be attributed to a provider */
  isAttributable?: boolean | null;
  /** Whether the indicator feed can be downloaded */
  isDownloadable?: boolean | null;
  /** Whether the indicator feed is exposed to customers */
  isPublic?: boolean | null;
  /** The date and time when the data entry was last modified */
  modifiedOn?: string | null;
  /** The name of the indicator feed */
  name?: string | null;
}

export const UpdateIndicatorFeedResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      isAttributable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isDownloadable: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      isPublic: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          description: "description",
          isAttributable: "is_attributable",
          isDownloadable: "is_downloadable",
          isPublic: "is_public",
          modifiedOn: "modified_on",
          name: "name",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateIndicatorFeedResponse>;

export type UpdateIndicatorFeedError =
  | DefaultErrors
  | IndicatorFeedNotFound
  | Forbidden;

export const updateIndicatorFeed: API.OperationMethod<
  UpdateIndicatorFeedRequest,
  UpdateIndicatorFeedResponse,
  UpdateIndicatorFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateIndicatorFeedRequest,
  output: UpdateIndicatorFeedResponse,
  errors: [IndicatorFeedNotFound, Forbidden],
}));

export interface DataIndicatorFeedRequest {
  feedId: number;
  /** Identifier */
  accountId: string;
}

export const DataIndicatorFeedRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      feedId: Schema.Number.pipe(T.HttpPath("feedId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/indicator-feeds/{feedId}/data",
      }),
    ),
  ) as unknown as Schema.Codec<DataIndicatorFeedRequest>;

export type DataIndicatorFeedResponse = string;

export const DataIndicatorFeedResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
    () => Schema.String,
  ) as unknown as Schema.Codec<DataIndicatorFeedResponse>;

export type DataIndicatorFeedError = DefaultErrors;

export const dataIndicatorFeed: API.OperationMethod<
  DataIndicatorFeedRequest,
  DataIndicatorFeedResponse,
  DataIndicatorFeedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DataIndicatorFeedRequest,
  output: DataIndicatorFeedResponse,
  errors: [],
}));

// =============================================================================
// IndicatorFeedPermission
// =============================================================================

export interface ListIndicatorFeedPermissionsRequest {
  /** Identifier */
  accountId: string;
}

export const ListIndicatorFeedPermissionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/intel/indicator-feeds/permissions/view",
      }),
    ),
  ) as unknown as Schema.Codec<ListIndicatorFeedPermissionsRequest>;

export type ListIndicatorFeedPermissionsResponse = {
  id?: number | null;
  description?: string | null;
  isAttributable?: boolean | null;
  isDownloadable?: boolean | null;
  isPublic?: boolean | null;
  name?: string | null;
}[];

export const ListIndicatorFeedPermissionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Array(PermissionListResponseItem).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListIndicatorFeedPermissionsResponse>;

export type ListIndicatorFeedPermissionsError = DefaultErrors | Forbidden;

export const listIndicatorFeedPermissions: API.OperationMethod<
  ListIndicatorFeedPermissionsRequest,
  ListIndicatorFeedPermissionsResponse,
  ListIndicatorFeedPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListIndicatorFeedPermissionsRequest,
  output: ListIndicatorFeedPermissionsResponse,
  errors: [Forbidden],
}));

export interface CreateIndicatorFeedPermissionRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Body param: The Cloudflare account tag of the account to change permissions on */
  accountTag?: string;
  /** Body param: The ID of the feed to add/remove permissions on */
  feedId?: number;
}

export const CreateIndicatorFeedPermissionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      accountTag: Schema.optional(Schema.String),
      feedId: Schema.optional(Schema.Number),
    }).pipe(
      Schema.encodeKeys({ accountTag: "account_tag", feedId: "feed_id" }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/intel/indicator-feeds/permissions/add",
      }),
    ),
  ) as unknown as Schema.Codec<CreateIndicatorFeedPermissionRequest>;

export interface CreateIndicatorFeedPermissionResponse {
  /** Whether the update succeeded or not */
  success?: boolean | null;
}

export const CreateIndicatorFeedPermissionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateIndicatorFeedPermissionResponse>;

export type CreateIndicatorFeedPermissionError =
  | DefaultErrors
  | IndicatorFeedNotFound
  | Forbidden;

export const createIndicatorFeedPermission: API.OperationMethod<
  CreateIndicatorFeedPermissionRequest,
  CreateIndicatorFeedPermissionResponse,
  CreateIndicatorFeedPermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateIndicatorFeedPermissionRequest,
  output: CreateIndicatorFeedPermissionResponse,
  errors: [IndicatorFeedNotFound, Forbidden],
}));

export interface DeleteIndicatorFeedPermissionRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Body param: The Cloudflare account tag of the account to change permissions on */
  accountTag?: string;
  /** Body param: The ID of the feed to add/remove permissions on */
  feedId?: number;
}

export const DeleteIndicatorFeedPermissionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      accountTag: Schema.optional(Schema.String),
      feedId: Schema.optional(Schema.Number),
    }).pipe(
      Schema.encodeKeys({ accountTag: "account_tag", feedId: "feed_id" }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/intel/indicator-feeds/permissions/remove",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteIndicatorFeedPermissionRequest>;

export interface DeleteIndicatorFeedPermissionResponse {
  /** Whether the update succeeded or not */
  success?: boolean | null;
}

export const DeleteIndicatorFeedPermissionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      success: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteIndicatorFeedPermissionResponse>;

export type DeleteIndicatorFeedPermissionError =
  | DefaultErrors
  | IndicatorFeedNotFound
  | Forbidden;

export const deleteIndicatorFeedPermission: API.OperationMethod<
  DeleteIndicatorFeedPermissionRequest,
  DeleteIndicatorFeedPermissionResponse,
  DeleteIndicatorFeedPermissionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteIndicatorFeedPermissionRequest,
  output: DeleteIndicatorFeedPermissionResponse,
  errors: [IndicatorFeedNotFound, Forbidden],
}));

// =============================================================================
// IndicatorFeedSnapshot
// =============================================================================

export interface PutIndicatorFeedSnapshotRequest {
  feedId: number;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: The file to upload. Either a plain STIX2/CRDF body or a gzipped one (recognised by `0x1f 0x8b` magic bytes or a `.gz` filename suffix). */
  source?: string;
}

export const PutIndicatorFeedSnapshotRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      feedId: Schema.Number.pipe(T.HttpPath("feedId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      source: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/intel/indicator-feeds/{feedId}/snapshot",
        contentType: "multipart",
      }),
    ),
  ) as unknown as Schema.Codec<PutIndicatorFeedSnapshotRequest>;

export interface PutIndicatorFeedSnapshotResponse {
  /** Feed id */
  fileId?: number | null;
  /** Name of the file unified in our system */
  filename?: string | null;
  /** Current status of upload, should be unified */
  status?: string | null;
}

export const PutIndicatorFeedSnapshotResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fileId: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      filename: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          fileId: "file_id",
          filename: "filename",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutIndicatorFeedSnapshotResponse>;

export type PutIndicatorFeedSnapshotError =
  | DefaultErrors
  | IndicatorFeedNotFound
  | Forbidden;

export const putIndicatorFeedSnapshot: API.OperationMethod<
  PutIndicatorFeedSnapshotRequest,
  PutIndicatorFeedSnapshotResponse,
  PutIndicatorFeedSnapshotError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutIndicatorFeedSnapshotRequest,
  output: PutIndicatorFeedSnapshotResponse,
  errors: [IndicatorFeedNotFound, Forbidden],
}));

// =============================================================================
// Ip
// =============================================================================

export interface GetIpRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Query param */
  ipv4?: string;
  /** Query param */
  ipv6?: string;
}

export const GetIpRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ipv4: Schema.optional(Schema.String).pipe(T.HttpQuery("ipv4")),
    ipv6: Schema.optional(Schema.String).pipe(T.HttpQuery("ipv6")),
  }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/intel/ip" })),
) as unknown as Schema.Codec<GetIpRequest>;

export type GetIpResponse = {
  belongsToRef?: {
    id?: string | null;
    country?: string | null;
    description?: string | null;
    type?: "hosting_provider" | "isp" | "organization" | (string & {}) | null;
    value?: string | null;
  } | null;
  ip?: string | null;
  riskTypes?:
    | {
        id?: number | null;
        name?: string | null;
        superCategoryId?: number | null;
      }[]
    | null;
}[];

export const GetIpResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Array(Ip).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetIpResponse>;

export type GetIpError = DefaultErrors;

export const getIp: API.OperationMethod<
  GetIpRequest,
  GetIpResponse,
  GetIpError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIpRequest,
  output: GetIpResponse,
  errors: [],
}));

// =============================================================================
// Miscategorization
// =============================================================================

export interface CreateMiscategorizationRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Content category IDs to add. */
  contentAdds?: number[];
  /** Body param: Content category IDs to remove. */
  contentRemoves?: number[];
  /** Body param */
  indicatorType?: "domain" | "ipv4" | "ipv6" | "url" | (string & {});
  /** Body param: Provide only if indicator_type is `ipv4` or `ipv6`. */
  ip?: string | null;
  /** Body param: Security category IDs to add. */
  securityAdds?: number[];
  /** Body param: Security category IDs to remove. */
  securityRemoves?: number[];
  /** Body param: Provide only if indicator_type is `domain` or `url`. Example if indicator_type is `domain`: `example.com`. Example if indicator_type is `url`: `https://example.com/news/`. */
  url?: string;
}

export const CreateMiscategorizationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      contentAdds: Schema.optional(Schema.Array(Schema.Number)),
      contentRemoves: Schema.optional(Schema.Array(Schema.Number)),
      indicatorType: Schema.optional(
        Schema.Union([
          Schema.Literals(["domain", "ipv4", "ipv6", "url"]),
          Schema.String,
        ]),
      ),
      ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      securityAdds: Schema.optional(Schema.Array(Schema.Number)),
      securityRemoves: Schema.optional(Schema.Array(Schema.Number)),
      url: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        contentAdds: "content_adds",
        contentRemoves: "content_removes",
        indicatorType: "indicator_type",
        ip: "ip",
        securityAdds: "security_adds",
        securityRemoves: "security_removes",
        url: "url",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/intel/miscategorization",
      }),
    ),
  ) as unknown as Schema.Codec<CreateMiscategorizationRequest>;

export interface CreateMiscategorizationResponse {
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

export const CreateMiscategorizationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<CreateMiscategorizationResponse>;

export type CreateMiscategorizationError = DefaultErrors;

export const createMiscategorization: API.OperationMethod<
  CreateMiscategorizationRequest,
  CreateMiscategorizationResponse,
  CreateMiscategorizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateMiscategorizationRequest,
  output: CreateMiscategorizationResponse,
  errors: [],
}));

// =============================================================================
// Sinkhole
// =============================================================================

export interface ListSinkholesRequest {
  /** Identifier. */
  accountId: string;
}

export const ListSinkholesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/intel/sinkholes" }),
    ),
) as unknown as Schema.Codec<ListSinkholesRequest>;

export interface ListSinkholesResponse {
  result: {
    id?: string | null;
    accountTag?: string | null;
    createdOn?: string | null;
    modifiedOn?: string | null;
    name?: string | null;
    r2Bucket?: string | null;
    r2Id?: string | null;
  }[];
}

export const ListSinkholesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListSinkholesResponseResult),
    }),
) as unknown as Schema.Codec<ListSinkholesResponse>;

export type ListSinkholesError = DefaultErrors;

export const listSinkholes: API.PaginatedOperationMethod<
  ListSinkholesRequest,
  ListSinkholesResponse,
  ListSinkholesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSinkholesRequest,
  output: ListSinkholesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Whoi
// =============================================================================

export interface GetWhoiRequest {
  /** Path param: Use to uniquely identify or reference the resource. */
  accountId: string;
  /** Query param */
  domain?: string;
}

export const GetWhoiRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    domain: Schema.optional(Schema.String).pipe(T.HttpQuery("domain")),
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/intel/whois" }),
  ),
) as unknown as Schema.Codec<GetWhoiRequest>;

export interface GetWhoiResponse {
  dnssec: boolean;
  domain: string;
  extension: string;
  found: boolean;
  nameservers: string[];
  punycode: string;
  registrant: string;
  registrar: string;
  id?: string | null;
  administrativeCity?: string | null;
  administrativeCountry?: string | null;
  administrativeEmail?: string | null;
  administrativeFax?: string | null;
  administrativeFaxExt?: string | null;
  administrativeId?: string | null;
  administrativeName?: string | null;
  administrativeOrg?: string | null;
  administrativePhone?: string | null;
  administrativePhoneExt?: string | null;
  administrativePostalCode?: string | null;
  administrativeProvince?: string | null;
  administrativeReferralUrl?: string | null;
  administrativeStreet?: string | null;
  billingCity?: string | null;
  billingCountry?: string | null;
  billingEmail?: string | null;
  billingFax?: string | null;
  billingFaxExt?: string | null;
  billingId?: string | null;
  billingName?: string | null;
  billingOrg?: string | null;
  billingPhone?: string | null;
  billingPhoneExt?: string | null;
  billingPostalCode?: string | null;
  billingProvince?: string | null;
  billingReferralUrl?: string | null;
  billingStreet?: string | null;
  createdDate?: string | null;
  createdDateRaw?: string | null;
  expirationDate?: string | null;
  expirationDateRaw?: string | null;
  registrantCity?: string | null;
  registrantCountry?: string | null;
  registrantEmail?: string | null;
  registrantFax?: string | null;
  registrantFaxExt?: string | null;
  registrantId?: string | null;
  registrantName?: string | null;
  registrantOrg?: string | null;
  registrantPhone?: string | null;
  registrantPhoneExt?: string | null;
  registrantPostalCode?: string | null;
  registrantProvince?: string | null;
  registrantReferralUrl?: string | null;
  registrantStreet?: string | null;
  registrarCity?: string | null;
  registrarCountry?: string | null;
  registrarEmail?: string | null;
  registrarFax?: string | null;
  registrarFaxExt?: string | null;
  registrarId?: string | null;
  registrarName?: string | null;
  registrarOrg?: string | null;
  registrarPhone?: string | null;
  registrarPhoneExt?: string | null;
  registrarPostalCode?: string | null;
  registrarProvince?: string | null;
  registrarReferralUrl?: string | null;
  registrarStreet?: string | null;
  status?: string[] | null;
  technicalCity?: string | null;
  technicalCountry?: string | null;
  technicalEmail?: string | null;
  technicalFax?: string | null;
  technicalFaxExt?: string | null;
  technicalId?: string | null;
  technicalName?: string | null;
  technicalOrg?: string | null;
  technicalPhone?: string | null;
  technicalPhoneExt?: string | null;
  technicalPostalCode?: string | null;
  technicalProvince?: string | null;
  technicalReferralUrl?: string | null;
  technicalStreet?: string | null;
  updatedDate?: string | null;
  updatedDateRaw?: string | null;
  whoisServer?: string | null;
}

export const GetWhoiResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dnssec: Schema.Boolean,
    domain: Schema.String,
    extension: Schema.String,
    found: Schema.Boolean,
    nameservers: Schema.Array(Schema.String),
    punycode: Schema.String,
    registrant: Schema.String,
    registrar: Schema.String,
    id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    administrativeCity: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeCountry: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeFax: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeFaxExt: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeName: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeOrg: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativePhone: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativePhoneExt: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativePostalCode: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeProvince: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeReferralUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    administrativeStreet: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    billingCity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    billingCountry: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    billingEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    billingFax: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    billingFaxExt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    billingId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    billingName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    billingOrg: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    billingPhone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    billingPhoneExt: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    billingPostalCode: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    billingProvince: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    billingReferralUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    billingStreet: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    createdDateRaw: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expirationDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    expirationDateRaw: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrantCity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrantCountry: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrantEmail: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrantFax: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrantFaxExt: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrantId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrantName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrantOrg: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrantPhone: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrantPhoneExt: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrantPostalCode: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrantProvince: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrantReferralUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrantStreet: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrarCity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrarCountry: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrarEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrarFax: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrarFaxExt: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrarId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrarName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrarOrg: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrarPhone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    registrarPhoneExt: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrarPostalCode: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrarProvince: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrarReferralUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    registrarStreet: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    status: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    technicalCity: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    technicalCountry: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    technicalEmail: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    technicalFax: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    technicalFaxExt: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    technicalId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    technicalName: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    technicalOrg: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    technicalPhone: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    technicalPhoneExt: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    technicalPostalCode: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    technicalProvince: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    technicalReferralUrl: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    technicalStreet: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    updatedDate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedDateRaw: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    whoisServer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        dnssec: "dnssec",
        domain: "domain",
        extension: "extension",
        found: "found",
        nameservers: "nameservers",
        punycode: "punycode",
        registrant: "registrant",
        registrar: "registrar",
        id: "id",
        administrativeCity: "administrative_city",
        administrativeCountry: "administrative_country",
        administrativeEmail: "administrative_email",
        administrativeFax: "administrative_fax",
        administrativeFaxExt: "administrative_fax_ext",
        administrativeId: "administrative_id",
        administrativeName: "administrative_name",
        administrativeOrg: "administrative_org",
        administrativePhone: "administrative_phone",
        administrativePhoneExt: "administrative_phone_ext",
        administrativePostalCode: "administrative_postal_code",
        administrativeProvince: "administrative_province",
        administrativeReferralUrl: "administrative_referral_url",
        administrativeStreet: "administrative_street",
        billingCity: "billing_city",
        billingCountry: "billing_country",
        billingEmail: "billing_email",
        billingFax: "billing_fax",
        billingFaxExt: "billing_fax_ext",
        billingId: "billing_id",
        billingName: "billing_name",
        billingOrg: "billing_org",
        billingPhone: "billing_phone",
        billingPhoneExt: "billing_phone_ext",
        billingPostalCode: "billing_postal_code",
        billingProvince: "billing_province",
        billingReferralUrl: "billing_referral_url",
        billingStreet: "billing_street",
        createdDate: "created_date",
        createdDateRaw: "created_date_raw",
        expirationDate: "expiration_date",
        expirationDateRaw: "expiration_date_raw",
        registrantCity: "registrant_city",
        registrantCountry: "registrant_country",
        registrantEmail: "registrant_email",
        registrantFax: "registrant_fax",
        registrantFaxExt: "registrant_fax_ext",
        registrantId: "registrant_id",
        registrantName: "registrant_name",
        registrantOrg: "registrant_org",
        registrantPhone: "registrant_phone",
        registrantPhoneExt: "registrant_phone_ext",
        registrantPostalCode: "registrant_postal_code",
        registrantProvince: "registrant_province",
        registrantReferralUrl: "registrant_referral_url",
        registrantStreet: "registrant_street",
        registrarCity: "registrar_city",
        registrarCountry: "registrar_country",
        registrarEmail: "registrar_email",
        registrarFax: "registrar_fax",
        registrarFaxExt: "registrar_fax_ext",
        registrarId: "registrar_id",
        registrarName: "registrar_name",
        registrarOrg: "registrar_org",
        registrarPhone: "registrar_phone",
        registrarPhoneExt: "registrar_phone_ext",
        registrarPostalCode: "registrar_postal_code",
        registrarProvince: "registrar_province",
        registrarReferralUrl: "registrar_referral_url",
        registrarStreet: "registrar_street",
        status: "status",
        technicalCity: "technical_city",
        technicalCountry: "technical_country",
        technicalEmail: "technical_email",
        technicalFax: "technical_fax",
        technicalFaxExt: "technical_fax_ext",
        technicalId: "technical_id",
        technicalName: "technical_name",
        technicalOrg: "technical_org",
        technicalPhone: "technical_phone",
        technicalPhoneExt: "technical_phone_ext",
        technicalPostalCode: "technical_postal_code",
        technicalProvince: "technical_province",
        technicalReferralUrl: "technical_referral_url",
        technicalStreet: "technical_street",
        updatedDate: "updated_date",
        updatedDateRaw: "updated_date_raw",
        whoisServer: "whois_server",
      }),
    )
    .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetWhoiResponse>;

export type GetWhoiError = DefaultErrors;

export const getWhoi: API.OperationMethod<
  GetWhoiRequest,
  GetWhoiResponse,
  GetWhoiError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetWhoiRequest,
  output: GetWhoiResponse,
  errors: [],
}));
