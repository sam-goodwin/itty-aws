import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetEntitlementsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  application_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.optional(Schema.String),
  sku_ids: Schema.optional(Schema.String),
  guild_id: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
  after: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  exclude_ended: Schema.optional(Schema.Boolean),
  exclude_deleted: Schema.optional(Schema.Boolean),
  only_active: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "GET",
    path: "/applications/{application_id}/entitlements",
  }),
);
export type GetEntitlementsInput = typeof GetEntitlementsInput.Type;

// Output Schema
export const GetEntitlementsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    sku_id: Schema.String,
    application_id: Schema.String,
    user_id: Schema.String,
    guild_id: Schema.optional(Schema.Unknown),
    deleted: Schema.Boolean,
    starts_at: Schema.NullOr(Schema.String),
    ends_at: Schema.NullOr(Schema.String),
    type: Schema.Unknown,
    fulfilled_at: Schema.optional(Schema.NullOr(Schema.String)),
    fulfillment_status: Schema.optional(Schema.Unknown),
    consumed: Schema.optional(Schema.Boolean),
    gifter_user_id: Schema.optional(Schema.Unknown),
    parent_id: Schema.optional(Schema.Unknown),
  }),
);
export type GetEntitlementsOutput = typeof GetEntitlementsOutput.Type;

// The operation
export const getEntitlements = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetEntitlementsInput,
  outputSchema: GetEntitlementsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
