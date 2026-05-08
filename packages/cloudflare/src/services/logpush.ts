/**
 * Cloudflare LOGPUSH API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service logpush
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// DatasetField
// =============================================================================

const GetDatasetFieldBaseFields = {
  datasetId: Schema.Union([
    Schema.Literal("access_requests"),
    Schema.Literal("audit_logs"),
    Schema.Literal("audit_logs_v2"),
    Schema.Literal("biso_user_actions"),
    Schema.Literal("casb_findings"),
    Schema.Literal("device_posture_results"),
    Schema.Literal("dex_application_tests"),
    Schema.Literal("dex_device_state_events"),
    Schema.Literal("dlp_forensic_copies"),
    Schema.Literal("dns_firewall_logs"),
    Schema.Literal("dns_logs"),
    Schema.Literal("email_security_alerts"),
    Schema.Literal("firewall_events"),
    Schema.Literal("gateway_dns"),
    Schema.Literal("gateway_http"),
    Schema.Literal("gateway_network"),
    Schema.Literal("http_requests"),
    Schema.Literal("ipsec_logs"),
    Schema.Literal("magic_ids_detections"),
    Schema.Literal("nel_reports"),
    Schema.Literal("network_analytics_logs"),
    Schema.Literal("page_shield_events"),
    Schema.Literal("sinkhole_http_logs"),
    Schema.Literal("spectrum_events"),
    Schema.Literal("ssh_logs"),
    Schema.Literal("warp_config_changes"),
    Schema.Literal("warp_toggle_changes"),
    Schema.Literal("workers_trace_events"),
    Schema.Literal("zaraz_events"),
    Schema.Literal("zero_trust_network_sessions"),
    Schema.Null,
  ]).pipe(T.HttpPath("datasetId")),
} as const;

interface GetDatasetFieldBaseRequest {
  datasetId:
    | "access_requests"
    | "audit_logs"
    | "audit_logs_v2"
    | "biso_user_actions"
    | "casb_findings"
    | "device_posture_results"
    | "dex_application_tests"
    | "dex_device_state_events"
    | "dlp_forensic_copies"
    | "dns_firewall_logs"
    | "dns_logs"
    | "email_security_alerts"
    | "firewall_events"
    | "gateway_dns"
    | "gateway_http"
    | "gateway_network"
    | "http_requests"
    | "ipsec_logs"
    | "magic_ids_detections"
    | "nel_reports"
    | "network_analytics_logs"
    | "page_shield_events"
    | "sinkhole_http_logs"
    | "spectrum_events"
    | "ssh_logs"
    | "warp_config_changes"
    | "warp_toggle_changes"
    | "workers_trace_events"
    | "zaraz_events"
    | "zero_trust_network_sessions"
    | null;
}

export interface GetDatasetFieldForAccountRequest extends GetDatasetFieldBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetDatasetFieldForZoneRequest extends GetDatasetFieldBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetDatasetFieldForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...GetDatasetFieldBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/logpush/datasets/{datasetId}/fields",
    }),
  ) as unknown as Schema.Schema<GetDatasetFieldForAccountRequest>;

export const GetDatasetFieldForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...GetDatasetFieldBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/logpush/datasets/{datasetId}/fields",
    }),
  ) as unknown as Schema.Schema<GetDatasetFieldForZoneRequest>;

export type GetDatasetFieldResponse = unknown;

export const GetDatasetFieldResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetDatasetFieldResponse>;

export type GetDatasetFieldError = DefaultErrors;

export const getDatasetFieldForAccount: API.OperationMethod<
  GetDatasetFieldForAccountRequest,
  GetDatasetFieldResponse,
  GetDatasetFieldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDatasetFieldForAccountRequest,
  output: GetDatasetFieldResponse,
  errors: [],
}));

export const getDatasetFieldForZone: API.OperationMethod<
  GetDatasetFieldForZoneRequest,
  GetDatasetFieldResponse,
  GetDatasetFieldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDatasetFieldForZoneRequest,
  output: GetDatasetFieldResponse,
  errors: [],
}));

// =============================================================================
// DatasetJob
// =============================================================================

const GetDatasetJobBaseFields = {
  datasetId: Schema.Union([
    Schema.Literal("access_requests"),
    Schema.Literal("audit_logs"),
    Schema.Literal("audit_logs_v2"),
    Schema.Literal("biso_user_actions"),
    Schema.Literal("casb_findings"),
    Schema.Literal("device_posture_results"),
    Schema.Literal("dex_application_tests"),
    Schema.Literal("dex_device_state_events"),
    Schema.Literal("dlp_forensic_copies"),
    Schema.Literal("dns_firewall_logs"),
    Schema.Literal("dns_logs"),
    Schema.Literal("email_security_alerts"),
    Schema.Literal("firewall_events"),
    Schema.Literal("gateway_dns"),
    Schema.Literal("gateway_http"),
    Schema.Literal("gateway_network"),
    Schema.Literal("http_requests"),
    Schema.Literal("ipsec_logs"),
    Schema.Literal("magic_ids_detections"),
    Schema.Literal("nel_reports"),
    Schema.Literal("network_analytics_logs"),
    Schema.Literal("page_shield_events"),
    Schema.Literal("sinkhole_http_logs"),
    Schema.Literal("spectrum_events"),
    Schema.Literal("ssh_logs"),
    Schema.Literal("warp_config_changes"),
    Schema.Literal("warp_toggle_changes"),
    Schema.Literal("workers_trace_events"),
    Schema.Literal("zaraz_events"),
    Schema.Literal("zero_trust_network_sessions"),
    Schema.Null,
  ]).pipe(T.HttpPath("datasetId")),
} as const;

interface GetDatasetJobBaseRequest {
  datasetId:
    | "access_requests"
    | "audit_logs"
    | "audit_logs_v2"
    | "biso_user_actions"
    | "casb_findings"
    | "device_posture_results"
    | "dex_application_tests"
    | "dex_device_state_events"
    | "dlp_forensic_copies"
    | "dns_firewall_logs"
    | "dns_logs"
    | "email_security_alerts"
    | "firewall_events"
    | "gateway_dns"
    | "gateway_http"
    | "gateway_network"
    | "http_requests"
    | "ipsec_logs"
    | "magic_ids_detections"
    | "nel_reports"
    | "network_analytics_logs"
    | "page_shield_events"
    | "sinkhole_http_logs"
    | "spectrum_events"
    | "ssh_logs"
    | "warp_config_changes"
    | "warp_toggle_changes"
    | "workers_trace_events"
    | "zaraz_events"
    | "zero_trust_network_sessions"
    | null;
}

export interface GetDatasetJobForAccountRequest extends GetDatasetJobBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetDatasetJobForZoneRequest extends GetDatasetJobBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetDatasetJobForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...GetDatasetJobBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/logpush/datasets/{datasetId}/jobs",
    }),
  ) as unknown as Schema.Schema<GetDatasetJobForAccountRequest>;

export const GetDatasetJobForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...GetDatasetJobBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/logpush/datasets/{datasetId}/jobs",
    }),
  ) as unknown as Schema.Schema<GetDatasetJobForZoneRequest>;

export interface GetDatasetJobResponse {
  result: ({
    id?: number | null;
    dataset?:
      | "access_requests"
      | "audit_logs"
      | "audit_logs_v2"
      | "biso_user_actions"
      | "casb_findings"
      | "device_posture_results"
      | "dex_application_tests"
      | "dex_device_state_events"
      | "dlp_forensic_copies"
      | "dns_firewall_logs"
      | "dns_logs"
      | "email_security_alerts"
      | "firewall_events"
      | "gateway_dns"
      | "gateway_http"
      | "gateway_network"
      | "http_requests"
      | "ipsec_logs"
      | "magic_ids_detections"
      | "nel_reports"
      | "network_analytics_logs"
      | "page_shield_events"
      | "sinkhole_http_logs"
      | "spectrum_events"
      | "ssh_logs"
      | "warp_config_changes"
      | "warp_toggle_changes"
      | "workers_trace_events"
      | "zaraz_events"
      | "zero_trust_network_sessions"
      | null;
    destinationConf?: string | null;
    enabled?: boolean | null;
    errorMessage?: string | null;
    frequency?: "high" | "low" | null;
    kind?: "" | "edge" | null;
    lastComplete?: string | null;
    lastError?: string | null;
    logpullOptions?: string | null;
    maxUploadBytes?: "0" | number | null;
    maxUploadIntervalSeconds?: "0" | number | null;
    maxUploadRecords?: "0" | number | null;
    name?: string | null;
    outputOptions?: {
      batchPrefix?: string | null;
      batchSuffix?: string | null;
      "cve-2021-44228"?: boolean | null;
      fieldDelimiter?: string | null;
      fieldNames?: string[] | null;
      outputType?: "ndjson" | "csv" | null;
      recordDelimiter?: string | null;
      recordPrefix?: string | null;
      recordSuffix?: string | null;
      recordTemplate?: string | null;
      sampleRate?: number | null;
      timestampFormat?: "unixnano" | "unix" | "rfc3339" | null;
    } | null;
  } | null)[];
}

export const GetDatasetJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Union([
      Schema.Struct({
        id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        dataset: Schema.optional(
          Schema.Union([
            Schema.Literal("access_requests"),
            Schema.Literal("audit_logs"),
            Schema.Literal("audit_logs_v2"),
            Schema.Literal("biso_user_actions"),
            Schema.Literal("casb_findings"),
            Schema.Literal("device_posture_results"),
            Schema.Literal("dex_application_tests"),
            Schema.Literal("dex_device_state_events"),
            Schema.Literal("dlp_forensic_copies"),
            Schema.Literal("dns_firewall_logs"),
            Schema.Literal("dns_logs"),
            Schema.Literal("email_security_alerts"),
            Schema.Literal("firewall_events"),
            Schema.Literal("gateway_dns"),
            Schema.Literal("gateway_http"),
            Schema.Literal("gateway_network"),
            Schema.Literal("http_requests"),
            Schema.Literal("ipsec_logs"),
            Schema.Literal("magic_ids_detections"),
            Schema.Literal("nel_reports"),
            Schema.Literal("network_analytics_logs"),
            Schema.Literal("page_shield_events"),
            Schema.Literal("sinkhole_http_logs"),
            Schema.Literal("spectrum_events"),
            Schema.Literal("ssh_logs"),
            Schema.Literal("warp_config_changes"),
            Schema.Literal("warp_toggle_changes"),
            Schema.Literal("workers_trace_events"),
            Schema.Literal("zaraz_events"),
            Schema.Literal("zero_trust_network_sessions"),
            Schema.Null,
          ]),
        ),
        destinationConf: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        errorMessage: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        frequency: Schema.optional(
          Schema.Union([
            Schema.Literal("high"),
            Schema.Literal("low"),
            Schema.Null,
          ]),
        ),
        kind: Schema.optional(
          Schema.Union([Schema.Literals(["", "edge"]), Schema.Null]),
        ),
        lastComplete: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        lastError: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        logpullOptions: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        maxUploadBytes: Schema.optional(
          Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
        ),
        maxUploadIntervalSeconds: Schema.optional(
          Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
        ),
        maxUploadRecords: Schema.optional(
          Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
        ),
        name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        outputOptions: Schema.optional(
          Schema.Union([
            Schema.Struct({
              batchPrefix: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              batchSuffix: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              "cve-2021-44228": Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              fieldDelimiter: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              fieldNames: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              outputType: Schema.optional(
                Schema.Union([Schema.Literals(["ndjson", "csv"]), Schema.Null]),
              ),
              recordDelimiter: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              recordPrefix: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              recordSuffix: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              recordTemplate: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sampleRate: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              timestampFormat: Schema.optional(
                Schema.Union([
                  Schema.Literals(["unixnano", "unix", "rfc3339"]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                batchPrefix: "batch_prefix",
                batchSuffix: "batch_suffix",
                "cve-2021-44228": "CVE-2021-44228",
                fieldDelimiter: "field_delimiter",
                fieldNames: "field_names",
                outputType: "output_type",
                recordDelimiter: "record_delimiter",
                recordPrefix: "record_prefix",
                recordSuffix: "record_suffix",
                recordTemplate: "record_template",
                sampleRate: "sample_rate",
                timestampFormat: "timestamp_format",
              }),
            ),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          dataset: "dataset",
          destinationConf: "destination_conf",
          enabled: "enabled",
          errorMessage: "error_message",
          frequency: "frequency",
          kind: "kind",
          lastComplete: "last_complete",
          lastError: "last_error",
          logpullOptions: "logpull_options",
          maxUploadBytes: "max_upload_bytes",
          maxUploadIntervalSeconds: "max_upload_interval_seconds",
          maxUploadRecords: "max_upload_records",
          name: "name",
          outputOptions: "output_options",
        }),
      ),
      Schema.Null,
    ]),
  ),
}) as unknown as Schema.Schema<GetDatasetJobResponse>;

export type GetDatasetJobError = DefaultErrors;

export const getDatasetJobForAccount: API.PaginatedOperationMethod<
  GetDatasetJobForAccountRequest,
  GetDatasetJobResponse,
  GetDatasetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetDatasetJobForAccountRequest,
  output: GetDatasetJobResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export const getDatasetJobForZone: API.PaginatedOperationMethod<
  GetDatasetJobForZoneRequest,
  GetDatasetJobResponse,
  GetDatasetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetDatasetJobForZoneRequest,
  output: GetDatasetJobResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Edge
// =============================================================================

export interface GetEdgeRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetEdgeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
}).pipe(
  T.Http({ method: "GET", path: "/zones/{zone_id}/logpush/edge/jobs" }),
) as unknown as Schema.Schema<GetEdgeRequest>;

export interface GetEdgeResponse {
  result: ({
    destinationConf?: string | null;
    fields?: string | null;
    filter?: string | null;
    sample?: number | null;
    sessionId?: string | null;
  } | null)[];
}

export const GetEdgeResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Union([
      Schema.Struct({
        destinationConf: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        fields: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        filter: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        sample: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        sessionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          destinationConf: "destination_conf",
          fields: "fields",
          filter: "filter",
          sample: "sample",
          sessionId: "session_id",
        }),
      ),
      Schema.Null,
    ]),
  ),
}) as unknown as Schema.Schema<GetEdgeResponse>;

export type GetEdgeError = DefaultErrors;

export const getEdge: API.PaginatedOperationMethod<
  GetEdgeRequest,
  GetEdgeResponse,
  GetEdgeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetEdgeRequest,
  output: GetEdgeResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateEdgeRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Comma-separated list of fields. */
  fields?: string;
  /** Body param: Filters to drill down into specific events. */
  filter?: string;
  /** Body param: The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. */
  sample?: number;
}

export const CreateEdgeRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  fields: Schema.optional(Schema.String),
  filter: Schema.optional(Schema.String),
  sample: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "POST", path: "/zones/{zone_id}/logpush/edge/jobs" }),
) as unknown as Schema.Schema<CreateEdgeRequest>;

export interface CreateEdgeResponse {
  /** Unique WebSocket address that will receive messages from Cloudflare’s edge. */
  destinationConf?: string | null;
  /** Comma-separated list of fields. */
  fields?: string | null;
  /** Filters to drill down into specific events. */
  filter?: string | null;
  /** The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on. */
  sample?: number | null;
  /** Unique session id of the job. */
  sessionId?: string | null;
}

export const CreateEdgeResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  destinationConf: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  fields: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  filter: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  sample: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  sessionId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      destinationConf: "destination_conf",
      fields: "fields",
      filter: "filter",
      sample: "sample",
      sessionId: "session_id",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateEdgeResponse>;

export type CreateEdgeError = DefaultErrors;

export const createEdge: API.OperationMethod<
  CreateEdgeRequest,
  CreateEdgeResponse,
  CreateEdgeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateEdgeRequest,
  output: CreateEdgeResponse,
  errors: [],
}));

// =============================================================================
// ExistsValidate
// =============================================================================

const DestinationExistsValidateBaseFields = {
  destinationConf: Schema.String,
} as const;

interface DestinationExistsValidateBaseRequest {
  /** Body param: Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included. */
  destinationConf: string;
}

export interface DestinationExistsValidateForAccountRequest extends DestinationExistsValidateBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DestinationExistsValidateForZoneRequest extends DestinationExistsValidateBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DestinationExistsValidateForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...DestinationExistsValidateBaseFields,
  }).pipe(
    Schema.encodeKeys({ destinationConf: "destination_conf" }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/logpush/validate/destination/exists",
    }),
  ) as unknown as Schema.Schema<DestinationExistsValidateForAccountRequest>;

export const DestinationExistsValidateForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...DestinationExistsValidateBaseFields,
  }).pipe(
    Schema.encodeKeys({ destinationConf: "destination_conf" }),
    T.Http({
      method: "POST",
      path: "/zones/{zone_id}/logpush/validate/destination/exists",
    }),
  ) as unknown as Schema.Schema<DestinationExistsValidateForZoneRequest>;

export interface DestinationExistsValidateResponse {
  exists?: boolean | null;
}

export const DestinationExistsValidateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exists: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DestinationExistsValidateResponse>;

export type DestinationExistsValidateError = DefaultErrors;

export const destinationExistsValidateForAccount: API.OperationMethod<
  DestinationExistsValidateForAccountRequest,
  DestinationExistsValidateResponse,
  DestinationExistsValidateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DestinationExistsValidateForAccountRequest,
  output: DestinationExistsValidateResponse,
  errors: [],
}));

export const destinationExistsValidateForZone: API.OperationMethod<
  DestinationExistsValidateForZoneRequest,
  DestinationExistsValidateResponse,
  DestinationExistsValidateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DestinationExistsValidateForZoneRequest,
  output: DestinationExistsValidateResponse,
  errors: [],
}));

// =============================================================================
// Job
// =============================================================================

const GetJobBaseFields = {
  jobId: Schema.Number.pipe(T.HttpPath("jobId")),
} as const;

interface GetJobBaseRequest {
  jobId: number;
}

export interface GetJobForAccountRequest extends GetJobBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetJobForZoneRequest extends GetJobBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetJobForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...GetJobBaseFields,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/logpush/jobs/{jobId}",
    }),
  ) as unknown as Schema.Schema<GetJobForAccountRequest>;

export const GetJobForZoneRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  ...GetJobBaseFields,
}).pipe(
  T.Http({ method: "GET", path: "/zones/{zone_id}/logpush/jobs/{jobId}" }),
) as unknown as Schema.Schema<GetJobForZoneRequest>;

export interface GetJobResponse {
  /** Unique id of the job. */
  id?: number | null;
  /** Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/). */
  dataset?:
    | "access_requests"
    | "audit_logs"
    | "audit_logs_v2"
    | "biso_user_actions"
    | "casb_findings"
    | "device_posture_results"
    | "dex_application_tests"
    | "dex_device_state_events"
    | "dlp_forensic_copies"
    | "dns_firewall_logs"
    | "dns_logs"
    | "email_security_alerts"
    | "firewall_events"
    | "gateway_dns"
    | "gateway_http"
    | "gateway_network"
    | "http_requests"
    | "ipsec_logs"
    | "magic_ids_detections"
    | "nel_reports"
    | "network_analytics_logs"
    | "page_shield_events"
    | "sinkhole_http_logs"
    | "spectrum_events"
    | "ssh_logs"
    | "warp_config_changes"
    | "warp_toggle_changes"
    | "workers_trace_events"
    | "zaraz_events"
    | "zero_trust_network_sessions"
    | null;
  /** Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included. */
  destinationConf?: string | null;
  /** Flag that indicates if the job is enabled. */
  enabled?: boolean | null;
  /** If not null, the job is currently failing. Failures are usually. repetitive (example: no permissions to write to destination bucket). Only the last failure is recorded. On successful execution of a jo */
  errorMessage?: string | null;
  /** @deprecated This field is deprecated. Please use `max_upload_ ` parameters instead. . The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high sends your  */
  frequency?: "high" | "low" | null;
  /** The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). */
  kind?: "" | "edge" | null;
  /** Records the last time for which logs have been successfully pushed. If the last successful push was for logs range 2018-07-23T10:00:00Z to 2018-07-23T10:01:00Z then the value of this field will be 201 */
  lastComplete?: string | null;
  /** Records the last time the job failed. If not null, the job is currently. failing. If null, the job has either never failed or has run successfully at least once since last failure. See also the error_ */
  lastError?: string | null;
  /** @deprecated This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the u */
  logpullOptions?: string | null;
  /** The maximum uncompressed file size of a batch of logs. This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means that log fil */
  maxUploadBytes?: "0" | number | null;
  /** The maximum interval in seconds for log batches. This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log batches; thi */
  maxUploadIntervalSeconds?: "0" | number | null;
  /** The maximum number of log lines per batch. This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch; this means */
  maxUploadRecords?: "0" | number | null;
  /** Optional human readable job name. Not unique. Cloudflare suggests. that you set this to a meaningful string, like the domain name, to make it easier to identify your job. */
  name?: string | null;
  /** The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored. */
  outputOptions?: {
    batchPrefix?: string | null;
    batchSuffix?: string | null;
    "cve-2021-44228"?: boolean | null;
    fieldDelimiter?: string | null;
    fieldNames?: string[] | null;
    outputType?: "ndjson" | "csv" | null;
    recordDelimiter?: string | null;
    recordPrefix?: string | null;
    recordSuffix?: string | null;
    recordTemplate?: string | null;
    sampleRate?: number | null;
    timestampFormat?: "unixnano" | "unix" | "rfc3339" | null;
  } | null;
}

export const GetJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  dataset: Schema.optional(
    Schema.Union([
      Schema.Literal("access_requests"),
      Schema.Literal("audit_logs"),
      Schema.Literal("audit_logs_v2"),
      Schema.Literal("biso_user_actions"),
      Schema.Literal("casb_findings"),
      Schema.Literal("device_posture_results"),
      Schema.Literal("dex_application_tests"),
      Schema.Literal("dex_device_state_events"),
      Schema.Literal("dlp_forensic_copies"),
      Schema.Literal("dns_firewall_logs"),
      Schema.Literal("dns_logs"),
      Schema.Literal("email_security_alerts"),
      Schema.Literal("firewall_events"),
      Schema.Literal("gateway_dns"),
      Schema.Literal("gateway_http"),
      Schema.Literal("gateway_network"),
      Schema.Literal("http_requests"),
      Schema.Literal("ipsec_logs"),
      Schema.Literal("magic_ids_detections"),
      Schema.Literal("nel_reports"),
      Schema.Literal("network_analytics_logs"),
      Schema.Literal("page_shield_events"),
      Schema.Literal("sinkhole_http_logs"),
      Schema.Literal("spectrum_events"),
      Schema.Literal("ssh_logs"),
      Schema.Literal("warp_config_changes"),
      Schema.Literal("warp_toggle_changes"),
      Schema.Literal("workers_trace_events"),
      Schema.Literal("zaraz_events"),
      Schema.Literal("zero_trust_network_sessions"),
      Schema.Null,
    ]),
  ),
  destinationConf: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  errorMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  frequency: Schema.optional(
    Schema.Union([Schema.Literal("high"), Schema.Literal("low"), Schema.Null]),
  ),
  kind: Schema.optional(
    Schema.Union([Schema.Literals(["", "edge"]), Schema.Null]),
  ),
  lastComplete: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  lastError: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  logpullOptions: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  maxUploadBytes: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadIntervalSeconds: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadRecords: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  outputOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        batchPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        batchSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        "cve-2021-44228": Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        fieldDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        fieldNames: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        outputType: Schema.optional(
          Schema.Union([Schema.Literals(["ndjson", "csv"]), Schema.Null]),
        ),
        recordDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordTemplate: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        sampleRate: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        timestampFormat: Schema.optional(
          Schema.Union([
            Schema.Literals(["unixnano", "unix", "rfc3339"]),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          batchPrefix: "batch_prefix",
          batchSuffix: "batch_suffix",
          "cve-2021-44228": "CVE-2021-44228",
          fieldDelimiter: "field_delimiter",
          fieldNames: "field_names",
          outputType: "output_type",
          recordDelimiter: "record_delimiter",
          recordPrefix: "record_prefix",
          recordSuffix: "record_suffix",
          recordTemplate: "record_template",
          sampleRate: "sample_rate",
          timestampFormat: "timestamp_format",
        }),
      ),
      Schema.Null,
    ]),
  ),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      dataset: "dataset",
      destinationConf: "destination_conf",
      enabled: "enabled",
      errorMessage: "error_message",
      frequency: "frequency",
      kind: "kind",
      lastComplete: "last_complete",
      lastError: "last_error",
      logpullOptions: "logpull_options",
      maxUploadBytes: "max_upload_bytes",
      maxUploadIntervalSeconds: "max_upload_interval_seconds",
      maxUploadRecords: "max_upload_records",
      name: "name",
      outputOptions: "output_options",
    }),
  )
  .pipe(T.ResponsePath("result")) as unknown as Schema.Schema<GetJobResponse>;

export type GetJobError = DefaultErrors;

export const getJobForAccount: API.OperationMethod<
  GetJobForAccountRequest,
  GetJobResponse,
  GetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetJobForAccountRequest,
  output: GetJobResponse,
  errors: [],
}));

export const getJobForZone: API.OperationMethod<
  GetJobForZoneRequest,
  GetJobResponse,
  GetJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetJobForZoneRequest,
  output: GetJobResponse,
  errors: [],
}));

const ListJobsBaseFields = {} as const;

interface ListJobsBaseRequest {}

export interface ListJobsForAccountRequest extends ListJobsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListJobsForZoneRequest extends ListJobsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListJobsForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...ListJobsBaseFields,
  }).pipe(
    T.Http({ method: "GET", path: "/accounts/{account_id}/logpush/jobs" }),
  ) as unknown as Schema.Schema<ListJobsForAccountRequest>;

export const ListJobsForZoneRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...ListJobsBaseFields,
  },
).pipe(
  T.Http({ method: "GET", path: "/zones/{zone_id}/logpush/jobs" }),
) as unknown as Schema.Schema<ListJobsForZoneRequest>;

export interface ListJobsResponse {
  result: ({
    id?: number | null;
    dataset?:
      | "access_requests"
      | "audit_logs"
      | "audit_logs_v2"
      | "biso_user_actions"
      | "casb_findings"
      | "device_posture_results"
      | "dex_application_tests"
      | "dex_device_state_events"
      | "dlp_forensic_copies"
      | "dns_firewall_logs"
      | "dns_logs"
      | "email_security_alerts"
      | "firewall_events"
      | "gateway_dns"
      | "gateway_http"
      | "gateway_network"
      | "http_requests"
      | "ipsec_logs"
      | "magic_ids_detections"
      | "nel_reports"
      | "network_analytics_logs"
      | "page_shield_events"
      | "sinkhole_http_logs"
      | "spectrum_events"
      | "ssh_logs"
      | "warp_config_changes"
      | "warp_toggle_changes"
      | "workers_trace_events"
      | "zaraz_events"
      | "zero_trust_network_sessions"
      | null;
    destinationConf?: string | null;
    enabled?: boolean | null;
    errorMessage?: string | null;
    frequency?: "high" | "low" | null;
    kind?: "" | "edge" | null;
    lastComplete?: string | null;
    lastError?: string | null;
    logpullOptions?: string | null;
    maxUploadBytes?: "0" | number | null;
    maxUploadIntervalSeconds?: "0" | number | null;
    maxUploadRecords?: "0" | number | null;
    name?: string | null;
    outputOptions?: {
      batchPrefix?: string | null;
      batchSuffix?: string | null;
      "cve-2021-44228"?: boolean | null;
      fieldDelimiter?: string | null;
      fieldNames?: string[] | null;
      outputType?: "ndjson" | "csv" | null;
      recordDelimiter?: string | null;
      recordPrefix?: string | null;
      recordSuffix?: string | null;
      recordTemplate?: string | null;
      sampleRate?: number | null;
      timestampFormat?: "unixnano" | "unix" | "rfc3339" | null;
    } | null;
  } | null)[];
}

export const ListJobsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Union([
      Schema.Struct({
        id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        dataset: Schema.optional(
          Schema.Union([
            Schema.Literal("access_requests"),
            Schema.Literal("audit_logs"),
            Schema.Literal("audit_logs_v2"),
            Schema.Literal("biso_user_actions"),
            Schema.Literal("casb_findings"),
            Schema.Literal("device_posture_results"),
            Schema.Literal("dex_application_tests"),
            Schema.Literal("dex_device_state_events"),
            Schema.Literal("dlp_forensic_copies"),
            Schema.Literal("dns_firewall_logs"),
            Schema.Literal("dns_logs"),
            Schema.Literal("email_security_alerts"),
            Schema.Literal("firewall_events"),
            Schema.Literal("gateway_dns"),
            Schema.Literal("gateway_http"),
            Schema.Literal("gateway_network"),
            Schema.Literal("http_requests"),
            Schema.Literal("ipsec_logs"),
            Schema.Literal("magic_ids_detections"),
            Schema.Literal("nel_reports"),
            Schema.Literal("network_analytics_logs"),
            Schema.Literal("page_shield_events"),
            Schema.Literal("sinkhole_http_logs"),
            Schema.Literal("spectrum_events"),
            Schema.Literal("ssh_logs"),
            Schema.Literal("warp_config_changes"),
            Schema.Literal("warp_toggle_changes"),
            Schema.Literal("workers_trace_events"),
            Schema.Literal("zaraz_events"),
            Schema.Literal("zero_trust_network_sessions"),
            Schema.Null,
          ]),
        ),
        destinationConf: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
        errorMessage: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        frequency: Schema.optional(
          Schema.Union([
            Schema.Literal("high"),
            Schema.Literal("low"),
            Schema.Null,
          ]),
        ),
        kind: Schema.optional(
          Schema.Union([Schema.Literals(["", "edge"]), Schema.Null]),
        ),
        lastComplete: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        lastError: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        logpullOptions: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        maxUploadBytes: Schema.optional(
          Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
        ),
        maxUploadIntervalSeconds: Schema.optional(
          Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
        ),
        maxUploadRecords: Schema.optional(
          Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
        ),
        name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        outputOptions: Schema.optional(
          Schema.Union([
            Schema.Struct({
              batchPrefix: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              batchSuffix: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              "cve-2021-44228": Schema.optional(
                Schema.Union([Schema.Boolean, Schema.Null]),
              ),
              fieldDelimiter: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              fieldNames: Schema.optional(
                Schema.Union([Schema.Array(Schema.String), Schema.Null]),
              ),
              outputType: Schema.optional(
                Schema.Union([Schema.Literals(["ndjson", "csv"]), Schema.Null]),
              ),
              recordDelimiter: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              recordPrefix: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              recordSuffix: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              recordTemplate: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              sampleRate: Schema.optional(
                Schema.Union([Schema.Number, Schema.Null]),
              ),
              timestampFormat: Schema.optional(
                Schema.Union([
                  Schema.Literals(["unixnano", "unix", "rfc3339"]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                batchPrefix: "batch_prefix",
                batchSuffix: "batch_suffix",
                "cve-2021-44228": "CVE-2021-44228",
                fieldDelimiter: "field_delimiter",
                fieldNames: "field_names",
                outputType: "output_type",
                recordDelimiter: "record_delimiter",
                recordPrefix: "record_prefix",
                recordSuffix: "record_suffix",
                recordTemplate: "record_template",
                sampleRate: "sample_rate",
                timestampFormat: "timestamp_format",
              }),
            ),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          id: "id",
          dataset: "dataset",
          destinationConf: "destination_conf",
          enabled: "enabled",
          errorMessage: "error_message",
          frequency: "frequency",
          kind: "kind",
          lastComplete: "last_complete",
          lastError: "last_error",
          logpullOptions: "logpull_options",
          maxUploadBytes: "max_upload_bytes",
          maxUploadIntervalSeconds: "max_upload_interval_seconds",
          maxUploadRecords: "max_upload_records",
          name: "name",
          outputOptions: "output_options",
        }),
      ),
      Schema.Null,
    ]),
  ),
}) as unknown as Schema.Schema<ListJobsResponse>;

export type ListJobsError = DefaultErrors;

export const listJobsForAccount: API.PaginatedOperationMethod<
  ListJobsForAccountRequest,
  ListJobsResponse,
  ListJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListJobsForAccountRequest,
  output: ListJobsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export const listJobsForZone: API.PaginatedOperationMethod<
  ListJobsForZoneRequest,
  ListJobsResponse,
  ListJobsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListJobsForZoneRequest,
  output: ListJobsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

const CreateJobBaseFields = {
  destinationConf: Schema.String,
  dataset: Schema.optional(
    Schema.Union([
      Schema.Literal("access_requests"),
      Schema.Literal("audit_logs"),
      Schema.Literal("audit_logs_v2"),
      Schema.Literal("biso_user_actions"),
      Schema.Literal("casb_findings"),
      Schema.Literal("device_posture_results"),
      Schema.Literal("dex_application_tests"),
      Schema.Literal("dex_device_state_events"),
      Schema.Literal("dlp_forensic_copies"),
      Schema.Literal("dns_firewall_logs"),
      Schema.Literal("dns_logs"),
      Schema.Literal("email_security_alerts"),
      Schema.Literal("firewall_events"),
      Schema.Literal("gateway_dns"),
      Schema.Literal("gateway_http"),
      Schema.Literal("gateway_network"),
      Schema.Literal("http_requests"),
      Schema.Literal("ipsec_logs"),
      Schema.Literal("magic_ids_detections"),
      Schema.Literal("nel_reports"),
      Schema.Literal("network_analytics_logs"),
      Schema.Literal("page_shield_events"),
      Schema.Literal("sinkhole_http_logs"),
      Schema.Literal("spectrum_events"),
      Schema.Literal("ssh_logs"),
      Schema.Literal("warp_config_changes"),
      Schema.Literal("warp_toggle_changes"),
      Schema.Literal("workers_trace_events"),
      Schema.Literal("zaraz_events"),
      Schema.Literal("zero_trust_network_sessions"),
      Schema.Null,
    ]),
  ),
  enabled: Schema.optional(Schema.Boolean),
  filter: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  frequency: Schema.optional(
    Schema.Union([Schema.Literal("high"), Schema.Literal("low"), Schema.Null]),
  ),
  kind: Schema.optional(Schema.Literals(["", "edge"])),
  logpullOptions: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  maxUploadBytes: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadIntervalSeconds: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadRecords: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  outputOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        batchPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        batchSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        "cve-2021-44228": Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        fieldDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        fieldNames: Schema.optional(Schema.Array(Schema.String)),
        outputType: Schema.optional(Schema.Literals(["ndjson", "csv"])),
        recordDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordTemplate: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        sampleRate: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        timestampFormat: Schema.optional(
          Schema.Literals(["unixnano", "unix", "rfc3339"]),
        ),
      }).pipe(
        Schema.encodeKeys({
          batchPrefix: "batch_prefix",
          batchSuffix: "batch_suffix",
          "cve-2021-44228": "CVE-2021-44228",
          fieldDelimiter: "field_delimiter",
          fieldNames: "field_names",
          outputType: "output_type",
          recordDelimiter: "record_delimiter",
          recordPrefix: "record_prefix",
          recordSuffix: "record_suffix",
          recordTemplate: "record_template",
          sampleRate: "sample_rate",
          timestampFormat: "timestamp_format",
        }),
      ),
      Schema.Null,
    ]),
  ),
  ownershipChallenge: Schema.optional(Schema.String),
} as const;

interface CreateJobBaseRequest {
  /** Body param: Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included. */
  destinationConf: string;
  /** Body param: Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/). */
  dataset?:
    | "access_requests"
    | "audit_logs"
    | "audit_logs_v2"
    | "biso_user_actions"
    | "casb_findings"
    | "device_posture_results"
    | "dex_application_tests"
    | "dex_device_state_events"
    | "dlp_forensic_copies"
    | "dns_firewall_logs"
    | "dns_logs"
    | "email_security_alerts"
    | "firewall_events"
    | "gateway_dns"
    | "gateway_http"
    | "gateway_network"
    | "http_requests"
    | "ipsec_logs"
    | "magic_ids_detections"
    | "nel_reports"
    | "network_analytics_logs"
    | "page_shield_events"
    | "sinkhole_http_logs"
    | "spectrum_events"
    | "ssh_logs"
    | "warp_config_changes"
    | "warp_toggle_changes"
    | "workers_trace_events"
    | "zaraz_events"
    | "zero_trust_network_sessions"
    | null;
  /** Body param: Flag that indicates if the job is enabled. */
  enabled?: boolean;
  /** Body param: The filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/filters/). */
  filter?: string | null;
  /** @deprecated Body param: This field is deprecated. Please use `max_upload_ ` parameters instead. . The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high */
  frequency?: "high" | "low" | null;
  /** Body param: The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). */
  kind?: "" | "edge";
  /** @deprecated Body param: This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api */
  logpullOptions?: string | null;
  /** Body param: The maximum uncompressed file size of a batch of logs. This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means  */
  maxUploadBytes?: "0" | number | null;
  /** Body param: The maximum interval in seconds for log batches. This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log  */
  maxUploadIntervalSeconds?: "0" | number | null;
  /** Body param: The maximum number of log lines per batch. This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch */
  maxUploadRecords?: "0" | number | null;
  /** Body param: Optional human readable job name. Not unique. Cloudflare suggests. that you set this to a meaningful string, like the domain name, to make it easier to identify your job. */
  name?: string | null;
  /** Body param: The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored. */
  outputOptions?: {
    batchPrefix?: string | null;
    batchSuffix?: string | null;
    "cve-2021-44228"?: boolean | null;
    fieldDelimiter?: string | null;
    fieldNames?: string[];
    outputType?: "ndjson" | "csv";
    recordDelimiter?: string | null;
    recordPrefix?: string | null;
    recordSuffix?: string | null;
    recordTemplate?: string | null;
    sampleRate?: number | null;
    timestampFormat?: "unixnano" | "unix" | "rfc3339";
  } | null;
  /** Body param: Ownership challenge token to prove destination ownership. */
  ownershipChallenge?: string;
}

export interface CreateJobForAccountRequest extends CreateJobBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface CreateJobForZoneRequest extends CreateJobBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const CreateJobForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...CreateJobBaseFields,
  }).pipe(
    Schema.encodeKeys({
      destinationConf: "destination_conf",
      dataset: "dataset",
      enabled: "enabled",
      filter: "filter",
      frequency: "frequency",
      kind: "kind",
      logpullOptions: "logpull_options",
      maxUploadBytes: "max_upload_bytes",
      maxUploadIntervalSeconds: "max_upload_interval_seconds",
      maxUploadRecords: "max_upload_records",
      name: "name",
      outputOptions: "output_options",
      ownershipChallenge: "ownership_challenge",
    }),
    T.Http({ method: "POST", path: "/accounts/{account_id}/logpush/jobs" }),
  ) as unknown as Schema.Schema<CreateJobForAccountRequest>;

export const CreateJobForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...CreateJobBaseFields,
  }).pipe(
    Schema.encodeKeys({
      destinationConf: "destination_conf",
      dataset: "dataset",
      enabled: "enabled",
      filter: "filter",
      frequency: "frequency",
      kind: "kind",
      logpullOptions: "logpull_options",
      maxUploadBytes: "max_upload_bytes",
      maxUploadIntervalSeconds: "max_upload_interval_seconds",
      maxUploadRecords: "max_upload_records",
      name: "name",
      outputOptions: "output_options",
      ownershipChallenge: "ownership_challenge",
    }),
    T.Http({ method: "POST", path: "/zones/{zone_id}/logpush/jobs" }),
  ) as unknown as Schema.Schema<CreateJobForZoneRequest>;

export interface CreateJobResponse {
  /** Unique id of the job. */
  id?: number | null;
  /** Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/). */
  dataset?:
    | "access_requests"
    | "audit_logs"
    | "audit_logs_v2"
    | "biso_user_actions"
    | "casb_findings"
    | "device_posture_results"
    | "dex_application_tests"
    | "dex_device_state_events"
    | "dlp_forensic_copies"
    | "dns_firewall_logs"
    | "dns_logs"
    | "email_security_alerts"
    | "firewall_events"
    | "gateway_dns"
    | "gateway_http"
    | "gateway_network"
    | "http_requests"
    | "ipsec_logs"
    | "magic_ids_detections"
    | "nel_reports"
    | "network_analytics_logs"
    | "page_shield_events"
    | "sinkhole_http_logs"
    | "spectrum_events"
    | "ssh_logs"
    | "warp_config_changes"
    | "warp_toggle_changes"
    | "workers_trace_events"
    | "zaraz_events"
    | "zero_trust_network_sessions"
    | null;
  /** Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included. */
  destinationConf?: string | null;
  /** Flag that indicates if the job is enabled. */
  enabled?: boolean | null;
  /** If not null, the job is currently failing. Failures are usually. repetitive (example: no permissions to write to destination bucket). Only the last failure is recorded. On successful execution of a jo */
  errorMessage?: string | null;
  /** @deprecated This field is deprecated. Please use `max_upload_ ` parameters instead. . The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high sends your  */
  frequency?: "high" | "low" | null;
  /** The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). */
  kind?: "" | "edge" | null;
  /** Records the last time for which logs have been successfully pushed. If the last successful push was for logs range 2018-07-23T10:00:00Z to 2018-07-23T10:01:00Z then the value of this field will be 201 */
  lastComplete?: string | null;
  /** Records the last time the job failed. If not null, the job is currently. failing. If null, the job has either never failed or has run successfully at least once since last failure. See also the error_ */
  lastError?: string | null;
  /** @deprecated This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the u */
  logpullOptions?: string | null;
  /** The maximum uncompressed file size of a batch of logs. This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means that log fil */
  maxUploadBytes?: "0" | number | null;
  /** The maximum interval in seconds for log batches. This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log batches; thi */
  maxUploadIntervalSeconds?: "0" | number | null;
  /** The maximum number of log lines per batch. This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch; this means */
  maxUploadRecords?: "0" | number | null;
  /** Optional human readable job name. Not unique. Cloudflare suggests. that you set this to a meaningful string, like the domain name, to make it easier to identify your job. */
  name?: string | null;
  /** The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored. */
  outputOptions?: {
    batchPrefix?: string | null;
    batchSuffix?: string | null;
    "cve-2021-44228"?: boolean | null;
    fieldDelimiter?: string | null;
    fieldNames?: string[] | null;
    outputType?: "ndjson" | "csv" | null;
    recordDelimiter?: string | null;
    recordPrefix?: string | null;
    recordSuffix?: string | null;
    recordTemplate?: string | null;
    sampleRate?: number | null;
    timestampFormat?: "unixnano" | "unix" | "rfc3339" | null;
  } | null;
}

export const CreateJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  dataset: Schema.optional(
    Schema.Union([
      Schema.Literal("access_requests"),
      Schema.Literal("audit_logs"),
      Schema.Literal("audit_logs_v2"),
      Schema.Literal("biso_user_actions"),
      Schema.Literal("casb_findings"),
      Schema.Literal("device_posture_results"),
      Schema.Literal("dex_application_tests"),
      Schema.Literal("dex_device_state_events"),
      Schema.Literal("dlp_forensic_copies"),
      Schema.Literal("dns_firewall_logs"),
      Schema.Literal("dns_logs"),
      Schema.Literal("email_security_alerts"),
      Schema.Literal("firewall_events"),
      Schema.Literal("gateway_dns"),
      Schema.Literal("gateway_http"),
      Schema.Literal("gateway_network"),
      Schema.Literal("http_requests"),
      Schema.Literal("ipsec_logs"),
      Schema.Literal("magic_ids_detections"),
      Schema.Literal("nel_reports"),
      Schema.Literal("network_analytics_logs"),
      Schema.Literal("page_shield_events"),
      Schema.Literal("sinkhole_http_logs"),
      Schema.Literal("spectrum_events"),
      Schema.Literal("ssh_logs"),
      Schema.Literal("warp_config_changes"),
      Schema.Literal("warp_toggle_changes"),
      Schema.Literal("workers_trace_events"),
      Schema.Literal("zaraz_events"),
      Schema.Literal("zero_trust_network_sessions"),
      Schema.Null,
    ]),
  ),
  destinationConf: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  errorMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  frequency: Schema.optional(
    Schema.Union([Schema.Literal("high"), Schema.Literal("low"), Schema.Null]),
  ),
  kind: Schema.optional(
    Schema.Union([Schema.Literals(["", "edge"]), Schema.Null]),
  ),
  lastComplete: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  lastError: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  logpullOptions: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  maxUploadBytes: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadIntervalSeconds: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadRecords: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  outputOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        batchPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        batchSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        "cve-2021-44228": Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        fieldDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        fieldNames: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        outputType: Schema.optional(
          Schema.Union([Schema.Literals(["ndjson", "csv"]), Schema.Null]),
        ),
        recordDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordTemplate: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        sampleRate: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        timestampFormat: Schema.optional(
          Schema.Union([
            Schema.Literals(["unixnano", "unix", "rfc3339"]),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          batchPrefix: "batch_prefix",
          batchSuffix: "batch_suffix",
          "cve-2021-44228": "CVE-2021-44228",
          fieldDelimiter: "field_delimiter",
          fieldNames: "field_names",
          outputType: "output_type",
          recordDelimiter: "record_delimiter",
          recordPrefix: "record_prefix",
          recordSuffix: "record_suffix",
          recordTemplate: "record_template",
          sampleRate: "sample_rate",
          timestampFormat: "timestamp_format",
        }),
      ),
      Schema.Null,
    ]),
  ),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      dataset: "dataset",
      destinationConf: "destination_conf",
      enabled: "enabled",
      errorMessage: "error_message",
      frequency: "frequency",
      kind: "kind",
      lastComplete: "last_complete",
      lastError: "last_error",
      logpullOptions: "logpull_options",
      maxUploadBytes: "max_upload_bytes",
      maxUploadIntervalSeconds: "max_upload_interval_seconds",
      maxUploadRecords: "max_upload_records",
      name: "name",
      outputOptions: "output_options",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateJobResponse>;

export type CreateJobError = DefaultErrors;

export const createJobForAccount: API.OperationMethod<
  CreateJobForAccountRequest,
  CreateJobResponse,
  CreateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateJobForAccountRequest,
  output: CreateJobResponse,
  errors: [],
}));

export const createJobForZone: API.OperationMethod<
  CreateJobForZoneRequest,
  CreateJobResponse,
  CreateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateJobForZoneRequest,
  output: CreateJobResponse,
  errors: [],
}));

const UpdateJobBaseFields = {
  jobId: Schema.Number.pipe(T.HttpPath("jobId")),
  destinationConf: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  filter: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  frequency: Schema.optional(
    Schema.Union([Schema.Literal("high"), Schema.Literal("low"), Schema.Null]),
  ),
  kind: Schema.optional(Schema.Literals(["", "edge"])),
  logpullOptions: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  maxUploadBytes: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadIntervalSeconds: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadRecords: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  outputOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        batchPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        batchSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        "cve-2021-44228": Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        fieldDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        fieldNames: Schema.optional(Schema.Array(Schema.String)),
        outputType: Schema.optional(Schema.Literals(["ndjson", "csv"])),
        recordDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordTemplate: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        sampleRate: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        timestampFormat: Schema.optional(
          Schema.Literals(["unixnano", "unix", "rfc3339"]),
        ),
      }).pipe(
        Schema.encodeKeys({
          batchPrefix: "batch_prefix",
          batchSuffix: "batch_suffix",
          "cve-2021-44228": "CVE-2021-44228",
          fieldDelimiter: "field_delimiter",
          fieldNames: "field_names",
          outputType: "output_type",
          recordDelimiter: "record_delimiter",
          recordPrefix: "record_prefix",
          recordSuffix: "record_suffix",
          recordTemplate: "record_template",
          sampleRate: "sample_rate",
          timestampFormat: "timestamp_format",
        }),
      ),
      Schema.Null,
    ]),
  ),
  ownershipChallenge: Schema.optional(Schema.String),
} as const;

interface UpdateJobBaseRequest {
  jobId: number;
  /** Body param: Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included. */
  destinationConf?: string;
  /** Body param: Flag that indicates if the job is enabled. */
  enabled?: boolean;
  /** Body param: The filters to select the events to include and/or remove from your logs. For more information, refer to [Filters](https://developers.cloudflare.com/logs/reference/filters/). */
  filter?: string | null;
  /** @deprecated Body param: This field is deprecated. Please use `max_upload_ ` parameters instead. . The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high */
  frequency?: "high" | "low" | null;
  /** Body param: The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). */
  kind?: "" | "edge";
  /** @deprecated Body param: This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api */
  logpullOptions?: string | null;
  /** Body param: The maximum uncompressed file size of a batch of logs. This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means  */
  maxUploadBytes?: "0" | number | null;
  /** Body param: The maximum interval in seconds for log batches. This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log  */
  maxUploadIntervalSeconds?: "0" | number | null;
  /** Body param: The maximum number of log lines per batch. This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch */
  maxUploadRecords?: "0" | number | null;
  /** Body param: Optional human readable job name. Not unique. Cloudflare suggests. that you set this to a meaningful string, like the domain name, to make it easier to identify your job. */
  name?: string | null;
  /** Body param: The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored. */
  outputOptions?: {
    batchPrefix?: string | null;
    batchSuffix?: string | null;
    "cve-2021-44228"?: boolean | null;
    fieldDelimiter?: string | null;
    fieldNames?: string[];
    outputType?: "ndjson" | "csv";
    recordDelimiter?: string | null;
    recordPrefix?: string | null;
    recordSuffix?: string | null;
    recordTemplate?: string | null;
    sampleRate?: number | null;
    timestampFormat?: "unixnano" | "unix" | "rfc3339";
  } | null;
  /** Body param: Ownership challenge token to prove destination ownership. */
  ownershipChallenge?: string;
}

export interface UpdateJobForAccountRequest extends UpdateJobBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface UpdateJobForZoneRequest extends UpdateJobBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const UpdateJobForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...UpdateJobBaseFields,
  }).pipe(
    Schema.encodeKeys({
      destinationConf: "destination_conf",
      enabled: "enabled",
      filter: "filter",
      frequency: "frequency",
      kind: "kind",
      logpullOptions: "logpull_options",
      maxUploadBytes: "max_upload_bytes",
      maxUploadIntervalSeconds: "max_upload_interval_seconds",
      maxUploadRecords: "max_upload_records",
      name: "name",
      outputOptions: "output_options",
      ownershipChallenge: "ownership_challenge",
    }),
    T.Http({
      method: "PUT",
      path: "/accounts/{account_id}/logpush/jobs/{jobId}",
    }),
  ) as unknown as Schema.Schema<UpdateJobForAccountRequest>;

export const UpdateJobForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...UpdateJobBaseFields,
  }).pipe(
    Schema.encodeKeys({
      destinationConf: "destination_conf",
      enabled: "enabled",
      filter: "filter",
      frequency: "frequency",
      kind: "kind",
      logpullOptions: "logpull_options",
      maxUploadBytes: "max_upload_bytes",
      maxUploadIntervalSeconds: "max_upload_interval_seconds",
      maxUploadRecords: "max_upload_records",
      name: "name",
      outputOptions: "output_options",
      ownershipChallenge: "ownership_challenge",
    }),
    T.Http({ method: "PUT", path: "/zones/{zone_id}/logpush/jobs/{jobId}" }),
  ) as unknown as Schema.Schema<UpdateJobForZoneRequest>;

export interface UpdateJobResponse {
  /** Unique id of the job. */
  id?: number | null;
  /** Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/). */
  dataset?:
    | "access_requests"
    | "audit_logs"
    | "audit_logs_v2"
    | "biso_user_actions"
    | "casb_findings"
    | "device_posture_results"
    | "dex_application_tests"
    | "dex_device_state_events"
    | "dlp_forensic_copies"
    | "dns_firewall_logs"
    | "dns_logs"
    | "email_security_alerts"
    | "firewall_events"
    | "gateway_dns"
    | "gateway_http"
    | "gateway_network"
    | "http_requests"
    | "ipsec_logs"
    | "magic_ids_detections"
    | "nel_reports"
    | "network_analytics_logs"
    | "page_shield_events"
    | "sinkhole_http_logs"
    | "spectrum_events"
    | "ssh_logs"
    | "warp_config_changes"
    | "warp_toggle_changes"
    | "workers_trace_events"
    | "zaraz_events"
    | "zero_trust_network_sessions"
    | null;
  /** Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included. */
  destinationConf?: string | null;
  /** Flag that indicates if the job is enabled. */
  enabled?: boolean | null;
  /** If not null, the job is currently failing. Failures are usually. repetitive (example: no permissions to write to destination bucket). Only the last failure is recorded. On successful execution of a jo */
  errorMessage?: string | null;
  /** @deprecated This field is deprecated. Please use `max_upload_ ` parameters instead. . The frequency at which Cloudflare sends batches of logs to your destination. Setting frequency to high sends your  */
  frequency?: "high" | "low" | null;
  /** The kind parameter (optional) is used to differentiate between Logpush and Edge Log Delivery jobs (when supported by the dataset). */
  kind?: "" | "edge" | null;
  /** Records the last time for which logs have been successfully pushed. If the last successful push was for logs range 2018-07-23T10:00:00Z to 2018-07-23T10:01:00Z then the value of this field will be 201 */
  lastComplete?: string | null;
  /** Records the last time the job failed. If not null, the job is currently. failing. If null, the job has either never failed or has run successfully at least once since last failure. See also the error_ */
  lastError?: string | null;
  /** @deprecated This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api, copy the u */
  logpullOptions?: string | null;
  /** The maximum uncompressed file size of a batch of logs. This setting value must be between `5 MB` and `1 GB`, or `0` to disable it. Note that you cannot set a minimum file size; this means that log fil */
  maxUploadBytes?: "0" | number | null;
  /** The maximum interval in seconds for log batches. This setting must be between 30 and 300 seconds (5 minutes), or `0` to disable it. Note that you cannot specify a minimum interval for log batches; thi */
  maxUploadIntervalSeconds?: "0" | number | null;
  /** The maximum number of log lines per batch. This setting must be between 1000 and 1,000,000 lines, or `0` to disable it. Note that you cannot specify a minimum number of log lines per batch; this means */
  maxUploadRecords?: "0" | number | null;
  /** Optional human readable job name. Not unique. Cloudflare suggests. that you set this to a meaningful string, like the domain name, to make it easier to identify your job. */
  name?: string | null;
  /** The structured replacement for `logpull_options`. When including this field, the `logpull_option` field will be ignored. */
  outputOptions?: {
    batchPrefix?: string | null;
    batchSuffix?: string | null;
    "cve-2021-44228"?: boolean | null;
    fieldDelimiter?: string | null;
    fieldNames?: string[] | null;
    outputType?: "ndjson" | "csv" | null;
    recordDelimiter?: string | null;
    recordPrefix?: string | null;
    recordSuffix?: string | null;
    recordTemplate?: string | null;
    sampleRate?: number | null;
    timestampFormat?: "unixnano" | "unix" | "rfc3339" | null;
  } | null;
}

export const UpdateJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  dataset: Schema.optional(
    Schema.Union([
      Schema.Literal("access_requests"),
      Schema.Literal("audit_logs"),
      Schema.Literal("audit_logs_v2"),
      Schema.Literal("biso_user_actions"),
      Schema.Literal("casb_findings"),
      Schema.Literal("device_posture_results"),
      Schema.Literal("dex_application_tests"),
      Schema.Literal("dex_device_state_events"),
      Schema.Literal("dlp_forensic_copies"),
      Schema.Literal("dns_firewall_logs"),
      Schema.Literal("dns_logs"),
      Schema.Literal("email_security_alerts"),
      Schema.Literal("firewall_events"),
      Schema.Literal("gateway_dns"),
      Schema.Literal("gateway_http"),
      Schema.Literal("gateway_network"),
      Schema.Literal("http_requests"),
      Schema.Literal("ipsec_logs"),
      Schema.Literal("magic_ids_detections"),
      Schema.Literal("nel_reports"),
      Schema.Literal("network_analytics_logs"),
      Schema.Literal("page_shield_events"),
      Schema.Literal("sinkhole_http_logs"),
      Schema.Literal("spectrum_events"),
      Schema.Literal("ssh_logs"),
      Schema.Literal("warp_config_changes"),
      Schema.Literal("warp_toggle_changes"),
      Schema.Literal("workers_trace_events"),
      Schema.Literal("zaraz_events"),
      Schema.Literal("zero_trust_network_sessions"),
      Schema.Null,
    ]),
  ),
  destinationConf: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  errorMessage: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  frequency: Schema.optional(
    Schema.Union([Schema.Literal("high"), Schema.Literal("low"), Schema.Null]),
  ),
  kind: Schema.optional(
    Schema.Union([Schema.Literals(["", "edge"]), Schema.Null]),
  ),
  lastComplete: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  lastError: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  logpullOptions: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  maxUploadBytes: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadIntervalSeconds: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  maxUploadRecords: Schema.optional(
    Schema.Union([Schema.Literal("0"), Schema.Number, Schema.Null]),
  ),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  outputOptions: Schema.optional(
    Schema.Union([
      Schema.Struct({
        batchPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        batchSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        "cve-2021-44228": Schema.optional(
          Schema.Union([Schema.Boolean, Schema.Null]),
        ),
        fieldDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        fieldNames: Schema.optional(
          Schema.Union([Schema.Array(Schema.String), Schema.Null]),
        ),
        outputType: Schema.optional(
          Schema.Union([Schema.Literals(["ndjson", "csv"]), Schema.Null]),
        ),
        recordDelimiter: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordPrefix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordSuffix: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        recordTemplate: Schema.optional(
          Schema.Union([Schema.String, Schema.Null]),
        ),
        sampleRate: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        timestampFormat: Schema.optional(
          Schema.Union([
            Schema.Literals(["unixnano", "unix", "rfc3339"]),
            Schema.Null,
          ]),
        ),
      }).pipe(
        Schema.encodeKeys({
          batchPrefix: "batch_prefix",
          batchSuffix: "batch_suffix",
          "cve-2021-44228": "CVE-2021-44228",
          fieldDelimiter: "field_delimiter",
          fieldNames: "field_names",
          outputType: "output_type",
          recordDelimiter: "record_delimiter",
          recordPrefix: "record_prefix",
          recordSuffix: "record_suffix",
          recordTemplate: "record_template",
          sampleRate: "sample_rate",
          timestampFormat: "timestamp_format",
        }),
      ),
      Schema.Null,
    ]),
  ),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      dataset: "dataset",
      destinationConf: "destination_conf",
      enabled: "enabled",
      errorMessage: "error_message",
      frequency: "frequency",
      kind: "kind",
      lastComplete: "last_complete",
      lastError: "last_error",
      logpullOptions: "logpull_options",
      maxUploadBytes: "max_upload_bytes",
      maxUploadIntervalSeconds: "max_upload_interval_seconds",
      maxUploadRecords: "max_upload_records",
      name: "name",
      outputOptions: "output_options",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<UpdateJobResponse>;

export type UpdateJobError = DefaultErrors;

export const updateJobForAccount: API.OperationMethod<
  UpdateJobForAccountRequest,
  UpdateJobResponse,
  UpdateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateJobForAccountRequest,
  output: UpdateJobResponse,
  errors: [],
}));

export const updateJobForZone: API.OperationMethod<
  UpdateJobForZoneRequest,
  UpdateJobResponse,
  UpdateJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateJobForZoneRequest,
  output: UpdateJobResponse,
  errors: [],
}));

const DeleteJobBaseFields = {
  jobId: Schema.Number.pipe(T.HttpPath("jobId")),
} as const;

interface DeleteJobBaseRequest {
  jobId: number;
}

export interface DeleteJobForAccountRequest extends DeleteJobBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DeleteJobForZoneRequest extends DeleteJobBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DeleteJobForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...DeleteJobBaseFields,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/accounts/{account_id}/logpush/jobs/{jobId}",
    }),
  ) as unknown as Schema.Schema<DeleteJobForAccountRequest>;

export const DeleteJobForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...DeleteJobBaseFields,
  }).pipe(
    T.Http({ method: "DELETE", path: "/zones/{zone_id}/logpush/jobs/{jobId}" }),
  ) as unknown as Schema.Schema<DeleteJobForZoneRequest>;

export interface DeleteJobResponse {
  /** Unique id of the job. */
  id?: number | null;
}

export const DeleteJobResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
}).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<DeleteJobResponse>;

export type DeleteJobError = DefaultErrors;

export const deleteJobForAccount: API.OperationMethod<
  DeleteJobForAccountRequest,
  DeleteJobResponse,
  DeleteJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteJobForAccountRequest,
  output: DeleteJobResponse,
  errors: [],
}));

export const deleteJobForZone: API.OperationMethod<
  DeleteJobForZoneRequest,
  DeleteJobResponse,
  DeleteJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteJobForZoneRequest,
  output: DeleteJobResponse,
  errors: [],
}));

// =============================================================================
// Ownership
// =============================================================================

const CreateOwnershipBaseFields = {
  destinationConf: Schema.String,
} as const;

interface CreateOwnershipBaseRequest {
  /** Body param: Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included. */
  destinationConf: string;
}

export interface CreateOwnershipForAccountRequest extends CreateOwnershipBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface CreateOwnershipForZoneRequest extends CreateOwnershipBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const CreateOwnershipForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...CreateOwnershipBaseFields,
  }).pipe(
    Schema.encodeKeys({ destinationConf: "destination_conf" }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/logpush/ownership",
    }),
  ) as unknown as Schema.Schema<CreateOwnershipForAccountRequest>;

export const CreateOwnershipForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...CreateOwnershipBaseFields,
  }).pipe(
    Schema.encodeKeys({ destinationConf: "destination_conf" }),
    T.Http({ method: "POST", path: "/zones/{zone_id}/logpush/ownership" }),
  ) as unknown as Schema.Schema<CreateOwnershipForZoneRequest>;

export interface CreateOwnershipResponse {
  filename?: string | null;
  message?: string | null;
  valid?: boolean | null;
}

export const CreateOwnershipResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filename: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    valid: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateOwnershipResponse>;

export type CreateOwnershipError = DefaultErrors;

export const createOwnershipForAccount: API.OperationMethod<
  CreateOwnershipForAccountRequest,
  CreateOwnershipResponse,
  CreateOwnershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOwnershipForAccountRequest,
  output: CreateOwnershipResponse,
  errors: [],
}));

export const createOwnershipForZone: API.OperationMethod<
  CreateOwnershipForZoneRequest,
  CreateOwnershipResponse,
  CreateOwnershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOwnershipForZoneRequest,
  output: CreateOwnershipResponse,
  errors: [],
}));

const ValidateOwnershipBaseFields = {
  destinationConf: Schema.String,
  ownershipChallenge: Schema.String,
} as const;

interface ValidateOwnershipBaseRequest {
  /** Body param: Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included. */
  destinationConf: string;
  /** Body param: Ownership challenge token to prove destination ownership. */
  ownershipChallenge: string;
}

export interface ValidateOwnershipForAccountRequest extends ValidateOwnershipBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ValidateOwnershipForZoneRequest extends ValidateOwnershipBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ValidateOwnershipForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...ValidateOwnershipBaseFields,
  }).pipe(
    Schema.encodeKeys({
      destinationConf: "destination_conf",
      ownershipChallenge: "ownership_challenge",
    }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/logpush/ownership/validate",
    }),
  ) as unknown as Schema.Schema<ValidateOwnershipForAccountRequest>;

export const ValidateOwnershipForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...ValidateOwnershipBaseFields,
  }).pipe(
    Schema.encodeKeys({
      destinationConf: "destination_conf",
      ownershipChallenge: "ownership_challenge",
    }),
    T.Http({
      method: "POST",
      path: "/zones/{zone_id}/logpush/ownership/validate",
    }),
  ) as unknown as Schema.Schema<ValidateOwnershipForZoneRequest>;

export interface ValidateOwnershipResponse {
  valid?: boolean | null;
}

export const ValidateOwnershipResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valid: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<ValidateOwnershipResponse>;

export type ValidateOwnershipError = DefaultErrors;

export const validateOwnershipForAccount: API.OperationMethod<
  ValidateOwnershipForAccountRequest,
  ValidateOwnershipResponse,
  ValidateOwnershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateOwnershipForAccountRequest,
  output: ValidateOwnershipResponse,
  errors: [],
}));

export const validateOwnershipForZone: API.OperationMethod<
  ValidateOwnershipForZoneRequest,
  ValidateOwnershipResponse,
  ValidateOwnershipError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ValidateOwnershipForZoneRequest,
  output: ValidateOwnershipResponse,
  errors: [],
}));

// =============================================================================
// Validate
// =============================================================================

const DestinationValidateBaseFields = {
  destinationConf: Schema.String,
} as const;

interface DestinationValidateBaseRequest {
  /** Body param: Uniquely identifies a resource (such as an s3 bucket) where data. will be pushed. Additional configuration parameters supported by the destination may be included. */
  destinationConf: string;
}

export interface DestinationValidateForAccountRequest extends DestinationValidateBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface DestinationValidateForZoneRequest extends DestinationValidateBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const DestinationValidateForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...DestinationValidateBaseFields,
  }).pipe(
    Schema.encodeKeys({ destinationConf: "destination_conf" }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/logpush/validate/destination",
    }),
  ) as unknown as Schema.Schema<DestinationValidateForAccountRequest>;

export const DestinationValidateForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...DestinationValidateBaseFields,
  }).pipe(
    Schema.encodeKeys({ destinationConf: "destination_conf" }),
    T.Http({
      method: "POST",
      path: "/zones/{zone_id}/logpush/validate/destination",
    }),
  ) as unknown as Schema.Schema<DestinationValidateForZoneRequest>;

export interface DestinationValidateResponse {
  message?: string | null;
  valid?: boolean | null;
}

export const DestinationValidateResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    valid: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DestinationValidateResponse>;

export type DestinationValidateError = DefaultErrors;

export const destinationValidateForAccount: API.OperationMethod<
  DestinationValidateForAccountRequest,
  DestinationValidateResponse,
  DestinationValidateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DestinationValidateForAccountRequest,
  output: DestinationValidateResponse,
  errors: [],
}));

export const destinationValidateForZone: API.OperationMethod<
  DestinationValidateForZoneRequest,
  DestinationValidateResponse,
  DestinationValidateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DestinationValidateForZoneRequest,
  output: DestinationValidateResponse,
  errors: [],
}));

const OriginValidateBaseFields = {
  logpullOptions: Schema.Union([Schema.String, Schema.Null]),
} as const;

interface OriginValidateBaseRequest {
  /** @deprecated Body param: This field is deprecated. Use `output_options` instead. Configuration string. It specifies things like requested fields and timestamp formats. If migrating from the logpull api */
  logpullOptions: string | null;
}

export interface OriginValidateForAccountRequest extends OriginValidateBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface OriginValidateForZoneRequest extends OriginValidateBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const OriginValidateForAccountRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ...OriginValidateBaseFields,
  }).pipe(
    Schema.encodeKeys({ logpullOptions: "logpull_options" }),
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/logpush/validate/origin",
    }),
  ) as unknown as Schema.Schema<OriginValidateForAccountRequest>;

export const OriginValidateForZoneRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ...OriginValidateBaseFields,
  }).pipe(
    Schema.encodeKeys({ logpullOptions: "logpull_options" }),
    T.Http({
      method: "POST",
      path: "/zones/{zone_id}/logpush/validate/origin",
    }),
  ) as unknown as Schema.Schema<OriginValidateForZoneRequest>;

export interface OriginValidateResponse {
  message?: string | null;
  valid?: boolean | null;
}

export const OriginValidateResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    valid: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  },
).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<OriginValidateResponse>;

export type OriginValidateError = DefaultErrors;

export const originValidateForAccount: API.OperationMethod<
  OriginValidateForAccountRequest,
  OriginValidateResponse,
  OriginValidateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: OriginValidateForAccountRequest,
  output: OriginValidateResponse,
  errors: [],
}));

export const originValidateForZone: API.OperationMethod<
  OriginValidateForZoneRequest,
  OriginValidateResponse,
  OriginValidateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: OriginValidateForZoneRequest,
  output: OriginValidateResponse,
  errors: [],
}));
