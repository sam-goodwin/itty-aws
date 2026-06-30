/**
 * Cloudflare EMAIL-AUTH API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service email-auth
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// DmarcReport
// =============================================================================

export interface GetDmarcReportRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetDmarcReportRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/email/auth/dmarc-reports",
      }),
    ),
) as unknown as Schema.Schema<GetDmarcReportRequest>;

export interface GetDmarcReportResponse {
  /** List of approved sending sources (omitted when empty) */
  approvedSources?:
    | {
        created?: string | null;
        createdAt?: string | null;
        domain?: string | null;
        ips?: string[] | null;
        modified?: string | null;
        modifiedAt?: string | null;
        name?: string | null;
        slug?: string | null;
        tag?: string | null;
      }[]
    | null;
  /** @deprecated Deprecated, use created_at */
  created?: string | null;
  /** Creation timestamp */
  createdAt?: string | null;
  /** Whether DMARC reports are enabled */
  enabled?: boolean | null;
  /** @deprecated Deprecated, use modified_at */
  modified?: string | null;
  /** Last modification timestamp */
  modifiedAt?: string | null;
  /** Live DNS records for the zone, grouped by type */
  records?: {
    bimiRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    cnameDkimRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    cnameDmarcRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    cnameSpfRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    dkimRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    dmarcRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    spfRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
  } | null;
  /** Prefix for DMARC RUA addresses (32-char hex string) */
  ruaPrefix?: string | null;
  /** Whether to skip the setup wizard */
  skipWizard?: boolean | null;
  /** DMARC configuration status */
  status?:
    | "missing-dmarc-report"
    | "multiple-dmarc-reports"
    | "missing-dmarc-rua"
    | "cname-on-dmarc-record"
    | (string & {})
    | null;
  /** @deprecated Use `zone_id` instead */
  tag?: string | null;
  /** Zone identifier */
  zoneId?: string | null;
}

export const GetDmarcReportResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      approvedSources: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              created: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              createdAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              domain: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              ips: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              modified: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              modifiedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              slug: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            }).pipe(
              Schema.encodeKeys({
                created: "created",
                createdAt: "created_at",
                domain: "domain",
                ips: "ips",
                modified: "modified",
                modifiedAt: "modified_at",
                name: "name",
                slug: "slug",
                tag: "tag",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      records: Schema.optional(
        Schema.Union([
          Schema.Struct({
            bimiRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            cnameDkimRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            cnameDmarcRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            cnameSpfRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            dkimRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            dmarcRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            spfRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              bimiRecords: "bimi_records",
              cnameDkimRecords: "cname_dkim_records",
              cnameDmarcRecords: "cname_dmarc_records",
              cnameSpfRecords: "cname_spf_records",
              dkimRecords: "dkim_records",
              dmarcRecords: "dmarc_records",
              spfRecords: "spf_records",
            }),
          ),
          Schema.Null,
        ]),
      ),
      ruaPrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      skipWizard: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "missing-dmarc-report",
              "multiple-dmarc-reports",
              "missing-dmarc-rua",
              "cname-on-dmarc-record",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      zoneId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          approvedSources: "approved_sources",
          created: "created",
          createdAt: "created_at",
          enabled: "enabled",
          modified: "modified",
          modifiedAt: "modified_at",
          records: "records",
          ruaPrefix: "rua_prefix",
          skipWizard: "skip_wizard",
          status: "status",
          tag: "tag",
          zoneId: "zone_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetDmarcReportResponse>;

export type GetDmarcReportError = DefaultErrors;

export const getDmarcReport: API.OperationMethod<
  GetDmarcReportRequest,
  GetDmarcReportResponse,
  GetDmarcReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDmarcReportRequest,
  output: GetDmarcReportResponse,
  errors: [],
}));

export interface PatchDmarcReportRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Enable or disable DMARC reports for this zone */
  enabled?: boolean | null;
  /** Body param: Skip the DMARC setup wizard */
  skipWizard?: boolean | null;
}

export const PatchDmarcReportRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      skipWizard: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({ enabled: "enabled", skipWizard: "skip_wizard" }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/email/auth/dmarc-reports",
      }),
    ),
  ) as unknown as Schema.Schema<PatchDmarcReportRequest>;

export interface PatchDmarcReportResponse {
  /** List of approved sending sources (omitted when empty) */
  approvedSources?:
    | {
        created?: string | null;
        createdAt?: string | null;
        domain?: string | null;
        ips?: string[] | null;
        modified?: string | null;
        modifiedAt?: string | null;
        name?: string | null;
        slug?: string | null;
        tag?: string | null;
      }[]
    | null;
  /** @deprecated Deprecated, use created_at */
  created?: string | null;
  /** Creation timestamp */
  createdAt?: string | null;
  /** Whether DMARC reports are enabled */
  enabled?: boolean | null;
  /** @deprecated Deprecated, use modified_at */
  modified?: string | null;
  /** Last modification timestamp */
  modifiedAt?: string | null;
  /** Live DNS records for the zone, grouped by type */
  records?: {
    bimiRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    cnameDkimRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    cnameDmarcRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    cnameSpfRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    dkimRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    dmarcRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
    spfRecords?:
      | {
          id?: string | null;
          content?: string | null;
          name?: string | null;
          ttl?: number | null;
          type?: string | null;
        }[]
      | null;
  } | null;
  /** Prefix for DMARC RUA addresses (32-char hex string) */
  ruaPrefix?: string | null;
  /** Whether to skip the setup wizard */
  skipWizard?: boolean | null;
  /** DMARC configuration status */
  status?:
    | "missing-dmarc-report"
    | "multiple-dmarc-reports"
    | "missing-dmarc-rua"
    | "cname-on-dmarc-record"
    | (string & {})
    | null;
  /** @deprecated Use `zone_id` instead */
  tag?: string | null;
  /** Zone identifier */
  zoneId?: string | null;
}

export const PatchDmarcReportResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      approvedSources: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              created: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              createdAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              domain: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              ips: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              modified: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              modifiedAt: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              slug: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
            }).pipe(
              Schema.encodeKeys({
                created: "created",
                createdAt: "created_at",
                domain: "domain",
                ips: "ips",
                modified: "modified",
                modifiedAt: "modified_at",
                name: "name",
                slug: "slug",
                tag: "tag",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
      created: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      modified: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      records: Schema.optional(
        Schema.Union([
          Schema.Struct({
            bimiRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            cnameDkimRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            cnameDmarcRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            cnameSpfRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            dkimRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            dmarcRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
            spfRecords: Schema.optional(
              Schema.Union([
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    content: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    name: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                    ttl: Schema.optional(
                      Schema.Union([Schema.Number, Schema.Null]),
                    ),
                    type: Schema.optional(
                      Schema.Union([Schema.String, Schema.Null]),
                    ),
                  }),
                ),
                Schema.Null,
              ]),
            ),
          }).pipe(
            Schema.encodeKeys({
              bimiRecords: "bimi_records",
              cnameDkimRecords: "cname_dkim_records",
              cnameDmarcRecords: "cname_dmarc_records",
              cnameSpfRecords: "cname_spf_records",
              dkimRecords: "dkim_records",
              dmarcRecords: "dmarc_records",
              spfRecords: "spf_records",
            }),
          ),
          Schema.Null,
        ]),
      ),
      ruaPrefix: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      skipWizard: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals([
              "missing-dmarc-report",
              "multiple-dmarc-reports",
              "missing-dmarc-rua",
              "cname-on-dmarc-record",
            ]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      tag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      zoneId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          approvedSources: "approved_sources",
          created: "created",
          createdAt: "created_at",
          enabled: "enabled",
          modified: "modified",
          modifiedAt: "modified_at",
          records: "records",
          ruaPrefix: "rua_prefix",
          skipWizard: "skip_wizard",
          status: "status",
          tag: "tag",
          zoneId: "zone_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PatchDmarcReportResponse>;

export type PatchDmarcReportError = DefaultErrors;

export const patchDmarcReport: API.OperationMethod<
  PatchDmarcReportRequest,
  PatchDmarcReportResponse,
  PatchDmarcReportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchDmarcReportRequest,
  output: PatchDmarcReportResponse,
  errors: [],
}));

// =============================================================================
// SpfInspect
// =============================================================================

export interface GetSpfInspectRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: DNS record ID (rec_tag) to inspect */
  id: string;
}

export const GetSpfInspectRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      id: Schema.String.pipe(T.HttpQuery("id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/email/auth/spf/inspect",
      }),
    ),
) as unknown as Schema.Schema<GetSpfInspectRequest>;

export interface GetSpfInspectResponse {
  /** Parsed SPF components (mechanisms) */
  components: unknown[];
  /** Domain being inspected */
  domain: string;
  /** Raw SPF record content */
  record: string;
  /** Total number of DNS lookups performed across all includes */
  totalLookups: number;
  /** All errors encountered during inspection, collected from the entire tree. This includes errors from nested includes at any depth, providing a quick overview of all issues without needing to traverse t */
  errors?:
    | {
        code: string;
        domain: string;
        message: string;
        details?: string | null;
      }[]
    | null;
}

export const GetSpfInspectResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      components: Schema.Array(Schema.Unknown),
      domain: Schema.String,
      record: Schema.String,
      totalLookups: Schema.Number,
      errors: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              code: Schema.String,
              domain: Schema.String,
              message: Schema.String,
              details: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          components: "components",
          domain: "domain",
          record: "record",
          totalLookups: "total_lookups",
          errors: "errors",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetSpfInspectResponse>;

export type GetSpfInspectError = DefaultErrors;

export const getSpfInspect: API.OperationMethod<
  GetSpfInspectRequest,
  GetSpfInspectResponse,
  GetSpfInspectError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSpfInspectRequest,
  output: GetSpfInspectResponse,
  errors: [],
}));
