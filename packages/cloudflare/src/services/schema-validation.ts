/**
 * Cloudflare SCHEMA-VALIDATION API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service schema-validation
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

export class InvalidSchema extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidSchema>()("InvalidSchema", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 50010 }],
) {}

export class OperationNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<OperationNotFound>()("OperationNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10404 }],
) {}

export class SchemaNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SchemaNotFound>()("SchemaNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 19400 }],
) {}

export class UnentitledMitigationAction extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<UnentitledMitigationAction>()(
    "UnentitledMitigationAction",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 11400 }],
) {}

export class ZonePurged extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZonePurged>()("ZonePurged", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ message: { includes: "has been purged" } }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ListSchemasResponseResult {
  createdAt: string;
  /** The kind of the schema */
  kind: "openapi_v3";
  /** A human-readable name for the schema */
  name: string;
  /** A unique identifier of this schema */
  schemaId: string;
  /** The raw schema, e.g., the OpenAPI schema, either as JSON or YAML */
  source: string;
  /** An indicator if this schema is enabled */
  validationEnabled?: boolean | null;
}
const ListSchemasResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      createdAt: Schema.String,
      kind: Schema.Literal("openapi_v3"),
      name: Schema.String,
      schemaId: Schema.String,
      source: Schema.String,
      validationEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        createdAt: "created_at",
        kind: "kind",
        name: "name",
        schemaId: "schema_id",
        source: "source",
        validationEnabled: "validation_enabled",
      }),
    ),
) as unknown as Schema.Codec<ListSchemasResponseResult>;

interface ListSchemasResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListSchemasResponseResultInfo =
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
  ) as unknown as Schema.Codec<ListSchemasResponseResultInfo>;

interface ListSettingOperationsResponseResult {
  /** When set, this applies a mitigation action to this operation which supersedes a global schema validation setting just for this operation  - `"log"` - log request when request does not conform to schem */
  mitigationAction: "log" | "block" | "none" | (string & {});
  /** UUID. */
  operationId: string;
}
const ListSettingOperationsResponseResult =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mitigationAction: Schema.Union([
        Schema.Literals(["log", "block", "none"]),
        Schema.String,
      ]),
      operationId: Schema.String,
    }).pipe(
      Schema.encodeKeys({
        mitigationAction: "mitigation_action",
        operationId: "operation_id",
      }),
    ),
  ) as unknown as Schema.Codec<ListSettingOperationsResponseResult>;

// =============================================================================
// Schema
// =============================================================================

export interface GetSchemaRequest {
  schemaId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Query param: Omit the source-files of schemas and only retrieve their meta-data. */
  omitSource?: boolean;
}

export const GetSchemaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    schemaId: Schema.String.pipe(T.HttpPath("schemaId")),
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    omitSource: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("omit_source"),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/schema_validation/schemas/{schemaId}",
    }),
  ),
) as unknown as Schema.Codec<GetSchemaRequest>;

export interface GetSchemaResponse {
  createdAt: string;
  /** The kind of the schema */
  kind: "openapi_v3";
  /** A human-readable name for the schema */
  name: string;
  /** A unique identifier of this schema */
  schemaId: string;
  /** The raw schema, e.g., the OpenAPI schema, either as JSON or YAML */
  source: string;
  /** An indicator if this schema is enabled */
  validationEnabled?: boolean | null;
}

export const GetSchemaResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      createdAt: Schema.String,
      kind: Schema.Literal("openapi_v3"),
      name: Schema.String,
      schemaId: Schema.String,
      source: Schema.String,
      validationEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          kind: "kind",
          name: "name",
          schemaId: "schema_id",
          source: "source",
          validationEnabled: "validation_enabled",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetSchemaResponse>;

export type GetSchemaError = DefaultErrors | SchemaNotFound | Forbidden;

export const getSchema: API.OperationMethod<
  GetSchemaRequest,
  GetSchemaResponse,
  GetSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSchemaRequest,
  output: GetSchemaResponse,
  errors: [SchemaNotFound, Forbidden],
}));

export interface ListSchemasRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
  /** Query param: Omit the source-files of schemas and only retrieve their meta-data. */
  omitSource?: boolean;
  /** Query param: Filter for enabled schemas */
  validationEnabled?: boolean;
}

export const ListSchemasRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      omitSource: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("omit_source"),
      ),
      validationEnabled: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("validation_enabled"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/schema_validation/schemas",
      }),
    ),
) as unknown as Schema.Codec<ListSchemasRequest>;

export interface ListSchemasResponse {
  result: {
    createdAt: string;
    kind: "openapi_v3";
    name: string;
    schemaId: string;
    source: string;
    validationEnabled?: boolean | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSchemasResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(ListSchemasResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListSchemasResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListSchemasResponse>;

export type ListSchemasError = DefaultErrors | ZonePurged | Forbidden;

export const listSchemas: API.PaginatedOperationMethod<
  ListSchemasRequest,
  ListSchemasResponse,
  ListSchemasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSchemasRequest,
  output: ListSchemasResponse,
  errors: [ZonePurged, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateSchemaRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The kind of the schema */
  kind: "openapi_v3";
  /** Body param: A human-readable name for the schema */
  name: string;
  /** Body param: The raw schema, e.g., the OpenAPI schema, either as JSON or YAML */
  source: string;
  /** Body param: An indicator if this schema is enabled */
  validationEnabled: boolean;
}

export const CreateSchemaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      kind: Schema.Literal("openapi_v3"),
      name: Schema.String,
      source: Schema.String,
      validationEnabled: Schema.Boolean,
    }).pipe(
      Schema.encodeKeys({
        kind: "kind",
        name: "name",
        source: "source",
        validationEnabled: "validation_enabled",
      }),
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/schema_validation/schemas",
      }),
    ),
) as unknown as Schema.Codec<CreateSchemaRequest>;

export interface CreateSchemaResponse {
  createdAt: string;
  /** The kind of the schema */
  kind: "openapi_v3";
  /** A human-readable name for the schema */
  name: string;
  /** A unique identifier of this schema */
  schemaId: string;
  /** The raw schema, e.g., the OpenAPI schema, either as JSON or YAML */
  source: string;
  /** An indicator if this schema is enabled */
  validationEnabled?: boolean | null;
}

export const CreateSchemaResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      createdAt: Schema.String,
      kind: Schema.Literal("openapi_v3"),
      name: Schema.String,
      schemaId: Schema.String,
      source: Schema.String,
      validationEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          kind: "kind",
          name: "name",
          schemaId: "schema_id",
          source: "source",
          validationEnabled: "validation_enabled",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<CreateSchemaResponse>;

export type CreateSchemaError = DefaultErrors | InvalidSchema | Forbidden;

export const createSchema: API.OperationMethod<
  CreateSchemaRequest,
  CreateSchemaResponse,
  CreateSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateSchemaRequest,
  output: CreateSchemaResponse,
  errors: [InvalidSchema, Forbidden],
}));

export interface PatchSchemaRequest {
  schemaId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Flag whether schema is enabled for validation. */
  validationEnabled?: boolean;
}

export const PatchSchemaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      schemaId: Schema.String.pipe(T.HttpPath("schemaId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      validationEnabled: Schema.optional(Schema.Boolean),
    }).pipe(
      Schema.encodeKeys({ validationEnabled: "validation_enabled" }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/schema_validation/schemas/{schemaId}",
      }),
    ),
) as unknown as Schema.Codec<PatchSchemaRequest>;

export interface PatchSchemaResponse {
  createdAt: string;
  /** The kind of the schema */
  kind: "openapi_v3";
  /** A human-readable name for the schema */
  name: string;
  /** A unique identifier of this schema */
  schemaId: string;
  /** The raw schema, e.g., the OpenAPI schema, either as JSON or YAML */
  source: string;
  /** An indicator if this schema is enabled */
  validationEnabled?: boolean | null;
}

export const PatchSchemaResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      createdAt: Schema.String,
      kind: Schema.Literal("openapi_v3"),
      name: Schema.String,
      schemaId: Schema.String,
      source: Schema.String,
      validationEnabled: Schema.optional(
        Schema.Union([Schema.Boolean, Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          createdAt: "created_at",
          kind: "kind",
          name: "name",
          schemaId: "schema_id",
          source: "source",
          validationEnabled: "validation_enabled",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchSchemaResponse>;

export type PatchSchemaError = DefaultErrors | SchemaNotFound;

export const patchSchema: API.OperationMethod<
  PatchSchemaRequest,
  PatchSchemaResponse,
  PatchSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSchemaRequest,
  output: PatchSchemaResponse,
  errors: [SchemaNotFound],
}));

export interface DeleteSchemaRequest {
  schemaId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteSchemaRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      schemaId: Schema.String.pipe(T.HttpPath("schemaId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/schema_validation/schemas/{schemaId}",
      }),
    ),
) as unknown as Schema.Codec<DeleteSchemaRequest>;

export interface DeleteSchemaResponse {
  /** The ID of the schema that was just deleted */
  id?: string | null;
}

export const DeleteSchemaResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteSchemaResponse>;

export type DeleteSchemaError = DefaultErrors | SchemaNotFound;

export const deleteSchema: API.OperationMethod<
  DeleteSchemaRequest,
  DeleteSchemaResponse,
  DeleteSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSchemaRequest,
  output: DeleteSchemaResponse,
  errors: [SchemaNotFound],
}));

// =============================================================================
// Setting
// =============================================================================

export interface GetSettingRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetSettingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/schema_validation/settings",
      }),
    ),
) as unknown as Schema.Codec<GetSettingRequest>;

export interface GetSettingResponse {
  /** The default mitigation action used  Mitigation actions are as follows:  - `log` - log request when request does not conform to schema - `block` - deny access to the site when request does not conform  */
  validationDefaultMitigationAction: "none" | "log" | "block" | (string & {});
  /** When not null, this overrides global both zone level and operation level mitigation actions. This can serve as a quick way to disable schema validation for the whole zone.  - `"none"` will skip runnin */
  validationOverrideMitigationAction?: "none" | null;
}

export const GetSettingResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      validationDefaultMitigationAction: Schema.Union([
        Schema.Literals(["none", "log", "block"]),
        Schema.String,
      ]),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([Schema.Literal("none"), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          validationDefaultMitigationAction:
            "validation_default_mitigation_action",
          validationOverrideMitigationAction:
            "validation_override_mitigation_action",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetSettingResponse>;

export type GetSettingError = DefaultErrors | Forbidden;

export const getSetting: API.OperationMethod<
  GetSettingRequest,
  GetSettingResponse,
  GetSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingRequest,
  output: GetSettingResponse,
  errors: [Forbidden],
}));

export interface PutSettingRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The default mitigation action used Mitigation actions are as follows:  - `"log"` - log request when request does not conform to schema - `"block"` - deny access to the site when request do */
  validationDefaultMitigationAction: "none" | "log" | "block" | (string & {});
  /** Body param: When set, this overrides both zone level and operation level mitigation actions.  - `"none"` - skip running schema validation entirely for the request - `null` - clears any existing overri */
  validationOverrideMitigationAction?: "none" | null;
}

export const PutSettingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      validationDefaultMitigationAction: Schema.Union([
        Schema.Literals(["none", "log", "block"]),
        Schema.String,
      ]),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([Schema.Literal("none"), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        validationDefaultMitigationAction:
          "validation_default_mitigation_action",
        validationOverrideMitigationAction:
          "validation_override_mitigation_action",
      }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/schema_validation/settings",
      }),
    ),
) as unknown as Schema.Codec<PutSettingRequest>;

export interface PutSettingResponse {
  /** The default mitigation action used  Mitigation actions are as follows:  - `log` - log request when request does not conform to schema - `block` - deny access to the site when request does not conform  */
  validationDefaultMitigationAction: "none" | "log" | "block" | (string & {});
  /** When not null, this overrides global both zone level and operation level mitigation actions. This can serve as a quick way to disable schema validation for the whole zone.  - `"none"` will skip runnin */
  validationOverrideMitigationAction?: "none" | null;
}

export const PutSettingResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      validationDefaultMitigationAction: Schema.Union([
        Schema.Literals(["none", "log", "block"]),
        Schema.String,
      ]),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([Schema.Literal("none"), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          validationDefaultMitigationAction:
            "validation_default_mitigation_action",
          validationOverrideMitigationAction:
            "validation_override_mitigation_action",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutSettingResponse>;

export type PutSettingError =
  | DefaultErrors
  | UnentitledMitigationAction
  | Forbidden;

export const putSetting: API.OperationMethod<
  PutSettingRequest,
  PutSettingResponse,
  PutSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutSettingRequest,
  output: PutSettingResponse,
  errors: [UnentitledMitigationAction, Forbidden],
}));

export interface PatchSettingRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: The default mitigation action used Mitigation actions are as follows:  - `"log"` - log request when request does not conform to schema - `"block"` - deny access to the site when request do */
  validationDefaultMitigationAction?: "none" | "log" | "block" | (string & {});
  /** Body param: When set, this overrides both zone level and operation level mitigation actions.  - `"none"` - skip running schema validation entirely for the request - `null` - clears any existing overri */
  validationOverrideMitigationAction?: "none" | null;
}

export const PatchSettingRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      validationDefaultMitigationAction: Schema.optional(
        Schema.Union([
          Schema.Literals(["none", "log", "block"]),
          Schema.String,
        ]),
      ),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([Schema.Literal("none"), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        validationDefaultMitigationAction:
          "validation_default_mitigation_action",
        validationOverrideMitigationAction:
          "validation_override_mitigation_action",
      }),
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/schema_validation/settings",
      }),
    ),
) as unknown as Schema.Codec<PatchSettingRequest>;

export interface PatchSettingResponse {
  /** The default mitigation action used  Mitigation actions are as follows:  - `log` - log request when request does not conform to schema - `block` - deny access to the site when request does not conform  */
  validationDefaultMitigationAction: "none" | "log" | "block" | (string & {});
  /** When not null, this overrides global both zone level and operation level mitigation actions. This can serve as a quick way to disable schema validation for the whole zone.  - `"none"` will skip runnin */
  validationOverrideMitigationAction?: "none" | null;
}

export const PatchSettingResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      validationDefaultMitigationAction: Schema.Union([
        Schema.Literals(["none", "log", "block"]),
        Schema.String,
      ]),
      validationOverrideMitigationAction: Schema.optional(
        Schema.Union([Schema.Literal("none"), Schema.Null]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          validationDefaultMitigationAction:
            "validation_default_mitigation_action",
          validationOverrideMitigationAction:
            "validation_override_mitigation_action",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PatchSettingResponse>;

export type PatchSettingError = DefaultErrors;

export const patchSetting: API.OperationMethod<
  PatchSettingRequest,
  PatchSettingResponse,
  PatchSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchSettingRequest,
  output: PatchSettingResponse,
  errors: [],
}));

// =============================================================================
// SettingOperation
// =============================================================================

export interface GetSettingOperationRequest {
  operationId: string;
  /** Identifier. */
  zoneId: string;
}

export const GetSettingOperationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/schema_validation/settings/operations/{operationId}",
      }),
    ),
  ) as unknown as Schema.Codec<GetSettingOperationRequest>;

export interface GetSettingOperationResponse {
  /** When set, this applies a mitigation action to this operation which supersedes a global schema validation setting just for this operation  - `"log"` - log request when request does not conform to schem */
  mitigationAction?: "log" | "block" | "none" | (string & {}) | null;
  /** UUID. */
  operationId: string;
}

export const GetSettingOperationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mitigationAction: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["log", "block", "none"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      operationId: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          mitigationAction: "mitigation_action",
          operationId: "operation_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetSettingOperationResponse>;

export type GetSettingOperationError =
  | DefaultErrors
  | OperationNotFound
  | Forbidden;

export const getSettingOperation: API.OperationMethod<
  GetSettingOperationRequest,
  GetSettingOperationResponse,
  GetSettingOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSettingOperationRequest,
  output: GetSettingOperationResponse,
  errors: [OperationNotFound, Forbidden],
}));

export interface ListSettingOperationsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  page?: number;
  perPage?: number;
}

export const ListSettingOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/schema_validation/settings/operations",
      }),
    ),
  ) as unknown as Schema.Codec<ListSettingOperationsRequest>;

export interface ListSettingOperationsResponse {
  result: {
    mitigationAction: "log" | "block" | "none" | (string & {});
    operationId: string;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSettingOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(ListSettingOperationsResponseResult),
      resultInfo: Schema.optional(
        Schema.Union([ListSchemasResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Codec<ListSettingOperationsResponse>;

export type ListSettingOperationsError = DefaultErrors;

export const listSettingOperations: API.PaginatedOperationMethod<
  ListSettingOperationsRequest,
  ListSettingOperationsResponse,
  ListSettingOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSettingOperationsRequest,
  output: ListSettingOperationsResponse,
  errors: [],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface PutSettingOperationRequest {
  operationId: string;
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: When set, this applies a mitigation action to this operation  - `"log"` - log request when request does not conform to schema for this operation - `"block"` - deny access to the site when  */
  mitigationAction: "log" | "block" | "none" | null;
}

export const PutSettingOperationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      mitigationAction: Schema.Union([
        Schema.Literal("log"),
        Schema.Literal("block"),
        Schema.Literal("none"),
        Schema.Null,
      ]),
    }).pipe(
      Schema.encodeKeys({ mitigationAction: "mitigation_action" }),
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/schema_validation/settings/operations/{operationId}",
      }),
    ),
  ) as unknown as Schema.Codec<PutSettingOperationRequest>;

export interface PutSettingOperationResponse {
  /** When set, this applies a mitigation action to this operation which supersedes a global schema validation setting just for this operation  - `"log"` - log request when request does not conform to schem */
  mitigationAction: "log" | "block" | "none" | (string & {});
  /** UUID. */
  operationId: string;
}

export const PutSettingOperationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      mitigationAction: Schema.Union([
        Schema.Literals(["log", "block", "none"]),
        Schema.String,
      ]),
      operationId: Schema.String,
    })
      .pipe(
        Schema.encodeKeys({
          mitigationAction: "mitigation_action",
          operationId: "operation_id",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutSettingOperationResponse>;

export type PutSettingOperationError =
  | DefaultErrors
  | OperationNotFound
  | UnentitledMitigationAction;

export const putSettingOperation: API.OperationMethod<
  PutSettingOperationRequest,
  PutSettingOperationResponse,
  PutSettingOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutSettingOperationRequest,
  output: PutSettingOperationResponse,
  errors: [OperationNotFound, UnentitledMitigationAction],
}));

export interface DeleteSettingOperationRequest {
  operationId: string;
  /** Identifier. */
  zoneId: string;
}

export const DeleteSettingOperationRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.String.pipe(T.HttpPath("operationId")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/schema_validation/settings/operations/{operationId}",
      }),
    ),
  ) as unknown as Schema.Codec<DeleteSettingOperationRequest>;

export interface DeleteSettingOperationResponse {
  /** UUID. */
  operationId?: string | null;
}

export const DeleteSettingOperationResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      operationId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(Schema.encodeKeys({ operationId: "operation_id" }))
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<DeleteSettingOperationResponse>;

export type DeleteSettingOperationError = DefaultErrors | OperationNotFound;

export const deleteSettingOperation: API.OperationMethod<
  DeleteSettingOperationRequest,
  DeleteSettingOperationResponse,
  DeleteSettingOperationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSettingOperationRequest,
  output: DeleteSettingOperationResponse,
  errors: [OperationNotFound],
}));

export interface BulkPatchSettingOperationsRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param */
  body: Record<string, unknown>;
}

export const BulkPatchSettingOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      body: Schema.Record(Schema.String, Schema.Unknown).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/schema_validation/settings/operations",
      }),
    ),
  ) as unknown as Schema.Codec<BulkPatchSettingOperationsRequest>;

export type BulkPatchSettingOperationsResponse = Record<string, unknown>;

export const BulkPatchSettingOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Record(Schema.String, Schema.Unknown).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<BulkPatchSettingOperationsResponse>;

export type BulkPatchSettingOperationsError = DefaultErrors;

export const bulkPatchSettingOperations: API.OperationMethod<
  BulkPatchSettingOperationsRequest,
  BulkPatchSettingOperationsResponse,
  BulkPatchSettingOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkPatchSettingOperationsRequest,
  output: BulkPatchSettingOperationsResponse,
  errors: [],
}));
