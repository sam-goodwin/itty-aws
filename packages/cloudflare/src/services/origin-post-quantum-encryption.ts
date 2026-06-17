/**
 * Cloudflare ORIGIN-POST-QUANTUM-ENCRYPTION API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service origin-post-quantum-encryption
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

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class InvalidSettingValue extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidSettingValue>()("InvalidSettingValue", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1146, message: { includes: "origin_post_quantum_encryption" } }],
) {}

export class InvalidZoneIdentifier extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidZoneIdentifier>()("InvalidZoneIdentifier", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 7003 }],
) {}

// =============================================================================
// OriginPostQuantumEncryption
// =============================================================================

export interface GetOriginPostQuantumEncryptionRequest {
  /** Identifier. */
  zoneId: string;
}

export const GetOriginPostQuantumEncryptionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/cache/origin_post_quantum_encryption",
      }),
    ),
  ) as unknown as Schema.Schema<GetOriginPostQuantumEncryptionRequest>;

export interface GetOriginPostQuantumEncryptionResponse {
  /** The identifier of the caching setting. */
  id: "origin_pqe";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Origin Post Quantum Encryption Setting. */
  value: "preferred" | "supported" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const GetOriginPostQuantumEncryptionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("origin_pqe"),
      editable: Schema.Boolean,
      value: Schema.Union([
        Schema.Literals(["preferred", "supported", "off"]),
        Schema.String,
      ]),
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
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetOriginPostQuantumEncryptionResponse>;

export type GetOriginPostQuantumEncryptionError =
  | DefaultErrors
  | InvalidZoneIdentifier
  | Forbidden;

export const getOriginPostQuantumEncryption: API.OperationMethod<
  GetOriginPostQuantumEncryptionRequest,
  GetOriginPostQuantumEncryptionResponse,
  GetOriginPostQuantumEncryptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOriginPostQuantumEncryptionRequest,
  output: GetOriginPostQuantumEncryptionResponse,
  errors: [InvalidZoneIdentifier, Forbidden],
}));

export interface PutOriginPostQuantumEncryptionRequest {
  /** Path param: Identifier. */
  zoneId: string;
  /** Body param: Value of the Origin Post Quantum Encryption Setting. */
  value: "preferred" | "supported" | "off" | (string & {});
}

export const PutOriginPostQuantumEncryptionRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      value: Schema.Union([
        Schema.Literals(["preferred", "supported", "off"]),
        Schema.String,
      ]),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/cache/origin_post_quantum_encryption",
      }),
    ),
  ) as unknown as Schema.Schema<PutOriginPostQuantumEncryptionRequest>;

export interface PutOriginPostQuantumEncryptionResponse {
  /** The identifier of the caching setting. */
  id: "origin_pqe";
  /** Whether the setting is editable. */
  editable: boolean;
  /** Value of the Origin Post Quantum Encryption Setting. */
  value: "preferred" | "supported" | "off" | (string & {});
  /** Last time this setting was modified. */
  modifiedOn?: string | null;
}

export const PutOriginPostQuantumEncryptionResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.Literal("origin_pqe"),
      editable: Schema.Boolean,
      value: Schema.Union([
        Schema.Literals(["preferred", "supported", "off"]),
        Schema.String,
      ]),
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
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PutOriginPostQuantumEncryptionResponse>;

export type PutOriginPostQuantumEncryptionError =
  | DefaultErrors
  | InvalidZoneIdentifier
  | InvalidSettingValue
  | Forbidden;

export const putOriginPostQuantumEncryption: API.OperationMethod<
  PutOriginPostQuantumEncryptionRequest,
  PutOriginPostQuantumEncryptionResponse,
  PutOriginPostQuantumEncryptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutOriginPostQuantumEncryptionRequest,
  output: PutOriginPostQuantumEncryptionResponse,
  errors: [InvalidZoneIdentifier, InvalidSettingValue, Forbidden],
}));
