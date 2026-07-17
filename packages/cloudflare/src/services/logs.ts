/**
 * Cloudflare LOGS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service logs
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

export class CmbConfigNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CmbConfigNotFound>()("CmbConfigNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class LogsControlNotAuthorized extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<LogsControlNotAuthorized>()(
    "LogsControlNotAuthorized",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 10000, message: { includes: "Unauthorized" } }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Field {
  /** Whether the API includes this field in log ingest. */
  enabled: boolean;
  /** Field name in lowercase. */
  name: string;
}
const Field = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.Boolean,
    name: Schema.String,
  }),
) as unknown as Schema.Codec<Field>;

interface ListLogExplorerDatasetsResponseResult {
  /** RFC3339 timestamp recording when the API created this dataset. */
  createdAt: string;
  /** Dataset type name (e.g. `http_requests`). */
  dataset: string;
  /** Unique dataset ID. */
  datasetId: string;
  /** Whether log ingest is currently active for this dataset. */
  enabled: boolean;
  /** Public ID of the account or zone that owns this dataset. */
  objectId: string;
  /** Whether this dataset belongs to an account or a zone. */
  objectType: "account" | "zone" | (string & {});
  /** RFC3339 timestamp recording when the API last updated this dataset. */
  updatedAt: string;
}
const ListLogExplorerDatasetsResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      dataset: Schema.String,
      datasetId: Schema.String,
      enabled: Schema.Boolean,
      objectId: Schema.String,
      objectType: Schema.Union([
        Schema.Literals(["account", "zone"]),
        Schema.String,
      ]),
      updatedAt: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        dataset: "dataset",
        datasetId: "dataset_id",
        enabled: "enabled",
        objectId: "object_id",
        objectType: "object_type",
        updatedAt: "updated_at",
      }),
    ),
  ) as unknown as Schema.Codec<ListLogExplorerDatasetsResponseResult>;

interface Schema2 {
  properties?: Record<string, unknown> | null;
  required?: string[] | null;
  type?: "object" | null;
}
const Schema2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    properties: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    required: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    type: Schema.optional(
      Schema.Union([Schema.Literal("object"), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Schema2>;

interface ListLogExplorerDatasetAvailablesResponseResult {
  /** Dataset type name (e.g. `http_requests`). */
  dataset: string;
  /** Whether this dataset type is account-scoped or zone-scoped. */
  objectType: "account" | "zone" | (string & {});
  /** JSON Schema that describes the fields this dataset exposes. */
  schema: {
    properties?: Record<string, unknown> | null;
    required?: string[] | null;
    type?: "object" | null;
  };
  /** The primary timestamp field name for this dataset. */
  timestampField: string;
}
const ListLogExplorerDatasetAvailablesResponseResult =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dataset: Schema.String,
      objectType: Schema.Union([
        Schema.Literals(["account", "zone"]),
        Schema.String,
      ]),
      schema: Schema2,
      timestampField: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        dataset: "dataset",
        objectType: "object_type",
        schema: "schema",
        timestampField: "timestamp_field",
      }),
    ),
  ) as unknown as Schema.Codec<ListLogExplorerDatasetAvailablesResponseResult>;

// =============================================================================
// ControlCmbConfig
// =============================================================================

export interface GetControlCmbConfigRequest {
  /** Identifier. */
  accountId: string;
}

export const GetControlCmbConfigRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/logs/control/cmb/config",
      }),
    ),
  ) as unknown as Schema.Codec<GetControlCmbConfigRequest>;

export interface GetControlCmbConfigResponse {
  /** Allow out of region access */
  allowOutOfRegionAccess?: boolean | null;
  /** Name of the region. */
  regions?: string | null;
}

export const GetControlCmbConfigResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      allowOutOfRegionAccess: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      regions: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          allowOutOfRegionAccess: "allow_out_of_region_access",
          regions: "regions",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetControlCmbConfigResponse>;

export type GetControlCmbConfigError =
  | DefaultErrors
  | LogsControlNotAuthorized
  | CmbConfigNotFound
  | Forbidden;

export const getControlCmbConfig: API.OperationMethod<
  GetControlCmbConfigRequest,
  GetControlCmbConfigResponse,
  GetControlCmbConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetControlCmbConfigRequest,
  output: GetControlCmbConfigResponse,
  errors: [LogsControlNotAuthorized, CmbConfigNotFound, Forbidden],
}));

export interface CreateControlCmbConfigRequest {
  /** Path param: Identifier. */
  accountId: string;
  /** Body param: Allow out of region access */
  allowOutOfRegionAccess?: boolean;
  /** Body param: Name of the region. */
  regions?: string;
}

export const CreateControlCmbConfigRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      allowOutOfRegionAccess: Schema.optional(Schema.Boolean),
      regions: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        allowOutOfRegionAccess: "allow_out_of_region_access",
        regions: "regions",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/logs/control/cmb/config",
      }),
    ),
  ) as unknown as Schema.Codec<CreateControlCmbConfigRequest>;

export interface CreateControlCmbConfigResponse {
  /** Allow out of region access */
  allowOutOfRegionAccess?: boolean | null;
  /** Name of the region. */
  regions?: string | null;
}

export const CreateControlCmbConfigResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      allowOutOfRegionAccess: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
      regions: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          allowOutOfRegionAccess: "allow_out_of_region_access",
          regions: "regions",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateControlCmbConfigResponse>;

export type CreateControlCmbConfigError =
  | DefaultErrors
  | LogsControlNotAuthorized
  | Forbidden;

export const createControlCmbConfig: API.OperationMethod<
  CreateControlCmbConfigRequest,
  CreateControlCmbConfigResponse,
  CreateControlCmbConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateControlCmbConfigRequest,
  output: CreateControlCmbConfigResponse,
  errors: [LogsControlNotAuthorized, Forbidden],
}));

export interface DeleteControlCmbConfigRequest {
  /** Identifier. */
  accountId: string;
}

export const DeleteControlCmbConfigRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/logs/control/cmb/config",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteControlCmbConfigRequest>;

export type DeleteControlCmbConfigResponse = unknown;

export const DeleteControlCmbConfigResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteControlCmbConfigResponse>;

export type DeleteControlCmbConfigError =
  | DefaultErrors
  | LogsControlNotAuthorized
  | CmbConfigNotFound
  | Forbidden;

export const deleteControlCmbConfig: API.OperationMethod<
  DeleteControlCmbConfigRequest,
  DeleteControlCmbConfigResponse,
  DeleteControlCmbConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteControlCmbConfigRequest,
  output: DeleteControlCmbConfigResponse,
  errors: [LogsControlNotAuthorized, CmbConfigNotFound, Forbidden],
}));

// =============================================================================
// ControlRetention
// =============================================================================

export interface GetControlRetentionRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetControlRetentionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/logs/control/retention/flag",
      }),
    ),
  ) as unknown as Schema.Codec<GetControlRetentionRequest>;

export interface GetControlRetentionResponse {
  /** The log retention flag for Logpull API. */
  flag?: boolean | null;
}

export const GetControlRetentionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      flag: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetControlRetentionResponse>;

export type GetControlRetentionError =
  | DefaultErrors
  | LogsControlNotAuthorized
  | Forbidden;

export const getControlRetention: API.OperationMethod<
  GetControlRetentionRequest,
  GetControlRetentionResponse,
  GetControlRetentionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetControlRetentionRequest,
  output: GetControlRetentionResponse,
  errors: [LogsControlNotAuthorized, Forbidden],
}));

export interface CreateControlRetentionRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The log retention flag for Logpull API. */
  flag?: boolean;
}

export const CreateControlRetentionRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      flag: Schema.optional(Schema.Boolean),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/logs/control/retention/flag",
      }),
    ),
  ) as unknown as Schema.Codec<CreateControlRetentionRequest>;

export interface CreateControlRetentionResponse {
  /** The log retention flag for Logpull API. */
  flag?: boolean | null;
}

export const CreateControlRetentionResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      flag: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateControlRetentionResponse>;

export type CreateControlRetentionError =
  | DefaultErrors
  | LogsControlNotAuthorized
  | Forbidden;

export const createControlRetention: API.OperationMethod<
  CreateControlRetentionRequest,
  CreateControlRetentionResponse,
  CreateControlRetentionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateControlRetentionRequest,
  output: CreateControlRetentionResponse,
  errors: [LogsControlNotAuthorized, Forbidden],
}));

// =============================================================================
// LogExplorerDataset
// =============================================================================

const GetLogExplorerDatasetBaseFields = {
  datasetId: Schema.String.pipe(T.HttpPath("datasetId")),
} as const;

interface GetLogExplorerDatasetBaseRequest {
  datasetId: string;
}

export interface GetLogExplorerDatasetForAccountRequest extends GetLogExplorerDatasetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface GetLogExplorerDatasetForZoneRequest extends GetLogExplorerDatasetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const GetLogExplorerDatasetForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...GetLogExplorerDatasetBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/logs/explorer/datasets/{datasetId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetLogExplorerDatasetForAccountRequest>;

export const GetLogExplorerDatasetForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...GetLogExplorerDatasetBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/logs/explorer/datasets/{datasetId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetLogExplorerDatasetForZoneRequest>;

export interface GetLogExplorerDatasetResponse {
  /** RFC3339 timestamp recording when the API created this dataset. */
  createdAt: string;
  /** Dataset type name (e.g. `http_requests`). */
  dataset: string;
  /** Unique dataset ID. */
  datasetId: string;
  /** Whether log ingest is currently active for this dataset. */
  enabled: boolean;
  /** Public ID of the account or zone that owns this dataset. */
  objectId: string;
  /** Whether this dataset belongs to an account or a zone. */
  objectType: "account" | "zone" | (string & {});
  /** RFC3339 timestamp recording when the API last updated this dataset. */
  updatedAt: string;
  /** The field configuration for this dataset. */
  fields?: { enabled: boolean; name: string }[] | null;
}

export const GetLogExplorerDatasetResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      dataset: Schema.String,
      datasetId: Schema.String,
      enabled: Schema.Boolean,
      objectId: Schema.String,
      objectType: Schema.Union([
        Schema.Literals(["account", "zone"]),
        Schema.String,
      ]),
      updatedAt: Schema.String,
      fields: Schema.optional(Schema.Union([Schema.Array(Field), Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          dataset: "dataset",
          datasetId: "dataset_id",
          enabled: "enabled",
          objectId: "object_id",
          objectType: "object_type",
          updatedAt: "updated_at",
          fields: "fields",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetLogExplorerDatasetResponse>;

export type GetLogExplorerDatasetError = DefaultErrors;

export const getLogExplorerDatasetForAccount: API.OperationMethod<
  GetLogExplorerDatasetForAccountRequest,
  GetLogExplorerDatasetResponse,
  GetLogExplorerDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogExplorerDatasetForAccountRequest,
  output: GetLogExplorerDatasetResponse,
  errors: [],
}));

export const getLogExplorerDatasetForZone: API.OperationMethod<
  GetLogExplorerDatasetForZoneRequest,
  GetLogExplorerDatasetResponse,
  GetLogExplorerDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLogExplorerDatasetForZoneRequest,
  output: GetLogExplorerDatasetResponse,
  errors: [],
}));

const ListLogExplorerDatasetsBaseFields = {
  includeZones: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("include_zones"),
  ),
} as const;

interface ListLogExplorerDatasetsBaseRequest {
  /** Query param: Set to true to include zone-scoped datasets belonging to this account. */
  includeZones?: boolean;
}

export interface ListLogExplorerDatasetsForAccountRequest extends ListLogExplorerDatasetsBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListLogExplorerDatasetsForZoneRequest extends ListLogExplorerDatasetsBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListLogExplorerDatasetsForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListLogExplorerDatasetsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/logs/explorer/datasets",
      }),
    ),
  ) as unknown as Schema.Codec<ListLogExplorerDatasetsForAccountRequest>;

export const ListLogExplorerDatasetsForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListLogExplorerDatasetsBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/logs/explorer/datasets",
      }),
    ),
  ) as unknown as Schema.Codec<ListLogExplorerDatasetsForZoneRequest>;

export interface ListLogExplorerDatasetsResponse {
  result: {
    createdAt: string;
    dataset: string;
    datasetId: string;
    enabled: boolean;
    objectId: string;
    objectType: "account" | "zone" | (string & {});
    updatedAt: string;
  }[];
}

export const ListLogExplorerDatasetsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListLogExplorerDatasetsResponseResult),
    }),
  ) as unknown as Schema.Codec<ListLogExplorerDatasetsResponse>;

export type ListLogExplorerDatasetsError = DefaultErrors;

export const listLogExplorerDatasetsForAccount: API.PaginatedOperationMethod<
  ListLogExplorerDatasetsForAccountRequest,
  ListLogExplorerDatasetsResponse,
  ListLogExplorerDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogExplorerDatasetsForAccountRequest,
  output: ListLogExplorerDatasetsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export const listLogExplorerDatasetsForZone: API.PaginatedOperationMethod<
  ListLogExplorerDatasetsForZoneRequest,
  ListLogExplorerDatasetsResponse,
  ListLogExplorerDatasetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogExplorerDatasetsForZoneRequest,
  output: ListLogExplorerDatasetsResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

const CreateLogExplorerDatasetBaseFields = {
  dataset: Schema.String,
  fields: Schema.optional(Schema.Array(Field)),
} as const;

interface CreateLogExplorerDatasetBaseRequest {
  /** Body param: Dataset type name to create (e.g. `http_requests`). */
  dataset: string;
  /** Body param: Controls which fields the API ingests. Defaults to all available fields when absent. */
  fields?: { enabled: boolean; name: string }[];
}

export interface CreateLogExplorerDatasetForAccountRequest extends CreateLogExplorerDatasetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface CreateLogExplorerDatasetForZoneRequest extends CreateLogExplorerDatasetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const CreateLogExplorerDatasetForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...CreateLogExplorerDatasetBaseFields,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/logs/explorer/datasets",
      }),
    ),
  ) as unknown as Schema.Codec<CreateLogExplorerDatasetForAccountRequest>;

export const CreateLogExplorerDatasetForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...CreateLogExplorerDatasetBaseFields,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/logs/explorer/datasets",
      }),
    ),
  ) as unknown as Schema.Codec<CreateLogExplorerDatasetForZoneRequest>;

export interface CreateLogExplorerDatasetResponse {
  /** RFC3339 timestamp recording when the API created this dataset. */
  createdAt: string;
  /** Dataset type name (e.g. `http_requests`). */
  dataset: string;
  /** Unique dataset ID. */
  datasetId: string;
  /** Whether log ingest is currently active for this dataset. */
  enabled: boolean;
  /** Public ID of the account or zone that owns this dataset. */
  objectId: string;
  /** Whether this dataset belongs to an account or a zone. */
  objectType: "account" | "zone" | (string & {});
  /** RFC3339 timestamp recording when the API last updated this dataset. */
  updatedAt: string;
  /** The field configuration for this dataset. */
  fields?: { enabled: boolean; name: string }[] | null;
}

export const CreateLogExplorerDatasetResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      dataset: Schema.String,
      datasetId: Schema.String,
      enabled: Schema.Boolean,
      objectId: Schema.String,
      objectType: Schema.Union([
        Schema.Literals(["account", "zone"]),
        Schema.String,
      ]),
      updatedAt: Schema.String,
      fields: Schema.optional(Schema.Union([Schema.Array(Field), Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          dataset: "dataset",
          datasetId: "dataset_id",
          enabled: "enabled",
          objectId: "object_id",
          objectType: "object_type",
          updatedAt: "updated_at",
          fields: "fields",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateLogExplorerDatasetResponse>;

export type CreateLogExplorerDatasetError = DefaultErrors;

export const createLogExplorerDatasetForAccount: API.OperationMethod<
  CreateLogExplorerDatasetForAccountRequest,
  CreateLogExplorerDatasetResponse,
  CreateLogExplorerDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLogExplorerDatasetForAccountRequest,
  output: CreateLogExplorerDatasetResponse,
  errors: [],
}));

export const createLogExplorerDatasetForZone: API.OperationMethod<
  CreateLogExplorerDatasetForZoneRequest,
  CreateLogExplorerDatasetResponse,
  CreateLogExplorerDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLogExplorerDatasetForZoneRequest,
  output: CreateLogExplorerDatasetResponse,
  errors: [],
}));

const UpdateLogExplorerDatasetBaseFields = {
  datasetId: Schema.String.pipe(T.HttpPath("datasetId")),
  enabled: Schema.Boolean,
  fields: Schema.optional(Schema.Array(Field)),
} as const;

interface UpdateLogExplorerDatasetBaseRequest {
  datasetId: string;
  /** Body param: Whether to enable or disable log ingest for this dataset. */
  enabled: boolean;
  /** Body param: Controls which fields the API ingests after the update. Defaults to all available fields when absent. */
  fields?: { enabled: boolean; name: string }[];
}

export interface UpdateLogExplorerDatasetForAccountRequest extends UpdateLogExplorerDatasetBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface UpdateLogExplorerDatasetForZoneRequest extends UpdateLogExplorerDatasetBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const UpdateLogExplorerDatasetForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...UpdateLogExplorerDatasetBaseFields,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/logs/explorer/datasets/{datasetId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateLogExplorerDatasetForAccountRequest>;

export const UpdateLogExplorerDatasetForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...UpdateLogExplorerDatasetBaseFields,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/logs/explorer/datasets/{datasetId}",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateLogExplorerDatasetForZoneRequest>;

export interface UpdateLogExplorerDatasetResponse {
  /** RFC3339 timestamp recording when the API created this dataset. */
  createdAt: string;
  /** Dataset type name (e.g. `http_requests`). */
  dataset: string;
  /** Unique dataset ID. */
  datasetId: string;
  /** Whether log ingest is currently active for this dataset. */
  enabled: boolean;
  /** Public ID of the account or zone that owns this dataset. */
  objectId: string;
  /** Whether this dataset belongs to an account or a zone. */
  objectType: "account" | "zone" | (string & {});
  /** RFC3339 timestamp recording when the API last updated this dataset. */
  updatedAt: string;
  /** The field configuration for this dataset. */
  fields?: { enabled: boolean; name: string }[] | null;
}

export const UpdateLogExplorerDatasetResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      createdAt: Schema.String,
      dataset: Schema.String,
      datasetId: Schema.String,
      enabled: Schema.Boolean,
      objectId: Schema.String,
      objectType: Schema.Union([
        Schema.Literals(["account", "zone"]),
        Schema.String,
      ]),
      updatedAt: Schema.String,
      fields: Schema.optional(Schema.Union([Schema.Array(Field), Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          dataset: "dataset",
          datasetId: "dataset_id",
          enabled: "enabled",
          objectId: "object_id",
          objectType: "object_type",
          updatedAt: "updated_at",
          fields: "fields",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateLogExplorerDatasetResponse>;

export type UpdateLogExplorerDatasetError = DefaultErrors;

export const updateLogExplorerDatasetForAccount: API.OperationMethod<
  UpdateLogExplorerDatasetForAccountRequest,
  UpdateLogExplorerDatasetResponse,
  UpdateLogExplorerDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLogExplorerDatasetForAccountRequest,
  output: UpdateLogExplorerDatasetResponse,
  errors: [],
}));

export const updateLogExplorerDatasetForZone: API.OperationMethod<
  UpdateLogExplorerDatasetForZoneRequest,
  UpdateLogExplorerDatasetResponse,
  UpdateLogExplorerDatasetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLogExplorerDatasetForZoneRequest,
  output: UpdateLogExplorerDatasetResponse,
  errors: [],
}));

// =============================================================================
// LogExplorerDatasetAvailable
// =============================================================================

const ListLogExplorerDatasetAvailablesBaseFields = {} as const;

interface ListLogExplorerDatasetAvailablesBaseRequest {}

export interface ListLogExplorerDatasetAvailablesForAccountRequest extends ListLogExplorerDatasetAvailablesBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface ListLogExplorerDatasetAvailablesForZoneRequest extends ListLogExplorerDatasetAvailablesBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const ListLogExplorerDatasetAvailablesForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...ListLogExplorerDatasetAvailablesBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/logs/explorer/datasets/available",
      }),
    ),
  ) as unknown as Schema.Codec<ListLogExplorerDatasetAvailablesForAccountRequest>;

export const ListLogExplorerDatasetAvailablesForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...ListLogExplorerDatasetAvailablesBaseFields,
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/logs/explorer/datasets/available",
      }),
    ),
  ) as unknown as Schema.Codec<ListLogExplorerDatasetAvailablesForZoneRequest>;

export interface ListLogExplorerDatasetAvailablesResponse {
  result: {
    dataset: string;
    objectType: "account" | "zone" | (string & {});
    schema: {
      properties?: Record<string, unknown> | null;
      required?: string[] | null;
      type?: "object" | null;
    };
    timestampField: string;
  }[];
}

export const ListLogExplorerDatasetAvailablesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListLogExplorerDatasetAvailablesResponseResult),
    }),
  ) as unknown as Schema.Codec<ListLogExplorerDatasetAvailablesResponse>;

export type ListLogExplorerDatasetAvailablesError = DefaultErrors;

export const listLogExplorerDatasetAvailablesForAccount: API.PaginatedOperationMethod<
  ListLogExplorerDatasetAvailablesForAccountRequest,
  ListLogExplorerDatasetAvailablesResponse,
  ListLogExplorerDatasetAvailablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogExplorerDatasetAvailablesForAccountRequest,
  output: ListLogExplorerDatasetAvailablesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export const listLogExplorerDatasetAvailablesForZone: API.PaginatedOperationMethod<
  ListLogExplorerDatasetAvailablesForZoneRequest,
  ListLogExplorerDatasetAvailablesResponse,
  ListLogExplorerDatasetAvailablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListLogExplorerDatasetAvailablesForZoneRequest,
  output: ListLogExplorerDatasetAvailablesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// LogExplorerQuery
// =============================================================================

const SqlLogExplorerQueryBaseFields = {} as const;

interface SqlLogExplorerQueryBaseRequest {}

export interface SqlLogExplorerQueryForAccountRequest extends SqlLogExplorerQueryBaseRequest {
  /** Path param: The Account ID to use for this endpoint. */
  accountId: string;
}

export interface SqlLogExplorerQueryForZoneRequest extends SqlLogExplorerQueryBaseRequest {
  /** Path param: The Zone ID to use for this endpoint. */
  zoneId: string;
}

export const SqlLogExplorerQueryForAccountRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      ...SqlLogExplorerQueryBaseFields,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/logs/explorer/query/sql",
      }),
    ),
  ) as unknown as Schema.Codec<SqlLogExplorerQueryForAccountRequest>;

export const SqlLogExplorerQueryForZoneRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      ...SqlLogExplorerQueryBaseFields,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/logs/explorer/query/sql",
      }),
    ),
  ) as unknown as Schema.Codec<SqlLogExplorerQueryForZoneRequest>;

export interface SqlLogExplorerQueryResponse {
  result: Record<string, unknown>[];
}

export const SqlLogExplorerQueryResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    }),
  ) as unknown as Schema.Codec<SqlLogExplorerQueryResponse>;

export type SqlLogExplorerQueryError = DefaultErrors;

export const sqlLogExplorerQueryForAccount: API.PaginatedOperationMethod<
  SqlLogExplorerQueryForAccountRequest,
  SqlLogExplorerQueryResponse,
  SqlLogExplorerQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SqlLogExplorerQueryForAccountRequest,
  output: SqlLogExplorerQueryResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export const sqlLogExplorerQueryForZone: API.PaginatedOperationMethod<
  SqlLogExplorerQueryForZoneRequest,
  SqlLogExplorerQueryResponse,
  SqlLogExplorerQueryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SqlLogExplorerQueryForZoneRequest,
  output: SqlLogExplorerQueryResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

// =============================================================================
// Rayid
// =============================================================================

export interface GetRayidRequest {
  rayID: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: The `/received` route by default returns a limited set of fields, and allows customers to override the default field set by specifying individual fields. The reasons for this are: 1. Most */
  fields?: string;
  /** Query param: By default, timestamps in responses are returned as Unix nanosecond integers. The `?timestamps=` argument can be set to change the format in which response timestamps are returned. Possib */
  timestamps?: "unix" | "unixnano" | "rfc3339" | (string & {});
}

export const GetRayidRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    rayID: Schema.String.pipe(T.HttpPath("RayID")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    fields: Schema.optional(Schema.String).pipe(T.HttpQuery("fields")),
    timestamps: Schema.optional(
      Schema.Union([
        Schema.Literals(["unix", "unixnano", "rfc3339"]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("timestamps")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/logs/rayids/{RayID}" }),
  ),
) as unknown as Schema.Codec<GetRayidRequest>;

export type GetRayidResponse = unknown;

export const GetRayidResponse = /*@__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Codec<GetRayidResponse>;

export type GetRayidError = DefaultErrors;

export const getRayid: API.OperationMethod<
  GetRayidRequest,
  GetRayidResponse,
  GetRayidError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRayidRequest,
  output: GetRayidResponse,
  errors: [],
}));

// =============================================================================
// Received
// =============================================================================

export interface GetReceivedRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Sets the (exclusive) end of the requested time frame. This can be a unix timestamp (in seconds or nanoseconds), or an absolute timestamp that conforms to RFC 3339. `end` must be at least  */
  end: string | number;
  /** Query param: When `?count=` is provided, the response will contain up to `count` results. Since results are not sorted, you are likely to get different data for repeated requests. `count` must be an i */
  count?: number;
  /** Query param: The `/received` route by default returns a limited set of fields, and allows customers to override the default field set by specifying individual fields. The reasons for this are: 1. Most */
  fields?: string;
  /** Query param: When `?sample=` is provided, a sample of matching records is returned. If `sample=0.1` then 10% of records will be returned. Sampling is random: repeated calls will not only return differ */
  sample?: number;
  /** Query param: Sets the (inclusive) beginning of the requested time frame. This can be a unix timestamp (in seconds or nanoseconds), or an absolute timestamp that conforms to RFC 3339. At this point in  */
  start?: string | number;
  /** Query param: By default, timestamps in responses are returned as Unix nanosecond integers. The `?timestamps=` argument can be set to change the format in which response timestamps are returned. Possib */
  timestamps?: "unix" | "unixnano" | "rfc3339" | (string & {});
}

export const GetReceivedRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    end: Schema.Union([Schema.String, Schema.Number]).pipe(T.HttpQuery("end")),
    count: Schema.optional(Schema.Number).pipe(T.HttpQuery("count")),
    fields: Schema.optional(Schema.String).pipe(T.HttpQuery("fields")),
    sample: Schema.optional(Schema.Number).pipe(T.HttpQuery("sample")),
    start: Schema.optional(Schema.Union([Schema.String, Schema.Number])).pipe(
      T.HttpQuery("start"),
    ),
    timestamps: Schema.optional(
      Schema.Union([
        Schema.Literals(["unix", "unixnano", "rfc3339"]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("timestamps")),
  }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/logs/received" })),
) as unknown as Schema.Codec<GetReceivedRequest>;

export type GetReceivedResponse = unknown;

export const GetReceivedResponse = /*@__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Codec<GetReceivedResponse>;

export type GetReceivedError = DefaultErrors;

export const getReceived: API.OperationMethod<
  GetReceivedRequest,
  GetReceivedResponse,
  GetReceivedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetReceivedRequest,
  output: GetReceivedResponse,
  errors: [],
}));

// =============================================================================
// ReceivedField
// =============================================================================

export interface GetReceivedFieldRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetReceivedFieldRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/logs/received/fields" }),
    ),
  ) as unknown as Schema.Codec<GetReceivedFieldRequest>;

export interface GetReceivedFieldResponse {
  key?: string | null;
}

export const GetReceivedFieldResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }),
  ) as unknown as Schema.Codec<GetReceivedFieldResponse>;

export type GetReceivedFieldError = DefaultErrors;

export const getReceivedField: API.OperationMethod<
  GetReceivedFieldRequest,
  GetReceivedFieldResponse,
  GetReceivedFieldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetReceivedFieldRequest,
  output: GetReceivedFieldResponse,
  errors: [],
}));
