/**
 * Cloudflare CACHE API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service cache
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Cache
// =============================================================================

export interface PurgeCacheRequest {
  /** Path param */
  zoneId: string;
  /** Body param: For more information on cache tags and purging by tags, please refer to [purge by cache-tags documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/). */
  tags?: string[];
}

export const PurgeCacheRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  tags: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/zones/{zone_id}/purge_cache" }),
) as unknown as Schema.Schema<PurgeCacheRequest>;

export interface PurgeCacheResponse {
  id: string;
}

export const PurgeCacheResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
}).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<PurgeCacheResponse>;

export type PurgeCacheError = DefaultErrors;

export const purgeCache: API.OperationMethod<
  PurgeCacheRequest,
  PurgeCacheResponse,
  PurgeCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PurgeCacheRequest,
  output: PurgeCacheResponse,
  errors: [],
}));

// =============================================================================
// CacheReserve
// =============================================================================

export interface GetCacheReserveRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetCacheReserveRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  },
).pipe(
  T.Http({ method: "GET", path: "/zones/{zone_id}/cache/cache_reserve" }),
) as unknown as Schema.Schema<GetCacheReserveRequest>;

export interface GetCacheReserveResponse {
  /** The identifier of the caching setting. */
  id: "cache_reserve";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Cache Reserve zone setting. */
  value: "on" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const GetCacheReserveResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("cache_reserve"),
    editable: Schema.Boolean,
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetCacheReserveResponse>;

export type GetCacheReserveError = DefaultErrors;

export const getCacheReserve: API.OperationMethod<
  GetCacheReserveRequest,
  GetCacheReserveResponse,
  GetCacheReserveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetCacheReserveRequest,
  output: GetCacheReserveResponse,
  errors: [],
}));

export interface PatchCacheReserveRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Value of the Cache Reserve zone setting. */
  value: "on" | "off" | (string & {});
}

export const PatchCacheReserveRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
  }).pipe(
    T.Http({ method: "PATCH", path: "/zones/{zone_id}/cache/cache_reserve" }),
  ) as unknown as Schema.Schema<PatchCacheReserveRequest>;

export interface PatchCacheReserveResponse {
  /** The identifier of the caching setting. */
  id: "cache_reserve";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Cache Reserve zone setting. */
  value: "on" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const PatchCacheReserveResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("cache_reserve"),
    editable: Schema.Boolean,
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<PatchCacheReserveResponse>;

export type PatchCacheReserveError = DefaultErrors;

export const patchCacheReserve: API.OperationMethod<
  PatchCacheReserveRequest,
  PatchCacheReserveResponse,
  PatchCacheReserveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchCacheReserveRequest,
  output: PatchCacheReserveResponse,
  errors: [],
}));

export interface StatusCacheReserveRequest {
  /** Identifier. */
  zoneId: string;
}

export const StatusCacheReserveRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/cache/cache_reserve_clear",
    }),
  ) as unknown as Schema.Schema<StatusCacheReserveRequest>;

export interface StatusCacheReserveResponse {
  /** ID of the zone setting. */
  id: "cache_reserve_clear";
  /** The time that the latest Cache Reserve Clear operation started. */
  startTs: string;
  /** The current state of the Cache Reserve Clear operation. */
  state: "In-progress" | "Completed" | (string & {});
  /** The time that the latest Cache Reserve Clear operation completed. */
  endTs?: string | null;
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const StatusCacheReserveResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("cache_reserve_clear"),
    startTs: Schema.String,
    state: Schema.Union([
      Schema.Literals(["In-progress", "Completed"]),
      Schema.String,
    ]),
    endTs: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        startTs: "start_ts",
        state: "state",
        endTs: "end_ts",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<StatusCacheReserveResponse>;

export type StatusCacheReserveError = DefaultErrors;

export const statusCacheReserve: API.OperationMethod<
  StatusCacheReserveRequest,
  StatusCacheReserveResponse,
  StatusCacheReserveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: StatusCacheReserveRequest,
  output: StatusCacheReserveResponse,
  errors: [],
}));

export interface ClearCacheReserveRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  body: unknown;
}

export const ClearCacheReserveRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    body: Schema.Unknown.pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/zones/{zone_id}/cache/cache_reserve_clear",
    }),
  ) as unknown as Schema.Schema<ClearCacheReserveRequest>;

export interface ClearCacheReserveResponse {
  /** ID of the zone setting. */
  id: "cache_reserve_clear";
  /** The time that the latest Cache Reserve Clear operation started. */
  startTs: string;
  /** The current state of the Cache Reserve Clear operation. */
  state: "In-progress" | "Completed" | (string & {});
  /** The time that the latest Cache Reserve Clear operation completed. */
  endTs?: string | null;
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const ClearCacheReserveResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("cache_reserve_clear"),
    startTs: Schema.String,
    state: Schema.Union([
      Schema.Literals(["In-progress", "Completed"]),
      Schema.String,
    ]),
    endTs: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        startTs: "start_ts",
        state: "state",
        endTs: "end_ts",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<ClearCacheReserveResponse>;

export type ClearCacheReserveError = DefaultErrors;

export const clearCacheReserve: API.OperationMethod<
  ClearCacheReserveRequest,
  ClearCacheReserveResponse,
  ClearCacheReserveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ClearCacheReserveRequest,
  output: ClearCacheReserveResponse,
  errors: [],
}));

// =============================================================================
// OriginCloudRegion
// =============================================================================

export interface GetOriginCloudRegionRequest {
  originIP: string;
  /** Identifier. */
  zoneId: string;
}

export const GetOriginCloudRegionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originIP: Schema.String.pipe(T.HttpPath("originIP")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/cache/origin_cloud_regions/{originIP}",
    }),
  ) as unknown as Schema.Schema<GetOriginCloudRegionRequest>;

export interface GetOriginCloudRegionResponse {
  id: "origin_public_cloud_region";
  /** Whether the setting can be modified by the current user. */
  editable: boolean;
  /** A single origin IP-to-cloud-region mapping. */
  value: {
    originIp: string;
    region: string;
    vendor: "aws" | "azure" | "gcp" | "oci" | (string & {});
    modifiedOn?: string | null;
  };
  /** Time the mapping was last modified. */
  modifiedOn?: string | null;
}

export const GetOriginCloudRegionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("origin_public_cloud_region"),
    editable: Schema.Boolean,
    value: Schema.Struct({
      originIp: Schema.String,
      region: Schema.String,
      vendor: Schema.Union([
        Schema.Literals(["aws", "azure", "gcp", "oci"]),
        Schema.String,
      ]),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        originIp: "origin-ip",
        region: "region",
        vendor: "vendor",
        modifiedOn: "modified_on",
      }),
    ),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetOriginCloudRegionResponse>;

export type GetOriginCloudRegionError = DefaultErrors;

export const getOriginCloudRegion: API.OperationMethod<
  GetOriginCloudRegionRequest,
  GetOriginCloudRegionResponse,
  GetOriginCloudRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOriginCloudRegionRequest,
  output: GetOriginCloudRegionResponse,
  errors: [],
}));

export interface ListOriginCloudRegionsRequest {
  /** Identifier. */
  zoneId: string;
}

export const ListOriginCloudRegionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/cache/origin_cloud_regions",
    }),
  ) as unknown as Schema.Schema<ListOriginCloudRegionsRequest>;

export interface ListOriginCloudRegionsResponse {
  id: "origin_public_cloud_region";
  /** Whether the setting can be modified by the current user. */
  editable: boolean;
  value: {
    originIp: string;
    region: string;
    vendor: "aws" | "azure" | "gcp" | "oci" | (string & {});
    modifiedOn?: string | null;
  }[];
  /** Time the mapping set was last modified. Null when no mappings exist. */
  modifiedOn?: string | null;
}

export const ListOriginCloudRegionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("origin_public_cloud_region"),
    editable: Schema.Boolean,
    value: Schema.Array(
      Schema.Struct({
        originIp: Schema.String,
        region: Schema.String,
        vendor: Schema.Union([
          Schema.Literals(["aws", "azure", "gcp", "oci"]),
          Schema.String,
        ]),
        modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          originIp: "origin-ip",
          region: "region",
          vendor: "vendor",
          modifiedOn: "modified_on",
        }),
      ),
    ),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<ListOriginCloudRegionsResponse>;

export type ListOriginCloudRegionsError = DefaultErrors;

export const listOriginCloudRegions: API.OperationMethod<
  ListOriginCloudRegionsRequest,
  ListOriginCloudRegionsResponse,
  ListOriginCloudRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListOriginCloudRegionsRequest,
  output: ListOriginCloudRegionsResponse,
  errors: [],
}));

export interface CreateOriginCloudRegionRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6). */
  ip: string;
  /** Body param: Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint. */
  region: string;
  /** Body param: Cloud vendor hosting the origin. Must be one of the supported vendors. */
  vendor: "aws" | "azure" | "gcp" | "oci" | (string & {});
}

export const CreateOriginCloudRegionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ip: Schema.String,
    region: Schema.String,
    vendor: Schema.Union([
      Schema.Literals(["aws", "azure", "gcp", "oci"]),
      Schema.String,
    ]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/zones/{zone_id}/cache/origin_cloud_regions",
    }),
  ) as unknown as Schema.Schema<CreateOriginCloudRegionRequest>;

export interface CreateOriginCloudRegionResponse {
  id: "origin_public_cloud_region";
  /** Whether the setting can be modified by the current user. */
  editable: boolean;
  /** A single origin IP-to-cloud-region mapping. */
  value: {
    originIp: string;
    region: string;
    vendor: "aws" | "azure" | "gcp" | "oci" | (string & {});
    modifiedOn?: string | null;
  };
  /** Time the mapping was last modified. */
  modifiedOn?: string | null;
}

export const CreateOriginCloudRegionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("origin_public_cloud_region"),
    editable: Schema.Boolean,
    value: Schema.Struct({
      originIp: Schema.String,
      region: Schema.String,
      vendor: Schema.Union([
        Schema.Literals(["aws", "azure", "gcp", "oci"]),
        Schema.String,
      ]),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        originIp: "origin-ip",
        region: "region",
        vendor: "vendor",
        modifiedOn: "modified_on",
      }),
    ),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<CreateOriginCloudRegionResponse>;

export type CreateOriginCloudRegionError = DefaultErrors;

export const createOriginCloudRegion: API.OperationMethod<
  CreateOriginCloudRegionRequest,
  CreateOriginCloudRegionResponse,
  CreateOriginCloudRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateOriginCloudRegionRequest,
  output: CreateOriginCloudRegionResponse,
  errors: [],
}));

export interface PatchOriginCloudRegionRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Origin IP address (IPv4 or IPv6). Normalized to canonical form before storage (RFC 5952 for IPv6). */
  ip: string;
  /** Body param: Cloud vendor region identifier. Must be a valid region for the specified vendor as returned by the supported_regions endpoint. */
  region: string;
  /** Body param: Cloud vendor hosting the origin. Must be one of the supported vendors. */
  vendor: "aws" | "azure" | "gcp" | "oci" | (string & {});
}

export const PatchOriginCloudRegionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    ip: Schema.String,
    region: Schema.String,
    vendor: Schema.Union([
      Schema.Literals(["aws", "azure", "gcp", "oci"]),
      Schema.String,
    ]),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/cache/origin_cloud_regions",
    }),
  ) as unknown as Schema.Schema<PatchOriginCloudRegionRequest>;

export interface PatchOriginCloudRegionResponse {
  id: "origin_public_cloud_region";
  /** Whether the setting can be modified by the current user. */
  editable: boolean;
  value: {
    originIp: string;
    region: string;
    vendor: "aws" | "azure" | "gcp" | "oci" | (string & {});
    modifiedOn?: string | null;
  }[];
  /** Time the mapping set was last modified. Null when no mappings exist. */
  modifiedOn?: string | null;
}

export const PatchOriginCloudRegionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("origin_public_cloud_region"),
    editable: Schema.Boolean,
    value: Schema.Array(
      Schema.Struct({
        originIp: Schema.String,
        region: Schema.String,
        vendor: Schema.Union([
          Schema.Literals(["aws", "azure", "gcp", "oci"]),
          Schema.String,
        ]),
        modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      }).pipe(
        Schema.encodeKeys({
          originIp: "origin-ip",
          region: "region",
          vendor: "vendor",
          modifiedOn: "modified_on",
        }),
      ),
    ),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<PatchOriginCloudRegionResponse>;

export type PatchOriginCloudRegionError = DefaultErrors;

export const patchOriginCloudRegion: API.OperationMethod<
  PatchOriginCloudRegionRequest,
  PatchOriginCloudRegionResponse,
  PatchOriginCloudRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOriginCloudRegionRequest,
  output: PatchOriginCloudRegionResponse,
  errors: [],
}));

export interface DeleteOriginCloudRegionRequest {
  originIP: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteOriginCloudRegionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    originIP: Schema.String.pipe(T.HttpPath("originIP")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/cache/origin_cloud_regions/{originIP}",
    }),
  ) as unknown as Schema.Schema<DeleteOriginCloudRegionRequest>;

export interface DeleteOriginCloudRegionResponse {
  id: "origin_public_cloud_region";
  /** Whether the setting can be modified by the current user. */
  editable: boolean;
  /** A single origin IP-to-cloud-region mapping. */
  value: {
    originIp: string;
    region: string;
    vendor: "aws" | "azure" | "gcp" | "oci" | (string & {});
    modifiedOn?: string | null;
  };
  /** Time the mapping was last modified. */
  modifiedOn?: string | null;
}

export const DeleteOriginCloudRegionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("origin_public_cloud_region"),
    editable: Schema.Boolean,
    value: Schema.Struct({
      originIp: Schema.String,
      region: Schema.String,
      vendor: Schema.Union([
        Schema.Literals(["aws", "azure", "gcp", "oci"]),
        Schema.String,
      ]),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        originIp: "origin-ip",
        region: "region",
        vendor: "vendor",
        modifiedOn: "modified_on",
      }),
    ),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<DeleteOriginCloudRegionResponse>;

export type DeleteOriginCloudRegionError = DefaultErrors;

export const deleteOriginCloudRegion: API.OperationMethod<
  DeleteOriginCloudRegionRequest,
  DeleteOriginCloudRegionResponse,
  DeleteOriginCloudRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteOriginCloudRegionRequest,
  output: DeleteOriginCloudRegionResponse,
  errors: [],
}));

export interface BulkPatchOriginCloudRegionsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  body: {
    ip: string;
    region: string;
    vendor: "aws" | "azure" | "gcp" | "oci" | (string & {});
  }[];
}

export const BulkPatchOriginCloudRegionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    body: Schema.Array(
      Schema.Struct({
        ip: Schema.String,
        region: Schema.String,
        vendor: Schema.Union([
          Schema.Literals(["aws", "azure", "gcp", "oci"]),
          Schema.String,
        ]),
      }),
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/cache/origin_cloud_regions/batch",
    }),
  ) as unknown as Schema.Schema<BulkPatchOriginCloudRegionsRequest>;

export interface BulkPatchOriginCloudRegionsResponse {
  id: "origin_public_cloud_region";
  /** Whether the setting can be modified by the current user. */
  editable: boolean;
  value: {
    failed: {
      originIp: string;
      error?: string | null;
      region?: string | null;
      vendor?: string | null;
    }[];
    succeeded: {
      originIp: string;
      error?: string | null;
      region?: string | null;
      vendor?: string | null;
    }[];
  };
  /** Time the mapping set was last modified. Null when no items were successfully applied. */
  modifiedOn?: string | null;
}

export const BulkPatchOriginCloudRegionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("origin_public_cloud_region"),
    editable: Schema.Boolean,
    value: Schema.Struct({
      failed: Schema.Array(
        Schema.Struct({
          originIp: Schema.String,
          error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          vendor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            originIp: "origin-ip",
            error: "error",
            region: "region",
            vendor: "vendor",
          }),
        ),
      ),
      succeeded: Schema.Array(
        Schema.Struct({
          originIp: Schema.String,
          error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          vendor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            originIp: "origin-ip",
            error: "error",
            region: "region",
            vendor: "vendor",
          }),
        ),
      ),
    }),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<BulkPatchOriginCloudRegionsResponse>;

export type BulkPatchOriginCloudRegionsError = DefaultErrors;

export const bulkPatchOriginCloudRegions: API.OperationMethod<
  BulkPatchOriginCloudRegionsRequest,
  BulkPatchOriginCloudRegionsResponse,
  BulkPatchOriginCloudRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkPatchOriginCloudRegionsRequest,
  output: BulkPatchOriginCloudRegionsResponse,
  errors: [],
}));

export interface BulkDeleteOriginCloudRegionsRequest {
  /** Identifier. */
  zoneId: string;
}

export const BulkDeleteOriginCloudRegionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/cache/origin_cloud_regions/batch",
    }),
  ) as unknown as Schema.Schema<BulkDeleteOriginCloudRegionsRequest>;

export interface BulkDeleteOriginCloudRegionsResponse {
  id: "origin_public_cloud_region";
  /** Whether the setting can be modified by the current user. */
  editable: boolean;
  value: {
    failed: {
      originIp: string;
      error?: string | null;
      region?: string | null;
      vendor?: string | null;
    }[];
    succeeded: {
      originIp: string;
      error?: string | null;
      region?: string | null;
      vendor?: string | null;
    }[];
  };
  /** Time the mapping set was last modified. Null when no items were successfully applied. */
  modifiedOn?: string | null;
}

export const BulkDeleteOriginCloudRegionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("origin_public_cloud_region"),
    editable: Schema.Boolean,
    value: Schema.Struct({
      failed: Schema.Array(
        Schema.Struct({
          originIp: Schema.String,
          error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          vendor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            originIp: "origin-ip",
            error: "error",
            region: "region",
            vendor: "vendor",
          }),
        ),
      ),
      succeeded: Schema.Array(
        Schema.Struct({
          originIp: Schema.String,
          error: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          region: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          vendor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            originIp: "origin-ip",
            error: "error",
            region: "region",
            vendor: "vendor",
          }),
        ),
      ),
    }),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<BulkDeleteOriginCloudRegionsResponse>;

export type BulkDeleteOriginCloudRegionsError = DefaultErrors;

export const bulkDeleteOriginCloudRegions: API.OperationMethod<
  BulkDeleteOriginCloudRegionsRequest,
  BulkDeleteOriginCloudRegionsResponse,
  BulkDeleteOriginCloudRegionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteOriginCloudRegionsRequest,
  output: BulkDeleteOriginCloudRegionsResponse,
  errors: [],
}));

// =============================================================================
// RegionalTieredCache
// =============================================================================

export interface GetRegionalTieredCacheRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetRegionalTieredCacheRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/cache/regional_tiered_cache",
    }),
  ) as unknown as Schema.Schema<GetRegionalTieredCacheRequest>;

export interface GetRegionalTieredCacheResponse {
  /** The identifier of the caching setting. */
  id: "tc_regional";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Regional Tiered Cache zone setting. */
  value: "on" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const GetRegionalTieredCacheResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("tc_regional"),
    editable: Schema.Boolean,
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetRegionalTieredCacheResponse>;

export type GetRegionalTieredCacheError = DefaultErrors;

export const getRegionalTieredCache: API.OperationMethod<
  GetRegionalTieredCacheRequest,
  GetRegionalTieredCacheResponse,
  GetRegionalTieredCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRegionalTieredCacheRequest,
  output: GetRegionalTieredCacheResponse,
  errors: [],
}));

export interface PatchRegionalTieredCacheRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Value of the Regional Tiered Cache zone setting. */
  value: "on" | "off" | (string & {});
}

export const PatchRegionalTieredCacheRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/cache/regional_tiered_cache",
    }),
  ) as unknown as Schema.Schema<PatchRegionalTieredCacheRequest>;

export interface PatchRegionalTieredCacheResponse {
  /** The identifier of the caching setting. */
  id: "tc_regional";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Regional Tiered Cache zone setting. */
  value: "on" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const PatchRegionalTieredCacheResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("tc_regional"),
    editable: Schema.Boolean,
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<PatchRegionalTieredCacheResponse>;

export type PatchRegionalTieredCacheError = DefaultErrors;

export const patchRegionalTieredCache: API.OperationMethod<
  PatchRegionalTieredCacheRequest,
  PatchRegionalTieredCacheResponse,
  PatchRegionalTieredCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchRegionalTieredCacheRequest,
  output: PatchRegionalTieredCacheResponse,
  errors: [],
}));

// =============================================================================
// RegionsOriginCloudRegion
// =============================================================================

export interface SupportedRegionsOriginCloudRegionRequest {
  /** Identifier. */
  zoneId: string;
}

export const SupportedRegionsOriginCloudRegionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/cache/origin_cloud_regions/supported_regions",
    }),
  ) as unknown as Schema.Schema<SupportedRegionsOriginCloudRegionRequest>;

export interface SupportedRegionsOriginCloudRegionResponse {
  /** Whether Cloudflare airport codes (IATA colo identifiers) were successfully resolved for the `upper_tier_colos` field on each region. When `false`, the `upper_tier_colos` arrays may be empty or incompl */
  obtainedCodes: boolean;
  /** Map of vendor name to list of supported regions. */
  vendors: Record<string, unknown>;
}

export const SupportedRegionsOriginCloudRegionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    obtainedCodes: Schema.Boolean,
    vendors: Schema.Record(Schema.String, Schema.Unknown),
  })
    .pipe(
      Schema.encodeKeys({
        obtainedCodes: "obtained_codes",
        vendors: "vendors",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<SupportedRegionsOriginCloudRegionResponse>;

export type SupportedRegionsOriginCloudRegionError = DefaultErrors;

export const supportedRegionsOriginCloudRegion: API.OperationMethod<
  SupportedRegionsOriginCloudRegionRequest,
  SupportedRegionsOriginCloudRegionResponse,
  SupportedRegionsOriginCloudRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SupportedRegionsOriginCloudRegionRequest,
  output: SupportedRegionsOriginCloudRegionResponse,
  errors: [],
}));

// =============================================================================
// SmartTieredCache
// =============================================================================

export interface GetSmartTieredCacheRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetSmartTieredCacheRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
    }),
  ) as unknown as Schema.Schema<GetSmartTieredCacheRequest>;

export interface GetSmartTieredCacheResponse {
  /** The identifier of the caching setting. */
  id: "tiered_cache_smart_topology_enable";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Smart Tiered Cache zone setting. */
  value: "on" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const GetSmartTieredCacheResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("tiered_cache_smart_topology_enable"),
    editable: Schema.Boolean,
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<GetSmartTieredCacheResponse>;

export type GetSmartTieredCacheError = DefaultErrors;

export const getSmartTieredCache: API.OperationMethod<
  GetSmartTieredCacheRequest,
  GetSmartTieredCacheResponse,
  GetSmartTieredCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSmartTieredCacheRequest,
  output: GetSmartTieredCacheResponse,
  errors: [],
}));

export interface PatchSmartTieredCacheRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Enable or disable the Smart Tiered Cache. */
  value: "on" | "off" | (string & {});
}

export const PatchSmartTieredCacheRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
    }),
  ) as unknown as Schema.Schema<PatchSmartTieredCacheRequest>;

export interface PatchSmartTieredCacheResponse {
  /** The identifier of the caching setting. */
  id: "tiered_cache_smart_topology_enable";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Smart Tiered Cache zone setting. */
  value: "on" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const PatchSmartTieredCacheResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("tiered_cache_smart_topology_enable"),
    editable: Schema.Boolean,
    value: Schema.Union([Schema.Literals(["on", "off"]), Schema.String]),
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        value: "value",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<PatchSmartTieredCacheResponse>;

export type PatchSmartTieredCacheError = DefaultErrors;

export const patchSmartTieredCache: API.OperationMethod<
  PatchSmartTieredCacheRequest,
  PatchSmartTieredCacheResponse,
  PatchSmartTieredCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSmartTieredCacheRequest,
  output: PatchSmartTieredCacheResponse,
  errors: [],
}));

export interface DeleteSmartTieredCacheRequest {
  /** Identifier. */
  zoneId: string;
}

export const DeleteSmartTieredCacheRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/zones/{zone_id}/cache/tiered_cache_smart_topology_enable",
    }),
  ) as unknown as Schema.Schema<DeleteSmartTieredCacheRequest>;

export interface DeleteSmartTieredCacheResponse {
  /** The identifier of the caching setting. */
  id: "tiered_cache_smart_topology_enable";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const DeleteSmartTieredCacheResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Literal("tiered_cache_smart_topology_enable"),
    editable: Schema.Boolean,
    modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  })
    .pipe(
      Schema.encodeKeys({
        id: "id",
        editable: "editable",
        modifiedOn: "modified_on",
      }),
    )
    .pipe(
      T.ResponsePath("result"),
    ) as unknown as Schema.Schema<DeleteSmartTieredCacheResponse>;

export type DeleteSmartTieredCacheError = DefaultErrors;

export const deleteSmartTieredCache: API.OperationMethod<
  DeleteSmartTieredCacheRequest,
  DeleteSmartTieredCacheResponse,
  DeleteSmartTieredCacheError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSmartTieredCacheRequest,
  output: DeleteSmartTieredCacheResponse,
  errors: [],
}));

// =============================================================================
// Variant
// =============================================================================

export interface GetVariantRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetVariantRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
}).pipe(
  T.Http({ method: "GET", path: "/zones/{zone_id}/cache/variants" }),
) as unknown as Schema.Schema<GetVariantRequest>;

export interface GetVariantResponse {
  /** The identifier of the caching setting. */
  id: "variants";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the zone setting. */
  value: {
    avif?: string[] | null;
    bmp?: string[] | null;
    gif?: string[] | null;
    jp2?: string[] | null;
    jpeg?: string[] | null;
    jpg?: string[] | null;
    jpg2?: string[] | null;
    png?: string[] | null;
    tif?: string[] | null;
    tiff?: string[] | null;
    webp?: string[] | null;
  };
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const GetVariantResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Literal("variants"),
  editable: Schema.Boolean,
  value: Schema.Struct({
    avif: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    bmp: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    gif: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    jp2: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    jpeg: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    jpg: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    jpg2: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    png: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tif: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tiff: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    webp: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      editable: "editable",
      value: "value",
      modifiedOn: "modified_on",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetVariantResponse>;

export type GetVariantError = DefaultErrors;

export const getVariant: API.OperationMethod<
  GetVariantRequest,
  GetVariantResponse,
  GetVariantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetVariantRequest,
  output: GetVariantResponse,
  errors: [],
}));

export interface PatchVariantRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Value of the zone setting. */
  value: {
    avif?: string[];
    bmp?: string[];
    gif?: string[];
    jp2?: string[];
    jpeg?: string[];
    jpg?: string[];
    jpg2?: string[];
    png?: string[];
    tif?: string[];
    tiff?: string[];
    webp?: string[];
  };
}

export const PatchVariantRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  value: Schema.Struct({
    avif: Schema.optional(Schema.Array(Schema.String)),
    bmp: Schema.optional(Schema.Array(Schema.String)),
    gif: Schema.optional(Schema.Array(Schema.String)),
    jp2: Schema.optional(Schema.Array(Schema.String)),
    jpeg: Schema.optional(Schema.Array(Schema.String)),
    jpg: Schema.optional(Schema.Array(Schema.String)),
    jpg2: Schema.optional(Schema.Array(Schema.String)),
    png: Schema.optional(Schema.Array(Schema.String)),
    tif: Schema.optional(Schema.Array(Schema.String)),
    tiff: Schema.optional(Schema.Array(Schema.String)),
    webp: Schema.optional(Schema.Array(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "PATCH", path: "/zones/{zone_id}/cache/variants" }),
) as unknown as Schema.Schema<PatchVariantRequest>;

export interface PatchVariantResponse {
  /** The identifier of the caching setting. */
  id: "variants";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the zone setting. */
  value: {
    avif?: string[] | null;
    bmp?: string[] | null;
    gif?: string[] | null;
    jp2?: string[] | null;
    jpeg?: string[] | null;
    jpg?: string[] | null;
    jpg2?: string[] | null;
    png?: string[] | null;
    tif?: string[] | null;
    tiff?: string[] | null;
    webp?: string[] | null;
  };
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const PatchVariantResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Literal("variants"),
  editable: Schema.Boolean,
  value: Schema.Struct({
    avif: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    bmp: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    gif: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    jp2: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    jpeg: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    jpg: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    jpg2: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    png: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tif: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    tiff: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    webp: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      editable: "editable",
      value: "value",
      modifiedOn: "modified_on",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<PatchVariantResponse>;

export type PatchVariantError = DefaultErrors;

export const patchVariant: API.OperationMethod<
  PatchVariantRequest,
  PatchVariantResponse,
  PatchVariantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchVariantRequest,
  output: PatchVariantResponse,
  errors: [],
}));

export interface DeleteVariantRequest {
  /** Identifier. */
  zoneId: string;
}

export const DeleteVariantRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
}).pipe(
  T.Http({ method: "DELETE", path: "/zones/{zone_id}/cache/variants" }),
) as unknown as Schema.Schema<DeleteVariantRequest>;

export interface DeleteVariantResponse {
  /** The identifier of the caching setting. */
  id: "variants";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const DeleteVariantResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Literal("variants"),
  editable: Schema.Boolean,
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      id: "id",
      editable: "editable",
      modifiedOn: "modified_on",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteVariantResponse>;

export type DeleteVariantError = DefaultErrors;

export const deleteVariant: API.OperationMethod<
  DeleteVariantRequest,
  DeleteVariantResponse,
  DeleteVariantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteVariantRequest,
  output: DeleteVariantResponse,
  errors: [],
}));
