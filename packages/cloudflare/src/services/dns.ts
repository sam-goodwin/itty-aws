/**
 * Cloudflare DNS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service dns
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// =============================================================================
// Errors
// =============================================================================

export class AclNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AclNotFound>()("AclNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class DnsRecordAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DnsRecordAlreadyExists>()("DnsRecordAlreadyExists", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    { code: 81057 },
    { code: 81058 },
    { status: 400, message: { includes: "identical record already exists" } },
  ],
) {}

export class DnsSettingNotAvailable extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<DnsSettingNotAvailable>()("DnsSettingNotAvailable", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1003 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class IncomingZoneTransferNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<IncomingZoneTransferNotFound>()(
    "IncomingZoneTransferNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class InternalDnsNotAvailable extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InternalDnsNotAvailable>()(
    "InternalDnsNotAvailable",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1029 }],
) {}

export class OutgoingZoneTransferNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<OutgoingZoneTransferNotFound>()(
    "OutgoingZoneTransferNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class OutgoingZoneTransfersNotAllowed extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<OutgoingZoneTransfersNotAllowed>()(
    "OutgoingZoneTransfersNotAllowed",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 401 }],
) {}

export class PeerNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<PeerNotFound>()("PeerNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class TsigNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TsigNotFound>()("TsigNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class ViewNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ViewNotFound>()("ViewNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1015 }, { status: 404 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Data {
  /** Array of dimension values, representing the combination of dimension values corresponding to this row. */
  dimensions: string[];
  /** Array with one item per requested metric. Each item is a single value. */
  metrics: number[];
}
const Data = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dimensions: Schema.Array(Schema.String),
    metrics: Schema.Array(Schema.Number),
  }),
) as unknown as Schema.Codec<Data>;

interface Query {
  /** Array of dimension names. */
  dimensions: string[];
  /** Limit number of returned metrics. */
  limit: number;
  /** Array of metric names. */
  metrics: string[];
  /** Start date and time of requesting data period in ISO 8601 format. */
  since: string;
  /** End date and time of requesting data period in ISO 8601 format. */
  until: string;
  /** Segmentation filter in 'attribute operator value' format. */
  filters?: string | null;
  /** Array of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending). */
  sort?: string[] | null;
}
const Query = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dimensions: Schema.Array(Schema.String),
    limit: Schema.Number,
    metrics: Schema.Array(Schema.String),
    since: Schema.String,
    until: Schema.String,
    filters: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sort: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Query>;

interface Data2 {
  /** Array of dimension values, representing the combination of dimension values corresponding to this row. */
  dimensions: string[];
  /** Array with one item per requested metric. Each item is an array of values, broken down by time interval. */
  metrics: number[][];
}
const Data2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dimensions: Schema.Array(Schema.String),
    metrics: Schema.Array(Schema.Array(Schema.Number)),
  }),
) as unknown as Schema.Codec<Data2>;

interface Query2 {
  /** Array of dimension names. */
  dimensions: string[];
  /** Limit number of returned metrics. */
  limit: number;
  /** Array of metric names. */
  metrics: string[];
  /** Start date and time of requesting data period in ISO 8601 format. */
  since: string;
  /** Unit of time to group data by. */
  timeDelta:
    | "all"
    | "auto"
    | "year"
    | "quarter"
    | "month"
    | "week"
    | "day"
    | "hour"
    | "dekaminute"
    | "minute"
    | (string & {});
  /** End date and time of requesting data period in ISO 8601 format. */
  until: string;
  /** Segmentation filter in 'attribute operator value' format. */
  filters?: string | null;
  /** Array of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending). */
  sort?: string[] | null;
}
const Query2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dimensions: Schema.Array(Schema.String),
    limit: Schema.Number,
    metrics: Schema.Array(Schema.String),
    since: Schema.String,
    timeDelta: Schema.Union([
      Schema.Literals([
        "all",
        "auto",
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "dekaminute",
        "minute",
      ]),
      Schema.String,
    ]),
    until: Schema.String,
    filters: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    sort: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      dimensions: "dimensions",
      limit: "limit",
      metrics: "metrics",
      since: "since",
      timeDelta: "time_delta",
      until: "until",
      filters: "filters",
      sort: "sort",
    }),
  ),
) as unknown as Schema.Codec<Query2>;

interface Settings {
  /** When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has n */
  ipv4Only?: boolean | null;
  /** When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has n */
  ipv6Only?: boolean | null;
}
const Settings = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    ipv4Only: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    ipv6Only: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(Schema.encodeKeys({ ipv4Only: "ipv4_only", ipv6Only: "ipv6_only" })),
) as unknown as Schema.Codec<Settings>;

interface A {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "A";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid IPv4 address. */
  content?: string | null;
  /** Enables private network routing to the origin. */
  privateRouting?: boolean | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const A = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("A"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    privateRouting: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      privateRouting: "private_routing",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<A>;

interface Aaaa {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "AAAA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid IPv6 address. */
  content?: string | null;
  /** Enables private network routing to the origin. */
  privateRouting?: boolean | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Aaaa = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("AAAA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    privateRouting: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      privateRouting: "private_routing",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Aaaa>;

interface Settings2 {
  /** If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for pr */
  flattenCname?: boolean | null;
  /** When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has n */
  ipv4Only?: boolean | null;
  /** When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has n */
  ipv6Only?: boolean | null;
}
const Settings2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    flattenCname: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    ipv4Only: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    ipv6Only: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      flattenCname: "flatten_cname",
      ipv4Only: "ipv4_only",
      ipv6Only: "ipv6_only",
    }),
  ),
) as unknown as Schema.Codec<Settings2>;

interface Cname {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "CNAME";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid hostname. Must not match the record's name. */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: {
    flattenCname?: boolean | null;
    ipv4Only?: boolean | null;
    ipv6Only?: boolean | null;
  } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Cname = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("CNAME"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings2, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Cname>;

interface Mx {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "MX";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid mail server hostname. */
  content?: string | null;
  /** Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor of the prio */
  priority?: number | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Mx = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("MX"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      priority: "priority",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Mx>;

interface Ns {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "NS";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid name server host name. */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Ns = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("NS"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Ns>;

interface Openpgpkey {
  /** Identifier. */
  id: string;
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment: string;
  /** A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880 Section 11.1) */
  content: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied: boolean;
  /** Settings for the DNS record. */
  settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags: string[];
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "OPENPGPKEY";
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Openpgpkey = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    comment: Schema.String,
    content: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    name: Schema.String,
    proxiable: Schema.Boolean,
    proxied: Schema.Boolean,
    settings: Settings,
    tags: Schema.Array(Schema.String),
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("OPENPGPKEY"),
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      comment: "comment",
      content: "content",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      name: "name",
      proxiable: "proxiable",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      ttl: "ttl",
      type: "type",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Openpgpkey>;

interface Ptr {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "PTR";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Domain name pointing to the address. */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Ptr = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("PTR"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Ptr>;

interface Txt {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "TXT";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Text content for the record. The content must consist of quoted "character strings" (RFC 1035), each with a length of up to 255 bytes. Strings exceeding this allowed maximum length are automatically s */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Txt = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("TXT"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Txt>;

interface Data3 {
  /** Flags for the CAA record. */
  flags?: number | null;
  /** Name of the property controlled by this record (e.g.: issue, issuewild, iodef). */
  tag?: string | null;
  /** Value of the record. This field's semantics depend on the chosen tag. */
  value?: string | null;
}
const Data3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    flags: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data3>;

interface Caa {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "CAA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted CAA content. See 'data' to set CAA properties. */
  content?: string | null;
  /** Components of a CAA record. */
  data?: {
    flags?: number | null;
    tag?: string | null;
    value?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Caa = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("CAA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data3, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Caa>;

interface Data4 {
  /** Algorithm. */
  algorithm?: number | null;
  /** Certificate. */
  certificate?: string | null;
  /** Key Tag. */
  keyTag?: number | null;
  /** Type. */
  type?: number | null;
}
const Data4 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    algorithm: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    keyTag: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      algorithm: "algorithm",
      certificate: "certificate",
      keyTag: "key_tag",
      type: "type",
    }),
  ),
) as unknown as Schema.Codec<Data4>;

interface Cert {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "CERT";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted CERT content. See 'data' to set CERT properties. */
  content?: string | null;
  /** Components of a CERT record. */
  data?: {
    algorithm?: number | null;
    certificate?: string | null;
    keyTag?: number | null;
    type?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Cert = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("CERT"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data4, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Cert>;

interface Data5 {
  /** Algorithm. */
  algorithm?: number | null;
  /** Flags. */
  flags?: number | null;
  /** Protocol. */
  protocol?: number | null;
  /** Public Key. */
  publicKey?: string | null;
}
const Data5 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    algorithm: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    flags: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    protocol: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    publicKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      algorithm: "algorithm",
      flags: "flags",
      protocol: "protocol",
      publicKey: "public_key",
    }),
  ),
) as unknown as Schema.Codec<Data5>;

interface Dnskey {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "DNSKEY";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted DNSKEY content. See 'data' to set DNSKEY properties. */
  content?: string | null;
  /** Components of a DNSKEY record. */
  data?: {
    algorithm?: number | null;
    flags?: number | null;
    protocol?: number | null;
    publicKey?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Dnskey = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("DNSKEY"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data5, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Dnskey>;

interface Data6 {
  /** Algorithm. */
  algorithm?: number | null;
  /** Digest. */
  digest?: string | null;
  /** Digest Type. */
  digestType?: number | null;
  /** Key Tag. */
  keyTag?: number | null;
}
const Data6 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    algorithm: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    digest: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    digestType: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    keyTag: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      algorithm: "algorithm",
      digest: "digest",
      digestType: "digest_type",
      keyTag: "key_tag",
    }),
  ),
) as unknown as Schema.Codec<Data6>;

interface Ds {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "DS";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted DS content. See 'data' to set DS properties. */
  content?: string | null;
  /** Components of a DS record. */
  data?: {
    algorithm?: number | null;
    digest?: string | null;
    digestType?: number | null;
    keyTag?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Ds = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("DS"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data6, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Ds>;

interface Data7 {
  /** Priority. */
  priority?: number | null;
  /** Target. */
  target?: string | null;
  /** Value. */
  value?: string | null;
}
const Data7 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    target: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data7>;

interface Https {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "HTTPS";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted HTTPS content. See 'data' to set HTTPS properties. */
  content?: string | null;
  /** Components of a HTTPS record. */
  data?: {
    priority?: number | null;
    target?: string | null;
    value?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Https = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("HTTPS"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data7, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Https>;

interface Data8 {
  /** Altitude of location in meters. */
  altitude?: number | null;
  /** Degrees of latitude. */
  latDegrees?: number | null;
  /** Latitude direction. */
  latDirection?: "N" | "S" | (string & {}) | null;
  /** Minutes of latitude. */
  latMinutes?: number | null;
  /** Seconds of latitude. */
  latSeconds?: number | null;
  /** Degrees of longitude. */
  longDegrees?: number | null;
  /** Longitude direction. */
  longDirection?: "E" | "W" | (string & {}) | null;
  /** Minutes of longitude. */
  longMinutes?: number | null;
  /** Seconds of longitude. */
  longSeconds?: number | null;
  /** Horizontal precision of location. */
  precisionHorz?: number | null;
  /** Vertical precision of location. */
  precisionVert?: number | null;
  /** Size of location in meters. */
  size?: number | null;
}
const Data8 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    altitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    latDegrees: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    latDirection: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["N", "S"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    latMinutes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    latSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    longDegrees: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    longDirection: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["E", "W"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    longMinutes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    longSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    precisionHorz: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    precisionVert: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    size: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      altitude: "altitude",
      latDegrees: "lat_degrees",
      latDirection: "lat_direction",
      latMinutes: "lat_minutes",
      latSeconds: "lat_seconds",
      longDegrees: "long_degrees",
      longDirection: "long_direction",
      longMinutes: "long_minutes",
      longSeconds: "long_seconds",
      precisionHorz: "precision_horz",
      precisionVert: "precision_vert",
      size: "size",
    }),
  ),
) as unknown as Schema.Codec<Data8>;

interface Loc {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "LOC";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted LOC content. See 'data' to set LOC properties. */
  content?: string | null;
  /** Components of a LOC record. */
  data?: {
    altitude?: number | null;
    latDegrees?: number | null;
    latDirection?: "N" | "S" | (string & {}) | null;
    latMinutes?: number | null;
    latSeconds?: number | null;
    longDegrees?: number | null;
    longDirection?: "E" | "W" | (string & {}) | null;
    longMinutes?: number | null;
    longSeconds?: number | null;
    precisionHorz?: number | null;
    precisionVert?: number | null;
    size?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Loc = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("LOC"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data8, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Loc>;

interface Data9 {
  /** Flags. */
  flags?: string | null;
  /** Order. */
  order?: number | null;
  /** Preference. */
  preference?: number | null;
  /** Regex. */
  regex?: string | null;
  /** Replacement. */
  replacement?: string | null;
  /** Service. */
  service?: string | null;
}
const Data9 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    flags: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    order: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    preference: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    regex: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    replacement: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    service: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data9>;

interface Naptr {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "NAPTR";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted NAPTR content. See 'data' to set NAPTR properties. */
  content?: string | null;
  /** Components of a NAPTR record. */
  data?: {
    flags?: string | null;
    order?: number | null;
    preference?: number | null;
    regex?: string | null;
    replacement?: string | null;
    service?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Naptr = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("NAPTR"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data9, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Naptr>;

interface Data10 {
  /** Certificate. */
  certificate?: string | null;
  /** Matching Type. */
  matchingType?: number | null;
  /** Selector. */
  selector?: number | null;
  /** Usage. */
  usage?: number | null;
}
const Data10 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    matchingType: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    selector: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    usage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      certificate: "certificate",
      matchingType: "matching_type",
      selector: "selector",
      usage: "usage",
    }),
  ),
) as unknown as Schema.Codec<Data10>;

interface Smimea {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SMIMEA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted SMIMEA content. See 'data' to set SMIMEA properties. */
  content?: string | null;
  /** Components of a SMIMEA record. */
  data?: {
    certificate?: string | null;
    matchingType?: number | null;
    selector?: number | null;
    usage?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Smimea = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SMIMEA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data10, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Smimea>;

interface Data11 {
  /** The port of the service. */
  port?: number | null;
  /** Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor of the prio */
  priority?: number | null;
  /** A valid hostname. */
  target?: string | null;
  /** The record weight. */
  weight?: number | null;
}
const Data11 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    target: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    weight: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data11>;

interface Srv {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SRV";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Priority, weight, port, and SRV target. See 'data' for setting the individual component values. */
  content?: string | null;
  /** Components of a SRV record. */
  data?: {
    port?: number | null;
    priority?: number | null;
    target?: string | null;
    weight?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Srv = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SRV"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data11, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Srv>;

interface Data12 {
  /** Algorithm. */
  algorithm?: number | null;
  /** Fingerprint. */
  fingerprint?: string | null;
  /** Type. */
  type?: number | null;
}
const Data12 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    algorithm: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fingerprint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data12>;

interface Sshfp {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SSHFP";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted SSHFP content. See 'data' to set SSHFP properties. */
  content?: string | null;
  /** Components of a SSHFP record. */
  data?: {
    algorithm?: number | null;
    fingerprint?: string | null;
    type?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Sshfp = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SSHFP"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data12, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Sshfp>;

interface Svcb {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SVCB";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted SVCB content. See 'data' to set SVCB properties. */
  content?: string | null;
  /** Components of a SVCB record. */
  data?: {
    priority?: number | null;
    target?: string | null;
    value?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Svcb = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SVCB"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data7, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Svcb>;

interface Tlsa {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "TLSA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted TLSA content. See 'data' to set TLSA properties. */
  content?: string | null;
  /** Components of a TLSA record. */
  data?: {
    certificate?: string | null;
    matchingType?: number | null;
    selector?: number | null;
    usage?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Tlsa = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("TLSA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data10, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Tlsa>;

interface Data13 {
  /** The record content. */
  target?: string | null;
  /** The record weight. */
  weight?: number | null;
}
const Data13 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    target: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    weight: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data13>;

interface Uri {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "URI";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Formatted URI content. See 'data' to set URI properties. */
  content?: string | null;
  /** Components of a URI record. */
  data?: { target?: string | null; weight?: number | null } | null;
  /** Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor of the prio */
  priority?: number | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
  /** When the record was created. */
  createdOn: string;
  /** Extra Cloudflare-specific information about the record. */
  meta: unknown;
  /** When the record was last modified. */
  modifiedOn: string;
  /** Whether the record can be proxied by Cloudflare or not. */
  proxiable: boolean;
  /** When the record comment was last modified. Omitted if there is no comment. */
  commentModifiedOn?: string | null;
  /** When the record tags were last modified. Omitted if there are no tags. */
  tagsModifiedOn?: string | null;
}
const Uri = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("URI"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data13, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
    createdOn: Schema.String,
    meta: Schema.Unknown,
    modifiedOn: Schema.String,
    proxiable: Schema.Boolean,
    commentModifiedOn: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    tagsModifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      data: "data",
      priority: "priority",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
      createdOn: "created_on",
      meta: "meta",
      modifiedOn: "modified_on",
      proxiable: "proxiable",
      commentModifiedOn: "comment_modified_on",
      tagsModifiedOn: "tags_modified_on",
    }),
  ),
) as unknown as Schema.Codec<Uri>;

interface ListRecordsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListRecordsResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListRecordsResponseResultInfo>;

interface Data14 {
  /** Flags for the CAA record. */
  flags?: number | string | null;
  /** Name of the property controlled by this record (e.g.: issue, issuewild, iodef). */
  tag?: string | null;
  /** Value of the record. This field's semantics depend on the chosen tag. */
  value?: string | null;
  /** Algorithm. */
  algorithm?: number | null;
  /** Certificate. */
  certificate?: string | null;
  /** Key Tag. */
  keyTag?: number | null;
  /** Type. */
  type?: number | null;
  /** Protocol. */
  protocol?: number | null;
  /** Public Key. */
  publicKey?: string | null;
  /** Digest. */
  digest?: string | null;
  /** Digest Type. */
  digestType?: number | null;
  /** Priority. */
  priority?: number | null;
  /** Target. */
  target?: string | null;
  /** Altitude of location in meters. */
  altitude?: number | null;
  /** Degrees of latitude. */
  latDegrees?: number | null;
  /** Latitude direction. */
  latDirection?: "N" | "S" | (string & {}) | null;
  /** Minutes of latitude. */
  latMinutes?: number | null;
  /** Seconds of latitude. */
  latSeconds?: number | null;
  /** Degrees of longitude. */
  longDegrees?: number | null;
  /** Longitude direction. */
  longDirection?: "E" | "W" | (string & {}) | null;
  /** Minutes of longitude. */
  longMinutes?: number | null;
  /** Seconds of longitude. */
  longSeconds?: number | null;
  /** Horizontal precision of location. */
  precisionHorz?: number | null;
  /** Vertical precision of location. */
  precisionVert?: number | null;
  /** Size of location in meters. */
  size?: number | null;
  /** Order. */
  order?: number | null;
  /** Preference. */
  preference?: number | null;
  /** Regex. */
  regex?: string | null;
  /** Replacement. */
  replacement?: string | null;
  /** Service. */
  service?: string | null;
  /** Matching Type. */
  matchingType?: number | null;
  /** Selector. */
  selector?: number | null;
  /** Usage. */
  usage?: number | null;
  /** The port of the service. */
  port?: number | null;
  /** The record weight. */
  weight?: number | null;
  /** Fingerprint. */
  fingerprint?: string | null;
}
const Data14 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    flags: Schema.optional(
      Schema.Union([Schema.Union([Schema.Number, Schema.String]), Schema.Null]),
    ),
    tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    algorithm: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    certificate: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    keyTag: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    type: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    protocol: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    publicKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    digest: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    digestType: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    target: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    altitude: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    latDegrees: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    latDirection: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["N", "S"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    latMinutes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    latSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    longDegrees: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    longDirection: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["E", "W"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    longMinutes: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    longSeconds: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    precisionHorz: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    precisionVert: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    size: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    order: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    preference: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    regex: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    replacement: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    service: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    matchingType: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    selector: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    usage: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    weight: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    fingerprint: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      flags: "flags",
      tag: "tag",
      value: "value",
      algorithm: "algorithm",
      certificate: "certificate",
      keyTag: "key_tag",
      type: "type",
      protocol: "protocol",
      publicKey: "public_key",
      digest: "digest",
      digestType: "digest_type",
      priority: "priority",
      target: "target",
      altitude: "altitude",
      latDegrees: "lat_degrees",
      latDirection: "lat_direction",
      latMinutes: "lat_minutes",
      latSeconds: "lat_seconds",
      longDegrees: "long_degrees",
      longDirection: "long_direction",
      longMinutes: "long_minutes",
      longSeconds: "long_seconds",
      precisionHorz: "precision_horz",
      precisionVert: "precision_vert",
      size: "size",
      order: "order",
      preference: "preference",
      regex: "regex",
      replacement: "replacement",
      service: "service",
      matchingType: "matching_type",
      selector: "selector",
      usage: "usage",
      port: "port",
      weight: "weight",
      fingerprint: "fingerprint",
    }),
  ),
) as unknown as Schema.Codec<Data14>;

interface Delete {
  /** Identifier. */
  id: string;
}
const Delete = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Delete>;

interface Arecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "A";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid IPv4 address. */
  content?: string | null;
  /** Enables private network routing to the origin. */
  privateRouting?: boolean | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Arecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("A"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    privateRouting: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      privateRouting: "private_routing",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
    }),
  ),
) as unknown as Schema.Codec<Arecord>;

interface Aaaarecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "AAAA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid IPv6 address. */
  content?: string | null;
  /** Enables private network routing to the origin. */
  privateRouting?: boolean | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Aaaarecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("AAAA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    privateRouting: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      privateRouting: "private_routing",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
      id: "id",
    }),
  ),
) as unknown as Schema.Codec<Aaaarecord>;

interface Cnamerecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "CNAME";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid hostname. Must not match the record's name. */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: {
    flattenCname?: boolean | null;
    ipv4Only?: boolean | null;
    ipv6Only?: boolean | null;
  } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Cnamerecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("CNAME"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings2, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Cnamerecord>;

interface Mxrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "MX";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid mail server hostname. */
  content?: string | null;
  /** Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor of the prio */
  priority?: number | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Mxrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("MX"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Mxrecord>;

interface Nsrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "NS";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid name server host name. */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Nsrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("NS"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Nsrecord>;

interface OpenpgpkeyRecord {
  /** Identifier. */
  id: string;
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "OPENPGPKEY";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880 Section 11.1) */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const OpenpgpkeyRecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("OPENPGPKEY"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<OpenpgpkeyRecord>;

interface Ptrrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "PTR";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Domain name pointing to the address. */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Ptrrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("PTR"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Ptrrecord>;

interface Txtrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "TXT";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Text content for the record. The content must consist of quoted "character strings" (RFC 1035), each with a length of up to 255 bytes. Strings exceeding this allowed maximum length are automatically s */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Txtrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("TXT"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Txtrecord>;

interface Caarecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "CAA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a CAA record. */
  data?: {
    flags?: number | null;
    tag?: string | null;
    value?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Caarecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("CAA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data3, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Caarecord>;

interface Certrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "CERT";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a CERT record. */
  data?: {
    algorithm?: number | null;
    certificate?: string | null;
    keyTag?: number | null;
    type?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Certrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("CERT"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data4, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Certrecord>;

interface Dnskeyrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "DNSKEY";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a DNSKEY record. */
  data?: {
    algorithm?: number | null;
    flags?: number | null;
    protocol?: number | null;
    publicKey?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Dnskeyrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("DNSKEY"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data5, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Dnskeyrecord>;

interface Dsrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "DS";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a DS record. */
  data?: {
    algorithm?: number | null;
    digest?: string | null;
    digestType?: number | null;
    keyTag?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Dsrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("DS"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data6, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Dsrecord>;

interface Httpsrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "HTTPS";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a HTTPS record. */
  data?: {
    priority?: number | null;
    target?: string | null;
    value?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Httpsrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("HTTPS"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data7, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Httpsrecord>;

interface Locrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "LOC";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a LOC record. */
  data?: {
    altitude?: number | null;
    latDegrees?: number | null;
    latDirection?: "N" | "S" | (string & {}) | null;
    latMinutes?: number | null;
    latSeconds?: number | null;
    longDegrees?: number | null;
    longDirection?: "E" | "W" | (string & {}) | null;
    longMinutes?: number | null;
    longSeconds?: number | null;
    precisionHorz?: number | null;
    precisionVert?: number | null;
    size?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Locrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("LOC"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data8, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Locrecord>;

interface Naptrrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "NAPTR";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a NAPTR record. */
  data?: {
    flags?: string | null;
    order?: number | null;
    preference?: number | null;
    regex?: string | null;
    replacement?: string | null;
    service?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Naptrrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("NAPTR"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data9, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Naptrrecord>;

interface Smimearecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SMIMEA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a SMIMEA record. */
  data?: {
    certificate?: string | null;
    matchingType?: number | null;
    selector?: number | null;
    usage?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Smimearecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SMIMEA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data10, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Smimearecord>;

interface Srvrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SRV";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a SRV record. */
  data?: {
    port?: number | null;
    priority?: number | null;
    target?: string | null;
    weight?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Srvrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SRV"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data11, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Srvrecord>;

interface Sshfprecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SSHFP";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a SSHFP record. */
  data?: {
    algorithm?: number | null;
    fingerprint?: string | null;
    type?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Sshfprecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SSHFP"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data12, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Sshfprecord>;

interface Svcbrecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SVCB";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a SVCB record. */
  data?: {
    priority?: number | null;
    target?: string | null;
    value?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Svcbrecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SVCB"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data7, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Svcbrecord>;

interface Tlsarecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "TLSA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a TLSA record. */
  data?: {
    certificate?: string | null;
    matchingType?: number | null;
    selector?: number | null;
    usage?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Tlsarecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("TLSA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data10, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Tlsarecord>;

interface Urirecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "URI";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a URI record. */
  data?: { target?: string | null; weight?: number | null } | null;
  /** Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor of the prio */
  priority?: number | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
  /** Identifier. */
  id: string;
}
const Urirecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("URI"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data13, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    id: Schema.String,
  }),
) as unknown as Schema.Codec<Urirecord>;

interface ArecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "A";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid IPv4 address. */
  content?: string | null;
  /** Enables private network routing to the origin. */
  privateRouting?: boolean | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const ArecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("A"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    privateRouting: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      privateRouting: "private_routing",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
    }),
  ),
) as unknown as Schema.Codec<ArecordParam>;

interface AaaarecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "AAAA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid IPv6 address. */
  content?: string | null;
  /** Enables private network routing to the origin. */
  privateRouting?: boolean | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const AaaarecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("AAAA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    privateRouting: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      name: "name",
      ttl: "ttl",
      type: "type",
      comment: "comment",
      content: "content",
      privateRouting: "private_routing",
      proxied: "proxied",
      settings: "settings",
      tags: "tags",
    }),
  ),
) as unknown as Schema.Codec<AaaarecordParam>;

interface CnamerecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "CNAME";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid hostname. Must not match the record's name. */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: {
    flattenCname?: boolean | null;
    ipv4Only?: boolean | null;
    ipv6Only?: boolean | null;
  } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const CnamerecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("CNAME"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings2, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<CnamerecordParam>;

interface MxrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "MX";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid mail server hostname. */
  content?: string | null;
  /** Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor of the prio */
  priority?: number | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const MxrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("MX"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<MxrecordParam>;

interface NsrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "NS";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A valid name server host name. */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const NsrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("NS"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<NsrecordParam>;

interface DnsrecordsOpenpgpkeyRecord {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "OPENPGPKEY";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880 Section 11.1) */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const DnsrecordsOpenpgpkeyRecord = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      name: Schema.String,
      ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
      type: Schema.Literal("OPENPGPKEY"),
      comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
      tags: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }),
) as unknown as Schema.Codec<DnsrecordsOpenpgpkeyRecord>;

interface PtrrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "PTR";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Domain name pointing to the address. */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const PtrrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("PTR"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<PtrrecordParam>;

interface TxtrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "TXT";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Text content for the record. The content must consist of quoted "character strings" (RFC 1035), each with a length of up to 255 bytes. Strings exceeding this allowed maximum length are automatically s */
  content?: string | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const TxtrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("TXT"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<TxtrecordParam>;

interface CaarecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "CAA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a CAA record. */
  data?: {
    flags?: number | null;
    tag?: string | null;
    value?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const CaarecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("CAA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data3, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<CaarecordParam>;

interface CertrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "CERT";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a CERT record. */
  data?: {
    algorithm?: number | null;
    certificate?: string | null;
    keyTag?: number | null;
    type?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const CertrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("CERT"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data4, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<CertrecordParam>;

interface DnskeyrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "DNSKEY";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a DNSKEY record. */
  data?: {
    algorithm?: number | null;
    flags?: number | null;
    protocol?: number | null;
    publicKey?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const DnskeyrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("DNSKEY"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data5, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<DnskeyrecordParam>;

interface DsrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "DS";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a DS record. */
  data?: {
    algorithm?: number | null;
    digest?: string | null;
    digestType?: number | null;
    keyTag?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const DsrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("DS"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data6, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<DsrecordParam>;

interface HttpsrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "HTTPS";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a HTTPS record. */
  data?: {
    priority?: number | null;
    target?: string | null;
    value?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const HttpsrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("HTTPS"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data7, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<HttpsrecordParam>;

interface LocrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "LOC";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a LOC record. */
  data?: {
    altitude?: number | null;
    latDegrees?: number | null;
    latDirection?: "N" | "S" | (string & {}) | null;
    latMinutes?: number | null;
    latSeconds?: number | null;
    longDegrees?: number | null;
    longDirection?: "E" | "W" | (string & {}) | null;
    longMinutes?: number | null;
    longSeconds?: number | null;
    precisionHorz?: number | null;
    precisionVert?: number | null;
    size?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const LocrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("LOC"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data8, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<LocrecordParam>;

interface NaptrrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "NAPTR";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a NAPTR record. */
  data?: {
    flags?: string | null;
    order?: number | null;
    preference?: number | null;
    regex?: string | null;
    replacement?: string | null;
    service?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const NaptrrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("NAPTR"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data9, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<NaptrrecordParam>;

interface SmimearecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SMIMEA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a SMIMEA record. */
  data?: {
    certificate?: string | null;
    matchingType?: number | null;
    selector?: number | null;
    usage?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const SmimearecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SMIMEA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data10, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<SmimearecordParam>;

interface SrvrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SRV";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a SRV record. */
  data?: {
    port?: number | null;
    priority?: number | null;
    target?: string | null;
    weight?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const SrvrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SRV"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data11, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<SrvrecordParam>;

interface SshfprecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SSHFP";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a SSHFP record. */
  data?: {
    algorithm?: number | null;
    fingerprint?: string | null;
    type?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const SshfprecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SSHFP"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data12, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<SshfprecordParam>;

interface SvcbrecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "SVCB";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a SVCB record. */
  data?: {
    priority?: number | null;
    target?: string | null;
    value?: string | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const SvcbrecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("SVCB"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data7, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<SvcbrecordParam>;

interface TlsarecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "TLSA";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a TLSA record. */
  data?: {
    certificate?: string | null;
    matchingType?: number | null;
    selector?: number | null;
    usage?: number | null;
  } | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const TlsarecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("TLSA"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data10, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<TlsarecordParam>;

interface UrirecordParam {
  /** Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Record type. */
  type: "URI";
  /** Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string | null;
  /** Components of a URI record. */
  data?: { target?: string | null; weight?: number | null } | null;
  /** Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor of the prio */
  priority?: number | null;
  /** Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean | null;
  /** Settings for the DNS record. */
  settings?: { ipv4Only?: boolean | null; ipv6Only?: boolean | null } | null;
  /** Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[] | null;
}
const UrirecordParam = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
    type: Schema.Literal("URI"),
    comment: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    data: Schema.optional(Schema.Union([Data13, Schema.Null])),
    priority: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    proxied: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    settings: Schema.optional(Schema.Union([Settings, Schema.Null])),
    tags: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<UrirecordParam>;

interface InternalDNS {
  /** The ID of the zone to fallback to. */
  referenceZoneId?: string | null;
}
const InternalDNS = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    referenceZoneId: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
  }).pipe(Schema.encodeKeys({ referenceZoneId: "reference_zone_id" })),
) as unknown as Schema.Codec<InternalDNS>;

interface Nameservers {
  /** Nameserver type */
  type:
    | "cloudflare.standard"
    | "cloudflare.standard.random"
    | "custom.account"
    | "custom.tenant"
    | (string & {});
}
const Nameservers = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Union([
      Schema.Literals([
        "cloudflare.standard",
        "cloudflare.standard.random",
        "custom.account",
        "custom.tenant",
      ]),
      Schema.String,
    ]),
  }),
) as unknown as Schema.Codec<Nameservers>;

interface Soa {
  /** Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. */
  expire?: number | null;
  /** The time to live (TTL) for negative caching of records within the zone. */
  minTtl?: number | null;
  /** The primary nameserver, which may be used for outbound zone transfers. If null, a Cloudflare-assigned value will be used. */
  mname?: string | null;
  /** Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. */
  refresh?: number | null;
  /** Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. */
  retry?: number | null;
  /** The email address of the zone administrator, with the first label representing the local part of the email address. */
  rname?: string | null;
  /** The time to live (TTL) of the SOA record itself. */
  ttl?: number | null;
}
const Soa = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    expire: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    minTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    mname: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    refresh: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    retry: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    rname: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    ttl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      expire: "expire",
      minTtl: "min_ttl",
      mname: "mname",
      refresh: "refresh",
      retry: "retry",
      rname: "rname",
      ttl: "ttl",
    }),
  ),
) as unknown as Schema.Codec<Soa>;

interface ZoneDefaults {
  /** Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened. */
  flattenAllCnames: boolean;
  /** Whether to enable Foundation DNS Advanced Nameservers on the zone. */
  foundationDns: boolean;
  /** Settings for this internal zone. */
  internalDns: { referenceZoneId?: string | null };
  /** Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. */
  multiProvider: boolean;
  /** Settings determining the nameservers through which the zone should be available. */
  nameservers: {
    type:
      | "cloudflare.standard"
      | "cloudflare.standard.random"
      | "custom.account"
      | "custom.tenant"
      | (string & {});
  };
  /** The time to live (TTL) of the zone's nameserver (NS) records. */
  nsTtl: number;
  /** Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. */
  secondaryOverrides: boolean;
  /** Components of the zone's SOA record. */
  soa: {
    expire?: number | null;
    minTtl?: number | null;
    mname?: string | null;
    refresh?: number | null;
    retry?: number | null;
    rname?: string | null;
    ttl?: number | null;
  };
  /** Whether the zone mode is a regular or CDN/DNS only zone. */
  zoneMode: "standard" | "cdn_only" | "dns_only" | (string & {});
}
const ZoneDefaults = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    flattenAllCnames: Schema.Boolean,
    foundationDns: Schema.Boolean,
    internalDns: InternalDNS,
    multiProvider: Schema.Boolean,
    nameservers: Nameservers,
    nsTtl: Schema.Number,
    secondaryOverrides: Schema.Boolean,
    soa: Soa,
    zoneMode: Schema.Union([
      Schema.Literals(["standard", "cdn_only", "dns_only"]),
      Schema.String,
    ]),
  }).pipe(
    Schema.encodeKeys({
      flattenAllCnames: "flatten_all_cnames",
      foundationDns: "foundation_dns",
      internalDns: "internal_dns",
      multiProvider: "multi_provider",
      nameservers: "nameservers",
      nsTtl: "ns_ttl",
      secondaryOverrides: "secondary_overrides",
      soa: "soa",
      zoneMode: "zone_mode",
    }),
  ),
) as unknown as Schema.Codec<ZoneDefaults>;

interface Nameservers2 {
  /** Nameserver type */
  type?:
    | "cloudflare.standard"
    | "cloudflare.standard.random"
    | "custom.account"
    | "custom.tenant"
    | (string & {})
    | null;
}
const Nameservers2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "cloudflare.standard",
            "cloudflare.standard.random",
            "custom.account",
            "custom.tenant",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Nameservers2>;

interface ZoneDefaults2 {
  /** Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened. */
  flattenAllCnames?: boolean | null;
  /** Whether to enable Foundation DNS Advanced Nameservers on the zone. */
  foundationDns?: boolean | null;
  /** Settings for this internal zone. */
  internalDns?: { referenceZoneId?: string | null } | null;
  /** Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. */
  multiProvider?: boolean | null;
  /** Settings determining the nameservers through which the zone should be available. */
  nameservers?: {
    type?:
      | "cloudflare.standard"
      | "cloudflare.standard.random"
      | "custom.account"
      | "custom.tenant"
      | (string & {})
      | null;
  } | null;
  /** The time to live (TTL) of the zone's nameserver (NS) records. */
  nsTtl?: number | null;
  /** Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. */
  secondaryOverrides?: boolean | null;
  /** Components of the zone's SOA record. */
  soa?: {
    expire?: number | null;
    minTtl?: number | null;
    mname?: string | null;
    refresh?: number | null;
    retry?: number | null;
    rname?: string | null;
    ttl?: number | null;
  } | null;
  /** Whether the zone mode is a regular or CDN/DNS only zone. */
  zoneMode?: "standard" | "cdn_only" | "dns_only" | (string & {}) | null;
}
const ZoneDefaults2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    flattenAllCnames: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    foundationDns: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    internalDns: Schema.optional(Schema.Union([InternalDNS, Schema.Null])),
    multiProvider: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    nameservers: Schema.optional(Schema.Union([Nameservers2, Schema.Null])),
    nsTtl: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    secondaryOverrides: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    soa: Schema.optional(Schema.Union([Soa, Schema.Null])),
    zoneMode: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["standard", "cdn_only", "dns_only"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      flattenAllCnames: "flatten_all_cnames",
      foundationDns: "foundation_dns",
      internalDns: "internal_dns",
      multiProvider: "multi_provider",
      nameservers: "nameservers",
      nsTtl: "ns_ttl",
      secondaryOverrides: "secondary_overrides",
      soa: "soa",
      zoneMode: "zone_mode",
    }),
  ),
) as unknown as Schema.Codec<ZoneDefaults2>;

interface ListSettingAccountViewsResponseResult {
  /** Identifier. */
  id: string;
  /** When the view was created. */
  createdTime: string;
  /** When the view was last modified. */
  modifiedTime: string;
  /** The name of the view. */
  name: string;
  /** The list of zones linked to this view. */
  zones: string[];
}
const ListSettingAccountViewsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdTime: Schema.String,
      modifiedTime: Schema.String,
      name: Schema.String,
      zones: Schema.Array(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        createdTime: "created_time",
        modifiedTime: "modified_time",
        name: "name",
        zones: "zones",
      }),
    ),
  ) as unknown as Schema.Codec<ListSettingAccountViewsResponseResult>;

interface Nameservers3 {
  /** Nameserver type */
  type:
    | "cloudflare.standard"
    | "custom.account"
    | "custom.tenant"
    | "custom.zone"
    | (string & {});
  /** Configured nameserver set to be used for this zone */
  nsSet?: number | null;
}
const Nameservers3 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.Union([
      Schema.Literals([
        "cloudflare.standard",
        "custom.account",
        "custom.tenant",
        "custom.zone",
      ]),
      Schema.String,
    ]),
    nsSet: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }).pipe(Schema.encodeKeys({ type: "type", nsSet: "ns_set" })),
) as unknown as Schema.Codec<Nameservers3>;

interface Nameservers4 {
  /** Configured nameserver set to be used for this zone */
  nsSet?: number | null;
  /** Nameserver type */
  type?:
    | "cloudflare.standard"
    | "custom.account"
    | "custom.tenant"
    | "custom.zone"
    | (string & {})
    | null;
}
const Nameservers4 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    nsSet: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    type: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals([
            "cloudflare.standard",
            "custom.account",
            "custom.tenant",
            "custom.zone",
          ]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(Schema.encodeKeys({ nsSet: "ns_set", type: "type" })),
) as unknown as Schema.Codec<Nameservers4>;

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

interface ListZoneTransferAclsResponseResult {
  id: string;
  /** Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to allow additional NOTIFY IPs for secondary zones and IPs Cloudf */
  ipRange: string;
  /** The name of the acl. */
  name: string;
}
const ListZoneTransferAclsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      ipRange: Schema.String,
      name: Schema.String,
    }).pipe(Schema.encodeKeys({ id: "id", ipRange: "ip_range", name: "name" })),
  ) as unknown as Schema.Codec<ListZoneTransferAclsResponseResult>;

interface ListZoneTransferPeersResponseResult {
  id: string;
  /** The name of the peer. */
  name: string;
  /** IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zo */
  ip?: string | null;
  /** Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. */
  ixfrEnable?: boolean | null;
  /** DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. */
  port?: number | null;
  /** TSIG authentication will be used for zone transfer if configured. */
  tsigId?: string | null;
}
const ListZoneTransferPeersResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ixfrEnable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tsigId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        id: "id",
        name: "name",
        ip: "ip",
        ixfrEnable: "ixfr_enable",
        port: "port",
        tsigId: "tsig_id",
      }),
    ),
  ) as unknown as Schema.Codec<ListZoneTransferPeersResponseResult>;

interface ListZoneTransferTsigsResponseResult {
  id: string;
  /** TSIG algorithm. */
  algo: string;
  /** TSIG key name. */
  name: string;
  /** TSIG secret. */
  secret: string;
}
const ListZoneTransferTsigsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      algo: Schema.String,
      name: Schema.String,
      secret: SensitiveString,
    }),
  ) as unknown as Schema.Codec<ListZoneTransferTsigsResponseResult>;

// =============================================================================
// AnalyticReport
// =============================================================================

export interface GetAnalyticReportRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: A comma-separated list of dimensions to group results by. */
  dimensions?: string;
  /** Query param: Segmentation filter in 'attribute operator value' format. */
  filters?: string;
  /** Query param: Limit number of returned metrics. */
  limit?: number;
  /** Query param: A comma-separated list of metrics to query. */
  metrics?: string;
  /** Query param: Start date and time of requesting data period in ISO 8601 format. */
  since?: string;
  /** Query param: A comma-separated list of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending). */
  sort?: string;
  /** Query param: End date and time of requesting data period in ISO 8601 format. */
  until?: string;
}

export const GetAnalyticReportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      dimensions: Schema.optional(Schema.String).pipe(
        T.HttpQuery("dimensions"),
      ),
      filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      metrics: Schema.optional(Schema.String).pipe(T.HttpQuery("metrics")),
      since: Schema.optional(Schema.String).pipe(T.HttpQuery("since")),
      sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
      until: Schema.optional(Schema.String).pipe(T.HttpQuery("until")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/dns_analytics/report" }),
    ),
  ) as unknown as Schema.Codec<GetAnalyticReportRequest>;

export interface GetAnalyticReportResponse {
  /** Array with one row per combination of dimension values. */
  data: { dimensions: string[]; metrics: number[] }[];
  /** Number of seconds between current time and last processed event, in another words how many seconds of data could be missing. */
  dataLag: number;
  /** Maximum results for each metric (object mapping metric names to values). Currently always an empty object. */
  max: unknown;
  /** Minimum results for each metric (object mapping metric names to values). Currently always an empty object. */
  min: unknown;
  query: {
    dimensions: string[];
    limit: number;
    metrics: string[];
    since: string;
    until: string;
    filters?: string | null;
    sort?: string[] | null;
  };
  /** Total number of rows in the result. */
  rows: number;
  /** Total results for metrics across all data (object mapping metric names to values). */
  totals: unknown;
}

export const GetAnalyticReportResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Array(Data),
      dataLag: Schema.Number,
      max: Schema.Unknown,
      min: Schema.Unknown,
      query: Query,
      rows: Schema.Number,
      totals: Schema.Unknown,
    })
      .pipe(
        Schema.encodeKeys({
          data: "data",
          dataLag: "data_lag",
          max: "max",
          min: "min",
          query: "query",
          rows: "rows",
          totals: "totals",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetAnalyticReportResponse>;

export type GetAnalyticReportError = DefaultErrors;

export const getAnalyticReport: API.OperationMethod<
  GetAnalyticReportRequest,
  GetAnalyticReportResponse,
  GetAnalyticReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAnalyticReportRequest,
  output: GetAnalyticReportResponse,
  errors: [],
}));

// =============================================================================
// AnalyticReportBytime
// =============================================================================

export interface GetAnalyticReportBytimeRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: A comma-separated list of dimensions to group results by. */
  dimensions?: string;
  /** Query param: Segmentation filter in 'attribute operator value' format. */
  filters?: string;
  /** Query param: Limit number of returned metrics. */
  limit?: number;
  /** Query param: A comma-separated list of metrics to query. */
  metrics?: string;
  /** Query param: Start date and time of requesting data period in ISO 8601 format. */
  since?: string;
  /** Query param: A comma-separated list of dimensions to sort by, where each dimension may be prefixed by - (descending) or + (ascending). */
  sort?: string;
  /** Query param: Unit of time to group data by. */
  timeDelta?:
    | "all"
    | "auto"
    | "year"
    | "quarter"
    | "month"
    | "week"
    | "day"
    | "hour"
    | "dekaminute"
    | "minute"
    | (string & {});
  /** Query param: End date and time of requesting data period in ISO 8601 format. */
  until?: string;
}

export const GetAnalyticReportBytimeRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      dimensions: Schema.optional(Schema.String).pipe(
        T.HttpQuery("dimensions"),
      ),
      filters: Schema.optional(Schema.String).pipe(T.HttpQuery("filters")),
      limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
      metrics: Schema.optional(Schema.String).pipe(T.HttpQuery("metrics")),
      since: Schema.optional(Schema.String).pipe(T.HttpQuery("since")),
      sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
      timeDelta: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "all",
            "auto",
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "dekaminute",
            "minute",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("time_delta")),
      until: Schema.optional(Schema.String).pipe(T.HttpQuery("until")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/dns_analytics/report/bytime",
      }),
    ),
  ) as unknown as Schema.Codec<GetAnalyticReportBytimeRequest>;

export interface GetAnalyticReportBytimeResponse {
  /** Array with one row per combination of dimension values. */
  data: { dimensions: string[]; metrics: number[][] }[];
  /** Number of seconds between current time and last processed event, in another words how many seconds of data could be missing. */
  dataLag: number;
  /** Maximum results for each metric (object mapping metric names to values). Currently always an empty object. */
  max: unknown;
  /** Minimum results for each metric (object mapping metric names to values). Currently always an empty object. */
  min: unknown;
  query: {
    dimensions: string[];
    limit: number;
    metrics: string[];
    since: string;
    timeDelta:
      | "all"
      | "auto"
      | "year"
      | "quarter"
      | "month"
      | "week"
      | "day"
      | "hour"
      | "dekaminute"
      | "minute"
      | (string & {});
    until: string;
    filters?: string | null;
    sort?: string[] | null;
  };
  /** Total number of rows in the result. */
  rows: number;
  /** Array of time intervals in the response data. Each interval is represented as an array containing two values: the start time, and the end time. */
  timeIntervals: string[][];
  /** Total results for metrics across all data (object mapping metric names to values). */
  totals: unknown;
}

export const GetAnalyticReportBytimeResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      data: Schema.Array(Data2),
      dataLag: Schema.Number,
      max: Schema.Unknown,
      min: Schema.Unknown,
      query: Query2,
      rows: Schema.Number,
      timeIntervals: Schema.Array(Schema.Array(Schema.String)),
      totals: Schema.Unknown,
    })
      .pipe(
        Schema.encodeKeys({
          data: "data",
          dataLag: "data_lag",
          max: "max",
          min: "min",
          query: "query",
          rows: "rows",
          timeIntervals: "time_intervals",
          totals: "totals",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetAnalyticReportBytimeResponse>;

export type GetAnalyticReportBytimeError = DefaultErrors;

export const getAnalyticReportBytime: API.OperationMethod<
  GetAnalyticReportBytimeRequest,
  GetAnalyticReportBytimeResponse,
  GetAnalyticReportBytimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetAnalyticReportBytimeRequest,
  output: GetAnalyticReportBytimeResponse,
  errors: [],
}));

// =============================================================================
// Dnssec
// =============================================================================

export interface GetDnssecRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetDnssecRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/dnssec" })),
) as unknown as Schema.Codec<GetDnssecRequest>;

export interface GetDnssecResponse {
  /** Algorithm key code. */
  algorithm?: string | null;
  /** Digest hash. */
  digest?: string | null;
  /** Type of digest algorithm. */
  digestAlgorithm?: string | null;
  /** Coded type for digest algorithm. */
  digestType?: string | null;
  /** If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time. This is required for DNSKEY records (except those automatically generat */
  dnssecMultiSigner?: boolean | null;
  /** If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly.  Note that this feature has  */
  dnssecPresigned?: boolean | null;
  /** If true, enables the use of NSEC3 together with DNSSEC on the zone. Combined with setting dnssec_presigned to true, this enables the use of NSEC3 records when transferring in from an external provider */
  dnssecUseNsec3?: boolean | null;
  /** Full DS record. */
  ds?: string | null;
  /** Flag for DNSSEC record. */
  flags?: number | null;
  /** Code for key tag. */
  keyTag?: number | null;
  /** Algorithm key type. */
  keyType?: string | null;
  /** When DNSSEC was last modified. */
  modifiedOn?: string | null;
  /** Public key for DS record. */
  publicKey?: string | null;
  /** Status of DNSSEC, based on user-desired state and presence of necessary records. */
  status?:
    | "active"
    | "pending"
    | "disabled"
    | "pending-disabled"
    | "error"
    | (string & {})
    | null;
}

export const GetDnssecResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      algorithm: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      digest: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      digestAlgorithm: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      digestType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dnssecMultiSigner: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      dnssecPresigned: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      dnssecUseNsec3: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      ds: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      flags: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      keyTag: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      keyType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      publicKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "active",
              "pending",
              "disabled",
              "pending-disabled",
              "error",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          algorithm: "algorithm",
          digest: "digest",
          digestAlgorithm: "digest_algorithm",
          digestType: "digest_type",
          dnssecMultiSigner: "dnssec_multi_signer",
          dnssecPresigned: "dnssec_presigned",
          dnssecUseNsec3: "dnssec_use_nsec3",
          ds: "ds",
          flags: "flags",
          keyTag: "key_tag",
          keyType: "key_type",
          modifiedOn: "modified_on",
          publicKey: "public_key",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetDnssecResponse>;

export type GetDnssecError = DefaultErrors | Forbidden;

export const getDnssec: API.OperationMethod<
  GetDnssecRequest,
  GetDnssecResponse,
  GetDnssecError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDnssecRequest,
  output: GetDnssecResponse,
  errors: [Forbidden],
}));

export interface PatchDnssecRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time. This is required for DNSKEY records (except those automatic */
  dnssecMultiSigner?: boolean;
  /** Body param: If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly.  Note that this  */
  dnssecPresigned?: boolean;
  /** Body param: If true, enables the use of NSEC3 together with DNSSEC on the zone. Combined with setting dnssec_presigned to true, this enables the use of NSEC3 records when transferring in from an exter */
  dnssecUseNsec3?: boolean;
  /** Body param: Status of DNSSEC, based on user-desired state and presence of necessary records. */
  status?: "active" | "disabled" | (string & {});
}

export const PatchDnssecRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      dnssecMultiSigner: Schema.optional(Schema.Boolean),
      dnssecPresigned: Schema.optional(Schema.Boolean),
      dnssecUseNsec3: Schema.optional(Schema.Boolean),
      status: Schema.optional(
        Schema.Union([Schema.Literals(["active", "disabled"]), Schema.String]),
      ),
    }).pipe(
      Schema.encodeKeys({
        dnssecMultiSigner: "dnssec_multi_signer",
        dnssecPresigned: "dnssec_presigned",
        dnssecUseNsec3: "dnssec_use_nsec3",
        status: "status",
      }),
      T.Http({ method: "PATCH", path: "/zones/{zone_id}/dnssec" }),
    ),
) as unknown as Schema.Codec<PatchDnssecRequest>;

export interface PatchDnssecResponse {
  /** Algorithm key code. */
  algorithm?: string | null;
  /** Digest hash. */
  digest?: string | null;
  /** Type of digest algorithm. */
  digestAlgorithm?: string | null;
  /** Coded type for digest algorithm. */
  digestType?: string | null;
  /** If true, multi-signer DNSSEC is enabled on the zone, allowing multiple providers to serve a DNSSEC-signed zone at the same time. This is required for DNSKEY records (except those automatically generat */
  dnssecMultiSigner?: boolean | null;
  /** If true, allows Cloudflare to transfer in a DNSSEC-signed zone including signatures from an external provider, without requiring Cloudflare to sign any records on the fly.  Note that this feature has  */
  dnssecPresigned?: boolean | null;
  /** If true, enables the use of NSEC3 together with DNSSEC on the zone. Combined with setting dnssec_presigned to true, this enables the use of NSEC3 records when transferring in from an external provider */
  dnssecUseNsec3?: boolean | null;
  /** Full DS record. */
  ds?: string | null;
  /** Flag for DNSSEC record. */
  flags?: number | null;
  /** Code for key tag. */
  keyTag?: number | null;
  /** Algorithm key type. */
  keyType?: string | null;
  /** When DNSSEC was last modified. */
  modifiedOn?: string | null;
  /** Public key for DS record. */
  publicKey?: string | null;
  /** Status of DNSSEC, based on user-desired state and presence of necessary records. */
  status?:
    | "active"
    | "pending"
    | "disabled"
    | "pending-disabled"
    | "error"
    | (string & {})
    | null;
}

export const PatchDnssecResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      algorithm: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      digest: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      digestAlgorithm: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      digestType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dnssecMultiSigner: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      dnssecPresigned: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      dnssecUseNsec3: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      ds: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      flags: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      keyTag: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      keyType: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      publicKey: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "active",
              "pending",
              "disabled",
              "pending-disabled",
              "error",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          algorithm: "algorithm",
          digest: "digest",
          digestAlgorithm: "digest_algorithm",
          digestType: "digest_type",
          dnssecMultiSigner: "dnssec_multi_signer",
          dnssecPresigned: "dnssec_presigned",
          dnssecUseNsec3: "dnssec_use_nsec3",
          ds: "ds",
          flags: "flags",
          keyTag: "key_tag",
          keyType: "key_type",
          modifiedOn: "modified_on",
          publicKey: "public_key",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchDnssecResponse>;

export type PatchDnssecError = DefaultErrors | Forbidden;

export const patchDnssec: API.OperationMethod<
  PatchDnssecRequest,
  PatchDnssecResponse,
  PatchDnssecError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchDnssecRequest,
  output: PatchDnssecResponse,
  errors: [Forbidden],
}));

export interface DeleteDnssecRequest {
  /** Identifier. */
  zoneId: string;
}

export const DeleteDnssecRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(T.Http({ method: "DELETE", path: "/zones/{zone_id}/dnssec" })),
) as unknown as Schema.Codec<DeleteDnssecRequest>;

export type DeleteDnssecResponse = string;

export const DeleteDnssecResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.String.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteDnssecResponse>;

export type DeleteDnssecError = DefaultErrors | Forbidden;

export const deleteDnssec: API.OperationMethod<
  DeleteDnssecRequest,
  DeleteDnssecResponse,
  DeleteDnssecError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDnssecRequest,
  output: DeleteDnssecResponse,
  errors: [Forbidden],
}));

// =============================================================================
// ListRecord
// =============================================================================

export interface ScanListRecordRequest {
  /** Identifier. */
  zoneId: string;
}

export const ScanListRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/dns_records/scan/review",
      }),
    ),
) as unknown as Schema.Codec<ScanListRecordRequest>;

export interface ScanListRecordResponse {
  result: (
    | {
        name: string;
        ttl: number | "1";
        type: "A";
        comment?: string | null;
        content?: string | null;
        privateRouting?: boolean | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "AAAA";
        comment?: string | null;
        content?: string | null;
        privateRouting?: boolean | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CNAME";
        comment?: string | null;
        content?: string | null;
        proxied?: boolean | null;
        settings?: {
          flattenCname?: boolean | null;
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "MX";
        comment?: string | null;
        content?: string | null;
        priority?: number | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NS";
        comment?: string | null;
        content?: string | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        id: string;
        comment: string;
        content: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        name: string;
        proxiable: boolean;
        proxied: boolean;
        settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
        tags: string[];
        ttl: number | "1";
        type: "OPENPGPKEY";
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "PTR";
        comment?: string | null;
        content?: string | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TXT";
        comment?: string | null;
        content?: string | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CAA";
        comment?: string | null;
        content?: string | null;
        data?: {
          flags?: number | null;
          tag?: string | null;
          value?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CERT";
        comment?: string | null;
        content?: string | null;
        data?: {
          algorithm?: number | null;
          certificate?: string | null;
          keyTag?: number | null;
          type?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DNSKEY";
        comment?: string | null;
        content?: string | null;
        data?: {
          algorithm?: number | null;
          flags?: number | null;
          protocol?: number | null;
          publicKey?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DS";
        comment?: string | null;
        content?: string | null;
        data?: {
          algorithm?: number | null;
          digest?: string | null;
          digestType?: number | null;
          keyTag?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "HTTPS";
        comment?: string | null;
        content?: string | null;
        data?: {
          priority?: number | null;
          target?: string | null;
          value?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "LOC";
        comment?: string | null;
        content?: string | null;
        data?: {
          altitude?: number | null;
          latDegrees?: number | null;
          latDirection?: "N" | "S" | (string & {}) | null;
          latMinutes?: number | null;
          latSeconds?: number | null;
          longDegrees?: number | null;
          longDirection?: "E" | "W" | (string & {}) | null;
          longMinutes?: number | null;
          longSeconds?: number | null;
          precisionHorz?: number | null;
          precisionVert?: number | null;
          size?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NAPTR";
        comment?: string | null;
        content?: string | null;
        data?: {
          flags?: string | null;
          order?: number | null;
          preference?: number | null;
          regex?: string | null;
          replacement?: string | null;
          service?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SMIMEA";
        comment?: string | null;
        content?: string | null;
        data?: {
          certificate?: string | null;
          matchingType?: number | null;
          selector?: number | null;
          usage?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SRV";
        comment?: string | null;
        content?: string | null;
        data?: {
          port?: number | null;
          priority?: number | null;
          target?: string | null;
          weight?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SSHFP";
        comment?: string | null;
        content?: string | null;
        data?: {
          algorithm?: number | null;
          fingerprint?: string | null;
          type?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SVCB";
        comment?: string | null;
        content?: string | null;
        data?: {
          priority?: number | null;
          target?: string | null;
          value?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TLSA";
        comment?: string | null;
        content?: string | null;
        data?: {
          certificate?: string | null;
          matchingType?: number | null;
          selector?: number | null;
          usage?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "URI";
        comment?: string | null;
        content?: string | null;
        data?: { target?: string | null; weight?: number | null } | null;
        priority?: number | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
  )[];
}

export const ScanListRecordResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          Openpgpkey,
          A,
          Aaaa,
          Cname,
          Mx,
          Ns,
          Ptr,
          Txt,
          Caa,
          Cert,
          Dnskey,
          Ds,
          Https,
          Loc,
          Naptr,
          Smimea,
          Srv,
          Sshfp,
          Svcb,
          Tlsa,
          Uri,
        ]),
      ),
    }),
  ) as unknown as Schema.Codec<ScanListRecordResponse>;

export type ScanListRecordError = DefaultErrors;

export const scanListRecord: API.PaginatedOperationMethod<
  ScanListRecordRequest,
  ScanListRecordResponse,
  ScanListRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ScanListRecordRequest,
  output: ScanListRecordResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// NotifyZoneTransferOutgoing
// =============================================================================

export interface ForceNotifyZoneTransferOutgoingRequest {
  /** Path param */
  zoneId: string;
  /** Body param */
  body: unknown;
}

export const ForceNotifyZoneTransferOutgoingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Unknown.pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/secondary_dns/outgoing/force_notify",
      }),
    ),
  ) as unknown as Schema.Codec<ForceNotifyZoneTransferOutgoingRequest>;

export type ForceNotifyZoneTransferOutgoingResponse = string;

export const ForceNotifyZoneTransferOutgoingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ForceNotifyZoneTransferOutgoingResponse>;

export type ForceNotifyZoneTransferOutgoingError = DefaultErrors;

export const forceNotifyZoneTransferOutgoing: API.OperationMethod<
  ForceNotifyZoneTransferOutgoingRequest,
  ForceNotifyZoneTransferOutgoingResponse,
  ForceNotifyZoneTransferOutgoingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ForceNotifyZoneTransferOutgoingRequest,
  output: ForceNotifyZoneTransferOutgoingResponse,
  errors: [],
}));

// =============================================================================
// Record
// =============================================================================

export interface GetRecordRequest {
  dnsRecordId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dnsRecordId: Schema.String.pipe(T.HttpPath("dnsRecordId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/dns_records/{dnsRecordId}",
    }),
  ),
) as unknown as Schema.Codec<GetRecordRequest>;

export type GetRecordResponse =
  | {
      name: string;
      ttl: number | "1";
      type: "A";
      comment?: string | null;
      content?: string | null;
      privateRouting?: boolean | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "AAAA";
      comment?: string | null;
      content?: string | null;
      privateRouting?: boolean | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CNAME";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        flattenCname?: boolean | null;
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "MX";
      comment?: string | null;
      content?: string | null;
      priority?: number | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "NS";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      id: string;
      comment: string;
      content: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      name: string;
      proxiable: boolean;
      proxied: boolean;
      settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
      tags: string[];
      ttl: number | "1";
      type: "OPENPGPKEY";
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "PTR";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "TXT";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CAA";
      comment?: string | null;
      content?: string | null;
      data?: {
        flags?: number | null;
        tag?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CERT";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        certificate?: string | null;
        keyTag?: number | null;
        type?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "DNSKEY";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        flags?: number | null;
        protocol?: number | null;
        publicKey?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "DS";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        digest?: string | null;
        digestType?: number | null;
        keyTag?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "HTTPS";
      comment?: string | null;
      content?: string | null;
      data?: {
        priority?: number | null;
        target?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "LOC";
      comment?: string | null;
      content?: string | null;
      data?: {
        altitude?: number | null;
        latDegrees?: number | null;
        latDirection?: "N" | "S" | (string & {}) | null;
        latMinutes?: number | null;
        latSeconds?: number | null;
        longDegrees?: number | null;
        longDirection?: "E" | "W" | (string & {}) | null;
        longMinutes?: number | null;
        longSeconds?: number | null;
        precisionHorz?: number | null;
        precisionVert?: number | null;
        size?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "NAPTR";
      comment?: string | null;
      content?: string | null;
      data?: {
        flags?: string | null;
        order?: number | null;
        preference?: number | null;
        regex?: string | null;
        replacement?: string | null;
        service?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SMIMEA";
      comment?: string | null;
      content?: string | null;
      data?: {
        certificate?: string | null;
        matchingType?: number | null;
        selector?: number | null;
        usage?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SRV";
      comment?: string | null;
      content?: string | null;
      data?: {
        port?: number | null;
        priority?: number | null;
        target?: string | null;
        weight?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SSHFP";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        fingerprint?: string | null;
        type?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SVCB";
      comment?: string | null;
      content?: string | null;
      data?: {
        priority?: number | null;
        target?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "TLSA";
      comment?: string | null;
      content?: string | null;
      data?: {
        certificate?: string | null;
        matchingType?: number | null;
        selector?: number | null;
        usage?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "URI";
      comment?: string | null;
      content?: string | null;
      data?: { target?: string | null; weight?: number | null } | null;
      priority?: number | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    };

export const GetRecordResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Union([
      Openpgpkey,
      A,
      Aaaa,
      Cname,
      Mx,
      Ns,
      Ptr,
      Txt,
      Caa,
      Cert,
      Dnskey,
      Ds,
      Https,
      Loc,
      Naptr,
      Smimea,
      Srv,
      Sshfp,
      Svcb,
      Tlsa,
      Uri,
    ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetRecordResponse>;

export type GetRecordError = DefaultErrors | Forbidden;

export const getRecord: API.OperationMethod<
  GetRecordRequest,
  GetRecordResponse,
  GetRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRecordRequest,
  output: GetRecordResponse,
  errors: [Forbidden],
}));

export interface ListRecordsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param */
  comment?: {
    absent?: string;
    contains?: string;
    endswith?: string;
    exact?: string;
    present?: string;
    startswith?: string;
  };
  /** Query param */
  content?: {
    contains?: string;
    endswith?: string;
    exact?: string;
    startswith?: string;
  };
  /** Query param: Direction to order DNS records in. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the in */
  match?: "any" | "all" | (string & {});
  /** Query param */
  name?: {
    contains?: string;
    endswith?: string;
    exact?: string;
    startswith?: string;
  };
  /** Query param: Field to order DNS records by. */
  order?: "type" | "name" | "content" | "ttl" | "proxied" | (string & {});
  /** Query param: Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean;
  /** Query param: Allows searching in multiple properties of a DNS record simultaneously. This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified an */
  search?: string;
  /** Query param */
  tag?: {
    absent?: string;
    contains?: string;
    endswith?: string;
    exact?: string;
    present?: string;
    startswith?: string;
  };
  /** Query param: Whether to match all tag search requirements or at least one (any). If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note tha */
  tagMatch?: "any" | "all" | (string & {});
  /** Query param: Record type. */
  type?:
    | "A"
    | "AAAA"
    | "CAA"
    | "CERT"
    | "CNAME"
    | "DNSKEY"
    | "DS"
    | "HTTPS"
    | "LOC"
    | "MX"
    | "NAPTR"
    | "NS"
    | "OPENPGPKEY"
    | "PTR"
    | "SMIMEA"
    | "SRV"
    | "SSHFP"
    | "SVCB"
    | "TLSA"
    | "TXT"
    | "URI"
    | (string & {});
}

export const ListRecordsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      comment: Schema.optional(
        Schema.Struct({
          absent: Schema.optional(Schema.String),
          contains: Schema.optional(Schema.String),
          endswith: Schema.optional(Schema.String),
          exact: Schema.optional(Schema.String),
          present: Schema.optional(Schema.String),
          startswith: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpQuery("comment")),
      content: Schema.optional(
        Schema.Struct({
          contains: Schema.optional(Schema.String),
          endswith: Schema.optional(Schema.String),
          exact: Schema.optional(Schema.String),
          startswith: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpQuery("content")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      match: Schema.optional(
        Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
      ).pipe(T.HttpQuery("match")),
      name: Schema.optional(
        Schema.Struct({
          contains: Schema.optional(Schema.String),
          endswith: Schema.optional(Schema.String),
          exact: Schema.optional(Schema.String),
          startswith: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpQuery("name")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["type", "name", "content", "ttl", "proxied"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      proxied: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("proxied")),
      search: Schema.optional(Schema.String).pipe(T.HttpQuery("search")),
      tag: Schema.optional(
        Schema.Struct({
          absent: Schema.optional(Schema.String),
          contains: Schema.optional(Schema.String),
          endswith: Schema.optional(Schema.String),
          exact: Schema.optional(Schema.String),
          present: Schema.optional(Schema.String),
          startswith: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpQuery("tag")),
      tagMatch: Schema.optional(
        Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
      ).pipe(T.HttpQuery("tag_match")),
      type: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "A",
            "AAAA",
            "CAA",
            "CERT",
            "CNAME",
            "DNSKEY",
            "DS",
            "HTTPS",
            "LOC",
            "MX",
            "NAPTR",
            "NS",
            "OPENPGPKEY",
            "PTR",
            "SMIMEA",
            "SRV",
            "SSHFP",
            "SVCB",
            "TLSA",
            "TXT",
            "URI",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("type")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/dns_records" })),
) as unknown as Schema.Codec<ListRecordsRequest>;

export interface ListRecordsResponse {
  result: (
    | {
        name: string;
        ttl: number | "1";
        type: "A";
        comment?: string | null;
        content?: string | null;
        privateRouting?: boolean | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "AAAA";
        comment?: string | null;
        content?: string | null;
        privateRouting?: boolean | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CNAME";
        comment?: string | null;
        content?: string | null;
        proxied?: boolean | null;
        settings?: {
          flattenCname?: boolean | null;
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "MX";
        comment?: string | null;
        content?: string | null;
        priority?: number | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NS";
        comment?: string | null;
        content?: string | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        id: string;
        comment: string;
        content: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        name: string;
        proxiable: boolean;
        proxied: boolean;
        settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
        tags: string[];
        ttl: number | "1";
        type: "OPENPGPKEY";
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "PTR";
        comment?: string | null;
        content?: string | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TXT";
        comment?: string | null;
        content?: string | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CAA";
        comment?: string | null;
        content?: string | null;
        data?: {
          flags?: number | null;
          tag?: string | null;
          value?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CERT";
        comment?: string | null;
        content?: string | null;
        data?: {
          algorithm?: number | null;
          certificate?: string | null;
          keyTag?: number | null;
          type?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DNSKEY";
        comment?: string | null;
        content?: string | null;
        data?: {
          algorithm?: number | null;
          flags?: number | null;
          protocol?: number | null;
          publicKey?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DS";
        comment?: string | null;
        content?: string | null;
        data?: {
          algorithm?: number | null;
          digest?: string | null;
          digestType?: number | null;
          keyTag?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "HTTPS";
        comment?: string | null;
        content?: string | null;
        data?: {
          priority?: number | null;
          target?: string | null;
          value?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "LOC";
        comment?: string | null;
        content?: string | null;
        data?: {
          altitude?: number | null;
          latDegrees?: number | null;
          latDirection?: "N" | "S" | (string & {}) | null;
          latMinutes?: number | null;
          latSeconds?: number | null;
          longDegrees?: number | null;
          longDirection?: "E" | "W" | (string & {}) | null;
          longMinutes?: number | null;
          longSeconds?: number | null;
          precisionHorz?: number | null;
          precisionVert?: number | null;
          size?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NAPTR";
        comment?: string | null;
        content?: string | null;
        data?: {
          flags?: string | null;
          order?: number | null;
          preference?: number | null;
          regex?: string | null;
          replacement?: string | null;
          service?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SMIMEA";
        comment?: string | null;
        content?: string | null;
        data?: {
          certificate?: string | null;
          matchingType?: number | null;
          selector?: number | null;
          usage?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SRV";
        comment?: string | null;
        content?: string | null;
        data?: {
          port?: number | null;
          priority?: number | null;
          target?: string | null;
          weight?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SSHFP";
        comment?: string | null;
        content?: string | null;
        data?: {
          algorithm?: number | null;
          fingerprint?: string | null;
          type?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SVCB";
        comment?: string | null;
        content?: string | null;
        data?: {
          priority?: number | null;
          target?: string | null;
          value?: string | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TLSA";
        comment?: string | null;
        content?: string | null;
        data?: {
          certificate?: string | null;
          matchingType?: number | null;
          selector?: number | null;
          usage?: number | null;
        } | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "URI";
        comment?: string | null;
        content?: string | null;
        data?: { target?: string | null; weight?: number | null } | null;
        priority?: number | null;
        proxied?: boolean | null;
        settings?: {
          ipv4Only?: boolean | null;
          ipv6Only?: boolean | null;
        } | null;
        tags?: string[] | null;
        id: string;
        createdOn: string;
        meta: unknown;
        modifiedOn: string;
        proxiable: boolean;
        commentModifiedOn?: string | null;
        tagsModifiedOn?: string | null;
      }
  )[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListRecordsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Union([
          Openpgpkey,
          A,
          Aaaa,
          Cname,
          Mx,
          Ns,
          Ptr,
          Txt,
          Caa,
          Cert,
          Dnskey,
          Ds,
          Https,
          Loc,
          Naptr,
          Smimea,
          Srv,
          Sshfp,
          Svcb,
          Tlsa,
          Uri,
        ]),
      ),
      resultInfo: Schema.optional(
        Schema.Union([ListRecordsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListRecordsResponse>;

export type ListRecordsError = DefaultErrors | Forbidden;

export const listRecords: API.PaginatedOperationMethod<
  ListRecordsRequest,
  ListRecordsResponse,
  ListRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRecordsRequest,
  output: ListRecordsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateRecordRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Body param: Record type. */
  type:
    | "A"
    | "AAAA"
    | "CNAME"
    | "MX"
    | "NS"
    | "OPENPGPKEY"
    | "PTR"
    | "TXT"
    | "CAA"
    | "CERT"
    | "DNSKEY"
    | "DS"
    | "HTTPS"
    | "LOC"
    | "NAPTR"
    | "SMIMEA"
    | "SRV"
    | "SSHFP"
    | "SVCB"
    | "TLSA"
    | "URI"
    | (string & {});
  /** Body param: Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string;
  /** Body param: A valid IPv4 address. */
  content?: string;
  /** Body param: Enables private network routing to the origin. */
  privateRouting?: boolean;
  /** Body param: Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean;
  /** Body param: Settings for the DNS record. */
  settings?: { ipv4Only?: boolean; ipv6Only?: boolean; flattenCname?: boolean };
  /** Body param: Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[];
  /** Body param: Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor */
  priority?: number;
  /** Body param: Components of a CAA record. */
  data?: {
    flags?: number | string;
    tag?: string;
    value?: string;
    algorithm?: number;
    certificate?: string;
    keyTag?: number;
    type?: number;
    protocol?: number;
    publicKey?: string;
    digest?: string;
    digestType?: number;
    priority?: number;
    target?: string;
    altitude?: number;
    latDegrees?: number;
    latDirection?: "N" | "S" | (string & {});
    latMinutes?: number;
    latSeconds?: number;
    longDegrees?: number;
    longDirection?: "E" | "W" | (string & {});
    longMinutes?: number;
    longSeconds?: number;
    precisionHorz?: number;
    precisionVert?: number;
    size?: number;
    order?: number;
    preference?: number;
    regex?: string;
    replacement?: string;
    service?: string;
    matchingType?: number;
    selector?: number;
    usage?: number;
    port?: number;
    weight?: number;
    fingerprint?: string;
  };
}

export const CreateRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      name: Schema.String,
      ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
      type: Schema.Union([
        Schema.Literals([
          "A",
          "AAAA",
          "CNAME",
          "MX",
          "NS",
          "OPENPGPKEY",
          "PTR",
          "TXT",
          "CAA",
          "CERT",
          "DNSKEY",
          "DS",
          "HTTPS",
          "LOC",
          "NAPTR",
          "SMIMEA",
          "SRV",
          "SSHFP",
          "SVCB",
          "TLSA",
          "URI",
        ]),
        Schema.String,
      ]),
      comment: Schema.optional(Schema.String),
      content: Schema.optional(Schema.String),
      privateRouting: Schema.optional(Schema.Boolean),
      proxied: Schema.optional(Schema.Boolean),
      settings: Schema.optional(Settings2),
      tags: Schema.optional(Schema.Array(Schema.String)),
      priority: Schema.optional(Schema.Number),
      data: Schema.optional(Data14),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        ttl: "ttl",
        type: "type",
        comment: "comment",
        content: "content",
        privateRouting: "private_routing",
        proxied: "proxied",
        settings: "settings",
        tags: "tags",
        priority: "priority",
        data: "data",
      }),
      T.Http({ method: "POST", path: "/zones/{zone_id}/dns_records" }),
    ),
) as unknown as Schema.Codec<CreateRecordRequest>;

export type CreateRecordResponse =
  | {
      name: string;
      ttl: number | "1";
      type: "A";
      comment?: string | null;
      content?: string | null;
      privateRouting?: boolean | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "AAAA";
      comment?: string | null;
      content?: string | null;
      privateRouting?: boolean | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CNAME";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        flattenCname?: boolean | null;
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "MX";
      comment?: string | null;
      content?: string | null;
      priority?: number | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "NS";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      id: string;
      comment: string;
      content: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      name: string;
      proxiable: boolean;
      proxied: boolean;
      settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
      tags: string[];
      ttl: number | "1";
      type: "OPENPGPKEY";
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "PTR";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "TXT";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CAA";
      comment?: string | null;
      content?: string | null;
      data?: {
        flags?: number | null;
        tag?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CERT";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        certificate?: string | null;
        keyTag?: number | null;
        type?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "DNSKEY";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        flags?: number | null;
        protocol?: number | null;
        publicKey?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "DS";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        digest?: string | null;
        digestType?: number | null;
        keyTag?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "HTTPS";
      comment?: string | null;
      content?: string | null;
      data?: {
        priority?: number | null;
        target?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "LOC";
      comment?: string | null;
      content?: string | null;
      data?: {
        altitude?: number | null;
        latDegrees?: number | null;
        latDirection?: "N" | "S" | (string & {}) | null;
        latMinutes?: number | null;
        latSeconds?: number | null;
        longDegrees?: number | null;
        longDirection?: "E" | "W" | (string & {}) | null;
        longMinutes?: number | null;
        longSeconds?: number | null;
        precisionHorz?: number | null;
        precisionVert?: number | null;
        size?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "NAPTR";
      comment?: string | null;
      content?: string | null;
      data?: {
        flags?: string | null;
        order?: number | null;
        preference?: number | null;
        regex?: string | null;
        replacement?: string | null;
        service?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SMIMEA";
      comment?: string | null;
      content?: string | null;
      data?: {
        certificate?: string | null;
        matchingType?: number | null;
        selector?: number | null;
        usage?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SRV";
      comment?: string | null;
      content?: string | null;
      data?: {
        port?: number | null;
        priority?: number | null;
        target?: string | null;
        weight?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SSHFP";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        fingerprint?: string | null;
        type?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SVCB";
      comment?: string | null;
      content?: string | null;
      data?: {
        priority?: number | null;
        target?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "TLSA";
      comment?: string | null;
      content?: string | null;
      data?: {
        certificate?: string | null;
        matchingType?: number | null;
        selector?: number | null;
        usage?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "URI";
      comment?: string | null;
      content?: string | null;
      data?: { target?: string | null; weight?: number | null } | null;
      priority?: number | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    };

export const CreateRecordResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Union([
      Openpgpkey,
      A,
      Aaaa,
      Cname,
      Mx,
      Ns,
      Ptr,
      Txt,
      Caa,
      Cert,
      Dnskey,
      Ds,
      Https,
      Loc,
      Naptr,
      Smimea,
      Srv,
      Sshfp,
      Svcb,
      Tlsa,
      Uri,
    ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateRecordResponse>;

export type CreateRecordError =
  | DefaultErrors
  | DnsRecordAlreadyExists
  | Forbidden;

export const createRecord: API.OperationMethod<
  CreateRecordRequest,
  CreateRecordResponse,
  CreateRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRecordRequest,
  output: CreateRecordResponse,
  errors: [DnsRecordAlreadyExists, Forbidden],
}));

export interface UpdateRecordRequest {
  dnsRecordId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Body param: Record type. */
  type:
    | "A"
    | "AAAA"
    | "CNAME"
    | "MX"
    | "NS"
    | "OPENPGPKEY"
    | "PTR"
    | "TXT"
    | "CAA"
    | "CERT"
    | "DNSKEY"
    | "DS"
    | "HTTPS"
    | "LOC"
    | "NAPTR"
    | "SMIMEA"
    | "SRV"
    | "SSHFP"
    | "SVCB"
    | "TLSA"
    | "URI"
    | (string & {});
  /** Body param: Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string;
  /** Body param: A valid IPv4 address. */
  content?: string;
  /** Body param: Enables private network routing to the origin. */
  privateRouting?: boolean;
  /** Body param: Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean;
  /** Body param: Settings for the DNS record. */
  settings?: { ipv4Only?: boolean; ipv6Only?: boolean; flattenCname?: boolean };
  /** Body param: Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[];
  /** Body param: Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor */
  priority?: number;
  /** Body param: Components of a CAA record. */
  data?: {
    flags?: number | string;
    tag?: string;
    value?: string;
    algorithm?: number;
    certificate?: string;
    keyTag?: number;
    type?: number;
    protocol?: number;
    publicKey?: string;
    digest?: string;
    digestType?: number;
    priority?: number;
    target?: string;
    altitude?: number;
    latDegrees?: number;
    latDirection?: "N" | "S" | (string & {});
    latMinutes?: number;
    latSeconds?: number;
    longDegrees?: number;
    longDirection?: "E" | "W" | (string & {});
    longMinutes?: number;
    longSeconds?: number;
    precisionHorz?: number;
    precisionVert?: number;
    size?: number;
    order?: number;
    preference?: number;
    regex?: string;
    replacement?: string;
    service?: string;
    matchingType?: number;
    selector?: number;
    usage?: number;
    port?: number;
    weight?: number;
    fingerprint?: string;
  };
}

export const UpdateRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      dnsRecordId: Schema.String.pipe(T.HttpPath("dnsRecordId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      name: Schema.String,
      ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
      type: Schema.Union([
        Schema.Literals([
          "A",
          "AAAA",
          "CNAME",
          "MX",
          "NS",
          "OPENPGPKEY",
          "PTR",
          "TXT",
          "CAA",
          "CERT",
          "DNSKEY",
          "DS",
          "HTTPS",
          "LOC",
          "NAPTR",
          "SMIMEA",
          "SRV",
          "SSHFP",
          "SVCB",
          "TLSA",
          "URI",
        ]),
        Schema.String,
      ]),
      comment: Schema.optional(Schema.String),
      content: Schema.optional(Schema.String),
      privateRouting: Schema.optional(Schema.Boolean),
      proxied: Schema.optional(Schema.Boolean),
      settings: Schema.optional(Settings2),
      tags: Schema.optional(Schema.Array(Schema.String)),
      priority: Schema.optional(Schema.Number),
      data: Schema.optional(Data14),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        ttl: "ttl",
        type: "type",
        comment: "comment",
        content: "content",
        privateRouting: "private_routing",
        proxied: "proxied",
        settings: "settings",
        tags: "tags",
        priority: "priority",
        data: "data",
      }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/dns_records/{dnsRecordId}",
      }),
    ),
) as unknown as Schema.Codec<UpdateRecordRequest>;

export type UpdateRecordResponse =
  | {
      name: string;
      ttl: number | "1";
      type: "A";
      comment?: string | null;
      content?: string | null;
      privateRouting?: boolean | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "AAAA";
      comment?: string | null;
      content?: string | null;
      privateRouting?: boolean | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CNAME";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        flattenCname?: boolean | null;
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "MX";
      comment?: string | null;
      content?: string | null;
      priority?: number | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "NS";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      id: string;
      comment: string;
      content: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      name: string;
      proxiable: boolean;
      proxied: boolean;
      settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
      tags: string[];
      ttl: number | "1";
      type: "OPENPGPKEY";
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "PTR";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "TXT";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CAA";
      comment?: string | null;
      content?: string | null;
      data?: {
        flags?: number | null;
        tag?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CERT";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        certificate?: string | null;
        keyTag?: number | null;
        type?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "DNSKEY";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        flags?: number | null;
        protocol?: number | null;
        publicKey?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "DS";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        digest?: string | null;
        digestType?: number | null;
        keyTag?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "HTTPS";
      comment?: string | null;
      content?: string | null;
      data?: {
        priority?: number | null;
        target?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "LOC";
      comment?: string | null;
      content?: string | null;
      data?: {
        altitude?: number | null;
        latDegrees?: number | null;
        latDirection?: "N" | "S" | (string & {}) | null;
        latMinutes?: number | null;
        latSeconds?: number | null;
        longDegrees?: number | null;
        longDirection?: "E" | "W" | (string & {}) | null;
        longMinutes?: number | null;
        longSeconds?: number | null;
        precisionHorz?: number | null;
        precisionVert?: number | null;
        size?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "NAPTR";
      comment?: string | null;
      content?: string | null;
      data?: {
        flags?: string | null;
        order?: number | null;
        preference?: number | null;
        regex?: string | null;
        replacement?: string | null;
        service?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SMIMEA";
      comment?: string | null;
      content?: string | null;
      data?: {
        certificate?: string | null;
        matchingType?: number | null;
        selector?: number | null;
        usage?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SRV";
      comment?: string | null;
      content?: string | null;
      data?: {
        port?: number | null;
        priority?: number | null;
        target?: string | null;
        weight?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SSHFP";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        fingerprint?: string | null;
        type?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SVCB";
      comment?: string | null;
      content?: string | null;
      data?: {
        priority?: number | null;
        target?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "TLSA";
      comment?: string | null;
      content?: string | null;
      data?: {
        certificate?: string | null;
        matchingType?: number | null;
        selector?: number | null;
        usage?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "URI";
      comment?: string | null;
      content?: string | null;
      data?: { target?: string | null; weight?: number | null } | null;
      priority?: number | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    };

export const UpdateRecordResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Union([
      Openpgpkey,
      A,
      Aaaa,
      Cname,
      Mx,
      Ns,
      Ptr,
      Txt,
      Caa,
      Cert,
      Dnskey,
      Ds,
      Https,
      Loc,
      Naptr,
      Smimea,
      Srv,
      Sshfp,
      Svcb,
      Tlsa,
      Uri,
    ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<UpdateRecordResponse>;

export type UpdateRecordError = DefaultErrors;

export const updateRecord: API.OperationMethod<
  UpdateRecordRequest,
  UpdateRecordResponse,
  UpdateRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateRecordRequest,
  output: UpdateRecordResponse,
  errors: [],
}));

export interface PatchRecordRequest {
  dnsRecordId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Complete DNS record name, including the zone name, in Punycode. */
  name: string;
  /** Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones. */
  ttl: number | "1";
  /** Body param: Record type. */
  type:
    | "A"
    | "AAAA"
    | "CNAME"
    | "MX"
    | "NS"
    | "OPENPGPKEY"
    | "PTR"
    | "TXT"
    | "CAA"
    | "CERT"
    | "DNSKEY"
    | "DS"
    | "HTTPS"
    | "LOC"
    | "NAPTR"
    | "SMIMEA"
    | "SRV"
    | "SSHFP"
    | "SVCB"
    | "TLSA"
    | "URI"
    | (string & {});
  /** Body param: Comments or notes about the DNS record. This field has no effect on DNS responses. */
  comment?: string;
  /** Body param: A valid IPv4 address. */
  content?: string;
  /** Body param: Enables private network routing to the origin. */
  privateRouting?: boolean;
  /** Body param: Whether the record is receiving the performance and security benefits of Cloudflare. */
  proxied?: boolean;
  /** Body param: Settings for the DNS record. */
  settings?: { ipv4Only?: boolean; ipv6Only?: boolean; flattenCname?: boolean };
  /** Body param: Custom tags for the DNS record. This field has no effect on DNS responses. */
  tags?: string[];
  /** Body param: Required for MX and URI records; ignored for other record types (but may still be returned by the API). Records with lower priorities are preferred. This field is to be deprecated in favor */
  priority?: number;
  /** Body param: Components of a CAA record. */
  data?: {
    flags?: number | string;
    tag?: string;
    value?: string;
    algorithm?: number;
    certificate?: string;
    keyTag?: number;
    type?: number;
    protocol?: number;
    publicKey?: string;
    digest?: string;
    digestType?: number;
    priority?: number;
    target?: string;
    altitude?: number;
    latDegrees?: number;
    latDirection?: "N" | "S" | (string & {});
    latMinutes?: number;
    latSeconds?: number;
    longDegrees?: number;
    longDirection?: "E" | "W" | (string & {});
    longMinutes?: number;
    longSeconds?: number;
    precisionHorz?: number;
    precisionVert?: number;
    size?: number;
    order?: number;
    preference?: number;
    regex?: string;
    replacement?: string;
    service?: string;
    matchingType?: number;
    selector?: number;
    usage?: number;
    port?: number;
    weight?: number;
    fingerprint?: string;
  };
}

export const PatchRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      dnsRecordId: Schema.String.pipe(T.HttpPath("dnsRecordId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      name: Schema.String,
      ttl: Schema.Union([Schema.Number, Schema.Literal("1")]),
      type: Schema.Union([
        Schema.Literals([
          "A",
          "AAAA",
          "CNAME",
          "MX",
          "NS",
          "OPENPGPKEY",
          "PTR",
          "TXT",
          "CAA",
          "CERT",
          "DNSKEY",
          "DS",
          "HTTPS",
          "LOC",
          "NAPTR",
          "SMIMEA",
          "SRV",
          "SSHFP",
          "SVCB",
          "TLSA",
          "URI",
        ]),
        Schema.String,
      ]),
      comment: Schema.optional(Schema.String),
      content: Schema.optional(Schema.String),
      privateRouting: Schema.optional(Schema.Boolean),
      proxied: Schema.optional(Schema.Boolean),
      settings: Schema.optional(Settings2),
      tags: Schema.optional(Schema.Array(Schema.String)),
      priority: Schema.optional(Schema.Number),
      data: Schema.optional(Data14),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        ttl: "ttl",
        type: "type",
        comment: "comment",
        content: "content",
        privateRouting: "private_routing",
        proxied: "proxied",
        settings: "settings",
        tags: "tags",
        priority: "priority",
        data: "data",
      }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/dns_records/{dnsRecordId}",
      }),
    ),
) as unknown as Schema.Codec<PatchRecordRequest>;

export type PatchRecordResponse =
  | {
      name: string;
      ttl: number | "1";
      type: "A";
      comment?: string | null;
      content?: string | null;
      privateRouting?: boolean | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "AAAA";
      comment?: string | null;
      content?: string | null;
      privateRouting?: boolean | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CNAME";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        flattenCname?: boolean | null;
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "MX";
      comment?: string | null;
      content?: string | null;
      priority?: number | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "NS";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      id: string;
      comment: string;
      content: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      name: string;
      proxiable: boolean;
      proxied: boolean;
      settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
      tags: string[];
      ttl: number | "1";
      type: "OPENPGPKEY";
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "PTR";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "TXT";
      comment?: string | null;
      content?: string | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CAA";
      comment?: string | null;
      content?: string | null;
      data?: {
        flags?: number | null;
        tag?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "CERT";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        certificate?: string | null;
        keyTag?: number | null;
        type?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "DNSKEY";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        flags?: number | null;
        protocol?: number | null;
        publicKey?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "DS";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        digest?: string | null;
        digestType?: number | null;
        keyTag?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "HTTPS";
      comment?: string | null;
      content?: string | null;
      data?: {
        priority?: number | null;
        target?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "LOC";
      comment?: string | null;
      content?: string | null;
      data?: {
        altitude?: number | null;
        latDegrees?: number | null;
        latDirection?: "N" | "S" | (string & {}) | null;
        latMinutes?: number | null;
        latSeconds?: number | null;
        longDegrees?: number | null;
        longDirection?: "E" | "W" | (string & {}) | null;
        longMinutes?: number | null;
        longSeconds?: number | null;
        precisionHorz?: number | null;
        precisionVert?: number | null;
        size?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "NAPTR";
      comment?: string | null;
      content?: string | null;
      data?: {
        flags?: string | null;
        order?: number | null;
        preference?: number | null;
        regex?: string | null;
        replacement?: string | null;
        service?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SMIMEA";
      comment?: string | null;
      content?: string | null;
      data?: {
        certificate?: string | null;
        matchingType?: number | null;
        selector?: number | null;
        usage?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SRV";
      comment?: string | null;
      content?: string | null;
      data?: {
        port?: number | null;
        priority?: number | null;
        target?: string | null;
        weight?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SSHFP";
      comment?: string | null;
      content?: string | null;
      data?: {
        algorithm?: number | null;
        fingerprint?: string | null;
        type?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "SVCB";
      comment?: string | null;
      content?: string | null;
      data?: {
        priority?: number | null;
        target?: string | null;
        value?: string | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "TLSA";
      comment?: string | null;
      content?: string | null;
      data?: {
        certificate?: string | null;
        matchingType?: number | null;
        selector?: number | null;
        usage?: number | null;
      } | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    }
  | {
      name: string;
      ttl: number | "1";
      type: "URI";
      comment?: string | null;
      content?: string | null;
      data?: { target?: string | null; weight?: number | null } | null;
      priority?: number | null;
      proxied?: boolean | null;
      settings?: {
        ipv4Only?: boolean | null;
        ipv6Only?: boolean | null;
      } | null;
      tags?: string[] | null;
      id: string;
      createdOn: string;
      meta: unknown;
      modifiedOn: string;
      proxiable: boolean;
      commentModifiedOn?: string | null;
      tagsModifiedOn?: string | null;
    };

export const PatchRecordResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Union([
      Openpgpkey,
      A,
      Aaaa,
      Cname,
      Mx,
      Ns,
      Ptr,
      Txt,
      Caa,
      Cert,
      Dnskey,
      Ds,
      Https,
      Loc,
      Naptr,
      Smimea,
      Srv,
      Sshfp,
      Svcb,
      Tlsa,
      Uri,
    ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchRecordResponse>;

export type PatchRecordError = DefaultErrors;

export const patchRecord: API.OperationMethod<
  PatchRecordRequest,
  PatchRecordResponse,
  PatchRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRecordRequest,
  output: PatchRecordResponse,
  errors: [],
}));

export interface DeleteRecordRequest {
  dnsRecordId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      dnsRecordId: Schema.String.pipe(T.HttpPath("dnsRecordId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/dns_records/{dnsRecordId}",
      }),
    ),
) as unknown as Schema.Codec<DeleteRecordRequest>;

export interface DeleteRecordResponse {
  /** Identifier. */
  id?: string | null;
}

export const DeleteRecordResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteRecordResponse>;

export type DeleteRecordError = DefaultErrors;

export const deleteRecord: API.OperationMethod<
  DeleteRecordRequest,
  DeleteRecordResponse,
  DeleteRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRecordRequest,
  output: DeleteRecordResponse,
  errors: [],
}));

export interface BatchRecordRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  deletes?: { id: string }[];
  /** Body param */
  patches?: (
    | {
        name: string;
        ttl: number | "1";
        type: "A";
        comment?: string;
        content?: string;
        privateRouting?: boolean;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "AAAA";
        comment?: string;
        content?: string;
        privateRouting?: boolean;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CNAME";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: {
          flattenCname?: boolean;
          ipv4Only?: boolean;
          ipv6Only?: boolean;
        };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "MX";
        comment?: string;
        content?: string;
        priority?: number;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NS";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        id: string;
        name: string;
        ttl: number | "1";
        type: "OPENPGPKEY";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "PTR";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TXT";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CAA";
        comment?: string;
        data?: { flags?: number; tag?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CERT";
        comment?: string;
        data?: {
          algorithm?: number;
          certificate?: string;
          keyTag?: number;
          type?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DNSKEY";
        comment?: string;
        data?: {
          algorithm?: number;
          flags?: number;
          protocol?: number;
          publicKey?: string;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DS";
        comment?: string;
        data?: {
          algorithm?: number;
          digest?: string;
          digestType?: number;
          keyTag?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "HTTPS";
        comment?: string;
        data?: { priority?: number; target?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "LOC";
        comment?: string;
        data?: {
          altitude?: number;
          latDegrees?: number;
          latDirection?: "N" | "S" | (string & {});
          latMinutes?: number;
          latSeconds?: number;
          longDegrees?: number;
          longDirection?: "E" | "W" | (string & {});
          longMinutes?: number;
          longSeconds?: number;
          precisionHorz?: number;
          precisionVert?: number;
          size?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NAPTR";
        comment?: string;
        data?: {
          flags?: string;
          order?: number;
          preference?: number;
          regex?: string;
          replacement?: string;
          service?: string;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SMIMEA";
        comment?: string;
        data?: {
          certificate?: string;
          matchingType?: number;
          selector?: number;
          usage?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SRV";
        comment?: string;
        data?: {
          port?: number;
          priority?: number;
          target?: string;
          weight?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SSHFP";
        comment?: string;
        data?: { algorithm?: number; fingerprint?: string; type?: number };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SVCB";
        comment?: string;
        data?: { priority?: number; target?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TLSA";
        comment?: string;
        data?: {
          certificate?: string;
          matchingType?: number;
          selector?: number;
          usage?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "URI";
        comment?: string;
        data?: { target?: string; weight?: number };
        priority?: number;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
  )[];
  /** Body param */
  posts?: (
    | {
        name: string;
        ttl: number | "1";
        type: "A";
        comment?: string;
        content?: string;
        privateRouting?: boolean;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "AAAA";
        comment?: string;
        content?: string;
        privateRouting?: boolean;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CNAME";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: {
          flattenCname?: boolean;
          ipv4Only?: boolean;
          ipv6Only?: boolean;
        };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "MX";
        comment?: string;
        content?: string;
        priority?: number;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NS";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "OPENPGPKEY";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "PTR";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TXT";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CAA";
        comment?: string;
        data?: { flags?: number; tag?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CERT";
        comment?: string;
        data?: {
          algorithm?: number;
          certificate?: string;
          keyTag?: number;
          type?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DNSKEY";
        comment?: string;
        data?: {
          algorithm?: number;
          flags?: number;
          protocol?: number;
          publicKey?: string;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DS";
        comment?: string;
        data?: {
          algorithm?: number;
          digest?: string;
          digestType?: number;
          keyTag?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "HTTPS";
        comment?: string;
        data?: { priority?: number; target?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "LOC";
        comment?: string;
        data?: {
          altitude?: number;
          latDegrees?: number;
          latDirection?: "N" | "S" | (string & {});
          latMinutes?: number;
          latSeconds?: number;
          longDegrees?: number;
          longDirection?: "E" | "W" | (string & {});
          longMinutes?: number;
          longSeconds?: number;
          precisionHorz?: number;
          precisionVert?: number;
          size?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NAPTR";
        comment?: string;
        data?: {
          flags?: string;
          order?: number;
          preference?: number;
          regex?: string;
          replacement?: string;
          service?: string;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SMIMEA";
        comment?: string;
        data?: {
          certificate?: string;
          matchingType?: number;
          selector?: number;
          usage?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SRV";
        comment?: string;
        data?: {
          port?: number;
          priority?: number;
          target?: string;
          weight?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SSHFP";
        comment?: string;
        data?: { algorithm?: number; fingerprint?: string; type?: number };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SVCB";
        comment?: string;
        data?: { priority?: number; target?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TLSA";
        comment?: string;
        data?: {
          certificate?: string;
          matchingType?: number;
          selector?: number;
          usage?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "URI";
        comment?: string;
        data?: { target?: string; weight?: number };
        priority?: number;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
  )[];
  /** Body param */
  puts?: (
    | {
        name: string;
        ttl: number | "1";
        type: "A";
        comment?: string;
        content?: string;
        privateRouting?: boolean;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "AAAA";
        comment?: string;
        content?: string;
        privateRouting?: boolean;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CNAME";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: {
          flattenCname?: boolean;
          ipv4Only?: boolean;
          ipv6Only?: boolean;
        };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "MX";
        comment?: string;
        content?: string;
        priority?: number;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NS";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        id: string;
        name: string;
        ttl: number | "1";
        type: "OPENPGPKEY";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "PTR";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TXT";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CAA";
        comment?: string;
        data?: { flags?: number; tag?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CERT";
        comment?: string;
        data?: {
          algorithm?: number;
          certificate?: string;
          keyTag?: number;
          type?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DNSKEY";
        comment?: string;
        data?: {
          algorithm?: number;
          flags?: number;
          protocol?: number;
          publicKey?: string;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DS";
        comment?: string;
        data?: {
          algorithm?: number;
          digest?: string;
          digestType?: number;
          keyTag?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "HTTPS";
        comment?: string;
        data?: { priority?: number; target?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "LOC";
        comment?: string;
        data?: {
          altitude?: number;
          latDegrees?: number;
          latDirection?: "N" | "S" | (string & {});
          latMinutes?: number;
          latSeconds?: number;
          longDegrees?: number;
          longDirection?: "E" | "W" | (string & {});
          longMinutes?: number;
          longSeconds?: number;
          precisionHorz?: number;
          precisionVert?: number;
          size?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NAPTR";
        comment?: string;
        data?: {
          flags?: string;
          order?: number;
          preference?: number;
          regex?: string;
          replacement?: string;
          service?: string;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SMIMEA";
        comment?: string;
        data?: {
          certificate?: string;
          matchingType?: number;
          selector?: number;
          usage?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SRV";
        comment?: string;
        data?: {
          port?: number;
          priority?: number;
          target?: string;
          weight?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SSHFP";
        comment?: string;
        data?: { algorithm?: number; fingerprint?: string; type?: number };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SVCB";
        comment?: string;
        data?: { priority?: number; target?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TLSA";
        comment?: string;
        data?: {
          certificate?: string;
          matchingType?: number;
          selector?: number;
          usage?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
    | {
        name: string;
        ttl: number | "1";
        type: "URI";
        comment?: string;
        data?: { target?: string; weight?: number };
        priority?: number;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
        id: string;
      }
  )[];
}

export const BatchRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      deletes: Schema.optional(Schema.Array(Delete)),
      patches: Schema.optional(
        Schema.Array(
          Schema.Union([
            Arecord,
            Aaaarecord,
            Cnamerecord,
            Mxrecord,
            Nsrecord,
            OpenpgpkeyRecord,
            Ptrrecord,
            Txtrecord,
            Caarecord,
            Certrecord,
            Dnskeyrecord,
            Dsrecord,
            Httpsrecord,
            Locrecord,
            Naptrrecord,
            Smimearecord,
            Srvrecord,
            Sshfprecord,
            Svcbrecord,
            Tlsarecord,
            Urirecord,
          ]),
        ),
      ),
      posts: Schema.optional(
        Schema.Array(
          Schema.Union([
            ArecordParam,
            AaaarecordParam,
            CnamerecordParam,
            MxrecordParam,
            NsrecordParam,
            DnsrecordsOpenpgpkeyRecord,
            PtrrecordParam,
            TxtrecordParam,
            CaarecordParam,
            CertrecordParam,
            DnskeyrecordParam,
            DsrecordParam,
            HttpsrecordParam,
            LocrecordParam,
            NaptrrecordParam,
            SmimearecordParam,
            SrvrecordParam,
            SshfprecordParam,
            SvcbrecordParam,
            TlsarecordParam,
            UrirecordParam,
          ]),
        ),
      ),
      puts: Schema.optional(
        Schema.Array(
          Schema.Union([
            Arecord,
            Aaaarecord,
            Cnamerecord,
            Mxrecord,
            Nsrecord,
            OpenpgpkeyRecord,
            Ptrrecord,
            Txtrecord,
            Caarecord,
            Certrecord,
            Dnskeyrecord,
            Dsrecord,
            Httpsrecord,
            Locrecord,
            Naptrrecord,
            Smimearecord,
            Srvrecord,
            Sshfprecord,
            Svcbrecord,
            Tlsarecord,
            Urirecord,
          ]),
        ),
      ),
    }).pipe(
      T.Http({ method: "POST", path: "/zones/{zone_id}/dns_records/batch" }),
    ),
) as unknown as Schema.Codec<BatchRecordRequest>;

export interface BatchRecordResponse {
  deletes?:
    | (
        | {
            name: string;
            ttl: number | "1";
            type: "A";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "AAAA";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CNAME";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              flattenCname?: boolean | null;
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "MX";
            comment?: string | null;
            content?: string | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NS";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            id: string;
            comment: string;
            content: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            name: string;
            proxiable: boolean;
            proxied: boolean;
            settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
            tags: string[];
            ttl: number | "1";
            type: "OPENPGPKEY";
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "PTR";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TXT";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CAA";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: number | null;
              tag?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CERT";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              certificate?: string | null;
              keyTag?: number | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DNSKEY";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              flags?: number | null;
              protocol?: number | null;
              publicKey?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DS";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              digest?: string | null;
              digestType?: number | null;
              keyTag?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "HTTPS";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "LOC";
            comment?: string | null;
            content?: string | null;
            data?: {
              altitude?: number | null;
              latDegrees?: number | null;
              latDirection?: "N" | "S" | (string & {}) | null;
              latMinutes?: number | null;
              latSeconds?: number | null;
              longDegrees?: number | null;
              longDirection?: "E" | "W" | (string & {}) | null;
              longMinutes?: number | null;
              longSeconds?: number | null;
              precisionHorz?: number | null;
              precisionVert?: number | null;
              size?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NAPTR";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: string | null;
              order?: number | null;
              preference?: number | null;
              regex?: string | null;
              replacement?: string | null;
              service?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SMIMEA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SRV";
            comment?: string | null;
            content?: string | null;
            data?: {
              port?: number | null;
              priority?: number | null;
              target?: string | null;
              weight?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SSHFP";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              fingerprint?: string | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SVCB";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TLSA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "URI";
            comment?: string | null;
            content?: string | null;
            data?: { target?: string | null; weight?: number | null } | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
      )[]
    | null;
  patches?:
    | (
        | {
            name: string;
            ttl: number | "1";
            type: "A";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "AAAA";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CNAME";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              flattenCname?: boolean | null;
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "MX";
            comment?: string | null;
            content?: string | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NS";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            id: string;
            comment: string;
            content: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            name: string;
            proxiable: boolean;
            proxied: boolean;
            settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
            tags: string[];
            ttl: number | "1";
            type: "OPENPGPKEY";
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "PTR";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TXT";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CAA";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: number | null;
              tag?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CERT";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              certificate?: string | null;
              keyTag?: number | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DNSKEY";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              flags?: number | null;
              protocol?: number | null;
              publicKey?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DS";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              digest?: string | null;
              digestType?: number | null;
              keyTag?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "HTTPS";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "LOC";
            comment?: string | null;
            content?: string | null;
            data?: {
              altitude?: number | null;
              latDegrees?: number | null;
              latDirection?: "N" | "S" | (string & {}) | null;
              latMinutes?: number | null;
              latSeconds?: number | null;
              longDegrees?: number | null;
              longDirection?: "E" | "W" | (string & {}) | null;
              longMinutes?: number | null;
              longSeconds?: number | null;
              precisionHorz?: number | null;
              precisionVert?: number | null;
              size?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NAPTR";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: string | null;
              order?: number | null;
              preference?: number | null;
              regex?: string | null;
              replacement?: string | null;
              service?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SMIMEA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SRV";
            comment?: string | null;
            content?: string | null;
            data?: {
              port?: number | null;
              priority?: number | null;
              target?: string | null;
              weight?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SSHFP";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              fingerprint?: string | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SVCB";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TLSA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "URI";
            comment?: string | null;
            content?: string | null;
            data?: { target?: string | null; weight?: number | null } | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
      )[]
    | null;
  posts?:
    | (
        | {
            name: string;
            ttl: number | "1";
            type: "A";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "AAAA";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CNAME";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              flattenCname?: boolean | null;
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "MX";
            comment?: string | null;
            content?: string | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NS";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            id: string;
            comment: string;
            content: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            name: string;
            proxiable: boolean;
            proxied: boolean;
            settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
            tags: string[];
            ttl: number | "1";
            type: "OPENPGPKEY";
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "PTR";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TXT";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CAA";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: number | null;
              tag?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CERT";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              certificate?: string | null;
              keyTag?: number | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DNSKEY";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              flags?: number | null;
              protocol?: number | null;
              publicKey?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DS";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              digest?: string | null;
              digestType?: number | null;
              keyTag?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "HTTPS";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "LOC";
            comment?: string | null;
            content?: string | null;
            data?: {
              altitude?: number | null;
              latDegrees?: number | null;
              latDirection?: "N" | "S" | (string & {}) | null;
              latMinutes?: number | null;
              latSeconds?: number | null;
              longDegrees?: number | null;
              longDirection?: "E" | "W" | (string & {}) | null;
              longMinutes?: number | null;
              longSeconds?: number | null;
              precisionHorz?: number | null;
              precisionVert?: number | null;
              size?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NAPTR";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: string | null;
              order?: number | null;
              preference?: number | null;
              regex?: string | null;
              replacement?: string | null;
              service?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SMIMEA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SRV";
            comment?: string | null;
            content?: string | null;
            data?: {
              port?: number | null;
              priority?: number | null;
              target?: string | null;
              weight?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SSHFP";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              fingerprint?: string | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SVCB";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TLSA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "URI";
            comment?: string | null;
            content?: string | null;
            data?: { target?: string | null; weight?: number | null } | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
      )[]
    | null;
  puts?:
    | (
        | {
            name: string;
            ttl: number | "1";
            type: "A";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "AAAA";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CNAME";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              flattenCname?: boolean | null;
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "MX";
            comment?: string | null;
            content?: string | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NS";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            id: string;
            comment: string;
            content: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            name: string;
            proxiable: boolean;
            proxied: boolean;
            settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
            tags: string[];
            ttl: number | "1";
            type: "OPENPGPKEY";
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "PTR";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TXT";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CAA";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: number | null;
              tag?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CERT";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              certificate?: string | null;
              keyTag?: number | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DNSKEY";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              flags?: number | null;
              protocol?: number | null;
              publicKey?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DS";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              digest?: string | null;
              digestType?: number | null;
              keyTag?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "HTTPS";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "LOC";
            comment?: string | null;
            content?: string | null;
            data?: {
              altitude?: number | null;
              latDegrees?: number | null;
              latDirection?: "N" | "S" | (string & {}) | null;
              latMinutes?: number | null;
              latSeconds?: number | null;
              longDegrees?: number | null;
              longDirection?: "E" | "W" | (string & {}) | null;
              longMinutes?: number | null;
              longSeconds?: number | null;
              precisionHorz?: number | null;
              precisionVert?: number | null;
              size?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NAPTR";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: string | null;
              order?: number | null;
              preference?: number | null;
              regex?: string | null;
              replacement?: string | null;
              service?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SMIMEA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SRV";
            comment?: string | null;
            content?: string | null;
            data?: {
              port?: number | null;
              priority?: number | null;
              target?: string | null;
              weight?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SSHFP";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              fingerprint?: string | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SVCB";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TLSA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "URI";
            comment?: string | null;
            content?: string | null;
            data?: { target?: string | null; weight?: number | null } | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
      )[]
    | null;
}

export const BatchRecordResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      deletes: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Openpgpkey,
              A,
              Aaaa,
              Cname,
              Mx,
              Ns,
              Ptr,
              Txt,
              Caa,
              Cert,
              Dnskey,
              Ds,
              Https,
              Loc,
              Naptr,
              Smimea,
              Srv,
              Sshfp,
              Svcb,
              Tlsa,
              Uri,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      patches: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Openpgpkey,
              A,
              Aaaa,
              Cname,
              Mx,
              Ns,
              Ptr,
              Txt,
              Caa,
              Cert,
              Dnskey,
              Ds,
              Https,
              Loc,
              Naptr,
              Smimea,
              Srv,
              Sshfp,
              Svcb,
              Tlsa,
              Uri,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      posts: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Openpgpkey,
              A,
              Aaaa,
              Cname,
              Mx,
              Ns,
              Ptr,
              Txt,
              Caa,
              Cert,
              Dnskey,
              Ds,
              Https,
              Loc,
              Naptr,
              Smimea,
              Srv,
              Sshfp,
              Svcb,
              Tlsa,
              Uri,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      puts: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Openpgpkey,
              A,
              Aaaa,
              Cname,
              Mx,
              Ns,
              Ptr,
              Txt,
              Caa,
              Cert,
              Dnskey,
              Ds,
              Https,
              Loc,
              Naptr,
              Smimea,
              Srv,
              Sshfp,
              Svcb,
              Tlsa,
              Uri,
            ]),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<BatchRecordResponse>;

export type BatchRecordError = DefaultErrors;

export const batchRecord: API.OperationMethod<
  BatchRecordRequest,
  BatchRecordResponse,
  BatchRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchRecordRequest,
  output: BatchRecordResponse,
  errors: [],
}));

export interface ExportRecordRequest {
  /** Identifier. */
  zoneId: string;
}

export const ExportRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/dns_records/export" }),
    ),
) as unknown as Schema.Codec<ExportRecordRequest>;

export type ExportRecordResponse = string;

export const ExportRecordResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.String,
) as unknown as Schema.Codec<ExportRecordResponse>;

export type ExportRecordError = DefaultErrors;

export const exportRecord: API.OperationMethod<
  ExportRecordRequest,
  ExportRecordResponse,
  ExportRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportRecordRequest,
  output: ExportRecordResponse,
  errors: [],
}));

export interface ImportRecordRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: BIND config to import.    Tip:  When using cURL, a file can be uploaded using `--form 'file=@bind_config.txt'`. */
  file: string;
  /** Body param: Whether or not proxiable records should receive the performance and security benefits of Cloudflare.  The value should be either `true` or `false`. */
  proxied?: string;
}

export const ImportRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      file: Schema.String,
      proxied: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/dns_records/import",
        contentType: "multipart",
      }),
    ),
) as unknown as Schema.Codec<ImportRecordRequest>;

export interface ImportRecordResponse {
  /** Number of DNS records added. */
  recsAdded?: number | null;
  /** Total number of DNS records parsed. */
  totalRecordsParsed?: number | null;
}

export const ImportRecordResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      recsAdded: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalRecordsParsed: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          recsAdded: "recs_added",
          totalRecordsParsed: "total_records_parsed",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ImportRecordResponse>;

export type ImportRecordError = DefaultErrors;

export const importRecord: API.OperationMethod<
  ImportRecordRequest,
  ImportRecordResponse,
  ImportRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportRecordRequest,
  output: ImportRecordResponse,
  errors: [],
}));

export interface ScanRecordRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  body: unknown;
}

export const ScanRecordRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Unknown.pipe(T.HttpBody()),
    }).pipe(
      T.Http({ method: "POST", path: "/zones/{zone_id}/dns_records/scan" }),
    ),
) as unknown as Schema.Codec<ScanRecordRequest>;

export interface ScanRecordResponse {
  /** Number of DNS records added. */
  recsAdded?: number | null;
  /** Total number of DNS records parsed. */
  totalRecordsParsed?: number | null;
}

export const ScanRecordResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      recsAdded: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      totalRecordsParsed: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          recsAdded: "recs_added",
          totalRecordsParsed: "total_records_parsed",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ScanRecordResponse>;

export type ScanRecordError = DefaultErrors;

export const scanRecord: API.OperationMethod<
  ScanRecordRequest,
  ScanRecordResponse,
  ScanRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ScanRecordRequest,
  output: ScanRecordResponse,
  errors: [],
}));

// =============================================================================
// ReviewRecord
// =============================================================================

export interface ScanReviewRecordRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  accepts?: (
    | {
        name: string;
        ttl: number | "1";
        type: "A";
        comment?: string;
        content?: string;
        privateRouting?: boolean;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "AAAA";
        comment?: string;
        content?: string;
        privateRouting?: boolean;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CNAME";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: {
          flattenCname?: boolean;
          ipv4Only?: boolean;
          ipv6Only?: boolean;
        };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "MX";
        comment?: string;
        content?: string;
        priority?: number;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NS";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "OPENPGPKEY";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "PTR";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TXT";
        comment?: string;
        content?: string;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CAA";
        comment?: string;
        data?: { flags?: number; tag?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "CERT";
        comment?: string;
        data?: {
          algorithm?: number;
          certificate?: string;
          keyTag?: number;
          type?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DNSKEY";
        comment?: string;
        data?: {
          algorithm?: number;
          flags?: number;
          protocol?: number;
          publicKey?: string;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "DS";
        comment?: string;
        data?: {
          algorithm?: number;
          digest?: string;
          digestType?: number;
          keyTag?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "HTTPS";
        comment?: string;
        data?: { priority?: number; target?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "LOC";
        comment?: string;
        data?: {
          altitude?: number;
          latDegrees?: number;
          latDirection?: "N" | "S" | (string & {});
          latMinutes?: number;
          latSeconds?: number;
          longDegrees?: number;
          longDirection?: "E" | "W" | (string & {});
          longMinutes?: number;
          longSeconds?: number;
          precisionHorz?: number;
          precisionVert?: number;
          size?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "NAPTR";
        comment?: string;
        data?: {
          flags?: string;
          order?: number;
          preference?: number;
          regex?: string;
          replacement?: string;
          service?: string;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SMIMEA";
        comment?: string;
        data?: {
          certificate?: string;
          matchingType?: number;
          selector?: number;
          usage?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SRV";
        comment?: string;
        data?: {
          port?: number;
          priority?: number;
          target?: string;
          weight?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SSHFP";
        comment?: string;
        data?: { algorithm?: number; fingerprint?: string; type?: number };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "SVCB";
        comment?: string;
        data?: { priority?: number; target?: string; value?: string };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "TLSA";
        comment?: string;
        data?: {
          certificate?: string;
          matchingType?: number;
          selector?: number;
          usage?: number;
        };
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
    | {
        name: string;
        ttl: number | "1";
        type: "URI";
        comment?: string;
        data?: { target?: string; weight?: number };
        priority?: number;
        proxied?: boolean;
        settings?: { ipv4Only?: boolean; ipv6Only?: boolean };
        tags?: string[];
      }
  )[];
  /** Body param */
  rejects?: { id: string }[];
}

export const ScanReviewRecordRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      accepts: Schema.optional(
        Schema.Array(
          Schema.Union([
            ArecordParam,
            AaaarecordParam,
            CnamerecordParam,
            MxrecordParam,
            NsrecordParam,
            DnsrecordsOpenpgpkeyRecord,
            PtrrecordParam,
            TxtrecordParam,
            CaarecordParam,
            CertrecordParam,
            DnskeyrecordParam,
            DsrecordParam,
            HttpsrecordParam,
            LocrecordParam,
            NaptrrecordParam,
            SmimearecordParam,
            SrvrecordParam,
            SshfprecordParam,
            SvcbrecordParam,
            TlsarecordParam,
            UrirecordParam,
          ]),
        ),
      ),
      rejects: Schema.optional(Schema.Array(Delete)),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/dns_records/scan/review",
      }),
    ),
  ) as unknown as Schema.Codec<ScanReviewRecordRequest>;

export interface ScanReviewRecordResponse {
  accepts?:
    | (
        | {
            name: string;
            ttl: number | "1";
            type: "A";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "AAAA";
            comment?: string | null;
            content?: string | null;
            privateRouting?: boolean | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CNAME";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              flattenCname?: boolean | null;
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "MX";
            comment?: string | null;
            content?: string | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NS";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            id: string;
            comment: string;
            content: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            name: string;
            proxiable: boolean;
            proxied: boolean;
            settings: { ipv4Only?: boolean | null; ipv6Only?: boolean | null };
            tags: string[];
            ttl: number | "1";
            type: "OPENPGPKEY";
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "PTR";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TXT";
            comment?: string | null;
            content?: string | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CAA";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: number | null;
              tag?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "CERT";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              certificate?: string | null;
              keyTag?: number | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DNSKEY";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              flags?: number | null;
              protocol?: number | null;
              publicKey?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "DS";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              digest?: string | null;
              digestType?: number | null;
              keyTag?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "HTTPS";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "LOC";
            comment?: string | null;
            content?: string | null;
            data?: {
              altitude?: number | null;
              latDegrees?: number | null;
              latDirection?: "N" | "S" | (string & {}) | null;
              latMinutes?: number | null;
              latSeconds?: number | null;
              longDegrees?: number | null;
              longDirection?: "E" | "W" | (string & {}) | null;
              longMinutes?: number | null;
              longSeconds?: number | null;
              precisionHorz?: number | null;
              precisionVert?: number | null;
              size?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "NAPTR";
            comment?: string | null;
            content?: string | null;
            data?: {
              flags?: string | null;
              order?: number | null;
              preference?: number | null;
              regex?: string | null;
              replacement?: string | null;
              service?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SMIMEA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SRV";
            comment?: string | null;
            content?: string | null;
            data?: {
              port?: number | null;
              priority?: number | null;
              target?: string | null;
              weight?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SSHFP";
            comment?: string | null;
            content?: string | null;
            data?: {
              algorithm?: number | null;
              fingerprint?: string | null;
              type?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "SVCB";
            comment?: string | null;
            content?: string | null;
            data?: {
              priority?: number | null;
              target?: string | null;
              value?: string | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "TLSA";
            comment?: string | null;
            content?: string | null;
            data?: {
              certificate?: string | null;
              matchingType?: number | null;
              selector?: number | null;
              usage?: number | null;
            } | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
        | {
            name: string;
            ttl: number | "1";
            type: "URI";
            comment?: string | null;
            content?: string | null;
            data?: { target?: string | null; weight?: number | null } | null;
            priority?: number | null;
            proxied?: boolean | null;
            settings?: {
              ipv4Only?: boolean | null;
              ipv6Only?: boolean | null;
            } | null;
            tags?: string[] | null;
            id: string;
            createdOn: string;
            meta: unknown;
            modifiedOn: string;
            proxiable: boolean;
            commentModifiedOn?: string | null;
            tagsModifiedOn?: string | null;
          }
      )[]
    | null;
  rejects?: string[] | null;
}

export const ScanReviewRecordResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accepts: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Union([
              Openpgpkey,
              A,
              Aaaa,
              Cname,
              Mx,
              Ns,
              Ptr,
              Txt,
              Caa,
              Cert,
              Dnskey,
              Ds,
              Https,
              Loc,
              Naptr,
              Smimea,
              Srv,
              Sshfp,
              Svcb,
              Tlsa,
              Uri,
            ]),
          ),
          Schema.Null,
        ]),
      ),
      rejects: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ScanReviewRecordResponse>;

export type ScanReviewRecordError = DefaultErrors;

export const scanReviewRecord: API.OperationMethod<
  ScanReviewRecordRequest,
  ScanReviewRecordResponse,
  ScanReviewRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ScanReviewRecordRequest,
  output: ScanReviewRecordResponse,
  errors: [],
}));

// =============================================================================
// SettingAccount
// =============================================================================

export interface GetSettingAccountRequest {
  /** Identifier. */
  accountId: string;
}

export const GetSettingAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/dns_settings" }),
    ),
  ) as unknown as Schema.Codec<GetSettingAccountRequest>;

export interface GetSettingAccountResponse {
  zoneDefaults: {
    flattenAllCnames: boolean;
    foundationDns: boolean;
    internalDns: { referenceZoneId?: string | null };
    multiProvider: boolean;
    nameservers: {
      type:
        | "cloudflare.standard"
        | "cloudflare.standard.random"
        | "custom.account"
        | "custom.tenant"
        | (string & {});
    };
    nsTtl: number;
    secondaryOverrides: boolean;
    soa: {
      expire?: number | null;
      minTtl?: number | null;
      mname?: string | null;
      refresh?: number | null;
      retry?: number | null;
      rname?: string | null;
      ttl?: number | null;
    };
    zoneMode: "standard" | "cdn_only" | "dns_only" | (string & {});
  };
  /** When enabled, forces all proxied DNS records in the account to behave as DNS-only at the edge, regardless of each record's individual proxy setting. Note that this account-level override does not modi */
  enforceDnsOnly?: boolean | null;
}

export const GetSettingAccountResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneDefaults: ZoneDefaults,
      enforceDnsOnly: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          zoneDefaults: "zone_defaults",
          enforceDnsOnly: "enforce_dns_only",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetSettingAccountResponse>;

export type GetSettingAccountError = DefaultErrors;

export const getSettingAccount: API.OperationMethod<
  GetSettingAccountRequest,
  GetSettingAccountResponse,
  GetSettingAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingAccountRequest,
  output: GetSettingAccountResponse,
  errors: [],
}));

export interface PatchSettingAccountRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: When enabled, forces all proxied DNS records in the account to behave as DNS-only at the edge, regardless of each record's individual proxy setting. Note that this account-level override d */
  enforceDnsOnly?: boolean;
  /** Body param */
  zoneDefaults?: {
    flattenAllCnames?: boolean;
    foundationDns?: boolean;
    internalDns?: { referenceZoneId?: string };
    multiProvider?: boolean;
    nameservers?: {
      type?:
        | "cloudflare.standard"
        | "cloudflare.standard.random"
        | "custom.account"
        | "custom.tenant"
        | (string & {});
    };
    nsTtl?: number;
    secondaryOverrides?: boolean;
    soa?: {
      expire?: number;
      minTtl?: number;
      mname?: string | null;
      refresh?: number;
      retry?: number;
      rname?: string;
      ttl?: number;
    };
    zoneMode?: "standard" | "cdn_only" | "dns_only" | (string & {});
  };
}

export const PatchSettingAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      enforceDnsOnly: Schema.optional(Schema.Boolean),
      zoneDefaults: Schema.optional(ZoneDefaults2),
    }).pipe(
      Schema.encodeKeys({
        enforceDnsOnly: "enforce_dns_only",
        zoneDefaults: "zone_defaults",
      }),
      T.Http({ method: "PATCH", path: "/accounts/{account_id}/dns_settings" }),
    ),
  ) as unknown as Schema.Codec<PatchSettingAccountRequest>;

export interface PatchSettingAccountResponse {
  zoneDefaults: {
    flattenAllCnames: boolean;
    foundationDns: boolean;
    internalDns: { referenceZoneId?: string | null };
    multiProvider: boolean;
    nameservers: {
      type:
        | "cloudflare.standard"
        | "cloudflare.standard.random"
        | "custom.account"
        | "custom.tenant"
        | (string & {});
    };
    nsTtl: number;
    secondaryOverrides: boolean;
    soa: {
      expire?: number | null;
      minTtl?: number | null;
      mname?: string | null;
      refresh?: number | null;
      retry?: number | null;
      rname?: string | null;
      ttl?: number | null;
    };
    zoneMode: "standard" | "cdn_only" | "dns_only" | (string & {});
  };
  /** When enabled, forces all proxied DNS records in the account to behave as DNS-only at the edge, regardless of each record's individual proxy setting. Note that this account-level override does not modi */
  enforceDnsOnly?: boolean | null;
}

export const PatchSettingAccountResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneDefaults: ZoneDefaults,
      enforceDnsOnly: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          zoneDefaults: "zone_defaults",
          enforceDnsOnly: "enforce_dns_only",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchSettingAccountResponse>;

export type PatchSettingAccountError = DefaultErrors | DnsSettingNotAvailable;

export const patchSettingAccount: API.OperationMethod<
  PatchSettingAccountRequest,
  PatchSettingAccountResponse,
  PatchSettingAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingAccountRequest,
  output: PatchSettingAccountResponse,
  errors: [DnsSettingNotAvailable],
}));

// =============================================================================
// SettingAccountView
// =============================================================================

export interface GetSettingAccountViewRequest {
  viewId: string;
  /** Identifier. */
  accountId: string;
}

export const GetSettingAccountViewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      viewId: Schema.String.pipe(T.HttpPath("viewId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/dns_settings/views/{viewId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetSettingAccountViewRequest>;

export interface GetSettingAccountViewResponse {
  /** Identifier. */
  id: string;
  /** When the view was created. */
  createdTime: string;
  /** When the view was last modified. */
  modifiedTime: string;
  /** The name of the view. */
  name: string;
  /** The list of zones linked to this view. */
  zones: string[];
}

export const GetSettingAccountViewResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdTime: Schema.String,
      modifiedTime: Schema.String,
      name: Schema.String,
      zones: Schema.Array(Schema.String),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdTime: "created_time",
          modifiedTime: "modified_time",
          name: "name",
          zones: "zones",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetSettingAccountViewResponse>;

export type GetSettingAccountViewError = DefaultErrors | ViewNotFound;

export const getSettingAccountView: API.OperationMethod<
  GetSettingAccountViewRequest,
  GetSettingAccountViewResponse,
  GetSettingAccountViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingAccountViewRequest,
  output: GetSettingAccountViewResponse,
  errors: [ViewNotFound],
}));

export interface ListSettingAccountViewsRequest {
  /** Path param: Identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Direction to order DNS views in. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. */
  match?: "any" | "all" | (string & {});
  /** Query param */
  name?: {
    contains?: string;
    endswith?: string;
    exact?: string;
    startswith?: string;
  };
  /** Query param: Field to order DNS views by. */
  order?: "name" | "created_on" | "modified_on" | (string & {});
  /** Query param: A zone ID that exists in the zones list for the view. */
  zoneId?: string;
  /** Query param: A zone name that exists in the zones list for the view. */
  zoneName?: string;
}

export const ListSettingAccountViewsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      match: Schema.optional(
        Schema.Union([Schema.Literals(["any", "all"]), Schema.String]),
      ).pipe(T.HttpQuery("match")),
      name: Schema.optional(
        Schema.Struct({
          contains: Schema.optional(Schema.String),
          endswith: Schema.optional(Schema.String),
          exact: Schema.optional(Schema.String),
          startswith: Schema.optional(Schema.String),
        }),
      ).pipe(T.HttpQuery("name")),
      order: Schema.optional(
        Schema.Union([
          Schema.Literals(["name", "created_on", "modified_on"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("order")),
      zoneId: Schema.optional(Schema.String).pipe(T.HttpQuery("zone_id")),
      zoneName: Schema.optional(Schema.String).pipe(T.HttpQuery("zone_name")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/dns_settings/views",
      }),
    ),
  ) as unknown as Schema.Codec<ListSettingAccountViewsRequest>;

export interface ListSettingAccountViewsResponse {
  result: {
    id: string;
    createdTime: string;
    modifiedTime: string;
    name: string;
    zones: string[];
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSettingAccountViewsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListSettingAccountViewsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListRecordsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListSettingAccountViewsResponse>;

export type ListSettingAccountViewsError = DefaultErrors;

export const listSettingAccountViews: API.PaginatedOperationMethod<
  ListSettingAccountViewsRequest,
  ListSettingAccountViewsResponse,
  ListSettingAccountViewsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingAccountViewsRequest,
  output: ListSettingAccountViewsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateSettingAccountViewRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The name of the view. */
  name: string;
  /** Body param: The list of zones linked to this view. */
  zones: string[];
}

export const CreateSettingAccountViewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      zones: Schema.Array(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/dns_settings/views",
      }),
    ),
  ) as unknown as Schema.Codec<CreateSettingAccountViewRequest>;

export interface CreateSettingAccountViewResponse {
  /** Identifier. */
  id: string;
  /** When the view was created. */
  createdTime: string;
  /** When the view was last modified. */
  modifiedTime: string;
  /** The name of the view. */
  name: string;
  /** The list of zones linked to this view. */
  zones: string[];
}

export const CreateSettingAccountViewResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdTime: Schema.String,
      modifiedTime: Schema.String,
      name: Schema.String,
      zones: Schema.Array(Schema.String),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdTime: "created_time",
          modifiedTime: "modified_time",
          name: "name",
          zones: "zones",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateSettingAccountViewResponse>;

export type CreateSettingAccountViewError =
  | DefaultErrors
  | InternalDnsNotAvailable;

export const createSettingAccountView: API.OperationMethod<
  CreateSettingAccountViewRequest,
  CreateSettingAccountViewResponse,
  CreateSettingAccountViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSettingAccountViewRequest,
  output: CreateSettingAccountViewResponse,
  errors: [InternalDnsNotAvailable],
}));

export interface PatchSettingAccountViewRequest {
  viewId: string;
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: The name of the view. */
  name?: string;
  /** Body param: The list of zones linked to this view. */
  zones?: string[];
}

export const PatchSettingAccountViewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      viewId: Schema.String.pipe(T.HttpPath("viewId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.optional(Schema.String),
      zones: Schema.optional(Schema.Array(Schema.String)),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/accounts/{account_id}/dns_settings/views/{viewId}",
      }),
    ),
  ) as unknown as Schema.Codec<PatchSettingAccountViewRequest>;

export interface PatchSettingAccountViewResponse {
  /** Identifier. */
  id: string;
  /** When the view was created. */
  createdTime: string;
  /** When the view was last modified. */
  modifiedTime: string;
  /** The name of the view. */
  name: string;
  /** The list of zones linked to this view. */
  zones: string[];
}

export const PatchSettingAccountViewResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      createdTime: Schema.String,
      modifiedTime: Schema.String,
      name: Schema.String,
      zones: Schema.Array(Schema.String),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdTime: "created_time",
          modifiedTime: "modified_time",
          name: "name",
          zones: "zones",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchSettingAccountViewResponse>;

export type PatchSettingAccountViewError = DefaultErrors | ViewNotFound;

export const patchSettingAccountView: API.OperationMethod<
  PatchSettingAccountViewRequest,
  PatchSettingAccountViewResponse,
  PatchSettingAccountViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingAccountViewRequest,
  output: PatchSettingAccountViewResponse,
  errors: [ViewNotFound],
}));

export interface DeleteSettingAccountViewRequest {
  viewId: string;
  /** Identifier. */
  accountId: string;
}

export const DeleteSettingAccountViewRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      viewId: Schema.String.pipe(T.HttpPath("viewId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/dns_settings/views/{viewId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteSettingAccountViewRequest>;

export interface DeleteSettingAccountViewResponse {
  /** Identifier. */
  id?: string | null;
}

export const DeleteSettingAccountViewResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteSettingAccountViewResponse>;

export type DeleteSettingAccountViewError = DefaultErrors | ViewNotFound;

export const deleteSettingAccountView: API.OperationMethod<
  DeleteSettingAccountViewRequest,
  DeleteSettingAccountViewResponse,
  DeleteSettingAccountViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingAccountViewRequest,
  output: DeleteSettingAccountViewResponse,
  errors: [ViewNotFound],
}));

// =============================================================================
// SettingZone
// =============================================================================

export interface GetSettingZoneRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetSettingZoneRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/dns_settings" })),
) as unknown as Schema.Codec<GetSettingZoneRequest>;

export interface GetSettingZoneResponse {
  /** Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened. */
  flattenAllCnames: boolean;
  /** Whether to enable Foundation DNS Advanced Nameservers on the zone. */
  foundationDns: boolean;
  /** Settings for this internal zone. */
  internalDns: { referenceZoneId?: string | null };
  /** Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. */
  multiProvider: boolean;
  /** Settings determining the nameservers through which the zone should be available. */
  nameservers: {
    type:
      | "cloudflare.standard"
      | "custom.account"
      | "custom.tenant"
      | "custom.zone"
      | (string & {});
    nsSet?: number | null;
  };
  /** The time to live (TTL) of the zone's nameserver (NS) records. */
  nsTtl: number;
  /** Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. */
  secondaryOverrides: boolean;
  /** Components of the zone's SOA record. */
  soa: {
    expire?: number | null;
    minTtl?: number | null;
    mname?: string | null;
    refresh?: number | null;
    retry?: number | null;
    rname?: string | null;
    ttl?: number | null;
  };
  /** Whether the zone mode is a regular or CDN/DNS only zone. */
  zoneMode: "standard" | "cdn_only" | "dns_only" | (string & {});
}

export const GetSettingZoneResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      flattenAllCnames: Schema.Boolean,
      foundationDns: Schema.Boolean,
      internalDns: InternalDNS,
      multiProvider: Schema.Boolean,
      nameservers: Nameservers3,
      nsTtl: Schema.Number,
      secondaryOverrides: Schema.Boolean,
      soa: Soa,
      zoneMode: Schema.Union([
        Schema.Literals(["standard", "cdn_only", "dns_only"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          flattenAllCnames: "flatten_all_cnames",
          foundationDns: "foundation_dns",
          internalDns: "internal_dns",
          multiProvider: "multi_provider",
          nameservers: "nameservers",
          nsTtl: "ns_ttl",
          secondaryOverrides: "secondary_overrides",
          soa: "soa",
          zoneMode: "zone_mode",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetSettingZoneResponse>;

export type GetSettingZoneError = DefaultErrors | Forbidden;

export const getSettingZone: API.OperationMethod<
  GetSettingZoneRequest,
  GetSettingZoneResponse,
  GetSettingZoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingZoneRequest,
  output: GetSettingZoneResponse,
  errors: [Forbidden],
}));

export interface PatchSettingZoneRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened. */
  flattenAllCnames?: boolean;
  /** Body param: Whether to enable Foundation DNS Advanced Nameservers on the zone. */
  foundationDns?: boolean;
  /** Body param: Settings for this internal zone. */
  internalDns?: { referenceZoneId?: string };
  /** Body param: Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zon */
  multiProvider?: boolean;
  /** Body param: Settings determining the nameservers through which the zone should be available. */
  nameservers?: {
    nsSet?: number;
    type?:
      | "cloudflare.standard"
      | "custom.account"
      | "custom.tenant"
      | "custom.zone"
      | (string & {});
  };
  /** Body param: The time to live (TTL) of the zone's nameserver (NS) records. */
  nsTtl?: number;
  /** Body param: Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. */
  secondaryOverrides?: boolean;
  /** Body param: Components of the zone's SOA record. */
  soa?: {
    expire?: number;
    minTtl?: number;
    mname?: string | null;
    refresh?: number;
    retry?: number;
    rname?: string;
    ttl?: number;
  };
  /** Body param: Whether the zone mode is a regular or CDN/DNS only zone. */
  zoneMode?: "standard" | "cdn_only" | "dns_only" | (string & {});
}

export const PatchSettingZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      flattenAllCnames: Schema.optional(Schema.Boolean),
      foundationDns: Schema.optional(Schema.Boolean),
      internalDns: Schema.optional(InternalDNS),
      multiProvider: Schema.optional(Schema.Boolean),
      nameservers: Schema.optional(Nameservers4),
      nsTtl: Schema.optional(Schema.Number),
      secondaryOverrides: Schema.optional(Schema.Boolean),
      soa: Schema.optional(Soa),
      zoneMode: Schema.optional(
        Schema.Union([
          Schema.Literals(["standard", "cdn_only", "dns_only"]),
          Schema.String,
        ]),
      ),
    }).pipe(
      Schema.encodeKeys({
        flattenAllCnames: "flatten_all_cnames",
        foundationDns: "foundation_dns",
        internalDns: "internal_dns",
        multiProvider: "multi_provider",
        nameservers: "nameservers",
        nsTtl: "ns_ttl",
        secondaryOverrides: "secondary_overrides",
        soa: "soa",
        zoneMode: "zone_mode",
      }),
      T.Http({ method: "PATCH", path: "/zones/{zone_id}/dns_settings" }),
    ),
  ) as unknown as Schema.Codec<PatchSettingZoneRequest>;

export interface PatchSettingZoneResponse {
  /** Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened. */
  flattenAllCnames: boolean;
  /** Whether to enable Foundation DNS Advanced Nameservers on the zone. */
  foundationDns: boolean;
  /** Settings for this internal zone. */
  internalDns: { referenceZoneId?: string | null };
  /** Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. */
  multiProvider: boolean;
  /** Settings determining the nameservers through which the zone should be available. */
  nameservers: {
    type:
      | "cloudflare.standard"
      | "custom.account"
      | "custom.tenant"
      | "custom.zone"
      | (string & {});
    nsSet?: number | null;
  };
  /** The time to live (TTL) of the zone's nameserver (NS) records. */
  nsTtl: number;
  /** Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. */
  secondaryOverrides: boolean;
  /** Components of the zone's SOA record. */
  soa: {
    expire?: number | null;
    minTtl?: number | null;
    mname?: string | null;
    refresh?: number | null;
    retry?: number | null;
    rname?: string | null;
    ttl?: number | null;
  };
  /** Whether the zone mode is a regular or CDN/DNS only zone. */
  zoneMode: "standard" | "cdn_only" | "dns_only" | (string & {});
}

export const PatchSettingZoneResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      flattenAllCnames: Schema.Boolean,
      foundationDns: Schema.Boolean,
      internalDns: InternalDNS,
      multiProvider: Schema.Boolean,
      nameservers: Nameservers3,
      nsTtl: Schema.Number,
      secondaryOverrides: Schema.Boolean,
      soa: Soa,
      zoneMode: Schema.Union([
        Schema.Literals(["standard", "cdn_only", "dns_only"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          flattenAllCnames: "flatten_all_cnames",
          foundationDns: "foundation_dns",
          internalDns: "internal_dns",
          multiProvider: "multi_provider",
          nameservers: "nameservers",
          nsTtl: "ns_ttl",
          secondaryOverrides: "secondary_overrides",
          soa: "soa",
          zoneMode: "zone_mode",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchSettingZoneResponse>;

export type PatchSettingZoneError = DefaultErrors | Forbidden;

export const patchSettingZone: API.OperationMethod<
  PatchSettingZoneRequest,
  PatchSettingZoneResponse,
  PatchSettingZoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingZoneRequest,
  output: PatchSettingZoneResponse,
  errors: [Forbidden],
}));

// =============================================================================
// TriggerRecord
// =============================================================================

export interface ScanTriggerRecordRequest {
  /** Identifier. */
  zoneId: string;
}

export const ScanTriggerRecordRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/dns_records/scan/trigger",
      }),
    ),
  ) as unknown as Schema.Codec<ScanTriggerRecordRequest>;

export interface ScanTriggerRecordResponse {
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

export const ScanTriggerRecordResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      errors: Schema.Array(Error2),
      messages: Schema.Array(Error2),
      success: Schema.Literal(true),
    }),
  ) as unknown as Schema.Codec<ScanTriggerRecordResponse>;

export type ScanTriggerRecordError = DefaultErrors;

export const scanTriggerRecord: API.OperationMethod<
  ScanTriggerRecordRequest,
  ScanTriggerRecordResponse,
  ScanTriggerRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ScanTriggerRecordRequest,
  output: ScanTriggerRecordResponse,
  errors: [],
}));

// =============================================================================
// UsageAccount
// =============================================================================

export interface GetUsageAccountRequest {
  /** Identifier. */
  accountId: string;
}

export const GetUsageAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/dns_records/usage",
      }),
    ),
  ) as unknown as Schema.Codec<GetUsageAccountRequest>;

export interface GetUsageAccountResponse {
  /** Maximum number of DNS records allowed across all public zones in the account. Null if using zone-level quota. */
  recordQuota: number | null;
  /** Current number of DNS records across all public zones in the account. */
  recordUsage: number;
  /** Maximum number of DNS records allowed across all internal zones in the account. Only present if internal DNS is enabled. */
  internalRecordQuota?: number | null;
  /** Current number of DNS records across all internal zones in the account. Only present if internal DNS is enabled. */
  internalRecordUsage?: number | null;
}

export const GetUsageAccountResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      recordQuota: Schema.Union([Schema.Number, Schema.Null]),
      recordUsage: Schema.Number,
      internalRecordQuota: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      internalRecordUsage: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          recordQuota: "record_quota",
          recordUsage: "record_usage",
          internalRecordQuota: "internal_record_quota",
          internalRecordUsage: "internal_record_usage",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetUsageAccountResponse>;

export type GetUsageAccountError = DefaultErrors;

export const getUsageAccount: API.OperationMethod<
  GetUsageAccountRequest,
  GetUsageAccountResponse,
  GetUsageAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsageAccountRequest,
  output: GetUsageAccountResponse,
  errors: [],
}));

// =============================================================================
// UsageZone
// =============================================================================

export interface GetUsageZoneRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetUsageZoneRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/dns_records/usage" }),
    ),
) as unknown as Schema.Codec<GetUsageZoneRequest>;

export interface GetUsageZoneResponse {
  /** Maximum number of DNS records allowed for the zone. Null if using account-level quota. */
  recordQuota: number | null;
  /** Current number of DNS records in the zone. */
  recordUsage: number;
}

export const GetUsageZoneResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      recordQuota: Schema.Union([Schema.Number, Schema.Null]),
      recordUsage: Schema.Number,
    })
      .pipe(
        Schema.encodeKeys({
          recordQuota: "record_quota",
          recordUsage: "record_usage",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetUsageZoneResponse>;

export type GetUsageZoneError = DefaultErrors;

export const getUsageZone: API.OperationMethod<
  GetUsageZoneRequest,
  GetUsageZoneResponse,
  GetUsageZoneError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetUsageZoneRequest,
  output: GetUsageZoneResponse,
  errors: [],
}));

// =============================================================================
// ZoneTransferAcl
// =============================================================================

export interface GetZoneTransferAclRequest {
  aclId: string;
  accountId: string;
}

export const GetZoneTransferAclRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      aclId: Schema.String.pipe(T.HttpPath("aclId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/secondary_dns/acls/{aclId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetZoneTransferAclRequest>;

export interface GetZoneTransferAclResponse {
  id: string;
  /** Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to allow additional NOTIFY IPs for secondary zones and IPs Cloudf */
  ipRange: string;
  /** The name of the acl. */
  name: string;
}

export const GetZoneTransferAclResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      ipRange: Schema.String,
      name: Schema.String,
    })
      .pipe(Schema.encodeKeys({ id: "id", ipRange: "ip_range", name: "name" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetZoneTransferAclResponse>;

export type GetZoneTransferAclError = DefaultErrors | AclNotFound;

export const getZoneTransferAcl: API.OperationMethod<
  GetZoneTransferAclRequest,
  GetZoneTransferAclResponse,
  GetZoneTransferAclError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetZoneTransferAclRequest,
  output: GetZoneTransferAclResponse,
  errors: [AclNotFound],
}));

export interface ListZoneTransferAclsRequest {
  accountId: string;
}

export const ListZoneTransferAclsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/secondary_dns/acls",
      }),
    ),
  ) as unknown as Schema.Codec<ListZoneTransferAclsRequest>;

export interface ListZoneTransferAclsResponse {
  result: { id: string; ipRange: string; name: string }[];
}

export const ListZoneTransferAclsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListZoneTransferAclsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListZoneTransferAclsResponse>;

export type ListZoneTransferAclsError = DefaultErrors;

export const listZoneTransferAcls: API.PaginatedOperationMethod<
  ListZoneTransferAclsRequest,
  ListZoneTransferAclsResponse,
  ListZoneTransferAclsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListZoneTransferAclsRequest,
  output: ListZoneTransferAclsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateZoneTransferAclRequest {
  /** Path param */
  accountId: string;
  /** Body param: Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to allow additional NOTIFY IPs for secondary zones an */
  ipRange: string;
  /** Body param: The name of the acl. */
  name: string;
}

export const CreateZoneTransferAclRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ipRange: Schema.String,
      name: Schema.String,
    }).pipe(
      Schema.encodeKeys({ ipRange: "ip_range", name: "name" }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/secondary_dns/acls",
      }),
    ),
  ) as unknown as Schema.Codec<CreateZoneTransferAclRequest>;

export interface CreateZoneTransferAclResponse {
  id: string;
  /** Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to allow additional NOTIFY IPs for secondary zones and IPs Cloudf */
  ipRange: string;
  /** The name of the acl. */
  name: string;
}

export const CreateZoneTransferAclResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      ipRange: Schema.String,
      name: Schema.String,
    })
      .pipe(Schema.encodeKeys({ id: "id", ipRange: "ip_range", name: "name" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateZoneTransferAclResponse>;

export type CreateZoneTransferAclError = DefaultErrors;

export const createZoneTransferAcl: API.OperationMethod<
  CreateZoneTransferAclRequest,
  CreateZoneTransferAclResponse,
  CreateZoneTransferAclError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateZoneTransferAclRequest,
  output: CreateZoneTransferAclResponse,
  errors: [],
}));

export interface UpdateZoneTransferAclRequest {
  aclId: string;
  /** Path param */
  accountId: string;
  /** Body param: Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to allow additional NOTIFY IPs for secondary zones an */
  ipRange: string;
  /** Body param: The name of the acl. */
  name: string;
}

export const UpdateZoneTransferAclRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      aclId: Schema.String.pipe(T.HttpPath("aclId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ipRange: Schema.String,
      name: Schema.String,
    }).pipe(
      Schema.encodeKeys({ ipRange: "ip_range", name: "name" }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/secondary_dns/acls/{aclId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateZoneTransferAclRequest>;

export interface UpdateZoneTransferAclResponse {
  id: string;
  /** Allowed IPv4/IPv6 address range of primary or secondary nameservers. This will be applied for the entire account. The IP range is used to allow additional NOTIFY IPs for secondary zones and IPs Cloudf */
  ipRange: string;
  /** The name of the acl. */
  name: string;
}

export const UpdateZoneTransferAclResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      ipRange: Schema.String,
      name: Schema.String,
    })
      .pipe(Schema.encodeKeys({ id: "id", ipRange: "ip_range", name: "name" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateZoneTransferAclResponse>;

export type UpdateZoneTransferAclError = DefaultErrors | AclNotFound;

export const updateZoneTransferAcl: API.OperationMethod<
  UpdateZoneTransferAclRequest,
  UpdateZoneTransferAclResponse,
  UpdateZoneTransferAclError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateZoneTransferAclRequest,
  output: UpdateZoneTransferAclResponse,
  errors: [AclNotFound],
}));

export interface DeleteZoneTransferAclRequest {
  aclId: string;
  accountId: string;
}

export const DeleteZoneTransferAclRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      aclId: Schema.String.pipe(T.HttpPath("aclId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/secondary_dns/acls/{aclId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteZoneTransferAclRequest>;

export interface DeleteZoneTransferAclResponse {
  id?: string | null;
}

export const DeleteZoneTransferAclResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteZoneTransferAclResponse>;

export type DeleteZoneTransferAclError = DefaultErrors | AclNotFound;

export const deleteZoneTransferAcl: API.OperationMethod<
  DeleteZoneTransferAclRequest,
  DeleteZoneTransferAclResponse,
  DeleteZoneTransferAclError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteZoneTransferAclRequest,
  output: DeleteZoneTransferAclResponse,
  errors: [AclNotFound],
}));

// =============================================================================
// ZoneTransferForceAxfr
// =============================================================================

export interface CreateZoneTransferForceAxfrRequest {
  /** Path param */
  zoneId: string;
  /** Body param */
  body: unknown;
}

export const CreateZoneTransferForceAxfrRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Unknown.pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/secondary_dns/force_axfr",
      }),
    ),
  ) as unknown as Schema.Codec<CreateZoneTransferForceAxfrRequest>;

export type CreateZoneTransferForceAxfrResponse = string;

export const CreateZoneTransferForceAxfrResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateZoneTransferForceAxfrResponse>;

export type CreateZoneTransferForceAxfrError = DefaultErrors;

export const createZoneTransferForceAxfr: API.OperationMethod<
  CreateZoneTransferForceAxfrRequest,
  CreateZoneTransferForceAxfrResponse,
  CreateZoneTransferForceAxfrError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateZoneTransferForceAxfrRequest,
  output: CreateZoneTransferForceAxfrResponse,
  errors: [],
}));

// =============================================================================
// ZoneTransferIncoming
// =============================================================================

export interface GetZoneTransferIncomingRequest {
  zoneId: string;
}

export const GetZoneTransferIncomingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/secondary_dns/incoming",
      }),
    ),
  ) as unknown as Schema.Codec<GetZoneTransferIncomingRequest>;

export interface GetZoneTransferIncomingResponse {
  id?: string | null;
  /** How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. */
  autoRefreshSeconds?: number | null;
  /** The time for a specific event. */
  checkedTime?: string | null;
  /** The time for a specific event. */
  createdTime?: string | null;
  /** The time for a specific event. */
  modifiedTime?: string | null;
  /** Zone name. */
  name?: string | null;
  /** A list of peer tags. */
  peers?: string[] | null;
  /** The serial number of the SOA for the given zone. */
  soaSerial?: number | null;
}

export const GetZoneTransferIncomingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      autoRefreshSeconds: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      checkedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      peers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      soaSerial: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          autoRefreshSeconds: "auto_refresh_seconds",
          checkedTime: "checked_time",
          createdTime: "created_time",
          modifiedTime: "modified_time",
          name: "name",
          peers: "peers",
          soaSerial: "soa_serial",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetZoneTransferIncomingResponse>;

export type GetZoneTransferIncomingError =
  | DefaultErrors
  | IncomingZoneTransferNotFound;

export const getZoneTransferIncoming: API.OperationMethod<
  GetZoneTransferIncomingRequest,
  GetZoneTransferIncomingResponse,
  GetZoneTransferIncomingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetZoneTransferIncomingRequest,
  output: GetZoneTransferIncomingResponse,
  errors: [IncomingZoneTransferNotFound],
}));

export interface CreateZoneTransferIncomingRequest {
  /** Path param */
  zoneId: string;
  /** Body param: How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. */
  autoRefreshSeconds: number;
  /** Body param: Zone name. */
  name: string;
  /** Body param: A list of peer tags. */
  peers: string[];
}

export const CreateZoneTransferIncomingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      autoRefreshSeconds: Schema.Number,
      name: Schema.String,
      peers: Schema.Array(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        autoRefreshSeconds: "auto_refresh_seconds",
        name: "name",
        peers: "peers",
      }),
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/secondary_dns/incoming",
      }),
    ),
  ) as unknown as Schema.Codec<CreateZoneTransferIncomingRequest>;

export interface CreateZoneTransferIncomingResponse {
  id?: string | null;
  /** How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. */
  autoRefreshSeconds?: number | null;
  /** The time for a specific event. */
  checkedTime?: string | null;
  /** The time for a specific event. */
  createdTime?: string | null;
  /** The time for a specific event. */
  modifiedTime?: string | null;
  /** Zone name. */
  name?: string | null;
  /** A list of peer tags. */
  peers?: string[] | null;
  /** The serial number of the SOA for the given zone. */
  soaSerial?: number | null;
}

export const CreateZoneTransferIncomingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      autoRefreshSeconds: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      checkedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      peers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      soaSerial: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          autoRefreshSeconds: "auto_refresh_seconds",
          checkedTime: "checked_time",
          createdTime: "created_time",
          modifiedTime: "modified_time",
          name: "name",
          peers: "peers",
          soaSerial: "soa_serial",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateZoneTransferIncomingResponse>;

export type CreateZoneTransferIncomingError = DefaultErrors;

export const createZoneTransferIncoming: API.OperationMethod<
  CreateZoneTransferIncomingRequest,
  CreateZoneTransferIncomingResponse,
  CreateZoneTransferIncomingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateZoneTransferIncomingRequest,
  output: CreateZoneTransferIncomingResponse,
  errors: [],
}));

export interface UpdateZoneTransferIncomingRequest {
  /** Path param */
  zoneId: string;
  /** Body param: How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. */
  autoRefreshSeconds: number;
  /** Body param: Zone name. */
  name: string;
  /** Body param: A list of peer tags. */
  peers: string[];
}

export const UpdateZoneTransferIncomingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      autoRefreshSeconds: Schema.Number,
      name: Schema.String,
      peers: Schema.Array(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        autoRefreshSeconds: "auto_refresh_seconds",
        name: "name",
        peers: "peers",
      }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/secondary_dns/incoming",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateZoneTransferIncomingRequest>;

export interface UpdateZoneTransferIncomingResponse {
  id?: string | null;
  /** How often should a secondary zone auto refresh regardless of DNS NOTIFY. Not applicable for primary zones. */
  autoRefreshSeconds?: number | null;
  /** The time for a specific event. */
  checkedTime?: string | null;
  /** The time for a specific event. */
  createdTime?: string | null;
  /** The time for a specific event. */
  modifiedTime?: string | null;
  /** Zone name. */
  name?: string | null;
  /** A list of peer tags. */
  peers?: string[] | null;
  /** The serial number of the SOA for the given zone. */
  soaSerial?: number | null;
}

export const UpdateZoneTransferIncomingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      autoRefreshSeconds: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      checkedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      peers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      soaSerial: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          autoRefreshSeconds: "auto_refresh_seconds",
          checkedTime: "checked_time",
          createdTime: "created_time",
          modifiedTime: "modified_time",
          name: "name",
          peers: "peers",
          soaSerial: "soa_serial",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateZoneTransferIncomingResponse>;

export type UpdateZoneTransferIncomingError =
  | DefaultErrors
  | IncomingZoneTransferNotFound;

export const updateZoneTransferIncoming: API.OperationMethod<
  UpdateZoneTransferIncomingRequest,
  UpdateZoneTransferIncomingResponse,
  UpdateZoneTransferIncomingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateZoneTransferIncomingRequest,
  output: UpdateZoneTransferIncomingResponse,
  errors: [IncomingZoneTransferNotFound],
}));

export interface DeleteZoneTransferIncomingRequest {
  zoneId: string;
}

export const DeleteZoneTransferIncomingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/secondary_dns/incoming",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteZoneTransferIncomingRequest>;

export interface DeleteZoneTransferIncomingResponse {
  id?: string | null;
}

export const DeleteZoneTransferIncomingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteZoneTransferIncomingResponse>;

export type DeleteZoneTransferIncomingError =
  | DefaultErrors
  | IncomingZoneTransferNotFound;

export const deleteZoneTransferIncoming: API.OperationMethod<
  DeleteZoneTransferIncomingRequest,
  DeleteZoneTransferIncomingResponse,
  DeleteZoneTransferIncomingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteZoneTransferIncomingRequest,
  output: DeleteZoneTransferIncomingResponse,
  errors: [IncomingZoneTransferNotFound],
}));

// =============================================================================
// ZoneTransferOutgoing
// =============================================================================

export interface GetZoneTransferOutgoingRequest {
  zoneId: string;
}

export const GetZoneTransferOutgoingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/secondary_dns/outgoing",
      }),
    ),
  ) as unknown as Schema.Codec<GetZoneTransferOutgoingRequest>;

export interface GetZoneTransferOutgoingResponse {
  id?: string | null;
  /** The time for a specific event. */
  checkedTime?: string | null;
  /** The time for a specific event. */
  createdTime?: string | null;
  /** The time for a specific event. */
  lastTransferredTime?: string | null;
  /** Zone name. */
  name?: string | null;
  /** A list of peer tags. */
  peers?: string[] | null;
  /** The serial number of the SOA for the given zone. */
  soaSerial?: number | null;
}

export const GetZoneTransferOutgoingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastTransferredTime: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      peers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      soaSerial: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checkedTime: "checked_time",
          createdTime: "created_time",
          lastTransferredTime: "last_transferred_time",
          name: "name",
          peers: "peers",
          soaSerial: "soa_serial",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetZoneTransferOutgoingResponse>;

export type GetZoneTransferOutgoingError =
  | DefaultErrors
  | OutgoingZoneTransferNotFound
  | OutgoingZoneTransfersNotAllowed;

export const getZoneTransferOutgoing: API.OperationMethod<
  GetZoneTransferOutgoingRequest,
  GetZoneTransferOutgoingResponse,
  GetZoneTransferOutgoingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetZoneTransferOutgoingRequest,
  output: GetZoneTransferOutgoingResponse,
  errors: [OutgoingZoneTransferNotFound, OutgoingZoneTransfersNotAllowed],
}));

export interface CreateZoneTransferOutgoingRequest {
  /** Path param */
  zoneId: string;
  /** Body param: Zone name. */
  name: string;
  /** Body param: A list of peer tags. */
  peers: string[];
}

export const CreateZoneTransferOutgoingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      name: Schema.String,
      peers: Schema.Array(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/secondary_dns/outgoing",
      }),
    ),
  ) as unknown as Schema.Codec<CreateZoneTransferOutgoingRequest>;

export interface CreateZoneTransferOutgoingResponse {
  id?: string | null;
  /** The time for a specific event. */
  checkedTime?: string | null;
  /** The time for a specific event. */
  createdTime?: string | null;
  /** The time for a specific event. */
  lastTransferredTime?: string | null;
  /** Zone name. */
  name?: string | null;
  /** A list of peer tags. */
  peers?: string[] | null;
  /** The serial number of the SOA for the given zone. */
  soaSerial?: number | null;
}

export const CreateZoneTransferOutgoingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastTransferredTime: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      peers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      soaSerial: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checkedTime: "checked_time",
          createdTime: "created_time",
          lastTransferredTime: "last_transferred_time",
          name: "name",
          peers: "peers",
          soaSerial: "soa_serial",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateZoneTransferOutgoingResponse>;

export type CreateZoneTransferOutgoingError =
  | DefaultErrors
  | OutgoingZoneTransfersNotAllowed;

export const createZoneTransferOutgoing: API.OperationMethod<
  CreateZoneTransferOutgoingRequest,
  CreateZoneTransferOutgoingResponse,
  CreateZoneTransferOutgoingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateZoneTransferOutgoingRequest,
  output: CreateZoneTransferOutgoingResponse,
  errors: [OutgoingZoneTransfersNotAllowed],
}));

export interface UpdateZoneTransferOutgoingRequest {
  /** Path param */
  zoneId: string;
  /** Body param: Zone name. */
  name: string;
  /** Body param: A list of peer tags. */
  peers: string[];
}

export const UpdateZoneTransferOutgoingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      name: Schema.String,
      peers: Schema.Array(Schema.String),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/secondary_dns/outgoing",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateZoneTransferOutgoingRequest>;

export interface UpdateZoneTransferOutgoingResponse {
  id?: string | null;
  /** The time for a specific event. */
  checkedTime?: string | null;
  /** The time for a specific event. */
  createdTime?: string | null;
  /** The time for a specific event. */
  lastTransferredTime?: string | null;
  /** Zone name. */
  name?: string | null;
  /** A list of peer tags. */
  peers?: string[] | null;
  /** The serial number of the SOA for the given zone. */
  soaSerial?: number | null;
}

export const UpdateZoneTransferOutgoingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      checkedTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdTime: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      lastTransferredTime: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      peers: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      soaSerial: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          checkedTime: "checked_time",
          createdTime: "created_time",
          lastTransferredTime: "last_transferred_time",
          name: "name",
          peers: "peers",
          soaSerial: "soa_serial",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateZoneTransferOutgoingResponse>;

export type UpdateZoneTransferOutgoingError =
  | DefaultErrors
  | OutgoingZoneTransferNotFound
  | OutgoingZoneTransfersNotAllowed;

export const updateZoneTransferOutgoing: API.OperationMethod<
  UpdateZoneTransferOutgoingRequest,
  UpdateZoneTransferOutgoingResponse,
  UpdateZoneTransferOutgoingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateZoneTransferOutgoingRequest,
  output: UpdateZoneTransferOutgoingResponse,
  errors: [OutgoingZoneTransferNotFound, OutgoingZoneTransfersNotAllowed],
}));

export interface DeleteZoneTransferOutgoingRequest {
  zoneId: string;
}

export const DeleteZoneTransferOutgoingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/secondary_dns/outgoing",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteZoneTransferOutgoingRequest>;

export interface DeleteZoneTransferOutgoingResponse {
  id?: string | null;
}

export const DeleteZoneTransferOutgoingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteZoneTransferOutgoingResponse>;

export type DeleteZoneTransferOutgoingError =
  | DefaultErrors
  | OutgoingZoneTransferNotFound
  | OutgoingZoneTransfersNotAllowed;

export const deleteZoneTransferOutgoing: API.OperationMethod<
  DeleteZoneTransferOutgoingRequest,
  DeleteZoneTransferOutgoingResponse,
  DeleteZoneTransferOutgoingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteZoneTransferOutgoingRequest,
  output: DeleteZoneTransferOutgoingResponse,
  errors: [OutgoingZoneTransferNotFound, OutgoingZoneTransfersNotAllowed],
}));

export interface EnableZoneTransferOutgoingRequest {
  /** Path param */
  zoneId: string;
  /** Body param */
  body: unknown;
}

export const EnableZoneTransferOutgoingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Unknown.pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/secondary_dns/outgoing/enable",
      }),
    ),
  ) as unknown as Schema.Codec<EnableZoneTransferOutgoingRequest>;

export type EnableZoneTransferOutgoingResponse = string;

export const EnableZoneTransferOutgoingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<EnableZoneTransferOutgoingResponse>;

export type EnableZoneTransferOutgoingError =
  | DefaultErrors
  | OutgoingZoneTransfersNotAllowed;

export const enableZoneTransferOutgoing: API.OperationMethod<
  EnableZoneTransferOutgoingRequest,
  EnableZoneTransferOutgoingResponse,
  EnableZoneTransferOutgoingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableZoneTransferOutgoingRequest,
  output: EnableZoneTransferOutgoingResponse,
  errors: [OutgoingZoneTransfersNotAllowed],
}));

export interface DisableZoneTransferOutgoingRequest {
  /** Path param */
  zoneId: string;
  /** Body param */
  body: unknown;
}

export const DisableZoneTransferOutgoingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Unknown.pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/secondary_dns/outgoing/disable",
      }),
    ),
  ) as unknown as Schema.Codec<DisableZoneTransferOutgoingRequest>;

export type DisableZoneTransferOutgoingResponse = string;

export const DisableZoneTransferOutgoingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DisableZoneTransferOutgoingResponse>;

export type DisableZoneTransferOutgoingError =
  | DefaultErrors
  | OutgoingZoneTransfersNotAllowed;

export const disableZoneTransferOutgoing: API.OperationMethod<
  DisableZoneTransferOutgoingRequest,
  DisableZoneTransferOutgoingResponse,
  DisableZoneTransferOutgoingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableZoneTransferOutgoingRequest,
  output: DisableZoneTransferOutgoingResponse,
  errors: [OutgoingZoneTransfersNotAllowed],
}));

// =============================================================================
// ZoneTransferOutgoingStatus
// =============================================================================

export interface GetZoneTransferOutgoingStatusRequest {
  zoneId: string;
}

export const GetZoneTransferOutgoingStatusRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/secondary_dns/outgoing/status",
      }),
    ),
  ) as unknown as Schema.Codec<GetZoneTransferOutgoingStatusRequest>;

export type GetZoneTransferOutgoingStatusResponse = string;

export const GetZoneTransferOutgoingStatusResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.String.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetZoneTransferOutgoingStatusResponse>;

export type GetZoneTransferOutgoingStatusError = DefaultErrors;

export const getZoneTransferOutgoingStatus: API.OperationMethod<
  GetZoneTransferOutgoingStatusRequest,
  GetZoneTransferOutgoingStatusResponse,
  GetZoneTransferOutgoingStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetZoneTransferOutgoingStatusRequest,
  output: GetZoneTransferOutgoingStatusResponse,
  errors: [],
}));

// =============================================================================
// ZoneTransferPeer
// =============================================================================

export interface GetZoneTransferPeerRequest {
  peerId: string;
  accountId: string;
}

export const GetZoneTransferPeerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      peerId: Schema.String.pipe(T.HttpPath("peerId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/secondary_dns/peers/{peerId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetZoneTransferPeerRequest>;

export interface GetZoneTransferPeerResponse {
  id: string;
  /** The name of the peer. */
  name: string;
  /** IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zo */
  ip?: string | null;
  /** Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. */
  ixfrEnable?: boolean | null;
  /** DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. */
  port?: number | null;
  /** TSIG authentication will be used for zone transfer if configured. */
  tsigId?: string | null;
}

export const GetZoneTransferPeerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ixfrEnable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tsigId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          name: "name",
          ip: "ip",
          ixfrEnable: "ixfr_enable",
          port: "port",
          tsigId: "tsig_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetZoneTransferPeerResponse>;

export type GetZoneTransferPeerError = DefaultErrors | PeerNotFound;

export const getZoneTransferPeer: API.OperationMethod<
  GetZoneTransferPeerRequest,
  GetZoneTransferPeerResponse,
  GetZoneTransferPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetZoneTransferPeerRequest,
  output: GetZoneTransferPeerResponse,
  errors: [PeerNotFound],
}));

export interface ListZoneTransferPeersRequest {
  accountId: string;
}

export const ListZoneTransferPeersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/secondary_dns/peers",
      }),
    ),
  ) as unknown as Schema.Codec<ListZoneTransferPeersRequest>;

export interface ListZoneTransferPeersResponse {
  result: {
    id: string;
    name: string;
    ip?: string | null;
    ixfrEnable?: boolean | null;
    port?: number | null;
    tsigId?: string | null;
  }[];
}

export const ListZoneTransferPeersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListZoneTransferPeersResponseResult),
    }),
  ) as unknown as Schema.Codec<ListZoneTransferPeersResponse>;

export type ListZoneTransferPeersError = DefaultErrors;

export const listZoneTransferPeers: API.PaginatedOperationMethod<
  ListZoneTransferPeersRequest,
  ListZoneTransferPeersResponse,
  ListZoneTransferPeersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListZoneTransferPeersRequest,
  output: ListZoneTransferPeersResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateZoneTransferPeerRequest {
  /** Path param */
  accountId: string;
  /** Body param: The name of the peer. */
  name: string;
}

export const CreateZoneTransferPeerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/secondary_dns/peers",
      }),
    ),
  ) as unknown as Schema.Codec<CreateZoneTransferPeerRequest>;

export interface CreateZoneTransferPeerResponse {
  id: string;
  /** The name of the peer. */
  name: string;
  /** IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zo */
  ip?: string | null;
  /** Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. */
  ixfrEnable?: boolean | null;
  /** DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. */
  port?: number | null;
  /** TSIG authentication will be used for zone transfer if configured. */
  tsigId?: string | null;
}

export const CreateZoneTransferPeerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ixfrEnable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tsigId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          name: "name",
          ip: "ip",
          ixfrEnable: "ixfr_enable",
          port: "port",
          tsigId: "tsig_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateZoneTransferPeerResponse>;

export type CreateZoneTransferPeerError = DefaultErrors;

export const createZoneTransferPeer: API.OperationMethod<
  CreateZoneTransferPeerRequest,
  CreateZoneTransferPeerResponse,
  CreateZoneTransferPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateZoneTransferPeerRequest,
  output: CreateZoneTransferPeerResponse,
  errors: [],
}));

export interface UpdateZoneTransferPeerRequest {
  peerId: string;
  /** Path param */
  accountId: string;
  /** Body param: The name of the peer. */
  name: string;
  /** Body param: IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NO */
  ip?: string;
  /** Body param: Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. */
  ixfrEnable?: boolean;
  /** Body param: DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. */
  port?: number;
  /** Body param: TSIG authentication will be used for zone transfer if configured. */
  tsigId?: string;
}

export const UpdateZoneTransferPeerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      peerId: Schema.String.pipe(T.HttpPath("peerId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      ip: Schema.optional(Schema.String),
      ixfrEnable: Schema.optional(Schema.Boolean),
      port: Schema.optional(Schema.Number),
      tsigId: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        name: "name",
        ip: "ip",
        ixfrEnable: "ixfr_enable",
        port: "port",
        tsigId: "tsig_id",
      }),
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/secondary_dns/peers/{peerId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateZoneTransferPeerRequest>;

export interface UpdateZoneTransferPeerResponse {
  id: string;
  /** The name of the peer. */
  name: string;
  /** IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zo */
  ip?: string | null;
  /** Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. */
  ixfrEnable?: boolean | null;
  /** DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. */
  port?: number | null;
  /** TSIG authentication will be used for zone transfer if configured. */
  tsigId?: string | null;
}

export const UpdateZoneTransferPeerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      ip: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ixfrEnable: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      port: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
      tsigId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          name: "name",
          ip: "ip",
          ixfrEnable: "ixfr_enable",
          port: "port",
          tsigId: "tsig_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateZoneTransferPeerResponse>;

export type UpdateZoneTransferPeerError = DefaultErrors | PeerNotFound;

export const updateZoneTransferPeer: API.OperationMethod<
  UpdateZoneTransferPeerRequest,
  UpdateZoneTransferPeerResponse,
  UpdateZoneTransferPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateZoneTransferPeerRequest,
  output: UpdateZoneTransferPeerResponse,
  errors: [PeerNotFound],
}));

export interface DeleteZoneTransferPeerRequest {
  peerId: string;
  accountId: string;
}

export const DeleteZoneTransferPeerRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      peerId: Schema.String.pipe(T.HttpPath("peerId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/secondary_dns/peers/{peerId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteZoneTransferPeerRequest>;

export interface DeleteZoneTransferPeerResponse {
  id?: string | null;
}

export const DeleteZoneTransferPeerResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteZoneTransferPeerResponse>;

export type DeleteZoneTransferPeerError = DefaultErrors | PeerNotFound;

export const deleteZoneTransferPeer: API.OperationMethod<
  DeleteZoneTransferPeerRequest,
  DeleteZoneTransferPeerResponse,
  DeleteZoneTransferPeerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteZoneTransferPeerRequest,
  output: DeleteZoneTransferPeerResponse,
  errors: [PeerNotFound],
}));

// =============================================================================
// ZoneTransferTsig
// =============================================================================

export interface GetZoneTransferTsigRequest {
  tsigId: string;
  accountId: string;
}

export const GetZoneTransferTsigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tsigId: Schema.String.pipe(T.HttpPath("tsigId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/secondary_dns/tsigs/{tsigId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetZoneTransferTsigRequest>;

export interface GetZoneTransferTsigResponse {
  id: string;
  /** TSIG algorithm. */
  algo: string;
  /** TSIG key name. */
  name: string;
  /** TSIG secret. */
  secret: string;
}

export const GetZoneTransferTsigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      algo: Schema.String,
      name: Schema.String,
      secret: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetZoneTransferTsigResponse>;

export type GetZoneTransferTsigError = DefaultErrors | TsigNotFound;

export const getZoneTransferTsig: API.OperationMethod<
  GetZoneTransferTsigRequest,
  GetZoneTransferTsigResponse,
  GetZoneTransferTsigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetZoneTransferTsigRequest,
  output: GetZoneTransferTsigResponse,
  errors: [TsigNotFound],
}));

export interface ListZoneTransferTsigsRequest {
  accountId: string;
}

export const ListZoneTransferTsigsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/secondary_dns/tsigs",
      }),
    ),
  ) as unknown as Schema.Codec<ListZoneTransferTsigsRequest>;

export interface ListZoneTransferTsigsResponse {
  result: { id: string; algo: string; name: string; secret: string }[];
}

export const ListZoneTransferTsigsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListZoneTransferTsigsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListZoneTransferTsigsResponse>;

export type ListZoneTransferTsigsError = DefaultErrors;

export const listZoneTransferTsigs: API.PaginatedOperationMethod<
  ListZoneTransferTsigsRequest,
  ListZoneTransferTsigsResponse,
  ListZoneTransferTsigsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListZoneTransferTsigsRequest,
  output: ListZoneTransferTsigsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateZoneTransferTsigRequest {
  /** Path param */
  accountId: string;
  /** Body param: TSIG algorithm. */
  algo: string;
  /** Body param: TSIG key name. */
  name: string;
  /** Body param: TSIG secret. */
  secret: string;
}

export const CreateZoneTransferTsigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      algo: Schema.String,
      name: Schema.String,
      secret: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/secondary_dns/tsigs",
      }),
    ),
  ) as unknown as Schema.Codec<CreateZoneTransferTsigRequest>;

export interface CreateZoneTransferTsigResponse {
  id: string;
  /** TSIG algorithm. */
  algo: string;
  /** TSIG key name. */
  name: string;
  /** TSIG secret. */
  secret: string;
}

export const CreateZoneTransferTsigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      algo: Schema.String,
      name: Schema.String,
      secret: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateZoneTransferTsigResponse>;

export type CreateZoneTransferTsigError = DefaultErrors;

export const createZoneTransferTsig: API.OperationMethod<
  CreateZoneTransferTsigRequest,
  CreateZoneTransferTsigResponse,
  CreateZoneTransferTsigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateZoneTransferTsigRequest,
  output: CreateZoneTransferTsigResponse,
  errors: [],
}));

export interface UpdateZoneTransferTsigRequest {
  tsigId: string;
  /** Path param */
  accountId: string;
  /** Body param: TSIG algorithm. */
  algo: string;
  /** Body param: TSIG key name. */
  name: string;
  /** Body param: TSIG secret. */
  secret: string;
}

export const UpdateZoneTransferTsigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tsigId: Schema.String.pipe(T.HttpPath("tsigId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      algo: Schema.String,
      name: Schema.String,
      secret: Schema.String,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/secondary_dns/tsigs/{tsigId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateZoneTransferTsigRequest>;

export interface UpdateZoneTransferTsigResponse {
  id: string;
  /** TSIG algorithm. */
  algo: string;
  /** TSIG key name. */
  name: string;
  /** TSIG secret. */
  secret: string;
}

export const UpdateZoneTransferTsigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      algo: Schema.String,
      name: Schema.String,
      secret: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateZoneTransferTsigResponse>;

export type UpdateZoneTransferTsigError = DefaultErrors | TsigNotFound;

export const updateZoneTransferTsig: API.OperationMethod<
  UpdateZoneTransferTsigRequest,
  UpdateZoneTransferTsigResponse,
  UpdateZoneTransferTsigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateZoneTransferTsigRequest,
  output: UpdateZoneTransferTsigResponse,
  errors: [TsigNotFound],
}));

export interface DeleteZoneTransferTsigRequest {
  tsigId: string;
  accountId: string;
}

export const DeleteZoneTransferTsigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tsigId: Schema.String.pipe(T.HttpPath("tsigId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/secondary_dns/tsigs/{tsigId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteZoneTransferTsigRequest>;

export interface DeleteZoneTransferTsigResponse {
  id?: string | null;
}

export const DeleteZoneTransferTsigResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteZoneTransferTsigResponse>;

export type DeleteZoneTransferTsigError = DefaultErrors | TsigNotFound;

export const deleteZoneTransferTsig: API.OperationMethod<
  DeleteZoneTransferTsigRequest,
  DeleteZoneTransferTsigResponse,
  DeleteZoneTransferTsigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteZoneTransferTsigRequest,
  output: DeleteZoneTransferTsigResponse,
  errors: [TsigNotFound],
}));
