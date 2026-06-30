/**
 * Cloudflare MANAGED-TRANSFORMS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service managed-transforms
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

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface ManagedRequestHeader {
  /** The human-readable identifier of the Managed Transform. */
  id: string;
  /** Whether the Managed Transform is enabled. */
  enabled: boolean;
  /** Whether the Managed Transform conflicts with the currently-enabled Managed Transforms. */
  hasConflict: boolean;
  /** The Managed Transforms that this Managed Transform conflicts with. */
  conflictsWith?: string[] | null;
}
const ManagedRequestHeader = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    enabled: Schema.Boolean,
    hasConflict: Schema.Boolean,
    conflictsWith: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      enabled: "enabled",
      hasConflict: "has_conflict",
      conflictsWith: "conflicts_with",
    }),
  ),
) as unknown as Schema.Codec<ManagedRequestHeader>;

interface ManagedRequestHeader2 {
  /** The human-readable identifier of the Managed Transform. */
  id: string;
  /** Whether the Managed Transform is enabled. */
  enabled: boolean;
}
const ManagedRequestHeader2 = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    enabled: Schema.Boolean,
  }),
) as unknown as Schema.Codec<ManagedRequestHeader2>;

// =============================================================================
// ManagedTransform
// =============================================================================

export interface ListManagedTransformsRequest {
  /** The unique ID of the zone. */
  zoneId: string;
}

export const ListManagedTransformsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/zones/{zone_id}/managed_headers" }),
    ),
  ) as unknown as Schema.Codec<ListManagedTransformsRequest>;

export interface ListManagedTransformsResponse {
  /** The list of Managed Request Transforms. */
  managedRequestHeaders:
    | {
        id: string;
        enabled: boolean;
        hasConflict: boolean;
        conflictsWith?: string[] | null;
      }[]
    | null;
  /** The list of Managed Response Transforms. */
  managedResponseHeaders:
    | {
        id: string;
        enabled: boolean;
        hasConflict: boolean;
        conflictsWith?: string[] | null;
      }[]
    | null;
}

export const ListManagedTransformsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      managedRequestHeaders: Schema.Union([
        Schema.Array(ManagedRequestHeader),
        Schema.Null,
      ]),
      managedResponseHeaders: Schema.Union([
        Schema.Array(ManagedRequestHeader),
        Schema.Null,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          managedRequestHeaders: "managed_request_headers",
          managedResponseHeaders: "managed_response_headers",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<ListManagedTransformsResponse>;

export type ListManagedTransformsError = DefaultErrors | Forbidden;

export const listManagedTransforms: API.OperationMethod<
  ListManagedTransformsRequest,
  ListManagedTransformsResponse,
  ListManagedTransformsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListManagedTransformsRequest,
  output: ListManagedTransformsResponse,
  errors: [Forbidden],
}));

export interface PatchManagedTransformRequest {
  /** Path param: The unique ID of the zone. */
  zoneId: string;
  /** Body param: The list of Managed Request Transforms. */
  managedRequestHeaders?: { id: string; enabled: boolean }[];
  /** Body param: The list of Managed Response Transforms. */
  managedResponseHeaders?: { id: string; enabled: boolean }[];
}

export const PatchManagedTransformRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      managedRequestHeaders: Schema.optional(
        Schema.Array(ManagedRequestHeader2),
      ),
      managedResponseHeaders: Schema.optional(
        Schema.Array(ManagedRequestHeader2),
      ),
    }).pipe(
      Schema.encodeKeys({
        managedRequestHeaders: "managed_request_headers",
        managedResponseHeaders: "managed_response_headers",
      }),
      T.Http({ method: "PATCH", path: "/zones/{zone_id}/managed_headers" }),
    ),
  ) as unknown as Schema.Codec<PatchManagedTransformRequest>;

export interface PatchManagedTransformResponse {
  /** The list of Managed Request Transforms. */
  managedRequestHeaders:
    | {
        id: string;
        enabled: boolean;
        hasConflict: boolean;
        conflictsWith?: string[] | null;
      }[]
    | null;
  /** The list of Managed Response Transforms. */
  managedResponseHeaders:
    | {
        id: string;
        enabled: boolean;
        hasConflict: boolean;
        conflictsWith?: string[] | null;
      }[]
    | null;
}

export const PatchManagedTransformResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      managedRequestHeaders: Schema.Union([
        Schema.Array(ManagedRequestHeader),
        Schema.Null,
      ]),
      managedResponseHeaders: Schema.Union([
        Schema.Array(ManagedRequestHeader),
        Schema.Null,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          managedRequestHeaders: "managed_request_headers",
          managedResponseHeaders: "managed_response_headers",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PatchManagedTransformResponse>;

export type PatchManagedTransformError = DefaultErrors | Forbidden;

export const patchManagedTransform: API.OperationMethod<
  PatchManagedTransformRequest,
  PatchManagedTransformResponse,
  PatchManagedTransformError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchManagedTransformRequest,
  output: PatchManagedTransformResponse,
  errors: [Forbidden],
}));

export interface DeleteManagedTransformRequest {
  /** The unique ID of the zone. */
  zoneId: string;
}

export const DeleteManagedTransformRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({ method: "DELETE", path: "/zones/{zone_id}/managed_headers" }),
    ),
  ) as unknown as Schema.Codec<DeleteManagedTransformRequest>;

export type DeleteManagedTransformResponse = unknown;

export const DeleteManagedTransformResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<DeleteManagedTransformResponse>;

export type DeleteManagedTransformError = DefaultErrors | Forbidden;

export const deleteManagedTransform: API.OperationMethod<
  DeleteManagedTransformRequest,
  DeleteManagedTransformResponse,
  DeleteManagedTransformError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteManagedTransformRequest,
  output: DeleteManagedTransformResponse,
  errors: [Forbidden],
}));
