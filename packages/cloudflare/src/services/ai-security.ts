/**
 * Cloudflare AI-SECURITY API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service ai-security
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

export class AiSecurityNotEntitled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<AiSecurityNotEntitled>()("AiSecurityNotEntitled", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 13101, message: { includes: "not entitled" } }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class ZoneNotAuthorized extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ZoneNotAuthorized>()("ZoneNotAuthorized", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 10000, message: { includes: "Authentication error" } }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Topic {
  /** Unique label identifier. Must contain only lowercase letters (a–z), digits (0–9), and hyphens. */
  label: string;
  /** Description of the topic category. Must contain only printable ASCII characters. */
  topic: string;
}
const Topic = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    label: Schema.String,
    topic: Schema.String,
  }),
) as unknown as Schema.Codec<Topic>;

// =============================================================================
// AiSecurity
// =============================================================================

export interface GetAiSecurityRequest {
  /** Defines the zone. */
  zoneId: string;
}

export const GetAiSecurityRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/ai-security/settings" }),
  ),
) as unknown as Schema.Codec<GetAiSecurityRequest>;

export interface GetAiSecurityResponse {
  /** Whether AI Security for Apps is enabled on the zone. */
  enabled?: boolean | null;
}

export const GetAiSecurityResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetAiSecurityResponse>;

export type GetAiSecurityError =
  | DefaultErrors
  | AiSecurityNotEntitled
  | ZoneNotAuthorized
  | Forbidden;

export const getAiSecurity: API.OperationMethod<
  GetAiSecurityRequest,
  GetAiSecurityResponse,
  GetAiSecurityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAiSecurityRequest,
  output: GetAiSecurityResponse,
  errors: [AiSecurityNotEntitled, ZoneNotAuthorized, Forbidden],
}));

export interface PutAiSecurityRequest {
  /** Path param: Defines the zone. */
  zoneId: string;
  /** Body param: Whether AI Security for Apps is enabled on the zone. */
  enabled?: boolean;
}

export const PutAiSecurityRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    enabled: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "PUT", path: "/zones/{zone_id}/ai-security/settings" }),
  ),
) as unknown as Schema.Codec<PutAiSecurityRequest>;

export interface PutAiSecurityResponse {
  /** Whether AI Security for Apps is enabled on the zone. */
  enabled?: boolean | null;
}

export const PutAiSecurityResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutAiSecurityResponse>;

export type PutAiSecurityError =
  | DefaultErrors
  | AiSecurityNotEntitled
  | ZoneNotAuthorized
  | Forbidden;

export const putAiSecurity: API.OperationMethod<
  PutAiSecurityRequest,
  PutAiSecurityResponse,
  PutAiSecurityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAiSecurityRequest,
  output: PutAiSecurityResponse,
  errors: [AiSecurityNotEntitled, ZoneNotAuthorized, Forbidden],
}));

// =============================================================================
// CustomTopic
// =============================================================================

export interface GetCustomTopicRequest {
  /** Defines the zone. */
  zoneId: string;
}

export const GetCustomTopicRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/zones/{zone_id}/ai-security/custom-topics",
    }),
  ),
) as unknown as Schema.Codec<GetCustomTopicRequest>;

export interface GetCustomTopicResponse {
  /** Custom topic categories for AI Security for Apps content detection. */
  topics?: { label: string; topic: string }[] | null;
}

export const GetCustomTopicResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      topics: Schema.optional(Schema.Union([Schema.Array(Topic), Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<GetCustomTopicResponse>;

export type GetCustomTopicError =
  | DefaultErrors
  | AiSecurityNotEntitled
  | ZoneNotAuthorized
  | Forbidden;

export const getCustomTopic: API.OperationMethod<
  GetCustomTopicRequest,
  GetCustomTopicResponse,
  GetCustomTopicError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCustomTopicRequest,
  output: GetCustomTopicResponse,
  errors: [AiSecurityNotEntitled, ZoneNotAuthorized, Forbidden],
}));

export interface PutCustomTopicRequest {
  /** Path param: Defines the zone. */
  zoneId: string;
  /** Body param: Custom topic categories for AI Security for Apps content detection. */
  topics?: { label: string; topic: string }[];
}

export const PutCustomTopicRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    topics: Schema.optional(Schema.Array(Topic)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/zones/{zone_id}/ai-security/custom-topics",
    }),
  ),
) as unknown as Schema.Codec<PutCustomTopicRequest>;

export interface PutCustomTopicResponse {
  /** Custom topic categories for AI Security for Apps content detection. */
  topics?: { label: string; topic: string }[] | null;
}

export const PutCustomTopicResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      topics: Schema.optional(Schema.Union([Schema.Array(Topic), Schema.Null])),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Codec<PutCustomTopicResponse>;

export type PutCustomTopicError =
  | DefaultErrors
  | AiSecurityNotEntitled
  | ZoneNotAuthorized
  | Forbidden;

export const putCustomTopic: API.OperationMethod<
  PutCustomTopicRequest,
  PutCustomTopicResponse,
  PutCustomTopicError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutCustomTopicRequest,
  output: PutCustomTopicResponse,
  errors: [AiSecurityNotEntitled, ZoneNotAuthorized, Forbidden],
}));
