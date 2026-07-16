/**
 * Cloudflare R2-DATA-CATALOG API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service r2-data-catalog
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

export class InvalidCredential extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidCredential>()("InvalidCredential", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 30004 }, { code: 30005 }],
) {}

export class InvalidRoute extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidRoute>()("InvalidRoute", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

export class NoSuchBucket extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<NoSuchBucket>()("NoSuchBucket", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10006 }, { code: 40406 }],
) {}

export class TableNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<TableNotFound>()("TableNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10001 }, { code: 40403 }],
) {}

export class WarehouseInactive extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WarehouseInactive>()("WarehouseInactive", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 40402 }],
) {}

export class WarehouseNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<WarehouseNotFound>()("WarehouseNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 40401 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Compaction {
  /** Specifies the state of maintenance operations. */
  state: "enabled" | "disabled" | (string & {});
  /** Sets the target file size for compaction in megabytes. Defaults to "128". */
  targetSizeMb: "64" | "128" | "256" | "512" | (string & {});
}
const Compaction = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    state: Schema.Union([
      Schema.Literals(["enabled", "disabled"]),
      Schema.String,
    ]),
    targetSizeMb: Schema.Union([
      Schema.Literals(["64", "128", "256", "512"]),
      Schema.String,
    ]),
  }).pipe(
    Schema.encodeKeys({ state: "state", targetSizeMb: "target_size_mb" }),
  ),
) as unknown as Schema.Codec<Compaction>;

interface SnapshotExpiration {
  /** Specifies the maximum age for snapshots. The system deletes snapshots older than this age. Format: <number><unit> where unit is d (days), h (hours), m (minutes), or s (seconds). Examples: "7d" (7 days */
  maxSnapshotAge: string;
  /** Specifies the minimum number of snapshots to retain. Defaults to 100. */
  minSnapshotsToKeep: number;
  /** Specifies the state of maintenance operations. */
  state: "enabled" | "disabled" | (string & {});
}
const SnapshotExpiration = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    maxSnapshotAge: Schema.String,
    minSnapshotsToKeep: Schema.Number,
    state: Schema.Union([
      Schema.Literals(["enabled", "disabled"]),
      Schema.String,
    ]),
  }).pipe(
    Schema.encodeKeys({
      maxSnapshotAge: "max_snapshot_age",
      minSnapshotsToKeep: "min_snapshots_to_keep",
      state: "state",
    }),
  ),
) as unknown as Schema.Codec<SnapshotExpiration>;

interface MaintenanceConfig {
  /** Configures compaction for catalog maintenance. */
  compaction?: {
    state: "enabled" | "disabled" | (string & {});
    targetSizeMb: "64" | "128" | "256" | "512" | (string & {});
  } | null;
  /** Configures snapshot expiration settings. */
  snapshotExpiration?: {
    maxSnapshotAge: string;
    minSnapshotsToKeep: number;
    state: "enabled" | "disabled" | (string & {});
  } | null;
}
const MaintenanceConfig = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    compaction: Schema.optional(Schema.Union([Compaction, Schema.Null])),
    snapshotExpiration: Schema.optional(
      Schema.Union([SnapshotExpiration, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      compaction: "compaction",
      snapshotExpiration: "snapshot_expiration",
    }),
  ),
) as unknown as Schema.Codec<MaintenanceConfig>;

interface Compaction2 {
  /** Updates the state optionally. */
  state?: "enabled" | "disabled" | (string & {}) | null;
  /** Updates the target file size optionally. */
  targetSizeMb?: "64" | "128" | "256" | "512" | (string & {}) | null;
}
const Compaction2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    state: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.String]),
        Schema.Null,
      ]),
    ),
    targetSizeMb: Schema.optional(
      Schema.Union([
        Schema.Union([
          Schema.Literals(["64", "128", "256", "512"]),
          Schema.String,
        ]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({ state: "state", targetSizeMb: "target_size_mb" }),
  ),
) as unknown as Schema.Codec<Compaction2>;

interface SnapshotExpiration2 {
  /** Updates the maximum age for snapshots optionally. */
  maxSnapshotAge?: string | null;
  /** Updates the minimum number of snapshots to retain optionally. */
  minSnapshotsToKeep?: number | null;
  /** Updates the state optionally. */
  state?: "enabled" | "disabled" | (string & {}) | null;
}
const SnapshotExpiration2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    maxSnapshotAge: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    minSnapshotsToKeep: Schema.optional(
      Schema.Union([Schema.Number, Schema.Null]),
    ),
    state: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["enabled", "disabled"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }).pipe(
    Schema.encodeKeys({
      maxSnapshotAge: "max_snapshot_age",
      minSnapshotsToKeep: "min_snapshots_to_keep",
      state: "state",
    }),
  ),
) as unknown as Schema.Codec<SnapshotExpiration2>;

interface Detail {
  /** Specifies the hierarchical namespace parts as an array of strings. For example, ["bronze", "analytics"] represents the namespace "bronze.analytics". */
  namespace: string[];
  /** Contains the UUID that persists across renames. */
  namespaceUuid: string;
  /** Indicates the creation timestamp in ISO 8601 format. */
  createdAt?: string | null;
  /** Shows the last update timestamp in ISO 8601 format. Null if never updated. */
  updatedAt?: string | null;
}
const Detail = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    namespace: Schema.Array(Schema.String),
    namespaceUuid: Schema.String,
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      namespace: "namespace",
      namespaceUuid: "namespace_uuid",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }),
  ),
) as unknown as Schema.Codec<Detail>;

interface Identifier {
  /** Specifies the table name. */
  name: string;
  /** Specifies the hierarchical namespace parts as an array of strings. For example, ["bronze", "analytics"] represents the namespace "bronze.analytics". */
  namespace: string[];
}
const Identifier = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    namespace: Schema.Array(Schema.String),
  }),
) as unknown as Schema.Codec<Identifier>;

interface Detail2 {
  /** Specifies a unique table identifier within a catalog. */
  identifier: { name: string; namespace: string[] };
  /** Contains the UUID that persists across renames. */
  tableUuid: string;
  /** Indicates the creation timestamp in ISO 8601 format. */
  createdAt?: string | null;
  /** Specifies the base S3 URI for table storage location. */
  location?: string | null;
  /** Contains the S3 URI to table metadata file. Null for staged tables. */
  metadataLocation?: string | null;
  /** Shows the last update timestamp in ISO 8601 format. Null if never updated. */
  updatedAt?: string | null;
}
const Detail2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    identifier: Identifier,
    tableUuid: Schema.String,
    createdAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    location: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    metadataLocation: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    updatedAt: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      identifier: "identifier",
      tableUuid: "table_uuid",
      createdAt: "created_at",
      location: "location",
      metadataLocation: "metadata_location",
      updatedAt: "updated_at",
    }),
  ),
) as unknown as Schema.Codec<Detail2>;

interface Warehouse {
  /** Use this to uniquely identify the catalog. */
  id: string;
  /** Specifies the associated R2 bucket name. */
  bucket: string;
  /** Specifies the catalog name (generated from account and bucket name). */
  name: string;
  /** Indicates the status of the catalog. */
  status: "active" | "inactive" | (string & {});
  /** Shows the credential configuration status. */
  credentialStatus?: "present" | "absent" | null;
  /** Configures maintenance for the catalog. */
  maintenanceConfig?: {
    compaction?: {
      state: "enabled" | "disabled" | (string & {});
      targetSizeMb: "64" | "128" | "256" | "512" | (string & {});
    } | null;
    snapshotExpiration?: {
      maxSnapshotAge: string;
      minSnapshotsToKeep: number;
      state: "enabled" | "disabled" | (string & {});
    } | null;
  } | null;
}
const Warehouse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    bucket: Schema.String,
    name: Schema.String,
    status: Schema.Union([
      Schema.Literals(["active", "inactive"]),
      Schema.String,
    ]),
    credentialStatus: Schema.optional(
      Schema.Union([
        Schema.Literal("present"),
        Schema.Literal("absent"),
        Schema.Null,
      ]),
    ),
    maintenanceConfig: Schema.optional(
      Schema.Union([MaintenanceConfig, Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      bucket: "bucket",
      name: "name",
      status: "status",
      credentialStatus: "credential_status",
      maintenanceConfig: "maintenance_config",
    }),
  ),
) as unknown as Schema.Codec<Warehouse>;

// =============================================================================
// Credential
// =============================================================================

export interface CreateCredentialRequest {
  bucketName: string;
  /** Path param: Use this to identify the account. */
  accountId: string;
  /** Body param: Provides the Cloudflare API token for accessing R2. */
  token: string;
}

export const CreateCredentialRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      token: Schema.String,
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/r2-catalog/{bucketName}/credential",
      }),
    ),
  ) as unknown as Schema.Codec<CreateCredentialRequest>;

export type CreateCredentialResponse = unknown;

export const CreateCredentialResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Unknown.pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<CreateCredentialResponse>;

export type CreateCredentialError =
  | DefaultErrors
  | InvalidRoute
  | InvalidCredential;

export const createCredential: API.OperationMethod<
  CreateCredentialRequest,
  CreateCredentialResponse,
  CreateCredentialError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCredentialRequest,
  output: CreateCredentialResponse,
  errors: [InvalidRoute, InvalidCredential],
}));

// =============================================================================
// MaintenanceConfig
// =============================================================================

export interface GetMaintenanceConfigRequest {
  bucketName: string;
  /** Use this to identify the account. */
  accountId: string;
}

export const GetMaintenanceConfigRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2-catalog/{bucketName}/maintenance-configs",
      }),
    ),
  ) as unknown as Schema.Codec<GetMaintenanceConfigRequest>;

export interface GetMaintenanceConfigResponse {
  /** Shows the credential configuration status. */
  credentialStatus: "present" | "absent" | (string & {});
  /** Configures maintenance for the catalog. */
  maintenanceConfig: {
    compaction?: {
      state: "enabled" | "disabled" | (string & {});
      targetSizeMb: "64" | "128" | "256" | "512" | (string & {});
    } | null;
    snapshotExpiration?: {
      maxSnapshotAge: string;
      minSnapshotsToKeep: number;
      state: "enabled" | "disabled" | (string & {});
    } | null;
  };
}

export const GetMaintenanceConfigResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      credentialStatus: Schema.Union([
        Schema.Literals(["present", "absent"]),
        Schema.String,
      ]),
      maintenanceConfig: MaintenanceConfig,
    })
      .pipe(
        Schema.encodeKeys({
          credentialStatus: "credential_status",
          maintenanceConfig: "maintenance_config",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetMaintenanceConfigResponse>;

export type GetMaintenanceConfigError =
  | DefaultErrors
  | InvalidRoute
  | WarehouseInactive
  | WarehouseNotFound;

export const getMaintenanceConfig: API.OperationMethod<
  GetMaintenanceConfigRequest,
  GetMaintenanceConfigResponse,
  GetMaintenanceConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMaintenanceConfigRequest,
  output: GetMaintenanceConfigResponse,
  errors: [InvalidRoute, WarehouseInactive, WarehouseNotFound],
}));

export interface UpdateMaintenanceConfigRequest {
  bucketName: string;
  /** Path param: Use this to identify the account. */
  accountId: string;
  /** Body param: Updates compaction configuration (all fields optional). */
  compaction?: {
    state?: "enabled" | "disabled" | (string & {});
    targetSizeMb?: "64" | "128" | "256" | "512" | (string & {});
  };
  /** Body param: Updates snapshot expiration configuration (all fields optional). */
  snapshotExpiration?: {
    maxSnapshotAge?: string;
    minSnapshotsToKeep?: number;
    state?: "enabled" | "disabled" | (string & {});
  };
}

export const UpdateMaintenanceConfigRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      compaction: Schema.optional(Compaction2),
      snapshotExpiration: Schema.optional(SnapshotExpiration2),
    }).pipe(
      Schema.encodeKeys({
        compaction: "compaction",
        snapshotExpiration: "snapshot_expiration",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/r2-catalog/{bucketName}/maintenance-configs",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateMaintenanceConfigRequest>;

export interface UpdateMaintenanceConfigResponse {
  /** Configures compaction for catalog maintenance. */
  compaction?: {
    state: "enabled" | "disabled" | (string & {});
    targetSizeMb: "64" | "128" | "256" | "512" | (string & {});
  } | null;
  /** Configures snapshot expiration settings. */
  snapshotExpiration?: {
    maxSnapshotAge: string;
    minSnapshotsToKeep: number;
    state: "enabled" | "disabled" | (string & {});
  } | null;
}

export const UpdateMaintenanceConfigResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      compaction: Schema.optional(Schema.Union([Compaction, Schema.Null])),
      snapshotExpiration: Schema.optional(
        Schema.Union([SnapshotExpiration, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          compaction: "compaction",
          snapshotExpiration: "snapshot_expiration",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateMaintenanceConfigResponse>;

export type UpdateMaintenanceConfigError =
  | DefaultErrors
  | InvalidRoute
  | WarehouseInactive;

export const updateMaintenanceConfig: API.OperationMethod<
  UpdateMaintenanceConfigRequest,
  UpdateMaintenanceConfigResponse,
  UpdateMaintenanceConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateMaintenanceConfigRequest,
  output: UpdateMaintenanceConfigResponse,
  errors: [InvalidRoute, WarehouseInactive],
}));

// =============================================================================
// Namespace
// =============================================================================

export interface ListNamespacesRequest {
  bucketName: string;
  /** Path param: Use this to identify the account. */
  accountId: string;
  /** Query param: Maximum number of namespaces to return per page. Defaults to 100, maximum 1000. */
  pageSize?: number;
  /** Query param: Opaque pagination token from a previous response. Use this to fetch the next page of results. */
  pageToken?: string;
  /** Query param: Parent namespace to filter by. Only returns direct children of this namespace. For nested namespaces, use %1F as separator (e.g., "bronze%1Fanalytics"). Omit this parameter to list top-le */
  parent?: string;
  /** Query param: Whether to include additional metadata (timestamps). When true, response includes created_at and updated_at arrays. */
  returnDetails?: boolean;
  /** Query param: Whether to include namespace UUIDs in the response. Set to true to receive the namespace_uuids array. */
  returnUuids?: boolean;
}

export const ListNamespacesRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_size")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("page_token")),
    parent: Schema.optional(Schema.String).pipe(T.HttpQuery("parent")),
    returnDetails: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("return_details"),
    ),
    returnUuids: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("return_uuids"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/r2-catalog/{bucketName}/namespaces",
    }),
  ),
) as unknown as Schema.Codec<ListNamespacesRequest>;

export interface ListNamespacesResponse {
  /** Lists namespaces in the catalog. */
  namespaces: string[][];
  /** Contains detailed metadata for each namespace when return_details is true. Each object includes the namespace, UUID, and timestamps. */
  details?:
    | {
        namespace: string[];
        namespaceUuid: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      }[]
    | null;
  /** Contains UUIDs for each namespace when return_uuids is true. The order corresponds to the namespaces array. */
  namespaceUuids?: string[] | null;
  /** Use this opaque token to fetch the next page of results. A null or absent value indicates the last page. */
  nextPageToken?: string | null;
}

export const ListNamespacesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      namespaces: Schema.Array(Schema.Array(Schema.String)),
      details: Schema.optional(
        Schema.Union([Schema.Array(Detail), Schema.Null]),
      ),
      namespaceUuids: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      nextPageToken: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          namespaces: "namespaces",
          details: "details",
          namespaceUuids: "namespace_uuids",
          nextPageToken: "next_page_token",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListNamespacesResponse>;

export type ListNamespacesError =
  | DefaultErrors
  | InvalidRoute
  | WarehouseInactive
  | WarehouseNotFound;

export const listNamespaces: API.OperationMethod<
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListNamespacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListNamespacesRequest,
  output: ListNamespacesResponse,
  errors: [InvalidRoute, WarehouseInactive, WarehouseNotFound],
}));

// =============================================================================
// NamespaceTable
// =============================================================================

export interface ListNamespaceTablesRequest {
  bucketName: string;
  namespace: string;
  /** Path param: Use this to identify the account. */
  accountId: string;
  /** Query param: Maximum number of tables to return per page. Defaults to 100, maximum 1000. */
  pageSize?: number;
  /** Query param: Opaque pagination token from a previous response. Use this to fetch the next page of results. */
  pageToken?: string;
  /** Query param: Whether to include additional metadata (timestamps, locations). When true, response includes created_at, updated_at, metadata_locations, and locations arrays. */
  returnDetails?: boolean;
  /** Query param: Whether to include table UUIDs in the response. Set to true to receive the table_uuids array. */
  returnUuids?: boolean;
}

export const ListNamespaceTablesRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      namespace: Schema.String.pipe(T.HttpPath("namespace")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("page_size")),
      pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("page_token")),
      returnDetails: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("return_details"),
      ),
      returnUuids: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("return_uuids"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2-catalog/{bucketName}/namespaces/{namespace}/tables",
      }),
    ),
  ) as unknown as Schema.Codec<ListNamespaceTablesRequest>;

export interface ListNamespaceTablesResponse {
  /** Lists tables in the namespace. */
  identifiers: { name: string; namespace: string[] }[];
  /** Contains detailed metadata for each table when return_details is true. Each object includes identifier, UUID, timestamps, and locations. */
  details?:
    | {
        identifier: { name: string; namespace: string[] };
        tableUuid: string;
        createdAt?: string | null;
        location?: string | null;
        metadataLocation?: string | null;
        updatedAt?: string | null;
      }[]
    | null;
  /** Use this opaque token to fetch the next page of results. A null or absent value indicates the last page. */
  nextPageToken?: string | null;
  /** Contains UUIDs for each table when return_uuids is true. The order corresponds to the identifiers array. */
  tableUuids?: string[] | null;
}

export const ListNamespaceTablesResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifiers: Schema.Array(Identifier),
      details: Schema.optional(
        Schema.Union([Schema.Array(Detail2), Schema.Null]),
      ),
      nextPageToken: Schema.optional(
        Schema.Union([Schema.String, Schema.Null]),
      ),
      tableUuids: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          identifiers: "identifiers",
          details: "details",
          nextPageToken: "next_page_token",
          tableUuids: "table_uuids",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListNamespaceTablesResponse>;

export type ListNamespaceTablesError =
  | DefaultErrors
  | InvalidRoute
  | WarehouseInactive;

export const listNamespaceTables: API.OperationMethod<
  ListNamespaceTablesRequest,
  ListNamespaceTablesResponse,
  ListNamespaceTablesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListNamespaceTablesRequest,
  output: ListNamespaceTablesResponse,
  errors: [InvalidRoute, WarehouseInactive],
}));

// =============================================================================
// NamespaceTableMaintenanceConfig
// =============================================================================

export interface GetNamespaceTableMaintenanceConfigRequest {
  bucketName: string;
  namespace: string;
  tableName: string;
  /** Use this to identify the account. */
  accountId: string;
}

export const GetNamespaceTableMaintenanceConfigRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      namespace: Schema.String.pipe(T.HttpPath("namespace")),
      tableName: Schema.String.pipe(T.HttpPath("tableName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2-catalog/{bucketName}/namespaces/{namespace}/tables/{tableName}/maintenance-configs",
      }),
    ),
  ) as unknown as Schema.Codec<GetNamespaceTableMaintenanceConfigRequest>;

export interface GetNamespaceTableMaintenanceConfigResponse {
  /** Configures maintenance for the table. */
  maintenanceConfig: {
    compaction?: {
      state: "enabled" | "disabled" | (string & {});
      targetSizeMb: "64" | "128" | "256" | "512" | (string & {});
    } | null;
    snapshotExpiration?: {
      maxSnapshotAge: string;
      minSnapshotsToKeep: number;
      state: "enabled" | "disabled" | (string & {});
    } | null;
  };
}

export const GetNamespaceTableMaintenanceConfigResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      maintenanceConfig: MaintenanceConfig,
    })
      .pipe(Schema.encodeKeys({ maintenanceConfig: "maintenance_config" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetNamespaceTableMaintenanceConfigResponse>;

export type GetNamespaceTableMaintenanceConfigError =
  | DefaultErrors
  | TableNotFound
  | InvalidRoute
  | WarehouseInactive;

export const getNamespaceTableMaintenanceConfig: API.OperationMethod<
  GetNamespaceTableMaintenanceConfigRequest,
  GetNamespaceTableMaintenanceConfigResponse,
  GetNamespaceTableMaintenanceConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetNamespaceTableMaintenanceConfigRequest,
  output: GetNamespaceTableMaintenanceConfigResponse,
  errors: [TableNotFound, InvalidRoute, WarehouseInactive],
}));

export interface UpdateNamespaceTableMaintenanceConfigRequest {
  bucketName: string;
  namespace: string;
  tableName: string;
  /** Path param: Use this to identify the account. */
  accountId: string;
  /** Body param: Updates compaction configuration (all fields optional). */
  compaction?: {
    state?: "enabled" | "disabled" | (string & {});
    targetSizeMb?: "64" | "128" | "256" | "512" | (string & {});
  };
  /** Body param: Updates snapshot expiration configuration (all fields optional). */
  snapshotExpiration?: {
    maxSnapshotAge?: string;
    minSnapshotsToKeep?: number;
    state?: "enabled" | "disabled" | (string & {});
  };
}

export const UpdateNamespaceTableMaintenanceConfigRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      namespace: Schema.String.pipe(T.HttpPath("namespace")),
      tableName: Schema.String.pipe(T.HttpPath("tableName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      compaction: Schema.optional(Compaction2),
      snapshotExpiration: Schema.optional(SnapshotExpiration2),
    }).pipe(
      Schema.encodeKeys({
        compaction: "compaction",
        snapshotExpiration: "snapshot_expiration",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/r2-catalog/{bucketName}/namespaces/{namespace}/tables/{tableName}/maintenance-configs",
      }),
    ),
  ) as unknown as Schema.Codec<UpdateNamespaceTableMaintenanceConfigRequest>;

export interface UpdateNamespaceTableMaintenanceConfigResponse {
  /** Configures compaction settings for table optimization. */
  compaction?: {
    state: "enabled" | "disabled" | (string & {});
    targetSizeMb: "64" | "128" | "256" | "512" | (string & {});
  } | null;
  /** Configures snapshot expiration settings. */
  snapshotExpiration?: {
    maxSnapshotAge: string;
    minSnapshotsToKeep: number;
    state: "enabled" | "disabled" | (string & {});
  } | null;
}

export const UpdateNamespaceTableMaintenanceConfigResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      compaction: Schema.optional(Schema.Union([Compaction, Schema.Null])),
      snapshotExpiration: Schema.optional(
        Schema.Union([SnapshotExpiration, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          compaction: "compaction",
          snapshotExpiration: "snapshot_expiration",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<UpdateNamespaceTableMaintenanceConfigResponse>;

export type UpdateNamespaceTableMaintenanceConfigError =
  | DefaultErrors
  | TableNotFound
  | InvalidRoute
  | WarehouseInactive;

export const updateNamespaceTableMaintenanceConfig: API.OperationMethod<
  UpdateNamespaceTableMaintenanceConfigRequest,
  UpdateNamespaceTableMaintenanceConfigResponse,
  UpdateNamespaceTableMaintenanceConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateNamespaceTableMaintenanceConfigRequest,
  output: UpdateNamespaceTableMaintenanceConfigResponse,
  errors: [TableNotFound, InvalidRoute, WarehouseInactive],
}));

// =============================================================================
// R2DataCatalog
// =============================================================================

export interface GetR2DataCatalogRequest {
  bucketName: string;
  /** Use this to identify the account. */
  accountId: string;
}

export const GetR2DataCatalogRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/r2-catalog/{bucketName}",
      }),
    ),
  ) as unknown as Schema.Codec<GetR2DataCatalogRequest>;

export interface GetR2DataCatalogResponse {
  /** Use this to uniquely identify the catalog. */
  id: string;
  /** Specifies the associated R2 bucket name. */
  bucket: string;
  /** Specifies the catalog name (generated from account and bucket name). */
  name: string;
  /** Indicates the status of the catalog. */
  status: "active" | "inactive" | (string & {});
  /** Shows the credential configuration status. */
  credentialStatus?: "present" | "absent" | null;
  /** Configures maintenance for the catalog. */
  maintenanceConfig?: {
    compaction?: {
      state: "enabled" | "disabled" | (string & {});
      targetSizeMb: "64" | "128" | "256" | "512" | (string & {});
    } | null;
    snapshotExpiration?: {
      maxSnapshotAge: string;
      minSnapshotsToKeep: number;
      state: "enabled" | "disabled" | (string & {});
    } | null;
  } | null;
}

export const GetR2DataCatalogResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      bucket: Schema.String,
      name: Schema.String,
      status: Schema.Union([
        Schema.Literals(["active", "inactive"]),
        Schema.String,
      ]),
      credentialStatus: Schema.optional(
        Schema.Union([
          Schema.Literal("present"),
          Schema.Literal("absent"),
          Schema.Null,
        ]),
      ),
      maintenanceConfig: Schema.optional(
        Schema.Union([MaintenanceConfig, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          bucket: "bucket",
          name: "name",
          status: "status",
          credentialStatus: "credential_status",
          maintenanceConfig: "maintenance_config",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetR2DataCatalogResponse>;

export type GetR2DataCatalogError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | WarehouseNotFound
  | Forbidden;

export const getR2DataCatalog: API.OperationMethod<
  GetR2DataCatalogRequest,
  GetR2DataCatalogResponse,
  GetR2DataCatalogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetR2DataCatalogRequest,
  output: GetR2DataCatalogResponse,
  errors: [NoSuchBucket, InvalidRoute, WarehouseNotFound, Forbidden],
}));

export interface ListR2DataCatalogsRequest {
  /** Use this to identify the account. */
  accountId: string;
}

export const ListR2DataCatalogsRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/r2-catalog" }),
    ),
  ) as unknown as Schema.Codec<ListR2DataCatalogsRequest>;

export interface ListR2DataCatalogsResponse {
  /** Lists catalogs in the account. */
  warehouses: {
    id: string;
    bucket: string;
    name: string;
    status: "active" | "inactive" | (string & {});
    credentialStatus?: "present" | "absent" | null;
    maintenanceConfig?: {
      compaction?: {
        state: "enabled" | "disabled" | (string & {});
        targetSizeMb: "64" | "128" | "256" | "512" | (string & {});
      } | null;
      snapshotExpiration?: {
        maxSnapshotAge: string;
        minSnapshotsToKeep: number;
        state: "enabled" | "disabled" | (string & {});
      } | null;
    } | null;
  }[];
}

export const ListR2DataCatalogsResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      warehouses: Schema.Array(Warehouse),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListR2DataCatalogsResponse>;

export type ListR2DataCatalogsError = DefaultErrors | InvalidRoute;

export const listR2DataCatalogs: API.OperationMethod<
  ListR2DataCatalogsRequest,
  ListR2DataCatalogsResponse,
  ListR2DataCatalogsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListR2DataCatalogsRequest,
  output: ListR2DataCatalogsResponse,
  errors: [InvalidRoute],
}));

export interface EnableR2DataCatalogRequest {
  bucketName: string;
  /** Use this to identify the account. */
  accountId: string;
}

export const EnableR2DataCatalogRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/r2-catalog/{bucketName}/enable",
      }),
    ),
  ) as unknown as Schema.Codec<EnableR2DataCatalogRequest>;

export interface EnableR2DataCatalogResponse {
  /** Use this to uniquely identify the activated catalog. */
  id?: string | null;
  /** Specifies the name of the activated catalog. */
  name: string;
}

export const EnableR2DataCatalogResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<EnableR2DataCatalogResponse>;

export type EnableR2DataCatalogError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute;

export const enableR2DataCatalog: API.OperationMethod<
  EnableR2DataCatalogRequest,
  EnableR2DataCatalogResponse,
  EnableR2DataCatalogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableR2DataCatalogRequest,
  output: EnableR2DataCatalogResponse,
  errors: [NoSuchBucket, InvalidRoute],
}));

export interface DisableR2DataCatalogRequest {
  bucketName: string;
  /** Use this to identify the account. */
  accountId: string;
}

export const DisableR2DataCatalogRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      bucketName: Schema.String.pipe(T.HttpPath("bucketName")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/r2-catalog/{bucketName}/disable",
      }),
    ),
  ) as unknown as Schema.Codec<DisableR2DataCatalogRequest>;

export type DisableR2DataCatalogResponse = unknown;

export const DisableR2DataCatalogResponse =
  /*@__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<DisableR2DataCatalogResponse>;

export type DisableR2DataCatalogError =
  | DefaultErrors
  | NoSuchBucket
  | InvalidRoute
  | WarehouseNotFound
  | Forbidden;

export const disableR2DataCatalog: API.OperationMethod<
  DisableR2DataCatalogRequest,
  DisableR2DataCatalogResponse,
  DisableR2DataCatalogError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableR2DataCatalogRequest,
  output: DisableR2DataCatalogResponse,
  errors: [NoSuchBucket, InvalidRoute, WarehouseNotFound, Forbidden],
}));
